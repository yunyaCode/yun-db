# yun-db

> 关于web端数据存储的库



## 使用方式


```


1:从yun_db上获取单个存储对象

import { yun_db } from 'yun_db'

let localStorage=yun_db.localStorage;

new localStorage(yun_db_key).set('key',{object})
new localStorage(yun_db_key).get('key')


2:直接返回单个存储对象

import { yun_LStorage } from 'yun_db'

new yun_LStorage(yun_db_key).set('key',{object})
new yun_LStorage(yun_db_key).get('key')


```

## build说明

> build:esm - 编译出符合 esm 规范的可执行文件，供 Vue、React 等采用 esmodule 规范进行模块化打包的项目使用
> build:umd - 编译出符合 umd 规范的可执行文件，供 jQuery、Vue、NodeJS 等项目使用
> build:min - 编译出符合 umd 规范的压缩的可执行文件