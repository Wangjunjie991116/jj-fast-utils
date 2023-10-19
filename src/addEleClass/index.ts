import { hasClass } from '@/hasClass';

/**
 * Add a className to the element. 给元素添加类名.
 *
 * @param ele The element to which the class name is added. 被添加类名的元素.
 * @param className The name of the class you want to add. 需要添加的类名.
 */
export const addEleClass = (ele: Element, className: string) => {
    if (hasClass(ele, className)) return;
    let curClass = ele.className.split(' ');
    curClass.push(className);
    ele.className = curClass.join(' ');
};
