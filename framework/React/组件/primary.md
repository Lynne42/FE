<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [组件是什么？](#%E7%BB%84%E4%BB%B6%E6%98%AF%E4%BB%80%E4%B9%88)
- [声明组件，有何区别，](#%E5%A3%B0%E6%98%8E%E7%BB%84%E4%BB%B6%E6%9C%89%E4%BD%95%E5%8C%BA%E5%88%AB)
- [组件分类](#%E7%BB%84%E4%BB%B6%E5%88%86%E7%B1%BB)
  - [如何划分组件？](#%E5%A6%82%E4%BD%95%E5%88%92%E5%88%86%E7%BB%84%E4%BB%B6)
  - [组件间如何通信（共享数据）？](#%E7%BB%84%E4%BB%B6%E9%97%B4%E5%A6%82%E4%BD%95%E9%80%9A%E4%BF%A1%E5%85%B1%E4%BA%AB%E6%95%B0%E6%8D%AE)
  - [说说你对“在React中，一切都是组件”的理解](#%E8%AF%B4%E8%AF%B4%E4%BD%A0%E5%AF%B9%E5%9C%A8react%E4%B8%AD%E4%B8%80%E5%88%87%E9%83%BD%E6%98%AF%E7%BB%84%E4%BB%B6%E7%9A%84%E7%90%86%E8%A7%A3)
  - [怎么实现React组件的国际化呢？](#%E6%80%8E%E4%B9%88%E5%AE%9E%E7%8E%B0react%E7%BB%84%E4%BB%B6%E7%9A%84%E5%9B%BD%E9%99%85%E5%8C%96%E5%91%A2)
  - [React组件的构造函数是必须的吗？构造函数有什么作用？](#react%E7%BB%84%E4%BB%B6%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E6%98%AF%E5%BF%85%E9%A1%BB%E7%9A%84%E5%90%97%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E6%9C%89%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8)
  - [如果组件的属性没有传值，那么它的默认值是什么？](#%E5%A6%82%E6%9E%9C%E7%BB%84%E4%BB%B6%E7%9A%84%E5%B1%9E%E6%80%A7%E6%B2%A1%E6%9C%89%E4%BC%A0%E5%80%BC%E9%82%A3%E4%B9%88%E5%AE%83%E7%9A%84%E9%BB%98%E8%AE%A4%E5%80%BC%E6%98%AF%E4%BB%80%E4%B9%88)
  - [你有使用过loadable组件吗？它帮我们解决了什么问题？](#%E4%BD%A0%E6%9C%89%E4%BD%BF%E7%94%A8%E8%BF%87loadable%E7%BB%84%E4%BB%B6%E5%90%97%E5%AE%83%E5%B8%AE%E6%88%91%E4%BB%AC%E8%A7%A3%E5%86%B3%E4%BA%86%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98)
  - [你有使用过suspense组件吗？它帮我们解决了什么问题？](#%E4%BD%A0%E6%9C%89%E4%BD%BF%E7%94%A8%E8%BF%87suspense%E7%BB%84%E4%BB%B6%E5%90%97%E5%AE%83%E5%B8%AE%E6%88%91%E4%BB%AC%E8%A7%A3%E5%86%B3%E4%BA%86%E4%BB%80%E4%B9%88%E9%97%AE%E9%A2%98)
  - [怎样动态导入组件？](#%E6%80%8E%E6%A0%B7%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5%E7%BB%84%E4%BB%B6)
  - [如何给非控组件设置默认的值？](#%E5%A6%82%E4%BD%95%E7%BB%99%E9%9D%9E%E6%8E%A7%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%E9%BB%98%E8%AE%A4%E7%9A%84%E5%80%BC)
  - [自定义组件时render是可选的吗？为什么？](#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E6%97%B6render%E6%98%AF%E5%8F%AF%E9%80%89%E7%9A%84%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88)
  - [怎么定时更新一个组件？](#%E6%80%8E%E4%B9%88%E5%AE%9A%E6%97%B6%E6%9B%B4%E6%96%B0%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6)
  - [怎样有条件地渲染组件？](#%E6%80%8E%E6%A0%B7%E6%9C%89%E6%9D%A1%E4%BB%B6%E5%9C%B0%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6)
  - [如何更新组件的状态？](#%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B0%E7%BB%84%E4%BB%B6%E7%9A%84%E7%8A%B6%E6%80%81)
  - [组件卸载前，加在DOM元素的监听事件和定时器要不要手动清除？为什么？](#%E7%BB%84%E4%BB%B6%E5%8D%B8%E8%BD%BD%E5%89%8D%E5%8A%A0%E5%9C%A8dom%E5%85%83%E7%B4%A0%E7%9A%84%E7%9B%91%E5%90%AC%E4%BA%8B%E4%BB%B6%E5%92%8C%E5%AE%9A%E6%97%B6%E5%99%A8%E8%A6%81%E4%B8%8D%E8%A6%81%E6%89%8B%E5%8A%A8%E6%B8%85%E9%99%A4%E4%B8%BA%E4%BB%80%E4%B9%88)
  - [函数式组件有没有生命周期？为什么？](#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6%E6%9C%89%E6%B2%A1%E6%9C%89%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%B8%BA%E4%BB%80%E4%B9%88)
  - [如何提高组件的渲染效率呢？](#%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98%E7%BB%84%E4%BB%B6%E7%9A%84%E6%B8%B2%E6%9F%93%E6%95%88%E7%8E%87%E5%91%A2)
  - [请说下react组件更新的机制是什么？](#%E8%AF%B7%E8%AF%B4%E4%B8%8Breact%E7%BB%84%E4%BB%B6%E6%9B%B4%E6%96%B0%E7%9A%84%E6%9C%BA%E5%88%B6%E6%98%AF%E4%BB%80%E4%B9%88)
  - [React怎么判断什么时候重新渲染组件呢？](#react%E6%80%8E%E4%B9%88%E5%88%A4%E6%96%AD%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%87%8D%E6%96%B0%E6%B8%B2%E6%9F%93%E7%BB%84%E4%BB%B6%E5%91%A2)
  - [什么是React的实例？函数式组件有没有实例？](#%E4%BB%80%E4%B9%88%E6%98%AFreact%E7%9A%84%E5%AE%9E%E4%BE%8B%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6%E6%9C%89%E6%B2%A1%E6%9C%89%E5%AE%9E%E4%BE%8B)
  - [在React中如何判断点击元素属于哪一个组件？](#%E5%9C%A8react%E4%B8%AD%E5%A6%82%E4%BD%95%E5%88%A4%E6%96%AD%E7%82%B9%E5%87%BB%E5%85%83%E7%B4%A0%E5%B1%9E%E4%BA%8E%E5%93%AA%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6)
  - [在React中组件和元素有什么区别？](#%E5%9C%A8react%E4%B8%AD%E7%BB%84%E4%BB%B6%E5%92%8C%E5%85%83%E7%B4%A0%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [在React中声明组件时组件名的第一个字母必须是大写吗？为什么？](#%E5%9C%A8react%E4%B8%AD%E5%A3%B0%E6%98%8E%E7%BB%84%E4%BB%B6%E6%97%B6%E7%BB%84%E4%BB%B6%E5%90%8D%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%AD%97%E6%AF%8D%E5%BF%85%E9%A1%BB%E6%98%AF%E5%A4%A7%E5%86%99%E5%90%97%E4%B8%BA%E4%BB%80%E4%B9%88)
  - [举例说明什么是高阶组件(HOC)的反向继承？](#%E4%B8%BE%E4%BE%8B%E8%AF%B4%E6%98%8E%E4%BB%80%E4%B9%88%E6%98%AF%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6hoc%E7%9A%84%E5%8F%8D%E5%90%91%E7%BB%A7%E6%89%BF)
  - [说说你对React的组件命名规范的理解](#%E8%AF%B4%E8%AF%B4%E4%BD%A0%E5%AF%B9react%E7%9A%84%E7%BB%84%E4%BB%B6%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83%E7%9A%84%E7%90%86%E8%A7%A3)
  - [高阶组件(HOC)有哪些优点和缺点？](#%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6hoc%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BC%98%E7%82%B9%E5%92%8C%E7%BC%BA%E7%82%B9)
  - [怎样实现React组件的记忆？原理是什么？](#%E6%80%8E%E6%A0%B7%E5%AE%9E%E7%8E%B0react%E7%BB%84%E4%BB%B6%E7%9A%84%E8%AE%B0%E5%BF%86%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88)
  - [在使用React过程中什么时候用高阶组件(HOC)？](#%E5%9C%A8%E4%BD%BF%E7%94%A8react%E8%BF%87%E7%A8%8B%E4%B8%AD%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%94%A8%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6hoc)
  - [说说你是怎么理解React的业务组件和技术组件的？](#%E8%AF%B4%E8%AF%B4%E4%BD%A0%E6%98%AF%E6%80%8E%E4%B9%88%E7%90%86%E8%A7%A3react%E7%9A%84%E4%B8%9A%E5%8A%A1%E7%BB%84%E4%BB%B6%E5%92%8C%E6%8A%80%E6%9C%AF%E7%BB%84%E4%BB%B6%E7%9A%84)
  - [展示组件和容器组件有什么区别？](#%E5%B1%95%E7%A4%BA%E7%BB%84%E4%BB%B6%E5%92%8C%E5%AE%B9%E5%99%A8%E7%BB%84%E4%BB%B6%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)
  - [React怎么拿到组件对应的DOM元素？](#react%E6%80%8E%E4%B9%88%E6%8B%BF%E5%88%B0%E7%BB%84%E4%BB%B6%E5%AF%B9%E5%BA%94%E7%9A%84dom%E5%85%83%E7%B4%A0)
  - [React中怎样阻止组件渲染？](#react%E4%B8%AD%E6%80%8E%E6%A0%B7%E9%98%BB%E6%AD%A2%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



## 组件是什么？
---
- 组件允许将UI拆分为独立可运行的代码片段 
- 组件是由元素组成的
- 组件接收传入props参数， 并返回可描述页面内容的React元素
- 组件可组合嵌套

## 声明组件，有何区别，
---
- 函数组件
- es6 class组件

## 组件分类
---
- 受控组件
  - 需要维护自己的状态， 自身状态的改变会导致自身的刷新
- 非受控组件
  - 自身没有状态

### 如何划分组件？
---
可划分为业务组件和功能组件

	
### 组件间如何通信（共享数据）？
---
- 兄弟组件
- 父子组件
- 
---

### 说说你对“在React中，一切都是组件”的理解

### 怎么实现React组件的国际化呢？

### React组件的构造函数是必须的吗？构造函数有什么作用？
---

- 函数组件不需要考虑构造函数
- class组件，如果不需要定义state,不需要为事件绑定this指向， 则不需要写构造函数，如果没有写构造函数， 默认会被隐式声明和调用

### 如果组件的属性没有传值，那么它的默认值是什么？
- true

### 你有使用过loadable组件吗？它帮我们解决了什么问题？
### 你有使用过suspense组件吗？它帮我们解决了什么问题？
---
- 在异步组件加载完成前在页面中显示loading等内容
- 与React.lazy联合使用
  
### 怎样动态导入组件？
---
- React.lazy
- import()
  
### 如何给非控组件设置默认的值？
---
- class.defaultProps / static defaultProps
- 函数组件 Fn.defaultProps


### 自定义组件时render是可选的吗？为什么？
---
- render仅在class组件中需要， 函数组件中不需要

### 怎么定时更新一个组件？
---
```
class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state={date:new Date()};
	}
	componentDidMount(){
		this.timerID=setInterval(()=>this.tick(),1000);
	}
	componentWillUnmount(){
		clearInterval(this.timerID);
	}
	tick(){
		this.setState({
				date:new Date()
		});
	}
	render(){
		return (
				<div>
						<h2>Timer {this.state.date.toLocaleTimeString()}.</h2>
				</div>
		);
	}
}
```
```
import React, { useState, useEffect } from 'react'

export default function TimerHooks () {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    let timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, []);

  return (
    <div>
      <p>时间: {date.toLocaleTimeString()}</p>
    </div>
  )
}
```

### 怎样有条件地渲染组件？
---
- && 运算符，前面必须是布尔值
- 三目运算符

### 如何更新组件的状态？
---


### 组件卸载前，加在DOM元素的监听事件和定时器要不要手动清除？为什么？
---
- 需要
- 自定义的DOM事件监听是在真实DOM上，不在React控制范围内，如果不手动清掉的话， 组件卸载后， 这部分内容依然存在与内存中无法释放， 从而导致内存泄漏

### 函数式组件有没有生命周期？为什么？
---
- 函数组件没有生命周期的概念
- 如果在函数组件中引入effect Hook, 


### 如何提高组件的渲染效率呢？
---
- class组件
  - shouldComponentUpdate，判断props值确认是否需要更新组件
  - 自定义组件继承React.PureComponent, 内部实现了shouldComponentUpdate是对props值的浅比较
  
- 函数组件
  - React.memo, 可自定义比较函数判断组件是否要更新
  - useMeno(), 缓存一个计算值
  - useCallback(), 缓存一个函数，只有依赖项改变时， 函数才会改变

### 请说下react组件更新的机制是什么？

### React怎么判断什么时候重新渲染组件呢？
### 什么是React的实例？函数式组件有没有实例？
	- 通过继承React.Component的类生成
	- 函数组件没有实例
### 在React中如何判断点击元素属于哪一个组件？
### 在React中组件和元素有什么区别？
	- 元素是构成react应用的最小单元
	- 元素是一个普通的对象
	- 组件是由元素组成的

### 在React中声明组件时组件名的第一个字母必须是大写吗？为什么？
	- 组件首字母必须是大写
	- 以此来区分元素和组件
  
### 举例说明什么是高阶组件(HOC)的反向继承？


### 说说你对React的组件命名规范的理解
	- 组件名首字母大写

### 高阶组件(HOC)有哪些优点和缺点？

### 怎样实现React组件的记忆？原理是什么？

### 在使用React过程中什么时候用高阶组件(HOC)？
	- 多个组件有需要使用共同的处理方法， 可抽象出高阶组件， 在高阶组件中处理
	- 

### 说说你是怎么理解React的业务组件和技术组件的？

### 展示组件和容器组件有什么区别？
	- 展示组件
  	- 关注页面的展示效果,生成页面DOM结构， 定义页面样式
  	- 允许使用props.children来包含其他组件
  	- 通过单向数据流接收数据或者处理回调
  
	- 容器组件
  	- 通常作为数据源， 为其他组件提供数据和行为

### React怎么拿到组件对应的DOM元素？

### React中怎样阻止组件渲染？
	- React.createRefs
	- useRef
  	- 在每次渲染时返回同一个 ref 对象