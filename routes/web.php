<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

// dashboard pages
Route::get('/', function () {
    return view('pages.dashboard.ecommerce', ['title' => 'E-commerce Dashboard']);
})->name('dashboard');

// calender pages
Route::get('/calendar', function () {
    return view('pages.calender', ['title' => 'Calendar']);
})->name('calendar');

// profile pages
Route::get('/profile', function () {
    return view('pages.profile', ['title' => 'Profile']);
})->name('profile');

// form pages
Route::get('/form-elements', function () {
    return view('pages.form.form-elements', ['title' => 'Form Elements']);
})->name('form-elements');

// tables pages
Route::get('/basic-tables', function () {
    return view('pages.tables.basic-tables', ['title' => 'Basic Tables']);
})->name('basic-tables');

// pages

Route::get('/blank', function () {
    return view('pages.blank', ['title' => 'Blank']);
})->name('blank');

// error pages
Route::get('/error-404', function () {
    return view('pages.errors.error-404', ['title' => 'Error 404']);
})->name('error-404');

// chart pages
Route::get('/line-chart', function () {
    return view('pages.chart.line-chart', ['title' => 'Line Chart']);
})->name('line-chart');

Route::get('/bar-chart', function () {
    return view('pages.chart.bar-chart', ['title' => 'Bar Chart']);
})->name('bar-chart');

// ECharts category pages
Route::get('/echarts/line', function () {
    return view('pages.chart.echarts.line', ['title' => 'Line Charts - ECharts']);
})->name('echarts-line');

Route::get('/echarts/bar', function () {
    return view('pages.chart.echarts.bar', ['title' => 'Bar Charts - ECharts']);
})->name('echarts-bar');

Route::get('/echarts/pie', function () {
    return view('pages.chart.echarts.pie', ['title' => 'Pie Charts - ECharts']);
})->name('echarts-pie');

Route::get('/echarts/candlestick', function () {
    return view('pages.chart.echarts.candlestick', ['title' => 'Candlestick Charts - ECharts']);
})->name('echarts-candlestick');

Route::get('/echarts/radar', function () {
    return view('pages.chart.echarts.radar', ['title' => 'Radar Charts - ECharts']);
})->name('echarts-radar');

Route::get('/echarts/tree', function () {
    return view('pages.chart.echarts.tree', ['title' => 'Tree Charts - ECharts']);
})->name('echarts-tree');

Route::get('/echarts/treemap', function () {
    return view('pages.chart.echarts.treemap', ['title' => 'Treemap Charts - ECharts']);
})->name('echarts-treemap');

Route::get('/echarts/funnel', function () {
    return view('pages.chart.echarts.funnel', ['title' => 'Funnel Charts - ECharts']);
})->name('echarts-funnel');

Route::get('/echarts/dataset', function () {
    return view('pages.chart.echarts.dataset', ['title' => 'Dataset Charts - ECharts']);
})->name('echarts-dataset');

Route::get('/echarts/rich', function () {
    return view('pages.chart.echarts.rich', ['title' => 'Rich Text Charts - ECharts']);
})->name('echarts-rich');

Route::get('/echarts/bar3d', function () {
    return view('pages.chart.echarts.bar3d', ['title' => '3D Bar Charts - ECharts GL']);
})->name('echarts-bar3d');


// authentication pages
Route::get('/signin', function () {
    return view('pages.auth.signin', ['title' => 'Sign In']);
})->name('signin');

Route::get('/signup', function () {
    return view('pages.auth.signup', ['title' => 'Sign Up']);
})->name('signup');

// ui elements pages
Route::get('/alerts', function () {
    return view('pages.ui-elements.alerts', ['title' => 'Alerts']);
})->name('alerts');

Route::get('/avatars', function () {
    return view('pages.ui-elements.avatars', ['title' => 'Avatars']);
})->name('avatars');

Route::get('/badge', function () {
    return view('pages.ui-elements.badges', ['title' => 'Badges']);
})->name('badges');

Route::get('/buttons', function () {
    return view('pages.ui-elements.buttons', ['title' => 'Buttons']);
})->name('buttons');

Route::get('/image', function () {
    return view('pages.ui-elements.images', ['title' => 'Images']);
})->name('images');

Route::get('/videos', function () {
    return view('pages.ui-elements.videos', ['title' => 'Videos']);
})->name('videos');






















