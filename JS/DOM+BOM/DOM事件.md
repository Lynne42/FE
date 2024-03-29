<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [DOM事件模型](#dom%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B)
- [DOM事件传播](#dom%E4%BA%8B%E4%BB%B6%E4%BC%A0%E6%92%AD)
- [事件委托](#%E4%BA%8B%E4%BB%B6%E5%A7%94%E6%89%98)
- [事件对象的属性和方法](#%E4%BA%8B%E4%BB%B6%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B1%9E%E6%80%A7%E5%92%8C%E6%96%B9%E6%B3%95)
- [阻止事件传播](#%E9%98%BB%E6%AD%A2%E4%BA%8B%E4%BB%B6%E4%BC%A0%E6%92%AD)
    - [```event.stopPropagation();```](#eventstoppropagation)
    - [```event.stopImmediatePropagation();```](#eventstopimmediatepropagation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# DOM事件模型
事件是用户操作网站时发生的一系列交互或者网页本身的一些操作

- DOM0级模型

  这种模式不会传播没有事件流的概念。但是现在有的浏览器支持冒泡的方式实现， 他可以在网页中直接定义监听函数，也可以通过js属性来指定监听函数。所有浏览器都兼容这种模式。

- IE事件模型
  
  **该事件总有两个过程，目标事件处理阶段和冒泡阶段。**

  目标事件处理阶段会先执行目标元素的绑定事件，然后是冒泡阶段。

  冒泡指的是事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有绑定监听函数， 则执行该函数。可以给一个元素添加多个监听事件， 会依次执行。

  该模式通过attachEvent来添加监听函数

- DOM2级事件模型

  **在该事件模型中，一次事件共有3个过程，事件捕获阶段，目标事件阶段，事件冒泡阶段**

  事件捕获指的是事件从document一直向下传播到目标元素，一次检查经过的节点是否绑定了事件监听函数，如果有则执行。

  该模式通过addEventListener添加监听函数， 第三个参数指定事件是否在捕获阶段执行。 true表示在捕获阶段执行监听函数， false表示在冒泡阶段执行监听函数。


# DOM事件传播

当一个事件发生后， 它会在不同的节点之间传播

- 捕获阶段

  事件从html元素层层向下传递并检测是否绑定事件监听函数，直到目标元素

- 当前目标阶段
  
  在目标节点上触发

- 冒泡阶段
  
  事件从目标节点层层向上传递， 直到html

event.eventPhase属性可以查看事件触发时所处的阶段

# 事件委托

  **事件委托**本质上是使用浏览器的事件冒泡机制，事件在冒泡过程中可传递到父节点， 父节点可以通过事件对象获取到目标元素，这样即可将子节点的监听函数绑定到父节点上，当事件冒泡到该节点时， 检测到监听函数变回执行该监听函数，在这里通过检测目标对象来处理不同子元素的事件

  通过事件委托，我们不必为每一个子元素都创建一个监听事件，而是统一在其父元素上监听处理。**这样可以减少页面中监听的事件函数，提升性能**

  通过事件委托，我们还可以**实现事件的动态绑定**，例如新增子节点后，不需要为它单独添加事件， 只需要父节点处理即可




# 事件对象的属性和方法

    - event.type 获取事件类型
    
    - event.target || event.srcElement 用于获取触发事件的元素
  
    - event.preventDefault() 取消默认行为

# 阻止事件传播


### ```event.stopPropagation();```

**当前节点事件处理完成后， 阻止所有后续节点事件的处理**:

  - 如果处于冒泡阶段， 则在本次事件完成后， 阻止事件继续向父元素传递）
  - 如果处于捕获阶段， 则在本次事件完成后， 阻止事件向子元素传递
  - 不会阻止本次事件元素的同级事件（比如该元素绑定了多个监听事件，多个监听事件依然会执行）


            
### ```event.stopImmediatePropagation();```
**当前节点事件执行完成后， 停止当前节点以及后续所有节点的事件处理**
  - 如果处于冒泡阶段， 则在本次事件完成后， 阻止事件继续向当前节点及父节点传递）
  - 如果处于捕获阶段， 则在本次事件完成后， 阻止事件向当前节点及子节点传递

