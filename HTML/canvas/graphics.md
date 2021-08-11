<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [判断一个多边形是凸多边形还是凹多边形](#%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E5%A4%9A%E8%BE%B9%E5%BD%A2%E6%98%AF%E5%87%B8%E5%A4%9A%E8%BE%B9%E5%BD%A2%E8%BF%98%E6%98%AF%E5%87%B9%E5%A4%9A%E8%BE%B9%E5%BD%A2)
- [判断两个多边形的关系](#%E5%88%A4%E6%96%AD%E4%B8%A4%E4%B8%AA%E5%A4%9A%E8%BE%B9%E5%BD%A2%E7%9A%84%E5%85%B3%E7%B3%BB)
  - [判断图形之间是否有交集](#%E5%88%A4%E6%96%AD%E5%9B%BE%E5%BD%A2%E4%B9%8B%E9%97%B4%E6%98%AF%E5%90%A6%E6%9C%89%E4%BA%A4%E9%9B%86)
  - [判断两个图形是否是包含关系](#%E5%88%A4%E6%96%AD%E4%B8%A4%E4%B8%AA%E5%9B%BE%E5%BD%A2%E6%98%AF%E5%90%A6%E6%98%AF%E5%8C%85%E5%90%AB%E5%85%B3%E7%B3%BB)
- [图形 + 图形 => 新图形  （类比 canvas 2d globalCompositeOperation 效果）](#%E5%9B%BE%E5%BD%A2--%E5%9B%BE%E5%BD%A2--%E6%96%B0%E5%9B%BE%E5%BD%A2--%E7%B1%BB%E6%AF%94-canvas-2d-globalcompositeoperation-%E6%95%88%E6%9E%9C)
- [判断一个点是否在某个图形内](#%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E7%82%B9%E6%98%AF%E5%90%A6%E5%9C%A8%E6%9F%90%E4%B8%AA%E5%9B%BE%E5%BD%A2%E5%86%85)
- [区域选择和取消选择](#%E5%8C%BA%E5%9F%9F%E9%80%89%E6%8B%A9%E5%92%8C%E5%8F%96%E6%B6%88%E9%80%89%E6%8B%A9)
- [多边形选区扣洞](#%E5%A4%9A%E8%BE%B9%E5%BD%A2%E9%80%89%E5%8C%BA%E6%89%A3%E6%B4%9E)
- [将相交多边形合并为一个多边形](#%E5%B0%86%E7%9B%B8%E4%BA%A4%E5%A4%9A%E8%BE%B9%E5%BD%A2%E5%90%88%E5%B9%B6%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%A4%9A%E8%BE%B9%E5%BD%A2)
- [裁剪 和 反裁剪](#%E8%A3%81%E5%89%AA-%E5%92%8C-%E5%8F%8D%E8%A3%81%E5%89%AA)
- [绘制及移动对象不能重叠](#%E7%BB%98%E5%88%B6%E5%8F%8A%E7%A7%BB%E5%8A%A8%E5%AF%B9%E8%B1%A1%E4%B8%8D%E8%83%BD%E9%87%8D%E5%8F%A0)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 判断一个多边形是凸多边形还是凹多边形
> http://cxyzjd.com/article/qq_18192161/90403353
```
public static bool IsConcavePolygon(Vector2[] points)
{
	for(int i=0;i<points.Length;i++)
	{
		Vector2 v1,v2;
		//向量1
		if(i==0)
			v1=points[points.Length-1]-points[i];
		else
			v1=points[i-1]-points[i];
		//向量2
		if(i==points.Length-1)
			v2=points[0]-points[i];
		else
			v2 = points[i+1]-points[i];
		//计算叉积，根据三维叉积公式计算，z轴为0 
		float corss = v1.x*v2.y-v1.y*v2.x;
		if(corss>0)
			return true;
	}
	return false;
}
```

# 判断两个多边形的关系
- 相交
- 重叠
- 包含

// 测试图形与图形是否相交
> https://juejin.cn/post/6844904025587105800#heading-5
> https://www.dazhuanlan.com/2019/11/04/5dbf0b42c600a/
> https://www.jianshu.com/p/601d83a7c7b7

## 判断图形之间是否有交集
```
fabric.js给出了相应的方法： intersectsWithObject， 查看如何实现， 但是对于凹多边形， 判断是错误的
```
## 判断两个图形是否是包含关系
```
fabric.js给出了相应的方法： isContainedWithinObject 查看如何实现
```

# 图形 + 图形 => 新图形  （类比 canvas 2d globalCompositeOperation 效果）
- 图形合并(取并集部分)
- 图形交集(取交集部分)
- 图形去交集(取两个图形非交集的部分)
- 图形裁剪

# 判断一个点是否在某个图形内
- 判断点是否在圆内/矩形内/多边形内

  思路：  判断点击点的位置与圆心的位置，获取两个位置的距离绝对值，判断这个绝对值是否 小于 指定值(比如圆半径)
  ```
    const startPoint = 圆点;
    const currentPoint = 当前点击点;
    const radius = Math.floor(circlePointConfig.radius / 2);
    if (
      Math.abs(startPoint.x - currentPoint.x) <= radius &&
      Math.abs(startPoint.y - currentPoint.y) <= radius
    ) {
      return true;
    }
    return false;
  ```
- 判断点是否在矩形内
- 判断点是否在多边形内

# 区域选择和取消选择
- 方式1： 2d 效果 globalCompositeOperation 属性， 处理重叠等等
- 方式2： 计算多边形的形状并修改多边形的点， 生成新的多边形
```
```

# 多边形选区扣洞
- 使用 canvas fill-rule 规则
```
在 2D 图形中绘制带洞的多边形办法

- `覆盖绘制 over-painting`
	- 优势：简单好理解
	- 劣势：如果背景发生改变，则不会生效。存在多余的绘制，在绘制较多图形时会有性能问题
- `欺骗法：通过拆分线段的方式，绘制为简单图形，比如上面的图形可以这么做：ABCI > HGEFH > IDA`
	- 避免了覆盖绘制导致的背景色生效问题
	- 会导致额外的边，如果你需要给描边时问题就暴露出来了。同时由于精度问题，可能导致缝隙
- `环绕计数`
	- 利用 nonzero 的判断规则
	- 优势：真正意义上的画一个带洞的形状
	- 劣势：必须保证顺时针和逆时针规则
- `evenodd 规则`
	- 优势：比计数规则更好理解
	- 劣势：在某些情形，计数规则会有更好的结果
- 裁剪区域
	- 利用裁剪规则
	- 优势：裁剪区域可以裁剪非常复杂的形状
	- 劣势：需要做很多的额外工作

`推荐利用 evenodd 填充规则去解决这个问题`

```

- 绘制带孔多边形
> https://blog.pig1024.me/posts/60db08711225572af327c119


# 将相交多边形合并为一个多边形
> http://boontaran.com/posts/view/gpcjs-javascript-port-of-gpc
> https://github.com/Doodle3D/clipper-js



# 裁剪 和 反裁剪



# 绘制及移动对象不能重叠
> https://jsfiddle.net/aphillips8/31qbr0vn/1/

