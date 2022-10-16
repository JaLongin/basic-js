const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {
  if (options.separator == undefined)
  options.separator = '+';
  if (options.addition ===null)
  options.addition = 'null';
  if (options.additionSeparator == undefined)
  options.additionSeparator = '|';

  let subStr=[];
  if(options.additionRepeatTimes == undefined)
  options.additionRepeatTimes = 1;
  for(let i = 0; i < options.additionRepeatTimes; i++)
    subStr.push(options.addition);
  subStr = subStr.join(options.additionSeparator);
  if (typeof str !='string')
  if (str != null)
  str = str.toString();
  else str = 'null';
  subStr = str.concat('',subStr);
  let finalStr = [];
  if (options.repeatTimes == undefined)
    options.repeatTimes = 1
  for(let i = 0; i < options.repeatTimes; i++)
    finalStr.push(subStr);
  return finalStr.join(options.separator)
}

module.exports = {
  repeater
};
