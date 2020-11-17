# 几个题目

点击 BUTTON 打印的结果是：

## 题目一：

    export default class App extends React.Component {
      innerClick = () => {
          console.log('A: react inner click.')
      }

      outerClick = () => {
          console.log('B: react outer click.')
      }

      componentDidMount() {
          document.getElementById('outer').addEventListener('click', () => {
              console.log('C: native outer click')
          })
          document.getElementById('inner').addEventListener('click', () => {
              console.log('D: native inner click')
          })
      }

      render() {
          return (
          <div id='outer' onClick={this.outerClick}>
              <button id='inner' onClick={this.innerClick}>
                  BUTTON
              </button>
          </div>
          )
      }
    }
**答案：D C A B**

- React事件使用事件委托， 监听事件绑定在document上，在冒泡阶段触发
- 生成真实DOM后， 给元素绑定原生事件监听函数， 在冒泡阶段触发
- 顺序：D -> C -> A -> B
- D -> C -> A，B, 冒泡
- A -> B 同级扩散


## 题目二：

    export default class App extends React.Component {
      innerClick = (e) => {
        console.log('A: react inner click.')
        e.stopPropagation()
      }

      outerClick = () => {
        console.log('B: react outer click.')
      }

      componentDidMount() {
        document.getElementById('outer').addEventListener('click', () => {
          console.log('C: native outer click')
        })
        document.getElementById('inner').addEventListener('click', () => {
          console.log('D: native inner click')
        })
      }

      render() {
        return (
          <div id='outer' onClick={this.outerClick}>
            <button id='inner' onClick={this.innerClick}>
              BUTTON
            </button>
          </div>
        )
      }
    }
**答案：D C A**

## 题目三：

    export default class extends React.Component {
      constructor(props) {
        super(props)
        document.addEventListener('click', () => {
          console.log('C: native document click')
        })
      }

      innerClick = () => {
        console.log('A: react inner click.')
      }

      outerClick = () => {
        console.log('B: react outer click.')
      }

      render() {
        return (
          <div id='outer' onClick={this.outerClick}>
            <button id='inner' onClick={this.innerClick}>
              BUTTON
            </button>
          </div>
        )
      }
    }
**答案：C A B**

## 题目四：

    export default class extends React.Component {
      constructor(props) {
        super(props)
        document.addEventListener('click', () => {
          console.log('C: native document click')
        })
      }

      innerClick = (e) => {
        console.log('A: react inner click.')
        e.nativeEvent.stopImmediatePropagation()
      }

      outerClick = () => {
        console.log('B: react outer click.')
      }

      componentDidMount() {
        document.addEventListener('click', () => {
          console.log('D: native document click')
        })
      }

      render() {
        return (
          <div id='outer' onClick={this.outerClick}>
            <button id='inner' onClick={this.innerClick}>
              BUTTON
            </button>
          </div>
        )
      }
    }
**答案：C A B**

