<?php

use App\Http\Controllers\CreatorsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [CreatorsController::class, 'index']);
Route::get('/projects', [CreatorsController::class, 'projects']);
Route::get('/projects/create',[CreatorsController::class,'create']);
Route::post('/projects/create/store',[CreatorsController::class,'store']);
