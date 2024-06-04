/**
 * Determine whether it is in Chinese Mainland mobile number format. 判断是否为中国大陆手机号.
 *
 * @param {string} value value to judge. 需要判断的值.
 * @return {boolean} Result. 结果.
 */
const isTel = (value: string): boolean => /^1[3,4,5,6,7,8,9][0-9]{9}$/.test(value.toString());

export default isTel;
