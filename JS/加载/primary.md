<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [```js代码延迟加载的方式```](#js%E4%BB%A3%E7%A0%81%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%96%B9%E5%BC%8F)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

### ```js代码延迟加载的方式```
- 将JS脚本放在文档的底部，使js脚本尽可能在最后加载执行(因为文档是顺序执行的)

- defer
  - 添加defer属性， 该属性会让文档解析与js脚本加载同步执行，在文档解析完成后再执行该js脚本。多个defer属性的脚本会顺序执行， 但有的浏览器可能不同

- async
   
  - 添加async属性，该属性会使脚本异步加载，不会阻塞文档的解析，但是当脚本加载后会立即执行脚本代码， 如果这个时候文档还未解析完成， 仍旧会阻塞页面解析。
  - 多个async属性的脚本执行顺序无法预测，取决于该脚本加载的快慢

  - async 属性是 HTML5 新增属性，需要 Chrome、FireFox、IE9+ 浏览器支持
  - async 属性规定一旦脚本可用，则会异步执行
  - async 属性仅适用于外部脚本

- 动态创建script标签的方式引入js脚本