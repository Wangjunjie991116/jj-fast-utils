/**
 * Determine whether the current IOS environment. 判断当前是否是 IOS 环境.
 *
 * @return {boolean} Result. 结果.
 */
const isIOS = (): boolean => /ios|iphone|ipad|ipod|macintosh/.test(navigator.userAgent.toLowerCase());

export default isIOS;
