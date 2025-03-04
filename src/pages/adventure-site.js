import React, { useMemo } from 'react';
// import { Link } from 'gatsby';
import { styled } from 'styled-components';

import SEO from '../components/layout/SEO';
import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';

import AdventureSiteGenerator from '../components/generators/adventureSite/AdventureSiteGenerator';

const BodyDark = styled.div`
    position: absolute;

    background: #eee;
    height: 100%;
    width: 100%;
`;

const IndexPage = () => {
    return (
        <SiteContainer>
            <SEO title="Adventure site generator" />

            <Navigation showLanguage={true} />

            <a href="/some-path">Some Link</a>

            <AdventureSiteGenerator />
        </SiteContainer>
    );
};

export default IndexPage;
