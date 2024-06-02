/* ************************************************************************************* */
/* ***********************************   CommonEnv   *********************************** */
/* ************************************************************************************* */
// string
import generateNumberStr from './commonEnv/string/generateNumberStr';
import numberToChinese from './commonEnv/string/numberToChinese';
import rgbTohex from './commonEnv/string/rgbTohex';

// type
import getDataType from './commonEnv/type/getDataType';
import isCode from './commonEnv/type/isCode';
import isEmail from './commonEnv/type/isEmail';
import isEmpty from './commonEnv/type/isEmpty';
import isJSON from './commonEnv/type/isJSON';

/* ************************************************************************************* */
/* ***********************************   NodeEnv   ************************************* */
/* ************************************************************************************* */
// process
// import runCmd from './nodeEnv/process/runCmd';

// 导出 CommonEnv 下的方法
export { generateNumberStr, getDataType, isCode, isEmail, isEmpty, isJSON, numberToChinese, rgbTohex };
// 导出 NodeEnv 下的方法
// export { runCmd };