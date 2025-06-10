<?php

use App\Http\Controllers\CreatorsController;
use App\Http\Controllers\NewProjectsController;
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

//Проекты
Route::get('/projects', [NewProjectsController::class, 'index']); //Отображение проектов
Route::redirect('/projects/create', '/projects/preview'); //Начало создания проекта

Route::middleware('auth')->group(function () {
    Route::get('/projects/preview', [NewProjectsController::class, 'preview']); //Создания "Превью" проекта
    Route::post('/projects/preview/store', [NewProjectsController::class, 'preview_store']); //Сохранение "Превью" проекта

    Route::get('/projects/{project}', [NewProjectsController::class, 'show']); //Страничка отображения конкретного проекта
    Route::get('/projects/{project}/edit', [NewProjectsController::class, 'edit']); //Страничка редактирования конкретного проекта
});

//Тест ларавеля без вайта
Route::view('/laravel', 'test');

//Ядерный полигон
Route::get('/test', [CreatorsController::class, 'test']);
