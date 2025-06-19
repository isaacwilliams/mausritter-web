import React from 'react';
import { mediaSizes } from '../styles/media';

// Simple hook to detect mobile
function useIsMobile(breakpoint: number = mediaSizes.phone): boolean {
    const [isMobile, setIsMobile] = React.useState(
        typeof window !== 'undefined' ? window.innerWidth <= breakpoint : false,
    );

    React.useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= breakpoint);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [breakpoint]);

    return isMobile;
}

export default useIsMobile;
