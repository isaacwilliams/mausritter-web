import { useState } from 'react';
import { sum, times, drop, max, compact, uniqueId } from 'lodash/fp';

import {
    BACKGROUNDS,
    FIRST_NAMES,
    LAST_NAMES,
    COAT_COLORS,
    COAT_PATTERNS,
    PHYSICAL_DETAIL,
    BIRTH_SIGNS,
} from './mouseGeneratorConstants';

const pick = (array) => (
    array[Math.floor(Math.random() * array.length)]
);

const roll = (size) => Math.floor(Math.random() * size) + 1;
const rollDice = (numberOfDice) => (sides) => sum(times(() => roll(sides), numberOfDice))

const rollStat = () => sum(drop(1)(times(() => roll(6), 3).sort()));
const rollHp = () => rollDice(1)(6);
const rollPips = () => rollDice(1)(6);

const getBackground = (hp, pips) => BACKGROUNDS[(hp - 1) * 6 + (pips - 1)];

const rollCharacter = () => {
    const str = rollStat();
    const dex = rollStat();
    const wil = rollStat();

    const hp = rollHp();
    const pips = rollPips();

    const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;
    const coat = `${pick(COAT_COLORS)}, ${pick(COAT_PATTERNS)}`;
    const physicalDetail = pick(PHYSICAL_DETAIL);
    const [birthsign, disposition] = pick(BIRTH_SIGNS);

    const [background, backgroundItemA, backgroundItemB] = getBackground(hp, pips);
    const [_, consolationItemA, consolationItemB] = getBackground(rollHp(), rollPips());

    const statMax = max([str, dex, wil]);

    return {
        id: uniqueId(),
        name,
        coat,
        physicalDetail,
        birthsign,
        disposition,
        stats: {
            str,
            dex,
            wil,
        },
        hp,
        pips,
        background,
        items: compact([
            backgroundItemA,
            backgroundItemB,
            statMax <= 9 ? consolationItemA : null,
            statMax <= 7 ? consolationItemB : null,
            { name: 'Torches' },
            { name: 'Rations' },
            { name: 'Weapon of your choice', type: 'special' },
        ]),
    }
}

const useRollMouse = () => {
    const [mouse, setMouse] = useState(rollCharacter());

    const rollMouse = () => {
        setMouse(rollCharacter());
    };

    return [
        mouse,
        rollMouse,
    ];
};

export default useRollMouse;
