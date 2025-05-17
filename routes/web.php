<?php

use App\Http\Controllers\CreatorsController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//База
Route::redirect('/', '/creators');
//Роутеры креаторс
Route::get('/creators', [CreatorsController::class, 'index']);
Route::get('/creators/lore',[CreatorsController::class,'lore']);
Route::get('/creators/description',[CreatorsController::class,'CreatorsDescription']);

//Роутеры projects
//Route::get('/projects', [CreatorsController::class, 'projects']);
//Route::get('/projects/create',[CreatorsController::class,'create']);
//Route::post('/projects/create/store',[CreatorsController::class,'store']);
//Route::get('/projects/{project}',[CreatorsController::class,'show'])->name('projects.show');

//Роутер ресурса projects (новый)
Route::get('/projects/{project:id}',[ProjectsController::class,'show'])->name('projects.show');
Route::post('/projects/create/store',[ProjectsController::class,'store'])->name('projects.store');
Route::resource('projects', ProjectsController::class)->except(['store','show']);
