<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        if (!Schema::hasTable('w_user_activity')) {
            Schema::create('w_user_activity', function (Blueprint $table) {
                $table->increments('id');
                $table->text('old')->nullable();
                $table->text('description');
                $table->enum('type', ['user', 'system'])->nullable();
                $table->string('system', 55)->nullable();
                $table->integer('item_id', false, true)->nullable();
                $table->integer('user_id', false, true);
                $table->integer('shop_id', false, true)->default(0);
                $table->string('ip_address', 45);
                $table->text('user_agent');
                $table->string('country')->nullable();
                $table->string('city')->nullable();
                $table->string('os')->nullable();
                $table->string('device')->nullable();
                $table->string('browser')->nullable();
                $table->timestamp('created_at')->useCurrent();
                
                $table->index('user_id');
                $table->index('type');
                $table->index('system');
                $table->index('item_id');
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('w_user_activity');
    }
};