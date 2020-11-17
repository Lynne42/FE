### ``什么是DOM和BOM``

    DOM: 指的是文档对象模型，它指的是把文档当做一个对象来看待，这个对象定义了处理网页内容的方法和接口

    BOM: 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器交互的方法和接口。

    BOM 的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局） 对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对 象的子对象。


### ``三种事件模型是什么？``
  
### ``事件委托是什么？``

### ``什么是事件传播？``

### `写一个通用的事件监听器函数`

    const EventUtils = {
    // 添加事件
    addEvent: function(element, type, handler) {
        if (element.addEventListener) {
        element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
        } else {
        element["on" + type] = handler;
        }
    },

    // 移除事件
    removeEvent: function(element, type, handler) {
        if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
        } else if (element.detachEvent) {
        element.detachEvent("on" + type, handler);
        } else {
        element["on" + type] = null;
        }
    },

    // 获取事件目标
    getTarget: function(event) {
        return event.target || event.srcElement;
    },

    // 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event
    getEvent: function(event) {
        return event || window.event;
    },

    // 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）
    stopPropagation: function(event) {
        if (event.stopPropagation) {
        event.stopPropagation();
        } else {
        event.cancelBubble = true;
        }
    },

    // 取消事件的默认行为
    preventDefault: function(event) {
        if (event.preventDefault) {
        event.preventDefault();
        } else {
        event.returnValue = false;
        }
    }
    };