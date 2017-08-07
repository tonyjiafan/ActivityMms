## 规范

##### 说明

* 如果是活动项目 "projectType" 参数 最好能传一个 "activity"    //能直观的识别是哪一个项目的请求
* 其他规范待续

| 请求链接                                     | 提交方式 |
| :--------------------------------------- | :--: |
| url: http://index/234568798...............asvjasbk.json | POST |
| 参数           |   类型   |  必传   |  含义  |  备注  |
| ------------ | :----: | :---: | :--: | :--: |
| projectType  | String | false | 项目标识 |      |
| userNmae     | String | true  | 用户账号 | 非空校验 |
| userPassword | String | true  | 用户密码 | 非空校验 |
##### 返回数据

```
{
  "code": 200,  //请求返回的状态码
  "success": true,  //访问是否成功
  "datas": {
    "userId": 0007,  //用户ID
    "userPhone": "13300456789",  //返回数据的类型 要标识
    "listData":  [
      {
        "listName": "sdfgh001",  //返回数据的类型 要标识
        "listInfor": "xcvbnmrtyu456789fghjk001",  //返回数据的类型 要标识
        "listImageUrl": "http://swdebwdnikowgbnmhjomeo.png"  //返回数据的类型 要标识
      },
      {
        "listName": "sdfgh002",  //返回数据的类型 要标识
        "listInfor": "xcvbnmrtyu456789fghjk002",  //返回数据的类型 要标识
        "listImageUrl": "http://swdebwdnikowgbnmhjomeo.png"  //返回数据的类型 要标识
      },
      {
        "listName": "sdfgh003",  //返回数据的类型 要标识
        "listInfor": "xcvbnmrtyu456789fghjk003",  //返回数据的类型 要标识
        "listImageUrl": "http://swdebwdnikowgbnmhjomeo.png"  //返回数据的类型 要标识
      },
      ...
    ],
    ...
  }
}
```
