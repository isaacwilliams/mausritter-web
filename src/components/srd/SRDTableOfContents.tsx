import { styled } from 'styled-components';

import srdLogo from './srd-logo.svg';
import { useData } from 'vike-react/useData';
import { SRDIndex, SRDPage } from './srdTypes';
import SRDTableOfContentsList from './SRDTableOfContentsList';

const SRDTitleLink = styled.a`
    text-decoration: none;
    color: inherit;
    display: block;
`;

const SRDTitle = styled.h1`
    font-size: 0;
    color: transparent;
    background: url(${srdLogo}) no-repeat center;
    background-size: contain;
    width: 100%;
    height: 6rem;
`;

const TOC = styled.nav`
    position: sticky;
    top: 0;
    left: 0;

    align-self: start;

    padding-top: 4rem;
    padding-right: 4rem;
`;

const SRDTableOfContents: React.FC<{
    index: SRDIndex;
    currentPage?: SRDPage;
}> = ({ index, currentPage }) => {
    return (
        <TOC>
            <SRDTitleLink href="/srd">
                <SRDTitle>Mausritter System Reference Document</SRDTitle>
            </SRDTitleLink>
            <SRDTableOfContentsList index={index} currentPage={currentPage} />
        </TOC>
    );
};

export default SRDTableOfContents;
