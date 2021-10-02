import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n2) {
  var n = String(n2).split('');
  for(var i = 0; i < n.length; i++){
      if(n[i+1] > n[i]){
          n.splice(i, 1);
          return Number(n.join(''));
      }
  }
  return Number(n.splice(n.length-2, 1).join(''));
}
