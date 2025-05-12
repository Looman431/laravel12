<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', 'App\Http\Controllers\CreatorsController@index');
Route::get('/projects', 'App\Http\Controllers\CreatorsController@projects');
Route::get('/projects/create','App\Http\Controllers\CreatorsController@create');
Route::post('/projects/create/check','App\Http\Controllers\CreatorsController@store');
