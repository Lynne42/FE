<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [严格模式](#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### 严格模式

    <React.StrictMode>XXX<React.StrictMode>

添加严格模式会对对子组件进行检查：
- 检查不安全的/过时的生命周期
- 检查过时的API(findDOMNode, ref='', context)