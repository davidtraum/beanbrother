/**
 * @author dtraum
 */

import StorageService from "@/service/StorageService";

export default new class SharepicRenderer {
    private readonly logo: HTMLImageElement;

    private readonly config = {
        image: {
            maxWidth: 500,
            maxHeight: 500
        },
        logo: {
            scale: 0.2
        }
    };

    constructor() {
        this.logo = new Image();
        this.logo.src = require('../assets/LogoBlue.png');
    }

    render(data: string): Promise<null | string> {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context !== null) {
                const image = new Image();
                image.onload = () => {
                    let width = this.config.image.maxWidth;
                    let height = this.config.image.maxHeight;
                    if(image.width > image.height) {
                        height = height * ( image.height / image.width );
                    } else {
                        width = width * ( image.width / image.height );
                    }
                    canvas.width = width;
                    canvas.height = height;
                    context.drawImage(image, 0,0, width, height);
                    context.drawImage(this.logo, 
                                        canvas.width - this.logo.width * this.config.logo.scale - 10, 
                                        canvas.height - this.logo.height * this.config.logo.scale - 10,
                                        this.logo.width * this.config.logo.scale,
                                        this.logo.height * this.config.logo.scale);
                    const text = `${StorageService.data.name}'s BeanBrother-Moment`;
                    context.font = '30px Helvetica';
                    const metrics = context.measureText(text);
                    context.fillStyle = 'white';
                    context.globalAlpha = 0.5;
                    context.fillRect(0,0,canvas.width,40);
                    context.globalAlpha = 1;
                    context.fillStyle = 'black';
                    context.fillText(text, (canvas.width * 0.5) - (metrics.width * 0.5), 32);
                    resolve(canvas.toDataURL('image/png'));
                };
                image.src = data;
            } else {
                resolve(null);
            }
        });
    }
}
