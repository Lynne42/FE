<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [React事件](#react%E4%BA%8B%E4%BB%B6)
- [React阻止默认行为](#react%E9%98%BB%E6%AD%A2%E9%BB%98%E8%AE%A4%E8%A1%8C%E4%B8%BA)
- [绑定事件](#%E7%BB%91%E5%AE%9A%E4%BA%8B%E4%BB%B6)
- [异步访问事件](#%E5%BC%82%E6%AD%A5%E8%AE%BF%E9%97%AE%E4%BA%8B%E4%BB%B6)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Author: your name
 * @Date: 2020-09-03 14:41:31
 * @LastEditTime: 2021-03-07 13:55:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Learning/framework/React/事件/primary.md
-->
## React事件
---
- react事件是合成事件

## React阻止默认行为
---
- e.preventDefault()
  - 阻止浏览器默认行为，例如a标签跳转
- e.stopPropagation() 
  - 阻止事件传播

## 绑定事件
---
- class组件中， 普通函数需要手动添加bind, 明确this指向
- class组件中， 如果使用箭头函数， 则不需要绑this, 箭头函数没有自己的this，会在class的词法作用域中寻找this
- class组件中, 如果没有使用 class fields 语法，你可以在回调中使用箭头函数


## 异步访问事件
- 调用event.persist()，移除合成事件并保留对事件的引用
- 



