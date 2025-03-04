import React, { useState, useRef, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';

import lodash from 'lodash/fp';
const { lowerCase } = lodash;

import { styled } from 'styled-components';
import { nanoid } from 'nanoid';

import media from '../../styles/media';

import { ContentContainer } from '../../layout/ContentContainer';
import { Title } from '../../styles/shared';
import BodyText from '../../styles/BodyText';
import font from '../../styles/font';

import CustomItemControlPanel from './CustomItemControlPanel';
import CustomItemPrintableSheet, {
    PrintableSheet,
} from './CustomItemPrintableSheet';

import drawItemCanvasToImage from './drawItemCanvasToImage';
import customItemStateReducer, {
    initialState,
    ItemToolState,
    Action,
} from './customItemStateReducer';
import useLocalStorage from './useLocalStorage';
import useFetchImageSource from './useFetchImageSource';

import CUSTOM_ITEM_IMAGES from './customItemImages';
import { Trans, useTranslation } from 'react-i18next';
import { Config } from 'vike-react/Config';

const StudioContainer = styled.div`
    display: grid;
    grid-template-columns: 2fr minmax(130mm, 1fr);

    padding-left: 3rem;
    padding-right: 3rem;

    ${media.size('1000px')`
        grid-template-columns: 1fr;
    `}

    ${media.phone`
        padding-left: 1rem;
        padding-right: 1rem;
    `}
`;

const ItemCreatorContainer = styled.div`
    display: block;
`;

const ItemContainer = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    padding-bottom: 3rem;

    min-height: 300px;

    img {
        box-shadow:
            0 1rem 4rem rgba(0, 0, 0, 0.1),
            0 0.2rem 1rem rgba(0, 0, 0, 0.2);
    }
`;

const PrintableSheetStudioContainer = styled.div`
    position: relative;
    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    background: #ddd;

    > .sheet-area {
        position: relative;
        width: ${210 / 2}mm;
        height: ${297 / 2}mm;

        box-shadow:
            0 1rem 4rem rgba(0, 0, 0, 0.1),
            0 0.2rem 1rem rgba(0, 0, 0, 0.2);

        z-index: 1;

        ${PrintableSheet} {
            position: absolute;
            top: 0;
            left: 0;

            transform: scale(0.5);
            transform-origin: 0% 0%;
        }
    }

    ${media.size('1000px')`
        display: none;
    `}
`;

const PrintableSheetPrintButton = styled.button`
    margin-top: 2rem;
`;

const PrintableSheetToolsAreaRight = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

const PrintableSheetToolsAreaLeft = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;

    > button {
        margin-right: 1rem;
    }
`;

const PrintableSheetTitle = styled.div`
    position: absolute;
    top: 4.2rem;
    left: 0;
    right: 0;

    text-align: center;

    > input {
        padding: 0.4rem;
        width: 50%;
        border: 0;
        border-radius: 0.2rem;

        ${font.display};
        font-size: 1.2rem;
        text-align: center;

        letter-spacing: 0.05rem;

        background: #eee;
    }
`;

const PrintableSheetButton = styled.button``;

const PrintModeInstructions = styled.div`
    position: absolute;

    top: 1rem;
    right: 1rem;

    width: 20rem;
    padding: 1.5rem 1rem;

    background: #ddd;
    border: 1px dotted black;

    @media print {
        display: none;
    }
`;

const acceptJsonFileUpload = (
    onDataHandler: (args: { name: string; items: any[] }) => void,
) => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'application/json';
    fileInput.addEventListener('change', (event) => {
        if (!event.target) return;

        const files = (event.target as HTMLInputElement).files;
        if (!files || files.length === 0) return;

        const file = files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onloadend = (event) => {
            const result = event.target?.result;
            if (typeof result !== 'string') {
                alert('Could not load this file.');
                return;
            }

            try {
                const { name, items } = JSON.parse(result);

                if (typeof name !== 'string') {
                    throw new Error('Name is not a string');
                }

                if (!Array.isArray(items)) {
                    throw new Error('Not an array');
                }

                if (!items.every((item) => typeof item === 'object')) {
                    throw new Error('Not an array of objects');
                }

                onDataHandler({ name, items });
            } catch {
                alert('Could not load this file.');
            }
        };
    });
    fileInput.click();
};

