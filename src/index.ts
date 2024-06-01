import { generateNumberStr, getDataType, getQuery, isEmail, isJSON, numberToChinese, rgb2hex } from './commonModule';
import {} from './nodeModule';
import {
	addEleClass,
	callPhone,
	getPageVisibleInfo,
	hasClass,
	isAndroid,
	isIOS,
	setImgAutoByBox,
	setViewportHeight,
} from './webModule';

// 方法兼容 Web 和 Node.js 环境
export { generateNumberStr, getDataType, getQuery, isEmail, isJSON, numberToChinese, rgb2hex };

// 方法在 Node.js 环境下可用
export {};

// 方法在 Web 环境下可用
export { addEleClass, callPhone, getPageVisibleInfo, hasClass, isAndroid, isIOS, setImgAutoByBox, setViewportHeight };
