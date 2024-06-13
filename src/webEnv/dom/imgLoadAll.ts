/**
 * Determine whether all images are loaded, and support the callback after the completion of the incoming load. 判断图片是否都加载完成, 支持传入均加载完成后的回调.
 *
 * @param {string[]} arr SRC array of images. 图片的 src 数组.
 * @param {() => void} callback A callback that needs to be performed when all images are loaded. 全部图片加载完毕需要执行的回调.
 */
const imgLoadAll = (arr: string[], callback?: () => void) => {
	const arrImg = [];
	for (let i = 0; i < arr.length; i++) {
		const img = new Image();
		img.src = arr[i];
		img.onload = () => {
			arrImg.push(this);
			if (arrImg.length === arr.length) {
				callback?.();
			}
		};
	}
};

export default imgLoadAll;
