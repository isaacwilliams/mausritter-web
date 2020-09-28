import React from 'react';
import styled from 'styled-components';

import LosingGamesLogo from './logos/LosingGamesLogo';

const Footer = styled.footer`
    padding: 3rem;

    text-align: center;

    background: #222222;
    color: white;
`;

const LogoContainer = styled.div`
    padding-top: 3rem;
`

const FooterSection = () => (
    <Footer>
        Mausritter ©2020 Isaac Williams & Losing Games

        <LogoContainer>
            <LosingGamesLogo className="light" />
        </LogoContainer>
    </Footer>
);

export default FooterSection;
