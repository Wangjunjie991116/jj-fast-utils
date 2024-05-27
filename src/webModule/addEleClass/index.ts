import hasClass from '../hasClass';

/**
 * Add a className to the element. 给元素添加类名.
 *
 * @param {Element} ele The element to which the class name is added. 被添加类名的元素.
 * @param {string} className The name of the class you want to add. 需要添加的类名.
 */
const addEleClass = (ele: Element, className: string) => {
	if (hasClass(ele, className)) return;
	const curClass = ele.className.split(' ');
	curClass.push(className);
	ele.className = curClass.join(' ');
};

export default addEleClass;
