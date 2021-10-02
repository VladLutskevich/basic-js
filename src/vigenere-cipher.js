import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  buildKey(message, key) {
    var rep = Math.ceil(message.length / key.length);
    return key.repeat(rep).slice(0, message.length);
  }


  encrypt(message, key) {
    if (!message  || !key ) {
      throw new Error('Incorrect arguments!');
    }

    var indA = 65;
    var indZ = 90;

    var newMessage = message.toUpperCase();
    var newKey = this.buildKey(message, key).toUpperCase();
    var result = [];

    var latinCount = 0;

    for (var i = 0; i < newMessage.length; i++) {
       if (newMessage.charCodeAt(i) >= indA && newMessage.charCodeAt(i) <= indZ) {
          result.push(String.fromCharCode(indA + ((newMessage.charCodeAt(i) - indA + newKey.charCodeAt(latinCount) - indA) % 26)));
          latinCount++;
       }
       else{
         result.push(newMessage[i]);
       }
    }
    if(this.type) return result.join('');
    else return result.reverse().join('');
  }
  decrypt(message, key) {
    if (!message  || !key) {
      throw new Error('Incorrect arguments!');
    }

    var indA = 65;
    var indZ = 90;

    var newMessage = message.toUpperCase();
    var newKey = this.buildKey(message, key).toUpperCase();
    var result = [];

    var latinCount = 0;

    for (var i = 0; i < newMessage.length; i++) {
      if (newMessage.charCodeAt(i) >= indA && newMessage.charCodeAt(i) <= indZ) {
         result.push(String.fromCharCode(indA + ((newMessage.charCodeAt(i) - newKey.charCodeAt(latinCount) + 26) % 26)));
         latinCount++;
      }
      else{
        result.push(newMessage[i]);
      }
    }
    if(this.type) return result.join('');
    else return result.reverse().join('');
  }
}
