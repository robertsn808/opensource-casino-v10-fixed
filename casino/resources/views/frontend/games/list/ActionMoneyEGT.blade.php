

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<title>{{ $game->title }}</title>
	<meta name="viewport" content="width=device-width,height = device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
	<base href="/games/ActionMoneyEGT/html5/" target="_blank" >
	<style type="text/css" media="screen">
		html, body, body.sidebars { width:100%; height:100%; margin:0; padding:0;}
	</style>
	<script src="../js/jquery.js"></script>
	<script src="device.min.js"></script>
	<script>

    if( !sessionStorage.getItem('sessionId') ){
        sessionStorage.setItem('sessionId', parseInt(Math.random() * 1000000));
    }

	var serverConfig;
    var  serverString;
    // Prefer server-injected config to avoid sync XHR
    @if(isset($serverConfig) && is_array($serverConfig))
        window.serverConfig = window.serverConfig || {!! json_encode($serverConfig) !!};
    @endif
    
    function loadServerConfig(){
        return new Promise(function(resolve){
            if(window.serverConfig){ return resolve(window.serverConfig); }
            try{
                fetch('/socket_config.json', {cache: 'no-cache'})
                  .then(function(r){ return r.ok ? r.json() : {}; })
                  .then(function(cfg){ window.serverConfig = cfg || {}; resolve(window.serverConfig); })
                  .catch(function(){ resolve({}); });
            }catch(e){ resolve({}); }
        });
    }
        var sslHost=false;
        var gameName='ActionMoneyEGT';
        
        function startGame(){
            if(window.serverConfig && window.serverConfig.prefix_ws==='wss://'){
                sslHost=true;
            }

            var connectionParams = {
                sslHost: sslHost,
                tcpHost: (window.serverConfig && window.serverConfig.host_ws) || 'localhost',
                tcpPort: (window.serverConfig && window.serverConfig.port) || '22197',
                sessionKey: "{{ $sessionToken ?? 'demo_session_'.time() }}",
                lang: "en",
                gameIdentificationNumber: "851"
            };

            var additionalParams = {
                base: "/games/"+gameName+"/html5/"
            };

            if(device.desktop()){
                $.ajax({
                    type: "GET",
                    crossDomain: "false",
                    url: "../init/init_desktop_cf_test.js",
                    dataType: "script",
                    contentType: "text/plain",
                    success: function() {
                        if (typeof initDesktopHtml === 'function') {
                            initDesktopHtml(connectionParams);
                        }
                    }
                });
            } else {
                $.ajax({
                    type: "GET",
                    crossDomain: "false",
                    url: "../init/init_mobile_cf_test.js",
                    dataType: "script",
                    contentType: "text/plain",
                    success: function() {
                        if (window.EGT && typeof EGT.initMobile === 'function') {
                            EGT.initMobile(connectionParams);
                        }
                    }
                });
            }
        }

        $(function(){
            loadServerConfig().then(function(){
                startGame();
            });
        });
			var exitUrl='';
		if(document.location.href.split("api_exit=")[1]!=undefined){
		exitUrl=document.location.href.split("api_exit=")[1].split("&")[0];
		}
		
			addEventListener('message',function(ev){
	
if(ev.data=='CloseGame'){
var isFramed = false;
try {
	isFramed = window != window.top || document != top.document || self.location != top.location;
} catch (e) {
	isFramed = true;
}

if(isFramed ){
window.parent.postMessage('CloseGame',"*");	
}	
document.location.href=exitUrl;	
}
	
	});
	</script>
</head>
<body>
</body>
</html>
