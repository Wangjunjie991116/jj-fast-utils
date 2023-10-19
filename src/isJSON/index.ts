/**
 * Determines whether the string conforms to the JSON format. 判断字符串是否符合 JSON 格式.
 *
 * @param str The judged string
 * @return Result
 */
export const isJSON = (str: string) => {
    try {
        JSON.parse(str);
        return true;
    } catch (error) {
        return false;
    }
};
