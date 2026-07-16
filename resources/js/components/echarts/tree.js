export const initTreeCharts = () => {
    const init = (id, option) => {
        const el = document.querySelector('#' + id);
        if (!el) return;
        const chart = window.echarts.init(el);
        chart.setOption(option);
        window.addEventListener('resize', () => chart.resize());
    };

    const treeData = {
        name: 'Root', children: [
            {
                name: 'Branch A', children: [
                    { name: 'Leaf A1', value: 5 },
                    { name: 'Leaf A2', value: 3 }
                ]
            },
            {
                name: 'Branch B', children: [
                    { name: 'Leaf B1', value: 8 },
                    { name: 'Leaf B2', value: 4 },
                    { name: 'Leaf B3', value: 2 }
                ]
            },
            {
                name: 'Branch C', children: [
                    { name: 'Leaf C1', value: 6 }
                ]
            }
        ]
    };

    const treeData2 = {
        name: 'Company', children: [
            {
                name: 'Engineering', children: [
                    { name: 'Frontend', value: 12 },
                    { name: 'Backend', value: 18 }
                ]
            },
            {
                name: 'Marketing', children: [
                    { name: 'Content', value: 7 },
                    { name: 'SEO', value: 5 }
                ]
            }
        ]
    };

    init('chart-tree-basic', {
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [{
            type: 'tree',
            data: [treeData],
            top: '10%', left: '15%', bottom: '10%', right: '15%',
            orient: 'LR',
            symbolSize: 10,
            label: { position: 'left', verticalAlign: 'middle', align: 'right', fontSize: 13 },
            leaves: { label: { position: 'right', verticalAlign: 'middle', align: 'left' },
                    emphasis: { itemStyle: { borderColor: '#1890ff', borderWidth: 2 } }
            },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    });

    init('chart-tree-legend', {
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        legend: { top: '2%', left: '3%', orient: 'vertical', data: [{ name: 'Organization', icon: 'emptyCircle' }, { name: 'Department', icon: 'triangle' }] },
        series: [
            {
                name: 'Organization',
                type: 'tree',
                data: [treeData2],
                top: '5%', left: '10%', bottom: '10%', right: '55%',
                orient: 'LR',
                symbolSize: 9,
                symbol: 'emptyCircle',
                label: { position: 'left', verticalAlign: 'middle', align: 'right', fontSize: 12 },
                leaves: { label: { position: 'right', verticalAlign: 'middle', align: 'left' } },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            },
            {
                name: 'Department',
                type: 'tree',
                data: [treeData],
                top: '5%', left: '55%', bottom: '10%', right: '5%',
                orient: 'LR',
                symbolSize: 9,
                symbol: 'triangle',
                label: { position: 'left', verticalAlign: 'middle', align: 'right', fontSize: 12 },
                leaves: { label: { position: 'right', verticalAlign: 'middle', align: 'left' } },
                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    });

    init('chart-tree-orient-bottom-top', {
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [{
            type: 'tree',
            data: [treeData],
            top: '5%', left: '10%', bottom: '15%', right: '10%',
            orient: 'BT',
            symbolSize: 10,
            label: { position: 'bottom', verticalAlign: 'middle', align: 'center', fontSize: 13 },
            leaves: { label: { position: 'top', verticalAlign: 'middle', align: 'center' } },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    });

    init('chart-tree-orient-right-left', {
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [{
            type: 'tree',
            data: [treeData],
            top: '10%', left: '15%', bottom: '10%', right: '15%',
            orient: 'RL',
            symbolSize: 10,
            label: { position: 'right', verticalAlign: 'middle', align: 'left', fontSize: 13 },
            leaves: { label: { position: 'left', verticalAlign: 'middle', align: 'right' } },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    });

    init('chart-tree-polyline', {
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [{
            type: 'tree',
            data: [treeData],
            top: '10%', left: '15%', bottom: '10%', right: '15%',
            orient: 'LR',
            edgeShape: 'polyline',
            edgeForkPosition: '50%',
            symbolSize: 10,
            label: { position: 'left', verticalAlign: 'middle', align: 'right', fontSize: 13 },
            leaves: { label: { position: 'right', verticalAlign: 'middle', align: 'left' } },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    });

    init('chart-tree-radial', {
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [{
            type: 'tree',
            data: [treeData],
            layout: 'radial',
            symbolSize: 10,
            label: { fontSize: 13 },
            leaves: { label: { fontSize: 12 } },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    });

    init('chart-tree-vertical', {
        tooltip: { trigger: 'item', triggerOn: 'mousemove' },
        series: [{
            type: 'tree',
            data: [treeData],
            top: '5%', left: '10%', bottom: '5%', right: '10%',
            orient: 'TB',
            symbolSize: 10,
            label: { position: 'top', verticalAlign: 'middle', align: 'center', fontSize: 13 },
            leaves: { label: { position: 'bottom', verticalAlign: 'middle', align: 'center' } },
            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }]
    });
};

export default initTreeCharts;
