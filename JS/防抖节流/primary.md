
## 防抖

### 概念

    在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

### 理解

    假设设置300ms后执行回调函数，如果在这300ms内又触发了事件， 则会从此时重新计时300ms后执行事件

### 理解例子

    let biu = function () {
        console.log('biu biu biu',new Date().Format('HH:mm:ss'))
    }

    let boom = function () {
        console.log('boom boom boom',new Date().Format('HH:mm:ss'))
    }


        setInterval(debounce(biu,500),1000)  
    定时器， 每隔1s触发一次函数, debounce设置隔500ms之后去执行biu函数, 因此在定时器触发函数的时候已经超过了指定间隔， 所以bui函数每秒执行一次

    
        setInterval(debounce(boom,2000),1000)
    
    定时器， 每隔1s触发一次函数， debounce设置隔2000ms之后去执行boom函数, 此时当定时器第二次触发事件时， 仍处在等待的间隔中，会重新计时，等待2000ms后执行第二次触发的事件， 以此类推， 一直处在重新计时的过程中， 所以boom函数始终无法执行
    
### 应用场景

- input， search 输入， 在用户停止输入的时候再做相应的处理
- window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
- 用在点击事件上，避免多次点击导致向后端发送多次请求
    
## 节流

### 概念

    规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效

### 核心

    让一个函数不要执行得太频繁，减少一些过快的调用来节流

### 理解

    间隔指定时间执行一次函数

### 理解例子

    let biubiu = function () {
        console.log('biu biu biu', new Date().Format('HH:mm:ss'))
    }

        setInterval(throttle(biubiu,1000),10)
    
    定时器每隔10ms触发一次， throttle设置每隔1s执行一次biubiu函数， 最终输入的是一系列秒级时间

### 应用场景

- 鼠标不断点击触发，mousedown(单位时间内只触发一次)
- 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断

### 函数实现

简单实现：

防抖：
function debounce(fn, wait) {
    let time = null;

    return function() {
        const args = arguments;
        if(time) {
            clearTimeout(time);
            time = null;
        }

        time = setTimeout(() => {
            return fn.apply(this, args)
        }, wait) 
    }
}

节流
function throttle(fn, wait) {
    let preTime = Date.now();
    return function() {
        const args = arguments;
        let nowTime = Date.now();

        if(nowTime - preTime >= wait ) {
            preTime = Date.now();
            return fn.apply(this, args);
        }
    }
}