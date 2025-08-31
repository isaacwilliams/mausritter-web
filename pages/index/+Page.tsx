import React from 'react';

import SiteContainer from '../../src/components/layout/SiteContainer';

import TitleSection from '../../src/components/homePage/title/TitleSection';
import ParalaxSection from '../../src/components/homePage/paralax/ParalaxSection';
import WhatIsMausritterSection from '../../src/components/homePage/whatIsMausritter/WhatIsMausritterSection';
import FeaturesSection from '../../src/components/homePage/features/FeaturesSection';
import GetGameSection from '../../src/components/homePage/getGame/GetGameSection';
import ResourcesSection from '../../src/components/homePage/resources/ResourcesSection';
import CommunitySection from '../../src/components/homePage/community/CommunitySection';
import FloatingNavigation from '../../src/components/navigation/FloatingNavigation';

import Footer from '../../src/components/navigation/Footer';

import useScrollPosition from '../../src/components/hooks/useScrollPosition';
import useWindowSize from '../../src/components/hooks/useWindowSize';

const IndexPage = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    const showNav = scrollPosition > (windowSize?.height || 0) - 80;

    return (
        <SiteContainer>
            <FloatingNavigation hide={!showNav} />
            <TitleSection />
            <ParalaxSection
                scrollPosition={scrollPosition}
                windowSize={windowSize}
            />
            <WhatIsMausritterSection />
            <FeaturesSection />
            <GetGameSection />
            <ResourcesSection />
            <CommunitySection />
            <Footer />
        </SiteContainer>
    );
};

export default IndexPage;
