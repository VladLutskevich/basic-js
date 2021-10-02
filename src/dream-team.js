import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  var str = '';
  if (!Array.isArray(members)) {
    return false;
  }
  if (members.length > 0){
    for (var i = 0; i < members.length; i++)
    {
      if (typeof members[i] == 'string' && members[i].length > 0){
        str = str + members[i].trim()[0].slice(0,1);
      }
    }
    return str.toUpperCase().split('').sort().join('');
    }
  else {
    return false;
  }
}
