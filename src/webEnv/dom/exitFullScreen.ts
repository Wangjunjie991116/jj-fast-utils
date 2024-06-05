/**
 * The page exits the full-screen mode. 页面退出全屏模式.
 */
const exitFullscreen = () => {
	// any 解决不同浏览器上 element 全屏方法不存在的 ts error
	if (document.exitFullscreen) {
		document.exitFullscreen();
		// @ts-ignore
	} else if (document.msExitFullscreen) {
		// @ts-ignore
		document.msExitFullscreen();
		// @ts-ignore
	} else if (document.mozCancelFullScreen) {
		// @ts-ignore
		document.mozCancelFullScreen();
		// @ts-ignore
	} else if (document.webkitExitFullscreen) {
		// @ts-ignore
		document.webkitExitFullscreen();
	}
};

export default exitFullscreen;
