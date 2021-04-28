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