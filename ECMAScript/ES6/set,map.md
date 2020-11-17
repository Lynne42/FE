# 问答
## `Set和Map的区别`
- Set是一种类似数组的数据结构，但是内部的成员是唯一的
- Map是一种类似对象的数据结构，通过key:value的形式存储，但是key的取值不仅仅是字符串，还可以是其他数据类型

## `WeekSet和WeekMap的区别`
- WeakSet与Set一样，不过，WeakSet内部只能存放对象， 不能存放其他类型值
- WeekMap与Map类似， 不过WeekMap只能使用非null对象作为键值, WeakMap的键名(非键值)所指向的对象，不计入垃圾回收机制