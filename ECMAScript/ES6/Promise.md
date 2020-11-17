    console.log(1);
    const promise = new Promise((resolve, reject) => {
      console.log(2)
      resolve()
      console.log(3)
    })
    promise.then(() => {
      console.log(4)
    })
    console.log(5)

    // 1,2,3,5,4

## 问答

- `promise有哪些状态`

  pending, fulfield, rejected

- `说说promise，没有promise怎么办`
- `setTimeout和Promise的执行顺序`

  setTimeout， 异步执行，属于宏任务中的异步任务， 会被放到异步队列中等待执行

  Promise在定义时会立即执行，Promise then方法也会异步执行，但是它属于微任务，微任务先于红任务的异步任务执行

  顺序是： Promise -> Promise then -> setTimeout

- `简单实现一个promise`
- `将原生的ajax封装成promise`


## promise是什么

promise是异步编程的一种解决方案，
他有三种状态， pending(进行中)， fulfiled(已成功)，rejected(已失败)。状态只能从pending -> fulfiled 或者 pending -> rejected, 一旦状态改变就不会在变。

创建promise实例后会立即执行

比较传统的异步编程方式是 回调函数和事件

## 为什么会出现promise

- promise提供了一种将异步回调以同步的流程展示出来的一种方案，避免了层层嵌套的回调函数，增强了代码的可读性和可维护性

## promise存在的问题

- 一旦创建便无法取消
- 如果不设置回调函数，Promise内部抛出的错误，不会反应到外部

## 使用

    const p1 = new Promise(function (resolve,reject) {
      console.log(1)
      setTimeout(() => reject(new Error('fail')), 3000)
    })

    const p2 = new Promise(function (resolve,reject) {
      console.log(2)
      setTimeout(() => resolve(p1), 1000)
    })

    p2
      .then(result => console.log(result))
      .catch(error => console.log(error))

- **Promise实例创建后立即执行**(所以上述立即输出同步代码1，2，同时处理异步代码)

- **resolve函数的作用是将Promise对象的状态从pending状态变为fulfiled状态，异步操作成功后的回调，将异步操作的结果作为参数传递出去。resolve后面如果有代码， 仍会顺序执行**
- 
- **如果已经执行了resolve， 而resolve后面又执行reject， 则这个错误状态是无效的，因为上一步状态已经被修改成了成功，之后不能在被修改**

- **reject函数的作用是将Promise对象的状态从pending状态装变为rejected状态，异步操作失败后的回调，将失败爆出的错误作为参数传递出去**

- **then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。如果没有定义第二个回调函数， 则会被catch方法捕获**


代码解析：
- Promise实例创建后立即执行(所以上述立即输出同步代码1，2，同时处理异步代码)
- Promise内部处理异步函数，当定时器满足条件后，将setTimeout异步函数放入异步队列，等待执行
- 1秒后p2接收异步函数回调，返回的是p1, 此时p2的状态便由p1决定。3m后，接收到p1状态是rejected, 因此由catch捕获执行


## 方法

### then()

- then方法是实例的方法，定义在Promise原型上
- 为Promise实例添加状态改变时的回调函数

特点：

- then方法可以链式调用，处理一组按次序执行的回调函数

  例如调用两个接口a,b b接口依赖a接口。 可以在第一个then回调函数中， 调用另一个promise b,

### catch()

- 能够捕获promise异步操作中的错误，和then回调函数中发生的错误
- Promise 内部的错误不会影响到 Promise 外部的代码，不会导致进程退出，也不会终止代码执行
- catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法

### finally()

- 无论Promise状态如何， 最终都会执行该方法


## Promise方法

## Promise.all([])

使用：

接收一组Promise实例作为参数

const p = Promise.all([p1, p2, p3]);

**p的状态由p1、p2、p3决定，分成两种情况。**

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。


## Promise.race()

使用：

接收一组Promise实例作为参数

const p = Promise.race([p1, p2, p3]);

**p的状态**

(1) 只要p1、p2、p3之中有一个实例率先改变状态，不管是成功还是失败，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

## Promise.allSettled

使用：

- 接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。
- 只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束
- 状态总是pending转为fulfiled，没有rejected状态

**p的状态**
(1) 各个实例的状态会作为status值成为返回结果的一部分


## Promise.any()

使用：

接收一组Promise实例作为参数

const p = Promise.race([p1, p2, p3]);

**p的状态**
(1) 只要有一个promise实例状态变成fulfiled, 包装状态就会变成fulfiled
(1) 如果所有的promise实例状态都变成rejected, 包装状态才会变成rejected


## Promise.resolve()

将现有的对象转换为promise对象，该实例的状态是fulfield

## Promise.reject()

将现有的对象转换为promise对象，该实例的状态是rejected


## 使用promise实现ajax




## 例

    var sayhello = function (order, callback) {
      setTimeout(function () {
        console.log(order);
        callback();
      }, 1000);
    }
    sayhello("first", function () {
      sayhello("second", function () {
        sayhello("third", function () {
          console.log("end");
        });
      });
    });

转化为promise

    const sayhellop = function(data) {
      return new Promise(function(resolve, reject) {
        setTimeout(function () {
          console.log(data);
          resolve();
          // resolve执行后， 仍然会执行后面的代码， resolve并不包含return的功能，如果需要必须手动return
          console.log(data, data)
        }, 1000);
      })
    }

    sayhellop(1)
    .then(function() {
      return sayhellop(2)
    })
    .then(function() {
      return sayhellop(3)
    })
    .then(function() {
      return sayhellop(4)
    })

    .catch(function(error) {
      console.log(error)
    })