<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [是什么，作用](#%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%9C%E7%94%A8)
- [特点](#%E7%89%B9%E7%82%B9)
- [为什么要使用](#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8)
- [何时使用](#%E4%BD%95%E6%97%B6%E4%BD%BF%E7%94%A8)
- [核心](#%E6%A0%B8%E5%BF%83)
  - [术语](#%E6%9C%AF%E8%AF%AD)
    - [`store`](#store)
    - [`reducer`](#reducer)
    - [`actions`](#actions)
  - [不可变性](#%E4%B8%8D%E5%8F%AF%E5%8F%98%E6%80%A7)
    - [redux为什么设置成不可变的更新](#redux%E4%B8%BA%E4%BB%80%E4%B9%88%E8%AE%BE%E7%BD%AE%E6%88%90%E4%B8%8D%E5%8F%AF%E5%8F%98%E7%9A%84%E6%9B%B4%E6%96%B0)
  - [数据流](#%E6%95%B0%E6%8D%AE%E6%B5%81)
    - [单向数据流](#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)
    - [redux数据流](#redux%E6%95%B0%E6%8D%AE%E6%B5%81)
- [middleware](#middleware)
  - [异步 redux-thunk](#%E5%BC%82%E6%AD%A5-redux-thunk)
- [副作用](#%E5%89%AF%E4%BD%9C%E7%94%A8)
- [源码](#%E6%BA%90%E7%A0%81)
- [生态](#%E7%94%9F%E6%80%81)
- [工具](#%E5%B7%A5%E5%85%B7)
- [文档](#%E6%96%87%E6%A1%A3)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 是什么，作用
- Redux是一个可预测的全局应用状态管理库，与react解耦，可应用到其他非React的JS应用中
- Redux使用称为“操作”的事件来管理和更新应用程序状态, 它用作需要在整个应用程序中使用的状态的集中存储，其规则确保只能以可预测的方式更新状态。

# 特点
- 可预测，状态可预测
- 状态集中管理
- 可调式的: 拥有调试工具Redux DevTools
- 灵活： 可以与任何UI层一起使用

# [为什么要使用](./intro.md)

- 管理“全局”状态-应用程序许多部分所需相同的状态

- Redux提供的模式和工具使您更容易了解何时，何地，为什么以及如何更新应用程序中的状态，以及发生这些更改时应用程序逻辑的行为

- 帮助编写编写可预测和可测试的代码，这有助于使您确信应用程序将按预期运行

# 何时使用
- 在应用程序的许多地方使用大量的相同状态
- 应用状态随着时间而频繁更新
- 更新状态的逻辑比较复杂
- 该应用程序具有中型或大型代码库，可能被许多人使用

# 核心

## 术语
### `store`
  
存储应用程序的整体全局状态在单个sotre中的一个对象树中

核心：

一个顶级对象，内部可包含各个子对象

例子： 
```
import { createStore } from 'redux'
let store = createStore(counterReducer)
```

- `getState`
  
stare方法，用来获取所有的state数据

- `dispatch`
  
  - store的方法， 也是更新state的唯一方法，接收一个action作为参数
  - 可以看做事件触发器，当应用程序中需要发生事件时，通过dispatch(action)来触发事件
  
- `Selectors`
  - 一个函数，从store中提取指定的数据
  ```
  const selectCounterValue = state => state.value

  const currentValue = selectCounterValue(store.getState())
  console.log(currentValue)
  ```

### `reducer`
  
- 根据发生的动作，更新store中的相应的数据
- 可以认为reducer是一个事件监听者，根据接收到的action去梳理事件，更新state

核心：
- 一个函数，接收当前的state值和一个action对象，返回一个新的state值
- 在一个reducer中管理整个应用的状态写起来是困难的， 我们往往根据功能拆分成多个reducer分别处理不同的功能
- 然后创建一个顶级reducer来集合所有的功能reducer

规范：
- 通过state和action来计算出新的state
- 不允许修改当前的state, 必须进行不可变的更新，通过复制已存在的state, 在副本的基础上修改值
- 纯函数， 不能进行任何异步的操作或者导致其他的副作用
  
```
(state, action) => newState

```

例子：
```
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

// 合并reducer
function app(state = {}, action) {
  return {
    counterReducer: counterReducer(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```

### `actions`

- actions
  - 一个action是一个简单是的JS对象， 有一个type属性。
  - 一个action可以被看作是一个事件，它描述了发生在应用中的事情

例子： 
```
{ type: 'counter/incremented', data: {} }
```

发送一个动作更改state:
```
const increment = () => {
  return {
    type: 'counter/increment'
  }
}

store.dispatch(increment())

console.log(store.getState())
```
- Action Creators

action生成器
```
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

## 不可变性
- JS对象，数组默认是可变的， 为了保持不可变性，必须拷贝已存在的对象或数组，然后在副本中修改值
- redux建议所有的state是不可变的

### redux为什么设置成不可变的更新
- 可能会导致一些bug, UI可能不能正确的更新需要显示的最终的数据
- 可变的更新使理解state怎么去更新变得困难
- 可变的更新使编写测试用例变得困难
- 可变的更新使得通过时间追踪bug变得困难
  

## 数据流
### 单向数据流
- state, 描述应用程序在一个特定时间点的状态
- UI, 对该状态的声明性描述，根绝state数据渲染页面相应内容
- action, 发生的动作，应用有事件发生时， 根据发生的动作修改对应的state（setState等）
- UI根据新的state状态重新渲染页面

### redux数据流

- 初始化
  - 使用root reducer创建store
  - store调用root reducer一次， 保存返回的初始化的state
  - UI首次渲染时，UI组件接收当前store中的state数据去渲染页面，同时UI组件也订阅了任何store的更新以便知道state是否已经修改
  
- 更新
  - 当一些事件发生， 比如一些交互动作
  - 应用程序dispatch发送一个actions给store,dispatch({type: 'counter/increment'})
  - store运行reducer函数， 使用上一个state和当前的actions作为参数，同时保存运行结果的newState
  - store通知所有已订阅的UI组件store已被更新
  - 每一个从store获取数据的UI组件都要检查是否自己需要的那部分state数据被更新了
  - 每个需要的数据被改变的UI组件都会强制重新渲染，从而导致页面更新
<img src="https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" />


# middleware
## 异步 redux-thunk
 

# 副作用


# 源码
- [doc intro](https://redux.js.org/tutorials/fundamentals/part-4-store)
# [生态](https://redux.js.org/introduction/ecosystem)

- React-Redux
- Redux Toolkit
- Redux DevTools Extension  

# 工具
- react
  - react-redux
  - redux-devtools
  
- 调试工具
    - [Redux DevTools Extension for Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)


# 文档
- https://redux.js.org/introduction/learning-resources
- https://redux.js.org/introduction/learning-resources#thinking-in-redux