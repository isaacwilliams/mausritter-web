import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer, ContentContainer } from '../../layout/ContentContainer';
import {
    SubTitle,
} from '../../styles/shared';

const ResourcesContainer = styled(FlexContainer)`
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: start;
`;

const ResourceLink = styled(Link)`
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

    .name {
        margin-top: 1rem;
        font-size: 1rem;
        text-align: center;
    }

    .author {
        font-size: 0.9rem;
        text-align: center;
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
            box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
        }
    }

    ${media.phone`
        width: 25vw;
        height: 25vw;

        img {
            max-height: 16vw;
        }
    `}
`;

const HeroResourceLink = styled(Link)`
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

    /* text-shadow: -4px -4px 0 white, 4px -4px 0 white, -4px 4px 0 white, 4px 4px 0 white; */

    /* &:after {
        position: absolute;

        left: 0;
        top: 1.3rem;
        right: 0;

        border-top: 0.5rem solid black;
        content: '';

        z-index: -1;
    } */
`

const ResourcesSection = ({ title, resources = [], heroResources = [] }) => {
    console.log(heroResources);

    return (
        <ResourcesSectionContainer>
            <FlexContainer>
                <ResourceSubTitle>
                    {title}
                </ResourceSubTitle>
            </FlexContainer>

            <ContentContainer>
                {heroResources.map(({ name, image, imageOverlay, link, className }) => {
                    console.log(image);
                    return (
                        <HeroResourceLink to={link} style={{ backgroundImage: `url(${image})` }} className={className}>
                            <div className="name">{name}</div>
                            {imageOverlay && (
                                <div className="image-overlay" style={{ backgroundImage: `url(${imageOverlay})` }} />
                            )}
                        </HeroResourceLink>
                    );
                })}
            </ContentContainer>

            <ResourcesContainer>
                {resources.map(({ name, author, image, link, className }) => (
                    <ResourceLink to={link} key={link} className={className}>
                        {image && <img src={image} alt="" />}
                        <div className="name">{name}</div>
                        {author && <div className="author">{author}</div>}
                    </ResourceLink>
                ))}
            </ResourcesContainer>
        </ResourcesSectionContainer>
    );
};

export default ResourcesSection;
