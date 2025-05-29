import { styled } from 'styled-components';
import BodyText from '../styles/BodyText';
import media from '../styles/media';
import font from '../styles/font';

// CSS variables for scalable typography
const SRDBodyText = styled.div`
    /* Base scale variables */
    --srd-font-size: 1.2rem;
    --srd-line-height: 1.6;
    --srd-spacing: 0.9em;
    --srd-grey-bg: #eee;

    font-size: var(--srd-font-size);
    line-height: var(--srd-line-height);

    /* Headings */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${font.display};
        margin-top: calc(var(--srd-spacing) * 1);
        margin-bottom: calc(var(--srd-spacing) * 0.2);
        font-weight: 700;
        line-height: 1.15;
    }
    h1 {
        font-size: calc(var(--srd-font-size) * 2);
    }
    h2 {
        font-size: calc(var(--srd-font-size) * 1.5);
    }
    h3 {
        font-size: calc(var(--srd-font-size) * 1.2);
    }
    h4 {
        font-size: calc(var(--srd-font-size) * 1.08);
    }
    h5 {
        font-size: calc(var(--srd-font-size) * 1.02);
    }
    h6 {
        font-size: var(--srd-font-size);
    }

    /* Paragraphs */
    p {
        margin-top: calc(var(--srd-spacing) * 0.5);
        margin-bottom: calc(var(--srd-spacing) * 0.5);
    }

    /* Lists */
    ul,
    ol {
        margin-top: calc(var(--srd-spacing) * 0.5);
        margin-bottom: calc(var(--srd-spacing) * 0.5);
        margin-left: 1.1em;
        padding-left: 0;
    }
    ul {
        list-style: disc inside;
    }
    ol {
        list-style: decimal inside;
    }
    li {
        margin-bottom: 0.12em;
        line-height: 1.4;
    }

    /* Blockquotes */
    blockquote {
        border-left: 2px solid #e0e0e0;
        margin: calc(var(--srd-spacing) * 0.5) 0;
        padding: 0.2em 0.5em;
        color: #555;
        background: var(--srd-grey-bg);
        font-style: italic;
    }

    /* Code */
    code,
    pre {
        font-family: 'Fira Mono', 'Consolas', monospace;
        font-size: 0.9em;
        background: var(--srd-grey-bg);
        border-radius: 3px;
    }
    code {
        padding: 0.06em 0.18em;
    }
    pre {
        padding: 0.5em;
        overflow-x: auto;
        margin: calc(var(--srd-spacing) * 0.5) 0;
    }

    /* Tables */
    table {
        width: 100%;
        border-collapse: collapse;
        margin: calc(var(--srd-spacing) * 0.5) 0;
        font-size: 1em;
    }
    th,
    td {
        padding: 0.25em 0.5em;
        text-align: left;
    }
    th {
        background: var(--srd-grey-bg);
        font-weight: bold;
    }
    tr:nth-child(even) {
        background: var(--srd-grey-bg);
    }

    /* Statblock */
    .statblock {
        padding: 0.25rem 1rem;
        background: var(--srd-grey-bg);

        /* Beveled corners using clip-path for 45deg angles */
        clip-path: polygon(
            8px 0%,
            calc(100% - 8px) 0%,
            100% 8px,
            100% calc(100% - 8px),
            calc(100% - 8px) 100%,
            8px 100%,
            0% calc(100% - 8px),
            0% 8px
        );
    }

    /* Dice header column fixed width */
    --srd-dice-header-width: 3rem;

    th.dice-header,
    td.dice-header {
        width: var(--srd-dice-header-width);
        min-width: var(--srd-dice-header-width);
        max-width: var(--srd-dice-header-width);
        text-align: left;
    }

    /* Links */
    a {
        color: #0074d9;
        text-decoration: underline;
        word-break: break-word;
        &:hover,
        &:focus {
            color: #005fa3;
            text-decoration: underline wavy;
        }
    }

    /* Images */
    img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: calc(var(--srd-spacing) * 0.5) auto;
    }

    /* Horizontal rule */
    hr {
        border: none;
        border-top: 1px solid #e0e0e0;
        margin: calc(var(--srd-spacing) * 1) 0;
    }

    /* Responsive scaling */
    ${media.phone`
    --srd-font-size: 1rem;
    --srd-spacing: 0.6em;
  `}

    /* Utility classes for scaling */
  &.small {
        --srd-font-size: 1rem;
    }
    &.large {
        --srd-font-size: 1.5rem;
    }
    &.center {
        text-align: center;
    }

    /* Inline styles */
    strong,
    b {
        font-weight: bold;
    }
    em,
    i {
        font-style: italic;
    }
    del,
    s {
        text-decoration: line-through;
    }
    u {
        text-decoration: underline;
    }
`;

export default SRDBodyText;
