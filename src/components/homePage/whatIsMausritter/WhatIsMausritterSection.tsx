import React from 'react';
import { styled } from 'styled-components';

import ContentContainer from '../../layout/ContentContainer';
import font from '../../styles/font';
import { Title } from '../../styles/shared';
import media from '../../styles/media';

const WhatIsMausritterWrapper = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;
    background: #eee;
`;

const Section = styled.section`
    width: 40vw;
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 16px;
    line-height: 1.4;
    font-size: 1.4rem;

    p {
        margin: 0 0 1.1rem;
    }

    ${media.phone`
        width: 90vw;
        max-width: none;
    `}
`;

const Bk = styled.span`
    ${font.display}
`;

const WhatIsMausritterSection: React.FC = () => {
    return (
        <WhatIsMausritterWrapper>
            <ContentContainer>
                <Section>
                    <Title>What is Mausritter?</Title>
                    <p>
                        <Bk>Mausritter</Bk> is an ENNIE Gold Winning (Best
                        Family Game 2021), rules-light tabletop RPG, developed
                        by Losing Games in collaboration with Games Omnivorous,
                        and published by Exalted Funeral.
                    </p>
                    <p>
                        Take on the role of brave mice adventuring in a huge,
                        dangerous world. Simple mechanics make it easy to learn
                        and quick to play, and the setting offers a mix of
                        whimsy and peril. Think tiny swords, lost magic, and
                        terrifying creatures.
                    </p>
                    <p>
                        <Bk>Mausritter</Bk> features a unique inventory system
                        that uses physical item cards, making gear management
                        tactile and intuitive. It's perfect for kids, newcomers,
                        and seasoned players alike.
                    </p>
                </Section>
            </ContentContainer>
        </WhatIsMausritterWrapper>
    );
};

export default WhatIsMausritterSection;
