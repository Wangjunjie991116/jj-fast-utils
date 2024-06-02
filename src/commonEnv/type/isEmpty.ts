/**
 * Determines whether the data is empty（undefined null "" 0 false NaN）. 判断 Data 是否为空（undefined null "" 0 false NaN）.
 *
 * @param data Data to be judged. 需要判断的数据
 * @return {boolean} Result. 判断结果
 */
const isEmpty = (data: any): boolean => !data;

export default isEmpty;
