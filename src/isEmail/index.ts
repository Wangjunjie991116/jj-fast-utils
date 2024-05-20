/**
 * Determine if the incoming content matches the E-mail format. 判断传入内容是否符合电子邮箱格式.
 *
 * @param str Text to judge. 需要判断的文本.
 */
const isEmail = (str: string) => {
	const emailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return emailRegexp.test(str);
};

export default isEmail;
