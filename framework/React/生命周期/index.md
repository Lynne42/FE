<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [生命周期](#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
- [其他api](#%E5%85%B6%E4%BB%96api)
- [class属性](#class%E5%B1%9E%E6%80%A7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 生命周期
- 挂载(当组件实例被创建并插入 DOM 中时)
	- construction()
		- 主要用来设置state或者方法绑定
	- static getDerivedStateFromProps()
		- 每次渲染时都会调用该方法
	- render()
		- 返回类型
			- react元素(html标签或者自定义组件)
			- 数组/React.Fragment
			- Portals, 渲染组件到父组件之外的地方
			- 字符串或者数值类型
			- bool值或者null
	- componentDidMount()
	
- 更新(当props或者state发生变化时会触发更新)
	- static getDerivedStateFromProps()
	- shouldComponentUpdate()
	- render()
	- getSnapshotBeforeUpdate()
	- componentDidUpdate()
	
- 卸载
	- componentWillUnmount()

- 错误处理（捕获渲染过程，生命周期，或子组件的构造函数中抛出的错误）
	- 只能捕获子组件， 不能捕获当前组件
	- static getDerivedStateFromError()
	- componentDidCatch()（后代组件抛出错误后被调用）

## 其他api
- setState()
	- setState() 并不总是立即更新组件
	- 它会批量推迟更新，不能在 setState() 后立即读取 this.state， 因为这时候state值可能还未更新
- forceUpdate()

## class属性
- defaultProps
- displayName