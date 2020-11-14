import { useState } from 'react';
import { sum, times, drop, max, compact } from 'lodash/fp';
import { nanoid } from 'nanoid';

import {
    pick,
    rollDice,
} from '../generatorUtils';

import {
    NAME_A,
    NAME_B,
    SUMMARY_CONSTRUCTION,
    SUMMARY_RUIN_ACTION,
    SUMMARY_RUIN,
    SUMMARY_INHABITANTS,
    SUMMARY_INHABITANT_ACTION,
    SUMMARY_INHABITANT_GOAL,
    SUMMARY_SECRET_WITHIN,
    SUMMARY_SECRET,

    ROOM_EMPTY,
    ROOM_OBSTACLE,
    ROOM_TRAP,
    ROOM_PUZZLE,
    ROOM_LAIR,

    ROOM_LAYOUTS,
} from './adventureSiteConstants';

const createRoom = (roomBase) => {
    const roomType = rollDice(1)(6);

    switch (roomType) {
        case 1:
        case 2:
            return {
                ...roomBase,
                id: nanoid(6),
                type: 'Empty',
                description: pick(ROOM_EMPTY),
                creature: rollDice(1)(6) <= 3,
                treasure: rollDice(1)(6) <= 1,
            };
        case 3:
            return {
                ...roomBase,
                id: nanoid(6),
                type: 'Obstacle',
                description: pick(ROOM_OBSTACLE),
                creature: rollDice(1)(6) <= 2,
                treasure: rollDice(1)(6) <= 1,
            };
        case 4:
            return {
                ...roomBase,
                id: nanoid(6),
                type: 'Trap',
                description: pick(ROOM_TRAP),
                creature: rollDice(1)(6) <= 1,
                treasure: rollDice(1)(6) <= 2,
            };
        case 5:
            return {
                ...roomBase,
                id: nanoid(6),
                type: 'Puzzle',
                description: pick(ROOM_PUZZLE),
                creature: rollDice(1)(6) <= 1,
                treasure: rollDice(1)(6) <= 5,
            };
        case 6:
        default:
            return {
                ...roomBase,
                id: nanoid(6),
                type: 'Lair',
                description: pick(ROOM_LAIR),
                creature: rollDice(1)(6) <= 5,
                treasure: rollDice(1)(6) <= 4,
            };
    }
};

const createAdventureSiteData = () => {
    const summary = {
        name: `${pick(NAME_A)} ${pick(NAME_B)}`,
        construction: pick(SUMMARY_CONSTRUCTION),
        ruinAction: pick(SUMMARY_RUIN_ACTION),
        ruin: pick(SUMMARY_RUIN),
        inhabitant: pick(SUMMARY_INHABITANTS),
        inhabitantAction: pick(SUMMARY_INHABITANT_ACTION),
        goal: pick(SUMMARY_INHABITANT_GOAL),
        secretHidden: pick(SUMMARY_SECRET_WITHIN),
        secret: pick(SUMMARY_SECRET),
    };

    const rooms = pick(ROOM_LAYOUTS).map(roomBase => createRoom(roomBase));

    return {
        id: nanoid(),
        summary,
        rooms,
    }
}

const useRollAventureSite = () => {
    const [adventureSite, setAdventureSite] = useState(createAdventureSiteData());

    const rollAdventureSite = () => {
        setAdventureSite(createAdventureSiteData());
    };

    return [
        adventureSite,
        rollAdventureSite,
    ];
};

export default useRollAventureSite;
