/**
 * Page scroll bar back to top. 页面滚动条回到顶部.
 */
const scrollToTop = () => {
	const height = document.documentElement.scrollTop || document.body.scrollTop;
	if (height > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, height - height / 8);
	}
};

export default scrollToTop;
