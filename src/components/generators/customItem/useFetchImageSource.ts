import { useEffect, useState } from 'react';

const useFetchImageSource = (imageUrl: string | undefined | null) => {
    const [imageSource, setImageSource] = useState<HTMLImageElement | null>();

    useEffect(() => {
        if (!imageUrl) {
            setImageSource(null);
            return;
        }

        const image = new Image();
        image.src = imageUrl;

        image.addEventListener('load', () => {
            setImageSource(image);
        });
    }, [imageUrl]);

    return imageSource;
};

export default useFetchImageSource;
