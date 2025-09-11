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
        Schema::create('w_payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->decimal('sum', 10, 4)->default(0);
            $table->string('currency', 10)->default('USD');
            $table->unsignedBigInteger('credit_id')->nullable();
            $table->tinyInteger('status')->default(0);
            $table->string('system')->nullable();
            $table->unsignedBigInteger('shop_id');
            $table->timestamp('created_at')->useCurrent();
            
            $table->index(['user_id']);
            $table->index(['shop_id']);
            $table->index(['status']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('w_payments');
    }
};
