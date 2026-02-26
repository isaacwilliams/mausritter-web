// https://vike.dev/Head

import React from 'react';

import favicon32 from './index/assets/favicon-32x32.png';
import favicon16 from './index/assets/favicon-16x16.png';
import shareImage from './index/assets/website-share-image.jpg';

const URL = 'https://mausritter.com';
const AUTHOR = `@isaacwilliams`;

export default function HeadDefault(pageContext) {
    const { title, description } = pageContext;

    return (
        <>
            <html lang="en" />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="stylesheet" href="https://use.typekit.net/jcg4vha.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;600;700&subset=cyrillic&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="/fonts/adventureSiteFonts.css" />

            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={URL} />
            <meta property="og:image" content={`${URL}/${shareImage}`} />
            <meta property="og:image:width" content="1600" />
            <meta property="og:image:height" content="900" />
            <meta
                property="og:image:alt"
                content="Brave mouse adventurer entering the dark cave beneath a tree root"
            />
            <meta property="og:site_name" content="Mausritter" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content={AUTHOR} />
            <meta name="twitter:creator" content={AUTHOR} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${URL}/${shareImage}`} />
        </>
    );
}
