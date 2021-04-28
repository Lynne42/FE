## JSX是什么？
---
- JSX， 即JavaScript XML 是JavaScript的一种语法扩展
-  React使用JSX来来描述应用界面的本质内容
- JSX是React.createElement函数的语法糖，编译时会转换为react对象元素，也正是因为JSX会被编译成React.createElement的调用形式， React必须包含在JSX代码的作用域范围内
		```
		<p className="p">文本</p>
		```
		```
		React.createElement(
			'p', 
			{className: 'p'}, 
			'文本'
		)
		```
- React Dom负责将ReactElement对象转化为真实的DOM，渲染到页面上， 并始终保持ReactElement与DOM元素保持一致

## JSX组成
---
- 指定React元素的类型
	- html标签
	- React组件
- 元素属性
- 元素内容

## JSX原理
---
- 每个DOM元素都可以使用JavaScript对象来表示， 元素包含标签名(html元素)，属性(html元素属性)，子元素(html元素或者子节点)， 所以我么可以用JavaScript对象来描述所有能用huml描述的UI信息
		```
		{
			tag: 'p',
			attr: {className: 'p'},
			children: '文本'
		}
		```
- React通过React.createElement生成相应的JavaScript对象，并最终呈现为页面上UI.
- 而JSX正是React.createElement的形象化描述，包含React.createElement所需的一切元素。在编译时转换为React.createElement的调用形式。
- 它看起来像是html但并不是，本质上是一个JavaScript对象
- 因为本质是JavaScript， 所以不能使用JavaScript关键字， 像class，使用className代替， for使用htmlFor代替

## JSX为什么使用？
---
- 抽象了 React Element 的创建过程
- 程序代码更直观易阅读
- 类HTML语义化的标签，可以让我们像html标签一样使用react组件，上手成本极低
- 关注点分离

## ”关注点分离“
---
- 它的意思是，各种技术只负责自己的领域，不要混合在一起，形成耦合。对于网页开发来说，主要是三种技术分离
	- HTML语言， 负责网页的结构， 又称语义层
	- CSS语言，负责网页的样式， 又称视图层
	- JavaScript语言，负责网页的逻辑和交互，又称逻辑层和交互层
- 在React中，将结构，样式， 交互封装在一起，打破了以往的关注点分离形式， 但同时创建了一种新的形式-组件。每个组件包含自己所有的代码包括结构，样式，和逻辑，不依赖外部。达到了组件与组件的分离， 方便了组件的复用
- 实质上react将关注点提升到了组件层
- 表面上看react是将html，css, js混合在一起， 实质上是通过JavaScript创建html和css。创建html通过JSX, 创建CSS通过style属性
	-由于 CSS 的封装非常弱，导致了一系列的第三方库，用来加强 React 的 CSS 操作。它们统称为 CSS in JS，意思就是使用 JS 语言写 CSS
	
## JSX语法
---
- 可以在{}中放入任何有效的JavaScript表达式
	- 变量
	- 函数调用
- JSX本身也是表达式
	- 可以在条件语句，循环语句中使用JSX
	- 可以将JSX赋值给变量
	- 可以将JSX作为参数传入
	- 可以将JSX作为结果从函数中返回
- JSX属性
	- 可以是字符串
	- 可以是js表达式
- JSX可以防止XSS攻击
	- React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容

- 在JSX中使用.语法
	- 你也可以使用点语法来引用一个 React 组件, <MyComponents.DatePicker color="blue" />
- jsx中的props
	- 属性默认值是true
	- 属性展开 ...
- JSX中的子元素
	- 字符串
		- 移除行首尾的空格以及空行
		- 标签相邻的空行均会被删除
		- 文本字符串之间的新行会被压缩为一个空格
- `布尔类型、Null 以及 Undefined 将会忽略`
	- `false, null, undefined, and true 是合法的子元素。但它们并不会被渲染`
	- 如果需要渲染这些值， 可以将他们转为字符串
	- 根据该特性， 可以实现依据特定条件来渲染其他的 React 元素， 但条件必须是bool值
		```
		{showHeader && <Header />}
		```
	
- `0值会被渲染出来`, 下面如果是空数组的话， 会被渲染为0
	```
	{props.messages.length &&
    	<MessageList messages={props.messages} />
  	}
	```
