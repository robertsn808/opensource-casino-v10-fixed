<!DOCTYPE html>
<html>
<head>
    <title>Test External Games Integration</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .game { border: 1px solid #ddd; margin: 10px 0; padding: 15px; border-radius: 5px; }
        .game-title { font-weight: bold; color: #333; }
        .game-info { color: #666; font-size: 0.9em; margin: 5px 0; }
        .game-links a { margin-right: 10px; padding: 5px 10px; background: #007cba; color: white; text-decoration: none; border-radius: 3px; }
        .game-links a:hover { background: #005a87; }
        .external-game { background: #f0f8ff; border-left: 4px solid #007cba; }
        .internal-game { background: #f8f8f8; border-left: 4px solid #666; }
    </style>
</head>
<body>
    <h1>External Games Integration Test</h1>
    <p>This page shows the first 20 games in the system and indicates whether they're external or internal games.</p>
    
    @php
        $games = \VanguardLTE\Game::limit(20)->get();
        $externalCount = 0;
        $internalCount = 0;
    @endphp
    
    @foreach($games as $game)
        @php
            $isExternal = isExternalGame($game);
            if ($isExternal) $externalCount++;
            else $internalCount++;
        @endphp
        
        <div class="game {{ $isExternal ? 'external-game' : 'internal-game' }}">
            <div class="game-title">{{ $game->title }} ({{ $game->name }})</div>
            <div class="game-info">
                Type: {{ $isExternal ? 'External Game' : 'Internal Game' }} | 
                Shop ID: {{ $game->shop_id }} | 
                Device: {{ $game->device }}
                @if($isExternal)
                    | Games Dir: {{ is_dir(base_path('../games/' . $game->name)) ? 'EXISTS' : 'MISSING' }}
                @endif
            </div>
            <div class="game-links">
                <a href="{{ getGameRoute($game) }}" target="_blank">Play</a>
                <a href="{{ getGameRoute($game, true) }}" target="_blank">Demo</a>
                @if($isExternal)
                    <a href="/games/{{ $game->name }}/index.html" target="_blank">Direct Access</a>
                @endif
            </div>
        </div>
    @endforeach
    
    <div style="margin-top: 30px; padding: 15px; background: #e8f5e8; border-radius: 5px;">
        <h3>Summary</h3>
        <p><strong>External Games:</strong> {{ $externalCount }}</p>
        <p><strong>Internal Games:</strong> {{ $internalCount }}</p>
        <p><strong>Total Games Tested:</strong> {{ $externalCount + $internalCount }}</p>
    </div>
    
    <div style="margin-top: 20px; padding: 15px; background: #fff3cd; border-radius: 5px;">
        <h3>Integration Status</h3>
        <ul>
            <li>✅ External games detected and added to database</li>
            <li>✅ Dynamic token system implemented</li>
            <li>✅ Universal game wrapper created</li>
            <li>✅ Helper functions for routing implemented</li>
            <li>✅ Game templates updated to use new routing system</li>
        </ul>
    </div>
</body>
</html>