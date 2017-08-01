
'use strict'
const activity_1and1 = './controler/1and1',
      index = require(`${activity_1and1}/index`);


exports.urls = function(app){
    index.url(app) //首页
}
