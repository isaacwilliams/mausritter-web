import React from 'react';
import { createGlobalStyle } from 'styled-components';

import reset from '../styles/reset';
import font from '../styles/font';
import colors from '../styles/colors';

import '../../i18n/initI18n';
import SSRSafeLanguageProvider from '../../i18n/SSRSafeLanguageProvider';

const GlobalStyle = createGlobalStyle<{
    $dark?: boolean;
}>`
    ${reset};

    body {
        ${font.body}
        font-size: 1rem;
        line-height: 1.33;
        color: ${colors.body};

        background: ${({ $dark: dark }) => (dark ? '#eeeeee' : 'white')};
    }

    a {
        color: ${colors.body};
    }
`;

const SiteContainer = ({
    children,
    dark,
}: {
    children: React.ReactNode;
    dark?: boolean;
}) => {
    return (
        <>
            <GlobalStyle $dark={dark} />
            <SSRSafeLanguageProvider>{children}</SSRSafeLanguageProvider>
        </>
    );
};

export default SiteContainer;
