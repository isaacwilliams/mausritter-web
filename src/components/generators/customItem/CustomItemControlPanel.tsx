import React from 'react';
import { styled } from 'styled-components';
import lodash from 'lodash/fp';
const { kebabCase } = lodash;

import media from '../../styles/media';

import { RollButton } from '../generatorComponents';

import CUSTOM_ITEM_TEMPLATES from './customItemTemplates';
import CUSTOM_ITEM_IMAGES from './customItemImages';
import { useTranslation } from 'react-i18next';

const ControlPanel = styled.div`
    background: #fff;

    max-width: 45rem;
    margin: 0 auto;
    margin-bottom: 5rem;

    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1);
`;

const ControlPanelHeader = styled.div`
    padding: 1.5rem 1.5rem 1.1rem 1.5rem;
    border-bottom: 1px solid #aaa;
`;

const ControlPanelFooter = styled.div`
    display: flex;

    justify-content: space-between;
    align-items: center;

    padding: 1.5rem;
    border-top: 1px solid #aaa;

    ${media.phone`
        display: block;
    `}
`;

const ControlPanelTools = styled.div`
    display: grid;
    grid-template-columns: 1fr 14rem;
    min-height: 290px;

    ${media.phone`
        display: block;
    `}
`;

const ControlPanelToolsSection = styled.div`
    padding: 1.5rem;
`;

const ControlPanelToolsSectionRight = styled(ControlPanelToolsSection)`
    border-left: 1px solid #aaa;

    ${media.phone`
        border-top: 1px solid #aaa;
        border-left: 0;
    `}
`;

const StyledInputContainer = styled.label`
    display: block;
    margin-bottom: 0.5rem;

    span {
        display: inline-block;

        margin-right: 0.5rem;
        min-width: 5rem;
        font-size: 1.2rem;
    }

    input {
        display: inline-block;

        &[type='number'] {
            width: 3rem;
        }

        &[type='file'] {
            width: 11rem;
        }

        ${media.phone`
            font-size: 1rem;
        `}
    }

    &.wide {
        span {
            min-width: 10rem;
        }
    }
`;

const FooterInputContainer = styled(StyledInputContainer)`
    margin-right: auto;

    span {
        min-width: 0;
    }

    ${media.phone`
        margin-bottom: 1rem;
    `}
`;

const ControlButton = styled(RollButton)`
    margin-left: 1rem;

    ${media.phone`
        margin-left: 0rem;
        margin-right: 1rem;
    `}
`;

const ControlButtonSaveSheet = styled(ControlButton)`
    ${media.phone`
        display: none;
    `}
`;

const CustomItemInput = ({
    fieldName,
    title,
    itemState,
    dispatch,
    fieldType = 'text',
    min,
    max,
    step,
}: {
    fieldName: string;
    title: string;
    itemState: any;
    dispatch: any;
    fieldType?: string;
    min?: number;
    max?: number;
    step?: number;
}) => {
    return (
        <StyledInputContainer className="wide">
            <span>{title}:</span>
            <input
                type={fieldType}
                value={itemState[fieldName]}
                onFocus={(event) => {
                    if (fieldType === 'number') {
                        event.currentTarget.select();
                    }
                }}
                onChange={(event) => {
                    if (fieldType === 'number') {
                        event.currentTarget.select();
                    }

                    if (!event.currentTarget.validity.valid) {
                        event.currentTarget.value = itemState[fieldName];
                        return;
                    }

                    dispatch({
                        type: `set-${kebabCase(fieldName)}`,
                        [fieldName]: event.currentTarget.value,
                    });
                }}
                min={min}
                max={max}
                step={step}
            />
        </StyledInputContainer>
    );
};

const CustomItemCheckboxInput = ({
    fieldName,
    title,
    itemState,
    className,
    dispatch,
}: {
    fieldName: string;
    title: string;
    itemState: any;
    className?: string;
    dispatch: any;
}) => (
    <StyledInputContainer className={className}>
        <span>{title}:</span>
        <input
            type="checkbox"
            checked={itemState[fieldName]}
            onChange={(event) =>
                dispatch({
                    type: `set-${kebabCase(fieldName)}`,
                    [fieldName]: !itemState[fieldName],
                })
            }
        />
    </StyledInputContainer>
);

