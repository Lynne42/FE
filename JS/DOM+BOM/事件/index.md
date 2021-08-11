- 判断滚轮事件是否停止

```
let mouseWheelTimer = null;
canvas.on("mouse:wheel", (e) => {
  Features.mouseWheelOn = true;
  if (Features.mouseWheelOn) {
    that.handleZoom(e);
  }
  clearTimeout(mouseWheelTimer);
  mouseWheelTimer = setTimeout(() => {
    console.log("停止");
    Features.mouseWheelOn = false;
    this.clearWhiteBorder();
  }, 66);
});
```

- 判断是鼠标滚动事件还是鼠标长按拖动事件
