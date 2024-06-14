/**
 * Converts hex color to rgb. Hex 格式的颜色转换为 rgb 或 rgba颜色
 *
 * @param {String} color Hex color. 十六进制颜色值.
 * @param {number|undefined} opacity Opacity config. 透明度配置.
 * @return {string} Rgb or rgba. 返回的 rgb 或 rgba 颜色值.
 */
const convertHexToRgb = (color: string, opacity: number | undefined): string => {
	const pattern = /^#?[a-fA-F\d]{6}$/;
	const isOpa = typeof opacity === 'number';

	if (!pattern.test(color)) return '';

	const v = color.replace(/#/, '');
	const rgbArr = [];
	let rgbStr = '';

	for (let i = 0; i < 3; i++) {
		const item = v.substring(i * 2, i * 2 + 2);
		const num = parseInt(item, 16);
		rgbArr.push(num);
	}

	rgbStr = rgbArr.join();
	rgbStr = `rgb${isOpa ? 'a' : ''}(${rgbStr}${isOpa ? `,${opacity}` : ''})`;
	return rgbStr;
};

export default convertHexToRgb;
