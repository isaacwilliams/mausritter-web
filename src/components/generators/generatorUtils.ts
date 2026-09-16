import lodash from 'lodash/fp';
const { sum, times } = lodash;

import { FormVariants, NamedWithContext, Term } from './generatorTypes';

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

export const selectForm = (
    forms: string | FormVariants,
    contextKey: string,
): string => {
    if (typeof forms === 'string') {
        return forms;
    }

    return forms[contextKey] ?? forms.masc ?? Object.values(forms)[0] ?? '';
};

const isNamed = (term: Term): term is NamedWithContext =>
    typeof term === 'object' && 'context' in term;

export const resolveTerm = (term: Term | undefined, context = ''): string =>
    term == null ? '' : selectForm(isNamed(term) ? term.name : term, context);

export const contextOf = (term: Term | undefined): string =>
    term != null && isNamed(term) ? term.context : '';
