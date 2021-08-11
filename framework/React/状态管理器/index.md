<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [什么时候使用状态管理器？](#%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E4%BD%BF%E7%94%A8%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%99%A8)
- [常用的状态管理有哪些？怎么使用， 有何异同？](#%E5%B8%B8%E7%94%A8%E7%9A%84%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E6%9C%89%E5%93%AA%E4%BA%9B%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8-%E6%9C%89%E4%BD%95%E5%BC%82%E5%90%8C)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 什么时候使用状态管理器？
---
	
- 从组件来看
	- 某个组件的状态需要在多个组件中共享
		- 子组件共享(数据流)
		- 兄弟组件共享(状态提升)
		- 全局状态共享(全局状态管理)
	- 一个组件的状态改变会影响到其他组件的改变
- 从数据来看
	- 需要维护大量与服务器交互的数据
	- 一个数据在多个页面共享
- 例子
	- 换肤
	- 地域，语言
总体来说，有大量组件需要通信时， 通过状态提升，context, storage等不能很好的解决时， 需要状态管理器更好的管理状态， 降低组件通信复杂度

## 常用的状态管理有哪些？怎么使用， 有何异同？
---

- `context`
	- 优点
		- 数据不需要在组件树中层层传递，便可以在组建中分享数据
	- 缺点
		- 使组件的复用性变差
