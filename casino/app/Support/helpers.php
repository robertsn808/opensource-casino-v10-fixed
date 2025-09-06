<?php

use Illuminate\Support\Str;						   
if (! function_exists('settings')) {
    /**
     * Get / set the specified settings value.
     *
     * If an array is passed as the key, we will assume you want to set an array of values.
     *
     * @param  array|string  $key
     * @param  mixed  $default
     * @return mixed
     */
    function settings($key = null, $default = null)
    {
        try {
            if (is_null($key)) {
                return app('anlutro\LaravelSettings\SettingStore');
            }
            return app('anlutro\LaravelSettings\SettingStore')->get($key, $default);
        } catch (\Throwable $e) {
            return $default;
        }
    }
}

function encoded($str)
{
    return base64_encode(base64_encode($str));
}
function decoded($str)
{
    return base64_decode(base64_decode($str));
}

function hpRand($digit = 4)
{
    return substr(rand(0, 12345) . strrev(time()), 0, $digit);
}
function hpRandStr($digit = 4)
{
    $random = Str::random($digit);
    return $random;
}

/**
 * Check if a game is an external game (from games directory)
 * External games are those with shop_id = 0 and have corresponding directory
 */
function isExternalGame($game)
{
    if (!$game) {
        return false;
    }
    
    // Check if it's a shop_id = 0 game (global games)
    if ($game->shop_id != 0) {
        return false;
    }
    
    // Check if the games directory exists
    $gamesPath = base_path('../games/' . $game->name);
    return is_dir($gamesPath);
}

/**
 * Get the appropriate game route based on whether it's external or internal
 */
function getGameRoute($game, $demo = false)
{
    if (isExternalGame($game)) {
        return route('frontend.game.external', $game->name);
    } else {
        $route = route('frontend.game.go', $game->name);
        if ($demo) {
            $route .= '/prego';
        }
        return $route;
    }
}
