import React, { useRef, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import drawItemCanvasToImage from './drawItemCanvasToImage';
import useFetchImageSource from './useFetchImageSource';

export const PrintableSheet = styled.div`
    width: 210mm;
    height: 297mm;
    background: white;

    @media print {
        height: auto;
        width: auto;
    }
`;

const PrintableSheetStudioContainer = styled.div`
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
`;

const PrintableSheetPrintButton = styled.button`
    margin-top: 2rem;
`;

const PrintableSheetContent = styled.div`
    display: grid;

    grid-auto-flow: dense;

    grid-template-columns: repeat(7, 1in);
    grid-template-rows: repeat(10, 1in);

    padding: 15mm;

    @media print {
        padding: 0;
    }
`;

const SavedCard = styled.div`
    position: relative;
    border: 1px dashed black;

    .remove-button {
        display: none;
        position: absolute;

        top: 0;
        right: 0;
    }

    ${({ interactive }) => interactive && css`
        cursor: pointer;

        transition: 0.05s ease-out transform, 0.1s ease-out box-shadow;

        &:hover {
            z-index: 10;
            transform: scale(2.5);
            border: 0;

            box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.1), 0 0.2rem 1rem rgba(0, 0, 0, 0.2);

            .remove-button {
                display: block;
            }
        }
    `}
`;

const CustomItemSavedCard = ({ itemState, restoreSheetItem, removeSheetItem, interactive }) => {
    const canvasRef = useRef();
    const imgRef = useRef();
    const imageSource = useFetchImageSource(itemState.imageUrl);

    const { id } = itemState;

    const handleRemoveButtonClick = (event) => {
        if (!interactive) return;
        event.preventDefault();
        event.stopPropagation();
        removeSheetItem(id);
    };

    const handleRestoreButtonClick = () => {
        if (!interactive) return;
        restoreSheetItem(itemState);
    };

    useEffect(() => {
        drawItemCanvasToImage(
            canvasRef.current,
            imgRef.current,
            { ...itemState, imageSource, resolution: 300, border: false },
        );
    }, [imageSource]);

    const cardStyle = {
        gridRowEnd: `span ${itemState.height}`,
        gridColumnEnd: `span ${itemState.width}`,
    };

    return (
        <SavedCard interactive={interactive} style={cardStyle} onClick={handleRestoreButtonClick}>
            <button className="remove-button" onClick={handleRemoveButtonClick}>X</button>
            <canvas ref={canvasRef}
                    width={itemState.width * 300}
                    height={itemState.height * 300}
                    style={{ display: 'none' }} />

            <img ref={imgRef} style={{ width: `${itemState.width}in`, height: `${itemState.height}in` }} />
        </SavedCard>
    );
};

const CustomItemPrintableSheet = ({ sheetItems, restoreSheetItem, removeSheetItem, interactive }) => (
    <PrintableSheet>
        <PrintableSheetContent>
            {sheetItems.map((sheetItem) => (
                <CustomItemSavedCard key={sheetItem.id}
                        interactive={interactive}
                        itemState={sheetItem}
                        restoreSheetItem={restoreSheetItem}
                        removeSheetItem={removeSheetItem} />
            ))}
        </PrintableSheetContent>
    </PrintableSheet>
);

export default CustomItemPrintableSheet;
