import React from 'react';

import SiteContainer from '../../src/components/layout/SiteContainer';
import Navigation from '../../src/components/navigation/Navigation';
import Footer from '../../src/components/navigation/Footer';

import ThirdPartyLicence from '../../src/components/thirdPartyLicence/ThirdPartyLicence';

const IndexPage = () => {
    return (
        <SiteContainer>
            <Navigation />

            <ThirdPartyLicence />

            <Footer />
        </SiteContainer>
    );
};

export default IndexPage;
