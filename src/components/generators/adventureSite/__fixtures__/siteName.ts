import { FormVariants, NamedWithGender } from '../adventureSiteGeneratorTypes';

export const legacySiteName = {
    partA: ['Black', 'White'],
    partB: ['Tower', 'Tree'],
};

export const russianSiteNameMasc: {
    partA: FormVariants[];
    partB: NamedWithGender[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    partB: [
        { name: 'Пень', gender: 'masc' },
        { name: 'Дом', gender: 'masc' },
    ],
};

export const russianSiteNameFem: {
    partA: FormVariants[];
    partB: NamedWithGender[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    partB: [
        { name: 'Башня', gender: 'fem' },
        { name: 'Пещера', gender: 'fem' },
    ],
};

export const russianSiteNameNeut: {
    partA: FormVariants[];
    partB: NamedWithGender[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное', plural: 'Чёрные' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое', plural: 'Белые' },
    ],
    partB: [
        { name: 'Дупло', gender: 'neut' },
        { name: 'Озеро', gender: 'neut' },
    ],
};
