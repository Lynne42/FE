<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [new命令的原理](#new%E5%91%BD%E4%BB%A4%E7%9A%84%E5%8E%9F%E7%90%86)
- [模拟实现new](#%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0new)
- [new.target](#newtarget)
- [new命令的基本使用](#new%E5%91%BD%E4%BB%A4%E7%9A%84%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## new命令的原理
使用**new**命令var o = new Foo();时， 他后面的函数会一次执行下面的步骤：
1. **创建一个空对象， 作为将要返回的对象实例**

    var o = new Object();
2. **将这个空对象的原型， 指向构造函数的prototype属性**

    Object.getPrototypeOf(0) == Foo.prototype
    // o.__proto__ = Foo.prototype;

3. **将这个空对象赋值给函数内部的this，即修改函数内部this指向**

    Foo.call(o);
4. **开始执行函数内部的代码**

5. **有返回值时的操作**

    - 如果return语句返回的是this, 则生成的实例就是内部创建的对象， 与不用return语句返回相同；

    - 如果return语句返回的是不相关的对象， 则生成的实例就是这个不相关对象；

    - 如果return语句返回的不是对象， 则默认忽略return语句， 返回创建的对象

            
## 模拟实现new

    依据上面new命令的原理， 我们来模拟实现一下new

    function selfNew(fn) {
        var obj = {}; // 创建空对象
        obj.__proto__ = fn.prototype; // 2. 修改原型指向
        var res = fn.apply(obj, [...arguments].slice(1)); // 3和4.改变this指向并执行
        return typeof res === 'object' ? res : obj; // 5.构造函数有返回值的时候的操作
    }
    function selfNew2() {
        // 1、获得构造函数，同时删除 arguments 中第一个参数
        Con = [].shift.call(arguments);
        // 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
        var obj = Object.create(Con.prototype);
        // 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
        var ret = Con.apply(obj, arguments);
        // 4、优先返回构造函数返回的对象
        return ret instanceof Object ? ret : obj;
    };
    function Fn(name) {
        this.name = name;
        return 3
    }
    Fn.prototype.say = function() {
        console.log('hello')
    }

    var f2 = selfNew(Fn, 'f2');
    console.log(f2)

## new.target
函数内部可以使用new.target属性。如果当前函数是new命令调用，new.target指向当前函数，否则为undefined。

    function f() {
        console.log(new.target === f);
    }

    f() // false
    new f() // true
使用这个属性，可以判断函数调用的时候，是否使用new命令。

    function f() {
        if (!new.target) {
            throw new Error('请使用 new 命令调用！');
        }
    // ...
    }

    f() // Uncaught Error: 请使用 new 命令调用！
上面代码中，构造函数f调用时，没有使用new命令，就抛出一个错误。

## new命令的基本使用
**new**命令的作用是执行构造函数， 返回一个对象实例

    function Comment() {
        this.comment = '哈哈';
    }
    const comment1 = new Comment();

构造函数可以不传入参数。执行new 命令后创建一个空对象， 同时空对象的__proto__属性指向函数的prototype属性， 建立起实例对象与构造函数的连接。然后使用新创建的空对象替换函数内部的this, 执行函数内部代码赋值给空对象属性和方法。 这里新创建的对象即有属性comment;


    function Comment(commentid, comment) {
        this.commentid = commentid;
        this.comment = comment;
        this.showComment = function() {
            console.log(this.comment);
        }
    }
    const comment1 = new Comment('20180808110302', '我的');
    comment1.showComment(); // '我的'
使用new命令时， 构造函数也可以接收参数； 实现逻辑同上

    function Comment() {
        this.comment = '哈哈';
    }
    // const comment1 = new Comment(); comment1: {comment: "哈哈"}

    function Comment() {
        this.comment = '哈哈';
        return {name: 's'}
    }
    // const comment1 = new Comment(); comment1: {name: 's'}

    function Comment() {
        this.comment = '哈哈';
        return 2
    }
    // const comment1 = new Comment(); comment1: {comment: "哈哈"}


构造函数内部可以实现return语句; 

如果return语句返回的是this, 则生成的实例就是内部创建的对象， 与不用return语句返回相同；

如果return语句返回的是不相关的对象， 则生成的实例就是这个不相关对象；

如果return语句返回的不是对象， 则默认忽略return语句， 返回创建的对象

这里返回的都是对象的地址

    function Comment() {
        this.comment = '哈哈';
    }
    const comment1 = Comment();
如果创建的实例的时候缺省了new关键字， 则构造函数相当于普通的函数调用；这时， 函数内部的this指代全局变量window，但是如果在严格模式下， 默认是undefined, 此时给undefined添加属性就会报错



