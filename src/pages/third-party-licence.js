import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import SEO from "../components/layout/SEO"
import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/navigation/Footer';

import ThirdPartyLicence from '../components/thirdPartyLicence/ThirdPartyLicence';

const IndexPage = () => {
    return (
        <SiteContainer>
            <SEO title="Mausritter Third-party Licence" />

            <Navigation />

            <ThirdPartyLicence />

            <Footer />
        </SiteContainer>
    );
}

export default IndexPage
