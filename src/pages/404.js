import React from "react"

import SiteContainer from "../components/layout/SiteContainer"
import SEO from "../components/layout/SEO"

const NotFoundPage = () => (
  <SiteContainer>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </SiteContainer>
)

export default NotFoundPage
