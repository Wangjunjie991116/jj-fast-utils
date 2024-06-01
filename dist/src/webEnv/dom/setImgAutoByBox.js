/**
 * Set the image width and height based on the external container aspect ratio. 根据外部容器宽高比设置图片宽高.
 *
 * @param {HTMLImageElement} img Img element. 图片元素.
 * @param {number} ratio The aspect ratio of the external container. 外部容器的宽高比.
 */
const setImgAutoByBox = (img, ratio) => {
    const imgW = img.width;
    const imgH = img.height;
    if (imgW / imgH > ratio) {
        img.style.width = '100%';
        img.style.height = 'auto';
    }
    else {
        img.style.width = 'auto';
        img.style.height = '100%';
    }
};
export default setImgAutoByBox;
//# sourceMappingURL=setImgAutoByBox.js.map