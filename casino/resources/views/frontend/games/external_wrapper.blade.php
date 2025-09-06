<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $game }} - {{ config('app.name') }}</title>
    <style>
        body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #000;
        }
        
        #game-container {
            width: 100%;
            height: 100vh;
            position: relative;
        }
        
        #game-iframe {
            width: 100%;
            height: 100%;
            border: none;
            display: none;
        }
        
        #loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        
        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 2s linear infinite;
            margin: 0 auto 20px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .error-message {
            color: #ff6b6b;
            background: rgba(255, 107, 107, 0.1);
            border: 1px solid #ff6b6b;
            border-radius: 5px;
            padding: 20px;
            margin-top: 20px;
            max-width: 400px;
        }
    </style>
</head>
<body>
    <div id="game-container">
        <div id="loading">
            <div class="spinner"></div>
            <div>Loading {{ $game }}...</div>
            <div id="error-container"></div>
        </div>
        <iframe id="game-iframe" src="about:blank"></iframe>
    </div>

    <script>
        // Game configuration injected from server
        window.GAME_CONFIG = @json($gameConfig);
        window.GAME_NAME = '{{ $game }}';
        
        console.log('Game Config:', window.GAME_CONFIG);
        
        // Game format detection and initialization
        class GameLauncher {
            constructor() {
                this.gameConfig = window.GAME_CONFIG;
                this.gameName = window.GAME_NAME;
                this.gameFormats = {
                    'EGT': this.launchEGTGame.bind(this),
                    'AM': this.launchAMGame.bind(this),
                    'PT': this.launchPTGame.bind(this),
                    'GT': this.launchGTGame.bind(this),
                    'KA': this.launchKAGame.bind(this),
                    'CT': this.launchCTGame.bind(this)
                };
            }
            
            async init() {
                try {
                    const format = this.detectGameFormat();
                    console.log('Detected game format:', format);
                    
                    if (this.gameFormats[format]) {
                        await this.gameFormats[format]();
                    } else {
                        throw new Error('Unknown game format: ' + format);
                    }
                } catch (error) {
                    this.showError('Failed to initialize game: ' + error.message);
                }
            }
            
            detectGameFormat() {
                const name = this.gameName.toUpperCase();
                
                if (name.includes('EGT')) return 'EGT';
                if (name.includes('AM')) return 'AM';
                if (name.includes('PT') || name.includes('PTM')) return 'PT';
                if (name.includes('GT') || name.includes('GTM')) return 'GT';
                if (name.includes('KA')) return 'KA';
                if (name.includes('CT')) return 'CT';
                
                // Default fallback - try EGT format first as it's most common
                return 'EGT';
            }
            
            async launchEGTGame() {
                console.log('Launching EGT game');
                
                // First, patch the game's index.html to use dynamic session token
                const gameUrl = await this.patchEGTGame();
                this.loadGameInIframe(gameUrl);
            }
            
            async patchEGTGame() {
                // Create a patched version of the game
                const response = await fetch(`/games/${this.gameName}/index.html`);
                if (!response.ok) {
                    throw new Error('Game files not found');
                }
                
                let html = await response.text();
                
                // Replace the placeholder token with actual dynamic token
                html = html.replace(
                    /\{\{DYNAMIC_SESSION_TOKEN\}\}/g,
                    this.gameConfig.sessionKey
                );
                
                // Also handle any remaining hardcoded session keys as fallback
                html = html.replace(
                    /sessionKey:\s*["'][^"']*["']/g,
                    `sessionKey: "${this.gameConfig.sessionKey}"`
                );
                
                // Replace game identification number if needed
                html = html.replace(
                    /gameIdentificationNumber:\s*["'][^"']*["']/g,
                    `gameIdentificationNumber: "${this.gameConfig.userId}"`
                );
                
                // Update base URL to ensure proper resource loading
                html = html.replace(
                    /<base href="[^"]*"/g,
                    `<base href="${this.gameConfig.gameBase}html5/"`
                );
                
                // Inject socket configuration dynamically
                const socketConfigScript = `
                    <script>
                        // Override socket configuration with dynamic values
                        window.EXTERNAL_SOCKET_CONFIG = ${JSON.stringify(this.gameConfig.socketConfig)};
                        window.EXTERNAL_GAME_CONFIG = ${JSON.stringify(this.gameConfig)};
                        
                        // Patch the socket configuration loading
                        (function() {
                            const originalXHR = window.XMLHttpRequest;
                            window.XMLHttpRequest = function() {
                                const xhr = new originalXHR();
                                const originalOpen = xhr.open;
                                xhr.open = function(method, url, ...args) {
                                    if (url.includes('socket_config.json')) {
                                        // Intercept socket config requests
                                        setTimeout(() => {
                                            Object.defineProperty(xhr, 'responseText', {
                                                writable: true
                                            });
                                            xhr.responseText = JSON.stringify(window.EXTERNAL_SOCKET_CONFIG);
                                            xhr.status = 200;
                                            xhr.readyState = 4;
                                            if (xhr.onreadystatechange) {
                                                xhr.onreadystatechange();
                                            }
                                        }, 0);
                                        return;
                                    }
                                    return originalOpen.apply(this, [method, url, ...args]);
                                };
                                return xhr;
                            };
                        })();
                    </script>
                `;
                
                // Inject the script before the closing head tag
                html = html.replace('</head>', socketConfigScript + '</head>');
                
                // Create blob URL for the patched HTML
                const blob = new Blob([html], { type: 'text/html' });
                return URL.createObjectURL(blob);
            }
            
            async launchAMGame() {
                console.log('Launching Amatic game');
                this.loadGameInIframe(`/games/${this.gameName}/amarent/index.html`);
            }
            
            async launchPTGame() {
                console.log('Launching Pragmatic Play game');
                this.loadGameInIframe(`/games/${this.gameName}/platform/index.html`);
            }
            
            async launchGTGame() {
                console.log('Launching GameArt game');
                // GameArt games need special handling as they don't have HTML entry points
                this.showError('GameArt games require special integration - coming soon');
            }
            
            async launchKAGame() {
                console.log('Launching Kalamba game');
                this.showError('Kalamba games require special integration - coming soon');
            }
            
            async launchCTGame() {
                console.log('Launching Casino Technology game');
                // Find the specific app.html file
                this.loadGameInIframe(`/games/${this.gameName}/latest-stable/${this.gameName}/app.html`);
            }
            
            loadGameInIframe(url) {
                const iframe = document.getElementById('game-iframe');
                const loading = document.getElementById('loading');
                
                iframe.onload = () => {
                    loading.style.display = 'none';
                    iframe.style.display = 'block';
                    
                    // Try to inject game config into iframe if possible
                    try {
                        iframe.contentWindow.EXTERNAL_GAME_CONFIG = this.gameConfig;
                    } catch (e) {
                        console.warn('Could not inject config into iframe:', e);
                    }
                };
                
                iframe.onerror = () => {
                    this.showError('Failed to load game');
                };
                
                iframe.src = url;
            }
            
            showError(message) {
                const errorContainer = document.getElementById('error-container');
                errorContainer.innerHTML = `<div class="error-message">${message}</div>`;
                console.error(message);
            }
        }
        
        // Initialize game launcher when page loads
        document.addEventListener('DOMContentLoaded', () => {
            const launcher = new GameLauncher();
            launcher.init();
        });
        
        // Handle game communication
        window.addEventListener('message', (event) => {
            console.log('Received message from game:', event.data);
            
            // Handle game events
            if (event.data.command) {
                switch (event.data.command) {
                    case 'com.egt-bg.exit':
                        window.close();
                        break;
                    case 'game.balance.update':
                        // Handle balance updates
                        console.log('Balance update:', event.data.balance);
                        break;
                    default:
                        console.log('Unknown command:', event.data.command);
                }
            }
        });
    </script>
</body>
</html>