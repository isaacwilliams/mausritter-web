import React, { useMemo } from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import SEO from "../components/layout/SEO"
import SiteContainer from '../components/layout/SiteContainer';
import FloatingNavigation from '../components/navigation/FloatingNavigation';

import MouseGenerator from '../components/mouseGenerator/MouseGenerator';

const BodyDark = styled.div`
    position: absolute;

    background: #eee;
    height: 100%;
    width: 100%;
`;

const IndexPage = () => {
    return (
        <SiteContainer>
            <FloatingNavigation transparent />

            <MouseGenerator />
        </SiteContainer>
    );
}

export default IndexPage
