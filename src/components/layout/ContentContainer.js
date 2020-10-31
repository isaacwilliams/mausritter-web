import styled from 'styled-components';
import media from '../styles/media';

const ContentContainer = styled.section`
    margin-left: auto;
    margin-right: auto;

    width: auto;

    padding-left: 3rem;
    padding-right: 3rem;

    ${media.phone`
        padding-left: 0;
        padding-right: 0;
    `}

    ${media.large`
        width: 70rem;
        padding-left: 0;
        padding-right: 0;
    `}
`;

export const FlexContainer = styled(ContentContainer)`
    display: flex;

    align-items: center;
    justify-content: center;

    flex-direction: row;
`

export default ContentContainer;
