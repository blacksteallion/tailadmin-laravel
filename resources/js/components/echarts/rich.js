export const initRichCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    init('chart-pie-rich-text', {
        tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
        legend: { top: '5%', left: 'center' },
        series: [{
            type: 'pie',
            radius: ['25%', '60%'],
            center: ['50%', '60%'],
            roseType: 'area',
            itemStyle: { borderRadius: 8 },
            label: {
                formatter: function (params) {
                    return '{name|' + params.name + '}\n{value|' + params.value + '  (' + params.percent + '%)}';
                },
                rich: {
                    name: { fontSize: 14, fontWeight: 'bold', color: '#333', lineHeight: 22 },
                    value: { fontSize: 12, color: '#999', lineHeight: 18 }
                }
            },
            data: [
                { value: 1048, name: 'Search Engine', itemStyle: { color: '#5470c6' } },
                { value: 735, name: 'Direct Access', itemStyle: { color: '#91cc75' } },
                { value: 580, name: 'Email Marketing', itemStyle: { color: '#fac858' } },
                { value: 484, name: 'Union Ads', itemStyle: { color: '#ee6666' } },
                { value: 300, name: 'Video Ads', itemStyle: { color: '#73c0de' } }
            ]
        }]
    });

    init('chart-pie-nest', {
        tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
        legend: { data: ['Direct', 'Email', 'Search', 'Video', 'Poster', 'Flyer', 'Banner', 'Social'], top: '2%', type: 'scroll' },
        series: [
            {
                name: 'Outer',
                type: 'pie',
                radius: ['45%', '65%'],
                label: {
                    formatter: '{b|{b}}\n{d|{d}%',
                    rich: {
                        b: { fontSize: 12, fontWeight: 'bold', color: '#333' },
                        d: { fontSize: 11, color: '#666' }
                    }
                },
                data: [
                    { value: 435, name: 'Direct', itemStyle: { color: '#5470c6' } },
                    { value: 310, name: 'Email', itemStyle: { color: '#91cc75' } },
                    { value: 234, name: 'Search', itemStyle: { color: '#fac858' } },
                    { value: 155, name: 'Video', itemStyle: { color: '#ee6666' } }
                ]
            },
            {
                name: 'Inner',
                type: 'pie',
                radius: ['0%', '38%'],
                label: { show: true, formatter: '{b}', fontSize: 13, fontWeight: 'bold' },
                labelLine: { show: true },
                data: [
                    { value: 200, name: 'Poster', itemStyle: { color: '#73c0de' } },
                    { value: 150, name: 'Flyer', itemStyle: { color: '#3ba272' } },
                    { value: 85, name: 'Banner', itemStyle: { color: '#fc8452' } },
                    { value: 60, name: 'Social', itemStyle: { color: '#9a60b4' } }
                ]
            }
        ]
    });

    init('chart-bar-rich-text', {
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        legend: { data: ['Sunny', 'Cloudy', 'Rainy'] },
        grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: { fontSize: 12 }
        },
        yAxis: { type: 'value' },
        series: [
            {
                name: 'Sunny',
                type: 'bar',
                stack: 'total',
                label: { show: true, formatter: '{c|{c}}\n{icon|}', rich: { c: { fontSize: 11, color: '#fff', fontWeight: 'bold' }, icon: { fontSize: 14, padding: [2, 0, 0, 0] } } },
                data: [5, 7, 8, 3, 6, 9, 10],
                itemStyle: { color: '#fac858', borderRadius: [0, 0, 0, 0] }
            },
            {
                name: 'Cloudy',
                type: 'bar',
                stack: 'total',
                label: { show: true, formatter: '{c|{c}}\n{icon|}', rich: { c: { fontSize: 11, color: '#fff', fontWeight: 'bold' }, icon: { fontSize: 14, padding: [2, 0, 0, 0] } } },
                data: [3, 2, 4, 5, 3, 1, 0],
                itemStyle: { color: '#91cc75' }
            },
            {
                name: 'Rainy',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    formatter: function (params) {
                        return '{c|' + params.value + '}\n{icon|}';
                    },
                    rich: {
                        c: { fontSize: 11, color: '#fff', fontWeight: 'bold' },
                        icon: { fontSize: 14, padding: [2, 0, 0, 0] }
                    }
                },
                data: [2, 1, 0, 4, 1, 0, 0],
                itemStyle: { color: '#73c0de' }
            }
        ]
    });
};

export default initRichCharts;
