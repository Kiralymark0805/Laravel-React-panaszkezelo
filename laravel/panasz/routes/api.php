<?php

use App\Http\Controllers\panasz_controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/* Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum'); */


Route::middleware('auth:api');

Route::get("/", [panasz_controller::class, 'index']);
Route::get("/panasz/{id}", [panasz_controller::class, 'show']);
Route::delete("/panasz/{id}", [panasz_controller::class, 'destroy']);