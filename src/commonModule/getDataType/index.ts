/**
 * Gets the JS basic data type, returning a lowercase letter beginning. 获取 JS 基本数据类型，返回小写字母开头.
 *
 * @param data The data type needs to be determined. 需要判断数据类型的数据.
 * @returns {string} Result. 结果.
 */
const getDataType = (data: any): string => {
	const type = Object.prototype.toString.call(data).split(' ')[1];
	return type.substring(0, type.length - 1).toLowerCase();
};

export default getDataType;
