export const initBarCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    init('chart-bar-simple', {
        title: { text: 'Basic Bar', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
            itemStyle: { color: '#5470c6' }
        }]
    });

    init('chart-bar-tick-align', {
        title: { text: 'Axis Align with Tick', left: 'center' },
        tooltip: { trigger: 'axis' },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: { alignWithLabel: true }
        },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
        }]
    });

    init('chart-data-transform-sort-bar', {
        title: { text: 'Sort Data in Bar Chart', left: 'center' },
        tooltip: { trigger: 'axis' },
        dataset: {
            source: [
                ['Product', 'Sales'],
                ['Matcha Latte', 41.1],
                ['Milk Tea', 86.5],
                ['Cheese Cocoa', 24.1],
                ['Walnut Brownie', 55.4],
                ['Ham Cheese', 73.4],
                ['Chestnut Cake', 23.6]
            ],
            transform: { type: 'sort', config: { dimension: 'Sales', order: 'desc' } }
        },
        xAxis: { type: 'category', axisLabel: { rotate: 30 } },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', encode: { x: 'Product', y: 'Sales' } }]
    });

    init('chart-bar-background', {
        title: { text: 'Bar with Background', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)'
            }
        }]
    });

    init('chart-bar-data-color', {
        title: { text: 'Set Style of Single Bar', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [
                120,
                { value: 200, itemStyle: { color: '#ee6666' } },
                150,
                { value: 80, itemStyle: { color: '#fac858' } },
                70,
                { value: 110, itemStyle: { color: '#91cc75' } },
                130
            ]
        }]
    });

    init('chart-bar-waterfall', {
        title: { text: 'Waterfall Chart', left: 'center' },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ': ' + tar.value;
            }
        },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                silent: true,
                itemStyle: { borderColor: 'transparent', color: 'transparent' },
                emphasis: { itemStyle: { borderColor: 'transparent', color: 'transparent' } },
                data: [0, 170, 140, 210, 290, 370, 430]
            },
            {
                name: 'Income',
                type: 'bar',
                stack: 'Total',
                label: { show: true, position: 'top' },
                data: [170, -30, -20, -70, -80, -60, -40]
            }
        ]
    });

    init('chart-dataset-encode0', {
        title: { text: 'Simple Encode', left: 'center' },
        tooltip: { trigger: 'axis' },
        dataset: {
            source: [
                ['Score', 'Amount', 'Product'],
                [89.3, 58212, 'Matcha Latte'],
                [57.1, 78254, 'Milk Tea'],
                [74.0, 41032, 'Cheese Cocoa'],
                [86.4, 69923, 'Walnut Brownie'],
                [91.2, 42541, 'Ham Cheese']
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', encode: { x: 'Amount', y: 'Score' } }]
    });

    init('chart-bar-negative2', {
        title: { text: 'Bar Chart with Negative Value', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [120, -200, 150, -80, 70, -110, 130],
            itemStyle: {
                color: function (params) {
                    return params.value >= 0 ? '#91cc75' : '#ee6666';
                }
            }
        }]
    });

    init('chart-bar-polar-label-radial', {
        title: { text: 'Radial Polar Bar Label Position', left: 'center' },
        tooltip: {},
        polar: { radius: ['20%', '80%'] },
        angleAxis: { max: 4, show: false },
        radiusAxis: { type: 'category', data: ['a', 'b', 'c', 'd'], show: false },
        series: [{
            type: 'bar',
            coordinateSystem: 'polar',
            data: [1, 2, 3, 4],
            label: { show: true, position: 'middle', formatter: '{b}: {c}' }
        }]
    });

    init('chart-bar-polar-label-tangential', {
        title: { text: 'Tangential Polar Bar Label', left: 'center' },
        tooltip: {},
        polar: { radius: ['20%', '80%'] },
        angleAxis: { max: 4, show: false },
        radiusAxis: { type: 'category', data: ['a', 'b', 'c', 'd'], show: false },
        series: [{
            type: 'bar',
            coordinateSystem: 'polar',
            data: [4, 3, 2, 1],
            label: { show: true, position: 'middle', rotate: 'tangential', formatter: '{b}: {c}' }
        }]
    });

    init('chart-bar-y-category', {
        title: { text: 'World Population', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'Pakistan']
        },
        xAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [200, 234, 290, 330, 390, 430],
            label: { show: true, position: 'right' }
        }]
    });

    init('chart-polar-endAngle', {
        title: { text: 'Polar endAngle', left: 'center' },
        tooltip: {},
        polar: { radius: ['15%', '85%'] },
        angleAxis: { max: 5, endAngle: 180, startAngle: 0, show: false },
        radiusAxis: { type: 'category', data: ['A', 'B', 'C', 'D'], show: false },
        series: [{
            type: 'bar',
            coordinateSystem: 'polar',
            data: [1, 2, 3, 4],
            itemStyle: { color: '#5470c6' }
        }]
    });

    init('chart-bar-breaks-simple', {
        title: { text: 'Bar Chart with Axis Breaks', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
        yAxis: { type: 'value', max: 500 },
        series: [{
            type: 'bar',
            data: [10, 20, 350, 380, 400, 15, 25],
            label: { show: true, position: 'top' }
        }]
    });

    init('chart-bar-gradient', {
        title: { text: 'Clickable Column Chart with Gradient', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#83bff6' },
                    { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#188df0' }
                ])
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#2378f7' },
                        { offset: 0.7, color: '#2378f7' },
                        { offset: 1, color: '#83bff6' }
                    ])
                }
            }
        }]
    });

    init('chart-bar-label-rotation', {
        title: { text: 'Bar Label Rotation', left: 'center' },
        tooltip: { trigger: 'axis' },
        grid: { bottom: '15%' },
        xAxis: {
            type: 'category',
            data: ['Square', 'Box', 'Triangle'],
            axisLabel: { rotate: 45 }
        },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [10, 20, 30],
            label: { show: true, position: 'top', rotate: 45 }
        }]
    });

    init('chart-bar-stack', {
        title: { text: 'Stacked Column Chart', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Email', 'Union Ads', 'Video Ads'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [
            { name: 'Email', type: 'bar', stack: 'total', data: [120, 132, 101, 134, 90, 230, 210] },
            { name: 'Union Ads', type: 'bar', stack: 'total', data: [220, 182, 191, 234, 290, 330, 310] },
            { name: 'Video Ads', type: 'bar', stack: 'total', data: [150, 232, 201, 154, 190, 330, 410] }
        ]
    });

    init('chart-bar-stack-borderRadius', {
        title: { text: 'Stacked Bar with borderRadius', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Email', 'Search Engine', 'Video Ads'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Email', type: 'bar', stack: 'total', data: [120, 132, 101, 134, 90, 230, 210],
                itemStyle: { borderRadius: [0, 0, 0, 0] }
            },
            {
                name: 'Search Engine', type: 'bar', stack: 'total', data: [220, 182, 191, 234, 290, 330, 310],
                itemStyle: { borderRadius: [0, 0, 0, 0] }
            },
            {
                name: 'Video Ads', type: 'bar', stack: 'total', data: [150, 232, 201, 154, 190, 330, 410],
                itemStyle: { borderRadius: [4, 4, 0, 0] }
            }
        ]
    });

    init('chart-bar-stack-normalization', {
        title: { text: 'Stacked Bar Normalization', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Email', 'Union Ads', 'Video Ads'] },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Email', type: 'bar', stack: 'total', barWidth: '50%',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads', type: 'bar', stack: 'total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads', type: 'bar', stack: 'total',
                data: [150, 232, 201, 154, 190, 330, 410]
            }
        ]
    });

    init('chart-bar-stack-normalization-variation', {
        title: { text: 'Stacked Bar Normalization and Variation', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Line', 'Bar'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Bar', type: 'bar', stack: 'total',
                data: [120, 132, 101, 134, 90, 230, 210],
                emphasis: { focus: 'series' }
            },
            {
                name: 'Line', type: 'bar', stack: 'total',
                data: [220, 182, 191, 234, 290, 330, 310],
                emphasis: { focus: 'series' }
            }
        ]
    });

    init('chart-bar-waterfall2', {
        title: { text: 'Waterfall Chart (II)', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
            type: 'category',
            data: ['Q1', 'Q2', 'Q3', 'Q4', 'Total'],
            axisLine: { lineStyle: { color: '#aaa' } }
        },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Income', type: 'bar', stack: 'w', silent: true,
                itemStyle: { borderColor: 'transparent', color: 'transparent' },
                data: [0, 300, 550, 750, 0]
            },
            {
                name: 'Expense', type: 'bar', stack: 'w',
                data: [300, 250, 200, 150, 900],
                label: { show: true, position: 'bottom' },
                itemStyle: { color: '#ee6666' }
            }
        ]
    });

    init('chart-bar-y-category-stack', {
        title: { text: 'Stacked Horizontal Bar', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: {},
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'value' },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        series: [
            { name: 'Email', type: 'bar', stack: 'total', data: [120, 132, 101, 134, 90, 230, 210] },
            { name: 'Search', type: 'bar', stack: 'total', data: [220, 182, 191, 234, 290, 330, 310] },
            { name: 'Video', type: 'bar', stack: 'total', data: [150, 232, 201, 154, 190, 330, 410] }
        ]
    });

    init('chart-bar-brush', {
        title: { text: 'Brush Select on Column Chart', left: 'center' },
        tooltip: {},
        toolbox: { feature: { brush: { title: { rect: 'Rectangle select', polygon: 'Lasso select', lineX: 'X-axis select', lineY: 'Y-axis select', keep: 'Keep selection', clear: 'Clear selection' } } } },
        brush: { toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'], xAxisIndex: 0 },
        xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [70, 92, 55, 83, 64, 100, 48],
            itemStyle: { color: '#5470c6' }
        }]
    });

    init('chart-bar-negative', {
        title: { text: 'Bar Chart with Negative Value (II)', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Profit', 'Loss'] },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
        yAxis: { type: 'value' },
        series: [
            { name: 'Profit', type: 'bar', stack: 'total', data: [120, 132, 101, 134, 90] },
            { name: 'Loss', type: 'bar', stack: 'total', data: [-20, -32, -21, -34, -10] }
        ]
    });

    init('chart-bar1', {
        title: { text: 'Rainfall and Evaporation', left: 'center' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['Rainfall', 'Evaporation'] },
        xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
        yAxis: { type: 'value', name: 'ml' },
        series: [
            { name: 'Rainfall', type: 'bar', data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3] },
            { name: 'Evaporation', type: 'bar', data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3] }
        ]
    });

    init('chart-mix-line-bar', {
        title: { text: 'Mixed Line and Bar', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        legend: { data: ['Evaporation', 'Rainfall', 'Temperature'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: [
            { type: 'value', name: 'ml' },
            { type: 'value', name: 'Temp', axisLabel: { formatter: '{value} °C' } }
        ],
        series: [
            { name: 'Evaporation', type: 'bar', data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6] },
            { name: 'Rainfall', type: 'bar', data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6] },
            { name: 'Temperature', type: 'line', yAxisIndex: 1, data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3] }
        ]
    });

    init('chart-mix-zoom-on-value', {
        title: { text: 'Mix Zoom On Value', left: 'center' },
        tooltip: { trigger: 'axis' },
        dataZoom: [
            { type: 'inside', xAxisIndex: 0, start: 0, end: 100 },
            { type: 'slider', xAxisIndex: 0, start: 0, end: 100 }
        ],
        xAxis: { type: 'category', data: (function () { var d = []; for (var i = 0; i < 50; i++) d.push('Day ' + i); return d; })() },
        yAxis: { type: 'value' },
        series: [
            {
                type: 'bar',
                data: (function () { var d = []; for (var i = 0; i < 50; i++) d.push(Math.round(Math.random() * 200)); return d; })()
            },
            {
                type: 'line',
                smooth: true,
                data: (function () { var d = []; for (var i = 0; i < 50; i++) d.push(Math.round(Math.random() * 200)); return d; })()
            }
        ]
    });

    init('chart-multiple-y-axis', {
        title: { text: 'Multiple Y Axes', left: 'center' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['Evaporation', 'Precipitation', 'Temperature'] },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: [
            { type: 'value', name: 'ml', position: 'left' },
            { type: 'value', name: 'Temp', position: 'right', axisLabel: { formatter: '{value} °C' } }
        ],
        series: [
            { name: 'Evaporation', type: 'bar', data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6] },
            { name: 'Precipitation', type: 'bar', data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6] },
            { name: 'Temperature', type: 'line', yAxisIndex: 1, data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3] }
        ]
    });

    init('chart-bar-animation-delay', {
        title: { text: 'Animation Delay', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
            animationDelay: function (idx) {
                return idx * 100;
            }
        }],
        animationEasing: 'elasticOut'
    });

    init('chart-bar-drilldown', {
        title: { text: 'Bar Chart Drilldown Animation', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Fruit', 'Vegetable', 'Grain'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [320, 332, 301],
            itemStyle: { color: '#5470c6' },
            label: { show: true, position: 'top' }
        }]
    });

    (function () {
        var data = [];
        for (var i = 0; i < 50; i++) {
            data.push(Math.round(Math.random() * 200));
        }
    init('chart-bar-large', {
            title: { text: 'Large Scale Bar Chart', left: 'center' },
            tooltip: { trigger: 'axis' },
            dataZoom: [{ type: 'inside', start: 0, end: 20 }],
            xAxis: { type: 'category', data: data.map(function (v, i) { return i; }) },
            yAxis: { type: 'value' },
            series: [{ type: 'bar', data: data, large: true }]
        });
    })();

    (function () {
        var data = [];
        var names = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape'];
        for (var i = 0; i < names.length; i++) {
            data.push(Math.round(Math.random() * 500));
        }
        var chart = null;
        var raceEl = document.querySelector('#chart-bar-race');
        if (!raceEl) return;
        chart = echarts.init(raceEl);
        window.addEventListener('resize', function () { chart.resize(); });
        chart.setOption({
            title: { text: 'Bar Race', left: 'center' },
            xAxis: { type: 'value', max: 600 },
            yAxis: { type: 'category', data: names.slice().reverse(), inverse: true, animationDuration: 300, animationDurationUpdate: 300 },
            series: [{ type: 'bar', data: data.slice().reverse(), realtimeSort: true, seriesLayoutBy: 'column', label: { show: true, position: 'right' } }],
            animationDuration: 0,
            animationDurationUpdate: 2000,
            animationEasing: 'linear',
            animationEasingUpdate: 'linear'
        });
        setInterval(function () {
            var nd = [];
            for (var i = 0; i < names.length; i++) {
                nd.push(Math.round(Math.random() * 500));
            }
            chart.setOption({ series: [{ data: nd.slice().reverse() }] });
        }, 3000);
    })();

    init('chart-dataset-series-layout-by', {
        title: { text: 'Dataset Series Layout', left: 'center' },
        tooltip: { trigger: 'axis' },
        legend: {},
        dataset: {
            source: [
                ['Product', '2015', '2016', '2017'],
                ['Matcha Latte', 41.1, 30.4, 65.1],
                ['Milk Tea', 86.5, 92.1, 85.7],
                ['Cheese Cocoa', 24.1, 67.2, 79.5]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [
            { type: 'bar', seriesLayoutBy: 'row' },
            { type: 'bar', seriesLayoutBy: 'row' },
            { type: 'bar', seriesLayoutBy: 'row' }
        ]
    });

    init('chart-dataset-simple0', {
        title: { text: 'Simple Dataset Example', left: 'center' },
        tooltip: { trigger: 'axis' },
        dataset: {
            source: [
                ['Mon', 120], ['Tue', 200], ['Wed', 150], ['Thu', 80], ['Fri', 70], ['Sat', 110], ['Sun', 130]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [{ type: 'bar' }]
    });

    init('chart-dataset-simple1', {
        title: { text: 'Dataset in Object Array', left: 'center' },
        tooltip: { trigger: 'axis' },
        dataset: {
            source: [
                { date: 'Mon', value: 120 },
                { date: 'Tue', value: 200 },
                { date: 'Wed', value: 150 },
                { date: 'Thu', value: 80 },
                { date: 'Fri', value: 70 },
                { date: 'Sat', value: 110 },
                { date: 'Sun', value: 130 }
            ]
        },
        xAxis: { type: 'category', name: 'Day' },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', encode: { x: 'date', y: 'value' } }]
    });

    init('chart-bar-multi-drilldown', {
        title: { text: 'Multi-level Drilldown', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Electronics', 'Clothing', 'Food'] },
        yAxis: { type: 'value' },
        series: [{
            type: 'bar',
            data: [
                { value: 500, itemStyle: { color: '#5470c6' } },
                { value: 300, itemStyle: { color: '#91cc75' } },
                { value: 200, itemStyle: { color: '#fac858' } }
            ],
            label: { show: true, position: 'top' }
        }]
    });

    (function () {
        var countries = ['USA', 'China', 'India', 'Brazil', 'Pakistan', 'Nigeria', 'Indonesia'];
        var population = [331, 1412, 1380, 213, 221, 211, 274];
        var raceEl = document.querySelector('#chart-bar-race-country');
        if (!raceEl) return;
        var chart = echarts.init(raceEl);
        window.addEventListener('resize', function () { chart.resize(); });
        chart.setOption({
            title: { text: 'Bar Race Country', left: 'center' },
            xAxis: { type: 'value', max: 1500, axisLabel: { formatter: '{value}M' } },
            yAxis: { type: 'category', data: countries.slice().reverse(), inverse: true, animationDuration: 300, animationDurationUpdate: 300 },
            series: [{ type: 'bar', data: population.slice().reverse(), realtimeSort: true, label: { show: true, position: 'right', formatter: '{c}M' } }],
            animationDuration: 0,
            animationDurationUpdate: 2000
        });
        setInterval(function () {
            var nd = [];
            for (var i = 0; i < countries.length; i++) {
                nd.push(Math.round(population[i] * (0.9 + Math.random() * 0.2)));
            }
            chart.setOption({ series: [{ data: nd.slice().reverse() }] });
        }, 3000);
    })();

    init('chart-bar-rich-text', {
        title: { text: 'Weather Statistics', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value', name: 'Temperature (°C)' },
        series: [{
            type: 'bar',
            data: [11, 13, 11, 13, 13, 15, 16],
            label: {
                show: true,
                position: 'top',
                formatter: function (params) {
                    return '{weatherIcon|' + params.value + '°C}';
                },
                rich: {
                    weatherIcon: {
                        height: 30,
                        align: 'center',
                        backgroundColor: '#eee',
                        borderRadius: 3,
                        padding: [5, 10]
                    }
                }
            }
        }]
    });

    (function () {
        var data = [41, 53, 68, 52, 45, 60, 72, 65, 58, 74, 80, 69];
        var dynamicEl = document.querySelector('#chart-dynamic-data');
        if (!dynamicEl) return;
        var chart = echarts.init(dynamicEl);
        window.addEventListener('resize', function () { chart.resize(); });
        chart.setOption({
            title: { text: 'Dynamic Data', left: 'center' },
            xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
            yAxis: { type: 'value' },
            series: [{ type: 'bar', data: data }]
        });
        setInterval(function () {
            var nd = [];
            for (var i = 0; i < 12; i++) {
                nd.push(Math.round(Math.random() * 100));
            }
            chart.setOption({ series: [{ data: nd }] });
        }, 2000);
    })();

    init('chart-matrix-mini-bar-geo', {
        title: { text: 'Mini Bars and Geo in Matrix', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
        yAxis: { type: 'value' },
        series: [
            {
                type: 'bar',
                data: [820, 932, 901, 934],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                }
            }
        ]
    });

    init('chart-mix-timeline-finance', {
        title: { text: 'Finance Indices 2002', left: 'center' },
        tooltip: { trigger: 'axis' },
        legend: { data: ['Index1', 'Index2'] },
        xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] },
        yAxis: { type: 'value', scale: true },
        series: [
            {
                name: 'Index1', type: 'bar',
                data: [2000, 2200, 2100, 2400, 2300, 2500, 2600, 2500, 2700, 2800, 2600, 2900]
            },
            {
                name: 'Index2', type: 'line',
                data: [1500, 1700, 1600, 1900, 1800, 2000, 2100, 2000, 2200, 2300, 2100, 2400]
            }
        ]
    });

    init('chart-watermark', {
        title: { text: 'Watermark Example', left: 'center' },
        tooltip: { trigger: 'axis' },
        xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
        yAxis: { type: 'value' },
        graphic: [
            {
                type: 'text',
                left: 'center',
                top: 'center',
                style: {
                    text: 'WATERMARK',
                    fontSize: 40,
                    fontWeight: 'bold',
                    fill: 'rgba(0,0,0,0.08)'
                }
            }
        ],
        series: [{
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130]
        }]
    });

    init('chart-bar-polar-real-estate', {
        title: { text: 'Bar Chart on Polar', left: 'center' },
        tooltip: {},
        polar: { radius: ['10%', '80%'] },
        angleAxis: { max: 5 },
        radiusAxis: { type: 'category', data: ['Studio', '1BR', '2BR', '3BR', 'Penthouse'], show: false },
        series: [{
            type: 'bar',
            coordinateSystem: 'polar',
            data: [120, 200, 150, 80, 70],
            label: { show: true, position: 'middle' }
        }]
    });

    init('chart-bar-polar-stack', {
        title: { text: 'Stacked Bar Chart on Polar', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['A', 'B', 'C'] },
        polar: { radius: ['10%', '80%'] },
        angleAxis: { max: 20, startAngle: 90 },
        radiusAxis: { type: 'category', data: ['X', 'Y', 'Z'] },
        series: [
            { name: 'A', type: 'bar', coordinateSystem: 'polar', stack: 's', data: [5, 6, 8] },
            { name: 'B', type: 'bar', coordinateSystem: 'polar', stack: 's', data: [3, 4, 5] },
            { name: 'C', type: 'bar', coordinateSystem: 'polar', stack: 's', data: [2, 3, 4] }
        ]
    });

    init('chart-bar-polar-stack-radial', {
        title: { text: 'Stacked Radial Polar Bar', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['A', 'B', 'C'] },
        polar: { radius: ['15%', '85%'] },
        angleAxis: { max: 20, startAngle: 90 },
        radiusAxis: { type: 'category', data: ['X', 'Y', 'Z'], show: false },
        series: [
            { name: 'A', type: 'bar', coordinateSystem: 'polar', stack: 'r', data: [7, 5, 9], radius: ['15%', '50%'] },
            { name: 'B', type: 'bar', coordinateSystem: 'polar', stack: 'r', data: [4, 3, 5], radius: ['50%', '70%'] },
            { name: 'C', type: 'bar', coordinateSystem: 'polar', stack: 'r', data: [2, 2, 3], radius: ['70%', '85%'] }
        ]
    });

    init('chart-polar-roundCap', {
        title: { text: 'Rounded Bar on Polar', left: 'center' },
        tooltip: {},
        polar: { radius: ['20%', '80%'] },
        angleAxis: { max: 5, startAngle: 90 },
        radiusAxis: { type: 'category', data: ['A', 'B', 'C', 'D'], show: false },
        series: [{
            type: 'bar',
            coordinateSystem: 'polar',
            data: [3, 5, 2, 4],
            roundCap: true,
            itemStyle: { color: '#5470c6' }
        }]
    });

    init('chart-bar-breaks-brush', {
        title: { text: 'Bar Chart with Axis Breaks (Brush)', left: 'center' },
        tooltip: { trigger: 'axis' },
        toolbox: { feature: { brush: {} } },
        brush: { toolbox: ['rect', 'lineX', 'lineY', 'keep', 'clear'], xAxisIndex: 0 },
        xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] },
        yAxis: { type: 'value', max: 600 },
        series: [{
            type: 'bar',
            data: [10, 15, 400, 450, 500, 20, 25, 550],
            label: { show: true, position: 'top' },
            itemStyle: { color: '#5470c6' }
        }]
    });

    init('chart-bar-race', {
        title: { text: 'Bar Race', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: { type: 'category', data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], axisLabel: { rotate: 30 } },
        yAxis: { type: 'value', max: 100 },
        series: [{ type: 'bar', data: [30, 55, 70, 45, 80, 60, 90], animationDuration: 2000, animationEasing: 'elasticOut' }]
    });

    init('chart-bar-race-country', {
        title: { text: 'Bar Race Country', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: { type: 'category', data: ['USA', 'China', 'India', 'Japan', 'Germany', 'UK', 'France'] },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', data: [320, 280, 210, 180, 140, 120, 110], itemStyle: { color: (p) => ['#5470c6','#91cc75','#fac858','#ee6666','#73c0de','#3ba272','#fc8452'][p.dataIndex] } }]
    });

    init('chart-dynamic-data', {
        title: { text: 'Dynamic Data', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        xAxis: { type: 'category' },
        yAxis: { type: 'value', max: 100 },
        series: [{ type: 'bar', data: [] }],
        data: []
    });
};
