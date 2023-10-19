/**
 * Determine whether the current IOS environment. 判断当前是否是 IOS 环境.
 */
export const isIOS = () => /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
