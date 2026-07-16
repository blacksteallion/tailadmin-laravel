@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Funnel Charts - ECharts" />
    <div class="space-y-6" id="echarts-funnel-page">
        <x-common.component-card title="Funnel Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-funnel" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Funnel Compare">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-funnel-align" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Customized Funnel">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-funnel-customize" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Multiple Funnels">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-funnel-mutiple" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
