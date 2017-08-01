'use strict'

const config = require('../../config/config_1and1'),
      serverHttp = require('../../util/http.js'),
      _http = new serverHttp();

//index页面
exports.url = function(app){
  app.get('/test',function(req,res){
    let url = config.autoEnv + config.apis.getData;
        _http.commonHttp('GET', url, {}, function (data) {
          res.render('pages/test',{
            layout:'index_1and1',
            title:'test',
            allData:data.books,
            seaModule:'/static/js/test/test.js',  //没有使用模块化必须要配置完整的路劲和文件名
            cssModule:'/static/css/css_module/test/test.css'   //没有使用模块化必须要配置完整的路劲和文件名
          })
      })
  })


}
