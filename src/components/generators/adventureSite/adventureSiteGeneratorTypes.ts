export type NounContext = 'masc' | 'fem' | 'neut' | 'plural';

export type NamedWithContext = {
    name: string;
    context: NounContext;
};

export type FormVariants = Record<NounContext, string>;

export type RoomTypeData = {
    weight: number;
    typeName: string;
    descriptions: string[];
    creatureChance: number;
    treasureChance: number;
};

export type Name = NamedWithContext | string;
export type Modifier = FormVariants | string;

export type AdventureSiteGeneratorData = {
    siteName: {
        modifier: Modifier[];
        location: Name[];
    };
    summary: {
        format: string;
        construction: Name[];
        ruinAction: Modifier[];
        ruin: string[];
        inhabitant: Name[];
        inhabitantAction: Modifier[];
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
