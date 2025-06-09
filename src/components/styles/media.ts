import { css } from 'styled-components';

export const mediaSizes = {
    large: 1400,
    desktop: 992,
    phone: 672,
};

type MediaFunction = (
    ...args: Parameters<typeof css>
) => ReturnType<typeof css>;

type Media = {
    phone: MediaFunction;
    desktop: MediaFunction;
    large: MediaFunction;
    size: (breakpoint: number | string) => MediaFunction;
};

const media: Media = {
    phone: (...args) => css`
        @media (max-width: ${mediaSizes.phone}px) {
            ${css(...args)}
        }
    `,
    desktop: (...args) => css`
        @media (min-width: ${mediaSizes.desktop}px) {
            ${css(...args)}
        }
    `,
    large: (...args) => css`
        @media (min-width: ${mediaSizes.large}px) {
            ${css(...args)}
        }
    `,
    size:
        (breakpoint) =>
        (...args) => css`
            @media (max-width: ${breakpoint}) {
                ${css(...args)}
            }
        `,
};

export default media;
