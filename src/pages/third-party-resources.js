import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/layout/SEO"
import SiteContainer from "../components/layout/SiteContainer"
import Navigation from "../components/navigation/Navigation"
import Footer from "../components/navigation/Footer"

import ThirdPartyResources from "../components/thirdPartyResources/ThirdPartyResources"

const IndexPage = () => {
    return (
        <SiteContainer>
            <SEO title="Mausritter Third-party Adventures & Resources" />

            <Navigation />

            <ThirdPartyResources />

            <Footer />
        </SiteContainer>
    )
}

export default IndexPage
