import React from 'react';
import { styled } from 'styled-components';

import mausritterSeperated1 from './mausritter-seperated-1.png';
import mausritterSeperated2 from './mausritter-seperated-2.png';
import mausritterSeperated3 from './mausritter-seperated-3.png';
import mausritterSeperated4 from './mausritter-seperated-4.jpg';

const ParalaxContainer = styled.section`
    position: relative;
    overflow: hidden;
    height: 60vw;
    z-index: 1;
`;

interface ParalaxStyleProps {
    transform: number;
    multiplier?: number;
    offset?: number;
    top?: string | number;
}

const paralaxStyle = ({
    transform = 0,
    multiplier = 0,
    offset = 0,
    top,
}: ParalaxStyleProps): React.CSSProperties => ({
    position: 'absolute',
    transform: `translate(0px, ${transform * multiplier + offset}%)`,
    width: '100%',
    top,
});

interface ParalaxSectionProps {
    scrollPosition: number;
    windowSize: {
        width?: number;
        height?: number;
    };
}

const ParalaxSection: React.FC<ParalaxSectionProps> = ({
    scrollPosition,
    windowSize,
}) => {
    const transform = Math.min(
        (scrollPosition - (windowSize.height || 0) / 2) /
            (windowSize.height || 1),
        1,
    );

    return (
        <ParalaxContainer
            role="img"
            aria-label="Three mouse adventurers climbing up a tree stump. A number of autumnal trees in the background. A cat perched on a fencepost watches them from a distance."
        >
            <img
                src={mausritterSeperated4}
                style={paralaxStyle({ transform })}
                alt=""
                aria-hidden="true"
            />
            <img
                src={mausritterSeperated3}
                style={paralaxStyle({ transform, multiplier: -8, offset: 0 })}
                alt=""
                aria-hidden="true"
            />
            <img
                src={mausritterSeperated2}
                style={paralaxStyle({
                    transform,
                    multiplier: -12,
                    offset: -20,
                })}
                alt=""
                aria-hidden="true"
            />
            <img
                src={mausritterSeperated1}
                style={paralaxStyle({ transform, multiplier: -22, offset: 8 })}
                alt=""
                aria-hidden="true"
            />
        </ParalaxContainer>
    );
};

export default ParalaxSection;
