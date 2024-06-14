/* ************************************************************************************* */
/* ***********************************   CommonEnv   *********************************** */
/* ************************************************************************************* */
// string
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
import copyTextToClipboard from './webEnv/dom/copyTextToClipboard';
import exitFullscreen from './webEnv/dom/exitFullScreen';
import getPageVisibleInfo from './webEnv/dom/getPageVisibleInfo';
import hasClass from './webEnv/dom/hasClass';
import imgLoadAll from './webEnv/dom/imgLoadAll';
import toFullScreen from './webEnv/dom/openFullScreen';
import scrollToBottom from './webEnv/dom/scrollToBottom';
import scrollToEle from './webEnv/dom/scrollToEle';
import scrollToTop from './webEnv/dom/scrollToTop';
import setImgAutoByBox from './webEnv/dom/setImgAutoByBox';
import setViewportHeight from './webEnv/dom/setViewportHeight';

// format
import convertHexToRgb from './webEnv/format/convertHexToRgb';
import convertRgbToHex from './webEnv/format/convertRgbToHex';

// type
import isAndroid from './webEnv/type/isAndroid';
import isIOS from './webEnv/type/isIOS';
import isWeb from './webEnv/type/isWeb';

// url
import deleteQuery from './webEnv/url/deleteQuery';
import getQuery from './webEnv/url/getQuery';

// 导出 CommonEnv 下的方法
export { generateNumberStr, getDataType, isChinaIdCard, isCode, isEmail, isEmpty, isJSON, isTel, numberToChinese };
// 导出 WebEnv 下的方法
export {
	addEleClass,
	callPhone,
	convertHexToRgb,
	convertRgbToHex,
	copyTextToClipboard,
	deleteQuery,
	exitFullscreen,
	getPageVisibleInfo,
	getQuery,
	hasClass,
	imgLoadAll,
	isAndroid,
	isIOS,
	isWeb,
	scrollToBottom,
	scrollToEle,
	scrollToTop,
	setImgAutoByBox,
	setViewportHeight,
	toFullScreen,
};
