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
        Schema::create('w_stat_game', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date_time');
            $table->unsignedBigInteger('user_id');
            $table->decimal('balance', 10, 4)->default(0);
            $table->decimal('bet', 10, 4)->default(0);
            $table->decimal('win', 10, 4)->default(0);
            $table->string('game');
            $table->integer('denomination')->default(1);
            $table->decimal('in_game', 10, 4)->default(0);
            $table->decimal('in_jpg', 10, 4)->default(0);
            $table->decimal('in_profit', 10, 4)->default(0);
            $table->decimal('game_bank', 10, 4)->default(0);
            $table->decimal('jack_balance', 10, 4)->default(0);
            $table->unsignedBigInteger('shop_id');
            $table->decimal('slots_bank', 10, 4)->default(0);
            $table->decimal('bonus_bank', 10, 4)->default(0);
            $table->decimal('fish_bank', 10, 4)->default(0);
            $table->decimal('table_bank', 10, 4)->default(0);
            $table->decimal('little_bank', 10, 4)->default(0);
            $table->decimal('total_bank', 10, 4)->default(0);
            
            $table->index(['user_id', 'date_time']);
            $table->index('shop_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('w_stat_game');
    }
};
