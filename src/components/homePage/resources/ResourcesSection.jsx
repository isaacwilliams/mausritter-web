import { styled } from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer } from '../../layout/ContentContainer';

import { Title } from '../../styles/shared';
import BodyText from '../../styles/BodyText';

import ResourceContainerSection from './ResourceContainerSection';

import makeMouseImage from './images/make-mouse.png';
import adventureSiteImage from './images/adventure-site.png';
import itemCardStudioImage from './images/tool-item-studio.png';

import characterSheetsImage from './images/sheets-players.png';
import itemConditionSheetsImage from './images/sheets-items.png';
import gmSessionSheetImage from './images/sheets-gm.png';
import hexcrawlTemplateImage from './images/sheets-hexcrawl.png';
import rulesReferenceImage from './images/sheets-rules-reference.png';

import characterSheetsPDF from './files/mausritter-character-sheets.pdf';
import itemConditionSheetsPDF from './files/mausritter-item-condition-sheets.pdf';
import gmSessionSheetPDF from './files/mausritter-gm-session-sheet.pdf';
import hexcrawlTemplatePDF from './files/mausritter-hexcrawl-template.pdf';
import rulesReferencePDF from './files/mausritter-rules-reference.pdf';
import theEstatePromoImage from './images/the-estate-promo.jpg';
import theEstatePromoLogo from './images/the-estate-promo-logo.png';
import honeyRaftersPromoImage from './images/honey-rafters-promo.jpg';
import honeyRaftersPromoLogo from './images/honey-rafters-promo-logo.png';
import libraryWebsitePromoImage from './images/library-website-promo.jpg';
import libraryWebsitePromoLogo from './images/library-website-promo-logo.png';
import junkCityPromoImage from './images/junk-city-promo.jpg';
import junkCityPromoLogo from './images/junk-city-promo-logo.png';
import onlineFoundryImage from './images/online-foundry.jpg';
import onlineTTSImage from './images/online-tts.jpg';
import onlineTTSImage2 from './images/online-tts-2.webp';
import colors from '../../styles/colors';

const ResourcesWrapper = styled.div`
    padding-top: 6rem;
    padding-bottom: 6rem;

    ${media.phone`
        width: auto;
        padding-left: 2rem;
        padding-right: 2rem;
    `}
`;

const AllResourcesLink = styled.a`
    ${font.display}

    padding: 0.5rem 1rem;
    margin-bottom: 10rem;

    color: black;
    letter-spacing: 0.025rem;
    white-space: nowrap;

    &:hover {
        background: ${colors.highlight};
    }
`;

const Resources = () => {
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
                        image: makeMouseImage,
                        link: '/mouse',
                    },
                    {
                        name: 'Adventure site generator',
                        image: adventureSiteImage,
                        link: '/adventure-site',
                    },
                    {
                        name: 'Item card studio',
                        image: itemCardStudioImage,
                        link: '/item-card-studio',
                    },
                ]}
            />

            <ResourceContainerSection
                title="Printable sheets"
                resources={[
                    {
                        name: 'Character & hireling sheets',
                        image: characterSheetsImage,
                        link: characterSheetsPDF,
                    },
                    {
                        name: 'Item & Condition cards',
                        image: itemConditionSheetsImage,
                        link: itemConditionSheetsPDF,
                    },
                    {
                        name: 'Game Master Session Tracking sheet',
                        image: gmSessionSheetImage,
                        link: gmSessionSheetPDF,
                    },
                    {
                        name: 'Hexcrawl template',
                        image: hexcrawlTemplateImage,
                        link: hexcrawlTemplatePDF,
                    },
                    {
                        name: 'Rules reference sheet',
                        image: rulesReferenceImage,
                        link: rulesReferencePDF,
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
                        name: 'Junk City',
                        link: 'https://www.backerkit.com/c/projects/exalted-funeral/mausritter-junk-city',
                        image: junkCityPromoImage,
                        imageOverlay: junkCityPromoLogo,
                    },
                    {
                        name: 'The Estate Adventure Collection',
                        link: 'https://losing-games.itch.io/mausritter-the-estate-adventure-collection',
                        image: theEstatePromoImage,
                        imageOverlay: theEstatePromoLogo,
                    },
                    {
                        name: 'Honey in the Rafters',
                        link: 'https://losing-games.itch.io/mausritter-honey-in-the-rafters',
                        image: honeyRaftersPromoImage,
                        imageOverlay: honeyRaftersPromoLogo,
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
                        image: libraryWebsitePromoImage,
                        imageOverlay: libraryWebsitePromoLogo,
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
                                <AllResourcesLink href="https://library.mausritter.com">
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
                                <a href="/third-party-licence">
                                    Mausritter Third Party Licence
                                </a>
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
                        image: onlineFoundryImage,
                        link: 'https://foundryvtt.com/packages/mausritter/',
                        className: 'shadow',
                    },
                    {
                        name: 'Tabletop Simulator (with scripts)',
                        author: 'Marum',
                        image: onlineTTSImage2,
                        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3310630224',
                        className: 'shadow',
                    },
                    {
                        name: 'Tabletop Simulator Module',
                        author: 'Lei',
                        image: onlineTTSImage,
                        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2128571929',
                        className: 'shadow',
                    },
                ]}
            />
        </ResourcesWrapper>
    );
};

export default Resources;
