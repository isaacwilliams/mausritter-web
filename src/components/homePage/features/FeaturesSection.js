import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import ContentContainer from '../../layout/ContentContainer';
import Feature from './Feature';

import mockupSpreadInventory from './images/mockup-spread-inventory.jpg';
import promoCharacterSheet from './images/promo-character-sheet.jpg';
import promoImageSpell from './images/promo-image-spell.jpg';
import mockupSpreadLandmarks from './images/mockup-spread-landmarks.jpg';
import promoStumpsville from './images/promo-stumpsville.jpg';

const Bk = styled.span`
    ${font.display}
`;

const FeaturesSection = () => {
    return (
        <ContentContainer>
            <Feature image={<img src={mockupSpreadInventory} loading="lazy" />}>
                <Bk>Brutally fast, equally flavourful character creation</Bk>{' '}
                gets you playing your mouse adventurer as quickly as possible.
            </Feature>

            <Feature
                image={<img src={promoCharacterSheet} loading="lazy" />}
                className="left"
            >
                <Bk>Physical card-based inventory system</Bk> minimises
                bookkeeping and maximises hard choices.
            </Feature>

            <Feature image={<img src={promoImageSpell} loading="lazy" />}>
                <Bk>Dangerous and evocative magic</Bk> system with 15 spells to
                find and cast.
            </Feature>

            <Feature
                image={<img src={mockupSpreadLandmarks} loading="lazy" />}
                className="left"
            >
                <Bk>Generous toolbox of resources</Bk> provides the Game Master
                with plenty of support to create their own mouse-scale sandbox
                adventures.
            </Feature>

            <Feature image={<img src={promoStumpsville} loading="lazy" />}>
                <Bk>Delve into the ready to play</Bk> adventure site of{' '}
                <Bk>Stumpsville</Bk> and explore further into the{' '}
                <Bk>Earldom of{'\u00a0'}Ek.</Bk>
            </Feature>
        </ContentContainer>
    );
};

export default FeaturesSection;
