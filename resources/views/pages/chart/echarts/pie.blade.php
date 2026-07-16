@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Pie Charts" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="echarts-pie-page">
        <x-common.component-card title="Referer of a Website">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-simple" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Doughnut Chart with Rounded Corner">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-borderRadius" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Doughnut Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-doughnut" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Half Doughnut Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-half-donut" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Pie with padAngle">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-padAngle" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Customized Pie">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-custom" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Texture on Pie Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-pattern" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Nightingale Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-roseType" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Basic Nightingale Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-roseType-simple" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Partition Data to Pies">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-data-transform-multiple-pie" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Default Arrangement">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-default" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Pie Label Align">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-alignTo" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Label Line Adjust">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-labelLine-adjust" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Pie with Scrollable Legend">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-legend" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Pie Special Label">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-rich-text" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Share Dataset">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-link" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Pie Charts on GEO Map">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-map-iceland-pie" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Nested Pies">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-nest" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Calendar Pie">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-calendar-pie" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
