## State
---
- 不能直接修改state, 而要使用setState
- state的更新可能是异步的，会把多个setState合并为一个调用
- setState的更新会被合并（浅合并），将参数对象合并到当前的state上


## setState
```
setState(updater, [callback])
```
参数一为带有形式参数的 updater 函数：
```(state, props) => stateChange```

updater 的返回值会与 当前state 进行浅合并，参数state,props在使用时是最新值

参数一也可以是一个对象， 同一周期内会对多个 setState 进行批处理，对象进行浅合并

setState() 的第二个参数为可选的回调函数，它将在 setState 完成合并并重新渲染组件后执行， 可以使用componentDidUpdate代替

## 为什么不直接更新state
- 在开始重新渲染之前，React 会有意地进行“等待”，直到所有在组件的事件处理函数内调用的 setState() 完成之后。这样可以通过避免不必要的重新渲染来提升性能。

## setState在什么时候是异步的
- 事件处理函数内部的 setState 是异步的