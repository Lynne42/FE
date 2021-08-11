<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [问答](#%E9%97%AE%E7%AD%94)
  - [`Set和Map的区别`](#set%E5%92%8Cmap%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [`WeekSet和WeekMap的区别`](#weekset%E5%92%8Cweekmap%E7%9A%84%E5%8C%BA%E5%88%AB)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 问答
## `Set和Map的区别`
- Set是一种类似数组的数据结构，但是内部的成员是唯一的
- Map是一种类似对象的数据结构，通过key:value的形式存储，但是key的取值不仅仅是字符串，还可以是其他数据类型

## `WeekSet和WeekMap的区别`
- WeakSet与Set一样，不过，WeakSet内部只能存放对象， 不能存放其他类型值
- WeekMap与Map类似， 不过WeekMap只能使用非null对象作为键值, WeakMap的键名(非键值)所指向的对象，不计入垃圾回收机制