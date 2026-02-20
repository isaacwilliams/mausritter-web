import { describe, expect, test, vi } from 'vitest';
import {
    legacySiteName,
    russianSiteNameMasc,
    russianSiteNameFem,
    russianSiteNameNeut,
} from '../__fixtures__/siteName';
import {
    AdventureSiteGeneratorData,
    NamedWithGender,
    FormVariants,
} from '../adventureSiteGeneratorTypes';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: { gender?: string }) => {
            if (key === 'adventureSiteGenerator.siteName.partA') {
                if (options?.gender === 'masc') {
                    return russianSiteNameMasc.partA;
                }
                if (options?.gender === 'fem') {
                    return russianSiteNameFem.partA;
                }
                if (options?.gender === 'neut') {
                    return russianSiteNameNeut.partA;
                }
                return legacySiteName.partA;
            }
            if (key === 'adventureSiteGenerator.siteName.partB') {
                return legacySiteName.partB;
            }
            return key;
        },
    }),
}));

const mockConstruction: NamedWithGender[] = [
    { name: '<b>строение1</b>', gender: 'neut' },
];

const mockRuinAction: FormVariants[] = [
    {
        masc: 'разрушенный',
        fem: 'разрушенная',
        neut: 'разрушенное',
        plural: 'разрушенные',
    },
];

const mockInhabitant: NamedWithGender[] = [{ name: 'Мыши', gender: 'plural' }];

const mockInhabitantAction: FormVariants[] = [
    { masc: 'ищет', fem: 'ищет', neut: 'ищет', plural: 'ищут' },
];

const mockSummary = {
    format: '',
    construction: mockConstruction,
    ruinAction: mockRuinAction,
    ruin: ['Ruin1'],
    inhabitant: mockInhabitant,
    inhabitantAction: mockInhabitantAction,
    inhabitantGoal: ['Goal1'],
    secretHidden: ['Hidden1'],
    secret: ['Secret1'],
};

const mockRoomTypes = [
    {
        weight: 1,
        typeName: 'Empty',
        descriptions: ['Desc1'],
        creatureChance: 3,
        treasureChance: 1,
    },
];

const buildGeneratorData = (
    siteName: AdventureSiteGeneratorData['siteName'],
): AdventureSiteGeneratorData => ({
    siteName,
    summary: mockSummary,
    roomTypes: mockRoomTypes,
});

describe('createSiteName — согласование по родам', async () => {
    const { createAdventureSiteData } = await import('../useAdventureSite');

    test('обратная совместимость: массив строк → "Black Tower"', () => {
        const data = buildGeneratorData(legacySiteName);
        const name = createAdventureSiteData(data).name;
        expect([
            'Black Tower',
            'Black Tree',
            'White Tower',
            'White Tree',
        ]).toContain(name);
    });

    test('женский род: gender=fem → "Чёрная Башня"', () => {
        const data = buildGeneratorData(russianSiteNameFem);
        const name = createAdventureSiteData(data).name;
        expect([
            'Чёрная Башня',
            'Чёрная Пещера',
            'Белая Башня',
            'Белая Пещера',
        ]).toContain(name);
    });

    test('мужской род: gender=masc → "Чёрный Пень"', () => {
        const data = buildGeneratorData(russianSiteNameMasc);
        const name = createAdventureSiteData(data).name;
        expect([
            'Чёрный Пень',
            'Чёрный Дом',
            'Белый Пень',
            'Белый Дом',
        ]).toContain(name);
    });

    test('средний род: gender=neut → "Чёрное Дупло"', () => {
        const data = buildGeneratorData(russianSiteNameNeut);
        const name = createAdventureSiteData(data).name;
        expect([
            'Чёрное Дупло',
            'Чёрное Озеро',
            'Белое Дупло',
            'Белое Озеро',
        ]).toContain(name);
    });
});
