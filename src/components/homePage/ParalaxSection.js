import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import useWindowSize from '../hooks/useWindowSize';
import styled from 'styled-components';

const ParalaxContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 60vw;
    z-index: 1;
`

const paralaxStyle = ({ transform = 0, multiplier = 0, offset = 0, top }) => ({
    position: 'absolute',
    transform: `translate(0px, ${transform * multiplier + offset}%)`,
    width: '100%',
    top,
});

const ParalaxSection = () => {
    const scrollPosition = useScrollPosition();
    const windowSize = useWindowSize();

    const transform = Math.min(
        (scrollPosition - (windowSize.height / 2)) / windowSize.height,
        1
    );

    return (
        <ParalaxContainer >
            <img src={require('./images/mausritter-seperated-4.jpg')} style={paralaxStyle({ transform })} />
            <img src={require('./images/mausritter-seperated-3.png')} style={paralaxStyle({ transform, multiplier: -8, offset: 0 })} />
            <img src={require('./images/mausritter-seperated-2.png')} style={paralaxStyle({ transform, multiplier: -10, offset: -20 })} />
            <img src={require('./images/mausritter-seperated-1.png')} style={paralaxStyle({ transform, multiplier: -20, offset: 4 })} />
        </ParalaxContainer>
    );
};

export default ParalaxSection;
