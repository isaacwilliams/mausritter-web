import type { Term } from '../generatorTypes';

export type {
    FormVariants,
    NamedWithContext,
    NounContext,
    Term,
} from '../generatorTypes';

export type RoomTypeData = {
    weight: number;
    typeName: string;
    descriptions: string[];
    creatureChance: number;
    treasureChance: number;
};

export type AdventureSiteGeneratorData = {
    siteName: {
        modifier: Term[];
        location: Term[];
    };
    summary: {
        format: string;
        construction: Term[];
        ruinAction: Term[];
        ruin: Term[];
        inhabitant: Term[];
        inhabitantAction: Term[];
        inhabitantGoal: string[];
        secretHidden: string[];
        secret: string[];
    };
    roomTypes: RoomTypeData[];
};

export type RoomPosition = {
    x: number;
    y: number;
};

export type Room = {
    id: string;
    position: RoomPosition;
    type: string;
    description: string;
    creature: boolean;
    treasure: boolean;
};

export type AdventureSite = {
    id: string;
    name: string;
    summary: {
        construction: string;
        ruinAction: string;
        ruin: string;
        inhabitant: string;
        inhabitantAction: string;
        inhabitantGoal: string;
        secretHidden: string;
        secret: string;
    };
    rooms: Room[];
};
