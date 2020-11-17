```
useEffect(() => {
	return () => {}// function clear() {}
})
```
- 在初始渲染，更新， 卸载都会调用effect
- 每次更新都会给useEffect传递一个函数， 用来代替之前的函数，如果上一次函数中由清除方法， 会调用上一次函数的清除方法clear
-
	
自实现：

useEffect(() => {}, [])

```
let originArr;
function useEffect(fn, arr) {
	let isChange = false;
	if(!arr) {
		isChange = !arr.every((item, i) => item === originArr[i])
	}
	if(isChange) {
		fn();
		originArr = arr
	}
}
```





