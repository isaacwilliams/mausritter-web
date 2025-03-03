import React, { useState } from 'react';
// import { Link } from 'gatsby';
import lodash from 'lodash/fp';
const { sortBy, slice } = lodash;

import styled, { css } from 'styled-components';
import media from '../../styles/media';

import { FlexContainer, ContentContainer } from '../../layout/ContentContainer';
import { SubTitle } from '../../styles/shared';

const RESOURCES_LIMIT = 8;
const limitedArray = slice(0, RESOURCES_LIMIT);

const ResourcesContainer = styled(FlexContainer)`
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: start;

    ${media.phone`
        display: block;
    `}
`;

const linkStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 13rem;
    height: 13rem;

    padding: 2rem;

    text-decoration: none;
    color: black;

    img {
        max-width: 100%;
        max-height: 11rem;

        transition: transform 0.3s ease-in-out;
    }

    .info {
        margin-top: 1rem;
        font-size: 1rem;
        text-align: center;
    }

    .author {
        font-size: 0.9rem;
        opacity: 0.7;
    }

    &:hover {
        background: yellow;

        img {
            transform: scale(1.04);
        }
    }

    &.shadow {
        img {
            box-shadow:
                0 0.2rem 0.5rem rgba(0, 0, 0, 0.3),
                0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
        }
    }

    ${media.phone`
        display: grid;

        grid-template-columns: 6rem 1fr;
        grid-template-rows: auto 1fr;

        width: auto;
        height: auto;

        padding: 1rem;

        text-align: left;

        .info {
            margin-top: 0;
            text-align: left;
        }

        img {
            max-height: 16vw;
            max-width: 5rem;
        }
    `}
`;

const heroLinkStyle = css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    height: 10rem;
    max-height: 10vw;

    padding: 2rem;
    margin-top: 1rem;
    margin-bottom: 2rem;

    border-radius: 1rem;

    background-size: 100% auto;
    background-position: center;

    transition: background-size 0.3s ease-in-out;

    .name {
        opacity: 0;
        font-size: 0;
    }

    .image-overlay {
        position: absolute;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-size: 100% auto;
        background-position: center;
    }

    &:hover {
        background-size: 103% auto;
    }

    ${media.phone`
        width: auto;
        height: 25vw;

        img {
            max-height: 16vw;
            background-size: auto 100%;
        }
    `}
`;

const StyledExternalResourceLink = styled.a`
    ${linkStyle}
`;

const StyledExternalHeroResourceLink = styled.a`
    ${heroLinkStyle}
`;

const ResourcesSectionContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 4rem;
`;

const ResourceSubTitle = styled(SubTitle)`
    padding-bottom: 0;
    margin-bottom: 1rem;
    position: relative;

    width: 100%;
    text-align: left;

    border-bottom: 0.5rem solid black;
`;

const ResourcesFooterContainer = styled.div`
    text-align: center;
    margin-top: 1rem;
`;

const ResourceLink = ({
    href,
    ...rest
}: {
    href: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}) => {
    return <StyledExternalResourceLink href={href} {...rest} />;
};

const HeroResourceLink = ({
    href,
    ...rest
}: {
    href: string;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}) => {
    return <StyledExternalHeroResourceLink href={href} {...rest} />;
};

const ResourcesSection = ({
    title,
    itemClassName,
    resources = [],
    heroResources = [],
    footer,
    sortByField,
}: {
    title: string;
    itemClassName?: string;
    resources: {
        name: string;
        author?: string;
        image?: string;
        link: string;
        className?: string;
    }[];
    heroResources: {
        name: string;
        image: string;
        imageOverlay?: string;
        link: string;
        className?: string;
    }[];
    footer?: React.ReactNode;
    sortByField?: string;
}) => {
    const sortedResources: {
        name: string;
        author?: string;
        image?: string;
        link: string;
        className?: string;
    }[] = sortByField ? sortBy(sortByField, resources).reverse() : resources;

    return (
        <ResourcesSectionContainer>
            <FlexContainer>
                <ResourceSubTitle>{title}</ResourceSubTitle>
            </FlexContainer>

            <ContentContainer>
                {heroResources.map(
                    ({ name, image, imageOverlay, link, className }, i) => (
                        <HeroResourceLink
                            key={i}
                            href={link}
                            style={{ backgroundImage: `url(${image})` }}
                            className={className}
                        >
                            <div className="name">{name}</div>
                            {imageOverlay && (
                                <div
                                    className="image-overlay"
                                    style={{
                                        backgroundImage: `url(${imageOverlay})`,
                                    }}
                                />
                            )}
                        </HeroResourceLink>
                    ),
                )}
            </ContentContainer>

            <ResourcesContainer>
                {sortedResources.map(
                    ({ name, author, image, link, className }) => (
                        <ResourceLink
                            key={name}
                            href={(link || '').toString()}
                            className={className || itemClassName}
                        >
                            {image && <img src={image} alt="" loading="lazy" />}
                            <div className="info">
                                <div className="name">{name}</div>
                                {author && (
                                    <div className="author">{author}</div>
                                )}
                            </div>
                        </ResourceLink>
                    ),
                )}
            </ResourcesContainer>

            {footer && (
                <ResourcesFooterContainer>
                    <ContentContainer>{footer}</ContentContainer>
                </ResourcesFooterContainer>
            )}
        </ResourcesSectionContainer>
    );
};

export default ResourcesSection;
