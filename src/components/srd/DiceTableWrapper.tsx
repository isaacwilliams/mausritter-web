import React, { useState } from 'react';
import { styled } from 'styled-components';

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
    font-size: 1.5em;
    font-weight: bold;
    z-index: 10;
    pointer-events: none;
    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: opacity 0.4s;
`;

// Utility to get text from ReactNode
function getNodeText(node: React.ReactNode): string {
    if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
    }
    if (Array.isArray(node)) return node.map(getNodeText).join('');
    if (
        React.isValidElement(node) &&
        node.props &&
        typeof node.props === 'object' &&
        node.props !== null
    ) {
        return getNodeText(
            (node.props as { children?: React.ReactNode }).children,
        );
    }
    return '';
}

// Custom table component to add class to headers containing dX and add roll functionality
const DiceTableWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    // Find thead and tbody from children
    let headerCells: string[] = [];
    let bodyRows: React.ReactElement[] = [];

    // Find table, thead, tbody, tr, th, td
    const table = React.Children.toArray(children).find(
        (c): c is React.ReactElement =>
            React.isValidElement(c) && c.type === 'table',
    ) as React.ReactElement | undefined;
    const tableChildren = table
        ? React.Children.toArray(
              (table.props as { children?: React.ReactNode }).children,
          )
        : React.Children.toArray(children);

    const thead = tableChildren.find(
        (c): c is React.ReactElement =>
            React.isValidElement(c) && c.type === 'thead',
    );
    const tbody = tableChildren.find(
        (c): c is React.ReactElement =>
            React.isValidElement(c) && c.type === 'tbody',
    );

    // Get header cells
    if (thead && React.isValidElement(thead)) {
        const tr = React.Children.toArray(
            (thead.props as { children?: React.ReactNode }).children,
        ).find(
            (c): c is React.ReactElement =>
                React.isValidElement(c) && c.type === 'tr',
        );
        if (tr && React.isValidElement(tr)) {
            headerCells = React.Children.toArray(
                (tr.props as { children?: React.ReactNode }).children,
            )
                .filter(React.isValidElement)
                .map((th) =>
                    getNodeText(
                        (th.props as { children?: React.ReactNode }).children,
                    ),
                );
        }
    } else {
        // Fallback: first tr in tableChildren
        const firstTr = tableChildren.find(
            (c): c is React.ReactElement =>
                React.isValidElement(c) && c.type === 'tr',
        );
        if (firstTr && React.isValidElement(firstTr)) {
            headerCells = React.Children.toArray(
                (firstTr.props as { children?: React.ReactNode }).children,
            )
                .filter(React.isValidElement)
                .map((th) =>
                    getNodeText(
                        (th.props as { children?: React.ReactNode }).children,
                    ),
                );
        }
    }

    // Get body rows (all tr except the first if no tbody)
    if (tbody && React.isValidElement(tbody)) {
        bodyRows = React.Children.toArray(
            (tbody.props as { children?: React.ReactNode }).children,
        ).filter(React.isValidElement);
    } else {
        // Fallback: all tr in tableChildren except the first
        const allTrs = tableChildren.filter(
            (c): c is React.ReactElement =>
                React.isValidElement(c) && c.type === 'tr',
        );
        bodyRows = allTrs.slice(1);
    }

    const diceRegex = /d\d+/i;
    const hasDiceHeader = headerCells.some((cell) => diceRegex.test(cell));
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayText, setOverlayText] = useState('');

    // Store timeout id to clear on reroll
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const getOverlayDuration = (text: string) => {
        // 1.2s base + 40ms per character, max 4s
        return Math.min(4000, 1200 + text.length * 40);
    };

    const handleRoll = () => {
        if (bodyRows.length === 0) return;
        const idx = Math.floor(Math.random() * bodyRows.length);
        // Prepare overlay text
        const result = React.Children.toArray(
            (bodyRows[idx].props as { children?: React.ReactNode }).children,
        )
            .filter(React.isValidElement)
            .map((cell) =>
                getNodeText(
                    (cell.props as { children?: React.ReactNode }).children,
                ),
            )
            .filter((text) => text.trim() !== '')
            .join(' | ');

        setOverlayText(`🎲 ${result}`);
        setShowOverlay(true);
        // Reset previous timeout if exists
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(
            () => setShowOverlay(false),
            getOverlayDuration(result),
        );
    };

    // Render the table with the Roll button floating in the top-right
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
            <Overlay show={showOverlay}>{overlayText}</Overlay>
        </TableWrapper>
    );
};

export { DiceTableWrapper, getNodeText };
