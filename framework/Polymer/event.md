<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [获取点击事件的参数](#%E8%8E%B7%E5%8F%96%E7%82%B9%E5%87%BB%E4%BA%8B%E4%BB%B6%E7%9A%84%E5%8F%82%E6%95%B0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 获取点击事件的参数
- 场景
  - 循环语句中， 事件传参
```
div(on-click='handleClick')
```
```
handleClick(e) {
	// 从modal获取该句模板可以读取到的数据
	console.log(e.model )
}
```