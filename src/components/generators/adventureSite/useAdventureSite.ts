import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
    contextOf,
    pick,
    resolveTerm,
    rollDice,
    weightedPick,
} from '../generatorUtils';

import { ROOM_LAYOUTS } from './adventureSiteConstants';
import {
    AdventureSite,
    AdventureSiteGeneratorData,
} from './adventureSiteGeneratorTypes';

export const createAdventureSiteData = (
    generatorData: AdventureSiteGeneratorData,
): AdventureSite => {
    const { siteName, summary: summaryData } = generatorData;

    const location = pick(siteName.location);
    const modifier = pick(siteName.modifier);
    const name = `${resolveTerm(modifier, contextOf(location))} ${resolveTerm(
        location,
    )}`;

    const construction = pick(summaryData.construction);
    const ruinAction = pick(summaryData.ruinAction);
    const inhabitant = pick(summaryData.inhabitant);

    const summary = {
        construction: resolveTerm(construction),
        ruinAction: resolveTerm(ruinAction, contextOf(construction)),
        ruin: resolveTerm(pick(summaryData.ruin), contextOf(ruinAction)),
        inhabitant: resolveTerm(inhabitant),
        inhabitantAction: resolveTerm(
            pick(summaryData.inhabitantAction),
            contextOf(inhabitant),
        ),
        inhabitantGoal: pick(summaryData.inhabitantGoal),
        secretHidden: pick(summaryData.secretHidden),
        secret: pick(summaryData.secret),
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
