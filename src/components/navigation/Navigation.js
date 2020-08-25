import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    margin: auto;
    padding: 1rem;

    display: flex;

    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const NavItem = styled.a`
    font-family: ff-brokenscript-bc-web, serif;
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
            <NavItem href="https://losing-games.itch.io/mausritter">
                Get the game
            </NavItem>

            <NavItem href="/mouse">
                Make a mouse
            </NavItem>

            <NavItem href="/resources">
                Resources
            </NavItem>

            <NavItem href="/community">
                Community
            </NavItem>
        </Nav>
    );
};

export default Navigation;
