import React from 'react';
import useScrollPosition from '../../hooks/useScrollPosition';
import useWindowSize from '../../hooks/useWindowSize';
import styled from 'styled-components';

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

const paralaxStyle = ({ transform = 0, multiplier = 0, offset = 0, top }) => ({
    position: 'absolute',
    transform: `translate(0px, ${transform * multiplier + offset}%)`,
    width: '100%',
    top,
});

const ParalaxSection = ({ scrollPosition, windowSize }) => {
    const transform = Math.min(
        (scrollPosition - windowSize.height / 2) / windowSize.height,
        1
    );

    return (
        <ParalaxContainer>
            <img
                src={mausritterSeperated4}
                style={paralaxStyle({ transform })}
            />
            <img
                src={mausritterSeperated3}
                style={paralaxStyle({ transform, multiplier: -8, offset: 0 })}
            />
            <img
                src={mausritterSeperated2}
                style={paralaxStyle({
                    transform,
                    multiplier: -12,
                    offset: -20,
                })}
            />
            <img
                src={mausritterSeperated1}
                style={paralaxStyle({ transform, multiplier: -22, offset: 8 })}
            />
        </ParalaxContainer>
    );
};

export default ParalaxSection;
