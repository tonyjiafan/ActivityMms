'use strict'

const crypto = require('crypto'),
      fs = require('fs');


// console.log(crypto.getHashes());

/**
* md5加密
* @param str 需要加密的字符串
* @returns {*}
*/
// function encryptMd5(str) {
//       const md5 = crypto.createHash('md5');
//       return md5.update(str).digest('hex').toLowerCase();
// }
//
// const test1 = encryptMd5('1231asdda');
// console.log(test1);

let key = 00000000000000000000000000000000,
    iv = 0000000000000000;

// 加密
function encrypt(str, key) {
  const cipherChunks = [];
  const ciper = crypto.createCipheriv('aes-128-ecb', key, '');
  cipherChunks.push(ciper.update(str, 'utf-8', 'hex'));
  cipherChunks.push(ciper.final('hex'));
  return cipherChunks.join('');
}
const  test2 = encrypt('fuck', key);
console.log(test2)


// 解密
function decipher(str, key){
    const cipherChunks = [];
    const decipher = crypto.createDecipheriv('aes-128-ecb', key, '');
    cipherChunks.push(decipher.update(str, 'hex', 'utf-8'));
    cipherChunks.push(decipher.final('hex'));
    return cipherChunks.join('');
}
