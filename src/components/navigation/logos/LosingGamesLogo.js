import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
    &.light {
        filter: invert(100%);
    }
`;

const LosingGamesLogo = ({ className }) => (
    <a href="https://losing.games">
        <LogoImage src={require('./losing-games-logo.svg')} width="160" className={className} />
    </a>
);

export default LosingGamesLogo;
