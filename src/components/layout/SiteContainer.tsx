import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import { LanguageProvider, useLanguage } from '../../i18n/languageContext';

// @ts-ignore — these do not exist, just not recognized by the TS compiler
import websiteShareImage from './website-share-image.jpg';
// @ts-ignore
import favicon32 from './favicon-32x32.png';
// @ts-ignore
import favicon16 from './favicon-16x16.png';

import reset from '../styles/reset';
import font from '../styles/font';
import colors from '../styles/colors';

import '../../i18n/initI18n';

const GlobalStyle = createGlobalStyle<{ $dark: boolean }>`
    ${reset};

    body {
        ${font.fontRoot}

        font-size: 1rem;
        line-height: 1.33;
        color: ${colors.body};

        background: ${({ $dark: dark }) => (dark ? '#eeeeee' : 'white')};

        a {
            color: ${colors.body};
        }

        &:lang(cs) {
            ${font.bodyOpenSans}
        }
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,80,300..800;1,80,300..800&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyle $dark={dark} />
            {children}
        </LanguageProvider>
    );
};

export default SiteContainer;
