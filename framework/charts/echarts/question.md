<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [饼图](#%E9%A5%BC%E5%9B%BE)
  - [hover时不显示放大效果](#hover%E6%97%B6%E4%B8%8D%E6%98%BE%E7%A4%BA%E6%94%BE%E5%A4%A7%E6%95%88%E6%9E%9C)
  - [修改饼图外面的空白(使饼图沾满父层元素)](#%E4%BF%AE%E6%94%B9%E9%A5%BC%E5%9B%BE%E5%A4%96%E9%9D%A2%E7%9A%84%E7%A9%BA%E7%99%BD%E4%BD%BF%E9%A5%BC%E5%9B%BE%E6%B2%BE%E6%BB%A1%E7%88%B6%E5%B1%82%E5%85%83%E7%B4%A0)
  - [环形图中心添加固定内容](#%E7%8E%AF%E5%BD%A2%E5%9B%BE%E4%B8%AD%E5%BF%83%E6%B7%BB%E5%8A%A0%E5%9B%BA%E5%AE%9A%E5%86%85%E5%AE%B9)
  - [环形图中心添加动态内容](#%E7%8E%AF%E5%BD%A2%E5%9B%BE%E4%B8%AD%E5%BF%83%E6%B7%BB%E5%8A%A0%E5%8A%A8%E6%80%81%E5%86%85%E5%AE%B9)
  - [饼图形上显示文字](#%E9%A5%BC%E5%9B%BE%E5%BD%A2%E4%B8%8A%E6%98%BE%E7%A4%BA%E6%96%87%E5%AD%97)
- [柱状图/折线图](#%E6%9F%B1%E7%8A%B6%E5%9B%BE%E6%8A%98%E7%BA%BF%E5%9B%BE)
  - [减少柱状图周边空白](#%E5%87%8F%E5%B0%91%E6%9F%B1%E7%8A%B6%E5%9B%BE%E5%91%A8%E8%BE%B9%E7%A9%BA%E7%99%BD)
  - [设置轴线样式](#%E8%AE%BE%E7%BD%AE%E8%BD%B4%E7%BA%BF%E6%A0%B7%E5%BC%8F)
  - [渐变](#%E6%B8%90%E5%8F%98)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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