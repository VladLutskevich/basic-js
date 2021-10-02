import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  var arrC = [];
  var arrN = [];
  var j = 0;
  var duplicate = 1;
  for(var i = 0; i < str.length; i++){
      if(str[i+1] === str[i]) duplicate++;
      else{
          arrC[j] = str[i];
          arrN[j] = duplicate;
          duplicate = 1;
          j++;
      }
  }
  var result = '';
  for(var i = 0; i < arrC.length; i++){
    if(arrN[i] === 1) result = result + arrC[i];
    else result = result + + arrN[i] + arrC[i];
  }
  return result;
}
