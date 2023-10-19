/**
 * Set the image width and height based on the external container aspect ratio. 根据外部容器宽高比设置图片宽高.
 *
 * @param  img Img element. 图片元素.
 * @param  ratio The aspect ratio of the external container. 外部容器的宽高比.
 *
 */
export const setImgAutoByBox = (img: HTMLImageElement, ratio: number) => {
    let imgW = img.width;
    let imgH = img.height;
    if (imgW / imgH > ratio) {
        img.style.width = '100%';
        img.style.height = 'auto';
    } else {
        img.style.width = 'auto';
        img.style.height = '100%';
    }
};
