import React from 'react';
import styled from 'styled-components';
import { kebabCase } from 'lodash/fp'

import { RollButton } from '../generatorComponents';

import CUSTOM_ITEM_TEMPLATES from './customItemTemplates';
import CUSTOM_ITEM_IMAGES from './customItemImages';

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
`;

const ControlPanelTools = styled.div`
    display: grid;
    grid-template-columns: 1fr 14rem;
`;

const ControlPanelToolsSection = styled.div`
    padding: 1.5rem;
`;

const ControlPanelToolsSectionRight = styled(ControlPanelToolsSection)`
    border-left: 1px solid #aaa;
`;

const StyledInputContainer = styled.label`
    display: block;
    margin-bottom: 0.5rem;

    span {
        display: inline-block;

        margin-right: 0.5rem;
        min-width: 5rem;
    }

    input {
        display: inline-block;

        &[type=number] {
            width: 3rem;
        }

        &[type=file] {
            width: 11rem;
        }
    }
`;

const FooterInputContainer = styled(StyledInputContainer)`
    margin-right: auto;

    span {
        min-width: 0;
    }
`;

const ControlButton = styled(RollButton)`
    margin-left: 1rem;
`;

const CustomItemInput = ({ fieldName, title, itemState, dispatch, fieldType = 'text' }) => (
    <StyledInputContainer>
        <span>{title}:</span>
        <input type={fieldType} value={itemState[fieldName]} onChange={(event) => dispatch({
            type: `set-${kebabCase(fieldName)}`,
            [fieldName]: event.target.value,
        })} />
    </StyledInputContainer>
);

const CustomItemCheckboxInput = ({ fieldName, title, itemState, dispatch }) => (
    <StyledInputContainer>
        <span>{title}:</span>
        <input type="checkbox" checked={itemState[fieldName]} onChange={(event) => dispatch({
            type: `set-${kebabCase(fieldName)}`,
            [fieldName]: !itemState[fieldName],
        })} />
    </StyledInputContainer>
);

const CustomItemControlPanel = ({
    templateMode,
    selectedTemplate,
    selectedImageMode,
    itemState,
    dispatch,
    setTemplateMode,
    setImageFile,
    handleSaveImageButtonClick,
    handleSaveToSheetButtonClick,
}) => (
    <ControlPanel>
        <ControlPanelHeader>
            <StyledInputContainer>
                <span>Template:</span>
                {' '}
                <select value={templateMode} onChange={event => setTemplateMode(event.target.value)}>
                    {CUSTOM_ITEM_TEMPLATES.map(({ name, template }) => (
                        <option key={name} value={name}>{name}</option>
                    ))}
                </select>
            </StyledInputContainer>
        </ControlPanelHeader>

        <ControlPanelTools>
            <ControlPanelToolsSection>
                {selectedTemplate?.controls?.name && (
                    <CustomItemInput itemState={itemState} dispatch={dispatch} title="Name" fieldName="name" />
                )}

                {selectedTemplate?.controls?.damage && (
                    <CustomItemInput itemState={itemState} dispatch={dispatch} title="Damage/Def" fieldName="damage" />
                )}

                {selectedTemplate?.controls?.mechanicDetail && (
                    <CustomItemInput itemState={itemState} dispatch={dispatch} title="Mechanic" fieldName="mechanicDetail" />
                )}

                {selectedTemplate?.controls?.clearDetail && (
                    <CustomItemInput itemState={itemState} dispatch={dispatch} title="Clear" fieldName="clearDetail" />
                )}

                {selectedTemplate?.controls?.classDetail && (
                    <CustomItemInput itemState={itemState} dispatch={dispatch} title="Class" fieldName="classDetail" />
                )}

                {selectedTemplate?.controls?.usage && (
                    <CustomItemInput itemState={itemState} dispatch={dispatch} title="Usage" fieldName="usage" fieldType="number" />
                )}

                {selectedTemplate?.controls?.star && (
                    <CustomItemCheckboxInput itemState={itemState} dispatch={dispatch} title="Star" fieldName="star" />
                )}

                {selectedTemplate?.controls?.image && (
                    <StyledInputContainer>
                        <span>Image:</span>
                        {' '}
                        <select value={itemState.image} onChange={event => dispatch({
                            type: 'set-image',
                            image: event.target.value,
                        })}>
                            {CUSTOM_ITEM_IMAGES.map(({ name, special, url }, i) => {
                                if (special === 'divider') return <option key={i} disabled>──────────</option>;

                                return <option key={name} value={name}>{name}</option>;
                            })}
                        </select>
                    </StyledInputContainer>
                )}

                {selectedTemplate?.controls?.image && selectedImageMode && selectedImageMode.special === 'upload' && (
                    <StyledInputContainer>
                        <span />
                        <input type="file" accept = "image/*" onChange={event => setImageFile(event.target.files[0])} />
                    </StyledInputContainer>
                )}
            </ControlPanelToolsSection>
            <ControlPanelToolsSectionRight>
                <CustomItemInput itemState={itemState} dispatch={dispatch} title="Width" fieldName="width" fieldType="number" />
                <CustomItemInput itemState={itemState} dispatch={dispatch} title="Height" fieldName="height" fieldType="number" />

                <CustomItemInput itemState={itemState} dispatch={dispatch} title="Background" fieldName="backgroundColor" fieldType="color" />
                <CustomItemInput itemState={itemState} dispatch={dispatch} title="Foreground" fieldName="foregroundColor" fieldType="color" />

                <CustomItemCheckboxInput itemState={itemState} dispatch={dispatch} title="Divider" fieldName="divider" />
                <CustomItemCheckboxInput itemState={itemState} dispatch={dispatch} title="Border" fieldName="border" />
            </ControlPanelToolsSectionRight>
        </ControlPanelTools>

        <ControlPanelFooter>
            <FooterInputContainer>
                <span>Resolution:</span>
                <select value={itemState.resolution} onChange={(event) => dispatch({
                    type: 'set-resolution',
                    resolution: Number(event.target.value),
                })}>
                    <option value={600}>High (print)</option>
                    <option value={300}>Medium (screen)</option>
                    <option value={100}>Low (low density screen)</option>
                </select>
            </FooterInputContainer>

            <ControlButton onClick={handleSaveToSheetButtonClick}>
                Save to sheet
            </ControlButton>

            <ControlButton onClick={handleSaveImageButtonClick}>
                Save item image
            </ControlButton>
        </ControlPanelFooter>
    </ControlPanel>
);

export default CustomItemControlPanel;
