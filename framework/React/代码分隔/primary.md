<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [为何进行代码分隔](#%E4%B8%BA%E4%BD%95%E8%BF%9B%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%88%86%E9%9A%94)
- [如何进行代码分割](#%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E4%BB%A3%E7%A0%81%E5%88%86%E5%89%B2)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 为何进行代码分隔
---
- 单页面应用随着项目的不断增大，代码打包后的体积也不断增大，导致加载缓慢
- 可用于懒加载用户不需要看到的内容，减少初始加载的代码量，提高应用性能

## 如何进行代码分割
---
- 动态import()引入
- React.lazy() + Suspense + 异常捕获边界
	```
	const OtherComponent = React.lazy(() => import('./OtherComponent'));
	```

- 基于路由的代码分割
- 

