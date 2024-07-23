<?php

use App\Http\Controllers\UserController\AuthController;
use App\Http\Controllers\UserController\InfoController;
use Inertia\Inertia;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController\HomeController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::controller(InfoController::class)->group(function() {
    Route::get('/info', [InfoController::class, 'index'])->name('info');
});
Route::put('/info/{user}', [InfoController::class, 'update'])->name('info/update');

Route::inertia('/about', 'About/Index')->name('home');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'loginStore'])->name('login.store');