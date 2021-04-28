## 获取点击事件的参数
- 场景
  - 循环语句中， 事件传参
```
div(on-click='handleClick')
```
```
handleClick(e) {
	// 从modal获取该句模板可以读取到的数据
	console.log(e.model )
}
```