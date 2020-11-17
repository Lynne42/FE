# DOM事件模型
DOM事件流的三个阶段：
- 捕获
- 目标事件
- 冒泡

# 知识点
- **addEventListener**

        addEventListener(
            '事件类型', 
            () => {
                // 事件触发时的执行函数
            }, 
            Bool(事件是否在捕获或冒泡阶段执行)
        )

        - true  事件句柄在捕获阶段执行
        - false 默认。事件句柄在冒泡阶段执行
  - 可给一个元素重复添加多个监听事件
  - 使用removeEventListener移除该方式添加的监听函数

- **阻止事件冒泡**

        event.stopPropagation()
    - stopPropagation可以阻止事件冒泡，但不会影响改事件的其他监听方法执行
    - 执行完绑定到当前元素上的所有事件处理程序之后，停止执行所有后续节点的事件处理程序

- **阻止后续事件执行**
  
        e.stopImmediatePropagation()

    - 在执行完当前事件处理程序之后，停止当前节点以及所有后续节点的事件处理程序
  
## 例一：

    <div id="id">
        <button id="btn">Button</button>
    </div>
    <script>
        const $div = document.querySelector('#id')
        const $btn = document.querySelector('#btn')

        document.addEventListener('click', () => {
            console.log('document click')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 1')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 2')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 3')
        })

        $btn.addEventListener('click', () => {
            console.log('button click')
        })
    </script>
- 以上addEventListener监听事件均在冒泡阶段触发

所以结果是：

    button click
    div click 1
    div click 2
    div click 3
    document click

## 例二：

    <div id="id">
        <button id="btn">Button</button>
    </div>
    <script>
        const $div = document.querySelector('#id')
        const $btn = document.querySelector('#btn')

        document.addEventListener('click', () => {
            console.log('document click')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 1')
        })

        $div.addEventListener('click', (e) => {
            e.stopPropagation()
            console.log('div click 2')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 3')
        })

        $btn.addEventListener('click', () => {
            console.log('button click')
        })
    </script>
- 以上addEventListener监听事件均在冒泡阶段触发
- div增加阻止事件扩散函数 event.stopPropagation(), 即不能继续向上冒泡， document事件函数不能执行

所以结果是：

    button click
    div click 1
    div click 2
    div click 3

## 例三：

    <div id="id">
        <button id="btn">Button</button>
    </div>
    <script>
        const $div = document.querySelector('#id')
        const $btn = document.querySelector('#btn')

        document.addEventListener('click', () => {
            console.log('document click')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 1')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 2')
        },true)

        $div.addEventListener('click',(e) => {
            console.log('div click 3')
        },true)

        $btn.addEventListener('click', () => {
            console.log('button click')
        })
    </script>

- div2/3事件在捕获阶段触发， 其他在目标/冒泡阶段触发
  
所以结果是：

    div click 2
    div click 3
    button click
    div click 1
    document click
    
## 例四：

    <div id="id">
        <button id="btn">Button</button>
    </div>
    <script>
        const $div = document.querySelector('#id')
        const $btn = document.querySelector('#btn')

        document.addEventListener('click', () => {
            console.log('document click')
        })

        $div.addEventListener('click', (e) => {
            console.log('div click 1')
        })

        $div.addEventListener('click', (e) => {
            e.stopImmediatePropagation()
            console.log('div click 2')
            },true)

        $div.addEventListener('click',() => {
            console.log('div click 3')
            },true)

        $btn.addEventListener('click', () => {
            console.log('button click')
        })
    </script>
- div2/3事件在捕获阶段触发， 其他在目标/冒泡阶段触发
- e.stopImmediatePropagation()是加强版的 stopPropagation，不仅可以阻止向其他元素扩散，也可以在本元素内部阻止扩散. 即在捕获阶段阻止事件在子元素内传播
  
所以结果是：

    div click 2