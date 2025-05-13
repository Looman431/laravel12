<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CreatorsModel extends Model
{
    protected $fillable = [
        'id',
        'ProjectName',
        'ProjectShortDescription',
        'ProjectImagePath',
    ];
}
