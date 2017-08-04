'use strict'

const config = require('../../config/config_1and1'),
      serverHttp = require('../../util/http.js'),
      _http = new serverHttp();

//index页面
exports.url = function(app){
  app.get('/',function(req,res){
    let url = config.autoEnv + config.apis.getData;
        _http.commonHttp('GET', url, {}, function (data) {
          res.render('pages/1and1/index',{
            layout:'index_1and1',
            title:'首页',
            allData:data.books,
            seaModule:'/static/js/sea_module/1and1/index.js?v=20170803',  //没有使用模块化必须要配置完整的路劲和文件名
            cssModule:'/static/css/css_module/1and1/index.css?v=20170803'   //没有使用模块化必须要配置完整的路劲和文件名
          })
      })
  })


}
