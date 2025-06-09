import React, { useState } from 'react';
import { styled } from 'styled-components';
import font from '../styles/font';
import media from '../styles/media';

import mausritterLogo from '../navigation/logos/mausritter-logo.svg';
import LanguageSelect from './language/LanguageSelect';
import colors from '../styles/colors';
import useIsMobile from '../hooks/useIsMobile';

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
        &.center,
        &.right {
            display: none;
        }

        &.left {
            margin-left: 0;
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

const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    z-index: 1002;
    width: 30px;
    height: 30px;

    @media (max-width: 700px) {
        display: block;
    }

    span {
        display: block;
        width: 22px;
        height: 3px;
        margin: 4px 0;
        background: #222;
        border-radius: 2px;
        transition: 0.3s;
    }
`;

const MobileMenu = styled.div<{
    open: boolean;
}>`
    display: none;
    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 80vw;
        max-width: 320px;
        background: white;
        box-shadow: -2px 0 12px rgba(0, 0, 0, 0.15);
        padding: 2rem 1.5rem;
        z-index: 1001;
        transform: ${({ open }) =>
            open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

const Overlay = styled.div<{
    open: boolean;
}>`
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1000;
`;

type NavigationProps = {
    transparent?: boolean;
    showLanguage?: boolean;
    extraItems?: React.ReactNode;
};

const DesktopNavigation = ({ transparent, showLanguage }: NavigationProps) => (
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
            {/* <NavItem href="/srd" transparent={transparent}>
                Game Rules (SRD)
            </NavItem> */}
        </NavSection>
        <NavSection className="right">
            <NavItem href="/mouse" transparent={transparent}>
                Make a mouse
            </NavItem>
            {showLanguage && <LanguageSelect />}
        </NavSection>
    </Nav>
);

const MobileNavigation = ({
    transparent,
    showLanguage,
    extraItems,
}: NavigationProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    React.useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <Nav>
            <NavSection className="left">
                <NavLogo href="/">Mausritter</NavLogo>
            </NavSection>
            <HamburgerButton
                aria-label="Open menu"
                onClick={() => setMenuOpen((v) => !v)}
            >
                <span
                    style={{
                        transform: menuOpen
                            ? 'rotate(45deg) translate(4px, 4px)'
                            : undefined,
                    }}
                />
                <span style={{ opacity: menuOpen ? 0 : 1 }} />
                <span
                    style={{
                        transform: menuOpen
                            ? 'rotate(-45deg) translate(6px, -6px)'
                            : undefined,
                    }}
                />
            </HamburgerButton>
            <Overlay open={menuOpen} onClick={() => setMenuOpen(false)} />
            <MobileMenu open={menuOpen}>
                <NavItem
                    href="/#get-mausritter"
                    transparent={transparent}
                    onClick={() => setMenuOpen(false)}
                >
                    Get the game
                </NavItem>
                <NavItem
                    href="/#resources"
                    transparent={transparent}
                    onClick={() => setMenuOpen(false)}
                >
                    Resources
                </NavItem>
                <NavItem
                    href="/#community"
                    transparent={transparent}
                    onClick={() => setMenuOpen(false)}
                >
                    Community
                </NavItem>
                <NavItem
                    href="/srd"
                    transparent={transparent}
                    onClick={() => setMenuOpen(false)}
                >
                    Game Rules (SRD)
                </NavItem>
                <Divider />
                <NavItem
                    href="/mouse"
                    transparent={transparent}
                    onClick={() => setMenuOpen(false)}
                >
                    Make a mouse
                </NavItem>
                {showLanguage && <LanguageSelect />}
            </MobileMenu>
        </Nav>
    );
};

const Navigation = ({
    transparent,
    showLanguage,
    extraItems,
}: NavigationProps) => {
    const isMobile = useIsMobile();

    return isMobile ? (
        <MobileNavigation
            transparent={transparent}
            showLanguage={showLanguage}
            extraItems={extraItems}
        />
    ) : (
        <DesktopNavigation
            transparent={transparent}
            showLanguage={showLanguage}
        />
    );
};

export default Navigation;
