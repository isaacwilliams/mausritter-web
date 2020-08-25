import { css } from 'styled-components';

const sizes = {
    large: 1400,
    desktop: 992,
    phone: 672,
}

export default {
    phone: (...args) => css`
        @media (max-width: ${sizes.phone / 16}rem) {
            ${css(...args)}
        }
    `,
    desktop: (...args) => css`
        @media (min-width: ${sizes.desktop / 16}rem) {
            ${css(...args)}
        }
    `,
    large: (...args) => css`
        @media (min-width: ${sizes.large / 16}rem) {
            ${css(...args)}
        }
    `,
};
