```
const [a, setA] =useState(1)
```

自实现：

```
let value;
function useState(initial) {
    value = value || initial
    function setValue(v) {
        value = v
    }
    return [value, setValue]
}
```
不过这样useState只能使用一次， 保存以这个值，如果要保存多个值， 需要将每个初始化的值都保存

```
let allAalue = [];
let index = 0;
function useState(initial) {
    let currentIndex, value;
    value = allAalue[currentIndex] || initial;
    function setValue(v) {
        allAalue[currentIndex] = v
        render()
    }
    return [value, setValue]
}

function App() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);
    return (
        <>
            <button onClick={() => setA(a+1)}>a+</button>
            <button onClick={() => setB(b+1)}>b+</button>
        <>
    )
}
function render() {
    index=0
    ReactDOM.render(<App/>, document.getElementById('root'))
}
```
