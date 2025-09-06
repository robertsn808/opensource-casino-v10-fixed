<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->decimal('balance', 18, 4)->default(0);
            $table->unsignedInteger('percent')->default(90);
            $table->unsignedBigInteger('max_win')->default(0);
            $table->string('frontend')->nullable();
            $table->string('password')->nullable();
            $table->string('currency', 16)->default('USD');
            $table->unsignedBigInteger('shop_limit')->default(0);
            $table->boolean('is_blocked')->default(false);
            $table->string('orderby')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('pending')->default(0);
            $table->string('access')->nullable();
            $table->string('country')->nullable();
            $table->string('os')->nullable();
            $table->string('device')->nullable();
            $table->text('rules_terms_and_conditions')->nullable();
            $table->text('rules_privacy_policy')->nullable();
            $table->text('rules_general_bonus_policy')->nullable();
            $table->text('rules_why_bitcoin')->nullable();
            $table->text('rules_responsible_gaming')->nullable();
            $table->boolean('happyhours_active')->default(false);
            $table->boolean('progress_active')->default(false);
            $table->boolean('invite_active')->default(false);
            $table->boolean('welcome_bonuses_active')->default(false);
            $table->boolean('sms_bonuses_active')->default(false);
            $table->boolean('wheelfortune_active')->default(false);

            // No timestamps as the associated model disables them
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};

