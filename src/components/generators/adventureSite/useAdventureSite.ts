import { useState } from 'react';
import { nanoid } from 'nanoid';

import { pick, pickWithContext, rollDice, weightedPick } from '../generatorUtils';

import { ROOM_LAYOUTS } from './adventureSiteConstants';
import {
    AdventureSite,
    AdventureSiteGeneratorData,
} from './adventureSiteGeneratorTypes';

const createAdventureSiteData = (
    generatorData: AdventureSiteGeneratorData
): AdventureSite => {
    const context = new Map();

    const location = pickWithContext(generatorData.siteName.location, 'location', context);
    const modifier = pickWithContext(generatorData.siteName.modifier, 'modifier', context);
    const name = `${modifier} ${location}`;

    const summary = {
        construction: pickWithContext(generatorData.summary.construction, 'construction', context),
        ruinAction: pickWithContext(generatorData.summary.ruinAction, 'ruinAction', context),
        ruin: pickWithContext(generatorData.summary.ruin, 'ruin', context),
        inhabitant: pickWithContext(generatorData.summary.inhabitant, 'inhabitant', context),
        inhabitantAction: pickWithContext(generatorData.summary.inhabitantAction, 'inhabitantAction', context),
        inhabitantGoal: pickWithContext(generatorData.summary.inhabitantGoal, 'inhabitantGoal', context),
        secretHidden: pickWithContext(generatorData.summary.secretHidden, 'secretHidden', context),
        secret: pickWithContext(generatorData.summary.secret, 'secret', context)
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
    generatorData: AdventureSiteGeneratorData
): [AdventureSite, () => void] => {
    const [adventureSite, setAdventureSite] = useState(
        createAdventureSiteData(generatorData)
    );

    const rollAdventureSite = () => {
        setAdventureSite(createAdventureSiteData(generatorData));
    };

    return [adventureSite, rollAdventureSite];
};

export default useRollAdventureSite;
