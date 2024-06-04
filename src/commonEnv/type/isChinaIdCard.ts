/**
 * Determine whether it is the correct format of the Chinese ID number. 判断是否是正确的中国身份证号码格式.
 *
 * @param {string} value Code to be judged. 需要判断的值
 * @return {boolean} Result. 判断结果
 */
const isChinaIdCard = (value: string): boolean => {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return reg.test(value);
};

export default isChinaIdCard;
