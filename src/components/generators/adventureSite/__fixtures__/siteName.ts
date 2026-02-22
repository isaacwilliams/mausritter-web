import { FormVariants, NamedWithContext } from '../adventureSiteGeneratorTypes';

export const legacySiteName = {
    partA: ['Black', 'White'],
    partB: ['Tower', 'Tree'],
};

export const russianSiteNameMasc: {
    partA: FormVariants[];
    partB: NamedWithContext[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    partB: [
        { name: 'Пень', context: 'masc' },
        { name: 'Дом', context: 'masc' },
    ],
};

export const russianSiteNameFem: {
    partA: FormVariants[];
    partB: NamedWithContext[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    partB: [
        { name: 'Башня', context: 'fem' },
        { name: 'Пещера', context: 'fem' },
    ],
};

export const russianSiteNameNeut: {
    partA: FormVariants[];
    partB: NamedWithContext[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    partB: [
        { name: 'Дупло', context: 'neut' },
        { name: 'Озеро', context: 'neut' },
    ],
};
