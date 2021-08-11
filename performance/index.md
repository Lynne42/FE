<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [引发性能问题的原因](#%E5%BC%95%E5%8F%91%E6%80%A7%E8%83%BD%E9%97%AE%E9%A2%98%E7%9A%84%E5%8E%9F%E5%9B%A0)
  - [资源包过大](#%E8%B5%84%E6%BA%90%E5%8C%85%E8%BF%87%E5%A4%A7)
  - [代码耗时长](#%E4%BB%A3%E7%A0%81%E8%80%97%E6%97%B6%E9%95%BF)
- [优化性能](#%E4%BC%98%E5%8C%96%E6%80%A7%E8%83%BD)
  - [资源包分析](#%E8%B5%84%E6%BA%90%E5%8C%85%E5%88%86%E6%9E%90)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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