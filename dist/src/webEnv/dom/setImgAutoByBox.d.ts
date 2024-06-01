/**
 * Set the image width and height based on the external container aspect ratio. 根据外部容器宽高比设置图片宽高.
 *
 * @param {HTMLImageElement} img Img element. 图片元素.
 * @param {number} ratio The aspect ratio of the external container. 外部容器的宽高比.
 */
declare const setImgAutoByBox: (img: HTMLImageElement, ratio: number) => void;
export default setImgAutoByBox;
