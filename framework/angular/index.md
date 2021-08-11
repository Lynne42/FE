<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [常用的装饰器](#%E5%B8%B8%E7%94%A8%E7%9A%84%E8%A3%85%E9%A5%B0%E5%99%A8)
- [生命周期](#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)
- [组件通信](#%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1)
- [](#)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 常用的装饰器
```
component  组件
Input  父到子数据输入输入
Output  子到父 数据传出
Directive   指令
pipe   管道
ngModule  模块
```

# 生命周期
- 生命周期钩子
```
ngOnChanges -> ngOnInit -> ngDoCheck -> ngAfterContentInit -> ngAfterContentChecked -> ngAfterViewInit -> ngAfterViewChecked -> ngOnDestroy
```
- 组件初始化的时候生命周期钩子函数执行顺序
- 父子组件初始化时组件生命周期钩子执行顺序
- 父子组件更新时生命周期钩子执行顺序

# 组件通信
- 父 -> 子
- 子 -> 父
- 子 -> 子

# 
