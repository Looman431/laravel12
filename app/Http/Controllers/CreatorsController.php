<?php

namespace App\Http\Controllers;

use App\Models\CreatorsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CreatorsController extends Controller
{
    public function index(){
        return Inertia::render('Welcome', []);
    }
    public function projects(){
        return Inertia::render('Projects', [
            'CreatorsModel' => DB::table('creators')->select('ProjectName', 'ProjectShortDescription')->get()
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
}
