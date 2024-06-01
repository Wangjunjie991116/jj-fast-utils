/**
 * Determine whether the current IOS environment. 判断当前是否是 IOS 环境.
 *
 * @return {boolean} Result. 结果.
 */
const isIOS = () => /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
export default isIOS;
//# sourceMappingURL=isIOS.js.map