import React, { useState } from 'react';
import Helmet from 'react-helmet';
import styled, { css, createGlobalStyle } from 'styled-components';
import font from '../styles/font';
import colors from '../styles/colors';
import media from '../styles/media';

import { FlexContainer, ContentContainer } from '../layout/ContentContainer';

import InventoryItem from './InventoryItem';

import useRollMouse from './useRollMouse';

const Attr = styled.div`
    display: grid;
    grid-template-columns: 9rem 1fr 1fr;
    box-sizing: border-box;
    align-items: center;

    margin-bottom: 0.5rem;

    border: 1px solid ${colors.body};
    border-radius: 0.5rem;

    background: white;

    font-size: 1.8rem;
    overflow: hidden;

    ${media.phone`
        font-size: 1.2rem;
        grid-template-columns: 7rem 1fr 1fr;
    `}
`;

const AttrInfo = styled.div`
    display: grid;
    grid-template-columns: 9rem 1fr 1fr;

    margin-bottom: 0.5rem;

    span {
        color: #666;
        font-size: 0.9rem;
        text-align: center;
    }
`;

const AttrName = styled.div`
    position: relative;

    padding: 0.6rem;

    ${font.display}
    font-weight: 900;

    background: #ddd;
`;

const AttrVal = styled.div`
    font-family: 'Caveat Brush', cursive;
    font-size: 2rem;
    text-align: left;
    margin-left: 1rem;

    ${media.phone`
        font-size: 1.2rem;
    `}
`;

const AttrNameSmall = styled(AttrName)`
    font-size: 1.2rem;

    ${media.phone`
        font-size: 1rem;
    `}
`;

const AttrValSmall = styled(AttrVal)`
    font-size: 1.6rem;
`;

const AttrValMax = styled(AttrVal)`
    text-align: center;
    border-right: 1px solid #ddd;
`;

const AttrValCurrent = styled(AttrVal)`
    text-align: center;
`;

const CharacterWrapper = styled.div`
    margin-bottom: 8rem;
    min-height: 1vh;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 2fr;
    align-items: stretch;

    column-gap: 2rem;

    margin-bottom: 4rem;

    ${media.phone`
        display: block;
        margin-left: 1rem;
        margin-right: 1rem;
        margin-bottom: 2rem;
    `}
`;

const MouseColorGridContainer = styled(GridContainer)`
    grid-template-areas: "name detail";
`;

const MouseStatsGridContainer = styled(GridContainer)`
    grid-template-areas: "attr inventory";
    grid-template-columns: 2fr 4fr;
`;

const NameBackgroundContainer = styled.div`
    grid-area: name;
`

const CharacterDetailArea = styled.div`
    grid-area: detail;

    display: grid;

    grid-template-columns: 3fr 5fr;

    background: white;
    padding: 0.8rem 1rem;
    font-size: 1.1rem;

    ${media.phone`
        font-size: 1rem;
    `}
`;

const CharacterAttrArea = styled.div`
    grid-area: attr;
`;

const CharacterInventoryArea = styled.div`
    grid-area: inventory;

    ${media.phone`
        margin-top: 2rem;
    `}
`;

const NameAttr = styled(Attr)`
    margin: 0;
    border-bottom: 0;
    border-radius: 0.5rem 0.5rem 0 0;
    grid-template-columns: 9rem 1fr;

    ${media.phone`
        grid-template-columns: 7rem 1fr;
    `}
`;

const BackgroundAttr = styled(Attr)`
    margin: 0;
    border-radius: 0 0 0.5rem 0.5rem;
    grid-template-columns: 9rem 1fr;

    ${media.phone`
        grid-template-columns: 7rem 1fr;
    `}
`;

const DetailName = styled.span`
    flex-basis: 6rem;
    margin-right: 1rem;
`;

const DetailValue = styled.span`
    font-weight: 600;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    font-weight: bold;
    ${font.display};
`;

const TitleWrapper = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-top: 5rem;
    margin-bottom: 3rem;

    ${media.phone`
        display: block;
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
    `}
`;

const RollButton = styled.button`
    padding: 0.6rem 1.5rem;

    border: 0;
    border-radius: 0.2rem;

    background: #ddd;
    color: ${colors.body};

    font-size: 1.1rem;
    ${font.display}
    letter-spacing: 0.05rem;

    cursor: pointer;
    outline: none;

    &:hover {
        background: yellow;
        color: black;
    }
`;

const InventoryTitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1rem;
`;

const InventoryTitle = styled.h3`
    font-size: 1.8rem;
    ${font.display}

    ${media.phone`
        font-size: 1.4rem;
    `}
`;

