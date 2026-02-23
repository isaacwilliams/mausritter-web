import { FormVariants, NamedWithContext } from '../adventureSiteGeneratorTypes';

export const simpleSiteName = {
    modifier: ['Black', 'White'],
    location: ['Tower', 'Tree'],
};

export const complexSiteNameMasc: {
    modifier: FormVariants[];
    location: NamedWithContext[];
} = {
    modifier: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    location: [
        { name: 'Пень', context: 'masc' },
        { name: 'Дом', context: 'masc' },
    ],
};

export const complexSiteNameFem: {
    modifier: FormVariants[];
    location: NamedWithContext[];
} = {
    modifier: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    location: [
        { name: 'Башня', context: 'fem' },
        { name: 'Пещера', context: 'fem' },
    ],
};

export const complexSiteNameNeut: {
    modifier: FormVariants[];
    location: NamedWithContext[];
} = {
    modifier: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    location: [
        { name: 'Дупло', context: 'neut' },
        { name: 'Озеро', context: 'neut' },
    ],
};
