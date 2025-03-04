import React from 'react';

import SiteContainer from '../../src/components/layout/SiteContainer';
import Navigation from '../../src/components/navigation/Navigation';

import AdventureSiteGenerator from '../../src/components/generators/adventureSite/AdventureSiteGenerator';

const IndexPage = () => {
    return (
        <SiteContainer>
            <Navigation showLanguage={true} />

            <AdventureSiteGenerator />
        </SiteContainer>
    );
};

export default IndexPage;
