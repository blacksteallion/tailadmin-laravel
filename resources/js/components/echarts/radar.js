export const initRadarCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = window.echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    // Basic Radar Chart
    init('chart-radar', {
        legend: { data: ['Budget', 'Actual'], bottom: 0 },
        tooltip: {},
        radar: {
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'IT', max: 30000 },
                { name: 'Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ]
        },
        series: [{
            name: 'Budget vs Actual',
            type: 'radar',
            data: [
                { value: [4200, 3000, 20000, 35000, 50000, 18000], name: 'Budget' },
                { value: [5000, 14000, 28000, 26000, 42000, 21000], name: 'Actual' }
            ]
        }]
    });

    // AQI - Radar Chart
    init('chart-radar-aqi', {
        title: { text: 'AQI - Radar Chart', left: 'center', top: 10 },
        legend: { data: ['Beijing', 'Shanghai'], bottom: 0 },
        tooltip: {},
        radar: {
            center: ['50%', '55%'],
            radius: '65%',
            indicator: [
                { name: 'PM2.5', max: 300 },
                { name: 'PM10', max: 300 },
                { name: 'SO2', max: 200 },
                { name: 'NO2', max: 200 },
                { name: 'CO', max: 10 },
                { name: 'O3', max: 300 }
            ]
        },
        series: [{
            name: 'AQI',
            type: 'radar',
            data: [
                { value: [180, 120, 40, 80, 3.5, 160], name: 'Beijing' },
                { value: [100, 90, 30, 60, 2.8, 120], name: 'Shanghai' }
            ]
        }]
    });

    // Customized Radar Chart
    init('chart-radar-custom', {
        legend: { data: ['Allocated Budget', 'Actual Spending'], bottom: 0 },
        tooltip: {},
        radar: {
            shape: 'circle',
            center: ['50%', '50%'],
            radius: '65%',
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 }
            ],
            name: { textStyle: { color: '#333' } },
            splitArea: { areaStyle: { color: ['#fff', '#f5f5f5', '#eee', '#ddd', '#ccc'] } },
            axisLine: { lineStyle: { color: '#aaa' } },
            splitLine: { lineStyle: { color: '#ccc' } }
        },
        series: [{
            name: 'Customized Radar',
            type: 'radar',
            symbol: 'diamond',
            symbolSize: 6,
            lineStyle: { width: 2 },
            areaStyle: { opacity: 0.2 },
            data: [
                { value: [4200, 3000, 20000, 35000, 50000, 18000], name: 'Allocated Budget' },
                { value: [5000, 14000, 28000, 26000, 42000, 21000], name: 'Actual Spending' }
            ]
        }]
    });

    // Proportion of Browsers
    init('chart-radar2', {
        title: { text: 'Proportion of Browsers', left: 'center', top: 0 },
        legend: { data: ['Chrome', 'Firefox', 'Safari', 'Edge'], bottom: 0 },
        tooltip: {},
        radar: {
            indicator: [
                { name: 'Speed', max: 100 },
                { name: 'Reliability', max: 100 },
                { name: 'Security', max: 100 },
                { name: 'Features', max: 100 },
                { name: 'UX', max: 100 }
            ]
        },
        series: [{
            name: 'Browser Proportion',
            type: 'radar',
            data: [
                { value: [95, 88, 82, 90, 85], name: 'Chrome', areaStyle: { opacity: 0.15 } },
                { value: [78, 92, 88, 75, 80], name: 'Firefox', areaStyle: { opacity: 0.15 } },
                { value: [92, 85, 80, 78, 95], name: 'Safari', areaStyle: { opacity: 0.15 } },
                { value: [88, 80, 85, 82, 78], name: 'Edge', areaStyle: { opacity: 0.15 } }
            ]
        }]
    });

    // Multiple Radar
    init('chart-radar-multiple', {
        legend: { data: ['Software', 'Hardware', 'Network'], bottom: 0 },
        tooltip: {},
        radar: {
            indicator: [
                { name: 'Performance', max: 100 },
                { name: 'Reliability', max: 100 },
                { name: 'Scalability', max: 100 },
                { name: 'Security', max: 100 },
                { name: 'Cost', max: 100 },
                { name: 'Usability', max: 100 }
            ]
        },
        series: [{
            name: 'Multiple Radar',
            type: 'radar',
            data: [
                {
                    value: [90, 80, 75, 88, 70, 85],
                    name: 'Software',
                    lineStyle: { color: '#c23531' },
                    areaStyle: { color: 'rgba(194,53,49,0.2)' },
                    itemStyle: { color: '#c23531' }
                },
                {
                    value: [70, 92, 65, 80, 85, 60],
                    name: 'Hardware',
                    lineStyle: { color: '#2f4554' },
                    areaStyle: { color: 'rgba(47,69,84,0.2)' },
                    itemStyle: { color: '#2f4554' }
                },
                {
                    value: [65, 78, 90, 75, 80, 72],
                    name: 'Network',
                    lineStyle: { color: '#61a0a8' },
                    areaStyle: { color: 'rgba(97,160,168,0.2)' },
                    itemStyle: { color: '#61a0a8' }
                }
            ]
        }]
    });
};
