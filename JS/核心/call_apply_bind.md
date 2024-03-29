<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [call/apply/bind](#callapplybind)
- [call 和 apply 的相同点](#call-%E5%92%8C-apply-%E7%9A%84%E7%9B%B8%E5%90%8C%E7%82%B9)
- [call 和 apply 的异同点](#call-%E5%92%8C-apply-%E7%9A%84%E5%BC%82%E5%90%8C%E7%82%B9)
  - [call()](#call)
    - [应用案例](#%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B)
  - [apply()](#apply)
    - [应用案例](#%E5%BA%94%E7%94%A8%E6%A1%88%E4%BE%8B-1)
- [bind](#bind)
- [call/apply 和 bind 的相/异同点](#callapply-%E5%92%8C-bind-%E7%9A%84%E7%9B%B8%E5%BC%82%E5%90%8C%E7%82%B9)
- [模拟实现 call](#%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-call)
- [模拟实现 apply](#%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-apply)
- [模拟实现 bind](#%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0-bind)
- [问答](#%E9%97%AE%E7%AD%94)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# call/apply/bind

在 javascript 中，

call 和 apply 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是为了改变函数体内部 this 的指向。

bind方法虽然与call,apply的用法有点不同，但是其作用也是一样的，也是可以改变函数体内this的指向。

# call 和 apply 的相同点

    1. 都是Function.prototype上的方法
    2. 都是为了改变函数体内部this的指向
    3. 都接收两个参数， 第一个参数是函数运行时的 this 指向的对象
    4. 如果第一个参数是 空(不传)/null/undefined, 则默认传入 window 
    5. 如果第一个参数是一个原始值(number/boolean/string)，那么这个原始值会自动转成对应的包装对象，然后传入call/apply方法。

# call 和 apply 的异同点

## call()

call 方法接收两个参数， 第一个参数是函数运行时指定的this值， 第二个参数是一个参数列表。

call(thisArg, arg1, arg2);

函数实例的 call 方法， 可以指定函数内部的this指向， 即函数运行时的上下文， 然后在指定的作用域中， 调用该函数。

    function fn() {
        this.name = 'a';
        return this;
    }
    fn(); // window

    var obj = {};
    fn.call(obj); // {name: "a"}

    obj.name = 'b';
    fn.call(obj); // {name: "a"}
    fn.call('d'); String {"d", name: "a"}
    即函数fn运行时， 函数内部的this指代的是obj, 而不再是正常运行时指代的window
    
     
### 应用案例
调用对象的原生方法

    Object.prototype.toString.call('8ik')


## apply()

apply 方法接收两个参数， 第一个参数是函数运行时指定的this值， 第二个参数是一个数组。

apply(thisArg, [arg1, arg2]);

函数实例的 apply 方法， 可以指定函数内部的this指向， 即函数运行时的上下文， 然后在指定的作用域中， 调用该函数。

    function fn() {
        this.name = 'a';
        return this;
    }
    fn(); // window
    var obj = {
        name: 'b',
    }
    fn.apply(obj); // {name: "a"}
    即函数fn运行时， 函数内部的this指代的是obj, 而不再是正常运行时指代的window
### 应用案例
- **数组求最值**

        由于apply的特性， 我们可以直接对一个数组求最值
            var arr = [-2, 8, 0, 34, -99, 23];
            Math.max.apply(Math, arr); // 34
            Math.min.apply(Math, arr); // -99

        Math是javascript内置的一个对象， 拥有max(), min() 等方法， 接收一个参数列表， 返回参数列表的最值。

        正常工作中， 我们常常需要对一个数组求取最值， 这里即可使用apply方法。 正常情况下， Math.max(2, 0, 4), 函数max运行过程中上下文this指代的是Math, 由于这里我们还是想使用max方法，而只是改变参数列表为数组， 所以使用apply方法， 第一个参数依旧是Math, 而第二个参数传我们想要求职的数组即可。
- **合并数组**

        var arr1 = [1, 2, 3];
        var arr2 = ["a", "b", "c"];
        Array.prototype.push.apply(arr1, arr2);
        arr1:  [1, 2, 3, "a", "b", "c"]
        arr2:  ["a", "b", "c"]

- **将数组的空元素变成undefined**

        Array.apply(null, ['a', ,'b'])
        // [ 'a', undefined, 'b' ]

        空元素与undefined的差别在于，数组的forEach方法会跳过空元素，但是不会跳过undefined。因此，遍历内部元素的时候，会得到不同的结果。

        var a = ['a', , 'b'];
        function print(i) {
            console.log(i);
        }
        a.forEach(print); // a b
        Array.apply(null, a).forEach(print); // a undefined b
- **转换类似数组的对象**

    当然es6有新的方法将类数组转换为数组， 这个后续再说

        Array.prototype.slice.apply({0: 1, length: 2}); // [1, undefined]

# bind

定义：bind()方法会创建一个新函数，称为绑定函数，当调用这个绑定函数时，绑定函数会以创建它时传入 bind()方法的第一个参数作为 this，传入 bind() 方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。

    function fn(a) {
        console.log(a, this.name);
    }
    var obj = {
        name: 'a'
    }
    fn.bind(obj);
    // 运行该行代码后， 浏览器只是返回了一个新的函数， 由bind()函数创建， 函数中的this指代得是obj, 此时函数并没有直接运行。
    fn.bind(obj)(); 调用后才会运行。 // undefined 'a'
    fn.bind({name: 'b'}, 3)(); // 3 "b"

# call/apply 和 bind 的相/异同点
- 三者都可以改变函数内this的指向，可以接收多个参数， 第一个参数都是this的指向
- bind()方法会创建一个新的函数， 只有在需要的时候再调用， 而call/apply会立即执行该函数
- 第二个参数传入方式不同


# 模拟实现 call

    Function.prototype.myCall = function(targetThis) {
  
        const currentTarget = targetThis || window;
        
        currentTarget.fn = this;
        const params = [...arguments].slice(1);
        const result = currentTarget.fn(...params);
        
        delete currentTarget.fn
        
        return result
    
    } 

    function fn(a, b) {
        console.log(22, this);
        return a + b;
    }
    var obj = {
        name: 'a',
    }
    fn.selfCall(obj, 1, 2);
# 模拟实现 apply
apply的实现与call相似

    function fn(age) {
        this.age = age;
        console.log(1, this, this.name)
    }
    var data = {name: 'a'};
    Function.prototype.myApply = function(targetThis, arr) {
  
        const currentTarget = targetThis || window;
        
        currentTarget.fn = this;
        const params = Array.isArray(arr) ? arr : [];
        const result = currentTarget.fn(...arr);
        
        delete currentTarget.fn
        
        return result
        
    }
    fn.apply(data, [16]);
    fn.myApply(data, [16]);

# 模拟实现 bind
>https://github.com/mqyqingfeng/Blog/issues/12 可细看改文章

bind与call/apply不同， 他是调用的时候执行而不是立即执行， bind返回的是一个新的函数

bind方法：

- bind 方法创建一个新的绑定函数
- bind 方法重新绑定原函数的 this 值
- 在调用绑定函数时，将bind 中的给定参数作为原函数的参数
- thisArg
调用绑定函数时，将原函数的 this 绑定为 thisArg
- 如果将绑定函数作为构造函数，通过关键字 new 调用，则忽略参数 thisArg


```
Function.prototype.selfBind = function(targetObj) {
  const currentObj = targetObj || window;
  const currentArg = [...arguments].slice(1);
  const that = this;
  if(typeof that !== 'function') {
    return newError('错误')
  }
  function fn2() {}
  function fn() {
    const argu = [...arguments];
    // 判断是不是new调用
    const nowthis = fn2.prototype.isPrototypeOf(this) ? this : currentObj;
    return fn.apply(nowthis, [...currentArg, ...argu])
  }
  
  fn2.prototype = that.prototype;
  fn.prototype = new fn2();
  return fn
}

const o1 = {
  a: 1
}
function fn(c) {
  return {
    a: this.a,
    b: 'f1b',
    c: c
  }
}
fn.prototype.a='pa'
const rb1 = fn.bind(o1, 3)
console.log('rb1', rb1())
const rb2 = new rb1({a: 3});
console.log('rb2', rb2)
```


# 问答

- ``谈谈你对this, call, apply, bind的理解``
  
    [this](./this.md):

      - 如果是箭头函数调用， this取决于父执行上下文中的this(也就是包裹该函数的第一个父函数)
      - 全局环境下， 如果是非严格模式， 指向window, 严格模式下指向undefined
      - 如果是构造函数new调用，指向新生成的对象
      - 如果是.调用， 指向.前面的对象
      - 如果是call, apply调用，指向的是第一个参数

    call, apply, bind:

      - 都可以用来改变this的指向

    
