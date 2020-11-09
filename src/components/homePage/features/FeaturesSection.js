import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import ContentContainer from '../../layout/ContentContainer';
import Feature from './Feature';


const Bk = styled.span`
    ${font.display}
`;


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
