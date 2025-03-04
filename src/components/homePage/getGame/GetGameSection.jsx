import React from 'react';
// import { Link } from 'gatsby';

import { styled } from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer } from '../../layout/ContentContainer';

import { Title, SubTitle } from '../../styles/shared';

import mockupBox from './images/mockup-box.png';
import mockupEstate from './images/mockup-estate.png';
import mockupPdf from './images/mockup-pdf.png';

import flagSpain from './images/flag-spain.png';
import flagFrance from './images/flag-france.png';
import flagPoland from './images/flag-poland.png';
import flagGermany from './images/flag-germany.png';
import flagCzech from './images/flag-czech.png';
import flagNetherlands from './images/flag-netherlands.png';
import flagRussia from './images/flag-russia.png';
import flagItaly from './images/flag-italy.png';
import flagBrazil from './images/flag-brazil.png';
import flagUkraine from './images/flag-ukraine.png';

const GetGameWrapper = styled.article`
    background: #eee;
    padding-top: 6rem;
    padding-bottom: 6rem;
`;

const GetGameSection = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(3, 1fr);

    justify-items: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;

    width: 90vw;

    ${media.phone`
        padding-left: 0;
        padding-right: 0;
        grid-template-rows: repeat(6, auto);
        grid-template-columns: repeat(1, 1fr);
    `}

    ${media.large`
        width: 70rem;
        padding-left: 0;
        padding-right: 0;
    `}
`;

const GameOption = styled.div`
    ${media.phone`
        padding-top: 1rem;
    `}
`;

const OptionLink = styled.a`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

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
`;

const OptionLinkAlternates = styled.div`
    width: auto;
    padding: 0.5rem 1rem;

    text-align: center;

    color: grey;

    a {
        display: inline-block;
        padding: 0.2rem 0.4rem;

        &:hover {
            background: yellow;
        }
    }
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

    &.cyrillic {
        font-family: sans-serif;
        font-size: 0.87rem;
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
            <GameOption>
                <OptionLink href="https://www.exaltedfuneral.com/products/mausritter-boxed-set-1">
                    <img loading="lazy" src={mockupBox} />

                    <h3>Box Set</h3>
                    <span>Complete game</span>
                </OptionLink>

                <OptionLinkAlternates>
                    <a href="https://www.exaltedfuneral.com/products/mausritter-boxed-set-1">
                        Exalted Funeral
                    </a>
                    {' / '}
                    <a href="https://gamesomnivorous.com/collections/minimalist-rpgs/products/mausritter-boxed-set?variant=43123473973481">
                        Games Omnivorous
                    </a>
                </OptionLinkAlternates>
            </GameOption>

            <GameOption>
                <OptionLink href="https://www.exaltedfuneral.com/products/copy-of-mausritter-the-estate-adventure-collection">
                    <img loading="lazy" src={mockupEstate} />

                    <h3>The Estate</h3>
                    <span>Adventure collection</span>
                </OptionLink>
                <OptionLinkAlternates>
                    <a href="https://www.exaltedfuneral.com/products/copy-of-mausritter-the-estate-adventure-collection">
                        Exalted Funeral
                    </a>
                    {' / '}
                    <a href="https://gamesomnivorous.com/collections/minimalist-rpgs/products/mausritter-the-estate-adventure-collection">
                        Games Omnivorous
                    </a>
                </OptionLinkAlternates>
            </GameOption>

            <GameOption>
                <OptionLink href="https://losing-games.itch.io/mausritter">
                    <img loading="lazy" src={mockupPdf} />

                    <h3>Digital edition</h3>
                    <span>Pay what you want</span>
                </OptionLink>

                <OptionLinkAlternates>
                    <a href="https://losing-games.itch.io/mausritter">
                        Itch.io
                    </a>
                    {' / '}
                    <a href="https://www.drivethrurpg.com/product/383482/Mausritter">
                        Drive Thru RPG
                    </a>
                </OptionLinkAlternates>
            </GameOption>
        </GetGameSection>

        <OtherEditionsSection>
            <SubTitle>In other languages:</SubTitle>

            <div>
                <CountryFlagLink href="https://www.elrefugioeditorial.com/mausritter">
                    <img loading="lazy" src={flagSpain} />
                    Español
                </CountryFlagLink>
                <CountryFlagLink href="https://electric-goat.net/mausritter">
                    <img loading="lazy" src={flagFrance} />
                    Français
                </CountryFlagLink>
                <CountryFlagLink href="https://alisgames.pl/pl_PL/products/mausritter-rpg">
                    <img loading="lazy" src={flagPoland} />
                    Polski
                </CountryFlagLink>
                <CountryFlagLink href="https://www.system-matters.de/shop/mausritter/">
                    <img loading="lazy" src={flagGermany} />
                    Deutsch
                </CountryFlagLink>
                <CountryFlagLink href="https://www.mytago.cz/book/mausritter">
                    <img loading="lazy" src={flagCzech} />
                    Cestina
                </CountryFlagLink>
                <CountryFlagLink href="https://wonderschouw.nl/mausritter/">
                    <img loading="lazy" src={flagNetherlands} />
                    Nederlands
                </CountryFlagLink>

                <CountryFlagLink
                    href="https://www.drivethrurpg.com/product/462557/Mausritter"
                    className="cyrillic"
                >
                    <img loading="lazy" src={flagRussia} />
                    русский
                </CountryFlagLink>

                <CountryFlagLink href="https://www.needgames.it/giochi/mausritter/">
                    <img loading="lazy" src={flagItaly} />
                    Italiano
                </CountryFlagLink>

                <CountryFlagLink href="https://www.caramelojogos.com.br/mausritter-22884578">
                    <img loading="lazy" src={flagBrazil} />
                    Português
                </CountryFlagLink>

                <CountryFlagLink
                    href="https://m87games.com"
                    className="cyrillic"
                >
                    <img loading="lazy" src={flagUkraine} />
                    українська
                </CountryFlagLink>
            </div>
        </OtherEditionsSection>
    </GetGameWrapper>
);

export default GetGame;
