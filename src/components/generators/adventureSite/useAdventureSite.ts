import { useState } from 'react';
import { nanoid } from 'nanoid';

import { pick, rollDice, weightedPick } from '../generatorUtils';

import { ROOM_LAYOUTS } from './adventureSiteConstants';
import {
    AdventureSite,
    AdventureSiteGeneratorData,
} from './adventureSiteGeneratorTypes';

const createAdventureSiteData = (
    generatorData: AdventureSiteGeneratorData,
): AdventureSite => {
    const name = `${pick(generatorData.siteName.partA)} ${pick(
        generatorData.siteName.partB,
    )}`;

    const summary = {
        construction: pick(generatorData.summary.construction),
        ruinAction: pick(generatorData.summary.ruinAction),
        ruin: pick(generatorData.summary.ruin),
        inhabitant: pick(generatorData.summary.inhabitant),
        inhabitantAction: pick(generatorData.summary.inhabitantAction),
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
