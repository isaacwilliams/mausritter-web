import React from 'react';
import { styled } from 'styled-components';

const StatblockWrapper = styled.div`
    margin: 2rem 0;
    padding: 1.5rem;
    background: #f8f7f3;
    border: 2px solid #b6a77a;
    border-radius: 0.7rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const Statblock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <StatblockWrapper className="statblock">{children}</StatblockWrapper>
    );
};

export default Statblock;
