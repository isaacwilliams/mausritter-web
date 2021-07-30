import React from 'react';
import { Helmet } from 'react-helmet';

import SEO from '../components/layout/SEO';
import SiteContainer from '../components/layout/SiteContainer';
import KickstarterPromoSection from '../components/homePage/title/KickstarterPromoSection';

const IndexPage = () => {
    return (
        <SiteContainer>
            <SEO title="Mausritter is on Kickstarter" />

            <Helmet>
                <meta httpEquiv="refresh" content="0;url=https://www.kickstarter.com/projects/isaac-williams/mausritter-box-set-and-adventure-collection/" />
            </Helmet>

            <KickstarterPromoSection className="fullscreen"
                    href="https://www.kickstarter.com/projects/isaac-williams/mausritter-box-set-and-adventure-collection/"
                    target="_blank">
                <div className="background" />
                <div className="title">
                    <div>Explore further.</div>
                    <div className="kickstarter">Mausritter is on Kickstarter</div>
                </div>
            </KickstarterPromoSection>

        </SiteContainer>
    );
}

export default IndexPage
