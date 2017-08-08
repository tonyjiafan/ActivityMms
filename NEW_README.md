```
├── config  // 环境接口配置
│   ├── config_1and1.js
│   └── test.js  // 测试模块
├── controle  // 控制器文件
│   ├── 1and1  // 幸福1+1活动模块的控制器文件
│   │   ├── index.js
│   └── test  
│   │   └── test.js  // 测试模块的控制器文件
├── public  // 资源
│   ├── css  // 样式表
│   │   ├── base  // 公共
│   │   ├── css_module
│   │   └── sass_module  // 下级目录是对应项目文件的样式表
│   └── js  // 前端js
│   │   ├── base  // 公共
│   │   ├── sea_module  // 下级目录是对应项目文件的js
│   │   └── test
├── util
│   └── http.js  // 封装了http请求以及cookie等
├── views  // 视图层
│   ├── layouts
│   │   ├── index_1and1.hbs  // 主模板
│   │   └── test
│   ├── pages  // 项目对应的页面文件
│   │   ├── 1and1  // 幸福1+1活动模块的页面
│   │   ├── error  // 异常页面
│   │   └── test  // 测试
│   └── partials  // 组件
│   │   └── common_1and1
│   │   │   ├── footer.hbs  // footer组件
│   │   │   ├── header.hbs  // header组件
│   │   │   └── nav.hbs  // 导航组件
├── README.md  // 项目文档
├── app.js  // 基本应用配置
├── gulpfile.js  // 工程化配置
├── routes.js  // 路由文件
└── package.json  // 项目配置目录
```
