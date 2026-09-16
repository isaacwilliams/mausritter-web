import { useState } from 'react';
import lodash from 'lodash/fp';
const { sum, times, drop, compact } = lodash;
import { nanoid } from 'nanoid';

import {
    contextOf,
    pick,
    resolveTerm,
    roll,
    rollDice,
} from '../generatorUtils';

import { MouseGeneratorData, MouseCharacter } from './mouseGeneratorTypes';

const rollStat = () => sum(drop(1)(times(() => roll(6), 3).sort()));
const rollHp = () => rollDice(1)(6);
const rollPips = () => rollDice(1)(6);

const rollCharacter = (generatorData: MouseGeneratorData): MouseCharacter => {
    const str = rollStat();
    const dex = rollStat();
    const wil = rollStat();

    const hp = rollHp();
    const pips = rollPips();

    const firstName = pick(generatorData.firstNames);
    const nameContext = contextOf(firstName);
    const name = `${resolveTerm(firstName)} ${resolveTerm(
        pick(generatorData.familyNames),
        nameContext,
    )}`;

    const coat = `${pick(generatorData.coatColors)}, ${pick(
        generatorData.coatPatterns,
    )}`;

    const physicalDetail = pick(generatorData.physicalDetail);
    const birthsign = pick(generatorData.birthSigns);

    const getBackground = (hp: number, pips: number) =>
        generatorData.backgrounds[(hp - 1) * 6 + (pips - 1)];

    const background = getBackground(hp, pips);
    const consolationBackground = getBackground(rollHp(), rollPips());

    const statMax = Math.max(str, dex, wil);

    return {
        id: nanoid(),
        name,
        coat,
        physicalDetail,
        birthsign: {
            title: birthsign.title,
            disposition: resolveTerm(birthsign.disposition, nameContext),
        },
        stats: {
            str,
            dex,
            wil,
        },
        hp,
        pips,
        background: {
            title: resolveTerm(background.title, nameContext),
            items: background.items,
        },
        items: compact([
            background.items[0],
            background.items[1],
            statMax <= 9 ? consolationBackground.items[0] : null,
            statMax <= 7 ? consolationBackground.items[1] : null,
            ...generatorData.standardItems,
        ]),
    };
};

const useRollMouse = (
    generatorData: MouseGeneratorData,
): [MouseCharacter, () => void] => {
    const [mouse, setMouse] = useState(rollCharacter(generatorData));

    const rollMouse = () => {
        setMouse(rollCharacter(generatorData));
    };

    return [mouse, rollMouse];
};

export default useRollMouse;
