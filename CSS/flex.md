## 容器属性
- flex-direction
  - 控制子项目的排列方式row, column, ...

- flex-wrap: nowrap
  - 控制子项目是否换行

- flex-flow: row nowrap
  - flex-direction 和flex-wrap的简写

- jusitify-center
  - 控制子项目在排列方向上的对齐方式
- align-items
  - 控制子项目在纵轴上的排列方式
- aligin-center
  - 控制多行子项目的排列方式

## 容器内容属性
- flex: 0 1 auto
  - 用于定义子项目的放大，缩小，和宽度
  - 是flex-grow, flex-shrink, flex-basis的缩写
  - flex-grow， 
    
    决定子项目在有剩余空间的时候是否按比例放大(占据剩余空间)，默认0不放大
  - flex-shrink
  
    决定子项目在空间不足的情况下，是否按比例缩小，默认1，等比缩小， 0不缩小
  - flex-basis

    用于设置项目宽度，默认auto(使用默认宽度或者width宽度),**如果设置了flex-basis：50px, 则权重比width高，会覆盖掉width属性**

- align-self
  - 使某个子项目排列方式区别于其他子项目
  - 与align-items取值一致