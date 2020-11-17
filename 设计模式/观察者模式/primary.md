观察者模式又称发布订阅模式

比如日常中的JS事件订阅响应机制；redux-react中的状态管理机制

被观察对象维护一组观察者，当被观察者对象状态改变时，通过调用观察者的某个方法将这些变化通知观察者

class Stores {
    constructor() {
        this.oversvers = [];
    }
    subscribe(fn) {
        this.oversvers.push(fn);
    }
    unSubscribe(fn) {
        this.oversvers = this.oversvers.filter(item => item !== fn)
    }
    publish() {
        this.oversvers.forEach(item => {
            item()
        })
    }
}

## 参考
- [观察者模式](https://www.cnblogs.com/gradolabs/p/4786782.html)