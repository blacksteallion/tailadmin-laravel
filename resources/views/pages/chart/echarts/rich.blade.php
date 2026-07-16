@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Rich Text Charts - ECharts" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="echarts-rich-page">
        <x-common.component-card title="Pie Special Label">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-rich-text" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Nested Pies">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-pie-nest" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Weather Statistics">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar-rich-text" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
