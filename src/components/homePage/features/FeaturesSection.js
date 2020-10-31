import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import ContentContainer from '../../layout/ContentContainer';

const FeaturePanel = styled.section`
    display: flex;

    &.left {
        flex-direction: row-reverse;
    }

    ${media.phone`
        flex-wrap: wrap;
    `}
`;

const FeatureImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    img {
        width: 100%;
        height: auto;
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

const FeatureTextBody = styled.article`
    ${font.body}

    width: 25vw;
    line-height: 1.4;
    font-size: 1.4rem;

    ${media.desktop`
        font-size: 1.6rem;
    `}

    ${media.large`
        width: 20vw;
    `}

    ${media.phone`
        width: auto;
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 1.3rem;
    `}
`;

const Bk = styled.span`
    ${font.display}
`;

const Feature = ({ image, children, className }) => (
    <FeaturePanel className={className}>
        <FeatureImage>
            {image}
        </FeatureImage>
        <FeatureText>
            <FeatureTextBody>
                {children}
            </FeatureTextBody>
        </FeatureText>
    </FeaturePanel>
);

const FeaturesSection = () => {
    return (
        <ContentContainer>
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
                <Bk>Delve into the ready to play</Bk> adventure site of <Bk>Stumpsville</Bk> and explore further into the <Bk>Earldom of{'\u00a0'}Ek.</Bk>
            </Feature>
        </ContentContainer>
    );
};

export default FeaturesSection;
