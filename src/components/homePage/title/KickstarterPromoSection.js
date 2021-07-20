import React from 'react';
import styled, { keyframes } from 'styled-components';

import media from '../../styles/media';
import font from '../../styles/font';

const KickstarterPromoSection = styled.a`
    display: block;
    position: relative;
    min-height: 30vh;

    overflow: hidden;
    background-color: #152029;

    transition: min-height 0.7s ease-in-out;

    &.hidden {
        min-height: 0vh;
    }

    .title {
        display: flex;
        position: absolute;

        flex-direction: column;
        justify-content: center;
        align-items: center;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: rgba(21, 22, 31, 0.8);

        ${font.display};
        color: white;
        font-size: 2rem;
        text-decoration: none;
        letter-spacing: 0.1rem;

        text-align: center;

        transition: transform 0.5s ease-in-out, background 0.5s linear;

        .kickstarter {
            border-bottom: 4px solid white;
        }
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-image: url(${require('./kickstarter-banner.jpg')});
        background-size: 100% auto;
        background-position: center 35%;

        transition: transform 0.5s ease-in-out, opacity 0.5s linear;
    }

    &:hover {
        .title {
            transform: scale(1.6);
            background: rgba(21, 22, 31, 0.4);
        }

        .background {
            transform: scale(1.4);
            opacity: 0.7;
        }
    }

    ${media.phone`
        .title {
            .kickstarter {
                border-bottom: 0;
                text-decoration: underline;
            }
        }

        &:hover {
            .title {
                transform: scale(1.2);
            }

            .background {
                transform: scale(1.1);
            }
        }
    `}
`;

export default KickstarterPromoSection;
