import React from 'react';
import { uniq } from 'lodash';

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

const UtilsContainer = styled.div`
    padding: 1rem;
`;

type BestiaryTemplateProps = {
    pageContext: {
        creatures: CreatureData[];
    };
};

const BestiaryTemplate = ({ pageContext }: BestiaryTemplateProps) => {
    const [filter, setFilter] = React.useState('');

    const creatures = pageContext.creatures;

    const categoryMap = creatures.reduce((acc, creature) => {
        const categories = creature.properties.categories;

        categories.forEach(category => {
            if (!acc[category]) {
                acc[category] = 0;
            }

            acc[category]++;
        });

        return acc;
    }, {} as { string: number });

    const filteredCreatures = creatures.filter(creature => {
        if (!filter || filter === '') {
            return true;
        }

        return creature.properties.categories.includes(filter);
    });

    return (
        <SiteContainer dark>
            <FloatingNavDark transparent={true} />

            <BestiaryContentContainer>
                <br />

                <Title>Mausritter Bestiary</Title>

                <UtilsContainer>
                    Filter:{' '}
                    <select onChange={event => setFilter(event.target.value)}>
                        <option value="">All ({creatures.length})</option>
                        {Object.entries(categoryMap).map(
                            ([category, count]) => (
                                <option key={category} value={category}>
                                    {category} ({count})
                                </option>
                            )
                        )}
                    </select>
                </UtilsContainer>

                <BestiaryContainer>
                    {filteredCreatures.map(creature => (
                        <Creature key={creature.id} creature={creature} />
                    ))}
                </BestiaryContainer>
            </BestiaryContentContainer>
        </SiteContainer>
    );
};

export default BestiaryTemplate;
