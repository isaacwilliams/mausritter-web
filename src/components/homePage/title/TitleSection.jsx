import { keyframes, styled } from 'styled-components';

import Navigation from '../../navigation/Navigation';
import BodyText from '../../styles/BodyText';
import LosingGamesLogo from '../../navigation/logos/LosingGamesLogo';

import media from '../../styles/media';

import dividerStem from './divider-stem.jpg';
import mausritterLogo from '../../navigation/logos/mausritter-logo.svg';

const TitleSectionContainer = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;

    ${media.phone`
        min-height: 0;
    `}
`;

const grassBaseSway = keyframes`
    0% {
        transform: rotate(-0.9deg) skewX(0.2deg);
    }

    50% {
        transform: rotate(0.9deg) skewX(-0.2deg);
    }

    100% {
        transform: rotate(-0.7deg) skewX(0.2deg);
    }
`;

const grassTipSway = keyframes`
    0% {
        transform: rotate(-1.6deg) skewX(0.35deg);
    }

    50% {
        transform: rotate(2.1deg) skewX(-0.55deg);
    }

    100% {
        transform: rotate(-1.3deg) skewX(0.35deg);
    }
`;

const GrassStem = styled.div`
    position: absolute;
    right: 0;
    bottom: -100px;
    width: 250px;
    height: 786px;
    pointer-events: none;
    transform-origin: 50% 100%;
    animation: ${grassBaseSway} 8s ease-in-out infinite;
    will-change: transform;

    ${media.phone`
        display: none;
    `}

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const GrassLayer = styled.div`
    position: absolute;
    inset: 0;
    background-image: url(${dividerStem});
    background-repeat: no-repeat;
    background-size: 100% 100%;
`;

const GrassBase = styled(GrassLayer)`
    clip-path: inset(61% 0 0 0);
`;

const GrassTip = styled(GrassLayer)`
    clip-path: inset(0 0 37% 0);
    transform-origin: 50% 63%;
    animation: ${grassTipSway} 5.8s ease-in-out infinite;
    will-change: transform;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`;

const TitleSectionBody = styled.div`
    position: relative;
    z-index: 1;
    margin: auto;
    width: 500px;
    padding-top: 20vh;

    ${media.phone`
        width: auto;
        padding-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
    `}
`;

const TitleSectionNav = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;

    ${media.phone`
        display: none;
    `}
`;

// prettier-ignore
const MausritterLogoTitle = styled.h1`
    display: block;
    max-width: 30rem;
    height: 8rem;
    font-size: 0;
    background: url("${mausritterLogo}");
    background-position: center top;
    background-size: 100% auto;
    background-repeat: no-repeat;
`;

const Blurb = styled.div`
    padding: 1rem;
    background: white;
`;

const TitleSection = () => {
    return (
        <TitleSectionContainer>
            <GrassStem aria-hidden="true">
                <GrassBase />
                <GrassTip />
            </GrassStem>

            <TitleSectionBody>
                <MausritterLogoTitle>Mausritter</MausritterLogoTitle>

                <Blurb>
                    <BodyText>
                        <p>
                            Take up the sword and don the whiskers of a brave
                            mouse adventurer in <strong>Mausritter</strong>, the
                            rules-light fantasy adventure roleplaying game.
                        </p>

                        <p style={{ fontStyle: 'italic' }}>
                            It’s a huge and dangerous world out there, and it
                            does not look kindly on a small mouse. But if you
                            are very brave and very clever and just a bit lucky,
                            you might be able to survive. And if you survive
                            long enough, you might even become a hero amongst
                            mice.
                        </p>

                        <br />
                        <p style={{ textAlign: 'center' }}>
                            <LosingGamesLogo />
                        </p>
                    </BodyText>
                </Blurb>
            </TitleSectionBody>

            <TitleSectionNav>
                <Navigation />
            </TitleSectionNav>
        </TitleSectionContainer>
    );
};

export default TitleSection;
