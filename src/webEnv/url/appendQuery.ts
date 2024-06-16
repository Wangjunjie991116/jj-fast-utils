/**
 * Append query parameter to a URL. 将查询参数附加到 URL 后.
 * @param {Object} content - The object containing URL, key, and value for the query parameter. 对象，包含查询参数的 URL、键和值.
 * @param {string} content.url - The URL to append query parameter to. 要附加查询参数的 URL.
 * @param {string} content.key - The key of the query parameter. 查询参数的关键字.
 * @param {string} content.value - The value of the query parameter. 查询参数的值.
 * @returns {string} The new URL with the appended query parameter. 带有附加查询参数的新 URL.
 */
const appendQuery = (content: { url: string; key: string; value: string }): string => {
	const { url, key, value } = content;
	let newUrl = url;
	if (newUrl && key && value && typeof key === 'string') {
		const options: Record<string, string> = {};
		options[key] = value;

		const searchParams = new URLSearchParams();
		Object.keys(options).forEach(param => {
			searchParams.append(param, options[param]);
		});

		const queryString = searchParams.toString();

		if (url.includes('?')) {
			newUrl += `&${queryString}`;
		} else {
			newUrl += `?${queryString}`;
		}
	}
	return newUrl;
};

export default appendQuery;
