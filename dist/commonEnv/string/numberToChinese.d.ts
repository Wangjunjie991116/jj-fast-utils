/**
 * Number to Chinese. 数字转中文.
 *
 * @param {number} number The number to be converted. 需要转换的数字.
 * @return {string} The converted Chinese reading. 经转换后的中文读法.
 * @example
 *
 * 1 => 一
 * 10 => 十
 * 111 =>  一百一十一
 * 19823 => 一万九千八百二十三
 */
declare const numberToChinese: (number: number) => string;
export default numberToChinese;
