<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() {
        if (!Schema::hasTable('w_subsessions')) {
            Schema::create('w_subsessions', function (Blueprint $table) {
                $table->id();
                $table->unsignedBigInteger('user_id');
                $table->string('subsession');
                $table->unsignedTinyInteger('active')->default(1);
                $table->timestamp('created_at')->useCurrent();
            });
        }
    }

    public function down() {
        Schema::dropIfExists('w_subsessions');
    }
};

