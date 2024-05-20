/**
 * Check whether the current environment supports webp images. 判断当前环境是否支持 webp 格式的图片.
 */
const isSupportWebp = () => document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;

export default isSupportWebp;
