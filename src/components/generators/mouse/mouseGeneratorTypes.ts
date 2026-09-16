import type { Term } from '../generatorTypes';

export type Item = {
    name: string;
    type?: string;
    shape?: 'tall' | 'wide';
    attack?: string;
    def?: string;
    notCard?: boolean;
};

export type MouseBackground = {
    title: Term;
    items: [Item, Item];
};

export type MouseBirthsign = {
    title: string;
    disposition: Term;
};

export type MouseGeneratorData = {
    standardItems: Item[];
    backgrounds: MouseBackground[];
    firstNames: Term[];
    familyNames: Term[];
    coatColors: string[];
    coatPatterns: string[];
    physicalDetail: string[];
    birthSigns: MouseBirthsign[];
};

export type MouseCharacter = {
    id: string;
    name: string;
    coat: string;
    stats: {
        str: number;
        dex: number;
        wil: number;
    };
    hp: number;
    pips: number;
    physicalDetail: string;
    birthsign: {
        title: string;
        disposition: string;
    };
    background: {
        title: string;
        items: [Item, Item];
    };
    items: Item[];
};
