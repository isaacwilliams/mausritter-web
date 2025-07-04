import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const PromoToast = styled.div<{ $visible: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 2rem;
    right: 2rem;

    min-width: 350px;
    max-width: 90vw;
    background-color: #e4a60b;

    z-index: 1000;
    border-radius: 0.5rem;
    box-shadow:
        0 4px 24px rgba(0, 0, 0, 0.18),
        0 1.5px 6px rgba(0, 0, 0, 0.12);
    pointer-events: auto;

    transform: translateX(40px);

    opacity: 0;
    transition:
        transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    ${({ $visible }) =>
        $visible &&
        `
            transform: translateX(0);
            opacity: 1;
        `}
`;

const PromoToastContent = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    text-align: center;
    color: black;
    font-size: 1rem;
    font-weight: 500;

    padding: 0.75rem 1rem;
`;

interface BannerProps {
    children?: React.ReactNode;
    className?: string;
    href?: string;
    target?: string;
    rel?: string;
}

const Banner: React.FC<BannerProps> = ({
    children,
    className,
    href = '#',
    target = '_blank',
    rel = 'noopener noreferrer',
}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 300); // 300ms delay
        return () => clearTimeout(timer);
    }, []);

    return (
        <PromoToast className={className} $visible={visible}>
            <PromoToastContent href={href} target={target} rel={rel}>
                {children}
            </PromoToastContent>
        </PromoToast>
    );
};

export default Banner;
