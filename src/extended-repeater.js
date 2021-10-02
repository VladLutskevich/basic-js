import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater( str, options ) {
  var repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  var separator = options.separator ? options.separator : '+';
  var addition = (String(options.addition) && typeof options.addition != 'undefined') ? String(options.addition): '';
  var additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  var additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  
  var result = '';
  for(var i = 0; i < repeatTimes; i++){
    result = result + str;
    for(var j = 0; j < additionRepeatTimes; j++){
      result = result + addition;
      if(j+1 != additionRepeatTimes) result = result + additionSeparator;
    }
    if(i+1 != repeatTimes) result = result + separator;
  }
  return result;
}
