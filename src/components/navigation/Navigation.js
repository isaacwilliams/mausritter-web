import React from 'react';
import styled from 'styled-components';
import font from '../styles/font';
import media from '../styles/media';


import { Link } from 'gatsby'

const Nav = styled.nav`
    margin: auto;
    padding: 1rem;

    display: flex;

    align-items: center;
    justify-content: space-between;

    ${media.phone`
        padding: 0.5rem 1rem;
    `}
`

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
`

const NavItem = styled(Link)`
    ${font.display}

    padding: 0.5rem 1rem;
    margin: 0 2rem;
    color: black;
    letter-spacing: 0.025rem;
    white-space: nowrap;

    background: ${({ transparent }) => transparent ? 'transparent' : 'white'};

    &:hover {
        background: yellow;
    }

    ${media.size('1100px')`
        padding: 0.5rem 0.5rem;
        margin: 0 1rem;
    `}

    ${media.phone`
        padding: 0.4rem 0.8rem;
        margin: 0;
    `}
`

const NavLogo = styled(Link)`
    margin-right: auto;

    width: ${260 * 0.7}px;
    height: ${78 * 0.7}px;

    font-size: 0;

    background: url(${require('../navigation/logos/mausritter-logo.svg')});
    background-position: center top;
    background-size: 100% auto;
    background-repeat: no-repeat;

    &:hover {
        background-color: yellow;
    }

    ${media.phone`
        width: ${260 * 0.5}px;
        height: ${78 * 0.5}px;
    `}
`

const Divider = styled.div`
    height: 1rem;
    width: 1px;
    margin: 0 2rem;
    border-right: 1px solid #ccc;
`;


const Navigation = ({ transparent }) => {
    return (
        <Nav>
            <NavSection className="left">
                <NavLogo to="/">
                    Mausritter
                </NavLogo>
            </NavSection>

            <NavSection className="center">
                <NavItem to="/#get-mausritter" transparent={transparent}>
                    Get the game
                </NavItem>

                <NavItem to="/#resources" transparent={transparent}>
                    Resources
                </NavItem>

                <NavItem to="/#community" transparent={transparent}>
                    Community
                </NavItem>
            </NavSection>

            <NavSection className="right">
                <NavItem to="/mouse" transparent={transparent}>
                    Make a mouse
                </NavItem>
            </NavSection>


        </Nav>
    );
};

export default Navigation;
