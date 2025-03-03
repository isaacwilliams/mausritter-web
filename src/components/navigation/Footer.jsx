import React from 'react';
import { styled } from 'styled-components';

import LosingGamesLogo from './logos/LosingGamesLogo';

const Footer = styled.footer`
    padding: 3rem;

    text-align: center;

    background: #222222;
    color: white;

    a {
        color: white;
    }
`;

const LogoContainer = styled.div`
    padding-top: 3rem;
`;

const FooterSection = () => (
    <Footer>
        Mausritter ©2024 <a href="https://isaacwilliams.net">Isaac Williams</a>{' '}
        &amp; <a href="https://losing.games">Losing Games</a>
        <LogoContainer>
            <LosingGamesLogo className="light" />
        </LogoContainer>
    </Footer>
);

export default FooterSection;
