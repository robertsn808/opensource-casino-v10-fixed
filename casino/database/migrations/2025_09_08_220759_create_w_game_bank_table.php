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
        Schema::create('w_game_bank', function (Blueprint $table) {
            $table->id();
            $table->decimal('slots', 15, 2)->default(0);
            $table->decimal('little', 15, 2)->default(0);
            $table->decimal('table_bank', 15, 2)->default(0);
            $table->decimal('bonus', 15, 2)->default(0);
            $table->decimal('temp_rtp', 10, 2)->default(0);
            $table->unsignedBigInteger('shop_id');
            
            $table->index('shop_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('w_game_bank');
    }
};
