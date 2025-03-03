import { css } from 'styled-components';

const sizes = {
    large: 1400,
    desktop: 992,
    phone: 672,
};

export default {
    phone: (...args) => css`
        @media (max-width: ${sizes.phone}px) {
            ${css(...args)}
        }
    `,
    desktop: (...args) => css`
        @media (min-width: ${sizes.desktop}px) {
            ${css(...args)}
        }
    `,
    large: (...args) => css`
        @media (min-width: ${sizes.large}px) {
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
