import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';
// --- Main Component ---

import {
    extractTableParts,
    parseDiceNotations,
    getRollResults,
    getRowIndexForRoll,
    getResultText,
    getOverlayDuration,
} from './diceTableUtils';

const TableWrapper = styled.div`
    position: relative;
`;

const FloatingRollButton = styled.button`
    position: absolute;
    top: 0.5em;
    right: 0.5em;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    background: black;
    color: white;
    border-radius: 0.2rem;
    z-index: 11;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    border: none;
    transition: background 0.2s;
    &:hover,
    &:focus {
        background: #222;
    }
`;

const Overlay = styled.div<{ show: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.92);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    z-index: 10;
    pointer-events: none;
    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: opacity 0.4s;

    .roll {
        font-size: 1.4em;
    }

    .result {
        font-size: 1.5em;
        font-weight: bold;
    }
`;

// --- Main Component ---

const DiceTableWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { headerCells, bodyRows, table } = extractTableParts(children);
    const diceNotations = parseDiceNotations(headerCells);
    const hasDiceHeader = diceNotations.length > 0;

    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayText, setOverlayText] = useState('');
    const [overlayRoll, setOverlayRoll] = useState('');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    function handleRoll() {
        if (bodyRows.length === 0) return;

        const { rollDescs, rolledValues } = getRollResults(diceNotations);
        const rollIdx = getRowIndexForRoll(
            diceNotations,
            bodyRows,
            rolledValues,
        );

        const result = getResultText(bodyRows[rollIdx]);
        setOverlayText(result);
        setOverlayRoll(rollDescs.join(' | '));
        setShowOverlay(true);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(
            () => setShowOverlay(false),
            getOverlayDuration(result),
        );
    }

    let tableWithButton = children;
    if (hasDiceHeader && table) {
        tableWithButton = (
            <TableWrapper>
                {table}
                <FloatingRollButton type="button" onClick={handleRoll}>
                    Roll
                </FloatingRollButton>
            </TableWrapper>
        );
    }

    return (
        <TableWrapper>
            {tableWithButton}
            <Overlay show={showOverlay}>
                <div className="roll">{overlayRoll}</div>
                <div className="result">{overlayText}</div>
            </Overlay>
        </TableWrapper>
    );
};

export { DiceTableWrapper };
