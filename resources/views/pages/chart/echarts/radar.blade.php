@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Radar Charts" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="echarts-radar-page">
        <x-common.component-card title="Basic Radar Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-radar" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="AQI - Radar Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-radar-aqi" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Customized Radar Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-radar-custom" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Proportion of Browsers">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-radar2" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Multiple Radar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-radar-multiple" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
