@extends('layouts.app')

@section('content')
    @php
        $title = $palette ? 'Edit Palette' : 'New Palette';
    @endphp
    <x-common.page-breadcrumb :pageTitle="$title" />

    <div class="space-y-6">
        <x-common.component-card :title="$title">
            @if ($errors->any())
                <div class="mb-4 rounded-lg bg-error-50 px-4 py-3 text-sm text-error-600 dark:bg-error-500/15 dark:text-error-400">
                    <ul class="list-disc pl-4 space-y-1">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form method="POST"
                action="{{ $palette ? route('theme-palettes.update', $palette) : route('theme-palettes.store') }}"
                x-data="paletteForm()"
                x-init="init({{ $palette ? json_encode($palette->colors) : 'null' }})">
                @csrf
                @if ($palette) @method('PUT') @endif

                <div class="mb-6 flex flex-wrap items-end gap-4">
                    <div class="flex-1 min-w-[200px]">
                        <label class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">Palette Name</label>
                        <input type="text" name="name" value="{{ old('name', $palette->name ?? '') }}" required
                            class="shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30">
                    </div>
                    <label class="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" name="is_active" value="1"
                            {{ old('is_active', $palette->is_active ?? false) ? 'checked' : '' }}
                            class="form-check-input h-5 w-5 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-600">
                        <span class="text-sm font-medium text-gray-700 dark:text-gray-400">Set as active</span>
                    </label>
                </div>

                <input type="hidden" name="colors" x-ref="colorsOutput">

                <div class="space-y-4">
                    @php
                        $families = [
                            'brand' => 'Brand (Primary)',
                            'gray' => 'Gray (Neutral)',
                            'success' => 'Success (Green)',
                            'error' => 'Error (Red)',
                            'warning' => 'Warning (Yellow)',
                            'orange' => 'Orange',
                            'blue-light' => 'Blue Light',
    
                        ];
                    @endphp

                    @foreach ($families as $key => $label)
                        <div x-data="{ open: '{{ $key }}' === 'brand' }"
                            class="rounded-lg border border-gray-200 dark:border-gray-700">
                            <button type="button" @click="open = !open"
                                class="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-gray-800 dark:text-white/90 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <span>{{ $label }}</span>
                                <svg class="size-4 transition-transform" :class="open && 'rotate-180'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div x-show="open" x-transition:enter="transition ease-out duration-200"
                                class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 border-t border-gray-200 dark:border-gray-700 px-4 py-4">
                                @if ($key === 'brand')
                                <div class="col-span-full mb-2 flex items-center gap-3 rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Base Color</label>
                                    <input type="color"
                                        x-model="colors['brand']['500']"
                                        @change="generateBrandShades()"
                                        class="h-9 w-12 cursor-pointer rounded border border-gray-300 bg-transparent p-0.5 dark:border-gray-700">
                                    <span class="text-xs text-gray-500 dark:text-gray-400">Changes auto-generate all brand shades</span>
                                </div>
                                @endif
                                @php
                                    $shadeKeys = ['25','50','100','200','300','400','500','600','700','800','900','950'];
                                @endphp
                                @foreach ($shadeKeys as $shade)
                                    @php
                                        $inputName = "colors_{$key}_{$shade}";
                                        $defaultVal = $defaults[$key][$shade] ?? '#000000';
                                    @endphp
                                    <div>
                                        <label class="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">{{ $key }}-{{ $shade }}</label>
                                        <div class="flex items-center gap-2">
                                            <input type="color"
                                                x-init="register('{{ $key }}', '{{ $shade }}', '{{ $defaultVal }}')"
                                                x-model="colors['{{ $key }}']['{{ $shade }}']"
                                                class="h-9 w-10 cursor-pointer rounded border border-gray-300 bg-transparent p-0.5 dark:border-gray-700">
                                            <input type="text"
                                                x-model="colors['{{ $key }}']['{{ $shade }}']"
                                                class="h-9 w-full rounded border border-gray-300 bg-transparent px-2 text-xs text-gray-700 focus:border-brand-300 focus:ring-1 focus:ring-brand-500/10 focus:outline-hidden dark:border-gray-700 dark:text-gray-300">
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    @endforeach
                </div>

                <div class="mt-6 flex items-center gap-3">
                    <button type="submit"
                        class="rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-brand-600 transition-colors">
                        {{ $palette ? 'Update Palette' : 'Create Palette' }}
                    </button>
                    <a href="{{ route('theme-palettes.index') }}"
                        class="rounded-lg border border-gray-300 px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
                        Cancel
                    </a>
                </div>
            </form>
        </x-common.component-card>
    </div>
@endsection

@push('scripts')
<script>
    function paletteForm() {
        return {
            colors: {},
            register(family, shade, defaultVal) {
                if (!this.colors[family]) this.colors[family] = {};
                if (!this.colors[family][shade]) this.colors[family][shade] = defaultVal;
            },
            init(existing) {
                if (existing) {
                    this.colors = existing;
                }
                this.$nextTick(() => {
                    this.$el.addEventListener('submit', () => {
                        this.$refs.colorsOutput.value = JSON.stringify(this.colors);
                    });
                });
            },
            hexToRgb(hex) {
                const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return r ? { r: parseInt(r[1], 16), g: parseInt(r[2], 16), b: parseInt(r[3], 16) } : { r: 0, g: 0, b: 0 };
            },
            rgbToHex(r, g, b) {
                return '#' + [r, g, b].map(x => Math.round(Math.max(0, Math.min(255, x))).toString(16).padStart(2, '0')).join('');
            },
            mixWithWhite(r, g, b, p) {
                return { r: r + (255 - r) * p, g: g + (255 - g) * p, b: b + (255 - b) * p };
            },
            mixWithBlack(r, g, b, p) {
                return { r: r * (1 - p), g: g * (1 - p), b: b * (1 - p) };
            },
            generateBrandShades() {
                const { r, g, b } = this.hexToRgb(this.colors['brand']['500']);
                const shades = [
                    ['25', 0.95, 'w'], ['50', 0.90, 'w'], ['100', 0.80, 'w'], ['200', 0.60, 'w'],
                    ['300', 0.40, 'w'], ['400', 0.20, 'w'], ['500', 0, ''], ['600', 0.15, 'b'],
                    ['700', 0.30, 'b'], ['800', 0.45, 'b'], ['900', 0.60, 'b'], ['950', 0.75, 'b'],
                ];
                for (const [shade, amount, type] of shades) {
                    if (!type) continue;
                    const { r: nr, g: ng, b: nb } = type === 'w' ? this.mixWithWhite(r, g, b, amount) : this.mixWithBlack(r, g, b, amount);
                    this.colors['brand'][shade] = this.rgbToHex(nr, ng, nb);
                }
            }
        };
    }
</script>
@endpush
