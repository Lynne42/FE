# 性能优化

## 减少组件的重复渲染

- React.memo
  - 包裹函数组件，对传入的props默认进行浅比较，如果传入的props不变，则组件不会渲染
  - 自定义比较函数

    ```
    function isEquel(preProps, nextProps) {
        if(preProps.id === nextProps.id) {
            return true
        }
        return false
    }
    React.memo(MyComponent, isEquel)
    ```

- React.PureComponent

    - 用于定义class组件， 默认内部有shouldComponentUpdate生命周期，无需手动定义，对props做浅比较
  
- shouldComponentUpdate

    - 用于普通的class组件，调用该声明周期判断组件是否需要重新渲染


## 列表元素添加唯一的key标识

## 缓存数据

- useMemo

    用于缓存一个需要进行复杂计算的数据，只有依赖项改变时才会重新计算值，依赖项不变，则不会重新计算值

- useCallback

    用于缓存一个函数，只有依赖项改变时函数内部才会发生变化

## 避免使用内联对象和匿名函数
避免下列的使用：
```
<AnotherComponent style={{ margin: 0 }} {...aProp} />

<AnotherComponent onChange={() => props.callback(props.id)} />
```
组件的每一次渲染都会生成一个新的对象或者函数

优化：
```
const anotherComponentStyle = {
    margin: 0
}
<AnotherComponent style={anotherComponentStyle} {...aProp} />

// 或者非动态属性直接使用class样式
```
```
const {id, callback} = props;
const handleChange = useCallback(
    () => callback(id)
    , [id, callback])
<AnotherComponent onChange={handleChange} />
```



## 延迟加载组件
利用 React.lazy 和 React.Suspense延迟加载组件

## 使用React.Fragment包裹多个子组件，避免二外的DOM层级