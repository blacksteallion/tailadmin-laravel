@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Treemap Charts - ECharts" />
    <div class="space-y-6" id="echarts-treemap-page">
        <x-common.component-card title="Transition between Treemap and Sunburst">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-treemap-sunburst-transition" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Disk Usage">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-treemap-disk" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="ECharts Option Query">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-treemap-drill-down" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="How $3.7 Trillion is Spent">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-treemap-obama" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Show Parent Labels">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-treemap-show-parent" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Basic Treemap">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-treemap-simple" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Gradient Mapping">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-treemap-visual" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
