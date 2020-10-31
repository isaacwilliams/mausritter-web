import React, { useMemo } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SiteContainer from '../components/layout/SiteContainer';
import SEO from "../components/layout/SEO"

import TitleSection from '../components/homePage/title/TitleSection';
import ParalaxSection from '../components/homePage/paralax/ParalaxSection';
import FeaturesSection from '../components/homePage/features/FeaturesSection';
import GetGameSection from '../components/homePage/getGame/GetGameSection';
import ResourcesSection from '../components/homePage/resources/ResourcesSection';
import FloatingNavigation from '../components/navigation/FloatingNavigation';

import Footer from '../components/navigation/Footer';

import useScrollPosition from '../components/hooks/useScrollPosition';
import useWindowSize from '../components/hooks/useWindowSize';

const IndexPage = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    const showNav = scrollPosition > windowSize.height - 80;

    return (
        <SiteContainer>
            <FloatingNavigation hide={!showNav} />
            <TitleSection />
            <ParalaxSection scrollPosition={scrollPosition} windowSize={windowSize} />
            <FeaturesSection />
            <GetGameSection />
            <ResourcesSection />
            <Footer />
        </SiteContainer>
    );
}

export default IndexPage
