import './bootstrap';
import Alpine from 'alpinejs';
import ApexCharts from 'apexcharts';

// flatpickr
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// FullCalendar
import { Calendar } from '@fullcalendar/core';



window.Alpine = Alpine;
window.ApexCharts = ApexCharts;
window.flatpickr = flatpickr;
window.FullCalendar = Calendar;

Alpine.start();

// Initialize components on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Map imports
    if (document.querySelector('#mapOne')) {
        import('./components/map').then(module => module.initMap());
    }

    // Chart imports
    if (document.querySelector('#chartOne')) {
        import('./components/chart/chart-1').then(module => module.initChartOne());
    }
    if (document.querySelector('#chartTwo')) {
        import('./components/chart/chart-2').then(module => module.initChartTwo());
    }
    if (document.querySelector('#chartThree')) {
        import('./components/chart/chart-3').then(module => module.initChartThree());
    }
    if (document.querySelector('#chartSix')) {
        import('./components/chart/chart-6').then(module => module.initChartSix());
    }
    if (document.querySelector('#chartEight')) {
        import('./components/chart/chart-8').then(module => module.initChartEight());
    }
    if (document.querySelector('#chartThirteen')) {
        import('./components/chart/chart-13').then(module => module.initChartThirteen());
    }

    // Calendar init
    if (document.querySelector('#calendar')) {
        import('./components/calendar-init').then(module => module.calendarInit());
    }

    // WYSIWYG Editor init
    if (document.querySelector('[data-type]')) {
        import('./components/wysiwyg').then(module => module.initWysiwyg());
    }

    // ECharts category pages
    if (document.querySelector('#echarts-line-page')) {
        import('./components/echarts/line').then(m => m.initLineCharts());
    }
    if (document.querySelector('#echarts-bar-page')) {
        import('./components/echarts/bar').then(m => m.initBarCharts());
    }
    if (document.querySelector('#echarts-pie-page')) {
        import('./components/echarts/pie').then(m => m.initPieCharts());
    }
    if (document.querySelector('#echarts-candlestick-page')) {
        import('./components/echarts/candlestick').then(m => m.initCandlestickCharts());
    }
    if (document.querySelector('#echarts-radar-page')) {
        import('./components/echarts/radar').then(m => m.initRadarCharts());
    }
    if (document.querySelector('#echarts-tree-page')) {
        import('./components/echarts/tree').then(m => m.initTreeCharts());
    }
    if (document.querySelector('#echarts-treemap-page')) {
        import('./components/echarts/treemap').then(m => m.initTreemapCharts());
    }
    if (document.querySelector('#echarts-funnel-page')) {
        import('./components/echarts/funnel').then(m => m.initFunnelCharts());
    }
    if (document.querySelector('#echarts-dataset-page')) {
        import('./components/echarts/dataset').then(m => m.initDatasetCharts());
    }
    if (document.querySelector('#echarts-rich-page')) {
        import('./components/echarts/rich').then(m => m.initRichCharts());
    }
    if (document.querySelector('#echarts-bar3d-page')) {
        import('./components/echarts/bar3d').then(m => m.initBar3dCharts());
    }
});
