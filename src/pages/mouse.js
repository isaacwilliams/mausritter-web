import React, { useMemo } from "react"
import { Link } from "gatsby"

import SEO from "../components/layout/SEO"
import SiteContainer from '../components/layout/SiteContainer';
import FloatingNavigation from '../components/navigation/FloatingNavigation';

const IndexPage = () => {
    return (
        <SiteContainer>
            <FloatingNavigation />
        </SiteContainer>
    );
}

export default IndexPage
