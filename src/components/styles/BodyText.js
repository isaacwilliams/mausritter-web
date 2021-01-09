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

    h1, h2, h3, h4 {
        ${font.display};
    }

    h1 {
        font-size:
    }

    p, ul {
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
