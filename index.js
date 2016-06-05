'use strict';

/**
 * quota set，
 * 超过将最后面值弹出
 * @param  {Any} num length
 * @param {Array} arr default array
 * @return {Array} return quota set
 */
function quotaSet(num, arr) {
  var cacheArr = arr || [];
  return function(data) {
    if (cacheArr.indexOf(data) > -1) {
      return cacheArr;
    }

    cacheArr.unshift(data);
    if (cacheArr.length > num) {
      cacheArr.pop();
    }

    return cacheArr;
  };
}

module.exports = quotaSet;
