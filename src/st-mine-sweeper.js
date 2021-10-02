import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  var minerMatrix = [];
  for(var i = 0; i < matrix.length; i++){
      minerMatrix[i] = new Array(matrix[0].length).fill(0);
  }
  for(var i = 0; i < matrix.length; i++){  
    for(var j = 0; j < matrix[0].length; j++){
      if(i > 0 && matrix[i-1][j])minerMatrix[i][j]++;
      if(j > 0 && matrix[i][j-1])minerMatrix[i][j]++;
      if(i < matrix.length-1 && matrix[i+1][j])minerMatrix[i][j]++;
      if(j < matrix[0].length-1 && matrix[i][j+1])minerMatrix[i][j]++;
      if(i > 0 && j > 0 && matrix[i-1][j-1])minerMatrix[i][j]++;
      if(i > 0 && j < matrix[0].length-1 && matrix[i-1][j+1])minerMatrix[i][j]++;
      if(j > 0 && i < matrix.length-1 && matrix[i+1][j-1])minerMatrix[i][j]++;
      if(i < matrix.length-1 && j < matrix[0].length-1 && matrix[i+1][j+1])minerMatrix[i][j]++;
    }
 
  }
  
  return minerMatrix;
}
