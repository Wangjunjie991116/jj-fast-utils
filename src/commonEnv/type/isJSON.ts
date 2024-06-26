/**
 * Determines whether the string conforms to the JSON format. 判断字符串是否符合 JSON 格式.
 *
 * @param str The judged string. 需要判断的字符串.
 * @return {boolean} Result. 结果.
 */
const isJSON = (str: string): boolean => {
	try {
		JSON.parse(str);
		return true;
	} catch (error) {
		return false;
	}
};

export default isJSON;
