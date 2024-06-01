/* ************************************************************************************* */
/* ***********************************   CommonEnv   *********************************** */
/* ************************************************************************************* */
// string
import generateNumberStr from './commonEnv/string/generateNumberStr';
import numberToChinese from './commonEnv/string/numberToChinese';
import rgbTohex from './commonEnv/string/rgbTohex';

// type
import getDataType from './commonEnv/type/getDataType';
import isEmail from './commonEnv/type/isEmail';
import isJSON from './commonEnv/type/isJSON';

/* ************************************************************************************* */
/* ************************************   WebEnv   ************************************* */
/* ************************************************************************************* */
// dom
import addEleClass from './webEnv/dom/addEleClass';
import callPhone from './webEnv/dom/callPhone';
import getPageVisibleInfo from './webEnv/dom/getPageVisibleInfo';
import hasClass from './webEnv/dom/hasClass';
import setImgAutoByBox from './webEnv/dom/setImgAutoByBox';
import setViewportHeight from './webEnv/dom/setViewportHeight';

// type
import isAndroid from './webEnv/type/isAndroid';
import isIOS from './webEnv/type/isIOS';

// 导出 CommonEnv 下的方法
export { generateNumberStr, getDataType, isEmail, isJSON, numberToChinese, rgbTohex };
// 导出 WebEnv 下的方法
export { addEleClass, callPhone, getPageVisibleInfo, hasClass, isAndroid, isIOS, setImgAutoByBox, setViewportHeight };
