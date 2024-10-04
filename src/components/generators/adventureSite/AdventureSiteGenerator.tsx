import React from 'react';
import styled from 'styled-components';
import { Trans, useTranslation } from 'react-i18next';

import font from '../../styles/font';
import media from '../../styles/media';

import { ContentContainer } from '../../layout/ContentContainer';
import { Title, TitleWrapper, RollButton } from '../generatorComponents';

import useAdventureSite from './useAdventureSite';

import spiderFace from './spider-face.svg';
import lockedChest from './locked-chest.svg';

import { AdventureSiteGeneratorData } from './adventureSiteGeneratorTypes';

const Summary = styled.div`
    max-width: 50rem;

    margin: 0 auto;

    font-size: 1.8rem;
    text-align: justify;

    ${media.phone`
        margin: 0 1rem;
        font-size: 1.4rem;
    `}
`;

const SummaryName = styled.span`
    ${font.display}
    font-size: 2.4rem;

    ${media.phone`
        font-size: 1.8rem;
    `}
`;

const SummaryFeature = styled.span`
    ${font.display};
`;

const RoomsContainer = styled.div`
    position: relative;
    margin-top: 4rem;

    ${media.phone`
        overflow: scroll;
        max-width: 100%;

        -webkit-overflow-scrolling: touch;
    `}
`;

const RoomArray = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);

    gap: 1rem;

    ${media.phone`
        padding: 1rem;
        grid-template-columns: repeat(5, 8rem);
        grid-template-rows: repeat(4, 1fr);
        gap: 0.8rem;
    `}
`;

const Room = styled.div<{
    posX: number;
    posY: number;
    creature: boolean;
    treasure: boolean;
}>`
    position: relative;
    padding: 1rem;
    border: ${({ creature }) =>
        creature ? '1px solid #ccc' : '1px solid #ccc'};

    background: #eee;

    grid-column: ${({ posX }) => posX};
    grid-row: ${({ posY }) => posY};

    ${media.phone`
        padding: 0.8rem;
        font-size: 0.8rem;
    `}
`;

const StatusIconContainer = styled.div`
    position: absolute;

    top: -0.5rem;
    right: -0.5rem;

    z-index: 1;
`;

const StatusIcon = styled.div`
    width: 1.5rem;
    height: 1.5rem;

    margin-bottom: 0.2rem;

    ${media.phone`
        width: 1.2rem;
        height: 1.2rem;
    `}
`;

const CreatureIcon = styled(StatusIcon)`
    background: url(${spiderFace});
    background-color: black;
`;

const TreasureIcon = styled(StatusIcon)`
    background: url(${lockedChest});
    background-color: black;
`;

const RoomType = styled.div`
    font-weight: bold;
`;

const RoomsKey = styled.div`
    position: absolute;
    width: 30rem;
    left: 1rem;

    ${media.phone`
        font-size: 0.8rem;
    `}
`;

const RoomsKeyEntry = styled.div`
    display: flex;
    align-items: center;

    ${StatusIcon} {
        margin-right: 0.3rem;
    }
`;

const Credits = styled.div`
    margin-top: 4rem;
    margin-bottom: 8rem;

    text-align: center;
    font-size: 0.8rem;

    color: #999;

    a {
        color: #999;
    }
`;

const AdventureSiteGenerator = () => {
    const { t } = useTranslation('adventure_site_generator');

    const data = t('data', {
        returnObjects: true,
    }) as AdventureSiteGeneratorData;

    const [{ name, summary, rooms }, rollSite] = useAdventureSite(data);

    return (
        <ContentContainer>
            <TitleWrapper>
                <Title>{t('title')}</Title>

                <RollButton onClick={() => rollSite()}>
                    {t('ui.rollButton')}
                </RollButton>
            </TitleWrapper>

            <Summary>
                <SummaryName>{name}</SummaryName>
                <Trans
                    t={t}
                    i18nKey="data.summary.format"
                    values={summary}
                    tOptions={{
                        escapeValue: false,
                    }}
                    components={{
                        b: <SummaryFeature />,
                    }}
                />
            </Summary>

            <RoomsContainer>
                <RoomsKey>
                    <RoomsKeyEntry>
                        <CreatureIcon /> {t('labels.creature')}
                    </RoomsKeyEntry>
                    <RoomsKeyEntry>
                        <TreasureIcon /> {t('labels.treasure')}
                    </RoomsKeyEntry>
                </RoomsKey>

                <RoomArray>
                    {rooms.map(
                        ({
                            id,
                            position,
                            creature,
                            treasure,
                            type,
                            description,
                        }) => (
                            <Room
                                key={id}
                                posX={position.x}
                                posY={position.y}
                                creature={creature}
                                treasure={treasure}
                            >
                                <RoomType>{type}</RoomType>
                                {description}
                                <StatusIconContainer>
                                    {creature && <CreatureIcon />}
                                    {treasure && <TreasureIcon />}
                                </StatusIconContainer>
                            </Room>
                        )
                    )}
                </RoomArray>
            </RoomsContainer>

            <Credits>
                <Trans
                    t={t}
                    i18nKey={'other.credits'}
                    components={{
                        a: <a />,
                    }}
                />
            </Credits>
        </ContentContainer>
    );
};

export default AdventureSiteGenerator;
