import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const FloatingTop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    background: white;

    z-index: 999;

    &.hide {
        opacity: 0;
    }
`
const FloatingNavigation = ({ hide }) => {
    return (
        <FloatingTop className={hide && 'hide'}>
            <Navigation />
        </FloatingTop>
    );
};

export default FloatingNavigation;
