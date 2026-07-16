export const initDatasetCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    init('chart-data-transform-sort-bar', {
        tooltip: { trigger: 'axis' },
        legend: {},
        dataset: {
            source: [
                ['Product', 'Sales'],
                ['Matcha Latte', 433],
                ['Milk Tea', 631],
                ['Cheese Cocoa', 359],
                ['Walnut Brownie', 200],
                ['Cheese Cake', 100],
                ['Brandy Chocolate', 530]
            ],
            transform: [{ type: 'sort', config: { dimension: 'Sales', order: 'desc' } }]
        },
        xAxis: { type: 'category', axisLabel: { rotate: 30 } },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', encode: { x: 'Product', y: 'Sales' } }]
    });

    init('chart-dataset-encode0', {
        tooltip: {},
        legend: { data: ['Sales', 'Expenses'] },
        dataset: {
            source: [
                ['Product', 'Sales', 'Expenses', 'Discount'],
                ['Latte', 220, 150, 20],
                ['Tea', 180, 130, 15],
                ['Juice', 300, 200, 30],
                ['Coffee', 250, 180, 25],
                ['Smoothie', 170, 120, 10]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [
            { type: 'bar', name: 'Sales', encode: { x: 'Product', y: 'Sales' } },
            { type: 'bar', name: 'Expenses', encode: { x: 'Product', y: 'Expenses' } }
        ]
    });

    init('chart-data-transform-multiple-pie', {
        tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
        title: [{ text: 'Monday', left: '25%', top: '5%', textAlign: 'center' }, { text: 'Tuesday', left: '75%', top: '5%', textAlign: 'center' }],
        dataset: {
            source: [
                ['Day', 'Type', 'Sales'],
                ['Monday', 'Email', 120],
                ['Monday', 'Search', 200],
                ['Monday', 'Direct', 80],
                ['Monday', 'Social', 100],
                ['Tuesday', 'Email', 150],
                ['Tuesday', 'Search', 180],
                ['Tuesday', 'Direct', 100],
                ['Tuesday', 'Social', 60]
            ],
            transform: [{ type: 'filter', config: { dimension: 'Day', value: 'Monday' } }, { type: 'filter', config: { dimension: 'Day', value: 'Tuesday' } }]
        },
        series: [
            {
                type: 'pie', radius: ['30%', '55%'], center: ['25%', '60%'],
                datasetIndex: 0,
                label: { formatter: '{b}: {d}%' }
            },
            {
                type: 'pie', radius: ['30%', '55%'], center: ['75%', '60%'],
                datasetIndex: 1,
                label: { formatter: '{b}: {d}%' }
            }
        ]
    });

    init('chart-dataset-default', {
        legend: {},
        tooltip: { trigger: 'axis' },
        dataset: {
            source: [
                ['Product', '2023', '2024', '2025'],
                ['Alpha', 120, 200, 180],
                ['Beta', 220, 180, 260],
                ['Gamma', 150, 230, 200],
                ['Delta', 80, 110, 140],
                ['Epsilon', 300, 250, 320]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [
            { type: 'bar', name: '2023', encode: { x: 'Product', y: '2023' } },
            { type: 'bar', name: '2024', encode: { x: 'Product', y: '2024' } },
            { type: 'bar', name: '2025', encode: { x: 'Product', y: '2025' } }
        ]
    });

    init('chart-dataset-encode1', {
        tooltip: {},
        legend: { data: ['GDP', 'Pop Growth'] },
        dataset: {
            source: [
                ['Country', 'GDP', 'Pop Growth'],
                ['China', 18200, 0.5],
                ['USA', 20500, 0.7],
                ['India', 8700, 1.1],
                ['Japan', 5100, -0.2],
                ['Germany', 4200, 0.3],
                ['UK', 2900, 0.6],
                ['France', 2800, 0.4]
            ]
        },
        xAxis: [{ type: 'category' }, { type: 'category', gridIndex: 1 }],
        yAxis: [{ type: 'value' }, { type: 'value', gridIndex: 1 }],
        grid: [{ bottom: '55%' }, { top: '55%' }],
        series: [
            { type: 'bar', name: 'GDP', xAxisIndex: 0, yAxisIndex: 0, encode: { x: 'Country', y: 'GDP' } },
            { type: 'line', name: 'Pop Growth', xAxisIndex: 1, yAxisIndex: 1, encode: { x: 'Country', y: 'Pop Growth' } }
        ]
    });

    init('chart-dataset-link', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Income', 'Expense'] },
        dataset: [
            {
                source: [
                    ['Month', 'Income', 'Expense'],
                    ['Jan', 1200, 800],
                    ['Feb', 1500, 950],
                    ['Mar', 1800, 1100],
                    ['Apr', 1400, 880],
                    ['May', 2000, 1200],
                    ['Jun', 1700, 1050]
                ]
            }
        ],
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [
            {
                type: 'bar', name: 'Income',
                datasetIndex: 0,
                encode: { x: 'Month', y: 'Income' }
            },
            {
                type: 'line', name: 'Expense',
                datasetIndex: 0,
                encode: { x: 'Month', y: 'Expense' }
            }
        ]
    });

    init('chart-dataset-series-layout-by', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Sales', 'Revenue', 'Profit'] },
        dataset: {
            source: [
                ['Date', 'Sales', 'Revenue', 'Profit'],
                ['Mon', 120, 450, 90],
                ['Tue', 200, 520, 150],
                ['Wed', 150, 400, 100],
                ['Thu', 80, 300, 60],
                ['Fri', 170, 480, 130]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [
            { type: 'bar', encode: { x: 'Date', y: 'Sales' } },
            { type: 'bar', encode: { x: 'Date', y: 'Revenue' } },
            { type: 'bar', encode: { x: 'Date', y: 'Profit' } }
        ]
    });

    init('chart-dataset-simple0', {
        tooltip: { trigger: 'axis' },
        legend: {},
        dataset: {
            source: [
                ['Category', 'Score'],
                ['A', 82],
                ['B', 93],
                ['C', 71],
                ['D', 65],
                ['E', 88]
            ]
        },
        xAxis: { type: 'category' },
        yAxis: { type: 'value' },
        series: [{ type: 'bar', encode: { x: 'Category', y: 'Score' } }]
    });

    init('chart-dataset-simple1', {
        tooltip: { trigger: 'axis' },
        legend: { data: ['Score A', 'Score B'] },
        dataset: {
            source: [
                { Name: 'Alice', ScoreA: 85, ScoreB: 78 },
                { Name: 'Bob', ScoreA: 72, ScoreB: 90 },
                { Name: 'Charlie', ScoreA: 91, ScoreB: 65 },
                { Name: 'Diana', ScoreA: 68, ScoreB: 82 },
                { Name: 'Eve', ScoreA: 95, ScoreB: 88 }
            ]
        },
        xAxis: { type: 'category', data: ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'] },
        yAxis: { type: 'value' },
        series: [
            { type: 'bar', name: 'Score A', encode: { x: 'Name', y: 'ScoreA' } },
            { type: 'bar', name: 'Score B', encode: { x: 'Name', y: 'ScoreB' } }
        ]
    });
};

export default initDatasetCharts;
