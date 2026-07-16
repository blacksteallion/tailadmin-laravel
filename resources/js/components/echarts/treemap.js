export const initTreemapCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = window.echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    init('chart-treemap-simple', {
        tooltip: { formatter: '{b}: {c}' },
        series: [{
            type: 'treemap',
            roam: false,
            data: [
                { name: 'Node A', value: 10, children: [{ name: 'Leaf A1', value: 4 }, { name: 'Leaf A2', value: 6 }] },
                { name: 'Node B', value: 20, children: [{ name: 'Leaf B1', value: 8 }, { name: 'Leaf B2', value: 12 }] },
                { name: 'Node C', value: 30, children: [{ name: 'Leaf C1', value: 10 }, { name: 'Leaf C2', value: 20 }] },
                { name: 'Node D', value: 40, children: [{ name: 'Leaf D1', value: 15 }, { name: 'Leaf D2', value: 25 }] }
            ],
            label: { show: true, formatter: '{b}' },
            breadcrumb: { show: false }
        }]
    });

    init('chart-treemap-drill-down', {
        series: [{
            type: 'treemap',
            roam: false,
            leafDepth: 1,
            data: [
                {
                    name: 'ECharts', value: 40, children: [
                        { name: 'Component', value: 20, children: [{ name: 'Chart', value: 10 }, { name: 'Axis', value: 10 }] },
                        { name: 'Feature', value: 20, children: [{ name: 'Tooltip', value: 10 }, { name: 'Legend', value: 10 }] }
                    ]
                },
                {
                    name: 'ZRender', value: 60, children: [
                        { name: 'Shape', value: 30, children: [{ name: 'Circle', value: 15 }, { name: 'Rect', value: 15 }] },
                        { name: 'Effect', value: 30, children: [{ name: 'Ripple', value: 15 }, { name: 'Bounce', value: 15 }] }
                    ]
                }
            ],
            label: { show: true, formatter: '{b}' },
            breadcrumb: { show: true, left: 'center' }
        }]
    });

    init('chart-treemap-disk', {
        series: [{
            type: 'treemap',
            roam: false,
            nodeClick: 'zoomToNode',
            breadcrumb: { show: true, top: 'bottom' },
            label: { show: true, formatter: '{b}\n{c} GB' },
            data: [
                {
                    name: 'Documents', value: 50, children: [
                        { name: 'Work', value: 30, children: [{ name: 'Reports', value: 15 }, { name: 'Projects', value: 15 }] },
                        { name: 'Personal', value: 20, children: [{ name: 'Photos', value: 12 }, { name: 'Music', value: 8 }] }
                    ]
                },
                {
                    name: 'Applications', value: 30, children: [
                        { name: 'Browser', value: 15 },
                        { name: 'IDE', value: 10 },
                        { name: 'Games', value: 5 }
                    ]
                },
                {
                    name: 'System', value: 20, children: [
                        { name: 'OS', value: 12 },
                        { name: 'Drivers', value: 5 },
                        { name: 'Temp', value: 3 }
                    ]
                }
            ]
        }]
    });

    init('chart-treemap-obama', {
        tooltip: { formatter: '{b}: ${c} Billion' },
        series: [{
            type: 'treemap',
            roam: false,
            breadcrumb: { show: true },
            label: {
                show: true,
                formatter: function (params) {
                    var arr = [params.name];
                    if (params.value) arr.push('$' + params.value + 'B');
                    return arr.join('\n');
                },
                fontSize: 13
            },
            upperLabel: { show: true, height: 30, fontSize: 14, fontWeight: 'bold' },
            itemStyle: { borderColor: '#fff', borderWidth: 2, gapWidth: 2 },
            levels: [
                { itemStyle: { borderColor: '#555', borderWidth: 4, gapWidth: 4 } },
                { colorSaturation: [0.3, 0.7], itemStyle: { borderColorSaturation: 0.7, gapWidth: 2, borderWidth: 2 } },
                { colorSaturation: [0.3, 0.7], itemStyle: { borderColorSaturation: 0.7, gapWidth: 1, borderWidth: 1 } }
            ],
            data: [
                {
                    name: 'Healthcare', value: 850, children: [
                        { name: 'Medicare', value: 500 },
                        { name: 'Medicaid', value: 350 }
                    ]
                },
                {
                    name: 'Defense', value: 600, children: [
                        { name: 'Operations', value: 300 },
                        { name: 'Personnel', value: 150 },
                        { name: 'Equipment', value: 150 }
                    ]
                },
                {
                    name: 'Social Security', value: 750, children: [
                        { name: 'Retirement', value: 500 },
                        { name: 'Disability', value: 250 }
                    ]
                },
                {
                    name: 'Education', value: 200, children: [
                        { name: 'K-12', value: 120 },
                        { name: 'Higher Ed', value: 80 }
                    ]
                }
            ]
        }]
    });

    init('chart-treemap-show-parent', {
        series: [{
            type: 'treemap',
            roam: false,
            label: { show: true, formatter: '{b}' },
            upperLabel: { show: true, height: 28, fontSize: 13, fontWeight: 'bold', color: '#fff', backgroundColor: 'transparent' },
            itemStyle: { borderColor: '#fff', borderWidth: 2, gapWidth: 2 },
            levels: [
                { itemStyle: { borderColor: '#555', borderWidth: 4, gapWidth: 4 }, upperLabel: { show: false } },
                { colorSaturation: [0.3, 0.6], itemStyle: { borderColorSaturation: 0.6, gapWidth: 2, borderWidth: 2 } }
            ],
            data: [
                {
                    name: 'Europe', value: 40, children: [
                        { name: 'Germany', value: 15 },
                        { name: 'France', value: 12 },
                        { name: 'UK', value: 13 }
                    ]
                },
                {
                    name: 'Asia', value: 50, children: [
                        { name: 'China', value: 25 },
                        { name: 'Japan', value: 15 },
                        { name: 'India', value: 10 }
                    ]
                },
                {
                    name: 'Americas', value: 35, children: [
                        { name: 'USA', value: 20 },
                        { name: 'Brazil', value: 15 }
                    ]
                }
            ]
        }]
    });

    init('chart-treemap-sunburst-transition', {
        tooltip: { formatter: '{b}: {c}' },
        series: [{
            type: 'treemap',
            roam: false,
            leafDepth: 2,
            drillDownIcon: '',
            label: {
                show: true,
                formatter: '{b}',
                fontSize: 13
            },
            breadcrumb: { show: true, bottom: 10 },
            data: [
                {
                    name: 'Product Line A', value: 50, children: [
                        {
                            name: 'Category 1', value: 25, children: [
                                { name: 'Item A1', value: 12 },
                                { name: 'Item A2', value: 13 }
                            ]
                        },
                        {
                            name: 'Category 2', value: 25, children: [
                                { name: 'Item B1', value: 10 },
                                { name: 'Item B2', value: 15 }
                            ]
                        }
                    ]
                },
                {
                    name: 'Product Line B', value: 40, children: [
                        {
                            name: 'Category 3', value: 20, children: [
                                { name: 'Item C1', value: 10 },
                                { name: 'Item C2', value: 10 }
                            ]
                        },
                        {
                            name: 'Category 4', value: 20, children: [
                                { name: 'Item D1', value: 8 },
                                { name: 'Item D2', value: 12 }
                            ]
                        }
                    ]
                },
                {
                    name: 'Product Line C', value: 30, children: [
                        { name: 'Category 5', value: 18 },
                        { name: 'Category 6', value: 12 }
                    ]
                }
            ]
        }]
    });

    init('chart-treemap-visual', {
        tooltip: { formatter: '{b}: {c}' },
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 100,
            inRange: { color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83'] },
            calculable: true
        },
        series: [{
            type: 'treemap',
            roam: false,
            label: { show: true, formatter: '{b}\n{c}' },
            breadcrumb: { show: false },
            data: [
                { name: 'Sales', value: 85 },
                { name: 'Marketing', value: 62 },
                { name: 'R&D', value: 78 },
                { name: 'Support', value: 45 },
                { name: 'Operations', value: 90 },
                { name: 'Finance', value: 55 },
                { name: 'HR', value: 38 },
                { name: 'Legal', value: 30 }
            ]
        }]
    });
};

export default initTreemapCharts;
