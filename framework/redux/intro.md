<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [存在的问题](#%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98)
  - [1： 数据及回调需要跨层传递](#1-%E6%95%B0%E6%8D%AE%E5%8F%8A%E5%9B%9E%E8%B0%83%E9%9C%80%E8%A6%81%E8%B7%A8%E5%B1%82%E4%BC%A0%E9%80%92)
  - [2: 多个模块需要同一个数据](#2-%E5%A4%9A%E4%B8%AA%E6%A8%A1%E5%9D%97%E9%9C%80%E8%A6%81%E5%90%8C%E4%B8%80%E4%B8%AA%E6%95%B0%E6%8D%AE)
- [redux数据传递方式](#redux%E6%95%B0%E6%8D%AE%E4%BC%A0%E9%80%92%E6%96%B9%E5%BC%8F)
- [解决的问题：](#%E8%A7%A3%E5%86%B3%E7%9A%84%E9%97%AE%E9%A2%98)
- [与React Context API 对比](#%E4%B8%8Ereact-context-api-%E5%AF%B9%E6%AF%94)
  - [React Context](#react-context)
  - [Redux 使用场景](#redux-%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 存在的问题
## 1： 数据及回调需要跨层传递
<img src="https://daveceddia.com/images/counter-component@2x.png"/>

<img src="https://daveceddia.com/images/passing-props-down@2x.png" />

<img src="https://daveceddia.com/images/passing-callbacks-down@2x.png" />


## 2: 多个模块需要同一个数据
<img src="https://daveceddia.com/images/twitter-hierarchy@2x.png"/>


# redux数据传递方式
<img src="https://daveceddia.com/images/redux-connected-twitter@2x.png">

# 解决的问题：

1. 直接将数据连接到需要的组件中，不需要中间组件传递自己并不关心的状态(在上面E1,E2中均存在需要中间组件传递数据的情况)

2. redux提供了一个中央存储库，统一管理数据源（解决react中同级组件状态需要提升到父组件的问题）

随着react的发着，上面1，2这两个问题也可以通过react context api来解决

# 与React Context API 对比

## React Context
- React Context本身并不算是一个状态管理系统， 他是一种依赖注入机制

- 新版的React Context API(16.3+), 声明context后， 该组件的子组件任意部分都可以要求读取这个值，避免了道具组件(本身不关心数据， 但仍需要为子组件传递数据)，理论上可以解决E1,E2的问题
  
- 可以将所需的任何值放入Context中，并且通常情况下，我们是使用useState钩子或useReducer钩子在React组件中管理该状态，我么应该是决定state应该在什么地方， 应该如何更新它，并且将它放到context中取分发

- useReducer + useContext 是一种状态管理系统， 这也相当于redux对react的作用

## Redux 使用场景
1. 从服务器缓存状态
2. 管理UI状态
3. 客户端上其他复杂数据的处理
