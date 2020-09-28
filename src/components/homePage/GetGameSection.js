import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import media from '../styles/media';
import font from '../styles/font';

const GetGameWrapper = styled.article`
    background: #eee;
    padding-top: 6rem;
    padding-bottom: 6rem;
`

const TitleSection = styled.h2`
    ${font.display}
    padding-bottom: 2rem;

    font-size: 2.5rem;

    text-align: center;

    ${media.phone`
        font-size: 5vw;
    `}
`

const GetGameSection = styled.section`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;

    ${media.phone`
        width: 100vw;
        flex-wrap: wrap;
    `}

    ${media.large`
        width: 70vw;
    `}
`;

const OptionLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 50%;
    padding-bottom: 1vw;

    text-decoration: none;
    color: black;

    img {
        max-width: 80%;
    }

    h3 {
        ${font.display}

        font-size: 1.8rem;

        ${media.large`
            font-size: 1.7vw;
        `}

        ${media.phone`
            font-size: 4vw;
        `}
    }

    span {
        opacity: 0.7;
    }

    &:hover {
        background: yellow;

        h3 {
            text-decoration: underline;
        }
    }

    ${media.phone`
        width: auto;
        padding-top: 3rem;
        padding-bottom: 3rem;
        font-size: 3vw;
    `}
`;

const OtherEditionsSection = styled.section`
    display: flex;

    align-items: center;
    justify-content: center;

    flex-direction: column;

    width: 90vw;

    margin-top: 2vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    margin-left: auto;
    margin-right: auto;

    border-top: 1px solid #ddd;

    h3 {
        ${font.display}
        font-size: 1.5rem;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const CountryFlagLink = styled(Link)`
    display: block;

    width: 3rem;
    padding: 1rem;
    padding-bottom: 0.5vw;

    color: black;

    text-align: center;
    text-decoration: none;

    img {
        display: block;
        width: 100%;
        margin-bottom: 0.5vw;

        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        background: yellow;
        text-decoration: underline;
    }
`;

const GetGame = ({}) => (
    <GetGameWrapper id="get-mausritter">
        <TitleSection>
            Get Mausritter
        </TitleSection>

        <GetGameSection>
            <OptionLink to="https://gamesomnivorous.com/">
                <img src={require('./images/mockup-box.png')} />

                <h3>Print edition</h3>
                <span>
                    From Games Omnivorous
                </span>
            </OptionLink>
            <OptionLink to="https://losing-games.itch.io/mausritter">
                <img src={require('./images/mockup-pdf.png')} />

                <h3>Digital edition</h3>
                <span>
                    Pay what you want at Itch.io
                </span>
            </OptionLink>
        </GetGameSection>

        <OtherEditionsSection>
            <h3>In other languages:</h3>

            <div>
                <CountryFlagLink to="https://gamesomnivorous.com/">
                    <img src={require('./images/flag-spain.png')} />
                    Español
                </CountryFlagLink>

                <CountryFlagLink to="https://gamesomnivorous.com/">
                    <img src={require('./images/flag-france.png')} />
                    Français
                </CountryFlagLink>

                <CountryFlagLink to="https://gamesomnivorous.com/">
                    <img src={require('./images/flag-poland.png')} />
                    Polski
                </CountryFlagLink>
            </div>
        </OtherEditionsSection>
    </GetGameWrapper>
);

export default GetGame;
