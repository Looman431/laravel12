<?php

use App\Http\Controllers\CreatorsController;
use App\Http\Controllers\ProjectsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';

//База
Route::redirect('/', '/creators')->name('home');
//Роутеры креаторс
Route::get('/creators', [CreatorsController::class, 'index']);
Route::get('/creators/lore',[CreatorsController::class,'lore']);
Route::get('/creators/description',[CreatorsController::class,'CreatorsDescription']);

//Роутеры projects
Route::get('/projects', [ProjectsController::class, 'index']);
Route::middleware('auth')->group(function () {
    Route::get('/projects/create',[ProjectsController::class,'create']);
    Route::post('/projects/create/store',[ProjectsController::class,'store']);
});
Route::get('/projects/{project}',[ProjectsController::class,'show']); //->name('projects.show');

//Роутер ресурса projects (новый)
//Route::resource('projects', ProjectsController::class)->except(['create','store','show']);

//Тест ларавеля без вайта
Route::view('/laravel', 'test');
