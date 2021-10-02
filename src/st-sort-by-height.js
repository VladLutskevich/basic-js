import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  var sortedArr = arr.filter((n) => n > 0).sort((a, b) => a - b);
  var result = [];
  var sortedCount = 0;
  for(var i = 0; i < arr.length; i++){
      if(arr[i] < 0) result[i] = -1;
      else {
        result[i] = sortedArr[sortedCount];
        sortedCount++;
      }
  }
  return result;
}
