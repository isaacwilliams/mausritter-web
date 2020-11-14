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

import ResourceContainerSection from './ResourceContainerSection';

const ResourcesWrapper = styled.div`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${media.phone`
        padding-left: 3rem;
        padding-right: 3rem;
    `}
`

const Resources = ({}) => (
    <ResourcesWrapper id="resources">
        <FlexContainer>
            <Title>
                Resources
            </Title>
        </FlexContainer>

        <ResourceContainerSection title="Online generators" resources={[
            {
                name: 'Make a mouse',
                image: require('./images/make-mouse.png'),
                link: '/mouse',
            },
            {
                name: 'Aventure site generator',
                image: require('./images/adventure-site.png'),
                link: '/adventure-site',
            },
        ]} />

        <ResourceContainerSection title="Printable sheets" resources={[
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
                name: 'Hexcrawl template',
                image: require('./images/sheets-hexcrawl.png'),
                link: require('./files/mausritter-hexcrawl-template.pdf'),
            },
        ]} />

        <ResourceContainerSection title="Companion adventures" heroResources={[
            {
                name: 'Honey in the Rafters',
                link: 'https://losing-games.itch.io/mausritter-honey-in-the-rafters',
                image: require('./images/honey-rafters-promo.jpg'),
                imageOverlay: require('./images/honey-rafters-promo-logo.png'),
            },
        ]} />

        <ResourceContainerSection title="Third-party adventures and resources" resources={[
            {
                name: 'Bernpyle: A Mausritter Zine',
                author: 'ManaRampMatt',
                link: 'https://manarampmatt.itch.io/bernpyle-an-unofficial-mausritter-zine',
                image: require('./images/adventure-burrow.png'),
                className: 'shadow',
            },
            {
                name: 'Lake of the Pirat King',
                author: 'Cameron Donnelly & Richard Davis',
                link: 'https://justafatyeti.itch.io/lake-of-the-pirat-king',
                image: require('./images/adventure-lake-pirat.png'),
                className: 'shadow',
            },
            {
                name: 'Stonewall',
                author: 'Cameron Donnelly & Richard Davis',
                image: require('./images/adventure-stonewall.png'),
                link: 'https://justafatyeti.itch.io/stonewall',
                className: 'shadow',
            },
            {
                name: 'Thistle Kingdom Zine',
                author: 'Christopher Käck',
                image: require('./images/adventure-thistle-kingdom-1.png'),
                link: 'https://kejsarmakten.itch.io/thistle-kingdom-1',
                className: 'shadow',
            },
        ]} />
    </ResourcesWrapper>
);

export default Resources;
