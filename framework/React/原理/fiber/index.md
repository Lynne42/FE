react核心分为三层：

- Virtual DOM是一个虚拟的DOM对象，被保存在内存中， 用来描述用户界面，通过ReactDOM等将他与真实DOM同步，从而修改页面
- Fiber reconciler是react新的协调引擎，目的是使Virtual DOM能够进行增量式渲染
- renderer渲染器，用于管理React DOM，根据底层平台不同，调用不同的渲染器生成响应的视图

# Fiber reconciler

Fiber reconciler是一种新的用于React渲染更新的跳读算法，通过把渲染/更新拆分为更小的任务，合理的调度该任务的执行来控制任务执行的时间和顺序，从而使页面更高效的渲染

目标：
- 能够把可中断的任务切片处理
- 能够调整优先级，重置并复用任务
- 能够在父元素与子元素之间交错处理，以支持 React 中的布局
- 能够在 render() 中返回多个元素
- 更好地支持错误边界

1. 把渲染更新分为两个阶段

    - 通过diff算法，找出两个虚拟DOM的差异以及修改的地方(DOM Change),
    - 更新阶段，把需要修改的地方应用到真实DOM

2. 如何拆分

    - 按照虚拟DOM节点拆分，Fiber tree是按照

3. 调度任务

    - 工作循环， 每次处理一个fiber 
    - 优先级机制