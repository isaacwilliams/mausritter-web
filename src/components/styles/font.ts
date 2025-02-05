import { css } from 'styled-components';

export default {
    fontRoot: css`
        --font-body: interstate-condensed, sans-serif;
        --font-display: ff-brokenscript-bc-web, serif;
        font-family: var(--font-body);
    `,
    body: css`
        font-family: var(--font-body);
    `,
    bodyOpenSans: css`
        --font-body: 'Open Sans', serif;
        font-optical-sizing: auto;
        font-weight: 350;
        font-style: normal;
        font-variation-settings: 'wdth' 80;
    `,
    display: css`
        font-family: var(--font-display);
    `,
};
