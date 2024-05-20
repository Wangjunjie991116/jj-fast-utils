/**
 * Determine whether the current Android environment. 判断当前是否是 Android 环境.
 */
const isAndroid = () => /android/.test(navigator.userAgent.toLowerCase());

export default isAndroid;
