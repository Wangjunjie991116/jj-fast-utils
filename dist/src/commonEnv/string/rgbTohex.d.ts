/**
 * Converts rgba color to HEX. Rgba 格式的颜色转换为十六进制颜色
 *
 * @param  {String} color  rgb or rgba color
 * @return {Object} object with hex and alpha value
 * @example
 *
 * rgb(210,43,2525) => { hex: '#d22bff', alpha: 1 }
 * rgba(12,173,22,.67) => { hex: '#d22bff', alpha: 0.67 }
 */
declare const rgbTohex: (color: string) => object;
export default rgbTohex;
