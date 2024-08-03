<?php

use App\Http\Controllers\AdminController\CategoryController;
use App\Http\Controllers\AdminController\DashboardController;
use App\Http\Controllers\AdminController\OrderController;
use App\Http\Controllers\AdminController\ProductController;
use App\Http\Controllers\UserController\AuthController;
use App\Http\Controllers\UserController\InfoController;
use Inertia\Inertia;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');


Route::controller(InfoController::class)->group(function() {
    Route::get('/info', [InfoController::class, 'index'])->middleware('checkAuth')->name('info');
});


Route::put('/info/{user}', [InfoController::class, 'update'])->name('info/update');

Route::inertia('/about', 'User/About/Index')->name('about');
Route::inertia('/contact', 'User/Contact/Index')->name('contact');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'loginStore'])->name('login-store');

Route::get('/admin/dashboard', [DashboardController::class, 'index'])->middleware('auth')->name('dashboard');
Route::resource('/admin/product', ProductController::class);
Route::resource('/admin/category', CategoryController::class);
Route::resource('/admin/order', OrderController::class);
Route::resource('/admin/product', ProductController::class);
