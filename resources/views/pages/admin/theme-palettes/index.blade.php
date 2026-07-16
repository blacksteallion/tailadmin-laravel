@extends('layouts.app')

@section('content')
    <x-common.page-breadcrumb pageTitle="Theme Palettes" />
    <div class="space-y-6">
        <x-common.component-card title="Manage Color Palettes">
            @if (session('success'))
                <div class="mb-4 rounded-lg bg-success-50 px-4 py-3 text-sm text-success-600 dark:bg-success-500/15 dark:text-success-400">
                    {{ session('success') }}
                </div>
            @endif

            <div class="mb-4 flex items-center justify-between">
                <p class="text-sm text-gray-500 dark:text-gray-400">Define and switch between color schemes.</p>
                <a href="{{ route('theme-palettes.create') }}"
                    class="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-medium text-white hover:bg-brand-600 transition-colors">
                    <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    Add New Palette
                </a>
            </div>

            <div class="overflow-x-auto custom-scrollbar">
                <table class="w-full text-left">
                    <thead>
                        <tr class="border-b border-gray-200 dark:border-gray-800">
                            <th class="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
                            <th class="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Brand Color</th>
                            <th class="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Status</th>
                            <th class="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400">Created</th>
                            <th class="pb-3 text-sm font-medium text-gray-500 dark:text-gray-400 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse ($palettes as $palette)
                            <tr class="border-b border-gray-100 dark:border-gray-800">
                                <td class="py-3 text-sm font-medium text-gray-800 dark:text-white/90">{{ $palette->name }}</td>
                                <td class="py-3">
                                    <span class="inline-block h-5 w-10 rounded border border-gray-200 dark:border-gray-700"
                                        style="background-color: {{ $palette->colors['brand']['500'] ?? '#465fff' }}"></span>
                                </td>
                                <td class="py-3">
                                    @if ($palette->is_active)
                                        <span class="inline-flex items-center gap-1 rounded-full bg-success-50 px-2.5 py-0.5 text-xs font-medium text-success-600 dark:bg-success-500/15 dark:text-success-400">
                                            <span class="h-1.5 w-1.5 rounded-full bg-success-500"></span>
                                            Active
                                        </span>
                                    @else
                                        <span class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                                            <span class="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                                            Inactive
                                        </span>
                                    @endif
                                </td>
                                <td class="py-3 text-sm text-gray-500 dark:text-gray-400">{{ $palette->created_at->format('M d, Y') }}</td>
                                <td class="py-3 text-right">
                                    <div class="inline-flex items-center gap-1">
                                        @if (!$palette->is_active)
                                            <form action="{{ route('theme-palettes.activate', $palette) }}" method="POST" class="inline">
                                                @csrf @method('PATCH')
                                                <button type="submit"
                                                    class="rounded px-3 py-1.5 text-xs font-medium text-brand-500 hover:bg-brand-50 transition-colors dark:hover:bg-brand-500/10">
                                                    Activate
                                                </button>
                                            </form>
                                        @endif
                                        <a href="{{ route('theme-palettes.edit', $palette) }}"
                                            class="rounded px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors dark:text-gray-400 dark:hover:bg-gray-800">
                                            Edit
                                        </a>
                                        <form action="{{ route('theme-palettes.destroy', $palette) }}" method="POST" class="inline"
                                            onsubmit="return confirm('Delete &quot;{{ $palette->name }}&quot;?')">
                                            @csrf @method('DELETE')
                                            <button type="submit"
                                                class="rounded px-3 py-1.5 text-xs font-medium text-error-500 hover:bg-error-50 transition-colors dark:hover:bg-error-500/10">
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="py-8 text-center text-sm text-gray-400">No palettes yet.</td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </x-common.component-card>
    </div>
@endsection
