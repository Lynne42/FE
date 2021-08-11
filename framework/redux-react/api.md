<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Provider](#provider)
- [connect()](#connect)
- [connectAdvanced()](#connectadvanced)
- [batch()](#batch)
- [hooks](#hooks)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Provider
## connect()
1. 连接react component到redux store
2. 为连接的组件提供需要的数据
3. 通过dispatch将组件产生的动作action分派到store
- mapStateToProps: Function
  
      (state, ownProps?) => Object
  - 从整个组件树中订阅当前组件所需要的数据
  - 每次store state 的更改， 都会调用所有connect连接组件中的mapStateToProps函数，从而更新组件的订阅状态
  - 订阅的数据将通过props传递到组件中，因此这些值也决定了组件是否要重新渲染
  - 接收整个store state数据(与store.getState()相同)，返回组件需要的数据对象
  - 如果不需要订阅store，需要传递null/undefined
  - 生命的参数数量影响行为(state，ownProps)
    - just (state): store更改时该函数会运行
    - all (state, ownProps), store更改时或者容器组件自定义属性改变时都会运行
    - 尽量避免使用ownProps参数， 因为它会导致mapStateToProps函数使用更多的时间
    - 当函数的形式定义包含零个或两个强制性参数时，它将收到ownProps

            function mapStateToProps(state，ownProps) {
              console.log(state) // state
              console.log(ownProps) // ownProps
            }

            function mapStateToProps() {
              console.log(arguments[0]) // state
              console.log(arguments[1]) // ownProps
            }

            function mapStateToProps(...args) {
              console.log(args[0]) // state
              console.log(args[1]) // ownProps
            }

- mapDispatchToProps: Function | Object

      Object | (dispatch, ownProps?) => Object

  - dispatch是store的一个函数，用来触发状态的更改
  - 如果没有显式定义该参数， connect组件将接受默认的props.dispatch参数， 通过dispatch函数发送一个antion
  - 定义该参数将会为contect组件提供action函数作为props参数
  - 可以将action dispatch 函数传递给子组件，而子组件并不能感知redux的存在

- mergeProps: Function

      (stateProps, dispatchProps, ownProps) => Object
  - 用来定义组件最终收到的props
  - 如果不定义该参数， 默认收到的props为

      {
        ...ownProps, // 来自wrap组件自身的props
        ...stateProps,// 来自mapStateToProps
        ...dispatchProps, // 来自mapDispatchToProps
      }

- options: Object

      {
        // 如果provider使用自定义实例， 则connect组件需要传递对应的context实例
        context?: Object,
        // 设置connect组件是纯组件， 不依赖外部的输入或者state
        pure?: boolean,
        areStatesEqual?: Function,
        areOwnPropsEqual?: Function,
        areStatePropsEqual?: Function,
        areMergedPropsEqual?: Function,
        forwardRef?: boolean,
      }

## connectAdvanced()
与context一样， 但是不设置默认值，输出值完全由用户定义

## batch()
使用unstable_batchedUpdates() React API, 批量操作action，而只导致页面一次更新

## hooks
- useSelector
- useDispatch
- useStore
- 
