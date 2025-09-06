<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::create('w_games', function (Blueprint $table) {
            $table->id();
            $table->boolean('view')->default(1);
            $table->integer('shop_id')->default(0);
            $table->integer('device');
            // Add other columns as needed
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('w_games');
    }
};
