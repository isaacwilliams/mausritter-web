import React from 'react';
import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

const FeaturePanel = styled.section`
    display: flex;

    &.left {
        flex-direction: row-reverse;
    }

    ${media.phone`
        flex-wrap: wrap;
    `}
`;

const FeatureImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;

    img {
        width: 100%;
        height: auto;
        display: block;
        margin-bottom: 0;
    }

    ${media.phone`
        width: 100vw;
        height: 60vw;
        overflow: hidden;
    `}
`;

const FeatureText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;

    ${media.phone`
        width: auto;
        padding-top: 3rem;
        padding-bottom: 3rem;
        font-size: 3vw;
    `}
`;

const FeatureTextBody = styled.article`
    ${font.body}

    width: 25vw;
    line-height: 1.4;
    font-size: 1.4rem;

    ${media.desktop`
        font-size: 1.6rem;
    `}

    ${media.large`
        width: 20vw;
    `}

    ${media.phone`
        width: auto;
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 1.3rem;
    `}
`;

const Feature = ({ image, children, className }) => (
    <FeaturePanel className={className}>
        <FeatureImage>
            {image}
        </FeatureImage>
        <FeatureText>
            <FeatureTextBody>
                {children}
            </FeatureTextBody>
        </FeatureText>
    </FeaturePanel>
);

export default Feature;
