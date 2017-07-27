/** JSDOC注释变量名 、 变量类型 和 变量说明  */

/** 格式化时间，返回月，日
 *  @param {string } date 需要格式化的时间
 */
exports.objectDate = (date) => {
    if (date && typeof date === 'string') {
        date = new Date(date);
        let o = {
            'Y': date.getFullYear(),
            'M': date.getMonth() + 1,
            'D': date.getDate()
        };
        return o;
    }
    return date;
};