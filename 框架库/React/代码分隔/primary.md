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

