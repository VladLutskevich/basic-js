import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  var result = {};
  var tmp;
  for (var i = 0; i < domains.length; i++) {
    tmp = domains[i].split('.').reverse();
    tmp[0] = '.' + tmp[0];
    for (var j = 0; j < tmp.length; j++) {
      if (tmp[j + 1]) {
          tmp[j + 1] = tmp[j] + '.' + tmp[j + 1];
      }
      if (Object.prototype.hasOwnProperty.call(result, (tmp[j]))) {
          result[tmp[j]]++;
      } 
      else {
          result[tmp[j]] = 1;
      }
    }
  }
  return result;
}
