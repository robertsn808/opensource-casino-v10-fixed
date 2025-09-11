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
        Schema::create('jpg', function (Blueprint $table) {
            $table->id();
            $table->timestamp('date_time')->nullable();
            $table->string('name')->nullable();
            $table->decimal('balance', 15, 2)->default(0);
            $table->integer('pay_sum')->default(0);
            $table->integer('start_balance')->default(0);
            $table->decimal('percent', 5, 2)->default(0);
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('shop_id');
            $table->timestamps();
            
            $table->index(['shop_id']);
            $table->index(['user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jpg');
    }
};
