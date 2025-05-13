<?php

namespace App\Http\Controllers;

use App\Models\CreatorsModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CreatorsController extends Controller
{
    public function index(){
        return Inertia::render('Welcome', []);
    }
    public function projects(){
        return Inertia::render('Projects', []);
    }
    public function create(){
        return Inertia::render('CreateProject', []);
    }
    public function store(Request $request){
       $ShortView = $request->validate([
           'ProjectName' => 'required',
           'ProjectShortDescription' => 'required|max:100',
           'ProjectImage' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
       ]);
       CreatorsModel::create($ShortView);
       return redirect('/');
    }
}
