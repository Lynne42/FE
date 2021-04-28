# 基本面积图
```
const chartOptions = {
    autoFit: true,
    appendPadding: [16, 20, 0, 20],
    limitInPlot: false,
    xField: 'month',
    yField: 'value',
    smooth: true,
    areaStyle: {
        fill: '#668DD6',
        fillOpacity: 0.2,
    },
    line: {
        color: '#668DD6',
    },
    xAxis: {
        range: [0, 1],
        line: {
            style: {
                stroke: '#AEB6CA',
                opacity: 0.2,
            },
        },
        label: {
            autoEllipsis: true,
            style: {
                fill: '#AEB6CA',
                fontSize: 10,
                fontFamily: 'Mulish',
            },
        },
        grid: {
            line: {
                style: {
                    stroke: '#AEB6CA',
                    opacity: 0.2,
                },

            },
        },
        tickLine: null,

    },
    yAxis: {
        line: {
            style: {
                stroke: '#AEB6CA',
                opacity: 0.2,
            },
        },
        label: {
            autoEllipsis: true,
            style: {
                fill: '#AEB6CA',
                fontSize: 10,
                fontFamily: 'Mulish',
            },
        },
        grid: {
            line: {
                style: {
                    stroke: '#AEB6CA',
                    opacity: 0.2,
                },

            },
        },
        tickLine: null,
    },
    data: data,
};
```