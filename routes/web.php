<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', 'App\Http\Controllers\CreatorsController@index');
Route::get('/projects', 'App\Http\Controllers\CreatorsController@projects');
