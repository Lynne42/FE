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