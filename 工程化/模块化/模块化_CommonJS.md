<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [CommonJS - 同步加载，服务器端的模块化规范](#commonjs---%E5%90%8C%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E7%9A%84%E6%A8%A1%E5%9D%97%E5%8C%96%E8%A7%84%E8%8C%83)
  - [实现原理：](#%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86)
  - [特点](#%E7%89%B9%E7%82%B9)
  - [使用场景：](#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF)
- [使用方法](#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## CommonJS - 同步加载，服务器端的模块化规范

随着Node.js的到来，CommonJS规范的落地以及各种前端工具、解决方案的出现，这样成为了JS模块化开发的一个分水岭，引用一段描述：

>从 1999 年开始，模块化探索都是基于语言层面的优化，真正的革命从 2009 年 CommonJS 的引入开始，前端开始大量使用预编译。

### 实现原理：
- **一个单独的文件就是一个独立的模块， 每一个模块都是一个单独的作用域**
- **在一个模块中创建的属性和方法默认都是私有的， 对其他模块是不可见的**
- **加载模块采用同步方式， 加载完成后才能进行后续操作** 
- **加载模块使用require方法, 该方法读取一个文件并执行， 返回文件内部的exports对象**

### 特点
- CommonJS模块输出的是一个值的复制， 即一旦输出一个值，模块内部的变化就影响不到这个值
- CommonJS模块是运行时加载
### 使用场景：

由于CommonJS采用同步加载方式， 主要适用于服务器端编程， 因为文件都存在本地磁盘， 加载时间可以忽略， 同步加载不回产生阻塞问题

但是这对于浏览器环境来说就不那么使用了， 我们知道浏览器所需资源需要从远程浏览器加载， 而同步加载的规范存在阻塞问题。也就是说浏览器加载资源必须采用异步加载的方式， 这样AMD(异步加载定义)模块化方式应运而生， 我们在接下来的文章中介绍[模块化-AMD](./模块化_AMD.md)

## 使用方法

