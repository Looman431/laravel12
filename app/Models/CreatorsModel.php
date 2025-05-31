<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreatorsModel extends Model
{
    //zprotected $table = 'creators_models';
    //protected $primaryKey = 'creators_models_id';
    protected $fillable = [
        'id',
        'ProjectName',
        'ProjectShortDescription',
        'ProjectImagePath',
    ];
}
