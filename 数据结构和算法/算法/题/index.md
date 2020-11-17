
```
// nums 
[1, -1, 2,-2, -2, -3,1,-2,0,0,0, -2]
fn(nums, n)
// 找出两项相加为n 且不重复的项
// n = 0
[[1, -1], [2, -2], [0, 0]]
```

```
compose(fn1, fn2, fn3, fn4)(x)

function fn() {
  const arr = [...arguments];
  return function(x) {
    let result = x
    for(let i=arr.length-1;i>=0;i--) {
      result = arr[i](result)
    }
    return result
  }
}

function fn1() {
  const arr = [...arguments];
  return function(x) {
    let result = arr.reduceRight(function(pre, current, index, ar) {
      return current(pre)
    }, x)
    
    return result
  }
}

function f1(x) {
  return x+1
}
function f2(x) {
  return x+1
}
function f3(x) {
  return x+1
}

const a = fn(f1, f2,f3)(0)
console.log(a)

```