export const initFunnelCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = window.echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    init('chart-funnel', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
        legend: { data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'] },
        series: [{
            name: 'Funnel',
            type: 'funnel',
            left: '10%', top: 60, bottom: 60,
            width: '80%',
            min: 0, max: 100,
            minSize: '0%', maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: { show: true, formatter: '{b} ({c}%)' },
            emphasis: {
                label: { fontSize: 18 }
            },
            data: [
                { value: 100, name: 'Show' },
                { value: 80, name: 'Click' },
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' }
            ]
        }]
    });

    init('chart-funnel-align', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
        legend: { data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'] },
        series: [{
            name: 'Funnel',
            type: 'funnel',
            left: '10%', top: 60, bottom: 60,
            width: '80%',
            min: 0, max: 100,
            minSize: '0%', maxSize: '100%',
            sort: 'descending',
            gap: 2,
            funnelAlign: 'left',
            label: { show: true, formatter: '{b} ({c}%)' },
            emphasis: {
                label: { fontSize: 18 }
            },
            data: [
                { value: 100, name: 'Show' },
                { value: 80, name: 'Click' },
                { value: 60, name: 'Visit' },
                { value: 40, name: 'Inquiry' },
                { value: 20, name: 'Order' }
            ]
        }]
    });

    init('chart-funnel-customize', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
        legend: { data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'] },
        series: [{
            name: 'Funnel',
            type: 'funnel',
            left: '10%', top: 60, bottom: 60,
            width: '80%',
            min: 0, max: 100,
            minSize: '10%', maxSize: '100%',
            sort: 'descending',
            gap: 2,
            label: { show: true, position: 'inside', formatter: '{c}%' },
            labelLine: { length: 20 },
            itemStyle: { borderColor: '#fff', borderWidth: 2 },
            emphasis: {
                label: { fontSize: 20 }
            },
            data: [
                { value: 100, name: 'Show', itemStyle: { color: '#5470c6' } },
                { value: 80, name: 'Click', itemStyle: { color: '#91cc75' } },
                { value: 60, name: 'Visit', itemStyle: { color: '#fac858' } },
                { value: 40, name: 'Inquiry', itemStyle: { color: '#ee6666' } },
                { value: 20, name: 'Order', itemStyle: { color: '#73c0de' } }
            ]
        }]
    });

    init('chart-funnel-mutiple', {
        tooltip: { trigger: 'item', formatter: '{a} <br/>{b} : {c}%' },
        legend: { data: ['Channel A', 'Channel B'] },
        series: [
            {
                name: 'Channel A',
                type: 'funnel',
                left: '5%', top: 60, bottom: 60,
                width: '40%',
                min: 0, max: 100,
                minSize: '0%', maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: { show: true, formatter: '{b} ({c}%)' },
                data: [
                    { value: 100, name: 'Show' },
                    { value: 80, name: 'Click' },
                    { value: 60, name: 'Visit' },
                    { value: 40, name: 'Inquiry' },
                    { value: 20, name: 'Order' }
                ]
            },
            {
                name: 'Channel B',
                type: 'funnel',
                left: '55%', top: 60, bottom: 60,
                width: '40%',
                min: 0, max: 100,
                minSize: '0%', maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: { show: true, formatter: '{b} ({c}%)' },
                data: [
                    { value: 90, name: 'Show' },
                    { value: 70, name: 'Click' },
                    { value: 50, name: 'Visit' },
                    { value: 30, name: 'Inquiry' },
                    { value: 10, name: 'Order' }
                ]
            }
        ]
    });
};

export default initFunnelCharts;
