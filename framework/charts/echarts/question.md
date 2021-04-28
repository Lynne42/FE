# 饼图
## hover时不显示放大效果
```
// series添加设置
hoverAnimation: false,
```
## 修改饼图外面的空白(使饼图沾满父层元素)
```
修改radius为100%
如环形图设置：
radius: ['60%', '100%']
```

## 环形图中心添加固定内容
- 只显示一行内容
```
可以通过option title属性设置
title: {
	text: 'Nodes',
	subText: '30',
	left: 'center',
	top: 'center',
	textStyle: {
		color: '#4C5774',
		align: 'center',
		fontSize: '12px',
	},
},
```
- 显示两行内容
```

- 通过formatter设置要显示的内容
- 通过rich配置要显示的内容的样式

nowOption.series = [
	{
		name: type,
		hoverAnimation: false,
		type: 'pie',
		radius: ['60%', '100%'],
		avoidLabelOverlap: false,
		label: {
			normal: {
				show: true,
				position: 'center',
				formatter: function(params) {
					const total = params.data.total;
					return (
						[`{a|${total}\n}`, `{b|${type}}`].join('')
					);
				},
				rich: {
					a: {
						color: '#4C5774',
						fontSize: 24,
						lineHeight: 30,
						fontWeight: 'bold',
					},
					b: {
						color: '#AEB6CA',
						fontSize: 12,
						lineHeight: 16,
					},
				},
			},
		},
		labelLine: {
			show: false,
		},
		data: newValue,
	},
];
```
## 环形图中心添加动态内容

## 饼图形上显示文字

# 柱状图/折线图
## 减少柱状图周边空白
```
配置option grid
grid: {
	left: '0',
	top: '20',
	right: '0',
	bottom: '0',
	containLabel: true,

},
```

## 设置轴线样式
```
xAxis: {
	...,
	// 轴线
	axisLine: {
		lineStyle: {
			color: '#AEB6CA',
		},
	},
	// 刻度线
	axisTick: {
		show: false,
	},
	spiltLine: {
		show: true,
		lineStyle: {
			color: '#AEB6CA',
		},
		interval: 'auto',

	},
},
```

## 渐变
```
itemStyle: {
	color: new echarts.graphic.LinearGradient(
		0, 0, 0, 1, // 渐变的起止位置(右/下/左/上)
		[
			{offset: 0, color: 'red'},
			{offset: 1, color: '#188df0'},
		]
	),
},
```