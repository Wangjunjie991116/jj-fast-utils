/**
 * Determines whether the verification code is correct. 判断验证码是否正确.
 *
 * @param {number | string} code Code to be judged. 需要判断的验证码
 * @return {boolean} Result. 判断结果
 */
const isCode = (code: number | string): boolean => /^\d{6}$/.test(`${code}`);

export default isCode;
