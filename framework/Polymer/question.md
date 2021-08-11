<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [pug](#pug)
  - [在pug模板中嵌套数组循环](#%E5%9C%A8pug%E6%A8%A1%E6%9D%BF%E4%B8%AD%E5%B5%8C%E5%A5%97%E6%95%B0%E7%BB%84%E5%BE%AA%E7%8E%AF)
- [显示图片](#%E6%98%BE%E7%A4%BA%E5%9B%BE%E7%89%87)
  - [在pug模板中使用图片](#%E5%9C%A8pug%E6%A8%A1%E6%9D%BF%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%9B%BE%E7%89%87)
- [元素选择](#%E5%85%83%E7%B4%A0%E9%80%89%E6%8B%A9)
  - [通过id获取DOM元素](#%E9%80%9A%E8%BF%87id%E8%8E%B7%E5%8F%96dom%E5%85%83%E7%B4%A0)
- [动态数据传递](#%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE%E4%BC%A0%E9%80%92)
  - [父元素获取数据接口传递给子元素](#%E7%88%B6%E5%85%83%E7%B4%A0%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%E6%8E%A5%E5%8F%A3%E4%BC%A0%E9%80%92%E7%BB%99%E5%AD%90%E5%85%83%E7%B4%A0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- pug文件模板
- iron-icon 图片路径中如何添加变量

## pug
### 在pug模板中嵌套数组循环


## 显示图片
### 在pug模板中使用图片
- 使用require，直接请求图片地址
  
require请求的是相对路径，请求会被webpack file-loader 处理
```
iron-icon.icon(src=require('../imgs/icon_pipeline@2x.png') title='[[item.text]]')
```
- pug模板中如果图片通过循环显示，图片名是变量

可以通过CopyWebpackPlugin复制图片到打包后的输出文件， 图片路径是相对于输出的路径
```
iron-icon.icon(src='imgs/[[item.icon]]@2x.png' title='[[item.text]]')
```

## 元素选择
### 通过id获取DOM元素
```
this.$.b    // b是指定的id名称
this.$.root.querySelector('#b')      // root是父层元素，初始化时就存在， b是动态生成的元素
```

## 动态数据传递
### 父元素获取数据接口传递给子元素
```
如果属性不直接绑定到元素(比如图标echart,需要先设置)则需要对子元素属性设置监听，在监听函数中处理数据
data: {
	type: Array,
	value: () => [],
	observer: '_activeChanged',
},
```