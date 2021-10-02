import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  var len = matrix[0].length;
  matrix = matrix.flat();
  var sum = 0;
  for(var i  = 0; i < matrix.length; i++){
    if(matrix[i - len] !== 0) sum += matrix[i];
  }
  return sum;
}
