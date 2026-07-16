export const initPieCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = window.echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    // Referer of a Website
    init('chart-pie-simple', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Referer',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad' },
                { value: 135, name: 'Video' },
                { value: 1548, name: 'Search' }
            ],
            emphasis: {
                itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }
            }
        }]
    });

    // Doughnut Chart with Rounded Corner
    init('chart-pie-borderRadius', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: ['40%', '70%'],
            itemStyle: { borderRadius: 10, borderColor: '#fff', borderWidth: 2 },
            label: { show: false, position: 'center' },
            emphasis: {
                label: { show: true, fontSize: '30', fontWeight: 'bold' }
            },
            labelLine: { show: false },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }]
    });

    // Doughnut Chart
    init('chart-pie-doughnut', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
            label: { show: false, position: 'center' },
            emphasis: {
                label: { show: true, fontSize: '20', fontWeight: 'bold' }
            },
            labelLine: { show: false },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }]
    });

    // Half Doughnut Chart
    init('chart-pie-half-donut', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'horizontal', bottom: '0%', center: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 360,
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
                itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }
            }
        }]
    });

    // Pie with padAngle
    init('chart-pie-padAngle', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: ['40%', '70%'],
            padAngle: 3,
            itemStyle: { borderRadius: 6 },
            label: { show: true },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }]
    });

    // Customized Pie
    init('chart-pie-custom', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: { borderRadius: 8 },
            label: {
                formatter: function (params) {
                    return params.name + '\n' + params.value + ' (' + params.percent + '%)';
                },
                rich: {
                    name: { fontSize: 14, lineHeight: 20 },
                    value: { fontSize: 12, lineHeight: 20, color: '#999' }
                }
            },
            data: [
                { value: 30, name: 'Rose 1' },
                { value: 38, name: 'Rose 2' },
                { value: 52, name: 'Rose 3' },
                { value: 40, name: 'Rose 4' },
                { value: 60, name: 'Rose 5' },
                { value: 20, name: 'Rose 6' },
                { value: 16, name: 'Rose 7' }
            ]
        }]
    });

    // Texture on Pie Chart
    init('chart-pie-pattern', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            itemStyle: {
                color: function (params) {
                    var colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae'];
                    return colorList[params.dataIndex % colorList.length];
                }
            },
            label: { show: true, formatter: '{b}: {d}%' },
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad' },
                { value: 135, name: 'Video' },
                { value: 1548, name: 'Search' }
            ]
        }]
    });

    // Nightingale Chart
    init('chart-pie-roseType', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: [20, 90],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: { borderRadius: 8 },
            data: [
                { value: 30, name: 'Rose 1' },
                { value: 38, name: 'Rose 2' },
                { value: 52, name: 'Rose 3' },
                { value: 40, name: 'Rose 4' },
                { value: 60, name: 'Rose 5' },
                { value: 20, name: 'Rose 6' },
                { value: 16, name: 'Rose 7' }
            ]
        }]
    });

    // Basic Nightingale Chart
    init('chart-pie-roseType-simple', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: ['20%', '80%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: { borderRadius: 6 },
            data: [
                { value: 30, name: 'Rose 1' },
                { value: 38, name: 'Rose 2' },
                { value: 52, name: 'Rose 3' },
                { value: 40, name: 'Rose 4' },
                { value: 60, name: 'Rose 5' },
                { value: 20, name: 'Rose 6' },
                { value: 16, name: 'Rose 7' }
            ]
        }]
    });

    // Partition Data to Pies
    init('chart-data-transform-multiple-pie', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'horizontal', bottom: '0%', center: 'center' },
        dataset: {
            source: [
                ['Product', 'Sales', 'Type'],
                ['Cookie', 56, 'Food'],
                ['Egg Tart', 50, 'Food'],
                ['French Fries', 58, 'Food'],
                ['Pudding', 72, 'Food'],
                ['Oatmeal', 36, 'Daily'],
                ['Milk', 68, 'Daily'],
                ['Bread', 24, 'Daily'],
                ['Juice', 42, 'Daily'],
                ['Cola', 88, 'Drinks'],
                ['Water', 64, 'Drinks'],
                ['Tea', 34, 'Drinks'],
                ['Coffee', 28, 'Drinks']
            ]
        },
        series: [
            {
                type: 'pie',
                radius: ['25%', '45%'],
                center: ['25%', '40%'],
                encode: { itemName: 'Product', value: 'Sales' },
                title: { text: 'Food', left: 'center', top: 10 }
            },
            {
                type: 'pie',
                radius: ['25%', '45%'],
                center: ['75%', '40%'],
                encode: { itemName: 'Product', value: 'Sales' },
                title: { text: 'Drinks', left: 'center', top: 10 }
            }
        ]
    });

    // Default Arrangement
    init('chart-dataset-default', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'horizontal', bottom: '0%', center: 'center' },
        dataset: {
            source: [
                ['Product', 'Amount', 'Budget'],
                ['Matcha Latte', 400, 350],
                ['Milk Tea', 300, 300],
                ['Cheese Cocoa', 200, 250],
                ['Walnut Brownie', 270, 180]
            ]
        },
        series: [{
            type: 'pie',
            radius: '55%',
            encode: { itemName: 'Product', value: 'Amount' }
        }]
    });

    // Pie Label Align
    init('chart-pie-alignTo', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            label: {
                alignTo: 'labelLine',
                formatter: '{b|{b}}{abg|}\n{hr|}\n{b|{d}%}',
                rich: {
                    b: { fontSize: 14, color: '#333' },
                    hr: { backgroundColor: 'auto', width: 1, height: 8 },
                    abg: { backgroundColor: 'auto', width: 100, height: 8 }
                }
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }]
    });

    // Label Line Adjust
    init('chart-pie-labelLine-adjust', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            label: { show: true, formatter: '{b}: {d}%' },
            labelLine: {
                length: 20,
                length2: 30,
                lineStyle: { type: 'solid' }
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }]
    });

    // Pie with Scrollable Legend
    init('chart-pie-legend', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            data: (function () {
                var data = [];
                for (var i = 1; i <= 28; i++) {
                    data.push('Category ' + i);
                }
                return data;
            })()
        },
        series: [{
            name: 'Category',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: (function () {
                var data = [];
                for (var i = 1; i <= 28; i++) {
                    data.push({ value: Math.round(Math.random() * 500) + 100, name: 'Category ' + i });
                }
                return data;
            })(),
            emphasis: {
                itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)' }
            }
        }]
    });

    // Pie Special Label
    init('chart-pie-rich-text', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'vertical', left: 'left', top: 'center' },
        series: [{
            name: 'Access Source',
            type: 'pie',
            radius: [0, '55%'],
            center: ['50%', '50%'],
            label: {
                formatter: function (params) {
                    var total = 0;
                    var series = params.series;
                    for (var i = 0; i < series.data.length; i++) {
                        total += series.data[i].value;
                    }
                    var percent = ((params.value / total) * 100).toFixed(1);
                    return '{name|' + params.name + '}{abg|}\n{hr|}\n{value|' + params.value + '}{b| (' + percent + '%)}';
                },
                rich: {
                    name: { fontSize: 14, lineHeight: 22, color: '#333' },
                    hr: { backgroundColor: '#aaa', width: 1, height: 8 },
                    value: { fontSize: 12, lineHeight: 20, color: '#333' },
                    b: { fontSize: 12, color: '#999', lineHeight: 20 }
                }
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
        }]
    });

    // Share Dataset
    init('chart-dataset-link', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: { orient: 'horizontal', bottom: '0%', center: 'center' },
        dataset: [
            {
                source: [
                    ['Product', '2015', '2016', '2017'],
                    ['Matcha Latte', 400, 330, 550],
                    ['Milk Tea', 300, 350, 400],
                    ['Cheese Cocoa', 200, 280, 350],
                    ['Walnut Brownie', 270, 180, 220]
                ]
            },
            {
                transform: {
                    type: 'ecSort',
                    config: { dimension: '2017', order: 'desc' }
                }
            }
        ],
        series: [{
            type: 'pie',
            radius: ['30%', '60%'],
            label: { formatter: '{b}: {@2017} ({d}%)' },
            encode: { itemName: 'Product', value: '2017' }
        }]
    });

    // Pie Charts on GEO Map (simulated with background)
    init('chart-map-iceland-pie', {
        backgroundColor: '#404A59',
        title: { text: 'Pie on Geo', left: 'center', top: 10, textStyle: { color: '#eee' } },
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: {
            orient: 'horizontal',
            bottom: 10,
            center: 'center',
            textStyle: { color: '#eee' },
            data: ['Direct', 'Email', 'Ad', 'Video', 'Search']
        },
        series: [{
            name: 'Referer',
            type: 'pie',
            radius: ['30%', '50%'],
            center: ['50%', '50%'],
            itemStyle: { borderColor: '#404A59', borderWidth: 2 },
            label: { color: '#eee' },
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad' },
                { value: 135, name: 'Video' },
                { value: 1548, name: 'Search' }
            ]
        }]
    });

    // Nested Pies
    init('chart-pie-nest', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        legend: [
            { orient: 'horizontal', bottom: 10, left: 'center', data: ['Direct', 'Email', 'Ad', 'Video', 'Search'] },
            { orient: 'horizontal', bottom: 40, left: 'center', data: ['Google', 'Bing', 'Baidu', 'Yahoo'] }
        ],
        series: [
            {
                name: 'Outer',
                type: 'pie',
                radius: ['0%', '35%'],
                label: { position: 'inner' },
                data: [
                    { value: 335, name: 'Direct' },
                    { value: 310, name: 'Email' },
                    { value: 234, name: 'Ad' },
                    { value: 135, name: 'Video' },
                    { value: 1548, name: 'Search' }
                ]
            },
            {
                name: 'Inner',
                type: 'pie',
                radius: ['45%', '65%'],
                label: { formatter: '{b}: {d}%' },
                data: [
                    { value: 680, name: 'Google' },
                    { value: 420, name: 'Bing' },
                    { value: 280, name: 'Baidu' },
                    { value: 168, name: 'Yahoo' }
                ]
            }
        ]
    });

    // Calendar Pie
    init('chart-calendar-pie', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c} ({d}%)' },
        calendar: {
            top: 120,
            left: 'center',
            range: ['2023-01-01', '2023-06-30'],
            cellSize: ['auto', 13],
            yearLabel: { show: true },
            dayLabel: { firstDay: 1, nameMap: 'EN' },
            monthLabel: { show: true },
            splitLine: { show: true, lineStyle: { color: '#000', width: 0.5 } }
        },
        series: [
            {
                name: 'Pie',
                type: 'pie',
                radius: ['20%', '35%'],
                center: ['50%', '32%'],
                data: [
                    { value: 120, name: 'Work' },
                    { value: 80, name: 'Rest' },
                    { value: 60, name: 'Exercise' },
                    { value: 40, name: 'Other' }
                ]
            },
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: (function () {
                    var data = [];
                    var start = new Date('2023-01-01');
                    for (var i = 0; i < 180; i++) {
                        var date = new Date(start);
                        date.setDate(date.getDate() + i);
                        data.push([date.toISOString().slice(0, 10), Math.round(Math.random() * 10)]);
                    }
                    return data;
                })()
            }
        ]
    });
};
