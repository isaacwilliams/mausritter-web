import React from 'react';
// @ts-expect-error: rpg-dice-roller is a JavaScript library, not TypeScript
import { DiceRoll } from 'rpg-dice-roller';

export function getNodeText(node: React.ReactNode): string {
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

export function extractTableParts(children: React.ReactNode) {
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

export function parseDiceNotations(headerCells: string[]): string[] {
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

export function parseRangeCell(cellText: string) {
    const rangeMatch = cellText.match(/^\s*(\d+)(?:\s*-\s*(\d+))?\s*(\+)?/);
    if (!rangeMatch) return null;
    const min = parseInt(rangeMatch[1], 10);
    const max = rangeMatch[2]
        ? parseInt(rangeMatch[2], 10)
        : rangeMatch[3]
          ? Infinity
          : min;
    return { min, max };
}

export function findRowForRoll(
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
        const range = parseRangeCell(firstCellText);
        if (!range) continue;
        if (rolledValue >= range.min && rolledValue <= range.max) {
            return i;
        }
    }
    return -1;
}

export function findFirstMatches(
    bodyRows: React.ReactElement[],
    roll: number,
): number[] {
    const matches: number[] = [];
    for (let i = 0; i < bodyRows.length; i++) {
        const row = bodyRows[i];
        const cells = React.Children.toArray(
            (row.props as { children?: React.ReactNode }).children,
        ).filter(React.isValidElement);
        if (cells.length === 0) continue;
        const firstCellText = getNodeText(
            (cells[0].props as { children?: React.ReactNode }).children,
        ).trim();
        const range = parseRangeCell(firstCellText);
        if (!range) continue;
        if (roll >= range.min && roll <= range.max) {
            matches.push(i);
        }
    }
    return matches;
}

export function findRowForRollMulti(
    bodyRows: React.ReactElement[],
    rolledValues: number[],
): number {
    if (rolledValues.length < 2) {
        return findRowForRoll(bodyRows, rolledValues[0]);
    }

    const firstMatches = findFirstMatches(bodyRows, rolledValues[0]);
    if (firstMatches.length === 0) return -1;

    for (const i of firstMatches) {
        const row = bodyRows[i];
        const cells = React.Children.toArray(
            (row.props as { children?: React.ReactNode }).children,
        ).filter(React.isValidElement);
        if (cells.length < 2) continue;
        const secondCellText = getNodeText(
            (cells[1].props as { children?: React.ReactNode }).children,
        ).trim();
        const range = parseRangeCell(secondCellText);
        if (!range) continue;
        if (rolledValues[1] >= range.min && rolledValues[1] <= range.max) {
            return i;
        }
    }

    return firstMatches[0];
}

export function getOverlayDuration(text: string) {
    return Math.min(4000, 1200 + text.length * 40);
}

export function getResultText(row: React.ReactElement): string {
    const rowCells = React.Children.toArray(
        (row.props as { children?: React.ReactNode }).children,
    ).filter(React.isValidElement);
    return rowCells
        .map((cell) =>
            getNodeText(
                (cell.props as { children?: React.ReactNode }).children,
            ),
        )
        .map((text) => text.trim())
        .filter((text) => isNaN(Number(text)))
        .filter((text) => text !== '')
        .join(' | ');
}

export function getRollResults(diceNotations: string[]) {
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

    return { rollDescs, rolledValues };
}

export function getRowIndexForRoll(
    diceNotations: string[],
    bodyRows: React.ReactElement[],
    rolledValues: number[],
): number {
    if (diceNotations.length > 1) {
        const foundIdx = findRowForRollMulti(bodyRows, rolledValues);
        if (foundIdx !== -1) return foundIdx;
        return 0;
    }

    if (diceNotations.length === 1) {
        const foundIdx = findRowForRoll(bodyRows, rolledValues[0]);
        if (foundIdx !== -1) return foundIdx;
        return Math.max(0, Math.min(bodyRows.length - 1, rolledValues[0] - 1));
    }

    return Math.floor(Math.random() * bodyRows.length);
}
