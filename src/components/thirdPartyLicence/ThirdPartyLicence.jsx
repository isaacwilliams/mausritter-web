import React from 'react';
import { styled } from 'styled-components';

import media from '../styles/media';

import { ContentContainer } from '../layout/ContentContainer';
import BodyText from '../styles/BodyText';
import { Title, SubTitle } from '../styles/shared';

import image from './compatible-with-mausritter.svg';
import colors from '../styles/colors';

const LicencePageContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 6rem;
`;

const LicenceTable = styled.div`
    display: grid;

    ${media.phone`
        display: block;

        margin-left: 2rem;
        margin-right: 2rem;

        > div {
            margin-bottom: 2rem;
        }
    `}
`;

const LicenceTableTop = styled(LicenceTable)`
    grid-template-columns: 1fr 1fr;
    column-gap: 4rem;
`;

const LicenceTableBottom = styled(LicenceTable)`
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3rem;

    margin-top: 3rem;
    margin-bottom: 3rem;
`;

const FlexColumn = styled.div`
    width: 48%;
`;

const IntroContainer = styled.div`
    margin-bottom: 4rem;

    ${media.phone`
        padding-left: 2rem;
        padding-right: 2rem;
    `}

    ${media.large`
        width: 70rem;
        padding-left: 0;
        padding-right: 0;
    `}
`;

const LegalBlockquote = styled.blockquote`
    padding: 1rem;
    border: 1px solid #999;
    color: #333;
    background: #f9f9f9;
`;

const SubTitleReducedPad = styled(SubTitle)`
    padding-bottom: 0;
    font-size: 1.8rem;
`;

const BodyTextMed = styled(BodyText)`
    font-size: 1.2rem;
`;

const LogoDownloadButton = styled.a`
    padding: 1rem;

    max-width: 10rem;

    display: block;
    text-align: left;

    img {
        display: block;
        margin-bottom: 0.5rem;
        max-width: 12rem;
    }

    &:hover {
        background: ${colors.highlight};
    }
`;

const ThirdPartyLicence = () => (
    <LicencePageContainer>
        <ContentContainer>
            <Title>Mausritter Third Party Licence</Title>

            <IntroContainer>
                <BodyText className="large center">
                    <p>
                        This licence allows anyone to make adventures, beasts,
                        spells or hacks for Mausritter and sell or publish for
                        free.
                    </p>
                </BodyText>
            </IntroContainer>

            <LicenceTableTop>
                <div>
                    <SubTitleReducedPad>Rules</SubTitleReducedPad>

                    <BodyTextMed>
                        <p>
                            If you follow these rules you are allowed to publish
                            free or commercial material based upon or declaring
                            compatibility with Mausritter without express
                            permission from Losing Games.
                        </p>

                        <p>
                            Without explicit permission, you{' '}
                            <strong>may not:</strong>
                        </p>

                        <ul>
                            <li>
                                Copy or translate the art or text of the
                                Mausritter book (except for uses covered under
                                the{' '}
                                <a href="/srd/terms">
                                    terms of the Mausritter SRD
                                </a>
                                )
                            </li>
                            <li>
                                Use the Losing Games, Games Omnivorous or
                                Mausritter logos
                            </li>
                            <li>
                                State or imply that your work is an offical
                                Mausritter product, or that it is endorsed by
                                Losing Games
                            </li>
                        </ul>

                        <p>
                            You <strong>may:</strong>
                        </p>

                        <ul>
                            <li>
                                Use, copy and modify the item card templates and
                                item card art
                            </li>
                            <li>
                                Use, reference and modify the game rules and
                                mechanics
                            </li>
                            <li>
                                Reference any locations, creatures, characters
                                or factions mentioned in the Mausritter book
                            </li>
                        </ul>
                    </BodyTextMed>
                </div>

                <div>
                    <SubTitleReducedPad>Legal</SubTitleReducedPad>

                    <BodyTextMed>
                        <p>
                            The following text must be included somewhere
                            visible within your publication, and on the website
                            or storefront where you promote the product:
                        </p>

                        <LegalBlockquote>
                            [Product name] is an independent production by
                            [Author or Publisher] and is not affiliated with
                            Losing Games. It is published under the Mausritter
                            Third Party Licence.
                        </LegalBlockquote>

                        <p>
                            This copyright text must be legibly included
                            somewhere on the product:
                        </p>

                        <LegalBlockquote>
                            Mausritter is copyright Losing Games.
                        </LegalBlockquote>

                        <p>
                            Losing Games takes no responsibility for any legal
                            claims against your product.
                        </p>
                    </BodyTextMed>
                </div>
            </LicenceTableTop>

            <LicenceTableBottom>
                <div>
                    <SubTitleReducedPad>Compatibility logo</SubTitleReducedPad>

                    <BodyTextMed>
                        <p>
                            You are allowed and encouraged (but are not required
                            to) use the “Compatible with Mausritter” logo in
                            your product, and on the website or storefront where
                            you promote the product.
                        </p>

                        <p>
                            <LogoDownloadButton href="https://drive.google.com/drive/folders/16hFJkH4hbwuDO0EIb1nswMnz9Logh8nD">
                                <img src={image} />
                                Download
                            </LogoDownloadButton>
                        </p>
                    </BodyTextMed>
                </div>

                <div>
                    <SubTitleReducedPad>
                        What makes it Mausritter?
                    </SubTitleReducedPad>

                    <BodyTextMed>
                        <p>
                            Mausritter is about small-scale adventurers in a
                            huge world. Mouse adventurers who take on big
                            challenges and face down grave danger.
                        </p>

                        <p>
                            Make it small and dense. Leave liminal space to be
                            filled by the players.
                        </p>

                        <p>
                            Mausritter can sometimes contain dark themes under
                            the surface, but don't publish anything that
                            contains sexist, racist, homophobic, transphobic or
                            hateful content and tropes.
                        </p>
                    </BodyTextMed>
                </div>

                <div>
                    <SubTitleReducedPad>
                        Mausritter Library listing
                    </SubTitleReducedPad>

                    <BodyTextMed>
                        <p>
                            We love to feature the creativity and work of
                            Mausritter's community!
                        </p>

                        <p>
                            To be listed in the{' '}
                            <a href="https://library.mausritter.com">
                                Mausritter Library
                            </a>
                            :
                        </p>

                        <ul>
                            <li>
                                Conform to the rules of the Third Party Licence
                            </li>
                            <li>Finish your product and publish it online</li>
                            <li>
                                Complete the{' '}
                                <a href="https://library.mausritter.com/#submission-form">
                                    submission form on the Mausritter Library
                                    home page
                                </a>
                            </li>
                        </ul>
                    </BodyTextMed>
                </div>
            </LicenceTableBottom>
        </ContentContainer>
    </LicencePageContainer>
);

export default ThirdPartyLicence;
