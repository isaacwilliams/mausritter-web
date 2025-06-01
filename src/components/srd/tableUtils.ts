import { ReactElement } from 'react';

export const getCellText = (
    children: ReactElement | string | ReactElement[],
): string => {
    const text =
        typeof children === 'string'
            ? children
            : Array.isArray(children)
              ? children.join('')
              : '';

    return text.trim();
};

export const kebabCase = (str: string): string => {
    return str
        .toLowerCase()
        .replace(/[.,]/g, '') // remove "." and ","
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens
};
