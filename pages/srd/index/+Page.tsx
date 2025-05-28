import React from 'react';

import SiteContainer from '../../../src/components/layout/SiteContainer';
import Navigation from '../../../src/components/navigation/Navigation';
import Footer from '../../../src/components/navigation/Footer';

import SRDTemplate from '../../../src/components/srd/SRDPage';
import { useData } from 'vike-react/useData';
import Markdown from 'react-markdown';
import { styled } from 'styled-components';
import BodyText from '../../../src/components/styles/BodyText';
import remarkGfm from 'remark-gfm';
import { SRDPage } from '../../../src/components/srd/srdTypes';

const BodyTextSmall = styled(BodyText)`
    font-size: 1.2rem;
`;

const IndexPage = () => {
    return (
        <SiteContainer>
            <Navigation />

            <SRDTemplate />

            <Footer />
        </SiteContainer>
    );
};

export default IndexPage;
