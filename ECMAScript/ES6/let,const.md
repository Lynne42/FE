### ``var, let, const的区别``
- var声明的变量会挂载到window上，let和const的则不会
- var声明的变量存在变量提升， let和const的则不会，let和const存在暂存性死区
  
        var a = 100;
        if(1){
            a = 10;
            //在当前块作用域中存在a使用let/const声明的情况下，给a赋值10时，只会在当前作用域找变量a，
            // 而这时，还未到声明时候，所以控制台Error:a is not defined
            let a = 1;
        }
- let, const声明的变量适用于块作用域，var则不适用块作用域
        if(1){
            var a = 100;
            let b = 10;
        }

        console.log(a); // 100
        console.log(b)  // 报错：b is not defined  ===> 找不到b这个变量

- 同一作用域下，let, const不能声明同名变量，var可以
- const在声明的同时必须赋值，const变量不能重复赋值，如果声明的是引用类型变量，则可以新增值， 因为const定义的变量保证引用值不变，对于引用类型新增的是堆中的值， 引用指针并不改变