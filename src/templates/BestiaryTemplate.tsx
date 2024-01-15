import React from 'react';

import { CreatureData } from '../components/bestiary/bestiaryTypes';
import Creature from '../components/bestiary/Creature';
import SiteContainer from '../components/layout/SiteContainer';

type BestiaryTemplateProps = {
    pageContext: {
        creatures: CreatureData[];
    };
};

const BestiaryTemplate = ({ pageContext }: BestiaryTemplateProps) => {
    const creatures = pageContext.creatures;

    return (
        <SiteContainer dark>
            <h1>Bestiary</h1>

            <ul>
                {creatures.map(creature => (
                    <Creature key={creature.id} creature={creature} />
                ))}
            </ul>
        </SiteContainer>
    );
};

export default BestiaryTemplate;
