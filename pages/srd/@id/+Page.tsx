import React from 'react';

import SiteContainer from '../../../src/components/layout/SiteContainer';
import Navigation from '../../../src/components/navigation/Navigation';
import Footer from '../../../src/components/navigation/Footer';

import SRDTemplate from '../../../src/components/srd/SRDPage';

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
