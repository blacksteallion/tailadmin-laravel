@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Tree Charts - ECharts" />
    <div class="space-y-6" id="echarts-tree-page">
        <x-common.component-card title="From Left to Right Tree">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-tree-basic" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Multiple Trees">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-tree-legend" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="From Bottom to Top Tree">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-tree-orient-bottom-top" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="From Right to Left Tree">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-tree-orient-right-left" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Tree with Polyline Edge">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-tree-polyline" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Radial Tree">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-tree-radial" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="From Top to Bottom Tree">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-tree-vertical" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
