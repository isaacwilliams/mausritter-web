import { useState } from 'react';
import { nanoid } from 'nanoid';

import { pick, rollDice, weightedPick, selectForm } from '../generatorUtils';

import { ROOM_LAYOUTS } from './adventureSiteConstants';
import {
    AdventureSite,
    AdventureSiteGeneratorData,
    AdjectiveForms,
    NounGender,
    SiteNamePartA,
    SiteNamePartB,
} from './adventureSiteGeneratorTypes';

const pickAdjective = (
    partA: SiteNamePartA | string[],
    gender: NounGender,
): string => {
    if (Array.isArray(partA) && typeof partA[0] === 'string') {
        return pick(partA as string[]) ?? '';
    }

    if (!Array.isArray(partA)) {
        return '';
    }

    const first = partA[0] as Record<string, unknown>;

    if (typeof first === 'object') {
        const newFormat = partA as AdjectiveForms[];
        const adjective = pick(newFormat);
        return adjective ? adjective[gender as keyof AdjectiveForms] : '';
    }

    return '';
};

const isStringArray = (arr: unknown): arr is string[] => {
    return Array.isArray(arr) && typeof arr[0] === 'string';
};

const createSiteName = (generatorData: AdventureSiteGeneratorData): string => {
    const partBArray = generatorData.siteName.partB;
    const isSimpleFormat = isStringArray(partBArray);

    if (isSimpleFormat) {
        const partA = pick(generatorData.siteName.partA as string[]) ?? '';
        const partB = pick(partBArray) ?? '';
        return `${partA} ${partB}`;
    }

    const partB = pick(partBArray) as SiteNamePartB | undefined;
    if (!partB) {
        return '';
    }

    const { name: noun, gender } = partB;
    const adjective = pickAdjective(
        generatorData.siteName.partA as SiteNamePartA,
        gender,
    );
    return `${adjective} ${noun}`;
};

export const createAdventureSiteData = (
    generatorData: AdventureSiteGeneratorData,
): AdventureSite => {
    const name = createSiteName(generatorData);

    const selectedConstruction = pick(generatorData.summary.construction);
    const selectedRuinAction = pick(generatorData.summary.ruinAction);
    const selectedInhabitant = pick(generatorData.summary.inhabitant);
    const selectedInhabitantAction = pick(
        generatorData.summary.inhabitantAction,
    );

    const summary = {
        construction: selectedConstruction.name,
        ruinAction: selectForm(selectedRuinAction, selectedConstruction.gender),
        ruin: pick(generatorData.summary.ruin),
        inhabitant: selectedInhabitant.name,
        inhabitantAction: selectForm(
            selectedInhabitantAction,
            selectedInhabitant.gender,
        ),
        inhabitantGoal: pick(generatorData.summary.inhabitantGoal),
        secretHidden: pick(generatorData.summary.secretHidden),
        secret: pick(generatorData.summary.secret),
    };

    const rooms = pick(ROOM_LAYOUTS).map((position) => {
        const roomTypeData = weightedPick(generatorData.roomTypes);

        return {
            id: nanoid(6),
            position,
            type: roomTypeData.typeName,
            description: pick(roomTypeData.descriptions),
            creature: rollDice(1)(6) <= roomTypeData.creatureChance,
            treasure: rollDice(1)(6) <= roomTypeData.treasureChance,
        };
    });

    return {
        id: nanoid(),
        name,
        summary,
        rooms,
    };
};

const useRollAdventureSite = (
    generatorData: AdventureSiteGeneratorData,
): [AdventureSite, () => void] => {
    const [adventureSite, setAdventureSite] = useState(
        createAdventureSiteData(generatorData),
    );

    const rollAdventureSite = () => {
        setAdventureSite(createAdventureSiteData(generatorData));
    };

    return [adventureSite, rollAdventureSite];
};

export default useRollAdventureSite;
