const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr) {
  if (!(arr instanceof Array))
  throw new Error ("'arr' parameter must be an instance of the Array!");
  let firstStep = arr.filter((item, index, arr) =>{
    if (item == '--discard-prev' || item == '--discard-next' || item =='--double-next' && arr[index+2] == '--discard-prev')
    return false;
    if (arr[index-1] == '--discard-next' || arr[index+1] == '--discard-prev' && arr[index-1] !='--double-next' || (arr[index-2] == '--discard-next' && item == '--double-prev') )
    return false;
    return true;
  })
  let secondStep = firstStep.map((item, index, firstStep) =>{
    if (item == '--double-next')
    return firstStep[index+1];
    if (item == '--double-prev')
    return firstStep[index-1];
    return item;
  })
  console.log(secondStep.filter(item => item != undefined))
  return secondStep.filter(item => item != undefined);
}

module.exports = {
  transform
};
