/**
 * Determines whether the value is empty（undefined null "" 0 false NaN）. 判断 value 是否为空（undefined null "" 0 false NaN）.
 *
 * @param value value to be judged. 需要判断的值.
 * @return {boolean} Result. 结果.
 */
const isEmpty = (value: any): boolean => !value;

export default isEmpty;
