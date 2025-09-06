<?php
/**
 * Script to patch EGT games to use dynamic session tokens
 * This script modifies the hardcoded session keys in EGT games
 */

$gamesPath = realpath(__DIR__ . '/../games');
$backupPath = realpath(__DIR__ . '/../games_backup');

if (!$gamesPath || !is_dir($gamesPath)) {
    die("Games directory not found at: $gamesPath\n");
}

// Create backup directory if it doesn't exist
if (!is_dir($backupPath)) {
    mkdir($backupPath, 0755, true);
}

function patchEGTGame($gamePath, $gameName) {
    $indexFile = $gamePath . '/index.html';
    
    if (!file_exists($indexFile)) {
        echo "Skipping $gameName - no index.html found\n";
        return false;
    }
    
    $content = file_get_contents($indexFile);
    
    // Check if this is an EGT game
    if (strpos($content, 'sessionKey:') === false) {
        echo "Skipping $gameName - not an EGT game\n";
        return false;
    }
    
    // Backup original file
    global $backupPath;
    $backupDir = $backupPath . '/' . $gameName;
    if (!is_dir($backupDir)) {
        mkdir($backupDir, 0755, true);
    }
    copy($indexFile, $backupDir . '/index.html.backup');
    
    // Replace hardcoded session key with a placeholder that will be replaced dynamically
    $originalPattern = '/sessionKey:\s*["\'][^"\']*["\']/';
    $replacement = 'sessionKey: "{{DYNAMIC_SESSION_TOKEN}}"';
    
    $newContent = preg_replace($originalPattern, $replacement, $content);
    
    if ($newContent !== $content) {
        file_put_contents($indexFile, $newContent);
        echo "Patched $gameName - replaced hardcoded session key\n";
        return true;
    } else {
        echo "No changes needed for $gameName\n";
        return false;
    }
}

function patchAllEGTGames($gamesPath) {
    $gameDirectories = array_diff(scandir($gamesPath), ['.', '..']);
    $patchedCount = 0;
    
    foreach ($gameDirectories as $gameDir) {
        $gamePath = $gamesPath . '/' . $gameDir;
        
        if (is_dir($gamePath) && strpos(strtoupper($gameDir), 'EGT') !== false) {
            if (patchEGTGame($gamePath, $gameDir)) {
                $patchedCount++;
            }
        }
    }
    
    return $patchedCount;
}

// Run the patching
echo "Starting EGT games patching process...\n";
echo "Games directory: $gamesPath\n";
echo "Backup directory: $backupPath\n\n";

$patchedCount = patchAllEGTGames($gamesPath);

echo "\nPatching complete!\n";
echo "Patched $patchedCount EGT games\n";
echo "Original files backed up to: $backupPath\n";

// Create a restoration script
$restoreScript = <<<'PHP'
<?php
/**
 * Script to restore original EGT games from backup
 */

$gamesPath = realpath(__DIR__ . '/../games');
$backupPath = realpath(__DIR__ . '/../games_backup');

if (!$gamesPath || !is_dir($gamesPath)) {
    die("Games directory not found\n");
}

if (!$backupPath || !is_dir($backupPath)) {
    die("Backup directory not found\n");
}

$gameDirectories = array_diff(scandir($backupPath), ['.', '..']);
$restoredCount = 0;

foreach ($gameDirectories as $gameDir) {
    $backupFile = $backupPath . '/' . $gameDir . '/index.html.backup';
    $originalFile = $gamesPath . '/' . $gameDir . '/index.html';
    
    if (file_exists($backupFile) && file_exists($originalFile)) {
        copy($backupFile, $originalFile);
        echo "Restored $gameDir\n";
        $restoredCount++;
    }
}

echo "\nRestoration complete!\n";
echo "Restored $restoredCount games\n";
PHP;

file_put_contents(__DIR__ . '/restore_egt_games.php', $restoreScript);
echo "Restoration script created at: " . __DIR__ . '/restore_egt_games.php' . "\n";
?>