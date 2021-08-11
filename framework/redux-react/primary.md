<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [为什么使用redux-react](#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8redux-react)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 为什么使用redux-react

  - 是redux官方提供的针对react的UI绑定库
  - 加强了react架构体系
    - 与react非常契合游客做最大限度的解耦，react组件按功能拆分为容器组件和展示组件，React Redux connect函数生成“容器”包装器组件，这些组件处理与store数据的交互，并通过单向数据流的形式向下传递， 展示组件并不知道redux的存在
    - 跨组件传递数据， 避免数据层层传递
  - 实现了一定的性能优化
    - 通过在React组件树中连接多个组件，可以确保每个连接的组件仅从该组件所需的存储状态中提取特定的数据（可预测性的，显示的注册当前组件所需要的数据，避免了不关注的数据更新导致的重新渲染）