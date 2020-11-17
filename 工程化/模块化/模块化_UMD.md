UMD（universal module definition）

核心思想就是：
- 先判断是否支持Node.js的模块（exports）是否存在，存在则使用Node.js模块模式。
- 在判断是否支持AMD（define是否存在），存在则使用AMD方式加载模块。

```
(function (root, factory) {
    if (typeof define === 'function' && define.amd){
        //AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        //Node, CommonJS之类的
        module.exports = factory(require('jquery'));
    } else {
        //浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //方法
    function myFunc(){};
    
    //暴露公共方法
    return myFunc;
}));
```