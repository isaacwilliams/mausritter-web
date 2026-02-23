import { describe, expect, test, vi } from 'vitest';
import {
    simpleSiteName,
    complexSiteNameMasc,
    complexSiteNameFem,
    complexSiteNameNeut,
} from '../__fixtures__/siteName';
import {
    AdventureSiteGeneratorData,
    NamedWithContext,
    FormVariants,
} from '../adventureSiteGeneratorTypes';
import { createAdventureSiteData } from '../useAdventureSite';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: { context?: string }) => {
            if (key === 'adventureSiteGenerator.siteName.modifier') {
                if (options?.context === 'masc') {
                    return complexSiteNameMasc.modifier;
                }
                if (options?.context === 'fem') {
                    return complexSiteNameFem.modifier;
                }
                if (options?.context === 'neut') {
                    return complexSiteNameNeut.modifier;
                }
                return simpleSiteName.modifier;
            }
            if (key === 'adventureSiteGenerator.siteName.location') {
                return simpleSiteName.location;
            }
            return key;
        },
    }),
}));

const mockConstruction: NamedWithContext[] = [
    { name: '<b>строение1</b>', context: 'neut' },
];

const mockRuinAction: FormVariants[] = [
    {
        masc: 'разрушенный',
        fem: 'разрушенная',
        neut: 'разрушенное',
        plural: 'разрушенные',
    },
];

const mockInhabitant: NamedWithContext[] = [
    { name: 'Мыши', context: 'plural' },
];

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

describe('createSiteName — gender agreement', async () => {
    test('name does not contain [object Object]', () => {
        const data = buildGeneratorData(complexSiteNameMasc);
        const name = createAdventureSiteData(data).name;
        expect(name).not.toContain('[object Object]');
    });

    test('backward compatibility: string array → "Black Tower"', () => {
        const data = buildGeneratorData(simpleSiteName);
        const name = createAdventureSiteData(data).name;
        expect(name).toBeOneOf([
            'Black Tower',
            'Black Tree',
            'White Tower',
            'White Tree',
        ]);
    });

    test('feminine: context=fem → "Чёрная Башня"', () => {
        const data = buildGeneratorData(complexSiteNameFem);
        const name = createAdventureSiteData(data).name;
        expect(name).toBeOneOf([
            'Чёрная Башня',
            'Чёрная Пещера',
            'Белая Башня',
            'Белая Пещера',
        ]);
    });

    test('masculine: context=masc → "Чёрный Пень"', () => {
        const data = buildGeneratorData(complexSiteNameMasc);
        const name = createAdventureSiteData(data).name;
        expect(name).toBeOneOf([
            'Чёрный Пень',
            'Чёрный Дом',
            'Белый Пень',
            'Белый Дом',
        ]);
    });

    test('neutral: context=neut → "Чёрное Дупло"', () => {
        const data = buildGeneratorData(complexSiteNameNeut);
        const name = createAdventureSiteData(data).name;
        expect(name).toBeOneOf([
            'Чёрное Дупло',
            'Чёрное Озеро',
            'Белое Дупло',
            'Белое Озеро',
        ]);
    });
});
