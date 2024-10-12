import { sum, times } from 'lodash/fp';

export const pick = <T>(array: T[]) =>
    array[Math.floor(Math.random() * array.length)];

export const weightedPick = <T extends { weight: number }>(array: T[]): T => {
    const totalWeight = sum(array.map(item => item.weight));
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
