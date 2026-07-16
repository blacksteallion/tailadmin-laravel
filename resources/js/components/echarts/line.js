export const initLineCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    init('chart-line-simple', {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }]
    });

    init('chart-line-smooth', {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [{ data: [120, 200, 150, 80, 70, 110, 130], type: 'line', smooth: true }]
    });

    init('chart-area-basic', {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [{ data: [300, 400, 350, 500, 490, 600, 700], type: 'line', areaStyle: {} }]
    });

    init('chart-line-stack', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Email', 'Direct', 'Search'] },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [
            { name: 'Email', type: 'line', stack: 'Total', data: [120, 132, 101, 134, 90, 230, 210] },
            { name: 'Direct', type: 'line', stack: 'Total', data: [220, 182, 191, 234, 290, 330, 310] },
            { name: 'Search', type: 'line', stack: 'Total', data: [150, 232, 201, 154, 190, 330, 410] }
        ]
    });

    init('chart-area-stack', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Line 1', 'Line 2', 'Line 3', 'Line 4'] },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [
            { name: 'Line 1', type: 'line', stack: 'Total', areaStyle: {}, data: [120, 132, 101, 134, 90, 230, 210] },
            { name: 'Line 2', type: 'line', stack: 'Total', areaStyle: {}, data: [220, 182, 191, 234, 290, 330, 310] },
            { name: 'Line 3', type: 'line', stack: 'Total', areaStyle: {}, data: [150, 232, 201, 154, 190, 330, 410] },
            { name: 'Line 4', type: 'line', stack: 'Total', areaStyle: {}, data: [320, 332, 301, 334, 390, 330, 320] }
        ]
    });

    init('chart-area-stack-gradient', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Revenue', 'Cost'] },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Revenue', type: 'line', stack: 'Total', smooth: true,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(255, 158, 68, 0.8)' },
                        { offset: 1, color: 'rgba(255, 158, 68, 0.05)' }
                    ])
                },
                data: [420, 382, 501, 434, 390, 530, 410]
            },
            {
                name: 'Cost', type: 'line', stack: 'Total', smooth: true,
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(38, 196, 138, 0.8)' },
                        { offset: 1, color: 'rgba(38, 196, 138, 0.05)' }
                    ])
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
    });

    init('chart-bump-chart', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Product A', 'Product B', 'Product C'] },
        xAxis: {
            type: 'category',
            data: ['2018', '2019', '2020', '2021', '2022', '2023'],
            boundaryGap: false
        },
        yAxis: { type: 'value', inverse: true, min: 1, max: 3 },
        series: [
            { name: 'Product A', type: 'line', smooth: true, connectNulls: true, data: [1, 2, 1, 3, 2, 1] },
            { name: 'Product B', type: 'line', smooth: true, connectNulls: true, data: [2, 1, 3, 1, 1, 2] },
            { name: 'Product C', type: 'line', smooth: true, connectNulls: true, data: [3, 3, 2, 2, 3, 3] }
        ]
    });

    init('chart-line-marker', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['High', 'Low'] },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} °C' } },
        series: [
            {
                name: 'High', type: 'line', data: [10, 11, 13, 17, 22, 27, 30, 30, 26, 21, 15, 11],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: { data: [{ type: 'average', name: 'Average' }] }
            },
            {
                name: 'Low', type: 'line', data: [1, -2, 2, 5, 10, 16, 19, 18, 14, 8, 3, -1],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                }
            }
        ]
    });

    init('chart-area-pieces', {
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        visualMap: {
            show: false,
            pieces: [
                { gt: 0, lte: 50, color: '#91CC75' },
                { gt: 50, lte: 100, color: '#FAC858' },
                { gt: 100, lte: 150, color: '#EE6666' },
                { gt: 150, color: '#CC0000' }
            ]
        },
        series: [
            {
                type: 'line',
                data: [40, 90, 130, 55, 37, 120, 160],
                areaStyle: {}
            }
        ]
    });

    init('chart-data-transform-filter', {
        dataset: {
            dimensions: ['Product', 'Score'],
            source: [
                { Product: 'Matcha Latte', Score: 823 },
                { Product: 'Milk Tea', Score: 521 },
                { Product: 'Cheese Cocoa', Score: 843 },
                { Product: 'Walnut Brownie', Score: 419 },
                { Product: 'Cheese Cake', Score: 385 },
                { Product: 'Yogurt Parfait', Score: 652 }
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [
            {
                type: 'bar',
                encode: { x: 'Product', y: 'Score' },
                transform: { type: 'filter', config: { dimension: 'Score', gte: 500 } }
            }
        ]
    });

    init('chart-line-gradient', {
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        visualMap: {
            show: false,
            dimension: 1,
            pieces: [
                { lte: 100, color: '#5470c6' },
                { gt: 100, lte: 200, color: '#91cc75' },
                { gt: 200, color: '#ee6666' }
            ]
        },
        series: [{ type: 'line', data: [80, 160, 210, 90, 50, 180, 240], smooth: true }]
    });

    init('chart-line-sections', {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00']
        },
        yAxis: { type: 'value', name: 'MW' },
        series: [
            {
                type: 'line',
                data: [120, 90, 60, 250, 380, 350, 300, 180],
                markArea: {
                    silent: true,
                    itemStyle: { color: 'rgba(255, 173, 77, 0.3)' },
                    data: [
                        [{ name: 'Peak Hours', xAxis: '09:00' }, { xAxis: '15:00' }]
                    ]
                }
            }
        ]
    });

    init('chart-area-simple', {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', boundaryGap: false, data: (function () { var d = []; for (var i = 1; i <= 150; i++) { d.push(i); } return d; })() },
        yAxis: { type: 'value' },
        dataZoom: [{ type: 'inside', start: 0, end: 30 }],
        series: [{
            type: 'line',
            areaStyle: {},
            data: (function () { var d = []; var v = 100; for (var i = 1; i <= 150; i++) { v += Math.round((Math.random() - 0.5) * 20); d.push(v); } return d; })()
        }]
    });

    init('chart-confidence-band', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Predicted', 'Upper Bound', 'Lower Bound'] },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: { type: 'value' },
        series: [
            { name: 'Upper Bound', type: 'line', data: [260, 280, 310, 350, 390, 420, 450, 440, 410, 370, 320, 280], lineStyle: { opacity: 0 }, areaStyle: { opacity: 0 }, stack: 'confidence', symbol: 'none' },
            { name: 'Lower Bound', type: 'line', data: [240, 250, 270, 300, 330, 360, 380, 370, 340, 300, 260, 240], lineStyle: { opacity: 0 }, areaStyle: { opacity: 0 }, stack: 'confidence', symbol: 'none' },
            { name: 'Predicted', type: 'line', data: [250, 265, 290, 325, 360, 390, 415, 405, 375, 335, 290, 260], lineStyle: { width: 2 }, areaStyle: { opacity: 0.15 } }
        ]
    });

    init('chart-grid-multiple', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Rainfall', 'Evaporation'] },
        grid: [
            { left: '10%', right: '52%', top: '15%', bottom: '15%' },
            { left: '58%', right: '5%', top: '15%', bottom: '15%' }
        ],
        xAxis: [
            { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], gridIndex: 0 },
            { type: 'category', data: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], gridIndex: 1 }
        ],
        yAxis: [
            { type: 'value', gridIndex: 0 },
            { type: 'value', gridIndex: 1 }
        ],
        series: [
            { name: 'Rainfall', type: 'line', xAxisIndex: 0, yAxisIndex: 0, data: [50, 70, 120, 90, 60, 40] },
            { name: 'Evaporation', type: 'line', xAxisIndex: 1, yAxisIndex: 1, data: [180, 160, 100, 80, 50, 30] }
        ]
    });

    init('chart-intraday-breaks-1', {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: (function () {
                var d = [];
                var times = ['09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00'];
                return times;
            })()
        },
        yAxis: { type: 'value', scale: true },
        dataZoom: [
            { type: 'inside', start: 0, end: 100 },
            { type: 'slider', start: 0, end: 100 }
        ],
        series: [{
            type: 'line',
            data: [100.3, 101.5, 102.1, 100.8, 99.5, 103.2, 104.8, 103.0, 102.5, 101.7],
            markLine: {
                data: [
                    { name: 'Morning Open', xAxis: '09:30' },
                    { name: 'Lunch Break', xAxis: '11:30' }
                ]
            }
        }]
    });

    init('chart-intraday-breaks-2', {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00']
        },
        yAxis: { type: 'value', scale: true },
        dataZoom: [{ type: 'inside', start: 0, end: 100 }],
        series: [{
            type: 'line',
            data: [2200, 2250, 2310, 2280, 2190, 2340, 2400, 2380, 2350, 2290],
            smooth: true,
            markArea: {
                itemStyle: { color: 'rgba(255, 215, 0, 0.3)' },
                data: [[{ name: 'Lunch Break', xAxis: '11:30' }, { xAxis: '13:00' }]]
            }
        }]
    });

    init('chart-line-aqi', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['PM2.5', 'PM10', 'NO2'] },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false
        },
        yAxis: { type: 'value' },
        visualMap: {
            show: false,
            pieces: [
                { lte: 50, color: '#096' },
                { gt: 50, lte: 100, color: '#ffde33' },
                { gt: 100, lte: 150, color: '#ff9933' },
                { gt: 150, color: '#cc0033' }
            ]
        },
        series: [
            { name: 'PM2.5', type: 'line', data: [45, 80, 120, 60, 40, 160, 95], smooth: true },
            { name: 'PM10', type: 'line', data: [60, 100, 150, 80, 55, 180, 110], smooth: true },
            { name: 'NO2', type: 'line', data: [30, 50, 70, 45, 35, 90, 60], smooth: true }
        ]
    });

    init('chart-multiple-x-axis', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['2015 Precipitation', '2016 Precipitation'] },
        xAxis: [
            { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], gridIndex: 0 },
            { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], gridIndex: 1 }
        ],
        yAxis: [
            { type: 'value', name: 'mm', gridIndex: 0 },
            { type: 'value', name: 'mm', gridIndex: 1 }
        ],
        grid: [
            { left: '8%', right: '52%', top: '12%', bottom: '15%' },
            { left: '58%', right: '5%', top: '12%', bottom: '15%' }
        ],
        series: [
            { name: '2015 Precipitation', type: 'line', xAxisIndex: 0, yAxisIndex: 0, data: [120, 80, 100, 130, 90, 60] },
            { name: '2016 Precipitation', type: 'line', xAxisIndex: 1, yAxisIndex: 1, data: [90, 110, 85, 140, 70, 95] }
        ]
    });

    init('chart-area-rainfall', {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: { type: 'value', name: 'mm' },
        series: [
            {
                type: 'line',
                data: [90, 75, 100, 130, 160, 200, 240, 220, 180, 130, 95, 80],
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(84, 112, 198, 0.6)' },
                        { offset: 1, color: 'rgba(84, 112, 198, 0.05)' }
                    ])
                },
                itemStyle: { color: '#5470c6' },
                smooth: true
            }
        ]
    });

    init('chart-area-time-axis', {
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        xAxis: {
            type: 'time',
            boundaryGap: false
        },
        yAxis: { type: 'value', axisLabel: { formatter: '{value} °C' } },
        series: [{
            type: 'line',
            data: [
                ['2024-01-01', 30], ['2024-02-01', 35], ['2024-03-01', 45],
                ['2024-04-01', 60], ['2024-05-01', 75], ['2024-06-01', 90],
                ['2024-07-01', 95], ['2024-08-01', 92], ['2024-09-01', 80],
                ['2024-10-01', 65], ['2024-11-01', 48], ['2024-12-01', 32]
            ],
            areaStyle: {},
            smooth: true
        }]
    });

    init('chart-dataset-link', {
        legend: {},
        tooltip: { trigger: 'axis' },
        dataset: {
            source: [
                ['product', '2015', '2016', '2017'],
                ['Matcha', 43.3, 85.8, 93.7],
                ['Milk', 83.1, 73.4, 55.1],
                ['Cheese', 86.4, 65.2, 82.5],
                ['Walnut', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        grid: [
            { left: '5%', right: '52%', top: '12%', bottom: '15%' },
            { left: '58%', right: '5%', top: '12%', bottom: '15%' }
        ],
        series: [
            { type: 'line', datasetIndex: 0, encode: { x: 'product', y: '2015' }, xAxisIndex: 0, yAxisIndex: 0 },
            { type: 'line', datasetIndex: 0, encode: { x: 'product', y: '2017' }, xAxisIndex: 1, yAxisIndex: 1 }
        ]
    });

    init('chart-dynamic-data2', (function () {
        var data = [];
        var now = new Date();
        for (var i = 0; i < 10; i++) {
            data.push([new Date(now.getTime() - (10 - i) * 2000), Math.round(Math.random() * 200 + 100)]);
        }
        var chart = {
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'time', boundaryGap: false },
            yAxis: { type: 'value' },
            series: [{
                type: 'line',
                data: data,
                smooth: true,
                areaStyle: {}
            }]
        };
        return chart;
    })());

    init('chart-line-function', {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: (function () {
                var d = [];
                for (var i = 0; i <= 100; i++) {
                    d.push((i * 3.6 - 180).toFixed(0));
                }
                return d;
            })()
        },
        yAxis: { type: 'value', min: -1, max: 1 },
        series: [{
            type: 'line',
            data: (function () {
                var d = [];
                for (var i = 0; i <= 100; i++) {
                    d.push(Math.sin((i * 3.6 - 180) * Math.PI / 180).toFixed(4));
                }
                return d;
            })(),
            smooth: true,
            showSymbol: false
        }]
    });

    init('chart-line-race', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['A', 'B', 'C'] },
        xAxis: { type: 'category', data: ['2017', '2018', '2019', '2020', '2021', '2022'] },
        yAxis: { type: 'value' },
        series: [
            { name: 'A', type: 'line', data: [100, 120, 160, 180, 210, 250], smooth: true },
            { name: 'B', type: 'line', data: [80, 140, 130, 170, 200, 230], smooth: true },
            { name: 'C', type: 'line', data: [110, 100, 150, 190, 220, 200], smooth: true }
        ]
    });

    init('chart-matrix-sparkline', {
        tooltip: { show: false },
        grid: [
            { left: '5%', top: '5%', width: '28%', height: '35%' },
            { left: '37%', top: '5%', width: '28%', height: '35%' },
            { left: '69%', top: '5%', width: '28%', height: '35%' },
            { left: '5%', top: '55%', width: '28%', height: '35%' },
            { left: '37%', top: '55%', width: '28%', height: '35%' },
            { left: '69%', top: '55%', width: '28%', height: '35%' }
        ],
        xAxis: [
            { type: 'category', data: [1, 2, 3, 4, 5], gridIndex: 0, show: false },
            { type: 'category', data: [1, 2, 3, 4, 5], gridIndex: 1, show: false },
            { type: 'category', data: [1, 2, 3, 4, 5], gridIndex: 2, show: false },
            { type: 'category', data: [1, 2, 3, 4, 5], gridIndex: 3, show: false },
            { type: 'category', data: [1, 2, 3, 4, 5], gridIndex: 4, show: false },
            { type: 'category', data: [1, 2, 3, 4, 5], gridIndex: 5, show: false }
        ],
        yAxis: [
            { type: 'value', gridIndex: 0, show: false },
            { type: 'value', gridIndex: 1, show: false },
            { type: 'value', gridIndex: 2, show: false },
            { type: 'value', gridIndex: 3, show: false },
            { type: 'value', gridIndex: 4, show: false },
            { type: 'value', gridIndex: 5, show: false }
        ],
        series: [
            { type: 'line', data: [20, 35, 28, 42, 30], xAxisIndex: 0, yAxisIndex: 0, smooth: true, showSymbol: false, lineStyle: { color: '#5470c6', width: 2 }, areaStyle: { color: 'rgba(84,112,198,0.2)' } },
            { type: 'line', data: [45, 30, 52, 38, 55], xAxisIndex: 1, yAxisIndex: 1, smooth: true, showSymbol: false, lineStyle: { color: '#91cc75', width: 2 }, areaStyle: { color: 'rgba(145,204,117,0.2)' } },
            { type: 'line', data: [15, 40, 25, 50, 35], xAxisIndex: 2, yAxisIndex: 2, smooth: true, showSymbol: false, lineStyle: { color: '#fac858', width: 2 }, areaStyle: { color: 'rgba(250,200,88,0.2)' } },
            { type: 'line', data: [60, 45, 70, 40, 65], xAxisIndex: 3, yAxisIndex: 3, smooth: true, showSymbol: false, lineStyle: { color: '#ee6666', width: 2 }, areaStyle: { color: 'rgba(238,102,102,0.2)' } },
            { type: 'line', data: [30, 55, 40, 65, 50], xAxisIndex: 4, yAxisIndex: 4, smooth: true, showSymbol: false, lineStyle: { color: '#73c0de', width: 2 }, areaStyle: { color: 'rgba(115,192,222,0.2)' } },
            { type: 'line', data: [50, 35, 60, 30, 55], xAxisIndex: 5, yAxisIndex: 5, smooth: true, showSymbol: false, lineStyle: { color: '#3ba272', width: 2 }, areaStyle: { color: 'rgba(59,162,114,0.2)' } }
        ]
    });

    init('chart-line-markline', {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'line',
            data: [120, 200, 150, 80, 70, 110, 130],
            markLine: {
                data: [
                    { type: 'average', name: 'Average' },
                    { type: 'min', name: 'Min' },
                    { type: 'max', name: 'Max' }
                ],
                label: { formatter: '{b}: {c}' }
            }
        }]
    });

    init('chart-line-style', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Solid', 'Dashed', 'Dotted', 'With Symbols'] },
        xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
        yAxis: { type: 'value' },
        series: [
            { name: 'Solid', type: 'line', data: [120, 132, 101, 134, 90, 230], lineStyle: { width: 3 } },
            { name: 'Dashed', type: 'line', data: [220, 182, 191, 234, 290, 330], lineStyle: { type: 'dashed', width: 2 } },
            { name: 'Dotted', type: 'line', data: [150, 232, 201, 154, 190, 330], lineStyle: { type: 'dotted', width: 2 } },
            { name: 'With Symbols', type: 'line', data: [320, 332, 301, 334, 390, 330], symbolSize: 10, lineStyle: { width: 2 } }
        ]
    });

    init('chart-line-in-cartesian', {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'value',
            position: 'bottom',
            axisLine: { show: true, lineStyle: { color: '#333' } },
            axisLabel: { formatter: '{value} cm' }
        },
        yAxis: {
            type: 'value',
            position: 'left',
            axisLine: { show: true, lineStyle: { color: '#333' } },
            axisLabel: { formatter: '{value} kg' }
        },
        series: [{
            type: 'line',
            data: [
                [160, 55], [165, 60], [170, 65], [175, 70], [180, 80],
                [168, 58], [172, 63], [178, 72], [185, 85], [190, 90]
            ],
            smooth: true
        }]
    });

    init('chart-line-log', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Exponential Growth'] },
        xAxis: { type: 'category', data: ['1', '2', '3', '4', '5', '6', '7', '8'] },
        yAxis: { type: 'log', name: 'log', min: 1, max: 1000 },
        series: [{
            name: 'Exponential Growth',
            type: 'line',
            data: [1, 2, 4, 8, 16, 32, 64, 128],
            smooth: true
        }]
    });

    init('chart-line-step', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Step Start', 'Step Middle', 'Step End'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [
            { name: 'Step Start', type: 'line', data: [120, 132, 101, 134, 90, 230, 210], step: 'start' },
            { name: 'Step Middle', type: 'line', data: [220, 182, 191, 234, 290, 330, 310], step: 'middle' },
            { name: 'Step End', type: 'line', data: [150, 232, 201, 154, 190, 330, 410], step: 'end' }
        ]
    });

    init('chart-line-easing', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Linear', 'Quadratic', 'Cubic'] },
        xAxis: {
            type: 'category',
            data: (function () {
                var d = [];
                for (var i = 0; i <= 100; i += 2) d.push(i);
                return d;
            })()
        },
        yAxis: { type: 'value', max: 100 },
        series: [
            {
                name: 'Linear', type: 'line',
                data: (function () {
                    var d = [];
                    for (var i = 0; i <= 100; i += 2) d.push(i);
                    return d;
                })(),
                smooth: false
            },
            {
                name: 'Quadratic', type: 'line',
                data: (function () {
                    var d = [];
                    for (var i = 0; i <= 100; i += 2) d.push(Math.round((i / 100) * (i / 100) * 100));
                    return d;
                })(),
                smooth: true
            },
            {
                name: 'Cubic', type: 'line',
                data: (function () {
                    var d = [];
                    for (var i = 0; i <= 100; i += 2) d.push(Math.round((i / 100) * (i / 100) * (i / 100) * 100));
                    return d;
                })(),
                smooth: true
            }
        ]
    });

    init('chart-line-fisheye', {
        tooltip: { trigger: 'axis' },
        xAxis: {
            type: 'category',
            data: (function () {
                var d = [];
                for (var i = 1; i <= 50; i++) d.push('P' + i);
                return d;
            })()
        },
        yAxis: { type: 'value' },
        dataZoom: [
            { type: 'inside', start: 0, end: 20 }
        ],
        series: [{
            type: 'line',
            data: (function () {
                var d = [];
                for (var i = 1; i <= 50; i++) d.push(Math.round(Math.random() * 300 + 50));
                return d;
            })(),
            smooth: true,
            areaStyle: { opacity: 0.3 }
        }]
    });

    init('chart-line-y-category', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['2023', '2024'] },
        xAxis: { type: 'value' },
        yAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            axisLabel: { inside: true, color: '#fff' },
            axisLine: { show: false }
        },
        series: [
            { name: '2023', type: 'line', data: [120, 132, 101, 134, 90, 230], smooth: true },
            { name: '2024', type: 'line', data: [220, 182, 191, 234, 290, 330], smooth: true }
        ]
    });

    init('chart-line-graphic', {
        graphic: [
            {
                type: 'text',
                left: 'center',
                top: 20,
                style: {
                    text: 'Sales Report 2024',
                    fontSize: 18,
                    fontWeight: 'bold',
                    fill: '#333'
                }
            }
        ],
        xAxis: {
            type: 'category',
            data: ['Q1', 'Q2', 'Q3', 'Q4']
        },
        yAxis: { type: 'value' },
        series: [{
            type: 'line',
            data: [450, 680, 520, 830],
            markPoint: {
                data: [{ type: 'max', name: 'Max' }]
            }
        }]
    });

    init('chart-line-pen', {
        tooltip: { trigger: 'item' },
        xAxis: { type: 'value', min: 0, max: 100 },
        yAxis: { type: 'value', min: 0, max: 100 },
        series: [{
            type: 'line',
            data: [
                [10, 20], [25, 35], [40, 50], [55, 45],
                [70, 60], [85, 30], [95, 75]
            ],
            smooth: true,
            lineStyle: { color: '#5470c6', width: 2 },
            itemStyle: {
                color: '#5470c6',
                borderWidth: 2,
                borderColor: '#fff'
            },
            symbolSize: 12
        }]
    });

    init('chart-line-polar', {
        angleAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        radiusAxis: { type: 'value' },
        polar: {},
        series: [
            {
                type: 'line',
                coordinateSystem: 'polar',
                data: [120, 132, 101, 134, 90, 230, 210],
                smooth: true
            }
        ]
    });

    init('chart-line-polar2', {
        angleAxis: {
            type: 'value',
            min: 0,
            max: 360,
            startAngle: 90
        },
        radiusAxis: { type: 'value' },
        polar: { radius: '70%' },
        series: [
            {
                type: 'line',
                coordinateSystem: 'polar',
                data: (function () {
                    var d = [];
                    for (var i = 0; i <= 360; i += 5) {
                        d.push([i, 100 + 50 * Math.cos(i * Math.PI / 180)]);
                    }
                    return d;
                })(),
                smooth: true,
                lineStyle: { color: '#ee6666', width: 2 }
            }
        ]
    });

    init('chart-line-tooltip-touch', {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: { data: ['Visitors', 'Purchases'] },
        xAxis: {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: { type: 'value' },
        dataZoom: [
            { type: 'inside', start: 0, end: 50 },
            { type: 'slider', start: 0, end: 50 }
        ],
        series: [
            { name: 'Visitors', type: 'line', data: [1200, 1350, 1480, 1320, 1560, 1680, 1800, 1750, 1620, 1450, 1300, 1250] },
            { name: 'Purchases', type: 'line', data: [320, 380, 420, 360, 480, 520, 560, 540, 490, 410, 360, 330] }
        ]
    });

    init('chart-line-draggable', {
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'value', min: 0, max: 10 },
        yAxis: { type: 'value', min: 0, max: 10 },
        series: [{
            type: 'line',
            data: [[1, 2], [3, 5], [5, 3], [7, 8], [9, 4]],
            symbolSize: 16,
            itemStyle: {
                color: '#ee6666',
                borderColor: '#fff',
                borderWidth: 2
            },
            emphasis: {
                itemStyle: {
                    borderColor: '#333',
                    borderWidth: 3
                }
            }
        }]
    });
};
