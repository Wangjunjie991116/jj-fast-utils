/**
 * Determines whether the specified class name exists on the element. 判断元素上是否存在指定类名.
 *
 * @param {Element} ele Elements to be judged. 需要判断的元素.
 * @param {string} className The name of the class to determine. 需要判断的类名.
 * @return {boolean} Result. 结果.
 */
const hasClass = (ele: Element, className: string): boolean => {
	const reg = new RegExp(`(^|\\s)${className}(\\s|$)`);
	return reg.test(ele.className);
};

export default hasClass;
