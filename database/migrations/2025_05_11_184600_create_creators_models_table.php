<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('creators_models', function (Blueprint $table) {
            $table->id();
            $table->string('ProjectName');
            $table->string('ProjectShortDescription')->nullable();
            $table->string('ProjectImagePath')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('creators_models');
    }
};
