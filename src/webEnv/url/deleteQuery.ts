// /**
//  * Delete the specified query string from the url. 删除 URL 上指定的 Query.
//  *
//  * @param {string} name Target parameter. 目标参数.
//  * @return {string | undefined} Return an address or nothing. 返回 URL 地址或无返回.
//  */
// const deleteQuery = (name: string) => {
// 	const baseUrl = location.origin + location.pathname + '?';
// 	const query = location.search.substr(1);
// 	if (query.indexOf(name) > -1) {
// 		const obj = {};
// 		const arr = query.split('&');
// 		for (let i = 0; i < arr.length; i++) {
// 			arr[i] = arr[i].split('=');
// 			obj[arr[i][0]] = arr[i][1];
// 		}
// 		delete obj[name];
// 		return (
// 			baseUrl +
// 			JSON.stringify(obj)
// 				.replace(/[\"\{\}]/g, '')
// 				.replace(/\:/g, '=')
// 				.replace(/\,/g, '&')
// 		);
// 	}
// 	return;
// };

// export default deleteQuery;
