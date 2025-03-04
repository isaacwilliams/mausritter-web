import React, { useMemo } from 'react';
import { styled } from 'styled-components';

import SEO from '../components/layout/SEO';
import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';

import MouseGenerator from '../components/generators/mouse/MouseGenerator';

const BodyDark = styled.div`
    position: absolute;

    background: #eee;
    height: 100%;
    width: 100%;
`;

const IndexPage = () => {
    return (
        <SiteContainer>
            <SEO title="Make a mouse" />

            <Navigation showLanguage />

            <a href="/some-path">Some Link</a>

            <MouseGenerator />
        </SiteContainer>
    );
};

export default IndexPage;
