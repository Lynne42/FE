### ``js的作用域和作用域链``
  
    [作用域](./运行机制/作用域.md) :
    作用域指的是变量的可访问范围,在js中作用域可分为全局作用域、函数作用域、块作用域。

    [作用域链](./运行机制/作用域.md) :
    作用域链保证了对执行环境中有权访问的变量和函数的有序访问。通过作用域链，可以访问到当前及上层环境的变量和函数。

    作用域链的本质是一个指向变量对象的指针列表。

    变量对象是一个包含了执行环境中所有变量和函数的对象。

    作用域链的前端始终是当前执行上下文的变量对象。全局执行上下文的变量对象始终是作用域链的最后一个对象。

    当查找一个变量时， 如果当前执行环境中没有找到，会沿着作用域链向后查找

### ``JS获取原型的方法``
   
      p.propto
      p.constructor.prototype
      Object.getPrototypeOf(p)

### ``谈谈JS的运行机制``
- JS单线程
- JS采用[事件循环机制](./执行阶段.md)实现异步执行

1. JS是单线程运行的， JS代码加载后，会先对代码进行解析再执行，JS顺序解析代码通过不同的函数调用生成执行上下文并推入栈中，保证代码的有序执行
2. 在执行同步代码的过程中，如果遇到异步事件，例如异步数据请求，定时器等， 会给到对应的地方去处理， 带满足触发条件时，会将事件处理程序推送到异步队列中等待执行
3. 同步事件执行完毕后，处理异步队列中的事件
4. 任务可分为宏任务和微任务，当宏任务中同步任务执行完成后， 会判断是否有微任务需要执行， 如果有微任务则推入到主线程形成新的红任务执行， 如果没有， 判断是否有异步任务需要执行， 如果有则主线程形成新的红任务执行， 如果没有，继续循环判断是否有微任务


### ``arguments对象是什么？``
arguments是函数接收的参数值的集合，类似数组有lenght属性，可以像数组一样通过索引值访问单个值，但是没有数组内置方法， 像push,forEach, map, filter等

箭头函数没有arguments对象，可以使用rest扩展运算符获取参数(...args)

arguments 转换为数组：

- Array.prototype.slice.call(arguments)
- Array.from(arguments)
- [...arguments]

### ``V8引擎的垃圾回收机制``

### ``哪些操作会造成内存泄漏``

- 以外的全局变量

  let a = b = 0; 此时b会被创建成全局变量

- 未清理的定时器
- 对DOM元素的引用
获取一个DOM元素的引用， 但在其他地方删除了这个DOM元素，但是并没有手动清除引用
- 闭包

### `实现call, apply, bind`
[实现call, apply, bind](./call_apply_bind.md)

### `instanceof的原理是什么，如何实现`
instanceof可以判断数据的类型，即通过判断某个对象是不是另一个对象的实例， 内部机制是通过判断对象的原型链上是不是能找到类型的prototype， 即 a._propto_ === A.prototype

实现：

    function myInstanceof(left, right) {
      if(typeof left !== 'object' || left === null) {
        return false
      }
      let leftProto = Object.getPrototypeOf(left); // left._propto_
      while (true) {
        if (left === null || left === undefined) {
          return false
        }
          
        if (leftProto === right.prototype) {
          return true
        }
          
        leftProto = Object.getPrototypeOf(leftProto);
      }
    }



