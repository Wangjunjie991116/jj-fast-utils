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
/* ***********************************   NodeEnv   ************************************* */
/* ************************************************************************************* */
// process
// import runCmd from './nodeEnv/process/runCmd';

// 导出 CommonEnv 下的方法
export { generateNumberStr, getDataType, isEmail, isJSON, numberToChinese, rgbTohex };
// 导出 NodeEnv 下的方法
// export { runCmd };
