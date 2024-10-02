export type Item = {
    name: string;
    type?: string;
    shape?: 'tall' | 'wide';
    attack?: string;
    def?: string;
};

export type MouseBackground = {
    title: string;
    items: [Item, Item];
};

export type MouseBirthsign = {
    title: string;
    disposition: string;
};

export type MouseGeneratorData = {
    standardItems: Item[];
    backgrounds: MouseBackground[];
    firstNames: string[];
    familyNames: string[];
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
    birthsign: MouseBirthsign;
    background: MouseBackground;
    items: Item[];
};
