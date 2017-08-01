'use strict'

const request = require('request');

class ServerHttp {
      	constructor() {
      	  this.request = request //引入request模块
      	}
        //普通请求
				commonHttp(type, url, data, callback){
					this.request({
              type: type,
							url: url,
              form: data,
							agent: false
							},function	(error, response, body) {
							 let data = JSON.parse(body)
							 callback(data)
					})
				}
    }


module.exports = ServerHttp;
