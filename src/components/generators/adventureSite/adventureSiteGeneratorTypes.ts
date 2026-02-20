export type NounGender = 'masc' | 'fem' | 'neut' | 'plural';

export type SiteNamePartB = {
    name: string;
    gender: NounGender;
};

export type AdjectiveForms = {
    masc: string;
    fem: string;
    neut: string;
};

export type SiteNamePartA = AdjectiveForms[];

export type NamedWithGender = {
    name: string;
    gender: NounGender;
};

export type FormVariants = Record<NounGender, string>;

export type RoomTypeData = {
    weight: number;
    typeName: string;
    descriptions: string[];
    creatureChance: number;
    treasureChance: number;
};

export type AdventureSiteGeneratorData = {
    siteName: {
        partA: SiteNamePartA | string[];
        partB: SiteNamePartB[] | string[];
    };
    summary: {
        format: string;
        construction: NamedWithGender[];
        ruinAction: FormVariants[];
        ruin: string[];
        inhabitant: NamedWithGender[];
        inhabitantAction: FormVariants[];
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
