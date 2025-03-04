import drawItemCanvas from './drawItemCanvas';
import { ItemToolState } from './customItemStateReducer';

const renderItemToImage = (
    canvas: HTMLCanvasElement | null,
    image: HTMLImageElement | null,
    itemState: ItemToolState,
) => {
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');

    if (ctx) {
        drawItemCanvas(canvas, ctx, itemState);
        const renderedImage = canvas.toDataURL('image/png');
        image.src = renderedImage;
    }
};

export default renderItemToImage;
