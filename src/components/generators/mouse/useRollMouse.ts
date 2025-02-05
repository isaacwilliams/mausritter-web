import { useState } from 'react';
import { sum, times, drop, compact, isObject } from 'lodash/fp';
import { nanoid } from 'nanoid';

import { pick, pickWithContext, resolveWithContext, roll, rollDice } from '../generatorUtils';

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

    const context = new Map();

    const firstName = pickWithContext(generatorData.firstNames, 'firstName', context);
    const familyName = pickWithContext(generatorData.familyNames, 'familyName', context);
    const name = `${firstName} ${familyName}`;

    const coatColor = pick(generatorData.coatColors);
    const coatPattern = pick(generatorData.coatPatterns);
    const coat = `${coatColor}, ${coatPattern}`;

    const physicalDetail = pick(generatorData.physicalDetail);
    const birthsign = pick(generatorData.birthSigns);
    const dispositionName = resolveWithContext(birthsign.disposition, "disposition", context);

    const getBackground = (hp, pips) =>
        generatorData.backgrounds[(hp - 1) * 6 + (pips - 1)];

    const background = getBackground(hp, pips);
    const backgroundName = resolveWithContext(background.title, "background", context);

    const consolationBackground = getBackground(rollHp(), rollPips());

    const statMax = Math.max(str, dex, wil);

    return {
        id: nanoid(),
        name,
        coat,
        physicalDetail,
        birthsign: {
            title: birthsign.title,
            disposition: dispositionName
        },
        stats: {
            str,
            dex,
            wil,
        },
        hp,
        pips,
        background: {
            title: backgroundName,
            items: background.items
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
    generatorData: MouseGeneratorData
): [MouseCharacter, () => void] => {
    const [mouse, setMouse] = useState(rollCharacter(generatorData));

    const rollMouse = () => {
        setMouse(rollCharacter(generatorData));
    };

    return [mouse, rollMouse];
};

export default useRollMouse;
