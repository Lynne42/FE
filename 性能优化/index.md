# 引发性能问题的原因

## 资源包过大

导致的问题：

- **首屏资源下载耗时延长**，消耗大量带宽，尤其是意动用用户，造成更大的流量上的消耗
- **资源解析执行慢，页面渲染时间长**，长时间的空屏状态严重影响用户体验，恒可能导致用户放弃等待，从而关闭应用

## 代码耗时长

- **不必要的页面渲染**，比如在react(class， hooks)中造成的不必要的组件渲染

        const Foo = () => { // 1. Foo可用React.memo，避免无props变更时渲染
            const result = calc(); // 2. 组件内不可使用直接执行的逻辑，需要用useEffect等封装
            return <Bar result={result} />; // 3.render处可用React.useMemo，仅对必要的数据依赖作渲染
        };
- **不必要的深拷贝**，只处理需要的数据

react优化：
- 数据依赖，数据传递最小化，值传递必须使用的数据
- 必要的缓存

    - useMeno, useCallback

# 优化性能
## 资源包分析

工具：
- webpack-bundle-analyzer
- chrome devTools
- react devTools

webpack构建方式：
- entry入口轻量化
- 共享代码按照chunk自动导入
- 第三方资源包动态加载，按需引入
- 