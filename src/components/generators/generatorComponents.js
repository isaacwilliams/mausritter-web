import styled from 'styled-components';

import font from '../styles/font';
import colors from '../styles/colors';
import media from '../styles/media';

export const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: bold;
    ${font.display};
`;

export const TitleWrapper = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-top: 5rem;
    margin-bottom: 3rem;

    ${media.phone`
        display: block;
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
    `}
`;

export const RollButton = styled.button`
    padding: 0.6rem 1.5rem;

    border: 0;
    border-radius: 0.2rem;

    background: #ddd;
    color: ${colors.body};

    font-size: 1.1rem;
    ${font.display}
    letter-spacing: 0.05rem;

    cursor: pointer;
    outline: none;

    &:hover {
        background: yellow;
        color: black;
    }
`;
