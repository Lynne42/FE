<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [元素](#%E5%85%83%E7%B4%A0)
- [条件渲染](#%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93)
- [列表渲染](#%E5%88%97%E8%A1%A8%E6%B8%B2%E6%9F%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 元素
---
- 元素是构成react的最小单元， 元素描述了页面中显示的内容
	```const element = <h1>Hello, world</h1>;```
- 生成react元素
	```
	const element = React.createElement('h1', null, 'Hello, world')
	
	```
	上面JSX语法是React.createElement的语法糖
- React.createElement创建的元素是普通的JS对象，React DOM负责将React元素与DOM元素保持一致

## 条件渲染
---
根据应用的不同状态， 渲染对应的部分
- && 运算符
	需要保证条件是bool值
- 三目运算符
- 如果需要隐藏组件， 可以考虑让组件返回空， 即阻止组件渲染， 而不是修改class

## 列表渲染
---
- key
	- 最好使用列表中的唯一主键作为key
	- 如果列表的顺序会变化， 不建议使用index作为key