/**
 * The page is displayed in full-screen mode. 页面进入全屏模式.
 */
const toFullScreen = () => {
	// any 解决不同浏览器上 element 全屏方法不存在的 ts error
	const element = document.body as any;
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullScreen();
	}
};

export default toFullScreen;
