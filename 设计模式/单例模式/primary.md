<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [单例模式](#%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F)
- [实现单例模式需要解决的几个问题？](#%E5%AE%9E%E7%8E%B0%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F%E9%9C%80%E8%A6%81%E8%A7%A3%E5%86%B3%E7%9A%84%E5%87%A0%E4%B8%AA%E9%97%AE%E9%A2%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 单例模式
即class类的实例最多只有一个。

当需要一个对象去贯穿整个系统执行某些任务时，可以使用单例模式

## 实现单例模式需要解决的几个问题？
- 如何确定class只有一个实例？
- 如何简便的访问class的唯一实例？
- class如何控制实例化的过程？
- 如何将class的实例个数限制为1？

解决：
- 隐藏class的构造函数，避免多次实例化
- 通过暴露一个getInstance()来获取/创建唯一实例

        // 使用立即执行函数，创建局部作用域，并立即执行
        // 使用闭包保存局部作用域中的单例对象并返回该单利对象
        const singleInstance = (function() {
            function SingleInstanceClass() {

            }

            let instance = null;

            return {
                getInstance: function() {
                    if(!instance) {
                        instance = new SingleInstanceClass();
                    }
                    return instance
                }
            }
        })()



