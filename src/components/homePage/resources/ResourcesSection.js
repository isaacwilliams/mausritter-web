import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer, ContentContainer } from '../../layout/ContentContainer';

import {
    Title,
    SubTitle,
} from '../../styles/shared';
import BodyText from '../../styles/BodyText';

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
        ]} footer={
            <BodyText className="small center">
                All printable sheets are released under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution (CC BY 4.0)</a> licence
            </BodyText>
        } />

        <div id="adventures" />

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
                name: 'The Library War: Queen’s Quest',
                author: 'Josh Domanski',
                image: require('./images/adventure-library-war.png'),
                link: 'https://unenthuser.itch.io/the-library-war-queens-quest',
                className: 'shadow',
            },
            {
                name: 'Fort Ploddy',
                author: 'Harrison Swift',
                image: require('./images/adventure-ploddy.png'),
                link: 'https://unenthuser.itch.io/the-library-war-queens-quest',
                className: 'shadow',
            },
            {
                name: 'MausRatos #1',
                author: '@mausratos',
                image: require('./images/adventure-mausratos.png'),
                link: 'https://mausratosbr.itch.io/mausratos1',
                className: 'shadow',
            },
            {
                name: 'A not so Stille Nacht',
                author: 'ManaRampMatt',
                image: require('./images/adventure-still-night.png'),
                link: 'https://manarampmatt.itch.io/silentnight',
                className: 'shadow',
            },
            {
                name: 'Bernpyle #2',
                author: 'ManaRampMatt',
                link: 'https://manarampmatt.itch.io/bernpyleissue2',
                image: require('./images/adventure-bernpyle-2.png'),
                className: 'shadow',
            },
            {
                name: 'Thistle Kingdom #2: Winter',
                author: 'Christopher Käck',
                image: require('./images/adventure-thistle-kingdom-2.png'),
                link: 'https://kejsarmakten.itch.io/thistle-kingdom-2',
                className: 'shadow',
            },
            {
                name: 'Bestiarium',
                author: 'ManaRampMatt & Mausritter Discord',
                link: 'https://manarampmatt.itch.io/beastiarium-mausritter',
                image: require('./images/adventure-beastarium.png'),
                className: 'shadow',
            },
            {
                name: 'Bernpyle #1',
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
                name: 'Thistle Kingdom #1: Summer',
                author: 'Christopher Käck',
                image: require('./images/adventure-thistle-kingdom-1.png'),
                link: 'https://kejsarmakten.itch.io/thistle-kingdom-1',
                className: 'shadow',
            },
        ]} footer={
            <BodyText className="small center">
                These third-party works are not associated with Losing Games. Learn about the <Link to="/third-party-licence">Mausritter Third Party Licence</Link>
            </BodyText>
        } />

        <ResourceContainerSection title="Play online" resources={[
            {
                name: 'Foundry VTT Module',
                author: 'Futilrevenge',
                image: require('./images/online-foundry.jpg'),
                link: 'https://foundryvtt.com/packages/mausritter/',
                className: 'shadow',
            },
            {
                name: 'Tabletop Simulator Module',
                author: 'Lei',
                image: require('./images/online-tts.jpg'),
                link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2128571929',
                className: 'shadow',
            },
        ]} />
    </ResourcesWrapper>
);

export default Resources;
