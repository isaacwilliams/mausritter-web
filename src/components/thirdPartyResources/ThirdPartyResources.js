import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { sortBy, startCase } from 'lodash/fp'

import media from '../../components/styles/media'
import font from '../../components/styles/font'

import { ContentContainer } from '../../components/layout/ContentContainer'
import BodyText from '../../components/styles/BodyText'
import { Title, SubTitle } from '../../components/styles/shared'

import THIRD_PARTY_RESOURCES from './thirdPartyResourcesData'

const ResourcePageContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 6rem;
`

const ResourceTableContainer = styled.div``

const ResourceTableEntry = styled.div`
    display: grid;
    width: 100%;
    grid-auto-flow: column;
    grid-template-columns: 6rem 2fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 2rem;

    padding: 1rem;

    border-bottom: 1px solid #eaeaea;

    &:nth-child(even) {
        background: #f9f9f9;
    }

    img {
        width: 5.6rem;
        height: 8rem;

        object-fit: cover;

        transition: transform 0.3s ease-in-out;

        box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.3),
            0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    }

    .title {
        ${font.display}
        font-size: 1.1rem;
    }

    .author,
    .date,
    .type {
        opacity: 0.7;
    }

    &:hover {
        img {
            transform: scale(1.04);
        }
    }

    ${media.phone`
        width: calc(100% - 2rem);
        grid-template-columns: 4rem 1.5fr 1fr 1fr;
        grid-gap: 0.5rem;
        padding: 1rem;

        .title {
            font-size: 0.9rem;
        }

        .author,
        .date {
            font-size: 0.8rem;
        }

        .resource-type {
            display: none;
        }

        img {
            width: 3.5rem;
            height: 5rem;
        }
    `}
`

const StyleSortButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${font.body}

    font-size: 1rem;
    font-weight: 600;

    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    text-align: left;

    ${({ active, sortAsc }) =>
        active &&
        `
        span {
            text-decoration: underline;
        }


        &:after {
            margin-left: 0.5rem;
            font-size: 0.7rem;
            content: '${sortAsc ? '▲' : '▼'}';
            text-decoration: none;
        }`}

    ${media.phone`
        font-size: 0.8rem;
    `}
`

const SortButton = ({
    children,
    sortByField,
    setSortBy,
    currentSortBy,
    sortAsc,
    className,
}) => {
    return (
        <StyleSortButton
            sortAsc={sortAsc}
            active={sortByField === currentSortBy}
            onClick={() => {
                setSortBy(sortByField)
            }}
            className={className}
        >
            <span>{children}</span>
        </StyleSortButton>
    )
}

const ThirdPartyLicence = () => {
    const [sortByField, setSortByField] = useState('releaseDate')
    const [sortAsc, setSortAsc] = useState(true)

    const setSortMethod = field => {
        setSortByField(field)

        if (sortByField === field) {
            setSortAsc(!sortAsc)
        } else {
            setSortAsc(field === 'releaseDate')
        }
    }

    let sortedResources = sortBy(sortByField, THIRD_PARTY_RESOURCES)

    if (sortAsc) {
        sortedResources = sortedResources.reverse()
    }

    return (
        <ResourcePageContainer>
            <ContentContainer>
                <Title>Mausritter Third-Party Resources</Title>

                <BodyText
                    className="small center"
                    style={{
                        marginBottom: '3rem',
                    }}
                >
                    <p>
                        These works are created under the Mausritter Third Party
                        Licence, and are not assocated with Losing Games.
                    </p>
                    <p>
                        Learn about the{' '}
                        <Link to="/third-party-licence">
                            Mausritter Third Party Licence
                        </Link>
                    </p>
                </BodyText>

                <ResourceTableContainer>
                    <ResourceTableEntry>
                        <div className="image"> </div>
                        <SortButton
                            setSortBy={setSortMethod}
                            currentSortBy={sortByField}
                            sortAsc={sortAsc}
                            sortByField="name"
                        >
                            Title
                        </SortButton>
                        <SortButton
                            setSortBy={setSortMethod}
                            currentSortBy={sortByField}
                            sortAsc={sortAsc}
                            sortByField="author"
                        >
                            Author
                        </SortButton>
                        <SortButton
                            setSortBy={setSortMethod}
                            currentSortBy={sortByField}
                            sortAsc={!sortAsc}
                            sortByField="releaseDate"
                        >
                            Release date
                        </SortButton>
                        <SortButton
                            setSortBy={setSortMethod}
                            currentSortBy={sortByField}
                            sortAsc={sortAsc}
                            sortByField="type"
                            className="resource-type"
                        >
                            Type
                        </SortButton>
                    </ResourceTableEntry>
                    {sortedResources.map(
                        ({ image, link, name, author, releaseDate, type }) => (
                            <ResourceTableEntry>
                                <a
                                    href={link}
                                    target="_blank"
                                    className="image"
                                >
                                    {image && (
                                        <img
                                            src={image}
                                            alt=""
                                            loading="lazy"
                                        />
                                    )}
                                </a>
                                <a
                                    href={link}
                                    target="_blank"
                                    className="title"
                                >
                                    {name}
                                </a>
                                <div className="author">{author}</div>
                                <div className="date">{releaseDate}</div>
                                <div className="resource-type">
                                    {startCase(type)}
                                </div>
                            </ResourceTableEntry>
                        )
                    )}
                </ResourceTableContainer>
            </ContentContainer>
        </ResourcePageContainer>
    )
}

export default ThirdPartyLicence
