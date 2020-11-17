- [盒模型](./盒模型.md)
```
盒模型由4部分组成，content, padding, border, margin
标准盒模型与IE盒模型的的主要区别是给元素设置width, height属性的时候使用范围不同。
标准盒模型的width和height只包含content部分，IE盒模型的width和height属性值适用范围包括content+padding+border
通过改变box-sizing值改变盒模型
box-sizing: content-box  标准
box-sizing: border-box   IE
```
- 新特性
```
圆角，阴影
文字特效，渐变， transform
多背景
伪元素是::selection
媒体查询，多栏布局
border-image
```
- [BFC，IFC, FFC](./盒模型.md)
- [三角形](./三角形.md)
- [文本省略](./文本省略.md)
- [换行](./换行.md)
- [flex](./flex.md)
- [选择器，优先级](./选择器.md)
- [样式继承](./继承.md)
- [@at](./at.md)
- [伪元素和伪类](./伪类伪元素.md)
- 伪类 LVHA 
- position的值，分别对于什么定位
- CSS sprites
```
CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中

再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位

background-position可以用数字能精确的定位出背景图片的位置

这样可以减少很多图片请求的开销，因为请求耗时比较长；

请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了`http2`。

```