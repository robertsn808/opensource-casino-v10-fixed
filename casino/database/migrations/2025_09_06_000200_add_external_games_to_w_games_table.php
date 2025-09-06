<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class AddExternalGamesToWGamesTable extends Migration
{
    public function up()
    {
        // First, get a list of all external games from the games directory
        $gamesPath = base_path() . '/../games';
        $externalGames = [];
        
        if (is_dir($gamesPath)) {
            $gameDirectories = array_diff(scandir($gamesPath), ['.', '..']);
            
            foreach ($gameDirectories as $gameDir) {
                $gamePath = $gamesPath . '/' . $gameDir;
                if (is_dir($gamePath)) {
                    $externalGames[] = [
                        'name' => $gameDir,
                        'title' => ucfirst(preg_replace('/([A-Z]{2,})/', ' $1', $gameDir)),
                        'original_id' => crc32($gameDir), // Generate unique ID based on name
                        'shop_id' => 0, // Global games
                        'view' => 1,
                        'device' => 'all', // Both mobile and desktop
                        'is_mobile' => 1,
                        'type' => 'slots',
                        'rtp' => 95.00,
                        'active' => 1,
                        'date' => date('Y-m-d'),
                        'created_at' => now(),
                        'updated_at' => now(),
                    ];
                }
            }
        }
        
        // Insert external games into w_games table
        foreach ($externalGames as $game) {
            // Check if game already exists
            $exists = DB::table('games')->where('name', $game['name'])->exists();
            
            if (!$exists) {
                DB::table('games')->insert($game);
                echo "Added external game: " . $game['name'] . "\n";
            }
        }
        
        // Add external games to default categories
        $defaultCategoryId = 1; // Assuming slots category exists
        
        foreach ($externalGames as $game) {
            $gameRecord = DB::table('games')->where('name', $game['name'])->first();
            if ($gameRecord) {
                // Check if category mapping exists
                $categoryExists = DB::table('game_categories')
                    ->where('game_id', $gameRecord->original_id)
                    ->where('category_id', $defaultCategoryId)
                    ->exists();
                    
                if (!$categoryExists) {
                    DB::table('game_categories')->insert([
                        'game_id' => $gameRecord->original_id,
                        'category_id' => $defaultCategoryId
                    ]);
                }
            }
        }
    }

    public function down()
    {
        // Remove external games (games with shop_id = 0 and created by this migration)
        $gamesPath = base_path() . '/../games';
        
        if (is_dir($gamesPath)) {
            $gameDirectories = array_diff(scandir($gamesPath), ['.', '..']);
            
            foreach ($gameDirectories as $gameDir) {
                if (is_dir($gamesPath . '/' . $gameDir)) {
                    DB::table('games')->where('name', $gameDir)->where('shop_id', 0)->delete();
                }
            }
        }
    }
}