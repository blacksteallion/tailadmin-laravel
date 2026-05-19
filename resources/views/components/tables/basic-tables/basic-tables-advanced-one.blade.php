<div x-data="{
    tableRowData: [
        {
            id: 'DE124321',
            checked: false,
            customerName: 'John Doe',
            customerEmail: 'johndoe@gmail.com',
            initials: 'JD',
            avatarBg: 'bg-blue-100',
            avatarColor: 'text-blue-500',
            product: 'Software License',
            value: '$18,50.34',
            closeDate: '2024-06-15',
            status: 'Complete',
        },
        {
            id: 'DE124322',
            checked: false,
            customerName: 'Kierra Franci',
            customerEmail: 'kierra@gmail.com',
            initials: 'KF',
            avatarBg: 'bg-[#fdf2fa]',
            avatarColor: 'text-[#dd2590]',
            product: 'Software License',
            value: '$18,50.34',
            closeDate: '2024-06-15',
            status: 'Complete',
        },
        {
            id: 'DE124323',
            checked: false,
            customerName: 'Emerson Workman',
            customerEmail: 'emerson@gmail.com',
            initials: 'EW',
            avatarBg: 'bg-[#f0f9ff]',
            avatarColor: 'text-[#0086c9]',
            product: 'Software License',
            value: '$18,50.34',
            closeDate: '2024-06-15',
            status: 'Pending',
        },
        {
            id: 'DE124324',
            checked: false,
            customerName: 'Chance Philips',
            customerEmail: 'chance@gmail.com',
            initials: 'CP',
            avatarBg: 'bg-[#fff6ed]',
            avatarColor: 'text-[#ec4a0a]',
            product: 'Software License',
            value: '$18,50.34',
            closeDate: '2024-06-15',
            status: 'Complete',
        },
        {
            id: 'DE124325',
            checked: false,
            customerName: 'Terry Geidt',
            customerEmail: 'terry@gmail.com',
            initials: 'TG',
            avatarBg: 'bg-green-50',
            avatarColor: 'text-green-600',
            product: 'Software License',
            value: '$18,50.34',
            closeDate: '2024-06-15',
            status: 'Complete',
        },
    ],
    selectedRows: [],
    selectAll: false,
    searchQuery: '',
    currentPage: 1,
    itemsPerPage: 5,
    columnsDropdownOpen: false,
    advancedFilterOpen: false,
    filterValues: {
        id: '',
        customer: '',
        product: '',
        value: '',
        closeDate: '',
        status: '',
    },
    columns: [
        { key: 'id', label: 'Deal ID', visible: true, searchable: true },
        { key: 'customer', label: 'Customer', visible: true, searchable: true },
        { key: 'product', label: 'Product/Service', visible: true, searchable: true },
        { key: 'value', label: 'Deal Value', visible: true, searchable: true },
        { key: 'closeDate', label: 'Close Date', visible: true, searchable: true },
        { key: 'status', label: 'Status', visible: true, searchable: true },
    ],
    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.key);
    },
    handleSelectAll() {
        this.selectAll = !this.selectAll;
        if (this.selectAll) {
            this.selectedRows = this.filteredRows.map(row => row.id);
        } else {
            this.selectedRows = [];
        }
    },
    handleRowSelect(id) {
        if (this.selectedRows.includes(id)) {
            this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
        } else {
            this.selectedRows.push(id);
        }
    },
    getStatusClass(status) {
        const classes = {
            'Complete': 'bg-green-50 text-green-700 dark:bg-green-500/15 dark:text-green-500',
            'Pending': 'bg-yellow-50 text-yellow-700 dark:bg-yellow-500/15 dark:text-yellow-400',
            'Cancel': 'bg-red-50 text-red-700 dark:bg-red-500/15 dark:text-red-500',
        };
        return classes[status] || '';
    },
    deleteRow(id) {
        if (confirm('Are you sure you want to delete this order?')) {
            this.tableRowData = this.tableRowData.filter(row => row.id !== id);
            this.selectedRows = this.selectedRows.filter(rowId => rowId !== id);
            if (this.currentPage > this.totalPages) {
                this.currentPage = this.totalPages;
            }
        }
    },
    get filteredRows() {
        const query = this.searchQuery.toLowerCase().trim();
        const activeFilterEntries = this.columns
            .filter(column => column.visible && this.filterValues[column.key]?.trim())
            .map(column => [column.key, this.filterValues[column.key].toLowerCase().trim()]);

        return this.tableRowData.filter(row => {
            let matchesSearch = true;
            if (query) {
                matchesSearch = this.columns.some(column => {
                    if (!column.visible || !column.searchable) {
                        return false;
                    }
                    if (column.key === 'id') {
                        return row.id.toLowerCase().includes(query);
                    }
                    if (column.key === 'customer') {
                        return row.customerName.toLowerCase().includes(query)
                            || row.customerEmail.toLowerCase().includes(query);
                    }
                    if (column.key === 'product') {
                        return row.product.toLowerCase().includes(query);
                    }
                    if (column.key === 'value') {
                        return row.value.toLowerCase().includes(query);
                    }
                    if (column.key === 'closeDate') {
                        return row.closeDate.toLowerCase().includes(query);
                    }
                    if (column.key === 'status') {
                        return row.status.toLowerCase().includes(query);
                    }
                    return false;
                });
            }

            const matchesFilters = activeFilterEntries.every(([key, value]) => {
                if (key === 'id') {
                    return row.id.toLowerCase().includes(value);
                }
                if (key === 'customer') {
                    return row.customerName.toLowerCase().includes(value)
                        || row.customerEmail.toLowerCase().includes(value);
                }
                if (key === 'product') {
                    return row.product.toLowerCase().includes(value);
                }
                if (key === 'value') {
                    return row.value.toLowerCase().includes(value);
                }
                if (key === 'closeDate') {
                    return row.closeDate.toLowerCase().includes(value);
                }
                if (key === 'status') {
                    return row.status.toLowerCase().includes(value);
                }
                return true;
            });

            return matchesSearch && matchesFilters;
        });
    },
    get paginatedRows() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        return this.filteredRows.slice(start, start + this.itemsPerPage);
    },
    get totalPages() {
        return Math.max(1, Math.ceil(this.filteredRows.length / this.itemsPerPage));
    },
    get displayedPages() {
        const range = [];
        for (let i = 1; i <= this.totalPages; i++) {
            if (
                i === 1 ||
                i === this.totalPages ||
                (i >= this.currentPage - 1 && i <= this.currentPage + 1)
            ) {
                range.push(i);
            } else if (range[range.length - 1] !== '...') {
                range.push('...');
            }
        }
        return range;
    },
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    },
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    },
    goToPage(page) {
        if (typeof page === 'number' && page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
        }
    }
}">
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-white/[0.05] dark:bg-white/[0.03]">
        <!-- Header -->
        <div class="flex flex-col gap-4 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Advanced Table 1
                </h3>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                <form class="w-full sm:w-auto">
                    <div class="relative">
                        <button type="button" class="absolute -translate-y-1/2 left-4 top-1/2">
                            <svg class="fill-gray-500 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.04199 9.37381C3.04199 5.87712 5.87735 3.04218 9.37533 3.04218C12.8733 3.04218 15.7087 5.87712 15.7087 9.37381C15.7087 12.8705 12.8733 15.7055 9.37533 15.7055C5.87735 15.7055 3.04199 12.8705 3.04199 9.37381ZM9.37533 1.54218C5.04926 1.54218 1.54199 5.04835 1.54199 9.37381C1.54199 13.6993 5.04926 17.2055 9.37533 17.2055C11.2676 17.2055 13.0032 16.5346 14.3572 15.4178L17.1773 18.2381C17.4702 18.531 17.945 18.5311 18.2379 18.2382C18.5308 17.9453 18.5309 17.4704 18.238 17.1775L15.4182 14.3575C16.5367 13.0035 17.2087 11.2671 17.2087 9.37381C17.2087 5.04835 13.7014 1.54218 9.37533 1.54218Z" fill=""/>
                            </svg>
                        </button>
                        <input x-model="searchQuery" @input="currentPage = 1" type="text" placeholder="Search..." class="h-[42px] w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pl-[42px] pr-4 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-blue-800 xl:w-[300px]"/>
                    </div>
                </form>
                <div>
                    <button @click="advancedFilterOpen = !advancedFilterOpen" class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200" type="button" aria-label="Advanced Filter">
                        <svg class="stroke-current fill-white dark:fill-gray-800" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.29004 5.90393H17.7067" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.7075 14.0961H2.29085" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z" fill="" stroke="" stroke-width="1.5"/>
                            <path d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z" fill="" stroke="" stroke-width="1.5"/>
                        </svg>
                        Filter
                    </button>
                </div>
                <button class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-3 text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200" type="button" aria-label="Upload">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 16.5H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M10 4.5V13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M6.75 7.75L10 4.5L13.25 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-3 text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200" type="button" aria-label="Download">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12.5V16.5H16V12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M7.75 9.75L10 13L12.25 9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10 3.5V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </button>
                <div class="relative">
                    <button @click="columnsDropdownOpen = !columnsDropdownOpen" class="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white p-3 text-gray-700 shadow-theme-xs hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200" type="button" aria-label="Columns">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M19.4 12.9998C19.4 12.6198 19.372 12.2398 19.318 11.8698L21.35 10.4998L20.166 8.49976L18.01 9.14976C17.38 8.67976 16.68 8.30976 15.92 8.06976L15.4 5.72976H12.6L12.08 8.06976C11.32 8.30976 10.62 8.67976 9.99 9.14976L7.834 8.49976L6.65 10.4998L8.682 11.8698C8.628 12.2398 8.6 12.6198 8.6 12.9998C8.6 13.3798 8.628 13.7598 8.682 14.1298L6.65 15.4998L7.834 17.4998L9.99 16.8498C10.62 17.3198 11.32 17.6898 12.08 17.9298L12.6 20.2698H15.4L15.92 17.9298C16.68 17.6898 17.38 17.3198 18.01 16.8498L20.166 17.4998L21.35 15.4998L19.318 14.1298C19.372 13.7598 19.4 13.3798 19.4 12.9998Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <div x-show="columnsDropdownOpen" @click.outside="columnsDropdownOpen = false" class="absolute right-0 z-40 mt-2 w-48 rounded-2xl border border-gray-200 bg-white py-2 shadow-theme-lg dark:border-gray-800 dark:bg-gray-900" style="display: none;">
                        <template x-for="column in columns" :key="column.key">
                            <label class="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5">
                                <input type="checkbox" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600" x-model="column.visible" @change="currentPage = 1" />
                                <span x-text="column.label"></span>
                            </label>
                        </template>
                    </div>
                </div>
            </div>
        </div>

        <div x-show="advancedFilterOpen" class="px-6 pb-4" style="display: none;">
            <div class="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-theme-xs dark:border-white/[0.05] dark:bg-white/[0.03]">
                <div class="mb-4 flex items-center justify-between gap-4">
                    <div>
                        <p class="text-sm font-semibold text-gray-700 dark:text-gray-200">Advanced Filters</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Filter only the visible columns below.</p>
                    </div>
                    <button type="button" @click="columns.filter(column => column.visible).forEach(column => filterValues[column.key] = ''); currentPage = 1" class="rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300">Clear</button>
                </div>
                <div class="grid gap-4 sm:grid-cols-4">
                    <template x-for="column in columns.filter(column => column.visible)" :key="column.key">
                        <div>
                            <label class="mb-2 block text-sm font-medium text-gray-600 dark:text-gray-300" x-text="column.label"></label>
                            <input type="text" x-model="filterValues[column.key]" @input="currentPage = 1" class="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:focus:border-blue-500" :placeholder="`Search ${column.label}`" />
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <!-- Table -->
        <div class="max-w-full overflow-x-auto">
            <table class="w-full">
                <thead class="px-6 py-3.5 border-t border-gray-100 border-y bg-gray-50 dark:border-white/[0.05] dark:bg-gray-900">
                    <tr>
                        <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start" x-show="columns.find(column => column.key === 'id').visible">
                            <div class="flex items-center gap-3">
                                <div @click="handleSelectAll()"
                                    class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"
                                    :class="selectAll ? 'border-blue-500 dark:border-blue-500 bg-blue-500' : 'bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700'">
                                    <svg :class="selectAll ? 'block' : 'hidden'" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <span class="font-medium text-gray-500 text-theme-xs dark:text-gray-400">Deal ID</span>
                            </div>
                        </th>
                        <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start" x-show="columns.find(column => column.key === 'customer').visible">Customer</th>
                        <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start" x-show="columns.find(column => column.key === 'product').visible">Product/Service</th>
                        <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start" x-show="columns.find(column => column.key === 'value').visible">Deal Value</th>
                        <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start" x-show="columns.find(column => column.key === 'closeDate').visible">Close Date</th>
                        <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start" x-show="columns.find(column => column.key === 'status').visible">Status</th>
                        <th class="px-6 py-3 font-medium text-gray-500 sm:px-6 text-theme-xs dark:text-gray-400 text-start">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <template x-for="row in paginatedRows" :key="row.id">
                        <tr class="border-b border-gray-100 dark:border-white/[0.05]">
                            <td class="px-4 sm:px-6 py-3.5" x-show="columns.find(column => column.key === 'id').visible">
                                <div class="flex items-center gap-3">
                                    <div @click="handleRowSelect(row.id)"
                                        class="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-[1.25px]"
                                        :class="selectedRows.includes(row.id) ? 'border-blue-500 dark:border-blue-500 bg-blue-500' : 'bg-white dark:bg-white/0 border-gray-300 dark:border-gray-700'">
                                        <svg :class="selectedRows.includes(row.id) ? 'block' : 'hidden'" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6668 3.5L5.25016 9.91667L2.3335 7" stroke="white" stroke-width="1.94437" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <span class="block font-medium text-gray-700 text-theme-sm dark:text-gray-400" x-text="row.id"></span>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-3.5" x-show="columns.find(column => column.key === 'customer').visible">
                                <div class="flex items-center gap-3">
                                    <div class="flex items-center justify-center w-10 h-10 rounded-full font-medium text-sm"
                                        :class="[row.avatarBg, row.avatarColor]">
                                        <span x-text="row.initials"></span>
                                    </div>
                                    <div>
                                        <span class="mb-0.5 block text-theme-sm font-medium text-gray-700 dark:text-gray-400" x-text="row.customerName"></span>
                                        <span class="text-gray-500 text-theme-sm dark:text-gray-400" x-text="row.customerEmail"></span>
                                    </div>
                                </div>
                            </td>
                            <td class="px-4 sm:px-6 py-3.5" x-show="columns.find(column => column.key === 'product').visible">
                                <p class="text-gray-700 text-theme-sm dark:text-gray-400" x-text="row.product"></p>
                            </td>
                            <td class="px-4 sm:px-6 py-3.5" x-show="columns.find(column => column.key === 'value').visible">
                                <p class="text-gray-700 text-theme-sm dark:text-gray-400" x-text="row.value"></p>
                            </td>
                            <td class="px-4 sm:px-6 py-3.5" x-show="columns.find(column => column.key === 'closeDate').visible">
                                <p class="text-gray-700 text-theme-sm dark:text-gray-400" x-text="row.closeDate"></p>
                            </td>
                            <td class="px-4 sm:px-6 py-3.5" x-show="columns.find(column => column.key === 'status').visible">
                                <span class="text-theme-xs inline-block rounded-full px-2 py-0.5 font-medium"
                                    :class="getStatusClass(row.status)"
                                    x-text="row.status"></span>
                            </td>
                            <td class="px-4 sm:px-6 py-3.5">
                                <button @click="deleteRow(row.id)">
                                    <svg class="text-gray-700 cursor-pointer size-5 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="px-6 py-4 border-t border-gray-200 dark:border-white/[0.05]">
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div class="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>Show</span>
                        <select x-model.number="itemsPerPage" @change="currentPage = 1" class="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white">
                            <option value="10">10</option>
                            <option value="25" selected>25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                        <span>entries</span>
                    </label>
                </div>

                <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <span class="text-sm font-medium text-gray-700 dark:text-gray-400 sm:hidden">
                        Page <span x-text="currentPage"></span> of <span x-text="totalPages"></span>
                    </span>
                    <div class="flex items-center gap-2">
                        <button @click="prevPage" :disabled="currentPage === 1" :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''" class="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:px-3.5">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.58301 9.99868C2.58272 10.1909 2.65588 10.3833 2.80249 10.53L7.79915 15.5301C8.09194 15.8231 8.56682 15.8233 8.85981 15.5305C9.15281 15.2377 9.15297 14.7629 8.86018 14.4699L5.14009 10.7472L16.6675 10.7472C17.0817 10.7472 17.4175 10.4114 17.4175 9.99715C17.4175 9.58294 17.0817 9.24715 16.6675 9.24715L5.14554 9.24715L8.86017 5.53016C9.15297 5.23717 9.15282 4.7623 8.85983 4.4695C8.56684 4.1767 8.09197 4.17685 7.79917 4.46984L2.84167 9.43049C2.68321 9.568 2.58301 9.77087 2.58301 9.99715C2.58301 9.99766 2.58301 9.99817 2.58301 9.99868Z" fill="currentColor"/>
                            </svg>
                            <span class="hidden sm:inline">Previous</span>
                        </button>
                        <ul class="hidden items-center gap-0.5 sm:flex">
                            <template x-for="page in displayedPages" :key="page">
                                <li>
                                    <button x-show="page !== '...'" @click="goToPage(page)" :class="currentPage === page ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-500/[0.08] hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-500'" class="flex h-10 w-10 items-center justify-center rounded-lg text-theme-sm font-medium" x-text="page"></button>
                                    <span x-show="page === '...'" class="flex h-10 w-10 items-center justify-center text-gray-500">...</span>
                                </li>
                            </template>
                        </ul>
                        <button @click="nextPage" :disabled="currentPage === totalPages" :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''" class="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-3 text-theme-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 sm:px-3.5">
                            <span class="hidden sm:inline">Next</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4175 9.9986C17.4178 10.1909 17.3446 10.3832 17.198 10.53L12.2013 15.5301C11.9085 15.8231 11.4337 15.8233 11.1407 15.5305C10.8477 15.2377 10.8475 14.7629 11.1403 14.4699L14.8604 10.7472L3.33301 10.7472C2.91879 10.7472 2.58301 10.4114 2.58301 9.99715C2.58301 9.58294 2.91879 9.24715 3.33301 9.24715L14.8549 9.24715L11.1403 5.53016C10.8475 5.23717 10.8477 4.7623 11.1407 4.4695C11.4336 4.1767 11.9085 4.17685 12.2013 4.46984L17.1588 9.43049C17.3173 9.568 17.4175 9.77087 17.4175 9.99715C17.4175 9.99763 17.4175 9.99812 17.4175 9.9986Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
