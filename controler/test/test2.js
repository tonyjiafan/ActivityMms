'use strict'

const config = require('../../config/test'),
      serverHttp = require('../../util/http.js'),
      _http = new serverHttp();

//index页面
exports.url = function(app){
  app.get('/test2',function(req,res){

    console.log(req.query.id)

    let url = config.autoEnv + config.apis.getData;
        _http.commonHttp('GET', url, {}, function (data) {
          res.render('pages/test/test2',{
            layout:'test',
            title:'test',
            allData:data.books,
            seaModule:'/static/js/test/test.js?v=20170804',  //没有使用模块化必须要配置完整的路劲和文件名
            cssModule:'/static/css/css_module/test/test.css?v=20170804'   //没有使用模块化必须要配置完整的路劲和文件名
          })
      })
  })


}
