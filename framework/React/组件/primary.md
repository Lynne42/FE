

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