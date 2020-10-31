import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer } from '../../layout/ContentContainer';

import {
    Title,
    SubTitle,
} from '../../styles/shared';

const ResourcesWrapper = styled.div`
    background: #fffffff;
    padding-top: 6rem;
    padding-bottom: 6rem;
`

const ResourcesContainer = styled(FlexContainer)`
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: start;
`;

const ResourceLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 13rem;
    height: 13rem;

    padding: 2rem;

    text-decoration: none;
    color: black;

    transition: background 0.3s ease-in-out;

    img {
        width: 100%;

        transition: transform 0.3s ease-in-out;
    }

    .name {
        margin-top: 1rem;
        font-size: 1rem;
        text-align: center;
    }

    &:hover {
        background: yellow;

        img {
            transform: scale(1.04);
        }
    }
`;

const HeroResourceLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    width: 100%;
    height: 10rem;

    padding: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;

    border-radius: 1rem;

    background-color: red;
    background-size: 100% auto;
    background-position: center;

    transition: background-size 0.3s ease-in-out;

    &:hover {
        background-size: 103% auto;
    }
`;

const ResourcesSectionContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 4rem;
`;

const ResourceSubTitle = styled(SubTitle)`
    position: relative;

    width: 100%;
    text-align: left;

    text-shadow: -4px -4px 0 white, 4px -4px 0 white, -4px 4px 0 white, 4px 4px 0 white;

    &:after {
        position: absolute;

        left: 0;
        top: 1.3rem;
        right: 0;

        border-top: 0.5rem solid black;
        content: '';

        z-index: -1;
    }
`

const ResourcesSection = ({ title, resources = [], heroResources = [] }) => {
    console.log(heroResources);

    return (
        <ResourcesSectionContainer>
            <FlexContainer>
                <ResourceSubTitle>
                    {title}
                </ResourceSubTitle>
            </FlexContainer>

            <FlexContainer>
                {heroResources.map(({ name, image, link }) => {
                    console.log(image);
                    return (
                        <HeroResourceLink to={link} style={{ backgroundImage: `url(${image})` }}>
                        </HeroResourceLink>
                    );
                })}
            </FlexContainer>

            <ResourcesContainer>
                {resources.map(({ name, image, link }) => (
                    <ResourceLink to={link} key={link}>
                        {image && <img src={image} />}
                        <div className="name">{name}</div>
                    </ResourceLink>
                ))}
            </ResourcesContainer>
        </ResourcesSectionContainer>
    );
}

const Resources = ({}) => (
    <ResourcesWrapper id="resources">
        <FlexContainer>
            <Title>
                Resources
            </Title>
        </FlexContainer>

        <ResourcesSection title="Online generators" resources={[
            {
                name: 'Make a mouse',
                image: require('./images/make-mouse.png'),
            },
            {
                name: 'Adventure site',
            },
        ]} />

        <ResourcesSection title="Printable sheets" resources={[
            {
                name: 'Character & hireling sheets',
                image: require('./images/sheets-players.png'),
                link: require('./files/mausritter-character-sheets.pdf'),
            },
            {
                name: 'Item & Condition cards',
                image: require('./images/sheets-items.png'),
                link: require('./files/mausritter-item-condition-sheets.pdf'),
            },
            {
                name: 'Game Master Session Tracking sheet',
                image: require('./images/sheets-gm.png'),
                link: require('./files/mausritter-gm-session-sheet.pdf'),
            },
            {
                name: 'Hex map template',
                link: require('./files/mausritter-character-sheets.pdf'),
            }
        ]} />

        <ResourcesSection title="Companion adventures" heroResources={[
            {
                name: 'Honey in the Rafters',
                link: 'https://losing-games.itch.io/mausritter-honey-in-the-rafters',
                image: require('./images/honey-rafters-promo.jpg'),
            },
        ]} />

        <ResourcesSection title="Third-party adventures and resources" resources={[
            {
                name: 'Honey in the Rafters',
                image: require('./images/sheets-players.png'),
            },
        ]} />
    </ResourcesWrapper>
);

export default Resources;
