export const initCandlestickCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = window.echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    const generateDates = (start, count) => {
        var dates = [];
        var d = new Date(start);
        for (var i = 0; i < count; i++) {
            dates.push(d.toISOString().slice(0, 10));
            d.setDate(d.getDate() + 1);
        }
        return dates;
    };

    const ohlcData = [
        [20, 24, 19, 25], [23, 26, 22, 27], [25, 24, 23, 26], [22, 28, 21, 29],
        [27, 25, 24, 28], [24, 30, 23, 31], [29, 28, 26, 30], [26, 27, 24, 28],
        [27, 29, 26, 31], [28, 26, 25, 30], [25, 31, 24, 32], [30, 29, 27, 31],
        [28, 32, 27, 33], [31, 30, 28, 33], [29, 33, 28, 34], [32, 31, 29, 34],
        [30, 34, 29, 35], [33, 32, 30, 35], [31, 35, 30, 36], [34, 33, 31, 36]
    ];

    var dates = generateDates('2023-01-01', 20);
    var values = ohlcData.map(function (d) { return [d[1], d[0], d[2], d[3]]; });

    // Basic Candlestick
    init('chart-candlestick-simple', {
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        title: { text: 'Basic Candlestick', left: 'center' },
        xAxis: { type: 'category', data: dates },
        yAxis: { scale: true },
        series: [{
            type: 'candlestick',
            data: ohlcData,
            itemStyle: {
                color: '#ec0000',
                color0: '#00da3c',
                borderColor: '#8A0000',
                borderColor0: '#008F28'
            }
        }]
    });

    // OHLC Chart
    init('chart-custom-ohlc', {
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        title: { text: 'OHLC Chart', left: 'center' },
        xAxis: { type: 'category', data: dates },
        yAxis: { scale: true },
        grid: { left: '10%', right: '10%', bottom: '15%' },
        dataZoom: [{ type: 'inside', start: 50, end: 100 }, { type: 'slider' }],
        series: [{
            type: 'candlestick',
            data: ohlcData,
            itemStyle: {
                color: '#f6c022',
                color0: '#26a69a',
                borderColor: '#f6c022',
                borderColor0: '#26a69a'
            }
        }]
    });

    // ShangHai Index
    init('chart-candlestick-sh', {
        title: { text: 'ShangHai Index', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        legend: { data: ['KLine', 'MA5', 'MA10'], bottom: 0 },
        xAxis: { type: 'category', data: dates, axisLabel: { rotate: 45 } },
        yAxis: { scale: true, splitArea: { show: true } },
        series: [
            {
                name: 'KLine',
                type: 'candlestick',
                data: ohlcData,
                itemStyle: {
                    color: '#ec0000',
                    color0: '#00da3c',
                    borderColor: '#8A0000',
                    borderColor0: '#008F28'
                }
            },
            { name: 'MA5', type: 'line', data: [23, 24, 25, 26, 25, 27, 28, 26, 28, 29, 28, 30, 30, 31, 31, 32, 32, 33, 33, 34], smooth: true, lineStyle: { width: 1 }, showSymbol: false },
            { name: 'MA10', type: 'line', data: [22, 23, 24, 25, 25, 26, 27, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33], smooth: true, lineStyle: { width: 1 }, showSymbol: false }
        ]
    });

    // Large Scale Candlestick
    var largeDates = generateDates('2022-01-01', 60);
    var largeData = [];
    for (var i = 0; i < 60; i++) {
        var open = Math.round((Math.random() * 30 + 10) * 100) / 100;
        var close = Math.round((open + (Math.random() - 0.5) * 8) * 100) / 100;
        var low = Math.round(Math.min(open, close) - Math.random() * 3) * 100 / 100;
        var high = Math.round(Math.max(open, close) + Math.random() * 3) * 100 / 100;
        largeData.push([open, close, low, high]);
    }
    init('chart-candlestick-large', {
        title: { text: 'Large Scale Candlestick', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        xAxis: { type: 'category', data: largeDates, axisLabel: { rotate: 45 } },
        yAxis: { scale: true },
        dataZoom: [{ type: 'inside', start: 50, end: 100 }, { type: 'slider' }],
        series: [{
            type: 'candlestick',
            data: largeData,
            itemStyle: {
                color: '#ec0000',
                color0: '#00da3c',
                borderColor: '#8A0000',
                borderColor0: '#008F28'
            }
        }]
    });

    // Axis Pointer Link and Touch (2 charts)
    init('chart-candlestick-touch', {
        title: [{ text: 'Axis Pointer Link', left: 'center', top: 0 }],
        tooltip: { trigger: 'axis', axisPointer: { link: [{ xAxisIndex: [0, 1] }] } },
        axisPointer: { link: [{ xAxisIndex: [0, 1] }] },
        grid: [
            { left: '8%', right: '8%', height: '35%', top: '10%' },
            { left: '8%', right: '8%', top: '55%', height: '30%' }
        ],
        xAxis: [
            { type: 'category', data: dates, gridIndex: 0 },
            { type: 'category', data: dates, gridIndex: 1 }
        ],
        yAxis: [
            { scale: true, gridIndex: 0 },
            { scale: true, gridIndex: 1 }
        ],
        series: [
            { type: 'candlestick', xAxisIndex: 0, yAxisIndex: 0, data: ohlcData, itemStyle: { color: '#ec0000', color0: '#00da3c', borderColor: '#8A0000', borderColor0: '#008F28' } },
            { type: 'line', xAxisIndex: 1, yAxisIndex: 1, data: ohlcData.map(function (d) { return d[1]; }), smooth: true, lineStyle: { color: '#c23531' }, showSymbol: false }
        ]
    });

    // Intraday Chart with Breaks (I)
    var intradayTimes = [];
    for (var h = 9; h <= 15; h++) {
        for (var m = 0; m < 60; m += 5) {
            if (h === 11 && m >= 30 && h !== 13) continue;
            if (h === 15 && m > 0) break;
            intradayTimes.push(h + ':' + (m < 10 ? '0' + m : m));
        }
    }
    var intradayData = [];
    for (var j = 0; j < intradayTimes.length; j++) {
        intradayData.push([20 + Math.random() * 5, 20 + Math.random() * 5, 18 + Math.random() * 3, 23 + Math.random() * 5]);
    }
    init('chart-intraday-breaks-1', {
        title: { text: 'Intraday Chart with Breaks (I)', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        xAxis: { type: 'category', data: intradayTimes, axisLabel: { rotate: 45 } },
        yAxis: { scale: true },
        series: [{
            type: 'candlestick',
            data: intradayData,
            itemStyle: {
                color: '#ec0000',
                color0: '#00da3c',
                borderColor: '#8A0000',
                borderColor0: '#008F28'
            }
        }]
    });

    // Intraday Chart with Breaks (II)
    init('chart-intraday-breaks-2', {
        title: { text: 'Intraday Chart with Breaks (II)', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        xAxis: {
            type: 'category',
            data: intradayTimes,
            axisLabel: { rotate: 45 },
            axisTick: { alignWithLabel: true }
        },
        yAxis: { scale: true, splitArea: { show: true } },
        grid: { left: '10%', right: '10%', bottom: '15%' },
        dataZoom: [{ type: 'inside', start: 0, end: 100 }],
        series: [{
            type: 'candlestick',
            data: intradayData,
            itemStyle: {
                color: '#f6c022',
                color0: '#26a69a',
                borderColor: '#f6c022',
                borderColor0: '#26a69a'
            }
        }]
    });

    // ShangHai Index 2015
    var sh2015Dates = generateDates('2015-01-05', 25);
    var sh2015Data = [
        [3100, 3200, 3080, 3250], [3180, 3280, 3150, 3300], [3250, 3180, 3120, 3290],
        [3200, 3350, 3180, 3400], [3320, 3420, 3300, 3480], [3400, 3350, 3280, 3430],
        [3360, 3500, 3340, 3520], [3480, 3420, 3360, 3510], [3400, 3550, 3380, 3580],
        [3520, 3600, 3500, 3650], [3580, 3520, 3460, 3600], [3540, 3700, 3520, 3720],
        [3680, 3650, 3600, 3700], [3660, 3800, 3640, 3820], [3780, 3750, 3700, 3800],
        [3760, 3900, 3740, 3920], [3880, 3850, 3800, 3900], [3860, 3980, 3840, 4000],
        [3960, 3920, 3880, 3980], [3930, 4050, 3910, 4080], [4020, 4000, 3940, 4060],
        [4010, 4150, 3990, 4180], [4120, 4100, 4050, 4160], [4110, 4250, 4090, 4280],
        [4230, 4200, 4150, 4260]
    ];
    init('chart-candlestick-sh-2015', {
        title: { text: 'ShangHai Index 2015', left: 'center' },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        xAxis: { type: 'category', data: sh2015Dates, axisLabel: { rotate: 45 } },
        yAxis: { scale: true },
        series: [
            {
                type: 'candlestick',
                data: sh2015Data,
                itemStyle: {
                    color: '#ec0000',
                    color0: '#00da3c',
                    borderColor: '#8A0000',
                    borderColor0: '#008F28'
                },
                markLine: {
                    data: [
                        { yAxis: 3800, name: '3800 Line', lineStyle: { color: '#c23531', type: 'dashed', width: 1 } }
                    ],
                    label: { show: true, formatter: '{c}', position: 'end' }
                }
            }
        ]
    });

    // Stock Matrix (multiple small candlestick charts)
    var stockCategories = ['AMZN', 'GOOG', 'MSFT', 'AAPL'];
    init('chart-matrix-stock', {
        title: { text: 'Stock Matrix', left: 'center', top: 0 },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        legend: { data: stockCategories, bottom: 0 },
        grid: [
            { left: '8%', right: '52%', top: '10%', height: '35%' },
            { left: '52%', right: '8%', top: '10%', height: '35%' },
            { left: '8%', right: '52%', top: '55%', height: '35%' },
            { left: '52%', right: '8%', top: '55%', height: '35%' }
        ],
        xAxis: [
            { type: 'category', data: dates.slice(0, 10), gridIndex: 0, axisLabel: { show: false } },
            { type: 'category', data: dates.slice(0, 10), gridIndex: 1, axisLabel: { show: false } },
            { type: 'category', data: dates.slice(0, 10), gridIndex: 2 },
            { type: 'category', data: dates.slice(0, 10), gridIndex: 3 }
        ],
        yAxis: [
            { scale: true, gridIndex: 0, splitArea: { show: true } },
            { scale: true, gridIndex: 1, splitArea: { show: true } },
            { scale: true, gridIndex: 2, splitArea: { show: true } },
            { scale: true, gridIndex: 3, splitArea: { show: true } }
        ],
        series: [
            {
                name: 'AMZN', type: 'candlestick', xAxisIndex: 0, yAxisIndex: 0,
                data: ohlcData.slice(0, 10),
                itemStyle: { color: '#ec0000', color0: '#00da3c', borderColor: '#8A0000', borderColor0: '#008F28' }
            },
            {
                name: 'GOOG', type: 'candlestick', xAxisIndex: 1, yAxisIndex: 1,
                data: ohlcData.slice(5, 15),
                itemStyle: { color: '#f6c022', color0: '#26a69a', borderColor: '#f6c022', borderColor0: '#26a69a' }
            },
            {
                name: 'MSFT', type: 'candlestick', xAxisIndex: 2, yAxisIndex: 2,
                data: ohlcData.slice(3, 13),
                itemStyle: { color: '#c23531', color0: '#2f4554', borderColor: '#c23531', borderColor0: '#2f4554' }
            },
            {
                name: 'AAPL', type: 'candlestick', xAxisIndex: 3, yAxisIndex: 3,
                data: ohlcData.slice(7, 17),
                itemStyle: { color: '#d48265', color0: '#61a0a8', borderColor: '#d48265', borderColor0: '#61a0a8' }
            }
        ]
    });
};
