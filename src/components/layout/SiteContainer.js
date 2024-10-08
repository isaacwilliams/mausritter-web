import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import websiteShareImage from './website-share-image.jpg';
import favicon32 from './favicon-32x32.png';
import favicon16 from './favicon-16x16.png';

import reset from '../styles/reset';
import font from '../styles/font';
import colors from '../styles/colors';

import '../../i18n/initI18n';
import { LanguageProvider } from '../../i18n/languageContext';

const GlobalStyle = createGlobalStyle`
    ${reset};

    body {
        ${font.body}
        font-size: 1rem;
        line-height: 1.33;
        color: ${colors.body};

        background: ${({ dark }) => (dark ? '#eeeeee' : 'white')};
    }

    a {
        color: ${colors.body};
    }
`;

const SiteContainer = ({ children, dark }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    siteUrl
                    description
                }
            }
        }
    `);

    return (
        <LanguageProvider>
            <Helmet
                title={data.site.siteMetadata.title || ''}
                meta={[
                    {
                        name: 'description',
                        content: data.site.siteMetadata.description || '',
                    },
                    {
                        name: 'og:description',
                        content: data.site.siteMetadata.description || '',
                    },
                    {
                        name: 'og:title',
                        content: data.site.siteMetadata.title || '',
                    },
                    {
                        name: 'og:image',
                        content: `${data.site.siteMetadata.siteUrl}${websiteShareImage}`,
                    },
                    { name: 'og:image:width', content: 1600 },
                    { name: 'og:image:height', content: 900 },
                    {
                        name: 'twitter:card',
                        content: 'summary_large_image',
                    },
                    {
                        name: 'twitter:image',
                        content: `${data.site.siteMetadata.siteUrl}${websiteShareImage}`,
                    },
                    { name: 'twitter:site', content: '@mausritter' },
                ]}
            >
                <html lang="en" />
                <link
                    rel="alternate"
                    type="application/rss+xml"
                    href="/feed.xml"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href={favicon32}
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href={favicon16}
                />
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/jcg4vha.css"
                />
            </Helmet>
            <GlobalStyle dark={dark} />
            {children}
        </LanguageProvider>
    );
};

export default SiteContainer;
