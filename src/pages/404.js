import React from 'react';
import { styled } from 'styled-components';

import SiteContainer from '../components/layout/SiteContainer';
import Navigation from '../components/navigation/Navigation';

import {
    ContentContainer,
    FlexContainer,
} from '../components/layout/ContentContainer';
import { Title } from '../components/styles/shared';
import BodyText from '../components/styles/BodyText';

import lostMouseImage from '../components/404page/lost-mouse.png';

const FlexColumn = styled(FlexContainer)`
    margin-top: 4rem;
    flex-direction: column;
`;

const LostMouseImage = styled.img`
    max-width: 20rem;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

const NotFoundPage = () => (
    <SiteContainer>
        <Navigation />

        <ContentContainer>
            <FlexColumn>
                <Title>Are you lost, little mouse?</Title>

                <LostMouseImage
                    src={lostMouseImage}
                    alt="A small mouse holding a flaming torch."
                />

                <BodyText>Sorry, there's nothing here.</BodyText>
            </FlexColumn>
        </ContentContainer>
    </SiteContainer>
);

export default NotFoundPage;
