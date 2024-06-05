/**
 * The page scroll bar scrolls to the target element. 页面滚动条滚动至目标元素.
 *
 * @param {string} element target element. 目标元素.
 */
const scrollToEle = (element: string) => {
	document.querySelector(element)?.scrollIntoView({
		behavior: 'smooth',
	});
};

export default scrollToEle;
