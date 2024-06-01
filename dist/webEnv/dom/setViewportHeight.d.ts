/**
 * Viewport units in CSS sound great.
 * If you want to style an element to take up the full screen height, you can just set height: 100vh and voila - you have a perfect fullscreen element, which resizes as the viewport changes!
 * Sadly, this is not the case.
 * 100vh is broken in a subtle but fundamental way on mobile browsers that makes it nearly useless.
 * It’s best to avoid 100vh and instead rely on javascript to set heights for a full viewport experience.
 * The core issue is that mobile browsers (I’m looking at you, Chrome and Safari) have a “helpful” feature where the address bar is sometimes visible and sometimes hidden, changing the visible size of the viewport.
 * Rather than adjusting the height of 100vh to be the visible portion of the screen as the viewport height changes, these browsers instead have 100vh set to the height of the browser with address the address bar hidden.
 * The result is that the bottom portion of the screen will be cut off when the address bar is visible, thus defeating the purpose of 100vh to begin with.
 *
 * CSS 中的 Viewport 单元听起来很棒.
 * 如果你想将一个元素设置成全屏高度，你可以设置高度:100vh，这样你就有了一个完美的全屏元素，它会随着视口的改变而改变大小!
 * 遗憾的是，事实并非如此.
 * 100vh 在不同的浏览器的实现方式上也有一点微妙的变化，这使得它几乎毫无用处.
 * 最好避免 100vh，而是依赖 javascript 来设置高度，以获得完整的视口体验.
 * 核心问题是移动浏览器(Chrome 和 Safari)有一个“帮助”功能，地址栏有时可见，有时隐藏，改变了视口的可见大小.
 * 这些浏览器没有将100vh的高度调整为视口高度变化时屏幕的可见部分，而是将 100vh 设置为隐藏地址栏的浏览器高度.
 * 结果是，当地址栏可见时，屏幕的底部部分将被切断，从而破坏了 100vh 的初衷.
 *
 * referenced document：https://www.jianshu.com/p/f82e06abc10e
 */
declare const setViewportHeight: () => void;
export default setViewportHeight;
