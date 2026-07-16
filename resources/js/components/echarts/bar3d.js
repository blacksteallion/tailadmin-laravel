export const initBar3dCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    init('chart-bar3d-dataset', {
        tooltip: {},
        xAxis3D: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
        yAxis3D: { type: 'category', data: ['Q1', 'Q2', 'Q3', 'Q4'] },
        zAxis3D: { type: 'value', name: 'Sales' },
        grid3D: { boxWidth: 120, boxDepth: 80, viewControl: { projection: 'perspective', autoRotate: true } },
        dataset: {
            source: [
                ['Product', 'Quarter', 'Sales'],
                ['A', 'Q1', 120], ['A', 'Q2', 150], ['A', 'Q3', 180], ['A', 'Q4', 200],
                ['B', 'Q1', 90], ['B', 'Q2', 110], ['B', 'Q3', 130], ['B', 'Q4', 160],
                ['C', 'Q1', 70], ['C', 'Q2', 85], ['C', 'Q3', 100], ['C', 'Q4', 120],
                ['D', 'Q1', 50], ['D', 'Q2', 65], ['D', 'Q3', 80], ['D', 'Q4', 95],
                ['E', 'Q1', 40], ['E', 'Q2', 55], ['E', 'Q3', 70], ['E', 'Q4', 90]
            ]
        },
        series: [{ type: 'bar3D', shading: 'lambert', encode: { x: 'Product', y: 'Quarter', z: 'Sales' } }]
    });

    init('chart-bar3d-global-population', {
        tooltip: {},
        xAxis3D: { type: 'category', data: ['China', 'India', 'USA', 'Indonesia', 'Pakistan', 'Brazil', 'Nigeria', 'Bangladesh'] },
        yAxis3D: { type: 'category', data: ['2020', '2025'] },
        zAxis3D: { type: 'value', name: 'Population (M)' },
        grid3D: { boxWidth: 150, boxDepth: 80, viewControl: { projection: 'perspective', distance: 220 } },
        visualMap: { max: 1500, inRange: { color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#fee090', '#fdae61', '#f46d43', '#d73027'] } },
        dataset: {
            source: [
                ['Country', 'Year', 'Population'],
                ['China', '2020', 1412], ['China', '2025', 1425],
                ['India', '2020', 1380], ['India', '2025', 1450],
                ['USA', '2020', 331], ['USA', '2025', 340],
                ['Indonesia', '2020', 274], ['Indonesia', '2025', 285],
                ['Pakistan', '2020', 221], ['Pakistan', '2025', 240],
                ['Brazil', '2020', 213], ['Brazil', '2025', 220],
                ['Nigeria', '2020', 206], ['Nigeria', '2025', 230],
                ['Bangladesh', '2020', 165], ['Bangladesh', '2025', 178]
            ]
        },
        series: [{ type: 'bar3D', shading: 'lambert', encode: { x: 'Country', y: 'Year', z: 'Population' } }]
    });

    init('chart-bar3d-myth', {
        tooltip: {},
        xAxis3D: { type: 'category', data: ['Zeus', 'Poseidon', 'Hades', 'Athena', 'Ares', 'Apollo'] },
        yAxis3D: { type: 'category', data: ['Power', 'Wisdom', 'Domain'] },
        zAxis3D: { type: 'value', name: 'Strength' },
        grid3D: { boxWidth: 120, boxDepth: 80, viewControl: { projection: 'perspective', alpha: 20, beta: 40 } },
        visualMap: { max: 100, inRange: { color: ['#834d9b', '#d04ed6', '#f953c6', '#f5af19', '#f12711'] } },
        dataset: {
            source: [
                ['God', 'Attribute', 'Strength'],
                ['Zeus', 'Power', 95], ['Zeus', 'Wisdom', 70], ['Zeus', 'Domain', 100],
                ['Poseidon', 'Power', 85], ['Poseidon', 'Wisdom', 50], ['Poseidon', 'Domain', 90],
                ['Hades', 'Power', 80], ['Hades', 'Wisdom', 60], ['Hades', 'Domain', 75],
                ['Athena', 'Power', 60], ['Athena', 'Wisdom', 100], ['Athena', 'Domain', 65],
                ['Ares', 'Power', 90], ['Ares', 'Wisdom', 30], ['Ares', 'Domain', 50],
                ['Apollo', 'Power', 70], ['Apollo', 'Wisdom', 85], ['Apollo', 'Domain', 80]
            ]
        },
        series: [{ type: 'bar3D', shading: 'color', encode: { x: 'God', y: 'Attribute', z: 'Strength' } }]
    });

    init('chart-bar3d-noise', {
        tooltip: {},
        xAxis3D: { type: 'category', data: Array.from({ length: 12 }, (_, i) => 'M' + (i + 1)) },
        yAxis3D: { type: 'category', data: ['A', 'B', 'C', 'D', 'E'] },
        zAxis3D: { type: 'value', name: 'Value' },
        grid3D: { boxWidth: 160, boxDepth: 100, viewControl: { projection: 'perspective', autoRotate: true, autoRotateSpeed: 5 } },
        visualMap: { max: 100, inRange: { color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'] } },
        series: [{
            type: 'bar3D',
            shading: 'lambert',
            data: (function () {
                var data = [];
                var categories = ['A', 'B', 'C', 'D', 'E'];
                for (var i = 0; i < 12; i++) {
                    for (var j = 0; j < 5; j++) {
                        data.push({
                            value: [i, j, Math.round(Math.random() * 80 + 20)]
                        });
                    }
                }
                return data;
            })(),
            encode: { x: 0, y: 1, z: 2 }
        }]
    });

    init('chart-bar3d-punch-card', {
        tooltip: {},
        xAxis3D: { type: 'category', data: ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'] },
        yAxis3D: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
        zAxis3D: { type: 'value', name: 'Activity' },
        grid3D: { boxWidth: 160, boxDepth: 100, viewControl: { projection: 'perspective', alpha: 25, beta: 35 } },
        visualMap: { max: 50, inRange: { color: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026'] } },
        series: [{
            type: 'bar3D',
            shading: 'lambert',
            data: (function () {
                var data = [];
                var hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
                var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
                for (var i = 0; i < hours.length; i++) {
                    for (var j = 0; j < days.length; j++) {
                        data.push({ value: [i, j, Math.round(Math.random() * 50)] });
                    }
                }
                return data;
            })(),
            encode: { x: 0, y: 1, z: 2 }
        }]
    });

    init('chart-bar3d-simplex-noise', {
        tooltip: {},
        xAxis3D: { type: 'value', min: -5, max: 5 },
        yAxis3D: { type: 'value', min: -5, max: 5 },
        zAxis3D: { type: 'value', name: 'Height' },
        grid3D: { boxWidth: 150, boxDepth: 150, boxHeight: 80, viewControl: { projection: 'perspective', autoRotate: true, autoRotateSpeed: 8 } },
        visualMap: { max: 5, min: -5, inRange: { color: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac'] } },
        series: [{
            type: 'bar3D',
            shading: 'color',
            data: (function () {
                var data = [];
                for (var i = -5; i < 6; i++) {
                    for (var j = -5; j < 6; j++) {
                        var val = Math.sin(i * 0.5) * Math.cos(j * 0.5) * 5;
                        data.push({ value: [i, j, Math.round(val * 10) / 10] });
                    }
                }
                return data;
            })(),
            encode: { x: 0, y: 1, z: 2 }
        }]
    });

    init('chart-bar3d-voxelize', {
        tooltip: {},
        xAxis3D: { type: 'category', data: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8'] },
        yAxis3D: { type: 'category', data: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'] },
        zAxis3D: { type: 'value', name: 'Pixel' },
        grid3D: { boxWidth: 120, boxDepth: 120, boxHeight: 60, viewControl: { projection: 'perspective', distance: 200 } },
        visualMap: { max: 255, inRange: { color: ['#000', '#333', '#666', '#999', '#ccc', '#fff'] } },
        series: [{
            type: 'bar3D',
            shading: 'color',
            data: (function () {
                var data = [];
                for (var i = 0; i < 8; i++) {
                    for (var j = 0; j < 8; j++) {
                        data.push({ value: [i, j, Math.round(Math.random() * 255)] });
                    }
                }
                return data;
            })(),
            encode: { x: 0, y: 1, z: 2 }
        }]
    });

    init('chart-global-population-bar3d-on-globe', {
        tooltip: {},
        globe: { baseTexture: 'https://echarts.apache.org/examples/images/asset/earth.jpg', shading: 'lambert', viewControl: { distance: 220 } },
        xAxis3D: { type: 'category', data: ['Asia', 'Africa', 'Europe', 'Americas', 'Oceania'] },
        yAxis3D: { type: 'category', data: ['2020', '2025'] },
        zAxis3D: { type: 'value', name: 'Billions' },
        grid3D: { boxWidth: 120, boxDepth: 80, boxHeight: 50, viewControl: { projection: 'perspective', distance: 220 }, light: { main: { intensity: 1.2, shadow: true } } },
        visualMap: { max: 5, inRange: { color: ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15'] } },
        series: [{
            type: 'bar3D',
            shading: 'lambert',
            dataset: {
                source: [
                    ['Continent', 'Year', 'Population'],
                    ['Asia', '2020', 4.6], ['Asia', '2025', 4.8],
                    ['Africa', '2020', 1.3], ['Africa', '2025', 1.5],
                    ['Europe', '2020', 0.75], ['Europe', '2025', 0.74],
                    ['Americas', '2020', 1.0], ['Americas', '2025', 1.05],
                    ['Oceania', '2020', 0.043], ['Oceania', '2025', 0.048]
                ]
            },
            encode: { x: 'Continent', y: 'Year', z: 'Population' }
        }]
    });

    init('chart-image-to-bar3d', {
        tooltip: {},
        xAxis3D: { type: 'category', data: Array.from({ length: 10 }, (_, i) => 'X' + i) },
        yAxis3D: { type: 'category', data: Array.from({ length: 10 }, (_, i) => 'Y' + i) },
        zAxis3D: { type: 'value', name: 'Intensity' },
        grid3D: { boxWidth: 140, boxDepth: 140, boxHeight: 80, viewControl: { projection: 'perspective', alpha: 30, beta: 40 } },
        visualMap: { max: 200, inRange: { color: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'] } },
        series: [{
            type: 'bar3D',
            shading: 'lambert',
            data: (function () {
                var data = [];
                for (var i = 0; i < 10; i++) {
                    for (var j = 0; j < 10; j++) {
                        var dist = Math.sqrt(Math.pow(i - 5, 2) + Math.pow(j - 5, 2));
                        var val = Math.max(0, 200 - dist * 30);
                        data.push({ value: [i, j, Math.round(val)] });
                    }
                }
                return data;
            })(),
            encode: { x: 0, y: 1, z: 2 }
        }]
    });

    init('chart-metal-bar3d', {
        tooltip: {},
        xAxis3D: { type: 'category', data: ['Chrome', 'Iron', 'Gold', 'Silver', 'Copper', 'Titanium'] },
        yAxis3D: { type: 'category', data: ['Hardness', 'Conductivity', 'Density'] },
        zAxis3D: { type: 'value', name: 'Property' },
        grid3D: { boxWidth: 130, boxDepth: 90, boxHeight: 60, viewControl: { projection: 'perspective', distance: 200, alpha: 15, beta: 30 }, light: { main: { intensity: 1.5, shadow: true, shadowQuality: 'high' }, ambient: { intensity: 0.3 } } },
        visualMap: { max: 100, inRange: { color: ['#2c001e', '#512b58', '#8174a0', '#a0d2db', '#dab48f', '#c9a96e'] } },
        series: [{
            type: 'bar3D',
            shading: 'realistic',
            realisticMaterial: { roughness: 0.3, metalness: 0.8 },
            data: [
                { value: ['Chrome', 'Hardness', 85] }, { value: ['Chrome', 'Conductivity', 65] }, { value: ['Chrome', 'Density', 70] },
                { value: ['Iron', 'Hardness', 70] }, { value: ['Iron', 'Conductivity', 80] }, { value: ['Iron', 'Density', 78] },
                { value: ['Gold', 'Hardness', 25] }, { value: ['Gold', 'Conductivity', 95] }, { value: ['Gold', 'Density', 90] },
                { value: ['Silver', 'Hardness', 30] }, { value: ['Silver', 'Conductivity', 100] }, { value: ['Silver', 'Density', 65] },
                { value: ['Copper', 'Hardness', 35] }, { value: ['Copper', 'Conductivity', 90] }, { value: ['Copper', 'Density', 60] },
                { value: ['Titanium', 'Hardness', 90] }, { value: ['Titanium', 'Conductivity', 20] }, { value: ['Titanium', 'Density', 45] }
            ],
            encode: { x: 0, y: 1, z: 2 }
        }]
    });

    init('chart-stacked-bar3d', {
        tooltip: {},
        legend: { data: ['Revenue', 'Cost', 'Profit'] },
        xAxis3D: { type: 'category', data: ['Product A', 'Product B', 'Product C', 'Product D'] },
        yAxis3D: { type: 'category', data: ['2023', '2024'] },
        zAxis3D: { type: 'value', name: 'Amount ($K)' },
        grid3D: { boxWidth: 120, boxDepth: 80, viewControl: { projection: 'perspective' } },
        series: [
            {
                type: 'bar3D', name: 'Revenue', shading: 'lambert', stack: 'total',
                dataset: {
                    source: [
                        ['Product', 'Year', 'Value'],
                        ['Product A', '2023', 300], ['Product A', '2024', 350],
                        ['Product B', '2023', 200], ['Product B', '2024', 240],
                        ['Product C', '2023', 250], ['Product C', '2024', 280],
                        ['Product D', '2023', 180], ['Product D', '2024', 210]
                    ]
                },
                encode: { x: 'Product', y: 'Year', z: 'Value' }
            },
            {
                type: 'bar3D', name: 'Cost', shading: 'lambert', stack: 'total',
                dataset: {
                    source: [
                        ['Product', 'Year', 'Value'],
                        ['Product A', '2023', 180], ['Product A', '2024', 200],
                        ['Product B', '2023', 140], ['Product B', '2024', 160],
                        ['Product C', '2023', 150], ['Product C', '2024', 170],
                        ['Product D', '2023', 120], ['Product D', '2024', 130]
                    ]
                },
                encode: { x: 'Product', y: 'Year', z: 'Value' }
            },
            {
                type: 'bar3D', name: 'Profit', shading: 'lambert', stack: 'total',
                dataset: {
                    source: [
                        ['Product', 'Year', 'Value'],
                        ['Product A', '2023', 120], ['Product A', '2024', 150],
                        ['Product B', '2023', 60], ['Product B', '2024', 80],
                        ['Product C', '2023', 100], ['Product C', '2024', 110],
                        ['Product D', '2023', 60], ['Product D', '2024', 80]
                    ]
                },
                encode: { x: 'Product', y: 'Year', z: 'Value' }
            }
        ]
    });

    init('chart-transparent-bar3d', {
        tooltip: {},
        xAxis3D: { type: 'category', data: ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'] },
        yAxis3D: { type: 'category', data: ['W1', 'W2', 'W3', 'W4'] },
        zAxis3D: { type: 'value', name: 'Measurement' },
        grid3D: { boxWidth: 120, boxDepth: 80, viewControl: { projection: 'perspective', autoRotate: true }, light: { main: { intensity: 1.2, shadow: true }, ambient: { intensity: 0.4 } } },
        visualMap: { max: 100, inRange: { color: ['rgba(30,144,255,0.8)', 'rgba(0,206,209,0.7)', 'rgba(127,255,0,0.6)', 'rgba(255,215,0,0.7)', 'rgba(255,99,71,0.8)'] } },
        series: [{
            type: 'bar3D',
            shading: 'color',
            itemStyle: { opacity: 0.6 },
            emphasis: { itemStyle: { opacity: 1 } },
            data: (function () {
                var data = [];
                var cats = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
                var weeks = ['W1', 'W2', 'W3', 'W4'];
                for (var i = 0; i < cats.length; i++) {
                    for (var j = 0; j < weeks.length; j++) {
                        data.push({ value: [i, j, Math.round(Math.random() * 80 + 20)] });
                    }
                }
                return data;
            })(),
            encode: { x: 0, y: 1, z: 2 }
        }]
    });
};

export default initBar3dCharts;
