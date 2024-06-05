/**
 * Delete the specified query string from the url. 删除 URL 上指定的 Query.
 *
 * @param {string} name Target parameter. 目标参数.
 * @return {string} Return an address. 返回 URL 地址.
 */
const deleteQuery = (name: string): string => {
	const baseUrl = `${location.origin + location.pathname}?`;
	const query = location.search.substr(1);
	if (query.indexOf(name) > -1) {
		const obj: Record<string, string> = {};
		const arr: string[] = query.split('&');
		const newArr: string[][] = [];
		for (let i = 0; i < arr.length; i++) {
			newArr[i] = arr[i].split('=');
			const [key, value] = newArr[i];
			obj[key] = value;
		}
		delete obj[name];
		return baseUrl + JSON.stringify(obj).replace(/["{}]/g, '').replace(/:/g, '=').replace(/,/g, '&');
	}

	return location.href;
};

export default deleteQuery;
