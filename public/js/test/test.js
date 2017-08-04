define(function(require,exports,module){
  //引入模块
  var $ = require('../base/jquery.min'),
      util = require('../util'),
      reqAjax = util.reqAjax;

  console.log('我是test');

  //去掉视频右键存储功能
  $('#video_play').bind('contextmenu',function(){
     return false;
   });


}) //define闭合标记
