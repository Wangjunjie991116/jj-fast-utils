/**
 * Determines whether the specified class name exists on the element. 判断元素上是否存在指定类名.
 *
 * @param ele Elements to be judged. 需要判断的元素.
 * @param className The name of the class to determine. 需要判断的类名.
 */
export const hasClass = (ele: Element, className: string) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(ele.className);
};
