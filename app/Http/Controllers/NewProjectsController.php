<?php

namespace App\Http\Controllers;

use App\Models\CreatorsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class NewProjectsController extends Controller
{
    //Контроллер отображение проектов
    public function index(){
       $Project = CreatorsModel::latest()->paginate(5);
       return Inertia::render('Projects/Projects', [
           'Project' => $Project,
       ]);
    }

    //Контроллер отображения проекта
    public function show(){
      return Inertia::render('Projects/ProjectsShow', []);
    }

    //Контоллер создания странички "Превью" проекта
    public function preview(){
        return Inertia::render('Projects/CreatePreview', [
        ]);
    }

    //Контроллер Сохранения странички "Превью" проекта
    public function preview_store(Request $request ){
        $validatedData = $request->validate([
            'ProjectName' => 'required',
            'ProjectShortDescription' => 'required|max:100',
            'project_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        $imagePath = null;
        if($request->hasFile('project_image')){
            $imagePath = $request->file('project_image')->store('ShortViewIcons', 'public');
        }

        CreatorsModel::create([
            'ProjectName' => $validatedData['ProjectName'],                 // Соответствует столбцу DB
            'ProjectShortDescription' => $validatedData['ProjectShortDescription'], // Соответствует столбцу DB
            'ProjectImagePath' => $imagePath,                          // Соответствует новому столбцу DB
        ]);
        return Redirect::to('/projects/{project}/edit');
    }

    //Контроллер Редактирования основного проекта
    public function edit(){
        return Inertia::render('Projects/EditProjects', []);
    }
}
