<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [```谈谈你对模块化开发的理解？```](#%E8%B0%88%E8%B0%88%E4%BD%A0%E5%AF%B9%E6%A8%A1%E5%9D%97%E5%8C%96%E5%BC%80%E5%8F%91%E7%9A%84%E7%90%86%E8%A7%A3)
- [```有几种模块加载方案？```](#%E6%9C%89%E5%87%A0%E7%A7%8D%E6%A8%A1%E5%9D%97%E5%8A%A0%E8%BD%BD%E6%96%B9%E6%A1%88)
- [```AMD和CMD规范的区别```](#amd%E5%92%8Ccmd%E8%A7%84%E8%8C%83%E7%9A%84%E5%8C%BA%E5%88%AB)
- [```ES6 模块与 CommonJS 模块、AMD、CMD 的差异```](#es6-%E6%A8%A1%E5%9D%97%E4%B8%8E-commonjs-%E6%A8%A1%E5%9D%97amdcmd-%E7%9A%84%E5%B7%AE%E5%BC%82)
- [```requireJS的核心原理是什么```](#requirejs%E7%9A%84%E6%A0%B8%E5%BF%83%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### ```谈谈你对模块化开发的理解？```

模块可以理解为一个可以独立运行的单元， 是实现一个功能的一系列方法的集合。可以接收外部的参数输入，同时可以导出自己的方法供其他模块使用。



### ```有几种模块加载方案？```

- CommonJs

      通过require来引入模块，通过module.exports输出模块

      采用同步加载的方式来加载模块

- AMD

      采用异步加载和回调的方式加载模块
      使用difine定义模块，可输入参数模块名， 模块依赖， 回调函数
      使用require加载模块
      具体实现： require.js

- CMD
    
      采用异步模块加载的方式加载模块
      define(function(require, exports, module){
        var a = require('a.js');
        exports.doSomeing = function() {
            console.log('a-dosomeing');
        }
      })
      就近引入依赖项，即使用时才引入对象的模块
      具体实现：sea.js
      
- import、export

### ```AMD和CMD规范的区别```
- 模块定义时对依赖的处理不同

      AMD在定义模块时就需要声明其依赖的模块；
      CMD是就近依赖，只有在需要某个模块时才去require该模块；

- 对依赖模块的执行时机不同
      
      AMD和CMD对模块的加载方式都是异步加载
      AMD在依赖模块加载完成后就直接执行依赖模块，依赖模块的执行顺序和我们定义的顺序不一定一致
      CMD在依赖模块加载完成后并不执行只是下载而已，等到所有的依赖模块加载好之后， 进入回调函数逻辑，遇到require语句的时候才执行对应的模块，这样执行顺序与定义顺序会保持一致
实现

    define(function(require, exports, module) {
        // 引用模块
        var a = require("./a");
        a.doSomething();
        // ...
        var b = require("./b"); // 依赖可以就近书写
        b.doSomething();
        // ...
        // 导出模块
        exports.do = function() {

        }
        // 或者
        module.exports = {
            doSomeing: function() {
                console.log('b-dosomeing');
            }
        }
    });

    // AMD 默认推荐
    define(["./a", "./b"], function(a, b) {
        // 依赖必须一开始就写好
        a.doSomething();
        // ...
        b.doSomething();
        // ...

        return {}
    });

### ```ES6 模块与 CommonJS 模块、AMD、CMD 的差异```   

- CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用

      CommonJS一旦输出值之后，模块内部的变化不会影响到这个值
      ES6模块运行机制是JS引擎静态分析时遇到模块加载命令import,会生成一个值引用，等到脚本真正执行时，再根据这个制度引用，到被加载的模块中取值

- CommonJS模块时运行时加载，ES6模块在编译时便会引入依赖模块代码
  
      CommonJS模块就是对象，即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法
      ES6模块不是对象，它的对外接口只是一种静态定义，在代码解析阶段就会生成

### ```requireJS的核心原理是什么```
require.js的核心原理是通过动态创建script脚本来异步加载模块，然后对每个脚本的load事件进行监听，如果脚本都加载完了再调用回调函数


  