import drawItemCanvas from './drawItemCanvas';

const renderItemToImage = (canvas, image, itemState) => {
    if (!canvas || !image) return;

    const ctx = canvas.getContext('2d');

    drawItemCanvas(canvas, ctx, itemState);

    const renderedImage = canvas.toDataURL("img/png");
    image.src = renderedImage;
};

export default renderItemToImage;
