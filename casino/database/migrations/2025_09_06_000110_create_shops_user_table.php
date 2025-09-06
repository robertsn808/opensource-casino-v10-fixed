<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shops_user', function (Blueprint $table) {
            $table->unsignedBigInteger('shop_id');
            $table->unsignedBigInteger('user_id');

            // Composite primary key for pivot behaviour
            $table->primary(['shop_id', 'user_id']);

            // Indexes to speed up joins/filters used in code
            $table->index('shop_id');
            $table->index('user_id');

            // Foreign key constraints are omitted to avoid dependency on
            // tables that may not yet exist in fresh installs.
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shops_user');
    }
};

