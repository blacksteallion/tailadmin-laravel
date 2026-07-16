
import { brandColor, cssVar } from '../../utils/theme.js';

export const initChartTwo = () => {
    const chartElement = document.querySelector('#chartTwo');

    if (chartElement) {
        const chartTwoOptions = {
            series: [75.55],
            colors: [brandColor('500')],
            chart: {
                fontFamily: "Outfit, sans-serif",
                type: "radialBar",
                height: 330,
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    hollow: {
                        size: "80%",
                    },
                    track: {
                        background: cssVar('--color-gray-200') || '#E4E7EC',
                        strokeWidth: "100%",
                        margin: 5, // margin is in pixels
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            fontSize: "36px",
                            fontWeight: "600",
                            offsetY: 60,
                            color: cssVar('--color-gray-800') || '#1D2939',
                            formatter: function (val) {
                                return val + "%";
                            },
                        },
                    },
                },
            },
            fill: {
                type: "solid",
colors: [brandColor('500')],
            },
            stroke: {
                lineCap: "round",
            },
            labels: ["Progress"],
        };

        const chart = new ApexCharts(chartElement, chartTwoOptions);
        chart.render();
        return chart;
    }
}

export default initChartTwo;
