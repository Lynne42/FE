<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [html5有哪些新特性、移除了那些元素？](#html5%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7%E7%A7%BB%E9%99%A4%E4%BA%86%E9%82%A3%E4%BA%9B%E5%85%83%E7%B4%A0)
- [WEB标准以及W3C标准是什么?](#web%E6%A0%87%E5%87%86%E4%BB%A5%E5%8F%8Aw3c%E6%A0%87%E5%87%86%E6%98%AF%E4%BB%80%E4%B9%88)
- [谈谈你对语义化的理解](#%E8%B0%88%E8%B0%88%E4%BD%A0%E5%AF%B9%E8%AF%AD%E4%B9%89%E5%8C%96%E7%9A%84%E7%90%86%E8%A7%A3)
- [Doctype作用? 严格模式与混杂模式如何区分？它们有何意义? Doctype文档类型有哪些？](#doctype%E4%BD%9C%E7%94%A8-%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%8E%E6%B7%B7%E6%9D%82%E6%A8%A1%E5%BC%8F%E5%A6%82%E4%BD%95%E5%8C%BA%E5%88%86%E5%AE%83%E4%BB%AC%E6%9C%89%E4%BD%95%E6%84%8F%E4%B9%89-doctype%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B%E6%9C%89%E5%93%AA%E4%BA%9B)
- [常见的兼容性问题](#%E5%B8%B8%E8%A7%81%E7%9A%84%E5%85%BC%E5%AE%B9%E6%80%A7%E9%97%AE%E9%A2%98)
- [浮动的原理， 如何清除浮动](#%E6%B5%AE%E5%8A%A8%E7%9A%84%E5%8E%9F%E7%90%86-%E5%A6%82%E4%BD%95%E6%B8%85%E9%99%A4%E6%B5%AE%E5%8A%A8)
- [测试性能的工具](#%E6%B5%8B%E8%AF%95%E6%80%A7%E8%83%BD%E7%9A%84%E5%B7%A5%E5%85%B7)
- [什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC](#%E4%BB%80%E4%B9%88%E6%98%AF-fouc%E6%97%A0%E6%A0%B7%E5%BC%8F%E5%86%85%E5%AE%B9%E9%97%AA%E7%83%81%E4%BD%A0%E5%A6%82%E4%BD%95%E6%9D%A5%E9%81%BF%E5%85%8D-fouc)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# html5有哪些新特性、移除了那些元素？
```
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加

绘画 canvas
用于媒介回放的 video 和 audio 元素
本地存储 localStorage 长期存储数据，浏览器关闭后数据不丢失,sessionStorage 的数据在浏览器关闭后自动删除
语意化更好的内容元素，比如 article、footer、header、nav、section
表单控件，calendar、date、time、email、url、search
新的技术webworker
websocket((web socket是一种协议，本质上和http，tcp一样。协议是用来说明数据是如何传输的))
Geolocation
移除的元素：

纯表现的元素：basefont，big，center，font, s，strike，tt，u`
对可用性产生负面影响的元素：frame，frameset，noframes
支持HTML5新标签：

IE8/IE7/IE6支持通过document.createElement方法产生的标签
可以利用这一特性让这些浏览器支持HTML5新标签
浏览器支持新标签后，还需要添加标签默认的样式
当然也可以直接使用成熟的框架、比如html5shim
```

# WEB标准以及W3C标准是什么?
```
标签闭合、标签小写、不乱嵌套、使用外链css和js、结构行为表现的分离
```

# 谈谈你对语义化的理解
```
1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构
2，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

```

# Doctype作用? 严格模式与混杂模式如何区分？它们有何意义? Doctype文档类型有哪些？
# 常见的兼容性问题

```
* png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.也可以引用一段脚本处理.

* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。 

* 浮动ie产生的双倍距离（IE6双边距问题：在IE6下，如果对元素设置了浮动，同时又设置了margin-left或margin-right，margin值会加倍。）
  #box{ float:left; width:10px; margin:0 0 0 100px;} 

 这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

*  渐进识别的方式，从总体中逐渐排除局部。 

  首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。 
  接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

  css
      .bb{
       background-color:#f1ee18;/*所有识别*/
      .background-color:#00deff\9; /*IE6、7、8识别*/
      +background-color:#a200ff;/*IE6、7识别*/
      _background-color:#1e0bd1;/*IE6识别*/ 
      } 

*  IE下,可以使用获取常规属性的方法来获取自定义属性,
   也可以使用getAttribute()获取自定义属性;
   Firefox下,只能使用getAttribute()获取自定义属性. 
   解决方法:统一通过getAttribute()获取自定义属性.

* IE下,event对象有x,y属性,但是没有pageX,pageY属性; 
  Firefox下,event对象有pageX,pageY属性,但是没有x,y属性.

* 解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

* Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示, 
  可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决.

* 超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}

* 怪异模式问题：漏写DTD声明，Firefox仍然会按照标准模式来解析网页，但在IE中会触发怪异模式。为避免怪异模式给我们带来不必要的麻烦，最好养成书写DTD声明的好习惯。现在可以使用[html5](http://www.w3.org/TR/html5/single-page.html)推荐的写法：`<doctype html>`

* 上下margin重合问题
ie和ff都存在，相邻的两个div的margin-left和margin-right不会重合，但是margin-top和margin-bottom却会发生重合。
解决方法，养成良好的代码编写习惯，同时采用margin-top或者同时采用margin-bottom。
* ie6对png图片格式支持不好(引用一段脚本处理)
```

# 浮动的原理， 如何清除浮动
# 测试性能的工具
```
Profiler

JSPerf（http://jsperf.com/nexttick-vs-setzerotimeout-vs-settimeout）

Dromaeo

```

# 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC
```
FOUC - Flash Of Unstyled Content 文档样式闪烁
 <style type="text/css" media="all">@import "../fouc.css";</style> 
而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。
 解决方法简单的出奇，只要在<head>之间加入一个<link>或者<script>元素就可以了。
```