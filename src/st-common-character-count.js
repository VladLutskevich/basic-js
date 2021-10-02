import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  var arr1 = new Array(1000).fill(0);;
  var arr2 = new Array(1000).fill(0);;
  for(var i = 0; i < s1.length; i++){
    arr1[s1.charCodeAt(i)]++;
  }
  for(var i = 0; i < s2.length; i++){
    arr2[s2.charCodeAt(i)]++;
  }
  var sum = 0;
  for(var i = 0; i < arr1.length; i++){
    sum+= Math.min(arr1[i], arr2[i]);
  }
  return sum;
}
