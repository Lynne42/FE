<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [diff算法（reconciliation）](#diff%E7%AE%97%E6%B3%95reconciliation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## diff算法（reconciliation）

- 节点类型不同
  
	- 在树的同一位置更新前后节点类型不同， 会直接删除原节点而创建新的节点, 该节点下的子节点也会被直接删除
  

- 节点类型相同， 属性不同
	- react会保留DOM节点， 对比及更新改变的属性

	- 当更新 style 属性时，React 仅更新有所更变的属性
	
- 同类型的组件元素
  - 组件实例保持不变，更新props
  - 递归更改子元素
  
- 对于列表节点的对比
	-  使用key 属性，对于同层节点，若节点本身完全相同 ( 类型相同且属性相同 ) 只是位置不同，则 React 只需要考虑同层节点的位置变换，不需要进行节点的销毁和重新创建
	-  对于不同层的节点，即使节点本身完全相同 ( 类型相同且属性相同 ) 也只能是销毁并重新创建
  
- key
  - 帮助 React 定位到正确的节点并进行比较，从而大幅减少 DOM 操作的次数，提高性能

