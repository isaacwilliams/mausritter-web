import { styled } from 'styled-components';
import ContentContainer from '../layout/ContentContainer';
import media from '../styles/media';

const SRDContainer = styled(ContentContainer)`
    display: grid;
    grid-template-columns: 20rem 3fr;
    margin-bottom: 20rem;

    ${media.phone`
        grid-template-columns: 1fr;
        margin-bottom: 10rem;
        margin-left: 1rem;
        margin-right: 1rem;
    `}
`;

export default SRDContainer;
