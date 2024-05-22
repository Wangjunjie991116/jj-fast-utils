import type QueryString from 'qs';
import { parse } from 'qs';

/**
 * Gets the URL parameters into object format. 获取 URL 中的参数转化为对象格式.
 *
 * @param {string | undefined} url Incoming link text. 传入的链接文本.
 * @return {QueryString.ParsedQs} Parameter object. 参数对象.
 */
const getQuery = (url: string | undefined = ''): QueryString.ParsedQs => {
	let str = url || window.location.search;
	while (str !== decodeURIComponent(str)) {
		str = decodeURIComponent(str);
	}

	return parse(str);
};

export default getQuery;
