import React from 'react';
import styled from 'styled-components';

import font from '../../styles/font';
import colors from '../../styles/colors';
import media from '../../styles/media';

import { FlexContainer, ContentContainer } from '../../layout/ContentContainer';
import {
    Title,
    TitleWrapper,
    RollButton,
} from '../generatorComponents';

import useAdventureSite from './useAdventureSite';

const Summary = styled.div`
    max-width: 50rem;

    font-size: 1.8rem;
    text-align: justify;
`;

const SummaryName = styled.span`
    ${font.display}
    font-size: 2.4rem;
`;

const SummaryFeature = styled.span`
    ${font.display};
`;

const RoomsContainer = styled.div`
    position: relative;
    margin-top: 4rem;
`;

const Room = styled.div`
    position: relative;
    padding: 1rem;
    border: ${({ creature }) => creature ? '1px solid #ccc' : '1px solid #ccc'};

    background: #eee;

    grid-column: ${({ posX }) => posX};
    grid-row: ${({ posY }) => posY};
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
`;

const CreatureIcon = styled(StatusIcon)`
    background: url(${require('./spider-face.svg')});
    background-color: black;
`;

const TreasureIcon = styled(StatusIcon)`
    background: url(${require('./locked-chest.svg')});
    background-color: black;
`;

const RoomType = styled.div`
    font-weight: bold;
`;

const RoomsKey = styled.div`
    position: absolute;
    width: 30rem;
`;

const RoomsKeyEntry = styled.div`
    display: flex;

    ${StatusIcon} {
        margin-right: 0.3rem;
    }
`;

const RoomArray = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    gap: 1rem;
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
    const [{
        summary: {
            name,
            construction,
            ruinAction,
            ruin,
            inhabitant,
            inhabitantAction,
            goal,
            secretHidden,
            secret,
        },
        rooms,
    },
        rollSite
    ] = useAdventureSite();

    return (
        <ContentContainer>
            <TitleWrapper>
                <Title>
                    Delving into...
                </Title>

                <RollButton onClick={() => rollSite()}>
                    Roll again
                </RollButton>
            </TitleWrapper>

            <Summary>
                <SummaryName>{name}</SummaryName>
                {`, ${construction[0]} `}
                <SummaryFeature>{construction[1]}</SummaryFeature>
                {` ${ruinAction} `}
                <SummaryFeature>{ruin}</SummaryFeature>.
                {' '}
                <SummaryFeature>{inhabitant}</SummaryFeature>
                {` ${inhabitantAction} `}
                <SummaryFeature>{goal}</SummaryFeature>.
                {` ${secretHidden} ${secret[0]} `}
                <SummaryFeature>{secret[1]}</SummaryFeature>.
            </Summary>

            <RoomsContainer>
                <RoomsKey>
                    <RoomsKeyEntry>
                        <CreatureIcon /> Creature
                    </RoomsKeyEntry>
                    <RoomsKeyEntry>
                        <TreasureIcon /> Treasure
                    </RoomsKeyEntry>
                </RoomsKey>

                <RoomArray>
                    {rooms.map(({ id, posX, posY, creature, treasure, type, description }) => (
                        <Room key={id} posX={posX} posY={posY} creature={creature}>
                            <RoomType>{type}</RoomType>
                            {description}
                            <StatusIconContainer>
                                {creature && <CreatureIcon />}
                                {treasure && <TreasureIcon />}
                            </StatusIconContainer>
                        </Room>
                    ))}
                </RoomArray>
            </RoomsContainer>

            <Credits>
                Icons from <a href="https://game-icons.net/">game-icons.net</a>.
                Chest by <a href="http://lorcblog.blogspot.com/">Lorc</a>.
                Spider by <a href="https://twitter.com/unstoppableCarl">Carl Olsen</a>.
            </Credits>
        </ContentContainer>
    )
};

export default AdventureSiteGenerator;
