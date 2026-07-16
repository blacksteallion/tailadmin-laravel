@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="3D Bar Charts - ECharts GL" />
    <div class="space-y-6" id="echarts-bar3d-page">
        <x-common.component-card title="3D Bar Dataset">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar3d-dataset" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Global Population 3D">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar3d-global-population" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Myth 3D Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar3d-myth" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Noise Modified 3D">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar3d-noise" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Punch Card 3D">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar3d-punch-card" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Simplex Noise 3D">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar3d-simplex-noise" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Voxelize Image">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-bar3d-voxelize" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Population on Globe">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-global-population-bar3d-on-globe" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Image to 3D Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-image-to-bar3d" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Metal Style 3D Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-metal-bar3d" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Stacked 3D Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-stacked-bar3d" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>

        <x-common.component-card title="Transparent 3D Bar">
            <div class="custom-scrollbar max-w-full overflow-x-auto">
                <div id="chart-transparent-bar3d" style="height: 500px; min-width: 600px;"></div>
            </div>
        </x-common.component-card>
    </div>
@endsection
