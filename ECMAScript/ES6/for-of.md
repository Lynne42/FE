## for of
- for..of
  - 适用遍历数组/类数组对象/字符串/map/set等拥有迭代器对象的集合.
  - 但是不能遍历对象,因为没有迭代器对象.
  - 可以正确响应break、continue和return语句
- for-of循环不支持普通对象，但如果你想迭代一个对象的属性，你可以用for-in循环（这也是它的本职工作）或内建的Object.keys()方法


## for in
- 用于遍历对象，不适用于遍历数组(有可能不按数组的顺序返回)
- 会遍历出原型上的属性，需要使用hasOwnProperty