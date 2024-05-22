/**
 * Determine if the incoming content matches the E-mail format. 判断传入内容是否符合电子邮箱格式.
 *
 * @param {string} str Text to judge. 需要判断的文本.
 * @return {boolean} Result. 结果.
 */
const isEmail = (str: string): boolean => {
	const emailRegexp = /^[\w.!#$%&’*+/=?^`{|}~-]+@[a-zA-Z\d-]+(?:\.[a-zA-Z\d-]+)*$/;
	return emailRegexp.test(str);
};

export default isEmail;
