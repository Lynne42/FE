<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [教程](#%E6%95%99%E7%A8%8B)
  - [设置网格区域](#%E8%AE%BE%E7%BD%AE%E7%BD%91%E6%A0%BC%E5%8C%BA%E5%9F%9F)
  - [设置网格线](#%E8%AE%BE%E7%BD%AE%E7%BD%91%E6%A0%BC%E7%BA%BF)
  - [画布视窗回到初始位置](#%E7%94%BB%E5%B8%83%E8%A7%86%E7%AA%97%E5%9B%9E%E5%88%B0%E5%88%9D%E5%A7%8B%E4%BD%8D%E7%BD%AE)
  - [获取选中的组合模块，进行组合拆分、重新渲染](#%E8%8E%B7%E5%8F%96%E9%80%89%E4%B8%AD%E7%9A%84%E7%BB%84%E5%90%88%E6%A8%A1%E5%9D%97%E8%BF%9B%E8%A1%8C%E7%BB%84%E5%90%88%E6%8B%86%E5%88%86%E9%87%8D%E6%96%B0%E6%B8%B2%E6%9F%93)
  - [边界检测，图形移动时不能移出区域](#%E8%BE%B9%E7%95%8C%E6%A3%80%E6%B5%8B%E5%9B%BE%E5%BD%A2%E7%A7%BB%E5%8A%A8%E6%97%B6%E4%B8%8D%E8%83%BD%E7%A7%BB%E5%87%BA%E5%8C%BA%E5%9F%9F)
  - [合成组和拆分组](#%E5%90%88%E6%88%90%E7%BB%84%E5%92%8C%E6%8B%86%E5%88%86%E7%BB%84)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 教程
> fabric.js中文   https://github.com/Rookie-Birds/Fabric-Tutorial_zh-CN
> fabric.js原理   https://keelii.com/2021/05/08/fabricjs-internals/

## 设置网格区域

```
  const { width, height } = this.canvas;
  let gridDistanceX = width / gridSize; // rect width
  let gridDistanceY = height / gridSize; // rect height

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let rect = new window.fabric.Rect({
        left: i * gridDistanceX,
        top: j * gridDistanceY,
        width: gridDistanceX,
        height: gridDistanceY,
        name: `grid-${i}-${j}`,
        opacity: 0.4,
        ...RectGridConfig,
      });
      this.canvas.add(rect);
    }
  }

```

## 设置网格线

```
initGridLine = (gridSize = 32) => {
  const { width, height } = this.ctx;
  let gridDistanceX = width / gridSize;
  let gridDistanceY = height / gridSize;

  for (let i = 0; i < gridSize; i++) {
    const lineX = new window.fabric.Line(
      [0, i * gridDistanceX, width, i * gridDistanceX],
      {
        ...lineGridConfig,
        type: "line",
      }
    );
    const lineY = new window.fabric.Line(
      [i * gridDistanceY, 0, i * gridDistanceY, height],
      {
        ...lineGridConfig,
        type: "line",
      }
    );
    this.ctx.add(lineX);
    this.ctx.add(lineY);
  }
};
```


## 画布视窗回到初始位置
```
canvas.setViewportTransform([1, 0, 0, 1, 0, 0]);

```




## 获取选中的组合模块，进行组合拆分、重新渲染
card.getActiveObject().toActiveSelection();
card.renderAll()

## 边界检测，图形移动时不能移出区域
- 鼠标移动
```
checkBoudningBox(e) {
  const obj = e.target;
  if (!obj) {
    return;
  }
  console.log(obj);
  obj.setCoords();

  const objBoundingBox = obj.getBoundingRect();

  if (objBoundingBox.top < 0) {
    obj.set("top", objBoundingBox.height / 2);
    obj.setCoords();
  }
  if (objBoundingBox.left > this.canvas.width - objBoundingBox.width) {
    obj.set("left", this.canvas.width - objBoundingBox.width / 2);
    obj.setCoords();
  }
  if (objBoundingBox.top > this.canvas.height - objBoundingBox.height) {
    obj.set("top", this.canvas.height - objBoundingBox.height / 2);
    obj.setCoords();
  }
  if (objBoundingBox.left < 0) {
    obj.set("left", objBoundingBox.width / 2);
    obj.setCoords();
  }
}
```

- 键盘(或者按钮)上下左右移动
```
moveDragByKeyboard = (type, value) => {
  const { canvas, cHeight, cWidth } = this;
  const activeObj = canvas.getObjects()[0];
  if (!activeObj) {
    return;
  }
  // activeObj.setCoords()
  const { left, top, width, height } = activeObj.getBoundingRect();

  const space = parseInt(value) || 0;

  switch (type) {
    case "top":
      console.log("top", top <= 0 ? height / 2 : activeObj.top - space);
      activeObj.top = top <= 0 ? height / 2 : activeObj.top - space;
      activeObj.setCoords();
      break;
    case "right":
      activeObj.set(
        "left",
        left >= cWidth - width ? cWidth - width / 2 : activeObj.left + space
      );
      activeObj.setCoords();
      break;
    case "bottom":
      activeObj.top =
        top >= cHeight - height
          ? cHeight - height / 2
          : activeObj.top + space;
      activeObj.setCoords();
      break;
    case "left":
      activeObj.set("left", left <= 0 ? width / 2 : activeObj.left - space);
      activeObj.setCoords();

      break;
    default:
      break;
  }
  this.canvas.renderAll();
};
```

## 合成组和拆分组
- 合成组
```
new fabric.Group()
```
- 拆分组

- 组销毁时， 保留组内元素的位置
