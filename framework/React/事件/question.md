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
