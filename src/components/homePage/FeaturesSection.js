import React from 'react';
import styled from 'styled-components';
import media from '../styles/media';

const Description = styled.div`
    background: black;
`

const FeaturePanel = styled.section`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 90vw;

    &.left {
        flex-direction: row-reverse;
    }

    ${media.phone`
        width: 100vw;
        flex-wrap: wrap;
    `}

    ${media.large`
        width: 70vw;
    `}
`;

const FeatureImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    img {
        display: block;
        margin-bottom: 0;
    }

    ${media.phone`
        width: 100vw;
        height: 60vw;
        overflow: hidden;
    `}
`;

const FeatureText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    ${media.phone`
        width: auto;
        padding-top: 3rem;
        padding-bottom: 3rem;
        font-size: 3vw;
    `}
`;

const BodyText = styled.article`
    width: 60%;
    font-family: interstate-condensed, sans-serif;
    font-size: 2vw;
    line-height: 1.4;

    ${media.large`
        font-size: 1.7vw;
    `}

    ${media.phone`
        width: auto;
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 1.3rem;
    `}
`;

const Bk = styled.span`
    font-family: ff-brokenscript-bc-web, serif;
`;

const Feature = ({ image, children, className }) => (
    <FeaturePanel className={className}>
        <FeatureImage>
            {image}
        </FeatureImage>
        <FeatureText>
            <BodyText>
                {children}
            </BodyText>
        </FeatureText>
    </FeaturePanel>
);

const FeaturesSection = () => {


    return (
        <>
            <Description />

            <Feature image={<img src={require('./images/mockup-spread-inventory.jpg')} />}>
                <Bk>Brutally fast, equally flavourful character creation</Bk> gets you playing your mouse adventurer as quickly as possible.
            </Feature>

            <Feature image={<img src={require('./images/promo-character-sheet.jpg')} />} className="left">
                <Bk>Physical card-based inventory system</Bk> keeps bookkeeping to a minimum and hard choices to a maximum.
            </Feature>

            <Feature image={<img src={require('./images/promo-image-spell.jpg')} />}>
                <Bk>Dangerous and evocative magic</Bk> system with 15 spells to find and cast.
            </Feature>

            <Feature image={<img src={require('./images/mockup-spread-landmarks.jpg')} />} className="left">
                <Bk>Generous toolbox of resources</Bk> provides the Game Master with plenty of support to create their own mouse-scale sandbox adventures.
            </Feature>

            <Feature image={<img src={require('./images/promo-stumpsville.jpg')} />}>
                <Bk>Delve into the ready to play</Bk> adventure site of <Bk>Stumpsville</Bk> and explore further into the<br/> <Bk>Earldom of Ek.</Bk>
            </Feature>
        </>
    );
};

export default FeaturesSection;
