import { describe, expect, test, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { pick } from '../../generatorUtils';
import { AdventureSiteGeneratorData } from '../adventureSiteGeneratorTypes';

vi.mock('nanoid', () => ({
    nanoid: vi.fn((length?: number) => 'mocked-id'.slice(0, length ?? 10)),
}));

const mockGeneratorData: AdventureSiteGeneratorData = {
    siteName: {
        partA: ['Black', 'White'],
        partB: ['Tower', 'Tree'],
    },
    summary: {
        format: '',
        construction: ['Construction1', 'Construction2'],
        ruinAction: ['Action1', 'Action2'],
        ruin: ['Ruin1', 'Ruin2'],
        inhabitant: ['Inhabitant1', 'Inhabitant2'],
        inhabitantAction: ['Action1', 'Action2'],
        inhabitantGoal: ['Goal1', 'Goal2'],
        secretHidden: ['Hidden1', 'Hidden2'],
        secret: ['Secret1', 'Secret2'],
    },
    roomTypes: [
        {
            weight: 1,
            typeName: 'Empty',
            descriptions: ['Desc1', 'Desc2'],
            creatureChance: 3,
            treasureChance: 1,
        },
    ],
};

describe('pick utility', () => {
    test('returns element from array', () => {
        const arr = ['a', 'b', 'c'];
        const result = pick(arr);
        expect(result).toBeOneOf(arr);
    });

    test('returns undefined for empty array', () => {
        const result = pick([]);
        expect(result).toBeUndefined();
    });
});

describe('createAdventureSiteData', async () => {
    const { createAdventureSiteData } = await import('../useAdventureSite');

    test('returns AdventureSite object', () => {
        const result = createAdventureSiteData(mockGeneratorData);
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('name');
        expect(result).toHaveProperty('summary');
        expect(result).toHaveProperty('rooms');
    });

    test('name is not empty', () => {
        const result = createAdventureSiteData(mockGeneratorData);
        expect(result.name).toBeTruthy();
        expect(result.name.length).toBeGreaterThan(0);
    });

    test('summary contains all fields', () => {
        const result = createAdventureSiteData(mockGeneratorData);
        expect(result.summary).toHaveProperty('construction');
        expect(result.summary.construction).toBeOneOf(
            mockGeneratorData.summary.construction,
        );
        expect(result.summary).toHaveProperty('ruinAction');
        expect(result.summary.ruinAction).toBeOneOf(
            mockGeneratorData.summary.ruinAction,
        );
        expect(result.summary).toHaveProperty('ruin');
        expect(result.summary.ruin).toBeOneOf(mockGeneratorData.summary.ruin);
        expect(result.summary).toHaveProperty('inhabitant');
        expect(result.summary.inhabitant).toBeOneOf(
            mockGeneratorData.summary.inhabitant,
        );
        expect(result.summary).toHaveProperty('inhabitantAction');
        expect(result.summary.inhabitantAction).toBeOneOf(
            mockGeneratorData.summary.inhabitantAction,
        );
        expect(result.summary).toHaveProperty('inhabitantGoal');
        expect(result.summary.inhabitantGoal).toBeOneOf(
            mockGeneratorData.summary.inhabitantGoal,
        );
        expect(result.summary).toHaveProperty('secretHidden');
        expect(result.summary.secretHidden).toBeOneOf(
            mockGeneratorData.summary.secretHidden,
        );
        expect(result.summary).toHaveProperty('secret');
        expect(result.summary.secret).toBeOneOf(
            mockGeneratorData.summary.secret,
        );
    });

    test('rooms is an array', () => {
        const result = createAdventureSiteData(mockGeneratorData);
        expect(Array.isArray(result.rooms)).toBe(true);
    });
});

describe('useRollAdventureSite', async () => {
    const { default: useRollAdventureSite } = await import(
        '../useAdventureSite'
    );

    test('returns array with AdventureSite and roll function', () => {
        const { result } = renderHook(() =>
            useRollAdventureSite(mockGeneratorData),
        );
        expect(result.current).toHaveLength(2);
        expect(result.current[0]).toHaveProperty('id');
        expect(result.current[0]).toHaveProperty('name');
        expect(typeof result.current[1]).toBe('function');
    });

    test('generates data on mount', () => {
        const { result } = renderHook(() =>
            useRollAdventureSite(mockGeneratorData),
        );
        expect(result.current[0].name).toBeTruthy();
    });

    test('updates data when rollAdventureSite is called', async () => {
        const { result } = renderHook(() =>
            useRollAdventureSite(mockGeneratorData),
        );

        await act(async () => {
            result.current[1]();
        });

        expect(result.current[0].name).toBeTruthy();
    });
});
