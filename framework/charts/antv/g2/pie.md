<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [环形图](#%E7%8E%AF%E5%BD%A2%E5%9B%BE)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 环形图
```
option = {
	data: newValue,
	autoFit: true,
	limitInPlot: true,
	padding: 0,
	angleField: 'value',
	colorField: 'name',
	color: colors,
	radius: 1,
	innerRadius: 0.6,
	legend: false,
	label: {
		type: 'inner',
		offset: '-50%',
		style: {
			textAlign: 'center',
			fontSize: 10,
			fontFamily: 'Mulish',
		},
		formatter: ({percent}) => `${(percent * 100).toFixed(0)}%`,
	},
	tooltip: false,
	statistic: {
		offsetY: '50%',
		title: {
			customHtml: (container, view, datum, data) => {
				const total = data[0].total;
				return `<text 
					style="
					color: #4C5774;
					font-size:24px;
					font-family=Mulish;
					font-weight: bold;">
						${total}
					</text>`;
			},
		},
		content: {
			offsetY: 4,
			customHtml: () => {
				return `<text 
					style="
					color: #AEB6CA;
					font-size:12px;
					font-family=Mulish;
					font-weight: 400;">
						${type}
					</text>`;
			},
		},
	},
}
```