const CustomItemTool = ({
    bodyPrintMode,
    setBodyPrintMode,
}: {
    bodyPrintMode: boolean;
    setBodyPrintMode: (mode: boolean) => void;
}) => {
    const { t } = useTranslation('item_card_studio');

    const itemTemplates = t('itemTemplates', { returnObjects: true }) as {
        id: string;
        name: string;
        template: any;
        controls: any;
    }[];

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const [templateMode, setTemplateMode] = useState(
        itemTemplates[0]?.id as string,
    );

    const [itemState, setItemState] = useState<ItemToolState>({
        ...initialState,
        ...itemTemplates[0]?.template,
    });

    useEffect(() => {
        setTemplateMode(itemTemplates[0]?.id);
        setItemState({
            ...initialState,
            ...itemTemplates[0]?.template,
        });
    }, [itemTemplates[0]?.id]);

    const dispatch = (action: Action) =>
        setItemState(customItemStateReducer(itemState, action));

    const [fontsReady, setFontsReady] = useState<boolean>(false);
    const [imageFile, setImageFile] = useState<Blob>();

    const [sheetItems, setSheetItems] = useLocalStorage<ItemToolState[]>(
        'mausritter.sheet-items',
        [],
    );

    const [sheetName, setSheetName] = useLocalStorage<string>(
        'mausritter.sheet-name',
        '',
    );

    const selectedTemplate = itemTemplates.find(
        ({ id }) => id === templateMode,
    );
    const selectedImageMode = CUSTOM_ITEM_IMAGES.find(
        ({ name }) => name === itemState.image,
    );

    const imageRes = itemState.resolution === 100 ? 100 : 150;

    const [imageUrl, setImageUrl] = useState<string | null | undefined>(null);
    const imageSource = useFetchImageSource(imageUrl);

    useEffect(() => {
        if (!imageFile) return setImageUrl(null);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile);
        fileReader.onloadend = (event) => {
            const result = event.target?.result;
            if (typeof result !== 'string') {
                alert('Could not load this file.');
                return;
            }

            setImageUrl(result);
        };
    }, [imageFile]);

    useEffect(() => {
        setImageUrl(selectedImageMode?.url);
    }, [selectedImageMode]);

    const handleSaveImageButtonClick = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const image = canvas.toDataURL('img/png');

        const linkElement = document.createElement('a');
        linkElement.href = image;
        linkElement.download = `${lowerCase(itemState.name)}.png`;
        linkElement.click();
    };

    const addSheetItem = () => {
        setSheetItems([
            ...sheetItems,
            { ...itemState, id: nanoid(), imageUrl },
        ]);
    };

    const removeSheetItem = (itemId: string) => {
        setSheetItems(sheetItems.filter(({ id }) => id !== itemId));
    };

    const clearSheetItems = () => {
        setSheetName('');
        setSheetItems([]);
    };

    const handleDownloadSheetData = () => {
        const saveData = {
            name: sheetName,
            items: sheetItems,
        };

        const dataStr =
            'data:text/json;charset=utf-8,' +
            encodeURIComponent(JSON.stringify(saveData));

        const fileName = `mausritter-items-${
            sheetName === '' ? nanoid(5) : sheetName
        }.json`;

        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', fileName);
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const handleUploadSheetData = () => {
        acceptJsonFileUpload(({ name, items }) => {
            setSheetItems([...sheetItems, ...items]);

            if (sheetName === '') {
                setSheetName(name);
            }
        });
    };

    const restoreSheetItem = (savedItemState: ItemToolState) => {
        dispatch({
            type: 'set-template',
            template: savedItemState,
        });

        setTemplateMode('freeform');
        setImageUrl(savedItemState.imageUrl);
    };

    useEffect(() => {
        Promise.all([
            new FontFaceObserver('Open Sans Condensed').load(),
            new FontFaceObserver('Open Sans Condensed', { weight: 700 }).load(),
            new FontFaceObserver('Open Sans Condensed', {
                style: 'italic',
            }).load(),
            new FontFaceObserver('Texturina', { weight: 800 }).load(),
        ]).then(() => {
            setFontsReady(true);

            drawItemCanvasToImage(canvasRef.current, imgRef.current, {
                ...itemState,
                imageSource,
            });
        });
    }, []);

    useEffect(() => {
        drawItemCanvasToImage(canvasRef.current, imgRef.current, {
            ...itemState,
            imageSource,
        });
    }, [itemState, imageSource, bodyPrintMode]);

    useEffect(() => {
        if (!selectedTemplate) return;

        dispatch({
            type: 'set-template',
            template: selectedTemplate.template,
        });
    }, [selectedTemplate?.id]);

    if (bodyPrintMode) {
        return (
            <>
                <CustomItemPrintableSheet
                    sheetItems={sheetItems}
                    restoreSheetItem={restoreSheetItem}
                    removeSheetItem={removeSheetItem}
                    interactive={false}
                />
                <PrintModeInstructions>
                    <BodyText className="small">
                        <h1>{t('printSheet.instructionsTitle')}</h1>

                        <p>
                            <Trans
                                t={t}
                                i18nKey={'printSheet.instructions'}
                                components={{
                                    strong: <strong />,
                                }}
                            />
                        </p>

                        <br />
                        <p>
                            <button onClick={() => setBodyPrintMode(false)}>
                                {t('printSheet.returnButton')}
                            </button>
                        </p>
                    </BodyText>
                </PrintModeInstructions>
            </>
        );
    }

    return (
        <>
            <Config title={t('pageTitle')} />

            <div style={{ display: 'none' }}>
                <canvas
                    ref={canvasRef}
                    width={itemState.width * itemState.resolution}
                    height={itemState.height * itemState.resolution}
                />
            </div>

            <ContentContainer>
                <br />
                <Title>{t('title')}</Title>
            </ContentContainer>

            <StudioContainer>
                <ItemCreatorContainer>
                    <ItemContainer>
                        <img
                            ref={imgRef}
                            width={itemState.width * imageRes}
                            height={itemState.height * imageRes}
                        />
                    </ItemContainer>

                    <CustomItemControlPanel
                        templateMode={templateMode}
                        itemTemplates={itemTemplates}
                        selectedTemplate={selectedTemplate}
                        selectedImageMode={selectedImageMode}
                        itemState={itemState}
                        dispatch={dispatch}
                        setTemplateMode={setTemplateMode}
                        setImageFile={setImageFile}
                        handleSaveImageButtonClick={handleSaveImageButtonClick}
                        handleSaveToSheetButtonClick={addSheetItem}
                    />
                </ItemCreatorContainer>

                <PrintableSheetStudioContainer>
                    <div className="sheet-area">
                        <CustomItemPrintableSheet
                            key={`${fontsReady}-${sheetItems.length}`} // Force re-render when fonts are ready
                            interactive
                            sheetItems={sheetItems}
                            restoreSheetItem={restoreSheetItem}
                            removeSheetItem={removeSheetItem}
                        />
                    </div>

                    <PrintableSheetPrintButton
                        onClick={() => setBodyPrintMode(true)}
                    >
                        {t('sheet.printSheetButton')}
                    </PrintableSheetPrintButton>

                    <PrintableSheetToolsAreaLeft>
                        <PrintableSheetButton
                            disabled={sheetItems.length === 0}
                            onClick={handleDownloadSheetData}
                        >
                            {t('sheet.saveSheetButton')}
                        </PrintableSheetButton>

                        <PrintableSheetButton onClick={handleUploadSheetData}>
                            {t('sheet.loadSheetButton', {
                                context: sheetItems.length > 0 && 'hasItems',
                            })}
                        </PrintableSheetButton>
                    </PrintableSheetToolsAreaLeft>

                    <PrintableSheetTitle>
                        <input
                            placeholder={t('sheet.sheetNamePlaceholder')}
                            value={sheetName}
                            onChange={(event) =>
                                setSheetName(event.target.value)
                            }
                        />
                    </PrintableSheetTitle>

                    <PrintableSheetToolsAreaRight>
                        <PrintableSheetButton onClick={clearSheetItems}>
                            {t('sheet.clearSheetButton')}
                        </PrintableSheetButton>
                    </PrintableSheetToolsAreaRight>
                </PrintableSheetStudioContainer>
            </StudioContainer>
        </>
    );
};

export default CustomItemTool;
