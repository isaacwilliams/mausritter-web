import styled from 'styled-components';
import media from './media';
import font from './font';

const BodyText = styled.div`
    ${font.body}

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
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.4rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    p,
    ul {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    table {
        width: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th,
    td {
        padding: 0.5em;
    }

    th {
        background-color: #f0f0f0;
        font-weight: bold;
        font-size: 16px;
        text-align: left;
        ${font.display};
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    ul {
        list-style: disc;
        margin-left: 1em;
    }

    ol {
        list-style: roman;
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
