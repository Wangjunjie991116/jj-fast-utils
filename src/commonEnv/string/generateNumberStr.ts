/**
 * Generates a purely numeric string of a specified length. 生成一个指定长度的纯数字字符串.
 *
 * @param {number} length Target length. 指定长度
 * @return {string} Result. 生成结果
 */
const generateNumberStr = (length: number): string => {
	const min = 10 ** (length - 1);
	const max = 10 ** length - 1;
	const res = Math.floor(Math.random() * (max - min + 1)) + min;
	return `${res}`;
};

export default generateNumberStr;
