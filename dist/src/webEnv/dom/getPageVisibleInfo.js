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
const getPageVisibleInfo = () => {
    let hidden = '';
    let visibilityChange;
    let state;
    if (typeof document.hidden !== 'undefined') {
        hidden = 'hidden';
        visibilityChange = 'visibilitychange';
        state = 'visibilityState';
    }
    else if (typeof document.mozHidden !== 'undefined') {
        hidden = 'mozHidden';
        visibilityChange = 'mozvisibilitychange';
        state = 'mozVisibilityState';
    }
    else if (typeof document.msHidden !== 'undefined') {
        hidden = 'msHidden';
        visibilityChange = 'msvisibilitychange';
        state = 'msVisibilityState';
    }
    else if (typeof document.webkitHidden !== 'undefined') {
        hidden = 'webkitHidden';
        visibilityChange = 'webkitvisibilitychange';
        state = 'webkitVisibilityState';
    }
    return {
        isVisible: !document[hidden],
        hidden,
        visibilityChange,
        state,
    };
};
export default getPageVisibleInfo;
//# sourceMappingURL=getPageVisibleInfo.js.map