/* ************************************************************************************* */
/* ***********************************   CommonEnv   *********************************** */
/* ************************************************************************************* */
// string
import convertRgbToHex from './commonEnv/string/convertRgbToHex';
import generateNumberStr from './commonEnv/string/generateNumberStr';
import numberToChinese from './commonEnv/string/numberToChinese';

// type
import getDataType from './commonEnv/type/getDataType';
import isChinaIdCard from './commonEnv/type/isChinaIdCard';
import isCode from './commonEnv/type/isCode';
import isEmail from './commonEnv/type/isEmail';
import isEmpty from './commonEnv/type/isEmpty';
import isJSON from './commonEnv/type/isJSON';
import isTel from './commonEnv/type/isTel';

/* ************************************************************************************* */
/* ************************************   WebEnv   ************************************* */
/* ************************************************************************************* */
// dom
import addEleClass from './webEnv/dom/addEleClass';
import callPhone from './webEnv/dom/callPhone';
import getPageVisibleInfo from './webEnv/dom/getPageVisibleInfo';
import hasClass from './webEnv/dom/hasClass';
import scrollToEle from './webEnv/dom/scrollToEle';
import scrollToTop from './webEnv/dom/scrollToTop';
import setImgAutoByBox from './webEnv/dom/setImgAutoByBox';
import setViewportHeight from './webEnv/dom/setViewportHeight';

// type
import isAndroid from './webEnv/type/isAndroid';
import isIOS from './webEnv/type/isIOS';
import isWeb from './webEnv/type/isWeb';

// 导出 CommonEnv 下的方法
export {
	convertRgbToHex,
	generateNumberStr,
	getDataType,
	isChinaIdCard,
	isCode,
	isEmail,
	isEmpty,
	isJSON,
	isTel,
	numberToChinese,
	scrollToEle,
};
// 导出 WebEnv 下的方法
export {
	addEleClass,
	callPhone,
	getPageVisibleInfo,
	hasClass,
	isAndroid,
	isIOS,
	isWeb,
	scrollToTop,
	setImgAutoByBox,
	setViewportHeight,
};
