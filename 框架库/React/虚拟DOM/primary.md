## 何为虚拟DOM
---
- DOM即文档对象模型，它允许脚本(js)控制Web页面、窗口和文档
web页面 = DOM + JS (脚本语言)
- 在原生JavaScript中，我们要修改页面html内容，需要直接对DOM进行创建和修改操作， 而DOM通过事件监听与应用程序进行通信
- 而在React中， React会将代码转换为一个JavaScript对象，然后通过ReactDom将这个元素树转换为真实的DOM， 生成的这个元素树就是所谓的虚拟DOM
- 初始化时调用render()方法，会先创建一个React元素组成的树，然后通过ReactDom将这个元素树转换为真实的DOM，当props/state更新时会再创建一个React元素树，React 需要基于这两棵树之间的差别来判断如何有效率的更新 UI 以保证当前 UI 与最新的树保持同步
- 当我们需要对DOM进行事件监听时，首先对VitrualDom进行事件监听，VitrualDom会代理原生的DOM事件从而做出响应


## 为何使用虚拟DOM
---
- 提升开发效率
	- react推行的是声明式的变成思想， 只需要告诉react当前视图处于什么状态，react便会在新状态下生成新的虚拟DOM,与原DOM对比从而自发的修改改变的部分更新视图，不再需要自己完成DOM的更新， 属性修改， 事件监听等。使我们只需关注业务逻辑而非DOM操作
- 跨浏览器兼容
	- react基于虚拟DOM实现了一套自己的事件机制，模拟事件过程，使用事件代理，批量更新等机制，兼容了不同浏览器事件处理问题
- 跨平台兼容
	- React Native，采用虚拟DOM的逻辑将代码映射到移动平台上

## 虚拟DOM的原理

- 使用React.createElement或JSX编写React组件，实际上所有的JSX代码最后都会转换成React.createElement(...)，Babel帮助我们完成了这个转换的过程
- createElement函数对key和ref等特殊的props进行处理，并获取defaultProps对默认props进行赋值，并且对传入的孩子节点进行处理，最终构造成一个ReactElement对象（所谓的虚拟DOM）
- ReactDOM.render将生成好的虚拟DOM渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实DOM

## 虚拟DOM的组成