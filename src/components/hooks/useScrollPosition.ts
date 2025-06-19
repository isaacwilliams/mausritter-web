import { useState, useEffect } from 'react';

const useScrollPosition = (): number => {
    const [scroll, setScroll] = useState<number>(0);

    const scrollHandler = (): void => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []); // Added dependency array to prevent unnecessary re-renders

    return scroll;
};

export default useScrollPosition;
