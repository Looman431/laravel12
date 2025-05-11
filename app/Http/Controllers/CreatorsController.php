<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CreatorsController extends Controller
{
    public function index(){
        return Inertia::render('Welcome', []);
    }
    public function projects(){
        return Inertia::render('Projects', []);
    }
}
