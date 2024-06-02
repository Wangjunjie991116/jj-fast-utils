/**
 * Determine whether it is a web environment. 判断是否是 Web 环境.
 *
 * @return {boolean} Result. 结果.
 */
const isWeb = (): boolean => typeof window !== 'undefined';

export default isWeb;
