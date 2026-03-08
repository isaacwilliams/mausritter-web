import { useState } from 'react';
import { nanoid } from 'nanoid';

import { pick, rollDice, weightedPick, selectForm } from '../generatorUtils';

import { ROOM_LAYOUTS } from './adventureSiteConstants';
import {
    AdventureSite,
    AdventureSiteGeneratorData,
    FormVariants,
    Name,
    NamedWithContext,
} from './adventureSiteGeneratorTypes';

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
        construction: getNameString(selectedConstruction),
        ruinAction: selectForm(
            selectedRuinAction,
            getNameContext(selectedConstruction),
        ),
        ruin: pick(generatorData.summary.ruin),
        inhabitant: getNameString(selectedInhabitant),
        inhabitantAction: selectForm(
            selectedInhabitantAction,
            getNameContext(selectedInhabitant),
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

const isStringArray = (arr: unknown): arr is string[] => {
    return Array.isArray(arr) && typeof arr[0] === 'string';
};

const getNameString = (name: Name): string => {
    if (typeof name === 'string') {
        return name;
    }
    return name.name;
};

const getNameContext = (name: Name): string => {
    if (typeof name === 'string') {
        return '';
    }
    return name.context;
};

const createSiteName = (generatorData: AdventureSiteGeneratorData): string => {
    const partBArray = generatorData.siteName.location;
    const isSimpleFormat = isStringArray(partBArray);

    if (isSimpleFormat) {
        const partA = pick(generatorData.siteName.modifier as string[]) ?? '';
        const partB = pick(partBArray) ?? '';
        return `${partA} ${partB}`;
    }

    const partB = pick(partBArray) as NamedWithContext | undefined;
    if (!partB) {
        return '';
    }

    const { name: noun, context } = partB;
    const pickedAdjective = pick(
        generatorData.siteName.modifier as FormVariants[],
    );
    const adjective = selectForm(pickedAdjective, context);
    return `${adjective} ${noun}`;
};

export default useRollAdventureSite;
