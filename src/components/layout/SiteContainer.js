import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, injectGlobal } from 'styled-components';

import reset from '../styles/reset';
import font from '../styles/font';
import colors from '../styles/colors';

const GlobalStyle = createGlobalStyle`
    ${reset};

    body {
        ${font.body}
        font-size: 1rem;
        line-height: 1.33;
        color: ${colors.body};
    }

    a {
        color: ${colors.body};
    }
`

const pageQuery = graphql`
query SiteTitleQuery {
    site {
        siteMetadata {
            title
        }
    }
}
`

const SiteContainer = ({ children }) => (
    <StaticQuery
        query={pageQuery}
        render={data => (
            <>
                <Helmet title={data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'A blog about D&D and other games' },
                            { name: 'og:description', content: 'A blog about D&D and other games' },
                            { name: 'og:title', content: data.site.siteMetadata.title },
                        ]}>
                    <html lang="en" />
                    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
                    <link rel="icon" type="image/png" sizes="32x32" href={require('./favicon-32x32.png')} />
                    <link rel="icon" type="image/png" sizes="16x16" href={require('./favicon-16x16.png')} />
                    <link rel="stylesheet" href="https://use.typekit.net/jcg4vha.css" />
                </Helmet>
                <GlobalStyle />
                {children}
            </>
        )}
    />
);

export default SiteContainer;
