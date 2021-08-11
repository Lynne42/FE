<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [webpack](#webpack)
- [问答](#%E9%97%AE%E7%AD%94)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# webpack

- entry
  
  告诉webpack应该使用哪个文件作为入口，来构建内部的依赖图

- output

    告诉webpack在哪里输出它所创建的bundles

- loader

    是转译模块源代码的转换规则。 loader 被编写为，接受源代码作为参数的函数， 并返回这些转换过的新版本代码。

- plugin

    扩展webpack功能的插件，在webpack构建的生命周期节点上加入扩展hook，添加功能

    插件接口可以帮助用户直接触及到编译过程(compilation process)。 插件可以将处理函数(handler)注册到编译过程中的不同事件点上运行的生命周期钩子函数上。 当执行每个钩子时， 插件能够完全访问到编译(compilation)的当前状态。

- mode

    通过选择 development 或 production 之中的一个，来设置 mode 参数，你可以启用相应模式下的 webpack 内置的优化

- devtool

    设置不同环境下sourcemap的类型

- externals

    避免将某些包打包到bundle中，当使用这些包时， 在外部环境中引用

- resolve

    配置模块解析的相关内容，alias别名, extensions扩展名


# 问答
- [有哪些lodash, 分别是实现哪些问题的](./loader.md)
- webpack个版本的优化
- webpack loader, plugin有哪些/有啥区别/使用过程
- webpack运行原理
- webpack热更新
- webpack打包出来的东西是什么，怎么实现压缩
- import a，在webpack转化后是什么实现
- node_modules中的文件是怎么查找的
- loader和plugin的不同
```
作用不同：（1）loader让webpack有加载和解析非js的能力；（2）plugin可以扩展webpack功能，在webpack运行周期中会广播很多事件，Plugin可以监听一些事件，通过webpack的api改变结果。

用法不同：（1）loader在module.rule中配置。类型为数组，每一项都是Object；（2）plugin是单独配置的，类型为数组，每一项都是plugin实例，参数通过构造函数传入。
```

webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全

- `Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：`
```
（1）初始化参数：

    从webpack.config.js配置文件和 Shell 语句中读取与合并参数，得出最终的参数；

（2）创建编译器compiler:

    - 对上一步收集到的参数进行兼容和扩展等处理，获得一个标准的webpack配置参数options, 

    - 使用该参数初始化一个compiler编译器实例，

    - 为该实例添加iotions参数，增加一些node属性， 如日志，文件操作等

    - 注册options自定义plugin,调用apply方法并注入compiler实例

    - 注册所有内部plugin，调用apply方法并注入compiler实例

    - 在默认入口文件插件(EntryOptionPlugin)注册后，监听entryOption钩子

(3) 开始执行编译compiler.run

    执行对象的 run 方法开始执行编译；

（4）根据配置中的 entry 找出所有的入口文件；

（4）编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；

（5）完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；

（6）输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；

（7）输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。
```