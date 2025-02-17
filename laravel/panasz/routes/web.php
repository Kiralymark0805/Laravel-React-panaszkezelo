<?php

use App\Http\Controllers\panasz_controller;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::resource("Panasz", panasz_controller::class);