const InventoryPips = styled.div`
    border: 2px solid ${colors.body};
    border-radius: 0.3rem;

    padding: 0.4rem 1rem;

    background: white;

    font-size: 1.1rem;
    font-weight: bold;

    ${media.phone`
        padding: 0.3rem 0.8rem;
        font-size: 1rem;
    `}
`;

const InventoryList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ExtraItemsTitle = styled.ul`
    margin-top: 2rem;
    margin-bottom: 0.5rem;

    font-size: 1.3rem;
    ${font.display}

    ${media.phone`
        font-size: 1.2rem;
    `}
`;

const ExtraItemsList = styled.ul`
    font-size: 1.2rem;
    list-style: disc;

    li {
        margin-left: 1.1rem;
    }

    ${media.phone`
        font-size: 1.1rem;
    `}
`;

const MausritterCharacter = () => {
    const [{
        id,
        name,
        coat,
        physicalDetail,
        birthsign,
        disposition,
        stats,
        hp,
        pips,
        background,
        items,
    }, rollMouse] = useRollMouse();

    console.log({
        id,
        name,
        coat,
        physicalDetail,
        birthsign,
        disposition,
        stats,
        hp,
        pips,
        background,
        items,
    });

    return (
        <ContentContainer>
            <Helmet>
                <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap" rel="stylesheet" />
            </Helmet>

            <TitleWrapper>
                <Title>
                    Mouse roller
                </Title>

                <RollButton onClick={() => rollMouse()}>
                    Roll another mouse
                </RollButton>
            </TitleWrapper>

            <CharacterWrapper>
                <MouseColorGridContainer>
                    <NameBackgroundContainer>
                        <NameAttr>
                            <AttrName>Name</AttrName>
                            <AttrVal>{name}</AttrVal>
                        </NameAttr>
                        <BackgroundAttr>
                            <AttrNameSmall>Background</AttrNameSmall>
                            <AttrValSmall>{background}</AttrValSmall>
                        </BackgroundAttr>
                    </NameBackgroundContainer>

                    <CharacterDetailArea>
                        <DetailName>Birthsign:</DetailName>
                        <DetailValue>{birthsign}</DetailValue>
                        <DetailName>Disposition:</DetailName>
                        <DetailValue>{disposition}</DetailValue>
                        <DetailName>Coat:</DetailName>
                        <DetailValue>{coat}</DetailValue>
                        <DetailName>Physical detail:</DetailName>
                        <DetailValue>{physicalDetail}</DetailValue>
                    </CharacterDetailArea>
                </MouseColorGridContainer>

                <MouseStatsGridContainer>
                    <CharacterAttrArea>
                        <AttrInfo>
                            <span></span>
                            <span>Max</span>
                            <span>Current</span>
                        </AttrInfo>
                        <Attr>
                            <AttrName>STR</AttrName>
                            <AttrValMax>{stats.str}</AttrValMax>
                            <AttrValCurrent>{stats.str}</AttrValCurrent>
                        </Attr>
                        <Attr>
                            <AttrName>DEX</AttrName>
                            <AttrValMax>{stats.dex}</AttrValMax>
                            <AttrValCurrent>{stats.dex}</AttrValCurrent>
                        </Attr>
                        <Attr>
                            <AttrName>WIL</AttrName>
                            <AttrValMax>{stats.wil}</AttrValMax>
                            <AttrValCurrent>{stats.wil}</AttrValCurrent>
                        </Attr>
                        <br />
                        <Attr>
                            <AttrName>HP</AttrName>
                            <AttrValMax>{hp}</AttrValMax>
                            <AttrValCurrent>{hp}</AttrValCurrent>
                        </Attr>
                    </CharacterAttrArea>

                    <CharacterInventoryArea>
                        <InventoryTitleWrapper>
                            <InventoryTitle>Inventory</InventoryTitle>
                            <InventoryPips>Pips: {pips}</InventoryPips>
                        </InventoryTitleWrapper>

                        <InventoryList>
                            {items.filter(({ type }) => type !== 'special').map((item, i) => (
                                <InventoryItem key={`${id}${i}`} item={item} />
                            ))}
                        </InventoryList>

                        <ExtraItemsTitle>
                            Additional items
                        </ExtraItemsTitle>

                        <ExtraItemsList>
                            {items.filter(({ type }) => type === 'special').map((item, i) => (
                                <li key={`${id}${i}`}>
                                    {item.name}
                                </li>
                            ))}
                        </ExtraItemsList>
                    </CharacterInventoryArea>
                </MouseStatsGridContainer>
            </CharacterWrapper>
        </ContentContainer>
    );
};

export default MausritterCharacter;
