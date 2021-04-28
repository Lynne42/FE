## 规则
- 遵循SID原则
    - Short： 简短，避免输入太长，但是也应该注意不能简写到失去其原本的意义
    - Intuitive： 直观，并且尽可能接近自然语言
 	- Descriptive： 以最有效的方式反映其作用或目的
- 统一命名风格
    - 小驼峰
    - 大驼峰
    - 下划线
- 避免过度的简写
- 避免上下文重复
- 反映预期结果
  - 变量或函数的命名应该能反映预期的结果

## 模式
### A/HC/LC模式
```
prefix? + action (A) + high context (HC) + low context? (LC)
```
name |	prefix | A | HC | LC
:-- | :-- | :-- | :-- | :--
getUser	|  | get	| User	| |
getUserMessages	| | get | User | Message |
handleClickOutside	| | handle | Click | OutSide |
shouldDisplayMessage | should | Display |	Message	|

- action 动作
```
getXXX，表示获取数据
setXXX，表示设值
resetXXX，重置数据
fetchXXX，请求数据
removeXXX，移除数据，表示从某处删除某物
deleteXXX，删除数据，表示完全清楚某些事物
composeXXX，从现有数据创建新数据
handleXXX，处理某个动作
```
- context 上下文
```
结合上下文，明确操作的对象，反应预期的结果
```

- prefix 前缀

用来增强函数的意义
```
is，描述特征或状态，通常是boolean类型
has，描述是否具有某个状态或值，通常是boolean类型
should，反映肯定的条件，加上特定的执行动作
min/max，描述边界或界限时使用
prev/next，指示前一个或下一个状态
```

- 单复数

根据值的单复数来定义变量的单复数名称