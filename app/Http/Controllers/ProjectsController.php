<?php

namespace App\Http\Controllers;

use App\Models\CreatorsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Project = CreatorsModel::latest()->paginate(5);
        return Inertia::render('Projects', [
            'Project' => $Project,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateProject', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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

    /**
     * Display the specified resource.
     */
    public function show(string $id, CreatorsModel $project)
    {
        Inertia::render('ProjectsShow', [
            'Project' => $project,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
