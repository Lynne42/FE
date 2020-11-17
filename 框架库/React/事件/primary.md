## React事件
---
- react事件是合成事件

## React阻止默认行为
---
- e.preventDefault()
  - 阻止浏览器默认行为，例如a标签跳转
- e.stopPropagation() 
  - 阻止事件传播

## 绑定事件
---
- class组件中， 普通函数需要手动添加bind, 明确this指向
- class组件中， 如果使用箭头函数， 则不需要绑this, 箭头函数没有自己的this，会在class的词法作用域中寻找this
- class组件中, 如果没有使用 class fields 语法，你可以在回调中使用箭头函数


## 异步访问事件
- 调用event.persist()，移除合成事件并保留对事件的引用
- 
