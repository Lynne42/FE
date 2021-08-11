<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

  - [](#)
  - [缺点](#%E7%BC%BA%E7%82%B9)
  - [使用](#%E4%BD%BF%E7%94%A8)
- [说说Context有哪些属性？](#%E8%AF%B4%E8%AF%B4context%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B1%9E%E6%80%A7)
- [在React怎么使用Context/怎么使用Context开发组件？](#%E5%9C%A8react%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8context%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8context%E5%BC%80%E5%8F%91%E7%BB%84%E4%BB%B6)
- [什么情况下可以使用context](#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8context)
- [为什么React并不推荐我们优先考虑使用Context？](#%E4%B8%BA%E4%BB%80%E4%B9%88react%E5%B9%B6%E4%B8%8D%E6%8E%A8%E8%8D%90%E6%88%91%E4%BB%AC%E4%BC%98%E5%85%88%E8%80%83%E8%99%91%E4%BD%BF%E7%94%A8context)
- [除了实例的属性可以获取Context外哪些地方还能直接获取Context呢？](#%E9%99%A4%E4%BA%86%E5%AE%9E%E4%BE%8B%E7%9A%84%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E8%8E%B7%E5%8F%96context%E5%A4%96%E5%93%AA%E4%BA%9B%E5%9C%B0%E6%96%B9%E8%BF%98%E8%83%BD%E7%9B%B4%E6%8E%A5%E8%8E%B7%E5%8F%96context%E5%91%A2)
- [childContextTypes是什么？它有什么用？](#childcontexttypes%E6%98%AF%E4%BB%80%E4%B9%88%E5%AE%83%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8)
- [contextType是什么？它有什么用？](#contexttype%E6%98%AF%E4%BB%80%E4%B9%88%E5%AE%83%E6%9C%89%E4%BB%80%E4%B9%88%E7%94%A8)
- [Consumer向上找不到Provider的时候怎么办？](#consumer%E5%90%91%E4%B8%8A%E6%89%BE%E4%B8%8D%E5%88%B0provider%E7%9A%84%E6%97%B6%E5%80%99%E6%80%8E%E4%B9%88%E5%8A%9E)
- [Context api可以取代Redux吗？为什么？](#context-api%E5%8F%AF%E4%BB%A5%E5%8F%96%E4%BB%A3redux%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


### 
- 数据不需要在组件树中层层传递，便可以在组建中分享数据
### 缺点
- 使组件的复用性变差
### 使用
- 创建
	```
	const MyContext = React.createContext(defaultValue);
	```
- class组件使用: Class.contextType
	```
	class MyComponent extends React.Component{
		render() {
			return <p>内容</p>
		}
	}
	MyComponent.contextType = MyContext;
	```
	挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值
	
- 函数组件使用： Context.Consumer
	```
	<MyContext.Consumer>
	  {value => /* 基于 context 值进行渲染*/}
	</MyContext.Consumer>

	```
- 为context命名
	```
	MyContext.displayName = 'MyDisplayName';
	```

## 说说Context有哪些属性？

- React.createContext: 创建
- Context.Provider: 数据生产者
- Context.Consumer: 数据消费者
- Class.contextType: class组件定义contextType， 用来表示要使用哪个Context的数据，
- Context.displayName: 为Context实例定义名字，以在React DevTools开发者工具中显示内容

---
##  在React怎么使用Context/怎么使用Context开发组件？
---
## 什么情况下可以使用context

- 组件嵌套过深， props, state需要层层传递
- 使用context可以跨组件传递数据
  
---  
##  为什么React并不推荐我们优先考虑使用Context？

- Context是基于生产者与消费者模式创建的一种数据传递方式
- 需要订阅数据的子组件需要显式的声明才能使用
- 这种方式打破了props单向数据流的模式，增加了组件额外的依赖关系，同时也降低了组件的可复用性

---
##  除了实例的属性可以获取Context外哪些地方还能直接获取Context呢？
- MyClass.contextType = MyContext定义为类组件的静态变量，可以在任意声明周期甚至render中使用（this.context）
  
---
## childContextTypes是什么？它有什么用？

- 已过时的一个api
---

## contextType是什么？它有什么用？

- 定义类组件当前要使用的context对象是哪一个
---
## Consumer向上找不到Provider的时候怎么办？

- 如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue
---

## Context api可以取代Redux吗？为什么？
- Context虽然可以实现跨组件数据传递，与Redux整体思路一致， 但是需要订阅Context数据的组件必须先引入已定义好的Context，增加了耦合性，增加多人协作成本
- 多数据下需要创建大量的Context， 而只能通过Context.Provider嵌套来传递数据， 需要自己实现一个store来管理数据