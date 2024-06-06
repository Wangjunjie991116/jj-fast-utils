/**
 * Copy a piece of text to the clipboard. 复制一段文本到剪贴板.
 *
 * @param {string} text Copy text. 需要复制的文本内容.
 * @param {(e: any) => void} onFail Fail callback function. 失败处理函数.
 * @returns {Promise<void>} Return Promise. 返回 Promise.
 */
const copyTextToClipboard = async (text: string, onFail?: (e: any) => void): Promise<void> => {
	try {
		if (navigator.clipboard.writeText) {
			await navigator.clipboard.writeText(text);
		}
	} catch (error) {
		onFail?.(error);
	}
};

export default copyTextToClipboard;
