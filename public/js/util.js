'use strict'
define(function(require,exports,module){
  var $ = require('./base/jquery.min'),
      jsencrypt = require('./base/bin/jsencrypt.min');



  //ajax提交
  exports.reqAjax = function(type,url,data,callback){
      $.ajax({
      type: type,
      url: url,
      dataType:'json',
      data:data,
      success: function(data){
          callback(data)
      },
      error: function(xhr,type){
        console.log('请求出现了错误')
      }
    })
  }

	//设置cookie
		exports.setCookie = function(name,value) {
		    var exp = new Date();
		    exp.setTime(exp.getTime() + 12*60*60*1000);
		    document.cookie = name + "="+ escape(value) + ";expires=" + exp.toGMTString()+";path=/";
		}
	//获取cookie
		exports.getCookie = function(name) {
		    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

		    if(arr=document.cookie.match(reg))
		        return unescape(arr[2]);
		    else
		        return null;
		}
	//删除cookie
		exports.delCookie = function(name){
		var exp = new Date();
		exp.setTime(exp.getTime() - 1);
		var cval=exports.getCookie(name);
		if(cval!=null)
		document.cookie= name + "="+cval+";expires="+exp.toGMTString()+";path=/";
		}

})
