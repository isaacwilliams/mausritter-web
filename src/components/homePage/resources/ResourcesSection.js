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

import THIRD_PARTY_RESOURCES from './thirdPartyResourcesData';

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
                name: 'Adventure site generator',
                image: require('./images/adventure-site.png'),
                link: '/adventure-site',
            },
            {
                name: 'Item card studio',
                image: require('./images/tool-item-studio.png'),
                link: '/item-card-studio',
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
            {
                name: 'Rules reference sheet',
                image: require('./images/sheets-rules-reference.png'),
                link: require('./files/mausritter-rules-reference.pdf'),
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

        <ResourceContainerSection title="Third-party adventures and resources"
            sortByField="releaseDate"
            resources={THIRD_PARTY_RESOURCES}
            footer={
                <BodyText className="small center">
                    <p>These works are created under the Mausritter Third Party Licence, and are not assocated with Losing Games.</p>
                    <p>Learn about the <Link to="/third-party-licence">Mausritter Third Party Licence</Link></p>
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
