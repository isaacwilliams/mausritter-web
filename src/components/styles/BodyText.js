import styled from 'styled-components';
import media from './media';
import font from './font';

const BodyText = styled.div`
    font-family: interstate-condensed, sans-serif;
    font-size: 1.4rem;
    line-height: 1.4;

    strong {
        font-weight: bold;
    }

    h1,
    h2,
    h3,
    h4 {
        ${font.display};
        margin-top: 0.6em;
        margin-bottom: 0.2em;
    }

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.5em;
    }

    h3 {
        font-size: 1.3em;
    }

    h4 {
        font-size: 1em;
    }

    p,
    ul {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    table {
        width: auto;
    }

    ul {
        list-style: disc;
        margin-left: 1em;
    }

    ol {
        list-style: decimal;
        margin-left: 1em;

        li {
            padding-left: 0.5em;
        }
    }

    ${media.phone`
        font-size: 1.3rem;
    `}

    &.center {
        text-align: center;
    }

    &.small {
        font-size: 1rem;
    }

    &.large {
        font-size: 1.6rem;
    }
`;

export default BodyText;
