const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members))
  return false;
  let subMembers = members.filter(item => typeof item == 'string').map(item =>{
     return item.split('').find(item => item != " ");
  })
  return subMembers.map(item =>item.toUpperCase()).sort().join('');
}

module.exports = {
  createDreamTeam
};
