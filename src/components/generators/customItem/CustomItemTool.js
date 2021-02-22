import React, { useState, useRef, useEffect } from 'react';
import FontFaceObserver from 'fontfaceobserver';
import Helmet from 'react-helmet';

import { kebabCase, compact, lowerCase } from 'lodash/fp';
import styled, { css } from 'styled-components';
import { nanoid } from 'nanoid';

import media from '../../styles/media';

import { ContentContainer } from '../../layout/ContentContainer';
import { Title } from '../../styles/shared';
import BodyText from '../../styles/BodyText';

import CustomItemControlPanel from './CustomItemControlPanel';
import CustomItemPrintableSheet, { PrintableSheet } from './CustomItemPrintableSheet';

import drawItemCanvas from './drawItemCanvas';
import drawItemCanvasToImage from './drawItemCanvasToImage';
import customItemStateReducer, { initialState } from './customItemStateReducer';
import useLocalStorage from './useLocalStorage';
import useFetchImageSource from './useFetchImageSource';

import CUSTOM_ITEM_TEMPLATES from './customItemTemplates';
import CUSTOM_ITEM_IMAGES from './customItemImages';

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
        box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1), 0 0.2rem 1rem rgba(0, 0, 0, 0.2);
    }
`;

const PrintableSheetStudioContainer = styled.div`
    position: relative;
    display: flex;

    flex-direction: column;

    justify-content: center;
    align-items: center;

    background: #ddd;

    > div {
        position: relative;
        width: ${210 / 2}mm;
        height: ${297 / 2}mm;

        box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1), 0 0.2rem 1rem rgba(0, 0, 0, 0.2);

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

const PrintableSheetClearButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

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

const CustomItemTool = ({ bodyPrintMode, setBodyPrintMode }) => {
    const canvasRef = useRef();
    const imgRef = useRef();

    const [templateMode, setTemplateMode] = useState(CUSTOM_ITEM_TEMPLATES[0].name);

    const [itemState, setItemState] = useState(initialState);
    const dispatch = (action) => (
        setItemState(customItemStateReducer(itemState, action))
    );

    const [fontsReady, setFontsReady] = useState();
    const [imageFile, setImageFile] = useState();

    const [sheetItems, setSheetItems] = useLocalStorage('mausritter.sheet-items', []);

    const selectedTemplate = CUSTOM_ITEM_TEMPLATES.find(({ name }) => name === templateMode);
    const selectedImageMode = CUSTOM_ITEM_IMAGES.find(({ name }) => name === itemState.image);

    const imageRes = itemState.resolution === 100 ? 100 : 150;

    const [imageUrl, setImageUrl] = useState();
    const imageSource = useFetchImageSource(imageUrl);

    useEffect(() => {
        if (!imageFile) return setImageUrl(null);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageFile);
        fileReader.onloadend = (event) => {
            setImageUrl(event.target.result)
        };
    }, [imageFile]);

    useEffect(() => {
        setImageUrl(selectedImageMode?.url);
    }, [selectedImageMode]);

    const handleSaveImageButtonClick = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL("img/png");

        const linkElement = document.createElement('a');
        linkElement.href = image;
        linkElement.download = `${lowerCase(itemState.name)}.png`;
        linkElement.click();
    };

    const addSheetItem = () => {
        setSheetItems([
            ...sheetItems,
            { id: nanoid(), ...itemState, imageUrl },
        ]);
    };

    const removeSheetItem = (itemId) => {
        setSheetItems(sheetItems.filter(({ id }) => id !== itemId));
    };

    const clearSheetItems = () => {
        setSheetItems([]);
    };

    const restoreSheetItem = (savedItemState) => {
        dispatch({
            type: 'set-template',
            template: savedItemState,
        });

        setTemplateMode('Freeform');
        setImageUrl(savedItemState.imageUrl);
    };

    useEffect(() => {
        Promise.all([
            new FontFaceObserver('Open Sans Condensed').load(),
            new FontFaceObserver('Open Sans Condensed', { weight: 700 }).load(),
            new FontFaceObserver('Open Sans Condensed', { style: 'italic' }).load(),
            new FontFaceObserver('Texturina', { weight: 800 }).load(),
        ]).then(() => {
            setFontsReady(true);

            drawItemCanvasToImage(
                canvasRef.current,
                imgRef.current,
                { ...itemState, imageSource }
            );
        });
    }, []);

    useEffect(() => {
        drawItemCanvasToImage(
            canvasRef.current,
            imgRef.current,
            { ...itemState, imageSource },
        );
    }, [itemState, imageSource, bodyPrintMode]);

    useEffect(() => {
        dispatch({
            type: 'set-template',
            template: selectedTemplate?.template,
        });
    }, [selectedTemplate]);

    if (bodyPrintMode) {
        return (
            <>
                <CustomItemPrintableSheet
                    sheetItems={sheetItems}
                    restoreSheetItem={restoreSheetItem}
                    removeSheetItem={removeSheetItem} />
                <PrintModeInstructions>
                    <BodyText className="small">
                        <h1>Instructions (these won't print)</h1>

                        <p>
                            Use your browser's <strong>Print</strong> or <strong>Export as PDF</strong> options. Make sure scale is set to 100%.
                        </p>

                        <br />
                        <p>
                            <button onClick={() => setBodyPrintMode(false)}>
                                Return to Item Studio
                            </button>
                        </p>
                    </BodyText>
                </PrintModeInstructions>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&family=Texturina:wght@800&display=swap"
                        rel="stylesheet" />
            </Helmet>

            <div style={{ display: 'none' }}>
                <canvas ref={canvasRef}
                        width={itemState.width * itemState.resolution}
                        height={itemState.height * itemState.resolution} />
            </div>

            <ContentContainer>
                <br />
                <Title>
                    Item card studio
                </Title>
            </ContentContainer>

            <StudioContainer>
                <ItemCreatorContainer>
                    <ItemContainer>
                        <img ref={imgRef}
                                width={itemState.width * imageRes}
                                height={itemState.height * imageRes} />
                    </ItemContainer>

                    <CustomItemControlPanel
                        templateMode={templateMode}
                        selectedTemplate={selectedTemplate}
                        selectedImageMode={selectedImageMode}
                        itemState={itemState}
                        dispatch={dispatch}
                        setTemplateMode={setTemplateMode}
                        setImageFile={setImageFile}
                        handleSaveImageButtonClick={handleSaveImageButtonClick}
                        handleSaveToSheetButtonClick={addSheetItem} />
                </ItemCreatorContainer>

                <PrintableSheetStudioContainer>
                    <div>
                        <CustomItemPrintableSheet
                                key={fontsReady}
                                interactive
                                sheetItems={sheetItems}
                                restoreSheetItem={restoreSheetItem}
                                removeSheetItem={removeSheetItem} />
                    </div>

                    <PrintableSheetPrintButton onClick={() => setBodyPrintMode(true)}>
                        Print
                    </PrintableSheetPrintButton>

                    <PrintableSheetClearButton onClick={clearSheetItems}>
                        Clear sheet
                    </PrintableSheetClearButton>
                </PrintableSheetStudioContainer>
            </StudioContainer>
        </>
    );
};

export default CustomItemTool;
