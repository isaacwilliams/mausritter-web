import React from 'react';

import { CreatureData } from '../components/bestiary/bestiaryTypes';
import Creature from '../components/bestiary/Creature';
import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';
import styled from 'styled-components';
import ContentContainer from '../components/layout/ContentContainer';
import { Title } from '../components/styles/shared';

const FloatingNavDark = styled(Navigation)`
    background: #100113;
    color: white;
`;

const BestiaryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1px;
`;

const BestiaryContentContainer = styled(ContentContainer)`
    margin-bottom: 8rem;
`;

type BestiaryTemplateProps = {
    pageContext: {
        creatures: CreatureData[];
    };
};

const BestiaryTemplate = ({ pageContext }: BestiaryTemplateProps) => {
    const creatures = pageContext.creatures;

    return (
        <SiteContainer dark>
            <FloatingNavDark transparent={true} />

            <BestiaryContentContainer>
                <br />

                <Title>Mausritter Bestiary ({creatures.length})</Title>

                <BestiaryContainer>
                    {creatures.map(creature => (
                        <Creature key={creature.id} creature={creature} />
                    ))}
                </BestiaryContainer>
            </BestiaryContentContainer>
        </SiteContainer>
    );
};

export default BestiaryTemplate;
