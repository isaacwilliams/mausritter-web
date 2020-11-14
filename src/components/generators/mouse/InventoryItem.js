import React from 'react';
import styled, { css } from 'styled-components';
import { repeat, times } from 'lodash/fp';

import font from '../../styles/font';
import colors from '../../styles/colors';
import media from '../../styles/media';

const ITEM_SIZE = 1.2;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;

    box-sizing: border-box;
    background: white;

    width: ${ITEM_SIZE}in;
    height: ${ITEM_SIZE}in;

    margin-right: 1rem;
    margin-bottom: 1rem;

    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.1);

    background-color: #d4c5ae;

    ${({ shape }) => shape === 'wide' &&  css`
        width: ${ITEM_SIZE * 2}in;
        height: ${ITEM_SIZE}in;
    `}

    ${({ shape }) => shape === 'tall' &&  css`
        width: ${ITEM_SIZE}in;
        height: ${ITEM_SIZE * 2}in;
    `}
`;

const Name = styled.div`
    padding: 0.3rem;
    border-bottom: 1px solid black;

    ${font.display}
    font-size: ${({ nameLength }) => nameLength > 12 ? '0.8rem' : '0.9rem'};
    height: 1.2rem;

    white-space: nowrap;

    overflow: hidden;
    text-overflow: ellipsis;
`;

const HeaderInfo = styled.div`
    display: flex;
    justify-content: space-between;
`

const Usage = styled.div`
    display: flex;
    flex-wrap: wrap;

    margin-top: 3px;
    margin-left: 3px;
    max-width: 36px;
`;

const UsageDot = styled.span`
    display: inline-block;
    width: 8px;
    height: 8px;

    margin-right: 2px;
    margin-bottom: 2px;

    border-radius: 50%;

    border: 1px solid black;
`;

const MechInfo = styled.div`
    display: flex;

    margin-top: 3px;
    margin-right: 3px;

    padding: 2px 3px;

    border: 1px solid black;

    font-size: 0.9rem;
`;

const ItemType = styled.div`
    margin-top: auto;
    margin-left: 3px;

    font-size: 0.9rem;
    color: #666;
`;

const InventoryItem = ({ item }) => {
    const {
        name,
        type,
        usage = 3,
        def,
        attack,
        shape,
    } = item;
    const usageArray = times(String, usage);

    return (
        <ItemContainer shape={shape}>
            <Name nameLength={name.length}>
                {type === 'Spell' && '★ '}
                {name}
            </Name>
            <HeaderInfo>
                <Usage>
                    {usageArray.map(() => (
                        <UsageDot />
                    ))}
                </Usage>
                {(def || attack) && (
                    <MechInfo>
                        {def || attack}
                    </MechInfo>
                )}
            </HeaderInfo>

            {type && (
                <ItemType>
                    {type}
                </ItemType>
            )}
        </ItemContainer>
    );
};

export default InventoryItem;
