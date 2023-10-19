import { parse } from 'qs';

/**
 * Gets the URL parameters into object format. 获取 URL 中的参数转化为对象格式.
 *
 * @param url Incoming link text. 传入的链接文本.
 * @returns Parameter object. 参数对象.
 */
export const getQuery = (url?: string) => {
    url = decodeURIComponent(url || window.location.search);
    if (url.indexOf('?') > -1) url = url.slice(1);

    return parse(url);
};
