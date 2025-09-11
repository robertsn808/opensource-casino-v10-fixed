<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        Schema::table('w_games', function (Blueprint $table) {
            // Add missing fields that the Game model expects
            $table->string('name')->nullable()->after('id');
            $table->string('title')->nullable()->after('name');
            $table->integer('jpg_id')->default(0)->after('title');
            $table->string('label')->nullable()->after('jpg_id');
            $table->string('gamebank', 55)->default('slots')->after('label');
            $table->string('chanceFirepot1')->nullable()->after('gamebank');
            $table->string('chanceFirepot2')->nullable()->after('chanceFirepot1');
            $table->string('chanceFirepot3')->nullable()->after('chanceFirepot2');
            $table->string('fireCount1')->nullable()->after('chanceFirepot3');
            $table->string('fireCount2')->nullable()->after('fireCount1');
            $table->string('fireCount3')->nullable()->after('fireCount2');
            $table->text('lines_percent_config_spin')->nullable()->after('fireCount3');
            $table->text('lines_percent_config_spin_bonus')->nullable()->after('lines_percent_config_spin');
            $table->text('lines_percent_config_bonus')->nullable()->after('lines_percent_config_spin_bonus');
            $table->text('lines_percent_config_bonus_bonus')->nullable()->after('lines_percent_config_bonus');
            $table->string('rezerv', 55)->default('')->after('lines_percent_config_bonus_bonus');
            $table->string('cask', 10)->default('')->after('rezerv');
            $table->text('advanced')->nullable()->after('cask');
            $table->string('bet', 255)->default('')->after('advanced');
            $table->string('scaleMode')->nullable()->after('bet');
            $table->string('slotViewState')->nullable()->after('scaleMode');
            $table->decimal('denomination', 20, 2)->default(1.00)->after('slotViewState');
            $table->string('category_temp')->nullable()->after('denomination');
            // Match legacy schema used by codebase
            $table->integer('original_id')->default(0)->after('category_temp');
            $table->integer('bids')->default(0)->after('original_id');
            $table->decimal('stat_in', 15, 2)->default(0)->after('bids');
            $table->decimal('stat_out', 15, 2)->default(0)->after('stat_in');
        });
    }

    public function down() {
        Schema::table('w_games', function (Blueprint $table) {
            $table->dropColumn([
                'name', 'title', 'jpg_id', 'label', 'gamebank',
                'chanceFirepot1', 'chanceFirepot2', 'chanceFirepot3',
                'fireCount1', 'fireCount2', 'fireCount3',
                'lines_percent_config_spin', 'lines_percent_config_spin_bonus',
                'lines_percent_config_bonus', 'lines_percent_config_bonus_bonus',
                'rezerv', 'cask', 'advanced', 'bet', 'scaleMode', 'slotViewState',
                'denomination', 'category_temp', 'original_id', 'bids', 'stat_in', 'stat_out'
            ]);
        });
    }
};
