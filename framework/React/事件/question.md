<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [包含元素(checkbox)阻止事件传播](#%E5%8C%85%E5%90%AB%E5%85%83%E7%B4%A0checkbox%E9%98%BB%E6%AD%A2%E4%BA%8B%E4%BB%B6%E4%BC%A0%E6%92%AD)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--
 * @Author: your name
 * @Date: 2021-03-07 13:56:04
 * @LastEditTime: 2021-03-07 14:01:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Learning/framework/React/事件/question.md
-->
# 包含元素(checkbox)阻止事件传播
- 问题

外层元素有点击事件， 包含checkbox复选框
```
<div onClick={}>
	<checkbox/>
	<text></text>
</div>
```
- 解决
<checkbox/> 添加外层元素， 使用click模拟checkbox事件， 从而通过e.stopPropagation()阻止合成事件传播
```
const handleSelect = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
		onHandleSelect(!isSelected, id);
	}, [isSelected, id, onHandleSelect])
	return (
	  <div
		role='checkbox'
		data-id={id}
		aria-checked={isSelected}
	  	onClick={handleSelect}>
		{
			<Checkbox
				indeterminate={indeterminate}
				color='primary'
				data-id={id}
				checked={isSelected}
			/>
		}
	  </div>
);
```
