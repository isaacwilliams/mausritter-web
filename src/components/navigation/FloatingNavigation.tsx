import React from 'react';
import { styled } from 'styled-components';
import classNames from 'classnames';

import Navigation from './Navigation';

import MausritterMonthPromo from './banner/MausritterMonthPromo';

const FloatingTop = styled.div<{
    $transparent?: boolean;
    $hide?: boolean;
}>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    background: ${({ $transparent }) =>
        $transparent ? 'transparent' : 'white'};
    opacity: ${({ $hide }) => ($hide ? 0 : 1)};

    z-index: 999;
`;

const FloatingNavigation = ({
    hide,
    transparent,
}: {
    hide?: boolean;
    transparent?: boolean;
}) => {
    return (
        <>
            <FloatingTop $transparent={transparent} $hide={hide}>
                <Navigation transparent={transparent} />
            </FloatingTop>
        </>
    );
};

export default FloatingNavigation;
