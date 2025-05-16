<?php

namespace App\Http\Controllers;

use App\Models\CreatorsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CreatorsController extends Controller
{
    //Контроллеры WelcomeCreators
    public function index(){
        return Inertia::render('WelcomeCreators/Welcome', [
        ]);
    }

    public function lore(){
        return Inertia::render('WelcomeCreators/Lore', []);
    }

    public function CreatorsDescription(){
        return Inertia::render('WelcomeCreators/CreatorsDescription', []);
    }

    //Контроллеры Projects
    public function projects(CreatorsModel $creators){
        $Project = CreatorsModel::latest()->paginate(5);
        return Inertia::render('Projects', [
            'Project' => $Project,
        ]);
    }
    public function create(){
        return Inertia::render('CreateProject', []);
    }
    public function store(Request $request){
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
        return Redirect::to('/projects');
    }
    public function show(CreatorsModel $project){
        Inertia::render('ProjectsShow', [
             'Projects' => $project,
        ]);
    }
}
