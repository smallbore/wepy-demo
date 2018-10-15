# wepy-demo
wepy搭建小程序

```
npm install wepy-cli -g

npm install
wepy build --watch

```

```
├── dist                   小程序运行代码目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置

```
小程序开发者工具打开路径：dist

es6: 对应关闭ES6转ES5选项，关闭。 重要：未关闭会运行报错。

postcss: 对应关闭上传代码时样式自动补全选项，关闭。 重要：某些情况下漏掉此项也会运行报错。

minified: 对应关闭代码压缩上传选项，关闭。重要：开启后，会导致真机computed, props.sync 等等属性失效。（注：压缩功能可使用WePY提供的build指令代替，详见后文相关介绍以及Demo项目根目录中的wepy.config.js和package.json文件。）

urlCheck: 对应不检查安全域名选项，开启。 如果已配置好安全域名则建议关闭。

详细请参考：
[wepy官方文档](https://tencent.github.io/wepy)
[小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/)
