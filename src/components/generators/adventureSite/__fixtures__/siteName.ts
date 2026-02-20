import {
    NounGender,
    SiteNamePartA,
    SiteNamePartB,
} from '../adventureSiteGeneratorTypes';

export const legacySiteName = {
    partA: ['Black', 'White'],
    partB: ['Tower', 'Tree'],
};

export const russianSiteNameMasc: {
    partA: SiteNamePartA;
    partB: SiteNamePartB[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое' },
    ],
    partB: [
        { name: 'Пень', gender: 'masc' as NounGender },
        { name: 'Дом', gender: 'masc' as NounGender },
    ],
};

export const russianSiteNameFem: {
    partA: SiteNamePartA;
    partB: SiteNamePartB[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое' },
    ],
    partB: [
        { name: 'Башня', gender: 'fem' as NounGender },
        { name: 'Пещера', gender: 'fem' as NounGender },
    ],
};

export const russianSiteNameNeut: {
    partA: SiteNamePartA;
    partB: SiteNamePartB[];
} = {
    partA: [
        { masc: 'Чёрный', fem: 'Чёрная', neut: 'Чёрное' },
        { masc: 'Белый', fem: 'Белая', neut: 'Белое' },
    ],
    partB: [
        { name: 'Дупло', gender: 'neut' as NounGender },
        { name: 'Озеро', gender: 'neut' as NounGender },
    ],
};
