/**
 * （Compatibility）Get page visibility information. （基于兼容性）获取页面可见性信息.
 *
 * @return
 * {
 *  isVisible: boolean;     当前页面是否可见.
 *  hidden: string;     页面“隐藏”状态API，返回布尔值.
 *  visibilityChange: string;     页面显隐变化监听事件名.
 *  state: string;      页面显隐状态属性名，返回值为 visible | hidden .
 * }
 */
declare const getPageVisibleInfo: () => {
    isVisible: boolean;
    hidden: string;
    visibilityChange: string | undefined;
    state: string | undefined;
};
export default getPageVisibleInfo;