const CustomItemControlPanel = ({
    templateMode,
    itemTemplates,
    selectedTemplate,
    selectedImageMode,
    itemState,
    dispatch,
    setTemplateMode,
    setImageFile,
    handleSaveImageButtonClick,
    handleSaveToSheetButtonClick,
}) => {
    const { t } = useTranslation('item_card_studio', {
        keyPrefix: 'controlPanel',
    });

    const resolutionOptions = t('resolutionOptions', {
        returnObjects: true,
    }) as [{ dpi: number; label: string }];

    return (
        <ControlPanel>
            <ControlPanelHeader>
                <StyledInputContainer>
                    <span>{t('template')}:</span>{' '}
                    <select
                        value={templateMode}
                        onChange={(event) =>
                            setTemplateMode(event.target.value)
                        }
                    >
                        {itemTemplates.map(({ id, name }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </StyledInputContainer>
            </ControlPanelHeader>

            <ControlPanelTools>
                <ControlPanelToolsSection>
                    {selectedTemplate?.controls?.name && (
                        <CustomItemInput
                            itemState={itemState}
                            dispatch={dispatch}
                            title={t('name')}
                            fieldName="name"
                        />
                    )}

                    {selectedTemplate?.controls?.damage && (
                        <CustomItemInput
                            itemState={itemState}
                            dispatch={dispatch}
                            title={t('damageOrDef')}
                            fieldName="damage"
                        />
                    )}

                    {selectedTemplate?.controls?.mechanicDetail && (
                        <CustomItemInput
                            itemState={itemState}
                            dispatch={dispatch}
                            title={t('mechanic')}
                            fieldName="mechanicDetail"
                        />
                    )}

                    {selectedTemplate?.controls?.clearDetail && (
                        <CustomItemInput
                            itemState={itemState}
                            dispatch={dispatch}
                            title={t('clear')}
                            fieldName="clearDetail"
                        />
                    )}

                    {selectedTemplate?.controls?.classDetail && (
                        <CustomItemInput
                            itemState={itemState}
                            dispatch={dispatch}
                            title={t('class')}
                            fieldName="classDetail"
                        />
                    )}

                    {selectedTemplate?.controls?.usage && (
                        <CustomItemInput
                            itemState={itemState}
                            dispatch={dispatch}
                            title={t('usage')}
                            fieldName="usage"
                            fieldType="number"
                        />
                    )}

                    {selectedTemplate?.controls?.star && (
                        <CustomItemCheckboxInput
                            className="wide"
                            itemState={itemState}
                            dispatch={dispatch}
                            title={t('star')}
                            fieldName="star"
                        />
                    )}

                    {selectedTemplate?.controls?.image && (
                        <StyledInputContainer className="wide">
                            <span>{t('image')}:</span>{' '}
                            <select
                                value={itemState.image}
                                onChange={(event) =>
                                    dispatch({
                                        type: 'set-image',
                                        image: event.target.value,
                                    })
                                }
                            >
                                {CUSTOM_ITEM_IMAGES.map(
                                    ({ name, special, url }, i) => {
                                        if (special === 'divider')
                                            return (
                                                <option key={i} disabled>
                                                    ──────────
                                                </option>
                                            );

                                        const translatedName = t(
                                            `cardImages.${name}`,
                                        );

                                        return (
                                            <option key={name} value={name}>
                                                {translatedName}
                                            </option>
                                        );
                                    },
                                )}
                            </select>
                        </StyledInputContainer>
                    )}

                    {selectedTemplate?.controls?.image &&
                        selectedImageMode &&
                        selectedImageMode.special === 'upload' && (
                            <StyledInputContainer>
                                <span />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(event) => {
                                        setImageFile(event.target.files?.[0]);
                                    }}
                                />
                            </StyledInputContainer>
                        )}
                </ControlPanelToolsSection>
                <ControlPanelToolsSectionRight>
                    <CustomItemInput
                        itemState={itemState}
                        dispatch={dispatch}
                        title={t('width')}
                        fieldName="width"
                        fieldType="number"
                        min={1}
                        max={5}
                    />
                    <CustomItemInput
                        itemState={itemState}
                        dispatch={dispatch}
                        title={t('height')}
                        fieldName="height"
                        fieldType="number"
                        min={1}
                        max={2}
                    />

                    <CustomItemInput
                        itemState={itemState}
                        dispatch={dispatch}
                        title={t('background')}
                        fieldName="backgroundColor"
                        fieldType="color"
                    />
                    <CustomItemInput
                        itemState={itemState}
                        dispatch={dispatch}
                        title={t('foreground')}
                        fieldName="foregroundColor"
                        fieldType="color"
                    />

                    <CustomItemCheckboxInput
                        itemState={itemState}
                        dispatch={dispatch}
                        title={t('divider')}
                        fieldName="divider"
                    />
                    <CustomItemCheckboxInput
                        itemState={itemState}
                        dispatch={dispatch}
                        title={t('border')}
                        fieldName="border"
                    />
                </ControlPanelToolsSectionRight>
            </ControlPanelTools>

            <ControlPanelFooter>
                <FooterInputContainer>
                    <span>{t('resolution')}:</span>
                    <select
                        value={itemState.resolution}
                        onChange={(event) =>
                            dispatch({
                                type: 'set-resolution',
                                resolution: Number(event.target.value),
                            })
                        }
                    >
                        {resolutionOptions.map((resolution) => (
                            <option key={resolution.dpi} value={resolution.dpi}>
                                {resolution.label}
                            </option>
                        ))}
                    </select>
                </FooterInputContainer>

                <ControlButtonSaveSheet onClick={handleSaveToSheetButtonClick}>
                    {t('saveToSheetButton')}
                </ControlButtonSaveSheet>

                <ControlButton onClick={handleSaveImageButtonClick}>
                    {t('saveImageButton')}
                </ControlButton>
            </ControlPanelFooter>
        </ControlPanel>
    );
};

export default CustomItemControlPanel;
