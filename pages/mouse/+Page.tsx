import React from 'react';
import { Head } from 'vike-react/Head';

import SiteContainer from '../../src/components/layout/SiteContainer';
import Navigation from '../../src/components/navigation/Navigation';

import MouseGenerator from '../../src/components/generators/mouse/MouseGenerator';

const IndexPage = () => {
    return (
        <SiteContainer>
            <Head>
                <title>Make a mouse</title>
            </Head>

            <Navigation showLanguage />

            <MouseGenerator />
        </SiteContainer>
    );
};

export default IndexPage;
