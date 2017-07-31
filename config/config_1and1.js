// 数据接口定义的文件
'use strict'

const domain = '/';

//项目环境
exports.autoEnv = 'https://api.douban.com';


//APIS
exports.vueApis = {
    getData:`${domain}v2/book/search?q='nba'`
}
