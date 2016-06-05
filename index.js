'use strict';

/**
 * 定额数组，指定存储长度
 * 超过将最后面值弹出
 * @param  {Any} num 任意值
 * @param {Array} arr 传入数组 可选
 * @return {Array} 返回数组
 */
function quotaSet(num, arr) {
  const cacheArr = arr || [];
  return data => {
    cacheArr.unshift(data);
    if (cacheArr.length > num) {
      cacheArr.pop();
    }

    return cacheArr;
  };
}

module.exports = quotaSet;
