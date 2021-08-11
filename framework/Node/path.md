<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [例子](#%E4%BE%8B%E5%AD%90)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Description: path模块
 * @Author: qiaolingniu
 * @LastEditors: qiaolingniu
 * @Date: 2019-08-09 10:24:26
 * @LastEditTime: 2019-08-09 10:27:01
 -->

### 例子

目录结构:

    syntax/
        -nodejs/
            -1.findLargest.js
            -2.path.js
            -3.fs.js
        -regs
            -regx.js
            -test.txt

在 path.js 里面我们写这些代码，看看输出是什么：

    const path = require('path')
    console.log('__dirname：', __dirname)
    console.log('__filename：', __filename)
    console.log('process.cwd()：', process.cwd())
    console.log('./：', path.resolve('./'))
    
在当前目录下也就是nodejs目录运行 node path.js，我们看看输出结果：

    __dirname：     /Users/jawil/Desktop/nodejs/demo/ES6-lottery/syntax/nodejs
    
    __filename：    /Users/jawil/Desktop/nodejs/demo/ES6-lottery/syntax/nodejs/2.path.js
    
    process.cwd()： /Users/jawil/Desktop/nodejs/demo/ES6-lottery/syntax/nodejs
    
    ./：            /Users/jawil/Desktop/nodejs/demo/ES6-lottery/syntax/nodejs