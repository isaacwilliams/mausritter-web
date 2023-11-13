import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer } from '../../layout/ContentContainer';

import { Title, SubTitle } from '../../styles/shared';

const GetGameWrapper = styled.article`
    background: #eee;
    padding-top: 6rem;
    padding-bottom: 6rem;
`;

const GetGameSection = styled(FlexContainer)`
    ${media.phone`
        display: block;
    `}
`;

const OptionLink = styled.a`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 50%;
    padding-bottom: 2vw;

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

const OtherEditionsSection = styled(FlexContainer)`
    flex-direction: column;
    width: 90vw;

    margin-top: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;

    border-top: 1px solid #ddd;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const CountryFlagLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 5rem;
    padding: 1rem 0;

    color: black;

    text-align: center;
    text-decoration: none;

    img {
        display: block;
        width: 100%;
        max-width: 3rem;
        margin-bottom: 0.5vw;

        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        background: yellow;
        text-decoration: underline;
    }
`;

const SoldOutBanner = styled.div`
    position: absolute;

    top: 40%;
    left: 50%;

    padding: 0.5rem 1rem;

    background: red;
    color: white;

    ${font.display};

    white-space: nowrap;

    transform: translate(-50%, -50%) rotate(-30deg);
`;

const GetGame = ({}) => (
    <GetGameWrapper id="get-mausritter">
        <Title>Get Mausritter</Title>

        <GetGameSection>
            <OptionLink href="https://www.exaltedfuneral.com/products/mausritter-boxed-set">
                <img loading="lazy" src={require('./images/mockup-box.png')} />

                <h3>Print edition</h3>
                <span>From Games Omnivorous</span>
            </OptionLink>
            <OptionLink href="https://losing-games.itch.io/mausritter">
                <img loading="lazy" src={require('./images/mockup-pdf.png')} />

                <h3>Digital edition</h3>
                <span>Pay what you want at Itch.io</span>
            </OptionLink>
        </GetGameSection>

        <OtherEditionsSection>
            <SubTitle>In other languages:</SubTitle>

            <div>
                <CountryFlagLink href="https://www.elrefugioeditorial.com/mausritter">
                    <img
                        loading="lazy"
                        src={require('./images/flag-spain.png')}
                    />
                    Español
                </CountryFlagLink>

                <CountryFlagLink href="https://electric-goat.net/mausritter">
                    <img
                        loading="lazy"
                        src={require('./images/flag-france.png')}
                    />
                    Français
                </CountryFlagLink>

                <CountryFlagLink href="https://alisgames.pl/pl_PL/products/mausritter-rpg">
                    <img
                        loading="lazy"
                        src={require('./images/flag-poland.png')}
                    />
                    Polski
                </CountryFlagLink>

                <CountryFlagLink href="https://www.system-matters.de/shop/mausritter/">
                    <img
                        loading="lazy"
                        src={require('./images/flag-germany.png')}
                    />
                    Deutsch
                </CountryFlagLink>

                <CountryFlagLink href="https://www.mytago.cz/book/mausritter">
                    <img
                        loading="lazy"
                        src={require('./images/flag-czech.png')}
                    />
                    Cestina
                </CountryFlagLink>

                <CountryFlagLink href="https://wonderschouw.nl/mausritter/">
                    <img
                        loading="lazy"
                        src={require('./images/flag-netherlands.png')}
                    />
                    Nederlands
                </CountryFlagLink>
            </div>
        </OtherEditionsSection>
    </GetGameWrapper>
);

export default GetGame;
