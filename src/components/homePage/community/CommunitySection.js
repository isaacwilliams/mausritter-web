import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';
import font from '../../styles/font';

import { FlexContainer, ContentContainer } from '../../layout/ContentContainer';
import Feature from '../features/Feature';

import {
    Title,
    SubTitle,
} from '../../styles/shared';

const CommunitySectionWrapper = styled.section`
    padding-top: 6rem;
    padding-bottom: 6rem;
    background: #eee;
`;

const MouseImage = styled.img`
    width: 20rem;
    height: auto;
`;

const DiscordDescription = styled.p`
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
`;

const SubTitleCenter = styled(SubTitle)`
    text-align: center;
`;

const LinkButton = styled.a`
    padding-top: 0.6rem;
    padding-left: 3rem;
    padding-bottom: 0.7rem;
    padding-right: 1.5rem;

    border: 0;
    border-radius: 0.2rem;

    background-color: #ddd;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    background-position: 1rem center;

    font-size: 1.1rem;
    ${font.display}
    letter-spacing: 0.05rem;

    cursor: pointer;
    outline: none;

    white-space: nowrap;

    &:hover {
        background-color: yellow;
        color: black;
    }
`;

const LinkButtonTwitter = styled(LinkButton)`
    margin-left: 1rem;
    margin-right: 1rem;
    background-image: url(${require('./icon-twitter.svg')});
`;

const LinkButtonDiscord = styled(LinkButton)`
    background-image: url(${require('./icon-discord.svg')});
`;

const TwitterLinksContainer = styled(FlexContainer)`
    ${media.phone`
        width: auto;
        display: flex;
        padding-left: 3rem;
        padding-right: 3rem;
        font-size: 1.3rem;
    `}
`;

const CommunitySection = () => (
    <CommunitySectionWrapper id="community">
        <ContentContainer>
            <Title>Join the Mausritter community</Title>

            <Feature image={<img src={require('./discord-mouse.png')} />}>
                <DiscordDescription>
                    Got questions? Looking for ideas or content for your game?
                    Want to find people to play with?
                </DiscordDescription>
                <DiscordDescription>
                    Join our friendly and helpful Discord community.
                </DiscordDescription>
                <LinkButtonDiscord href="https://discord.gg/v4wmKsv">Mausritter Discord</LinkButtonDiscord>
            </Feature>

            <br />

            <SubTitleCenter>
                News and updates
            </SubTitleCenter>

            <FlexContainer>
                <LinkButtonTwitter href="https://twitter.com/mausritter">
                    @mausritter
                </LinkButtonTwitter>

                <LinkButtonTwitter href="https://twitter.com/isaacwilliams">
                    @isaacwilliams
                </LinkButtonTwitter>
            </FlexContainer>
        </ContentContainer>
    </CommunitySectionWrapper>
);
export default CommunitySection;
