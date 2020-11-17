## 创建组件
---
- 组件可分为函数组件和class类组件
- 创建函数组件
	- 使用箭头函数
	```
	const FnComponent = () => {
		return (
			<div>箭头函数组件</div>
		)
	}
	FnComponent.defaultProps = {
	  name: 'Mary'
	};
	```
	- 使用普通函数
	```
	function FnComponent() {
		return (
			<div>普通函数组件</div>
		)
	}
	FnComponent.defaultProps = {
	  name: 'Mary'
	};
	```
- 使用es6-class创建组件
	```
	class FnComponent extends React.PureComponent{
		render() {
			return (
				<div>class组件</div>
			)
		}
	}
	FnComponent.defaultProps = {
	  name: 'Mary'
	};
	```
- 不使用es6创建组件
	```
	// 使用create-react-class模块
	const createReactClass = require('create-react-class');
	const Greeting = createReactClass({
		getDefaultProps: function() {
			return {
			    name: 'Mary'
			};
		},
		getInitialState: function() {
			return {count: this.props.initialCount};
		},
		render: function() {
			return <h1>Hello, {this.props.name}</h1>;
		}
	});
	```
	- 添加默认props属性， 需要定义getDefaultProps方法
	- 添加state, 需要定义getInitialState方法
	- 已自动添加this绑定，无需再手动设置