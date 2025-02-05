import React from 'react';
import { Link } from 'gatsby';
import { sortBy, slice } from 'lodash/fp';

import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer } from '../../layout/ContentContainer';

import { Title } from '../../styles/shared';
import BodyText from '../../styles/BodyText';

import ResourceContainerSection from './ResourceContainerSection';

const limitedArray = slice(0, 8);

const ResourcesWrapper = styled.div`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${media.phone`
        width: auto;
        padding-left: 2rem;
        padding-right: 2rem;
    `}
`;

const AllResourcesLink = styled(Link)`
    ${font.display}

    padding: 0.5rem 1rem;
    margin-bottom: 10rem;

    color: black;
    letter-spacing: 0.025rem;
    white-space: nowrap;

    &:hover {
        background: yellow;
    }
`;

const Resources = ({}) => {
    return (
        <ResourcesWrapper id="resources">
            <FlexContainer>
                <Title>Resources</Title>
            </FlexContainer>

            <ResourceContainerSection
                title="Online generators"
                resources={[
                    {
                        name: 'Make a mouse',
                        image: require('./images/make-mouse.png').default,
                        link: '/mouse',
                    },
                    {
                        name: 'Adventure site generator',
                        image: require('./images/adventure-site.png').default,
                        link: '/adventure-site',
                    },
                    {
                        name: 'Item card studio',
                        image: require('./images/tool-item-studio.png').default,
                        link: '/item-card-studio',
                    },
                ]}
            />

            <ResourceContainerSection
                title="Printable sheets"
                resources={[
                    {
                        name: 'Character & hireling sheets',
                        image: require('./images/sheets-players.png').default,
                        link: require('./files/mausritter-character-sheets.pdf')
                            .default,
                    },
                    {
                        name: 'Item & Condition cards',
                        image: require('./images/sheets-items.png').default,
                        link: require('./files/mausritter-item-condition-sheets.pdf')
                            .default,
                    },
                    {
                        name: 'Game Master Session Tracking sheet',
                        image: require('./images/sheets-gm.png').default,
                        link: require('./files/mausritter-gm-session-sheet.pdf')
                            .default,
                    },
                    {
                        name: 'Hexcrawl template',
                        image: require('./images/sheets-hexcrawl.png').default,
                        link: require('./files/mausritter-hexcrawl-template.pdf')
                            .default,
                    },
                    {
                        name: 'Rules reference sheet',
                        image: require('./images/sheets-rules-reference.png')
                            .default,
                        link: require('./files/mausritter-rules-reference.pdf')
                            .default,
                    },
                ]}
                footer={
                    <BodyText className="small center">
                        All printable sheets are released under a{' '}
                        <a href="https://creativecommons.org/licenses/by/4.0/">
                            Creative Commons Attribution (CC BY 4.0)
                        </a>{' '}
                        licence
                    </BodyText>
                }
            />

            <div id="adventures" />

            <ResourceContainerSection
                title="Companion adventures"
                heroResources={[
                    {
                        name: 'The Estate Adventure Collection',
                        link:
                            'https://losing-games.itch.io/mausritter-the-estate-adventure-collection',
                        image: require('./images/the-estate-promo.jpg').default,
                        imageOverlay: require('./images/the-estate-promo-logo.png')
                            .default,
                    },
                    {
                        name: 'Honey in the Rafters',
                        link:
                            'https://losing-games.itch.io/mausritter-honey-in-the-rafters',
                        image: require('./images/honey-rafters-promo.jpg')
                            .default,
                        imageOverlay: require('./images/honey-rafters-promo-logo.png')
                            .default,
                    },
                ]}
            />

            <ResourceContainerSection
                title="Third-party adventures and resources"
                sortByField="releaseDate"
                itemClassName="shadow"
                heroResources={[
                    {
                        name: 'Mausritter Library',
                        link: 'https://library.mausritter.com',
                        image: require('./images/library-website-promo.jpg')
                            .default,
                        imageOverlay: require('./images/library-website-promo-logo.png')
                            .default,
                    },
                ]}
                footer={
                    <>
                        <BodyText className="small center">
                            <p
                                style={{
                                    marginTop: '-1rem',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                <AllResourcesLink to="https://library.mausritter.com">
                                    Visit the Mausritter Library
                                </AllResourcesLink>
                            </p>
                            <p>
                                The Mausritter Library is a living collection of
                                third-party adventures and resources.
                            </p>
                            <p>
                                These works are created under the Mausritter
                                Third Party Licence, and are not assocated with
                                Losing Games.
                            </p>
                            <p>
                                Learn about the{' '}
                                <Link to="/third-party-licence">
                                    Mausritter Third Party Licence
                                </Link>
                            </p>
                        </BodyText>
                    </>
                }
            />

            <ResourceContainerSection
                title="Play online"
                resources={[
                    {
                        name: 'Foundry VTT Module',
                        author: 'Futilrevenge',
                        image: require('./images/online-foundry.jpg').default,
                        link: 'https://foundryvtt.com/packages/mausritter/',
                        className: 'shadow',
                    },
                    {
                        name: 'Tabletop Simulator Module',
                        author: 'Lei',
                        image: require('./images/online-tts.jpg').default,
                        link:
                            'https://steamcommunity.com/sharedfiles/filedetails/?id=2128571929',
                        className: 'shadow',
                    },
                ]}
            />
        </ResourcesWrapper>
    );
};

export default Resources;
