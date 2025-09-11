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
            // Essential missing columns based on User model fillable fields
            $table->boolean('is_demo_agent')->default(false)->after('language');
            $table->timestamp('last_daily_entry')->nullable()->after('is_demo_agent');
            $table->string('avatar')->nullable()->after('last_daily_entry');
            $table->decimal('shop_limit', 15, 2)->default(0)->after('avatar');
            $table->string('confirmation_token')->nullable()->after('shop_limit');
            $table->boolean('google2fa_enable')->default(false)->after('confirmation_token');
            $table->string('google2fa_secret')->nullable()->after('google2fa_enable');
            $table->integer('rating')->default(0)->after('google2fa_secret');
            $table->boolean('agreed')->default(false)->after('rating');
            $table->boolean('free_demo')->default(false)->after('agreed');
            
            // Counters for various features
            $table->integer('count_tournaments')->default(0)->after('free_demo');
            $table->integer('count_happyhours')->default(0)->after('count_tournaments');
            $table->integer('count_refunds')->default(0)->after('count_happyhours');
            $table->integer('count_progress')->default(0)->after('count_refunds');
            $table->integer('count_daily_entries')->default(0)->after('count_progress');
            $table->integer('count_invite')->default(0)->after('count_daily_entries');
            $table->integer('count_welcomebonus')->default(0)->after('count_invite');
            $table->integer('count_smsbonus')->default(0)->after('count_welcomebonus');
            $table->integer('count_wheelfortune')->default(0)->after('count_smsbonus');
            
            // Feature flags
            $table->boolean('tournaments')->default(true)->after('count_wheelfortune');
            $table->boolean('happyhours')->default(true)->after('tournaments');
            $table->boolean('refunds')->default(true)->after('happyhours');
            $table->boolean('progress')->default(true)->after('refunds');
            $table->boolean('daily_entries')->default(true)->after('progress');
            $table->boolean('invite')->default(true)->after('daily_entries');
            $table->boolean('welcomebonus')->default(true)->after('invite');
            $table->boolean('smsbonus')->default(true)->after('welcomebonus');
            $table->boolean('wheelfortune')->default(true)->after('smsbonus');
            
            // Totals and additional fields
            $table->decimal('total_in', 15, 2)->default(0)->after('wheelfortune');
            $table->decimal('total_out', 15, 2)->default(0)->after('total_in');
            $table->boolean('phone_verified')->default(false)->after('total_out');
            $table->string('sms_token')->nullable()->after('phone_verified');
            $table->timestamp('sms_token_date')->nullable()->after('sms_token');
            $table->unsignedBigInteger('inviter_id')->nullable()->after('sms_token_date');
            $table->unsignedBigInteger('parent_id')->nullable()->after('inviter_id');
            $table->string('session')->nullable()->after('parent_id');
            $table->boolean('is_blocked')->default(false)->after('session');
            $table->string('auth_token')->nullable()->after('is_blocked');
            $table->timestamp('last_online')->nullable()->after('auth_token');
            $table->timestamp('last_bid')->nullable()->after('last_online');
            $table->timestamp('last_progress')->nullable()->after('last_bid');
            $table->timestamp('last_wheelfortune')->nullable()->after('last_progress');
            
            // Indexes for performance
            $table->index(['shop_id']);
            $table->index(['role_id']);
            $table->index(['status']);
            $table->index(['username']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'is_demo_agent', 'last_daily_entry', 'avatar', 'shop_limit', 
                'confirmation_token', 'google2fa_enable', 'google2fa_secret', 
                'rating', 'agreed', 'free_demo', 'count_tournaments', 
                'count_happyhours', 'count_refunds', 'count_progress', 
                'count_daily_entries', 'count_invite', 'count_welcomebonus', 
                'count_smsbonus', 'count_wheelfortune', 'tournaments', 
                'happyhours', 'refunds', 'progress', 'daily_entries', 
                'invite', 'welcomebonus', 'smsbonus', 'wheelfortune', 
                'total_in', 'total_out', 'phone_verified', 'sms_token', 
                'sms_token_date', 'inviter_id', 'parent_id', 'session', 
                'is_blocked', 'auth_token', 'last_online', 'last_bid', 
                'last_progress', 'last_wheelfortune'
            ]);
        });
    }
};
