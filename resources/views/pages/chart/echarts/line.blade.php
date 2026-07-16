@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Line Charts" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="echarts-line-page">
        <x-common.component-card title="Basic Line Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-simple" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Smoothed Line Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-smooth" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Basic Area Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-area-basic" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Stacked Line Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-stack" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Stacked Area Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-area-stack" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Gradient Stacked Area Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-area-stack-gradient" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Bump Chart (Ranking)">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-bump-chart" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Temperature Change">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-marker" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Area Pieces">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-area-pieces" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Data Transform Filter">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-data-transform-filter" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Line Gradient">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-gradient" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Distribution of Electricity">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-sections" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Large Scale Area Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-area-simple" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Confidence Band">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-confidence-band" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Rainfall vs Evaporation">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-grid-multiple" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Intraday Chart with Breaks (I)">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-intraday-breaks-1" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Intraday Chart with Breaks (II)">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-intraday-breaks-2" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Beijing AQI">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-aqi" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Multiple X Axes">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-multiple-x-axis" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Rainfall">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-area-rainfall" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Area Time Axis">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-area-time-axis" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Share Dataset">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-dataset-link" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Dynamic Data + Time Axis">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-dynamic-data2" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Function Plot">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-function" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Line Race">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-race" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Mini Line Charts (Sparkline) in Matrix">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-matrix-sparkline" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Line with Marklines">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-markline" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Line Style and Item Style">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-style" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Line Chart in Cartesian">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-in-cartesian" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Log Axis">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-log" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Step Line">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-step" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Line Easing Visualizing">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-easing" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Fisheye Lens on Line Chart">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-fisheye" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Line Y Category">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-y-category" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Custom Graphic Component">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-graphic" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Click to Add Points">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-pen" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Two Value-Axes in Polar">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-polar" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Two Value-Axes in Polar (II)">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-polar2" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Tooltip and DataZoom on Mobile">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-tooltip-touch" style="height: 400px; min-width: 600px;"></div>
        </div>
    </x-common.component-card>

    <x-common.component-card title="Draggable Points">
        <div class="custom-scrollbar max-w-full overflow-x-auto">
            <div id="chart-line-draggable" style="height: 400px; min-width: 600px;"></div>
        </div>
        </x-common.component-card>
    </div>
@endsection
