<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [DOM节点操作](#dom%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## DOM节点操作
- 创建

      创建一个DOM片段: createDocumentFragment()
      创建一个具体的元素: createElement()
      创建一个文本节点: createTextNode()
- 添加
      
      向父节点中添加元素： appendChild(node)

- 移除
  
      移除元素： removeChild(node)
- 替换
      
      replaceChild(newnode, oldnode)

- 插入

      insertChild(node)

- 查找

       getElementById()
       getElementByClassName()
       getElementByName()
       getElementByTagName()
       querySelector()
       querySelectorAll()

- 属性操作
    
       getAttribute(key)
       setAttribute(key, value)
       hasAttribute(key)
       removeAttribute(key)