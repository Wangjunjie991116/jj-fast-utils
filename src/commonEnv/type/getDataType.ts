/**
 * Gets the JS basic data type, returning a lowercase letter beginning. 获取 JS 基本数据类型，返回小写字母开头.
 *
 * @param value The data type needs to be determined. 需要判断数据类型的值.
 * @returns {string} Result. 结果.
 */
const getDataType = (value: any): string => {
	const type = Object.prototype.toString.call(value).split(' ')[1];
	return type.substring(0, type.length - 1).toLowerCase();
};

export default getDataType;
