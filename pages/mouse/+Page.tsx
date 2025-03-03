import React from 'react';

import SEO from '../../src/components/layout/SEO';
import SiteContainer from '../../src/components/layout/SiteContainer';
import Navigation from '../../src/components/navigation/Navigation';

import MouseGenerator from '../../src/components/generators/mouse/MouseGenerator';

const IndexPage = () => {
    return (
        <SiteContainer>
            <header>
                <title>Make a mouse</title>
            </header>

            <Navigation showLanguage />

            <MouseGenerator />
        </SiteContainer>
    );
};

export default IndexPage;
