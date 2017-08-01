'use strict'

const config = require('../../config/config_1and1'),
      serverHttp = require('../../util/http.js'),
      _http = new serverHttp();

//index页面
exports.url = function(app){
  app.get('/',function(req,res){
    let url = config.autoEnv + config.apis.getData;
        _http.commonHttp('GET', url, {}, function (data) {
          res.render('pages/index',{
            layout:'index',
            title:'首页',
            allData:data.books,
            seaModule:'/static/js/sea_module/1and1/index.js',  //没有使用模块化必须要配置完整的路劲和文件名
            cssModule:'/static/css/css_module/1and1/index.css'   //没有使用模块化必须要配置完整的路劲和文件名
          })
      })
  })


}
