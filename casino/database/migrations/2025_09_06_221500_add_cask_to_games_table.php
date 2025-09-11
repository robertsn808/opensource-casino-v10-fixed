<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // Use un-prefixed table name; connection prefix (w_) will be applied.
        if (!Schema::hasColumn('w_games', 'cask')) {
            Schema::table('w_games', function (Blueprint $table) {
                $table->decimal('cask', 10, 2)->default(0)->after('rezerv');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('w_games', 'cask')) {
            Schema::table('w_games', function (Blueprint $table) {
                $table->dropColumn('cask');
            });
        }
    }
};

