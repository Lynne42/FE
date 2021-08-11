<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [基本面积图](#%E5%9F%BA%E6%9C%AC%E9%9D%A2%E7%A7%AF%E5%9B%BE)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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