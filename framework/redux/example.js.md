<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [在线demo](#%E5%9C%A8%E7%BA%BFdemo)
- [.html](#html)
- [.js](#js)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


# [在线demo](https://jsrun.net/PiaKp)

# .html
```
<div>
  <p id="value">0</p>
  <button id="incrBtn" class="btn">+</button>
  <button id="decrBtn" class="btn">-</button>
</div> 
```

# .js
- reducer
```
const initialState = {
  value: 0
}
function counterReducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  switch (action.type) {
    case 'counter/incremented':
      return { ...state, value: state.value + 1 }
    case 'counter/decremented':
      return { ...state, value: state.value - 1 }
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state
  }
}
```


- store
```
const rootReducer = Redux.combineReducers({
    counter: counterReducer
})

// 创建store
const store = Redux.createStore(rootReducer)
```

- UI
```
const valueEl = document.getElementById('value')
console.log(2, valueEl)
// 获取数据， 并修改element内容
function render() {

  // 获取当前state值
  const state = store.getState()
  valueEl.innerHTML = state.counter.value
}

// 初始化更新HTML element内容
render()

// 订阅当前UI, 当store更新后， 会自动调用改渲染函数
store.subscribe(render)

```

- dispatch action
```
document.getElementById('incrBtn').addEventListener('click', function() {
	store.dispatch({type: 'counter/incremented'})
})
// 点击-， 递减state.value值
document.getElementById('decrBtn').addEventListener('click', function() {
	store.dispatch({type: 'counter/decremented'})
})
```