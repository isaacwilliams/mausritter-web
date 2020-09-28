import React from 'react';
import styled from 'styled-components';

import Navigation from '../navigation/Navigation';
import BodyText from '../styles/BodyText';
import LosingGamesLogo from '../navigation/logos/LosingGamesLogo';
import media from '../styles/media';

const TitleSectionContainer = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;

    background-image: url(${require('./images/divider-stem.jpg')});
    background-repeat: no-repeat;
    background-size: 250px;
    background-position: bottom -100px right 0;

    ${media.phone`
        background-image: none;
        min-height: 0;
    `}
`
const TitleSectionBody = styled.div`
    position: relative;
    margin: auto;
    width: 500px;
    padding-top: 15vh;

    ${media.phone`
        width: auto;
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
    `}
`

const TitleSectionNav = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    ${media.phone`
        display: none;
    `}
`

const MausritterLogoTitle = styled.h1`
    display: block;
    max-width: 30rem;
    height: 8rem;
    font-size: 0;
    background: url(${require('./images/mausritter-logo.svg')});
    background-position: center top;
    background-size: 100% auto;
    background-repeat: no-repeat;
`;

const Blurb = styled.div`
    padding: 1rem;
    background: white;
`

const TitleSection = () => {
    return (
        <TitleSectionContainer>
            <TitleSectionBody>
                <MausritterLogoTitle>
                    Mausritter
                </MausritterLogoTitle>

                <Blurb>
                    <BodyText>
                        <p>Take up the sword and don the whiskers of a brave mouse adventurer in <strong>Mausritter</strong>, the rules-light fantasy adventure roleplaying game.</p>

                        <p style={{ fontStyle: 'italic' }}>It’s a huge and dangerous world out there, and it does not look kindly on a small mouse. But if you are very brave and very clever and just a bit lucky, you might be able to survive. And if you survive long enough, you might even become a hero amongst mice.</p>

                        <br />
                        <p style={{ textAlign: 'center' }}>
                            <LosingGamesLogo />
                        </p>
                    </BodyText>
                </Blurb>
            </TitleSectionBody>

            <TitleSectionNav>
                <Navigation />
            </TitleSectionNav>
        </TitleSectionContainer>
    );
}

export default TitleSection;
