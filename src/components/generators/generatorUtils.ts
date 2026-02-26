import lodash from 'lodash/fp';
const { sum, times } = lodash;

export const pick = <T>(array: T[]) =>
    array[Math.floor(Math.random() * array.length)];

export const weightedPick = <T extends { weight: number }>(array: T[]): T => {
    const totalWeight = sum(array.map((item) => item.weight));
    const random = Math.random() * totalWeight;

    let total = 0;
    for (const item of array) {
        total += item.weight;
        if (random < total) {
            return item;
        }
    }

    // fallback to first item
    return array[0];
};

export const roll = (size: number) => Math.floor(Math.random() * size) + 1;
export const rollDice = (numberOfDice: number) => (sides: number) =>
    sum(times(() => roll(sides), numberOfDice));

export type FormVariant = Record<string, string>;

export const selectForm = (
    forms: string | FormVariant,
    contextKey: string,
): string => {
    if (typeof forms === 'string') {
        return forms;
    }

    return forms[contextKey] ?? forms.masc ?? Object.values(forms)[0] ?? '';
};
