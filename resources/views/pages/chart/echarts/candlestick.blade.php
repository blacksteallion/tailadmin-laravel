@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Candlestick Charts" />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="echarts-candlestick-page">
        <x-common.component-card title="Basic Candlestick">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-candlestick-simple" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="OHLC Chart">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-custom-ohlc" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="ShangHai Index">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-candlestick-sh" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Large Scale Candlestick">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-candlestick-large" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Axis Pointer Link and Touch">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-candlestick-touch" style="height: 500px; min-width: 600px;"></div>
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

        <x-common.component-card title="ShangHai Index 2015">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-candlestick-sh-2015" style="height: 400px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stock Matrix">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-matrix-stock" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
