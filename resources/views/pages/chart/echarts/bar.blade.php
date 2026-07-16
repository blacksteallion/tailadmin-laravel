@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Bar Charts" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="echarts-bar-page">
        <x-common.component-card title="Basic Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-simple" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Axis Align with Tick">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-tick-align" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Sort Data in Bar Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-data-transform-sort-bar" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar with Background">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-background" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Set Style of Single Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-data-color" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Waterfall Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-waterfall" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Simple Encode">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-encode0" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Chart with Negative Value">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-negative2" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Radial Polar Bar Label Position">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-polar-label-radial" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Tangential Polar Bar Label">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-polar-label-tangential" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="World Population">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-y-category" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Polar endAngle">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-polar-endAngle" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Chart with Axis Breaks">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-breaks-simple" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Clickable Column Chart with Gradient">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-gradient" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Label Rotation">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-label-rotation" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked Column Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-stack" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked Bar with borderRadius">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-stack-borderRadius" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked Bar Normalization">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-stack-normalization" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked Bar Normalization and Variation">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-stack-normalization-variation" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Waterfall Chart (II)">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-waterfall2" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked Horizontal Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-y-category-stack" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Brush Select on Column Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-brush" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Chart with Negative Value (II)">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-negative" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Rainfall and Evaporation">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar1" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Mixed Line and Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-mix-line-bar" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Mix Zoom On Value">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-mix-zoom-on-value" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Multiple Y Axes">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-multiple-y-axis" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Animation Delay">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-animation-delay" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Chart Drilldown Animation">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-drilldown" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Large Scale Bar Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-large" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Race">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-race" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Dataset Series Layout">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-series-layout-by" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Simple Dataset Example">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-simple0" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Dataset in Object Array">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-simple1" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Multi-level Drilldown">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-multi-drilldown" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Race Country">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-race-country" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Weather Statistics">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-rich-text" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Dynamic Data">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dynamic-data" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Mini Bars and Geo in Matrix">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-matrix-mini-bar-geo" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Finance Indices 2002">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-mix-timeline-finance" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Watermark Example">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-watermark" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Chart on Polar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-polar-real-estate" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked Bar Chart on Polar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-polar-stack" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked Radial Polar Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-polar-stack-radial" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Rounded Bar on Polar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-polar-roundCap" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Bar Chart with Axis Breaks (Brush)">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-breaks-brush" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
