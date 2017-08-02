'use strict'

const crypto = require('crypto'),
      fs = require('fs');

let pem = fs.readFileSync('key.pem'),
    key = pem.toString('ascii'),
    hmac = crypto.createHmac('md5', key);

hmac.update('000012214');

let mm = hmac.digest('hex');

console.log(mm)
