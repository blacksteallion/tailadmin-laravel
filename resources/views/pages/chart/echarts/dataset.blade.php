@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Dataset Charts - ECharts" />
    <div class="space-y-6" id="echarts-dataset-page">
        <x-common.component-card title="Sort Data in Bar Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-data-transform-sort-bar" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Simple Encode">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-encode0" style="height: 400px; min-width: 600px;"></div>
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

        <x-common.component-card title="Encode and Matrix">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-encode1" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Share Dataset">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-dataset-link" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Series Layout By">
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
    </div>
@endsection
