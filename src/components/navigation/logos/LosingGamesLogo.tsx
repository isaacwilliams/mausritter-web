import React from 'react';
import { styled } from 'styled-components';

import logo from './losing-games-logo.svg';

const LogoImage = styled.img`
    &.light {
        filter: invert(100%);
    }
`;

const LosingGamesLogo = ({ className }: { className?: string }) => (
    <a href="https://losing.games">
        <LogoImage src={logo} width="160" className={className} />
    </a>
);

export default LosingGamesLogo;
