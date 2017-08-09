
'use strict'
const activity_1and1 = './controler/1and1',
      index = require(`${activity_1and1}/index`),
      test = require(`./controler/test/test`),
      testVideo = require(`./controler/test/test2`);


exports.urls = function(app){
    index.url(app), //首页
    test.url(app), //测试
    testVideo.url(app) //测试
}
