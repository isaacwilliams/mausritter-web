import { isEmpty } from 'lodash';
import { sum, times, get, split, toPairs, isString, isObject, isArray, includes } from 'lodash/fp';

export const resolveWithContext = (input: any, key: string, context: Map<string, string[]>) => {
    if (isString(input)) {
        return input;
    }

    if (!isObject(input)) {
        console.error("Expected string or object as input!", input)
        return '[error]';
    }

    let result = null;

    // Try to lookup matching translation
    for (const [property, value] of toPairs(input)) {

        const parts = split('_', property);

        // If property name is exactly the key without any conditions eg: "familyName"
        // use it as fallback translation, when no other matching property is found
        if (parts.length == 1 && property == key) {
            if (result == null) {
                result = value;
            }

            continue;
        }

        // Property name must begin with key or it's not a translation
        // eg: "familyName_"
        if (parts[0] != key) {
            continue;
        }

        // Go trough declared conditions for this translation:
        // eg: "familyName_firstName:male"
        for (let i = 1; i < parts.length; i++) {
            // Get current condition from parts
            const conditionValue = parts[i];

            // Parse condition with equal condition to extract key and value
            const conditionParts = split('=', conditionValue);

            // Condition must have exactly one equal operator or it's invalid
            if (conditionParts.length != 2) {
                break;
            }

            const [lookupKey, lookupValue] = conditionParts;

            // Check if translation condition is matched
            if (!includes(lookupValue, context.get(lookupKey))) {
                break;
            }

            result = value;
        }

    }

    if (result == null) {
        console.error("Unable to resolve value with given context!", input, key, context);
        return '[error]';
    }

    const contextValue = get('context', input);

    if (!isEmpty(contextValue)) {
        context.set(key, isArray(contextValue) ? contextValue : [contextValue]);
    }

    return result;
}

export const pickWithContext = <T>(array: T[], key: string, context: Map<string, string[]>) => {
    return resolveWithContext(pick(array), key, context);
}

export const pick = <T>(array: T[]) =>
    array[Math.floor(Math.random() * array.length)];

export const weightedPick = <T extends { weight: number }>(array: T[]): T => {
    const totalWeight = sum(array.map(item => item.weight));
    const random = Math.random() * totalWeight;

    let total = 0;
    for (const item of array) {
        total += item.weight;
        if (random < total) {
            return item;
        }
    }

    // fallback to first item
    return array[0];
};

export const roll = (size: number) => Math.floor(Math.random() * size) + 1;
export const rollDice = (numberOfDice: number) => (sides: number) =>
    sum(times(() => roll(sides), numberOfDice));
