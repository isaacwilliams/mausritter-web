import React from 'react';
import { styled } from 'styled-components';
import font from '../styles/font';
import media from '../styles/media';

import mausritterLogo from '../navigation/logos/mausritter-logo.svg';
import LanguageSelect from './language/LanguageSelect';
import colors from '../styles/colors';

const Nav = styled.nav`
    margin: auto;
    padding: 1rem;

    display: flex;

    align-items: center;
    justify-content: space-between;

    ${media.phone`
        padding: 0.5rem 1rem;
    `}
`;

const NavSection = styled.div`
    display: flex;

    align-items: center;
    justify-content: center;

    &.left {
        justify-content: flex-start;
        margin-left: 1rem;
    }

    &.right {
        justify-content: flex-end;
        margin-right: 1rem;
    }

    ${media.phone`
        &.left {
            margin-left: 0;
        }

        &.center {
            display: none;
        }

        &.right {
            margin-right: 0;
        }
    `}
`;

const NavItem = styled.a<{
    transparent?: boolean;
}>`
    ${font.display}

    padding: 0.5rem 1rem;
    margin: 0 2rem;
    color: black;
    letter-spacing: 0.025rem;
    white-space: nowrap;

    background: ${({ transparent }) => (transparent ? 'transparent' : 'white')};

    &:hover {
        background: ${colors.highlight};
    }

    ${media.size('1100px')`
        padding: 0.5rem 0.5rem;
        margin: 0 1rem;
    `}

    ${media.phone`
        padding: 0.4rem 0.8rem;
        margin: 0;
    `}
`;

// prettier-ignore
const NavLogo = styled.a`
    margin-right: auto;

    width: ${260 * 0.7}px;
    height: ${78 * 0.7}px;

    font-size: 0;

    background: url("${mausritterLogo}");
    background-position: center top;
    background-size: 100% auto;
    background-repeat: no-repeat;

    &:hover {
        background-color: ${colors.highlight};
    }

    ${media.phone`
        width: ${260 * 0.5}px;
        height: ${78 * 0.5}px;
    `}
`;

const Divider = styled.div`
    height: 1rem;
    width: 1px;
    margin: 0 2rem;
    border-right: 1px solid #ccc;
`;

const Navigation = ({
    transparent,
    showLanguage,
}: {
    transparent?: boolean;
    showLanguage?: boolean;
}) => {
    return (
        <Nav>
            <NavSection className="left">
                <NavLogo href="/">Mausritter</NavLogo>
            </NavSection>

            <NavSection className="center">
                <NavItem href="/#get-mausritter" transparent={transparent}>
                    Get the game
                </NavItem>

                <NavItem href="/#resources" transparent={transparent}>
                    Resources
                </NavItem>

                <NavItem href="/#community" transparent={transparent}>
                    Community
                </NavItem>

                <NavItem href="/srd" transparent={transparent}>
                    Game Rules (SRD)
                </NavItem>
            </NavSection>

            <NavSection className="right">
                <NavItem href="/mouse" transparent={transparent}>
                    Make a mouse
                </NavItem>
                {showLanguage && <LanguageSelect />}
            </NavSection>
        </Nav>
    );
};

export default Navigation;
