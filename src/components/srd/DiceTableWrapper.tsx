import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';
// @ts-expect-error: rpg-dice-roller is a JavaScript library, not TypeScript
import { DiceRoll } from 'rpg-dice-roller';

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

// --- Utility Functions ---

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

function extractTableParts(children: React.ReactNode) {
    let headerCells: string[] = [];
    let bodyRows: React.ReactElement[] = [];

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

    if (tbody && React.isValidElement(tbody)) {
        bodyRows = React.Children.toArray(
            (tbody.props as { children?: React.ReactNode }).children,
        ).filter(React.isValidElement);
    } else {
        const allTrs = tableChildren.filter(
            (c): c is React.ReactElement =>
                React.isValidElement(c) && c.type === 'tr',
        );
        bodyRows = allTrs.slice(1);
    }

    return { headerCells, bodyRows, table };
}

function parseDiceNotation(headerCells: string[]): string | null {
    const diceRegex = /\b(\d*)d(\d+)\b/i;
    const diceHeader = headerCells.find((cell) => diceRegex.test(cell));
    if (!diceHeader) return null;
    const match = diceHeader.match(diceRegex);
    if (!match) return null;
    return (match[1] ? match[1] : '1') + 'd' + match[2];
}

function findRowForRoll(
    bodyRows: React.ReactElement[],
    rolledValue: number,
): number {
    for (let i = 0; i < bodyRows.length; i++) {
        const row = bodyRows[i];
        const cells = React.Children.toArray(
            (row.props as { children?: React.ReactNode }).children,
        ).filter(React.isValidElement);
        if (cells.length === 0) continue;
        const firstCellText = getNodeText(
            (cells[0].props as { children?: React.ReactNode }).children,
        ).trim();
        const rangeMatch = firstCellText.match(
            /^(\d+)(?:\s*-\s*(\d+))?\s*(\+)?/,
        );
        if (rangeMatch) {
            const min = parseInt(rangeMatch[1], 10);
            const max = rangeMatch[2]
                ? parseInt(rangeMatch[2], 10)
                : rangeMatch[3]
                  ? Infinity
                  : min;
            if (rolledValue >= min && rolledValue <= max) {
                return i;
            }
        }
    }
    return -1;
}

function getOverlayDuration(text: string) {
    return Math.min(4000, 1200 + text.length * 40);
}

function getResultText(row: React.ReactElement): string {
    const rowCells = React.Children.toArray(
        (row.props as { children?: React.ReactNode }).children,
    ).filter(React.isValidElement);
    return rowCells
        .slice(1)
        .map((cell) =>
            getNodeText(
                (cell.props as { children?: React.ReactNode }).children,
            ),
        )
        .filter((text) => text.trim() !== '')
        .join(' | ');
}

// --- Main Component ---

const DiceTableWrapper: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { headerCells, bodyRows, table } = extractTableParts(children);
    const diceNotation = parseDiceNotation(headerCells);
    const hasDiceHeader = !!diceNotation;

    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayText, setOverlayText] = useState('');
    const [overlayRoll, setOverlayRoll] = useState('');
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleRoll = () => {
        if (bodyRows.length === 0) return;

        let rollIdx = 0;
        let rollDesc = '';

        if (diceNotation) {
            try {
                const roll = new DiceRoll(diceNotation);
                const rolledValue = roll.total;
                rollDesc = roll.output;
                const foundIdx = findRowForRoll(bodyRows, rolledValue);
                rollIdx =
                    foundIdx !== -1
                        ? foundIdx
                        : Math.max(
                              0,
                              Math.min(bodyRows.length - 1, rolledValue - 1),
                          );
            } catch {
                rollIdx = Math.floor(Math.random() * bodyRows.length);
                rollDesc = '';
            }
        } else {
            rollIdx = Math.floor(Math.random() * bodyRows.length);
        }

        if (rollIdx < 0) rollIdx = 0;
        if (rollIdx >= bodyRows.length) rollIdx = bodyRows.length - 1;

        const result = getResultText(bodyRows[rollIdx]);
        setOverlayText(result);
        setOverlayRoll(rollDesc);
        setShowOverlay(true);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(
            () => setShowOverlay(false),
            getOverlayDuration(result),
        );
    };

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

export { DiceTableWrapper, getNodeText };
