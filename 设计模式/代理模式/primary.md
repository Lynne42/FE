<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [代理模式](#%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 代理模式
是为一个对象提供一个代替品或者占位符，以便控制它的访问

场景：
- DOM事件代理
- es6 Proxy

优点：
- 代理模式将代理对象与被调用对象分离，降低了系统的耦合度。代理模式在客户端和目标对象之间起到一个中介作用，这样起到保护目标对象的作用

- 代理对象可以扩展目标对象的功能；通过修改代理对象就可以，符合开闭原则

缺点：
- 防护力请求速度可能有差别，非直接访问存在开销