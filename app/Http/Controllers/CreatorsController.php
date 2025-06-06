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
}
