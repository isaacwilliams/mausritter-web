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

function parseDiceNotations(headerCells: string[]): string[] {
    // Return all dice notations found in the header row, in order
    const diceRegex = /\b(\d*)d(\d+)\b/gi;
    return headerCells
        .map((cell) => {
            const match = diceRegex.exec(cell);
            diceRegex.lastIndex = 0; // reset for next cell
            if (!match) return null;
            // Special case for d66
            if (match[1] === '' && match[2] === '66') return 'd66';
            return (match[1] ? match[1] : '1') + 'd' + match[2];
        })
        .filter(Boolean) as string[];
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

function findRowForRollMulti(
    bodyRows: React.ReactElement[],
    rolledValues: number[],
): number {
    // For multi-dice: first roll narrows to a section, second roll finds the row within that section
    if (rolledValues.length < 2) {
        return findRowForRoll(bodyRows, rolledValues[0]);
    }
    // First pass: find all rows matching the first roll in the first column
    const firstMatches: number[] = [];
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
            if (rolledValues[0] >= min && rolledValues[0] <= max) {
                firstMatches.push(i);
            }
        }
    }
    if (firstMatches.length === 0) return -1;
    // Second pass: within the matched rows, check the second column for the second roll
    for (const i of firstMatches) {
        const row = bodyRows[i];
        const cells = React.Children.toArray(
            (row.props as { children?: React.ReactNode }).children,
        ).filter(React.isValidElement);
        if (cells.length < 2) continue;
        const secondCellText = getNodeText(
            (cells[1].props as { children?: React.ReactNode }).children,
        ).trim();
        const rangeMatch = secondCellText.match(
            /^(\d+)(?:\s*-\s*(\d+))?\s*(\+)?/,
        );
        if (rangeMatch) {
            const min = parseInt(rangeMatch[1], 10);
            const max = rangeMatch[2]
                ? parseInt(rangeMatch[2], 10)
                : rangeMatch[3]
                  ? Infinity
                  : min;
            if (rolledValues[1] >= min && rolledValues[1] <= max) {
                return i;
            }
        }
    }
    // If no match, just return the first match
    return firstMatches[0];
}

function getOverlayDuration(text: string) {
    return Math.min(4000, 1200 + text.length * 40);
}

function getResultText(row: React.ReactElement): string {
    const rowCells = React.Children.toArray(
        (row.props as { children?: React.ReactNode }).children,
    ).filter(React.isValidElement);
    return (
        rowCells
            .map((cell) =>
                getNodeText(
                    (cell.props as { children?: React.ReactNode }).children,
                ),
            )
            // remove cells that are just a number
            .map((text) => text.trim())
            // filter out cells that are just numbers (e.g. 1, 2, etc.)
            .filter((text) => isNaN(Number(text)))
            // remove empty cells
            .filter((text) => text !== '')
            .join(' | ')
    );
}

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

    const handleRoll = () => {
        if (bodyRows.length === 0) return;

        let rollIdx = 0;
        const rollDescs: string[] = [];
        const rolledValues: number[] = [];

        for (const notation of diceNotations) {
            if (notation === 'd66') {
                const tens = new DiceRoll('1d6').total;
                const ones = new DiceRoll('1d6').total;
                rolledValues.push(tens * 10 + ones);
                rollDescs.push(`d66: [${tens}, ${ones}] = ${tens * 10 + ones}`);
            } else {
                const roll = new DiceRoll(notation);
                rolledValues.push(roll.total);
                rollDescs.push(roll.output);
            }
        }

        if (diceNotations.length > 1) {
            // Multi-dice: use both rolls to find the row
            const foundIdx = findRowForRollMulti(bodyRows, rolledValues);
            rollIdx = foundIdx !== -1 ? foundIdx : 0;
        } else if (diceNotations.length === 1) {
            const foundIdx = findRowForRoll(bodyRows, rolledValues[0]);
            rollIdx =
                foundIdx !== -1
                    ? foundIdx
                    : Math.max(
                          0,
                          Math.min(bodyRows.length - 1, rolledValues[0] - 1),
                      );
        } else {
            rollIdx = Math.floor(Math.random() * bodyRows.length);
        }

        if (rollIdx < 0) rollIdx = 0;
        if (rollIdx >= bodyRows.length) rollIdx = bodyRows.length - 1;

        const result = getResultText(bodyRows[rollIdx]);
        setOverlayText(result);
        setOverlayRoll(rollDescs.join(' | '));
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
