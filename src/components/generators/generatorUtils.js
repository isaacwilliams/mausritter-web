import { sum, times } from 'lodash/fp';

export const pick = (array) => (
    array[Math.floor(Math.random() * array.length)]
);

export const roll = (size) => Math.floor(Math.random() * size) + 1;
export const rollDice = (numberOfDice) => (sides) => sum(times(() => roll(sides), numberOfDice));
