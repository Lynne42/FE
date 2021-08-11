<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [性能优化](#%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96)
  - [减少组件的重复渲染](#%E5%87%8F%E5%B0%91%E7%BB%84%E4%BB%B6%E7%9A%84%E9%87%8D%E5%A4%8D%E6%B8%B2%E6%9F%93)
  - [列表元素添加唯一的key标识](#%E5%88%97%E8%A1%A8%E5%85%83%E7%B4%A0%E6%B7%BB%E5%8A%A0%E5%94%AF%E4%B8%80%E7%9A%84key%E6%A0%87%E8%AF%86)
  - [缓存数据](#%E7%BC%93%E5%AD%98%E6%95%B0%E6%8D%AE)
  - [避免使用内联对象和匿名函数](#%E9%81%BF%E5%85%8D%E4%BD%BF%E7%94%A8%E5%86%85%E8%81%94%E5%AF%B9%E8%B1%A1%E5%92%8C%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0)
  - [延迟加载组件](#%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6)
  - [使用React.Fragment包裹多个子组件，避免二外的DOM层级](#%E4%BD%BF%E7%94%A8reactfragment%E5%8C%85%E8%A3%B9%E5%A4%9A%E4%B8%AA%E5%AD%90%E7%BB%84%E4%BB%B6%E9%81%BF%E5%85%8D%E4%BA%8C%E5%A4%96%E7%9A%84dom%E5%B1%82%E7%BA%A7)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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