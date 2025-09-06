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