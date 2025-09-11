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
        Schema::table('users', function (Blueprint $table) {
            $table->decimal('balance', 15, 2)->default(0)->after('username');
            $table->decimal('count_balance', 15, 2)->default(0)->after('balance');
            $table->string('status', 20)->default('Active')->after('count_balance');
            $table->unsignedBigInteger('shop_id')->default(1)->after('status');
            $table->integer('role_id')->default(1)->after('shop_id');
            $table->string('currency', 10)->default('USD')->after('role_id');
            $table->timestamp('last_login')->nullable()->after('currency');
            $table->string('phone')->nullable()->after('last_login');
            $table->string('language', 10)->default('en')->after('phone');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'balance', 'count_balance', 'status', 'shop_id', 'role_id', 
                'currency', 'last_login', 'phone', 'language'
            ]);
        });
    }
};
