import React from 'react';
import styled from 'styled-components';
import font from '../styles/font';

import { Link } from 'gatsby'

const Nav = styled.nav`
    margin: auto;
    padding: 1rem;

    display: flex;

    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const NavItem = styled(Link)`
    ${font.display}

    padding: 0.5rem 1rem;
    margin: 0 2rem;
    color: black;
    letter-spacing: 0.025rem;
    white-space: nowrap;

    background: white;

    &:hover {
        background: yellow;
    }
`

const Navigation = () => {
    return (
        <Nav>
            <NavItem to="/#get-mausritter">
                Get the game
            </NavItem>

            <NavItem to="/mouse">
                Make a mouse
            </NavItem>

            <NavItem to="/resources">
                Resources
            </NavItem>

            <NavItem to="/community">
                Community
            </NavItem>
        </Nav>
    );
};

export default Navigation;
