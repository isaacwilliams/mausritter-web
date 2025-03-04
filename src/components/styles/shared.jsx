import { styled } from 'styled-components';
import media from './media';
import font from './font';

export const Title = styled.h2`
    ${font.display}
    padding-bottom: 2rem;

    font-size: 2.5rem;

    text-align: center;

    ${media.phone`
        font-size: 2rem;
    `}
`;

export const SubTitle = styled.h3`
    ${font.display}
    padding-bottom: 1rem;

    font-size: 2rem;

    ${media.phone`
        font-size: 1.4rem;
    `}
`;
