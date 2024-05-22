/* eslint-disable @typescript-eslint/ban-ts-comment */
/**
 * Converts rgba color to HEX. Rgba 格式的颜色转换为十六进制颜色
 *
 * @param  {String} color  rgb or rgba color
 * @return {Object} object with hex and alpha value
 * @example
 *
 * rgb(210,43,2525) => { hex: '#d22bff', alpha: 1 }
 * rgba(12,173,22,.67) => { hex: '#d22bff', alpha: 0.67 }
 */
const rgb2hex = (color: string): object => {
	if (typeof color !== 'string') {
		throw new Error('color has to be type of `string`');
	} else if (color.substr(0, 1) === '#') {
		return { hex: color, alpha: 1 };
	}

	// delete space
	const strippedColor = color.replace(/\s+/g, '');
	// eslint-disable-next-line regexp/no-unused-capturing-group
	const digits = /(.*?)rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([01]|1.0*|0?\.(\d*)))?\)/.exec(strippedColor);
	if (!digits) {
		throw new Error(`given color (${color}) isn't a valid rgb or rgba color`);
	}

	const red = parseInt(digits[3], 10);
	const green = parseInt(digits[4], 10);
	const blue = parseInt(digits[5], 10);
	// @ts-ignore
	let alpha: any = digits[6] ? /[\d.]+/.exec(digits[6])[0] : '1';
	// eslint-disable-next-line no-bitwise
	const rgb = (blue | (green << 8) | (red << 16) | (1 << 24)).toString(16).slice(1);

	if (alpha.substr(0, 1) === '.') alpha = parseFloat(`0${alpha}`);
	// @ts-ignore
	alpha = parseFloat(Math.round(alpha * 100)) / 100;
	// @ts-ignore
	return { hex: `#${rgb.toString(16)}`, alpha };
};

export default rgb2hex;
