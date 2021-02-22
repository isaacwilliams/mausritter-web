import {
    drawStar,
    drawWrappedText,
    drawImageProp,
} from './drawCanvasUtils';

const FONT_TITLE = 'Texturina';
const FONT_DISPLAY = 'Open Sans Condensed';

const drawItemCanvas = (canvas, ctx, item) => {
    const px = (value) => value * (item.resolution / 100);

    const drawTitle = () => {
        let fontSize = px(13);
        ctx.font = `${fontSize}px ${FONT_TITLE}`;
        ctx.textAlign = 'left';
        ctx.fillStyle = item.foregroundColor;

        const left = item.star ? px(21) : px(5);

        ctx.fillText(item.name, left, px(16.5), canvas.width - left - px(6));
    };

    const drawDamage = () => {
        ctx.fillStyle = item.foregroundColor;
        ctx.font = `bold ${px(11)}px ${FONT_DISPLAY}`;
        ctx.textAlign = 'right';
        ctx.fillText(item.damage, canvas.width - px(9), px(42));
        ctx.textAlign = 'left';
    };

    const drawDamageBox = () => {
        ctx.fillStyle = item.backgroundColor;
        ctx.strokeStyle = item.foregroundColor;
        ctx.lineWidth = px(2);

        const textWidth = ctx.measureText(item.damage).width;
        const width = textWidth + px(10);
        const height = px(20);
        const top = px(28);
        const left = canvas.width - width - px(5);

        ctx.beginPath();

        ctx.moveTo(left, top);
        ctx.lineTo(left + width, top);
        ctx.lineTo(left + width, top + height);
        ctx.lineTo(left, top + height);
        ctx.lineTo(left, top);

        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    };

    const drawClearDetail = () => {
        ctx.fillStyle = item.foregroundColor;
        ctx.strokeStyle = item.backgroundColor;
        ctx.lineJoin = 'round';
        ctx.lineWidth = px(3);

        ctx.textAlign = 'left';

        ctx.font = `bold ${px(10)}px ${FONT_DISPLAY}`;
        ctx.fillText('Clear:', px(6), canvas.height - px(8 + 11));

        ctx.font = `${px(10)}px ${FONT_DISPLAY}`;
        ctx.fillText(item.clearDetail, px(6), canvas.height - px(8));
    };

    const drawClassDetail = () => {
        ctx.fillStyle = item.foregroundColor;
        ctx.strokeStyle = item.backgroundColor;
        ctx.lineJoin = 'round';
        ctx.lineWidth = px(3);

        ctx.textAlign = 'left';
        ctx.font = `bold ${px(10)}px ${FONT_DISPLAY}`;

        ctx.strokeText(item.classDetail, px(6), canvas.height - px(8));
        ctx.fillText(item.classDetail, px(6), canvas.height - px(8));
    }

    const drawMechanicDetail = () => {
        ctx.font = `italic ${px(10)}px ${FONT_DISPLAY}`;
        ctx.textAlign = 'left';

        let top = px(31);

        if (item.damage.length || item.usage) {
            top += Math.max(
                item.damage.length ? px(25) : 0,
                px(Math.ceil(item.usage / 3) * 16)
            );
        }

        if (item.divider) {
            top += px(6);
        }

        drawWrappedText(ctx, item.mechanicDetail, px(6), top, canvas.width - px(12), px(12));
    };

    const drawUsage = () => {
        ctx.fillStyle = item.backgroundColor;
        ctx.strokeStyle = item.foregroundColor;
        ctx.lineWidth = px(2);

        for (let i = 0; i < item.usage; i++) {
            const posX = px(10) + (i % 3) * px(12);
            const posY = px(35) + Math.floor(i / 3) * px(12);

            ctx.beginPath();
            ctx.arc(posX, posY, px(4.5), 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        }
    };

    const drawSpellStar = () => {
        drawStar(ctx, px(11), px(12), 5, px(7), px(3.2));
    };

    const drawDividerLine = () => {
        ctx.fillRect(0, px(23), canvas.width, px(1));
    };

    const drawOuterBorder = () => {
        ctx.fillRect(0, 0, canvas.width, px(1));
        ctx.fillRect(0, 0, px(1), canvas.height);
        ctx.fillRect(0, canvas.height - px(1), canvas.width, px(1));
        ctx.fillRect(canvas.width - px(1), 0, px(1), canvas.height);
    };

    const drawImageSource = () => {
        ctx.globalCompositeOperation = 'multiply';

        const img = item.imageSource;
        const top = px(35);
        const margin = px(10);

        const height = canvas.height - top - margin;
        const width = canvas.width - margin * 2;

        const scale = Math.min(width / img.width, height / img.height);

        const x = (width / 2) - (img.width / 2) * scale + margin;
        const y = (height / 2) - (img.height / 2) * scale + top;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);

        ctx.globalCompositeOperation = 'source-over';
    };

    const drawItem = () => {
        console.log('drawing', item);

        ctx.fillStyle = item.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = item.foregroundColor;
        ctx.strokeStyle = item.foregroundColor;
        ctx.lineWidth = px(1);

        if (item.imageSource) {
            drawImageSource();
        }

        if (item.damage.length) {
            drawDamage();
            drawDamageBox();
            drawDamage();
        }

        drawUsage();

        drawTitle();

        if (item.clearDetail.length) {
            drawClearDetail();
        }

        if (item.mechanicDetail.length) {
            drawMechanicDetail();
        }

        if (item.classDetail.length) {
            drawClassDetail();
        }

        if (item.star) {
            drawSpellStar();
        }

        if (item.divider) drawDividerLine(canvas, ctx);
        if (item.border) drawOuterBorder(canvas, ctx);
    }

    return drawItem();
};

export default drawItemCanvas;
