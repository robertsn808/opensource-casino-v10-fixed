
var gameController;
var gameWS=new WebSocket(serverString);

 /*------WS ADDON--------*/
        
        
        
       
        setInterval(function(){
		//
		var j='A/u350,0';
		var tmpPar=':::{"gameData":"'+j+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"AllAmericanPokerAM"}';j=tmpPar;
		gameWS.send(j);	
		},5000);
		
		
		gameWS.onmessage=function(k){
		
		var tmpMess=k.data.split("#");
		console.log(gameController);
			if(tmpMess[0]=='UPDATE' && gameController.win<=0 && gameController.enj.mib!=undefined){
			
			if(gameController.qjh!=parseInt(tmpMess[1])){
				
			gameController.qjh=parseInt(tmpMess[1]);	
			gameController.enj.mib.bnh("creditd", "#bzf", [gameController.hga(tmpMess[1]), true]);	
			
			}
			
			
			
			
			
			}	
			
		}
		
		/*--------------*/

function dyf() {
    this.sit = "Info";
    this.yxf = "DEPOSIT";
    this.audio = "AUDIO";
    this.fxx = "TIP";
    this.gdt = "TURBO";
    this.baa = "STATISTIC";
    this.iax = "HISTORY";
    this.ibj = "SHORTCUTS";
    this.nkq = "HELP";
    this.khd = "PAYTABLE";
    this.language = "LANGUAGE";
    this.jwc = ">>";
    this.yee = "<<";
    this.khj = "Fullscreen is not supported!"
}

function wew() {
    this.xcx = "MINIMUM BET IS";
    this.tak = "MAX BET";
    this.zkb = "MIN.BET";
    this.agt = "MAX.BET";
    this.rxh = "BET";
    this.start = "START";
    this.nkq = "HELP";
    this.khd = "PAYTABLE";
    this.jue = "MENU";
    this.hcb = "MORE|GAMES";
    this.amh = "STOP";
    this.qjh = "CREDIT";
    this.rhi = "GAME OVER";
    this.quo = "WINNER!";
    this.nia = "GOOD LUCK!";
    this.win = "WIN";
    this.wow = "LAST WIN";
    this.ocv = "COLLECT";
    this.ipz = "COLLECT";
    this.joq = "GAMBLE";
    this.jwo = "AUTO|START";
    this.zkh = "HALF|GAMBLE";
    this.bok = "EXIT";
    this.ifo = "START GAME";
    this.adi = "CHOOSE BET";
    this.aig = "HALF";
    this.ret = "RETURN|TO GAME";
    this.rzw = "Total Win";
    this.xrp = "Warning";
    this.dzb = "TOTAL";
    this.gaj = "PLEASE WAIT ...";
    this.kzi = "More Games";
    this.gdt = "SPEED";
    this.rfx = "Malfunction voids all pays and plays.";
    this.tzv = "CONTINUE";
    this.syj = "AUTOSTART";
    this.icu = "PAYTABLE";
    this.ont = "GAMBLE";
    this.left = "LEFT";
    this.mtg = "RIGHT";
    this.ok = "OK";
    this.mpv = "CANCEL";
    this.rnv = "Gamble";
    this.bzs = "Half";
    this.cvo = "GAME RULES";
    this.hvf = "GAME RULES";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.kkl = "PRESS ANY KEY TO CONTINUE";
    this.ina = "NOT ENOUGH CREDIT!";
    this.hhn = "wins";
    this.uaw = "V A L U E";
    this.of = "OF";
    this.tkm = "TOUCH THE SCREEN TO CONTINUE";
    this.trr = "LOADING ...";
    this.hzv = "LOADING HISTORY ...";
    this.mda = "Communication Error";
    this.dqg = "You have reached one of the limits!";
    this.cbt = "You have reached the maximum amount of free games!";
    this.bos = "Game will be closed";
    this.qgr = "Game will be restarted";
    this.eqz = "WON";
    this.error = "ERROR";
    this.wfj = "FREEPLAY";
    this.koi = "AUTO";
    this.mgn = "GAME ID";
    this.jmy = "Playing Time";
    this.gar = "last";
    this.crm = "games";
    this.yxf = "DEPOSIT";
    this.audio = "AUDIO";
    this.zyo = "MUSIC";
    this.qel = "FULLSCREEN";
    this.zoa = "FULLSCREEN";
    this.language = "LANGUAGE";
    this.xfz = "Do not show again";
    this.jxk = "Sounds can not be loaded!";
    this.jfd = "Resources missing!";
    this.glh = "Play without sound?";
    this.trb = "SETTINGS";
    this.mzr = "Please turn your device!";
    this.sit = "INFO";
    this.jqu = "Please disable PRIVATE MODE in your browser to play the game.";
    this.hed = "This game is optimized for Google Chrome.";
    this.sft = "Please use the current version of";
    this.zrp = "Unfortunately this browser is not fully supported.";
    this.fkd = "This game can not be started in freeplay mode!";
    this.gvh = "Turn your device to the portrait mode to play like on a real slot machine!";
    this.zgp = "Adjust the game interface to your needs!";
    this.zuo = "SELECT THE CORRECT COLOR TO DOUBLE THE WIN";
    this.tjl = "SELECT THE CORRECT SUIT TO QUADRUPLE THE WIN";
    this.nxr = "GAMBLE FOR A CHANCE TO INCREASE THE WIN";
    this.baa = "Statistic";
    this.uvy = "Total Games";
    this.nmv = "Total Bets";
    this.jej = "Total Wins";
    this.raw = "Total Play Time";
    this.ebf = "I have read this message";
    this.clq = "EXIT|GAME";
    this.iax = "History";
    this.fvo = "No games played.";
    this.state = "STATE";
    this.vkw = "Main Game";
    this.mwx = "Auto Collected";
    this.plh = "Collected";
    this.tjw = "Bonusspins";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "First Deal";
    this.qmt = "Second Deal";
    this.qbf = "Third Deal";
    this.lzd = "AUTOSTART SETTINGS";
    this.osj = "Amount of games:";
    this.sna = "Stop autostart";
    this.efi = "Credit lower than:";
    this.qjz = "Credit higher than:";
    this.qyp = "Win higher than:";
    this.sep = "The autostart will be stopped at the beginning of the bonus.";
    this.fgz = "Share on Facebook";
    this.fru = "FOR MORE INFORMATION, SEE THE GAME RULES.";
    this.nct = "Reality Check";
    this.hhd = "You have requested a Reality Check.";
    this.xkn = "Press HISTORY to view your game history.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "No connection to the gaming server!";
    this.cqa = "Connection attempts";
    this.raa = "Login failed!";
    this.caa = "Active session already exists!";
    this.uzx = "THE THEORETICAL RETURN TO THE PLAYER FOR THIS GAME IS XY."
}
wew.prototype = new dyf;

function nkc() {
    this.xcx = "РњРРќРРњРђР›Р¬РќРђРЇ РЎРўРђР’РљРђ -";
    this.tak = "РњРђРљРЎ.|РЎРўРђР’РљРђ";
    this.zkb = "РњРРќ.РЎРўAР’РљРђ";
    this.agt = "РњРђРљРЎ.РЎРўAР’РљРђ";
    this.rxh = "РЎРўРђР’РљРђ";
    this.start = "РЎРўРђР Рў";
    this.nkq = "РџРћРњРћР©Р¬";
    this.khd = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.jue = "РњР•РќР®";
    this.hcb = "Р”Р РЈР“РР•|РР“Р Р«";
    this.amh = "РЎРўРћРџ";
    this.qjh = "РљР Р•Р”РРў";
    this.rhi = "РљРћРќР•Р¦ РР“Р Р«";
    this.quo = "РџРћР‘Р•Р”РРўР•Р›Р¬!";
    this.nia = "Р–Р•Р›РђР•Рњ РЈР”РђР§Р!";
    this.win = "Р’Р«РР“Р Р«РЁ";
    this.wow = "РџРћРЎР›Р•Р”. Р’Р«РР“Р Р«РЁ";
    this.hhn = "РІС‹Р№РіСЂС‹С€Рё";
    this.ocv = "Р—РђР‘Р РђРўР¬|Р’Р«РР“Р Р«РЁ";
    this.ipz = "Р—РђР‘Р РђРўР¬ Р’Р«РР“Р Р«РЁ";
    this.joq = "РР“Р Рђ|РќРђ|Р РРЎРљ";
    this.jwo = "РђР’РўРћ|РР“Р Рђ";
    this.zkh = "РЈРњР•РќР¬РЁРРўР¬|Р РРЎРљ";
    this.of = "Р’Р«РљР›.";
    this.bok = "Р’Р«РҐРћР”";
    this.ifo = "РќРђР–РњРРўР• РЎРўРђР Рў";
    this.adi = "Р’Р«Р‘Р•Р РРўР• РЎРўРђР’РљРЈ";
    this.aig = "Р’Р—РЇРўР¬|1/2";
    this.kkl = "РќРђР–РњР Р›Р®Р‘РЈР® РљР›РђР’РРЁРЈ, Р§РўРћР‘Р« РџР РћР”РћР›Р–РРўР¬";
    this.tkm = "РџР РРљРћРЎРќРРўР•РЎР¬ Рљ Р­РљР РђРќРЈ Р”Р›РЇ РџР РћР”РћР›Р–Р•РќРРЇ";
    this.ret = "РћР‘Р РђРўРќРћ|Р’ Р“Р›РђР’РќРЈР®|РР“Р РЈ";
    this.dgm = "РњРЅРѕР¶РёС‚РµР»СЊ РґР»СЏ Р‘РѕРЅСѓСЃР°";
    this.hjk = "Р‘РћРќРЈРЎ РЎРўРђР Рў Р’Р«РР“Р Р«РЁ:";
    this.rzw = "РћР‘Р©РР™ Р’Р«РР“Р Р«РЁ";
    this.trr = "Р—Р°РіСЂСѓР·РєР° ...";
    this.hzv = "Р—Р°РіСЂСѓР·РєР° РСЃС‚РѕСЂРёРё ...";
    this.error = "РћРЁРР‘РљРђ";
    this.ina = "РќР• Р”РћРЎРўРђРўРћР§РќРћ РљР Р•Р”РРўРђ.";
    this.dqg = "Р”РѕСЃС‚РёРіРЅСѓС‚ РѕРґРёРЅ РёР· Р»РёРјРёС‚РѕРІ!";
    this.xrp = "Р’РЅРёРјР°РЅРёРµ";
    this.mda = "РѕС€РёР±РєР° РѕР±РјРµРЅР° РґР°РЅРЅС‹С…";
    this.cbt = "Р’С‹ РїРѕР»СѓС‡РёР»Рё РјР°РєСЃРёРјР°Р»СЊРЅРѕРµ РєРѕР»РёС‡РµСЃС‚РІРѕ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ!";
    this.bos = "РРіСЂР° Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ";
    this.qgr = "РРіСЂР° РЅР°С‡РёРЅР°РµС‚СЃСЏ Р·Р°РЅРѕРІРѕ";
    this.cbf = "Р‘РѕРЅСѓСЃ!";
    this.tvr = "Р‘РћРќРЈРЎ";
    this.eqz = "Р’Р«РР“Р Р«РЁ";
    this.dzb = "Р’РЎР•Р“Рћ";
    this.gaj = "РџРѕР¶Р°Р»СѓР№СЃС‚Р° РїРѕРґРѕР¶РґРёС‚Рµ ...";
    this.error = "РћРЁРР‘РљРђ";
    this.wfj = "FREEPLAY";
    this.kzi = "Р’Р«Р‘РћР  РР“Р Р«";
    this.mgn = "GAME ID";
    this.jmy = "Playing Time";
    this.gar = "РїРѕСЃР»РµРґРЅСЏСЏ";
    this.crm = "РёРіСЂС‹";
    this.yxf = "Р”Р•РџРћР—РРў";
    this.audio = "Р—РІСѓРє";
    this.zyo = "РњРЈР—Р«РљРђ";
    this.gdt = "РЎРљРћР РћРЎРўР¬";
    this.qel = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.zoa = "РџРћР›РќРћР­РљР РђРќРќР«Р™";
    this.language = "РЇР—Р«Рљ";
    this.rfx = "РџР Р РќР•РРЎРџР РђР’РќРћРЎРўР Р’РЎР• РР“Р Р« Р Р’Р«РР“Р Р«РЁР РђРќРќРЈР›РР РЈР®РўРЎРЇ.";
    this.tzv = "РџР РћР”РћР›Р–РРўР¬";
    this.xfz = "Р‘РѕР»СЊС€Рµ РЅРµ РїРѕРєР°Р·С‹РІР°С‚СЊ";
    this.syj = "РђР’РўРћРР“Р Рђ";
    this.icu = "РўРђР‘Р›РР¦Рђ Р’Р«РџР›РђРў";
    this.ont = "РР“Р Рђ РќРђ Р РРЎРљ";
    this.jxk = "Р—РІСѓРє РЅРµ Р·Р°РіСЂСѓР¶Р°РµС‚СЃСЏ!";
    this.jfd = "Р РµСЃСѓСЂСЃС‹ РѕС‚СЃСѓС‚СЃС‚РІСѓСЋС‚!";
    this.glh = "РРіСЂР°С‚СЊ Р±РµР· Р·РІСѓРєР°?";
    this.trb = "РќРђРЎРўР РћР™РљРђ";
    this.mzr = "РџРѕРІРµСЂРЅРёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, РІР°С€Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕ!";
    this.left = "Р›Р•Р’Рћ";
    this.mtg = "РџР РђР’Рћ";
    this.koi = "РђР’РўРћ";
    this.uaw = "V A L U E";
    this.sit = "РРќР¤РћР РњРђР¦РРЇ";
    this.jqu = "Р’С‹РєР»СЋС‡РёС‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р§РђРЎРўРќР«Р™ Р Р•Р–РРњ РІ Р±СЂР°СѓР·РµСЂРµ,С‡С‚РѕР±С‹ РЅР°С‡Р°С‚СЊ РёРіСЂСѓ.";
    this.hed = "РќР°СЃС‚РѕСЏС‰Р°СЏ РёРіСЂР° РѕРїС‚РёРјРёР·РёСЂРѕРІР°РЅР° РґР»СЏ Google Chrome.";
    this.sft = "РСЃРїРѕР»СЊР·СѓР№С‚Рµ, РїРѕР¶Р°Р»СѓР№СЃС‚Р°, Р°РєС‚СѓР°Р»СЊРЅСѓСЋ РІРµСЂСЃРёСЋ";
    this.zrp = "Рљ СЃРѕР¶Р°Р»РµРЅРёСЋ РЅРµС‚ РїРѕР»РЅРѕР№ РїРѕРґРґРµСЂР¶РєРё Р±СЂР°СѓР·РµСЂР°.";
    this.fkd = "Р—Р°РїСѓСЃРє СЌС‚РѕР№ РёРіСЂС‹ РІ СЂРµР¶РёРјРµ СЃРІРѕР±РѕРґРЅС‹С… РёРіСЂ РЅРµРІРѕР·РјРѕР¶РµРЅ!";
    this.gvh = "РџРѕРІРµСЂРЅРёС‚Рµ РїСЂРёР±РѕСЂ РІ РїРѕР»РѕР¶РµРЅРёРµ РїРѕСЂС‚СЂРµС‚РЅРѕРіРѕ СЂРµР¶РёРјР° РґР»СЏ РёРіСЂС‹ РєР°Рє РЅР° РЅР°СЃС‚РѕСЏС‰РµРј РёРіСЂР°Р»СЊРЅРѕРј Р°РІС‚РѕРјР°С‚Рµ!";
    this.zgp = "РџСЂРёСЃРїРѕСЃРѕР±СЊ РёРЅС‚РµСЂС„РµР№СЃ Рє СЃРІРѕРёРј РїРѕС‚СЂРµР±РЅРѕСЃС‚СЏРј!";
    this.fru = "Р”РћРџРћР›РќРРўР•Р›Р¬РќРЈР® РРќР¤РћР РњРђР¦РР® Р’Р« РњРћР–Р•РўР• РџРћР›РЈР§РРўР¬ Р’ РџР РђР’РР›РђРҐ РР“Р Р«.";
    this.nct = "РџСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё";
    this.hhd = "Р’С‹ Р·Р°РїСЂРѕСЃРёР»Рё РїСЂРѕРІРµСЂРєСѓ СЂРµР°Р»СЊРЅРѕСЃС‚Рё.";
    this.xkn = "РќР°Р¶РјРёС‚Рµ РРЎРўРћР РРЇ, С‡С‚РѕР±С‹ РїРѕСЃРјРѕС‚СЂРµС‚СЊ СЃРІРѕСЋ РёСЃС‚РѕСЂРёСЋ РёРіСЂС‹.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "РќРµС‚ СЃРІСЏР·Рё СЃ РёРіСЂРѕРІС‹Рј СЃРµСЂРІРµСЂРѕРј!";
    this.cqa = "РџРѕРїС‹С‚РєРё СЃРІСЏР·Рё";
    this.raa = "РѕС€РёР±РєР° РїСЂРё РІС…РѕРґРµ РІ СЃРёСЃС‚РµРјСѓ!";
    this.caa = "РЎРµР°РЅСЃ РёРіСЂС‹ СѓР¶Рµ РЅР°С‡Р°Р»СЃСЏ!";
    this.cvo = "РџР РђР’РР›Рђ РР“Р Р«";
    this.hvf = "РџР РђР’РР›Рђ РР“Р Р«";
    this.zuo = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.tjl = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќРЈР® РњРђРЎРўР¬, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ Р’ 4 Р РђР—Рђ.";
    this.nxr = "РЎРўРђР’Р¬РўР• РќРђ Р РРЎРљ, Р§РўРћР‘Р« РЈР’Р•Р›РР§РРўР¬ Р’Р«РР“Р Р«РЁ.";
    this.baa = "РЎС‚Р°С‚СѓСЃ";
    this.uvy = "РєРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ";
    this.nmv = "РІСЃСЏ СЃС‚Р°РІРєР°";
    this.jej = "РѕР±С‰РёР№ РІС‹РёРіСЂС‹С€";
    this.raw = "РѕР±С‰РµРµ РІСЂРµРјСЏ РёРіСЂС‹";
    this.ebf = "РЇ СЃРѕРѕР±С‰РµРЅРёРµ РїСЂРѕС‡РёС‚Р°Р».";
    this.clq = "РР“Р РЈ|Р—РђРљРћРќР§РРўР¬";
    this.ok = "OK";
    this.iax = "РСЃС‚РѕСЂРёСЏ";
    this.fvo = "РЅРµС‚ РёСЃС‚РѕСЂРёРё.";
    this.state = "STATE";
    this.vkw = "Main Game";
    this.mwx = "Auto Collected";
    this.plh = "Collected";
    this.tjw = "Bonusspins";
    this.rnv = "Gamble";
    this.bzs = "Half";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "First Deal";
    this.qmt = "Second Deal";
    this.qbf = "Third Deal";
    this.mpv = "РР—РњР•РќРРўР¬";
    this.lzd = "РќРђРЎРўР РћР™РљРђ РђР’РўРћРЎРўРђР РўРђ";
    this.osj = "РљРѕР»РёС‡РµСЃС‚РІРѕ РёРіСЂ:";
    this.sna = "РђРІС‚РѕСЃС‚Р°СЂС‚ РѕСЃС‚Р°РЅРѕРІРёС‚СЊ";
    this.efi = "РљСЂРµРґРёС‚ РЅРёР¶Рµ, С‡РµРј:";
    this.qjz = "РљСЂРµРґРёС‚ РІС‹С€Рµ, С‡РµРј:";
    this.qyp = "Р’С‹РёРіСЂС‹С€ РІС‹С€Рµ, С‡РµРј:";
    this.sep = "РђРІС‚РѕСЃС‚Р°СЂС‚ РїСЂРµСЂС‹РІР°РµС‚СЃСЏ, РµСЃР»Рё РЅР°С‡РёРЅР°РµС‚СЃСЏ Р±РѕРЅСѓСЃРЅР°СЏ РёРіСЂР°.";
    this.fgz = "РџРѕРґРµР»РёСЃСЊ РІ С„РµР№СЃР±СѓРє";
    this.uzx = "РўР•РћР Р•РўРР§Р•РЎРљРђРЇ Р’Р«РџР›РђРўРђ РР“Р РћРљРЈ РЎРћРЎРўРђР’Р›РЇР•Рў Р’ Р­РўРћР™ РР“Р Р• XY."
}
nkc.prototype = new dyf;

function oka() {
    this.xcx = "APUESTA MГЌNIMA ES";
    this.tak = "APUESTA|MГЃXIMA";
    this.zkb = "APUESTA MГЌN.";
    this.agt = "APUESTA MГЃX.";
    this.rxh = "APUESTA";
    this.start = "JUGAR";
    this.nkq = "AYUDA";
    this.khd = "PLAN DE|GANANCIAS";
    this.jue = "MENU";
    this.hcb = "MAS|JUEGOS";
    this.amh = "PARADA";
    this.qjh = "CREDITOS";
    this.rhi = "FIN DEL JUEGO";
    this.quo = "ВЎGANADOR!";
    this.nia = "ВЎMUCHA SUERTE!";
    this.win = "PREMIO";
    this.wow = "ULTIMOS PREMIO";
    this.hhn = "gana";
    this.ocv = "COBRAR";
    this.ipz = "COBRAR";
    this.joq = "RIESGO";
    this.jwo = "AUTO|JUGAR";
    this.zkh = "MEDIA|APUESTA";
    this.of = "DE";
    this.bok = "SALIR";
    this.ifo = "ВЎPULSE JUGAR!";
    this.adi = "ELIJA SU APUESTA";
    this.aig = "MITAD";
    this.kkl = "PULSE UNA TECLA PARA CONTINUAR";
    this.tkm = "TOCAR LA PANTALLA PARA CONTINUAR";
    this.ret = "VOLVER|AL JUEGO";
    this.rzw = "Premio total";
    this.trr = "CARGANDO ...";
    this.hzv = "CARGANDO HISTORIAL ...";
    this.ina = "No hay bastante CREDITO";
    this.dqg = "ВЎHa alcanzado uno de los limites!";
    this.xrp = "Advertencia";
    this.mda = "Error de comunicaciГіn";
    this.cbt = "ВЎHa alcanzado la mГЎxima cantidad de juegos gratis!";
    this.bos = "El juego se cerrarГЎ";
    this.qgr = "El juego se reiniciarГЎ";
    this.cbf = "ВЎBONUS!";
    this.tvr = "BONUS";
    this.eqz = "GANADO";
    this.dzb = "TOTAL";
    this.bas = "TURBO SI";
    this.gtq = "TURBO NO";
    this.gaj = "POR FAVOR ESPERE ...";
    this.error = "ERROR";
    this.wfj = "FREEPLAY";
    this.kzi = "MAS JUEGOS";
    this.mgn = "ID DE JUEGO";
    this.jmy = "Playing Time";
    this.gar = "ultimos";
    this.crm = "juegos";
    this.yxf = "DEPГ“SITO";
    this.audio = "AUDIO";
    this.zyo = "MГљSICA";
    this.gdt = "VELOCIDAD";
    this.qel = "PANTALLA COMPLETA";
    this.zoa = "PANTALLA|COMPLETA";
    this.language = "IDIOMA";
    this.rfx = "UN MAL FUNCIONAMIENTO ANULA TODA JUGADA Y TODO PAGO.";
    this.tzv = "ADELANTE";
    this.xfz = "No mostrar de nuevo";
    this.syj = "AUTOJUGAR";
    this.icu = "PLAN DE GANANCIAS";
    this.ont = "RIESGO";
    this.jxk = "No se pueden cargar los sonidos.";
    this.jfd = "Faltan recursos.";
    this.glh = "ВїJugar sin sonido?";
    this.trb = "AJUSTES";
    this.uaw = "V A L U E";
    this.mzr = "ВЎEncienda su dispositivo!";
    this.left = "IZQUIERDA";
    this.mtg = "DERECHA";
    this.koi = "AUTOMГЃTICO";
    this.sit = "INFORMACIГ“N";
    this.jqu = "Desactive el MODO PRIVADO en su explorador para jugar el juego.";
    this.hed = "Este juego estГЎ optimizado para Google Chrome.";
    this.sft = "Use la versiГіn actual de";
    this.zrp = "Desafortunadamente, este explorador no es compatible.";
    this.fkd = "ВЎEste juego no puede iniciarse en modo de juego libre!";
    this.gvh = "ВЎGire el dispositivo a posiciГіn vertical como en la mГЎquina tragamonedas real!";
    this.zgp = "ВЎAjuste la interfaz del juego a sus necesidades!";
    this.fru = "PARA MГЃS INFORMACIГ“N MIRE LAS REGLAS DEL JUEGO.";
    this.nct = "Reality Check";
    this.hhd = "Has solicitado un Reality Check.";
    this.xkn = "Pulsa HISTORIAL para visualizar tu historial de juego.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "ВЎNo hay conexiГіn con el servidor de juegos!";
    this.cqa = "Intentos de conexiГіn";
    this.raa = "ВЎNo pudo iniciarse la sesiГіn!";
    this.caa = "ВЎYa existe una sesiГіn activa!";
    this.cvo = "REGLAS DEL JUEGO";
    this.hvf = "REGLAS|DEL JUEGO";
    this.zuo = "SELECCIONAR EL COLOR CORRECTO PARA DOBLAR EL PREMIO";
    this.tjl = "SELECCIONAR EL PALO CORRECTO PARA CUADRUPLICAR EL PREMIO";
    this.nxr = "JUGAR UNA POSIBILIDAD DE MULTIPLICAR LA GANANCIA";
    this.baa = "ESTADO";
    this.uvy = "NГєmero de juegos";
    this.nmv = "Apuesta total";
    this.jej = "Ganancia total";
    this.raw = "Tiempo total de juego";
    this.ebf = "He leГ­do el mensaje.";
    this.clq = "TERMINAR|JUEGO";
    this.ok = "OK";
    this.iax = "HISTORIAL";
    this.fvo = "AГєn no hay juegos.";
    this.state = "Estado";
    this.vkw = "Juego principal";
    this.mwx = "Ganancia automГЎtica";
    this.plh = "Ganancia";
    this.tjw = "BONUSSPINS";
    this.rnv = "Apuesta";
    this.bzs = "Mitad";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "Primera mano";
    this.qmt = "Segunda mano";
    this.qbf = "Tercera mano";
    this.mpv = "CANCELAR";
    this.lzd = "CONFIGURACIONES DE JUEGO AUTOMГЃTICO";
    this.osj = "Cantidad de juegos:";
    this.sna = "Detener juego automГЎtico";
    this.efi = "CrГ©dito menor que:";
    this.qjz = "CrГ©dito mayor que:";
    this.qyp = "Ganancia mayor que:";
    this.sep = "El juego automГЎtico se detendrГЎ al principio del bonus.";
    this.fgz = "Compartir en Facebook";
    this.uzx = "EL PORCENTAJE TEГ“RICO DE DEVOLUCIГ“N AL JUGADOR PARA ESTE JUEGO ES XY."
}
oka.prototype = new dyf;

function lju() {
    this.xcx = "MINIMALER EINSATZ IST";
    this.tak = "MAX. EINSATZ";
    this.zkb = "MIN. EINSATZ";
    this.agt = "MAX. EINSATZ";
    this.rxh = "EINSATZ";
    this.start = "START";
    this.nkq = "HILFE";
    this.khd = "GEWINNPLAN";
    this.jue = "MENГњ";
    this.hcb = "MEHR|SPIELE";
    this.qjh = "GUTHABEN";
    this.rhi = "SPIEL ENDE";
    this.quo = "GEWINNER!";
    this.nia = "VIEL GLГњCK!";
    this.win = "GEWINN";
    this.wow = "LETZTER GEWINN";
    this.hhn = "gewinnt";
    this.ocv = "NEHMEN";
    this.ipz = "NEHMEN";
    this.joq = "RISIKO";
    this.jwo = "AUTO|START";
    this.zkh = "HALF|GAMBLE";
    this.amh = "STOP";
    this.of = "VON";
    this.bok = "EXIT";
    this.ifo = "START DRГњCKEN";
    this.adi = "EINSATZ WГ„HLEN";
    this.aig = "TEILEN";
    this.kkl = "DRГњCKE EINE TASTE UM FORTZUFAHREN";
    this.tkm = "BERГњHRE DEN BILDSCHIRM UM FORTZUFAHREN";
    this.ret = "ZURГњCK|ZUM SPIEL";
    this.rzw = "Gesamt Gewinn";
    this.trr = "LГ„DT ...";
    this.hzv = "LГ„DT HISTORIE ...";
    this.ina = "NICHT GENUG GUTHABEN!";
    this.xrp = "Achtung";
    this.mda = "Kommunikationsfehler";
    this.dqg = "Sie haben eines der Limits erreicht!";
    this.cbt = "Sie haben die maximale Anzahl an Freispielen erreicht!";
    this.bos = "Das Spiel wird beendet";
    this.qgr = "Das Spiel wird neu gestartet";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.eqz = "GEWONNEN";
    this.dzb = "TOTAL";
    this.gaj = "BITTE WARTEN ...";
    this.error = "FEHLER";
    this.wfj = "FREEPLAY";
    this.kzi = "MEHR|SPIELE";
    this.mgn = "SPIEL ID";
    this.jmy = "Spielzeit";
    this.gar = "Letzten";
    this.crm = "Spiele";
    this.yxf = "GUTHABEN";
    this.audio = "AUDIO";
    this.zyo = "MUSIK";
    this.gdt = "SPEED";
    this.qel = "VOLLBILD";
    this.zoa = "VOLLBILD";
    this.language = "SPRACHE";
    this.rfx = "Bei GerГ¤testГ¶rung keine Haftung.";
    this.tzv = "WEITER";
    this.xfz = "Nicht noch einmal anzeigen";
    this.syj = "AUTOSTART";
    this.ont = "RISIKO";
    this.icu = "GEWINNPLAN";
    this.jxk = "Sounds kГ¶nnen nicht geladen werden!";
    this.jfd = "Ressourcen fehlen!";
    this.glh = "Ohne Ton spielen?";
    this.trb = "EINSTELL.";
    this.mzr = "Bitte drehen sie ihr GerГ¤t!";
    this.left = "LINKS";
    this.mtg = "RECHTS";
    this.koi = "AUTOM.";
    this.uaw = "V A L U E";
    this.sit = "INFO";
    this.jqu = "Bitte deaktivieren sie den PRIVATEN MODUS im Browser um das Spiel zu starten";
    this.hed = "Dieses Spiel ist optimiert fГјr Google Chrome.";
    this.sft = "Bitte benutzen sie die aktuelle Version von";
    this.zrp = "Leider wird dieser Browser nicht unterstГјtzt.";
    this.fkd = "Dieses Spiel kann nicht im Freispiel-Modus gestartet werden!";
    this.gvh = "Drehen sie ihr GerГ¤t in den Portraitmodus, um wie auf einem echten Automaten zu spielen!";
    this.zgp = "Passe die SpieloberflГ¤che deinen BedГјrfnissen an!";
    this.fru = "ZUSГ„TZLICHE INFORMATION FINDEN SIE IN DEN SPIELREGELN.";
    this.nct = "Reality Check";
    this.hhd = "Du hast einen Reality Check angefordert.";
    this.xkn = "DrГјcke HISTORIE um deine Spielhistorie anzuzeigen.";
    this.mvb = "Spielpause";
    this.vpo = "Spiellimits";
    this.tsg = "Selbsttest";
    this.psy = "Keine Verbindung zum Gameserver!";
    this.cqa = "Verbindungsversuche";
    this.raa = "Anmeldung fehlgeschlagen!";
    this.caa = "Es ist bereits eine Session aktiv!";
    this.cvo = "SPIELREGELN";
    this.hvf = "SPIELREGELN";
    this.zuo = "WГ„HLE DIE RICHTIGE FARBE UM DEN GEWINN ZU VERDOPPELN";
    this.tjl = "WГ„HLE DIE RICHTIGE KARTENFARBE UM DEN GEWINN ZU VERVIERFACHEN";
    this.nxr = "DRГњCKE RISIKO FГњR EINE CHANCE DEN GEWINN ZU VERVIELFACHEN";
    this.baa = "Statistik";
    this.uvy = "Anzahl der Spiele";
    this.nmv = "Gesamteinsatz";
    this.jej = "Gesamtgewinn";
    this.raw = "Gesamtspielzeit";
    this.ebf = "Ich habe die Nachricht gelesen";
    this.clq = "SPIEL|BEENDEN";
    this.ok = "OK";
    this.iax = "Historie";
    this.fvo = "Es existieren noch keine Spiele.";
    this.state = "STATUS";
    this.vkw = "Hauptspiel";
    this.mwx = "Auto. Nehmen";
    this.plh = "Genommen";
    this.tjw = "Bonusspins";
    this.rnv = "Risiko";
    this.bzs = "Halb";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "Erster Deal";
    this.qmt = "Zweiter Deal";
    this.qbf = "Dritter Deal";
    this.mpv = "ABBRUCH";
    this.lzd = "AUTOSTART EINSTELLUNGEN";
    this.osj = "Anzahl der Spiele: ";
    this.sna = "Autostart anhalten";
    this.efi = "Guthaben niedriger als:";
    this.qjz = "Guthaben hГ¶her als:";
    this.qyp = "Gewinn hГ¶her als:";
    this.sep = "Der Autostart wird am Bonusbeginn gestoppt.";
    this.fgz = "Auf Facebook teilen";
    this.uzx = "DIE THEORETISCHE AUSZAHLUNG AN DEN SPIELER FГњR DIESES SPIEL BETRГ„GT XY."
}
lju.prototype = new dyf;

function gks() {
    this.xcx = "MINIMUM BANKO";
    this.tak = "MAKS. BANKO";
    this.zkb = "MIN. BANKO";
    this.agt = "MAKS. BANKO";
    this.rxh = "BANKO";
    this.start = "BAЕћLAT";
    this.nkq = "YARDIM";
    this.khd = "KazanГ§ planД±";
    this.jue = "MENГњ";
    this.hcb = "DAHA Г‡OK|OYUN";
    this.amh = "DUR";
    this.qjh = "KREDI";
    this.rhi = "OYUN BД°TTД°";
    this.quo = "KAZANDINIZ!";
    this.nia = "BOL ЕћANSLAR!";
    this.win = "KAZANГ‡";
    this.wow = "SON KAZANГ‡";
    this.hhn = "kazanД±r";
    this.ocv = "ALMAK";
    this.ipz = "ALMAK";
    this.joq = "RIZIKO";
    this.jwo = "OTOMATД°K|BAЕћLATMA";
    this.zkh = "YARI|RIZIKO";
    this.of = "VEREN";
    this.bok = "Г‡IKIЕћ";
    this.ifo = "BAЕћLAT TUЕћUNA BASINIZ";
    this.adi = "BANKO SEГ‡Д°NД°Z";
    this.aig = "ALMAK|1/2";
    this.kkl = "DEVAM ETMEK IГ‡IN KLAVYEDE HER HANGI BIR YERE BASINIZ";
    this.tkm = "DEVAM ETMEK Д°Г‡Д°N EKRANA DOKUN";
    this.ret = "OYUNA|GERI";
    this.rzw = "Toplam kazanГ§";
    this.trr = "YГњKLГњYOR ...";
    this.hzv = "GEГ‡MIЕћI YГњKLГњYOR ...";
    this.ina = "YETERSД°Z KREDД°.";
    this.dqg = "Limitlerin birine ulaЕџtД±nД±z!";
    this.xrp = "Dikkat";
    this.mda = "Д°letiЕџim hatasД±";
    this.cbt = "Maksimum bedava oyun sayД±sД±na ulaЕџmД±Еџ bulunuyorsunuz!";
    this.bos = "Oyun sonlandД±rД±lД±yor";
    this.qgr = "Oyun yeniden baЕџlatД±lД±yor";
    this.cbf = "Bedava oyun primi!";
    this.tvr = "PRД°M";
    this.eqz = "KAZANDINIZ";
    this.dzb = "TOPLAM";
    this.gaj = "LГњTFEN BEKLEYIN ...";
    this.error = "HATA";
    this.wfj = "FREEPLAY";
    this.kzi = "DAHA Г‡OK OYUN";
    this.mgn = "OYUN ID";
    this.jmy = "OYUN SГњRESД°";
    this.gar = "Son";
    this.crm = "oyun";
    this.yxf = "BAKIYE";
    this.audio = "AUDIO";
    this.zyo = "MГњZIK";
    this.gdt = "HД±Z";
    this.qel = "TAM EKRAN";
    this.zoa = "TAM EKRAN";
    this.language = "LISAN";
    this.rfx = "CIHAZ ARIZALANDIДћINDA MESULIYET KABUL EDILMEZ.";
    this.tzv = "DEVAM";
    this.xfz = "Tekrar gГ¶sterme";
    this.syj = "OTOMATД°K|BAЕћLATMA";
    this.ont = "RIZIKO";
    this.icu = "KazanГ§ planД±";
    this.jxk = "Sesler yГјklenemiyorlar!";
    this.jfd = "Kaynaklar eksik!";
    this.glh = "Sessiz oynayacak mД±sД±nД±z?";
    this.trb = "AYARLAR";
    this.mzr = "LГјtfen cihazД±nД±nД± dГ¶ndГјrГјn!";
    this.left = "SOL";
    this.mtg = "SAДћ";
    this.koi = "OTOMATIK";
    this.uaw = "V A L U E";
    this.sit = "BILGI";
    this.jqu = "Oyunu baЕџlatmak iГ§in lГјtfen aДџ tarayД±cД±nД±zda Г–ZEL MOD'u kapatД±nД±z.";
    this.hed = "Bu oyun Google Chrome iГ§in optimize edilmiЕџtir.";
    this.sft = "'nin gГјncel versiyonunu kullanД±n";
    this.zrp = "Maalesef bu aДџ tarayД±cД±sД± tam olarak desteklenmiyor.";
    this.fkd = "Bu oyunun serbest modunda baЕџlatД±lmasД± mГјmkГјn deДџildir!";
    this.gvh = "CihazД±nД±zД± portre moduna Г§evirerek gerГ§ek bir otomatikte oynar gibi oynayД±n!";
    this.zgp = "Oyun yГјzeyini kendi ihtiyaГ§larД±na gГ¶re dГјzenle!";
    this.fru = "DAHA FAZLA BД°LGД°YД° OYUN KURALLARINDA BULABД°LД°RSД°NД°Z.";
    this.nct = "Reality Check";
    this.hhd = "Reality Check talebinde bulundun.";
    this.xkn = "Oyun geГ§miЕџini gГ¶rmek iГ§in GEГ‡MД°Ећ tuЕџuna bas.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "Oyun server'ine baДџlantД± yok!";
    this.cqa = "BaДџlantД± denemeleri";
    this.raa = "GiriЕџ hatasД±!";
    this.caa = "Aktif bir oturumunuz bulunuyor!";
    this.cvo = "OYUNUN KURALLARД±";
    this.hvf = "OYUNUN|KURALLARД±";
    this.zuo = "DOДћRU RENGД° SEГ‡EREK KAZANCININ Д°KД°YE KATLARSIN";
    this.tjl = "DOДћRU KART RENGД°NД° SEГ‡EREK KAZANCINI DГ–RDE KATLARSIN.";
    this.nxr = "KAZANCI KATLAMA ЕћANSI Д°Г‡Д°N GAMBLE (RД°SK)";
    this.baa = "Д°statistik";
    this.uvy = "Toplam oyunlar";
    this.nmv = "Toplam bankolar";
    this.jej = "Toplam kazanГ§lar";
    this.raw = "Toplam oyun sГјresi";
    this.ebf = "Bu mesajД± okudum.";
    this.clq = "OYUNU|KAPAT";
    this.ok = "OK";
    this.iax = "GEГ‡MД°Ећ";
    this.fvo = "HenГјz hiГ§ bir oyun yok.";
    this.state = "STATГњ";
    this.vkw = "Ana oyun";
    this.mwx = "Otomatik olarak kazandД±nД±z";
    this.plh = "ToplandД±";
    this.tjw = "Prim oyunlar";
    this.rnv = "Riziko";
    this.bzs = "YarД±m";
    this.wkp = "Respin";
    this.uda = "Prim";
    this.urx = "Д°lk anlaЕџma";
    this.qmt = "Д°kinci anlaЕџma";
    this.qbf = "ГњГ§ГјncГј anlaЕџma";
    this.mpv = "Д°PTAL";
    this.lzd = "OTOMATIK BAЕћLAT AYARLARД±";
    this.osj = "Oyun sayД±sД±:";
    this.sna = "Otomatik baЕџlatmayД± durdur";
    this.efi = "Kredi bundan dГјЕџГјktГјr:";
    this.qjz = "Kredi bundan yГјksektir:";
    this.qyp = "KazanГ§ bundan yГјksektir:";
    this.sep = "Otomatik baЕџlatma prim baЕџlangД±cД±nda durduruluyor.";
    this.fgz = "Facebook'ta paylaЕџ";
    this.uzx = "OYUNCUYA TEORIK OLARAK Г–DENECEK MEBLAДћ % XY ORANД±NDADД±R."
}
gks.prototype = new dyf;

function rhl() {
    this.xcx = "MINIMГЃLNГЌ SГЃZKA JE";
    this.tak = "MAX. SГЃZKA";
    this.zkb = "MIN. SГЃZKA";
    this.agt = "MAX. SГЃZKA";
    this.rxh = "SГЃZKA";
    this.start = "START";
    this.nkq = "POMOC";
    this.khd = "VГќHERNГЌ PLГЃN";
    this.jue = "MENU";
    this.hcb = "DALЕ ГЌ|HRY";
    this.amh = "STOP";
    this.qjh = "KREDIT";
    this.rhi = "KONEC HRY";
    this.quo = "VГЌTEZ!";
    this.nia = "HODNE Е TESTГЌ!";
    this.win = "VГќHRA";
    this.wow = "POSL. VГќHRA";
    this.hhn = "vyhrГЎvГЎ";
    this.ocv = "VEZMI";
    this.ipz = "VEZMI";
    this.joq = "HRA";
    this.jwo = "AUTO|START";
    this.zkh = "POLOVICNГЌ|HRA";
    this.of = "Z";
    this.bok = "VГќSTUP";
    this.ifo = "START HRY";
    this.adi = "VYBRAT SГЃZKU";
    this.aig = "POLOVINA";
    this.kkl = "POKRACUJ DOTEKEM OBRAZOVKY";
    this.tkm = "PRO POKRAДЊOVГЃNГЌ SE DOTKNДљTE OBRAZOVKY";
    this.ret = "ZPET|DO HRY";
    this.rzw = "CelkovГЎ vГЅhra";
    this.trr = "NAHRГЃVГЃM ...";
    this.hzv = "NAHRГЃVГЃM HISTORII ...";
    this.ina = "NedostatecnГЅ kredit.";
    this.dqg = "DosГЎhli jste jednoho z limitЕЇ!";
    this.xrp = "VarovГЎnГ­";
    this.mda = "Chyba komunikace";
    this.cbt = "DosГЎhli jste maximГЎlnГ­ho poДЌtu her zdarma!";
    this.bos = "Hra se zavЕ™e";
    this.qgr = "Hra se restartuje";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.eqz = "VYHRГЃL";
    this.dzb = "CELKOVГЃ";
    this.gaj = "ДЊEKEJTE PROSГЌM ...";
    this.error = "ERROR";
    this.wfj = "FREEPLAY";
    this.kzi = "DALЕ ГЌ HRY";
    this.mgn = "ID HRY";
    this.jmy = "HRACГЌ DOBA";
    this.gar = "PoslednГ­";
    this.crm = "hry";
    this.yxf = "MГЌT K DOBRU";
    this.audio = "AUDIO";
    this.zyo = "MUZIKA";
    this.gdt = "RYCHLOST";
    this.qel = "FULLSCREEN";
    this.zoa = "FULLSCREEN";
    this.language = "ЕEДЊ";
    this.rfx = "PЕ™i poruЕЎe jsou vЕЎechny hry a vГЅhry neplatnГ©.";
    this.tzv = "POKRAДЊUJ";
    this.xfz = "Nezobrazujte znovu";
    this.syj = "AUTOSTART";
    this.ont = "HRA";
    this.icu = "VГќHERNГЌ PLГЃN";
    this.jxk = "Zvuk nelze nahrГЎt!";
    this.jfd = "ChybГ­ zdroje!";
    this.glh = "HrГЎt bez zvuku?";
    this.trb = "NASTAVENГЌ";
    this.uaw = "V A L U E";
    this.mzr = "OtoДЌte svГ© zaЕ™Г­zenГ­, prosГ­m!";
    this.left = "VLEVO";
    this.mtg = "VPRAVO";
    this.koi = "AUTO";
    this.sit = "INFORMACE";
    this.jqu = "Abyste mohli hrГЎt hru, vypnД›te SOUKROMГќ REЕЅIM ve svГ©m prohlГ­ЕѕeДЌi, prosГ­m.";
    this.hed = "Tato hra je optimalizovanГЎ pro Google Chrome.";
    this.sft = "PouЕѕijte aktuГЎlnГ­ verzi";
    this.zrp = "Tento prohlГ­ЕѕeДЌ nenГ­ bohuЕѕel plnД› podporovГЎn.";
    this.fkd = "Tuto hru nelze spustit v reЕѕimu hry zdarma!";
    this.gvh = "OtoДЌte zaЕ™Г­zenГ­ tak, aby zobrazilo hru jako na skuteДЌnГ©m automatu!";
    this.zgp = "Nastavte rozhranГ­ hry svГЅm potЕ™ebГЎm!";
    this.fru = "VГЌCE INFORMACГЌ NALEZNETE V PRAVIDLECH HRY.";
    this.nct = "Reality Check";
    this.hhd = "PoЕѕГЎdali jste o kontrolu reality.";
    this.xkn = "Pro zobrazenГ­ vaЕЎГ­ hernГ­ historie stisknД›te HISTORIE.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "ЕЅГЎdnГ© pЕ™ipojenГ­ k hernГ­mu serveru!";
    this.cqa = "Pokusy o pЕ™ipojenГ­";
    this.raa = "PЕ™ihlГЎЕЎenГ­ se nezdaЕ™ilo!";
    this.caa = "AktivnГ­ relace jiЕѕ existuje!";
    this.cvo = "PRAVIDLA HRY";
    this.hvf = "PRAVIDLA HRY";
    this.zuo = "VYBRAT SPRГЃVNOU BARVU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.tjl = "VYBRAT SPRГЃVNOU BARVU KARTY KE ZДЊTYЕNГЃSOBENГЌ VГќHRY";
    this.nxr = "VSADIT NA Е ANCI ZVГќЕ IT VГќHRU";
    this.baa = "Statistika";
    this.uvy = "Celkem hry";
    this.nmv = "Celkem sГЎzky";
    this.jej = "Celkem vГЅhry";
    this.raw = "CelkovГЎ hracГ­ doba";
    this.ebf = "ZprГЎvu jsem ДЌetl/a.";
    this.clq = "UKONДЊIT|HRU";
    this.ok = "OK";
    this.iax = "HISTORIE";
    this.fvo = "ЕЅГЎdnГ© odehranГ© hry.";
    this.state = "STATUS";
    this.vkw = "HlavnГ­ hra";
    this.mwx = "Automaticky vybrГЎno";
    this.plh = "VybrГЎno";
    this.tjw = "Bonusspins";
    this.rnv = "Hra";
    this.bzs = "Polovina";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "PrvnГ­ vyloЕѕenГ­";
    this.qmt = "DruhГ© vyloЕѕenГ­";
    this.qbf = "TЕ™etГ­ vyloЕѕenГ­";
    this.mpv = "ZRUЕ IT";
    this.lzd = "NASTAVENГЌ AUTOMATICKГ‰HO STARTU";
    this.osj = "MnoЕѕstvГ­ her:";
    this.sna = "Zastavit automatickГЅ start";
    this.efi = "Kredit niЕѕЕЎГ­ neЕѕ:";
    this.qjz = "Kredit vyЕЎЕЎГ­ neЕѕ:";
    this.qyp = "VГЅhra vyЕЎЕЎГ­ neЕѕ:";
    this.sep = "AutomatickГЅ start se zastavГ­ na zaДЌГЎtku bonusu.";
    this.fgz = "SdГ­let na Facebooku";
    this.uzx = "TEORETICKГЃ NГЃVRATNOST HRГЃДЊI V TГ‰TO HЕE JE XY."
}
rhl.prototype = new dyf;

function caw() {
    this.xcx = "MIINIMUMPANUS ON";
    this.tak = "MAX PANUS";
    this.zkb = "MIN PANUS";
    this.agt = "MAX PANUS";
    this.rxh = "PANUS";
    this.start = "START";
    this.nkq = "ABI";
    this.khd = "VГ•IDU TABEL";
    this.jue = "MENГњГњ";
    this.hcb = "VALI|MГ„NG";
    this.amh = "STOPP";
    this.qjh = "KREDIIT";
    this.rhi = "MГ„NG ON LГ•PPENUD!";
    this.quo = "OLED VГ•ITNUD!";
    this.nia = "SOOVIME EDU!";
    this.win = "VГ•IT";
    this.wow = "EELMINE VГ•IT";
    this.ocv = "VГ•TA|VГ•IT";
    this.ipz = "VГ•TA VГ•IT";
    this.joq = "DUUBEL|DAMINE";
    this.jwo = "AUTO|START";
    this.zkh = "POOLITA|DUUBELDA";
    this.of = "OF";
    this.bok = "VГ„LJA";
    this.ifo = "ALUSTA MГ„NGU";
    this.adi = "VALI PANUS";
    this.aig = "POOLIK";
    this.kkl = "JГ„TKAMISEKS VAJUTAGE ГњKSKГ•IK MILLIST NUPPU";
    this.ret = "TAGASI|MГ„NGU";
    this.rzw = "KoguvГµit";
    this.ina = "POLE PIISAVALT KREDIITI.";
    this.cbf = "Boonus!";
    this.tvr = "BOONUS";
    this.gaj = "PALUN OODAKE ...";
    this.kzi = "Vali MГ¤ng";
    this.audio = "HELI";
    this.zyo = "MUUSIKA";
    this.gdt = "KIIRUS";
    this.qel = "TГ„ISEKRAAN";
    this.zoa = "TГ„ISEKRAAN";
    this.rfx = "RIKKE KORRAL KГ•IK MГ„NGUD JA VГ•IDUD TГњHISTATAKSE.";
    this.gnm = "MГ„NGU LГ•PP";
    this.language = "KEEL";
    this.cvo = "MГ„NGUREEGLID";
    this.hvf = "MГ„NGUREEGLID";
    this.trr = "LAADIMINE ...";
    this.hzv = "AJALOO LAADIMINE ...";
    this.dqg = "Oled saavutanud Гјhe limiitidest!";
    this.xrp = "Hoiatus";
    this.mda = "Гњhenduse viga";
    this.cbt = "Te olete jГµudnud tasuta mГ¤ngude maksimaalse arvuni!";
    this.bos = "MГ¤ng suletakse";
    this.qgr = "MГ¤ng taaskГ¤ivitatakse";
    this.tkm = "JГ„TKAMISEKS PUUDUTA EKRAANI";
    this.trb = "SГ„TTED";
    this.uaw = "V A L U E";
    this.mzr = "PГ¶Г¶rake oma seadet!";
    this.sit = "INFO";
    this.jqu = "MГ¤ngu mГ¤ngimiseks keelake oma brauseris PRIVAATREЕЅIIM.";
    this.hed = "See mГ¤ng on optimeeritud Google Chrome jaoks.";
    this.sft = "Palun kasutage praeguse versiooni";
    this.zrp = "Kahjuks ei toetata seda brauserit tГ¤ielikult.";
    this.fkd = "Seda mГ¤ngu ei saa tasuta mГ¤ngimise reЕѕiimis kГ¤ivitada!";
    this.left = "VASAK";
    this.mtg = "PAREM";
    this.koi = "AUTOMAATNE";
    this.eqz = "VГ•ITIS";
    this.hhn = "vГµidetud";
    this.dzb = "KOKKU";
    this.error = "VIGA";
    this.wfj = "TASUTA MГ„NG";
    this.mgn = "MГ„NGU ID";
    this.jmy = "MГ„NGUAEG";
    this.gar = "Viimased";
    this.crm = "mГ¤ngu";
    this.yxf = "SISSEMAKSE";
    this.zuo = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„RV";
    this.tjl = "VГ•IDU NELJAKORDISTAMISEKS VALI Г•IGE MAST";
    this.nxr = "RISKI, ET SUURENDADA OMA VГ•ITU";
    this.baa = "Statistika";
    this.uvy = "MГ¤nge kokku";
    this.nmv = "Kogupanus";
    this.jej = "KoguvГµit";
    this.raw = "MГ¤nguaeg kokku";
    this.ebf = "Olen seda teadet lugenud.";
    this.clq = "MГ„NGU|LГ•PP";
    this.iax = "Ajalugu";
    this.fvo = "Гњhtegi mГ¤ngu ei ole mГ¤ngitud.";
    this.state = "OLEK";
    this.vkw = "PГµhimГ¤ng";
    this.mwx = "Automaatne vГ¤ljavГµtt";
    this.plh = "VГ¤lja vГµetud";
    this.tjw = "Bonusspins";
    this.rnv = "Gamble";
    this.bzs = "Pool";
    this.wkp = "Respin";
    this.uda = "Boonus";
    this.urx = "Esimene jagamine";
    this.qmt = "Teine jagamine";
    this.qbf = "Kolmas jagamine";
    this.tzv = "JГ„TKA";
    this.xfz = "Г„ra seda enam nГ¤ita";
    this.syj = "AUTOSTART";
    this.ont = "DUUBEL DAMINE";
    this.icu = "VГ•IDU TABEL";
    this.jxk = "Helisid ei saa laadida!";
    this.jfd = "Ressursid puuduvad!";
    this.glh = "Soovid mГ¤ngida ilma helideta?";
    this.gvh = "Keera seade vertikaalasendisse, et mГ¤ngida nagu pГ¤ris mГ¤nguautomaadil!";
    this.zgp = "Kohanda mГ¤nguliidest vastavalt oma vajadustele!";
    this.fru = "VAATA LISAINFOT MГ„NGUREEGLITEST.";
    this.mpv = "TГњHISTA";
    this.lzd = "AUTOMAATKГ„IVITUSE SГ„TTED";
    this.osj = "MГ¤ngude arv:";
    this.sna = "Peata automaatkГ¤ivitus";
    this.efi = "Krediit madalam kui:";
    this.qjz = "Krediit kГµrgem kui:";
    this.qyp = "VГµit suurem kui:";
    this.sep = "AutomaatkГ¤ivitus peatatakse boonuse alguses.";
    this.fgz = "Jaga Facebookis";
    this.ok = "OK";
    this.nct = "Reality Check";
    this.hhd = "Olete soovinud reaalsuskontrolli.";
    this.xkn = "Oma mГ¤nguajaloo vaatamiseks vajutage AJALUGU.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "Puudub Гјhendus mГ¤nguserveriga!";
    this.cqa = "Гњhenduskatsed";
    this.raa = "Sisselogimine nurjus!";
    this.caa = "Aktiivne seanss on juba olemas!";
    this.uzx = "SELLE MГ„NGU MГ„NGIJA TEOREETILINE TULU ON XY."
}
caw.prototype = new dyf;

function pbc() {
    this.xcx = "О¤Оџ О•О›AО§О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘ О•IОќО‘О™";
    this.tak = "ОњEО“О™ОЈО¤Оџ ОЈО¤ОџIО§О—ОњО‘";
    this.zkb = "EО›О‘О§. ОЈО¤ОџО™О§О—ОњО‘";
    this.agt = "ОњО•О“. ОЈО¤ОџО™О§О—ОњО‘";
    this.rxh = "ОЈО¤ОџIО§О—ОњО‘";
    this.start = "EОќО‘ОЎОћО—";
    this.nkq = "О’ОџHОО•О™О‘";
    this.khd = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.jue = "ОњО•ОќОџY";
    this.hcb = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.amh = "ОЈО¤ОџО ";
    this.qjh = "О IОЈО¤О©ОЈО—";
    this.rhi = "TEО›ОџОЈ О О‘О™О§ОќО™О”О™ОџY!";
    this.quo = "ОќО™ОљО—О¤О—ОЈ!";
    this.nia = "ОљО‘О›О— О¤ОҐО§О—!";
    this.win = "ОљEОЎО”ОџОЈ";
    this.wow = "О¤О•О›О•ОҐО¤О‘IОџ ОљEОЎО”ОџОЈ";
    this.ocv = "О О‘ОЎО‘О›О‘О’H";
    this.ipz = "О О‘ОЎО‘О›О‘О’H";
    this.joq = "О¤О–ОџО“AОЎО©";
    this.jwo = "О‘ОҐО¤OОњО‘О¤О—|EОќО‘ОЎОћО—";
    this.zkh = "О О‘ОЎО‘О›О‘О’H|О¤О–ОџО“AОЎО©";
    this.of = "О‘О O";
    this.bok = "EОћОџО”ОџОЈ";
    this.ifo = "О‘ОЎО§О™О–О•О™ О О‘О™О§ОќО™О”О™";
    this.adi = "О•О О™О›О•ОћО¤О• ОЈО¤ОџО™О§О—ОњО‘";
    this.aig = "О О‘ОЎО‘О›О‘О’H|1/2";
    this.kkl = "О AО¤О—ОЈО• EОќО‘ О О›HОљО¤ОЎОџ О“О™О‘ ОќО‘ ОЈОҐОќО•О§IОЈО•О™ОЈ";
    this.ret = "EО О™ОЈО¤ОЎОџО¦H|ОЈО¤Оџ|О О‘О™О§ОќIО”О™";
    this.rzw = "ОЈОҐОќОџО›О™ОљO ОљEОЎО”ОџОЈ";
    this.ina = "О”О•Оќ О‘ОЎОљО•О¤H О IОЈО¤О©ОЈО—.";
    this.cbf = "ОњПЂПЊОЅОїП…Пѓ!";
    this.tvr = "ОњО OОќОџОҐОЈ";
    this.gaj = "О О‘ОЎО‘ОљО‘О›О© О О•ОЎО™ОњEОќО•О¤О• ...";
    this.kzi = "О О•ОЎО™ОЈ.|О О‘О™О§ОќIО”О™О‘";
    this.audio = "О—О§ОџОЈ";
    this.zyo = "ОњОџОҐОЈО™ОљО‰";
    this.gdt = "О¤О‘О§YО¤О—О¤О‘";
    this.qel = "О О›О—ОЎО—ОЈ ОџООџОќО—";
    this.zoa = "О О›О—ОЎО—ОЈ|ОџООџОќО—";
    this.rfx = "ОЈО• О О•ОЎО™О О¤О©ОЈО— О’О›О‘О’О—ОЈ О¤О—ОЈ ОЈОҐОЈОљО•ОҐО—ОЈ О”О•Оќ О‘ОќО‘О›О‘ОњО’О‘ОќОџОҐОњО• ОљО‘ОњО™О‘ О•ОҐООҐОќО—.";
    this.language = "О“О›О©ОЈОЈО‘";
    this.dzb = "ОЈYОќОџО›Оџ";
    this.cvo = "ОљО‘ОќОЊОќО•П‚ О О‘О™О§ОќО™О”О™ОџОЋ";
    this.hvf = "ОљО‘ОќОЊОќО•П‚|О О‘О™О§ОќО™О”О™ОџОЋ";
    this.trr = "О¦ОџОЎО¤О©ОЈО— ...";
    this.hzv = "О¦ОџОЎО¤О©ОЈО— О™ОЈО¤ОџОЎО™ОљОџОҐ...";
    this.dqg = "ОћОµПЂОµПЃО¬ПѓО±П„Оµ ОєО¬ПЂОїО№Ої ПЊПЃО№Ої!";
    this.xrp = "О ПЃОїОµО№ОґОїПЂОїОЇО·ПѓО·";
    this.mda = "ОЈП†О¬О»ОјО± ОµПЂО№ОєОїО№ОЅП‰ОЅОЇО±П‚";
    this.cbt = "О¦П„О¬ПѓО±П„Оµ ПѓП„Ої О±ОЅПЋП„О±П„Ої ПЊПЃО№Ої ОґП‰ПЃОµО¬ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ!";
    this.bos = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± П„ОµПЃОјО±П„О№ПѓП„ОµОЇ";
    this.qgr = "О¤Ої ПЂО±О№П‡ОЅОЇОґО№ ОёО± ОµОєОєО№ОЅО·ОёОµОЇ ОµОє ОЅО­ОїП…";
    this.tkm = "О‘О“О“О™ОћО¤О• О¤О—Оќ ОџООџОќО— О“О™О‘ ОќО‘ ОЈОҐОќО•О§О™ОЈО•О¤О•";
    this.trb = "ОЎОҐООњО™ОЈО•О™ОЈ";
    this.uaw = "V A L U E";
    this.mzr = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, ПЂОµПЃО№ПѓП„ПЃО­П€П„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚!";
    this.sit = "О О›О—ОЎОџО¦ОџОЎОЉО•П‚";
    this.jqu = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, О±ПЂОµОЅОµПЃОіОїПЂОїО№О®ПѓП„Оµ П„О· О»ОµО№П„ОїП…ПЃОіОЇО± PRIVATE MODE П„ОїП… ПЂПЃОїОіПЃО¬ОјОјО±П„ОїП‚ ПЂОµПЃО№О®ОіО·ПѓО·П‚, ПЂПЃОїОєОµО№ОјО­ОЅОїП… ОЅО± ОµОєОєО№ОЅО·ОёОµОЇ П„Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.hed = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ О­П‡ОµО№ ОІОµО»П„О№ПѓП„ОїПЂОїО№О·ОёОµОЇ ОіО№О± Google Chrome.";
    this.sft = "О О±ПЃО±ОєО±О»ОїПЌОјОµ, П‡ПЃО·ПѓО№ОјОїПЂОїО№О®ПѓП„Оµ П„О·ОЅ П„ПЃО­П‡ОїП…ПѓО± О­ОєОґОїПѓО· П„ОїП…";
    this.zrp = "О”П…ПѓП„П…П‡ПЋП‚, О±П…П„ПЊ П„Ої ПЂПЃПЊОіПЃО±ОјОјО± ПЂОµПЃО№О®ОіО·ПѓО·П‚ ОґОµОЅ П…ПЂОїПѓП„О·ПЃОЇО¶ОµП„О±О№ ПЂО»О®ПЃП‰П‚.";
    this.fkd = "О‘П…П„ПЊ П„Ої ПЂО±О№П‡ОЅОЇОґО№ ОґОµОЅ ОјПЂОїПЃОµОЇ ОЅО± ОґО№ОµОѕО±П‡ОёОµОЇ ПѓП„О· ОґП‰ПЃОµО¬ОЅ О»ОµО№П„ОїП…ПЃОіОЇО±!";
    this.left = "О‘ОЎО™ОЈО¤О•ОЎA";
    this.mtg = "О”О•ОћО™A";
    this.koi = "AОҐО¤OОњО‘О¤Оџ";
    this.eqz = "ОљEОЎО”О™ОЈО•";
    this.hhn = "ОєОµПЃОґОЇО¶ОµО№";
    this.error = "ОЈО¦О‘О›ОњО‘";
    this.wfj = "О”О©ОЎО•AОќ О О‘О™О§ОќIО”О™";
    this.mgn = "О¤О‘ОҐО¤ОџО¤О—О¤О‘ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.jmy = "О§ОЎОџОќОџОЈ О О‘О™О§ОќО™О”О™ОџОҐ";
    this.gar = "О¤ОµО»ОµП…П„О±ОЇО±";
    this.crm = "ПЂО±О№П‡ОЅОЇОґО№О±";
    this.yxf = "О О™ОЈО¤О©О¤О™ОљO ОҐО OО›ОџО™О Оџ";
    this.zuo = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.tjl = "О•О О™О›О•ОћО¤О• О¤Оџ ОЈО©ОЈО¤Оџ О§ОЎО©ОњО‘ О¦ОҐО›О›ОџОҐ О“О™О‘ ОќО‘ О¤О•О¤ОЎО‘О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.nxr = "О ОџОќО¤О‘ОЎО•О¤О• О“О™О‘ ОќО‘ О•О§О•О¤О• О¤О—Оќ О•ОҐОљО‘О™ОЎО™О‘ О ОџО›О›О‘О О›О‘ОЈО™О‘ОЈОњОџОҐ О¤ОџОҐ ОљО•ОЎО”ОџОҐОЈ ОЈО‘ОЈ";
    this.baa = "ОЈП„О±П„О№ПѓП„О№ОєО¬";
    this.uvy = "ОЈПЌОЅОїО»Ої ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ";
    this.nmv = "ОЈП…ОЅОїО»О№ОєПЊ ПЂОїОЅП„О¬ПЃО№ПѓОјО±";
    this.jej = "ОЈП…ОЅОїО»О№ОєПЊ ОєО­ПЃОґОїП‚";
    this.raw = "ОЈП…ОЅОїО»О№ОєПЊП‚ П‡ПЃПЊОЅОїП‚ ПЂО±О№П‡ОЅО№ОґО№ОїПЌ";
    this.ebf = "EП‡П‰ ОґО№О±ОІО¬ПѓОµО№ П„Ої ОјО®ОЅП…ОјО±.";
    this.clq = "О›О—ОћО—|О О‘О™О§ОќО™О”О™ОџОҐ";
    this.iax = "О™ОЈО¤ОџОЎО™ОљОџ";
    this.fvo = "О‘ОєПЊОјО· ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ ОєО¬ПЂОїО№Ої ПЂО±О№П‡ОЅОЇОґО№.";
    this.state = "ОљО‘О¤AОЈО¤О‘ОЈО—";
    this.vkw = "ОљПЌПЃО№Ої ПЂО±О№П‡ОЅОЇОґО№";
    this.mwx = "О‘П…П„ПЊОјО±П„О· О»О®П€О·";
    this.plh = "О•О»О®П†ОёО·ПѓО±ОЅ";
    this.tjw = "Bonusspins";
    this.rnv = "О¤О¶ОїОіО¬ПЃП‰";
    this.bzs = "HОјО№ПѓП…";
    this.wkp = "Respin";
    this.uda = "ОњПЂПЊОЅОїП…Пѓ";
    this.urx = "О ПЃПЋП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.qmt = "О”ОµПЌП„ОµПЃОї ОјОїОЇПЃО±ПѓОјО±";
    this.qbf = "О¤ПЃОЇП„Ої ОјОїОЇПЃО±ПѓОјО±";
    this.tzv = "ОЈОҐОќО€О§О•О™О‘";
    this.xfz = "ОќО± ОјО·ОЅ ПЂПЃОїОІО»О·ОёОµОЇ ОѕО±ОЅО¬";
    this.syj = "О‘ОҐО¤ОџОњО‘О¤О—|О•ОќО‘ОЎОћО—";
    this.ont = "О¤О–ОџО“AОЎО©";
    this.icu = "О IОќО‘ОљО‘ОЈ ОљО•ОЎО”О©Оќ";
    this.jxk = "О— П†ПЊПЃП„П‰ПѓО· О®П‡П‰ОЅ ОґОµОЅ ОµОЇОЅО±О№ ОµП†О№ОєП„О®!";
    this.jfd = "О›ОµОЇПЂОїП…ОЅ ПЂПЊПЃОїО№!";
    this.glh = "О О±О№П‡ОЅОЇОґО№ П‡П‰ПЃОЇП‚ О®П‡Ої?";
    this.gvh = "О“П…ПЃОЇПѓП„Оµ П„О· ПѓП…ПѓОєОµП…О® ПѓО±П‚ ПѓОµ О»ОµО№П„ОїП…ПЃОіОЇО± ПЂОїПЃП„ПЃО­П„ОїП… ОіО№О± ОЅО± ПЂО±ОЇОѕОµП„Оµ ПЊПЂП‰П‚ ПѓОµ ОјО№О± ПЂПЃО±ОіОјО±П„О№ОєО® ОјО·П‡О±ОЅО® slot!";
    this.zgp = "О ПЃОїПѓО¬ПЃОјОїПѓОµ П„О·ОЅ ОµПЂО№П†О¬ОЅОµО№О± ОµПЃОіО±ПѓОЇО±П‚ ПѓП„О№П‚ ПЂПЃОїП„О№ОјО®ПѓОµО№П‚ ПѓОїП…!";
    this.fru = "О“О™О‘ О О•ОЎО™ОЈОЈОЊО¤О•ОЎО•ОЈ О О›О—ОЎОџО¦ОџОЎОЉО•ОЈ, О”О•ОЉО¤О• О¤ОџОҐОЈ ОљО‘ОќОџОќО™ОЈОњОџОЋОЈ О¤ОџОҐ О О‘О™О§ОќО™О”О™ОџОЋ.";
    this.mpv = "О‘ОљОЋОЎО©ОЈО—";
    this.lzd = "ОЎОҐООњО‰ОЈО•О™П‚ AUTOSTART";
    this.osj = "О‘ПЃО№ОёОјПЊП‚ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ:";
    this.sna = "О”О№О±ОєОїПЂО® autostart";
    this.efi = "ОњОїОЅО¬ОґОµП‚ П‡О±ОјО·О»ПЊП„ОµПЃО± О±ПЂПЊ:";
    this.qjz = "ОњОїОЅО¬ОґОµП‚ П…П€О·О»ПЊП„ОµПЃОµП‚ О±ПЂПЊ:";
    this.qyp = "ОљО­ПЃОґОїП‚ П…П€О·О»ПЊП„ОµПЃОї О±ПЂПЊ:";
    this.sep = "О¤Ої autostart ОёО± ПѓП„О±ОјО±П„О®ПѓОµО№ ОјОµ П„Ої ОѕОµОєОЇОЅО·ОјО± П„ОїП… ОјПЂПЊОЅОїП…П‚.";
    this.fgz = "ОљОїО№ОЅОїПЂОїОЇО·ПѓО· ПѓП„Ої Facebook";
    this.ok = "OK";
    this.nct = "О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚";
    this.hhd = "О–О·П„О®ПѓО±П„Оµ П„ОїОЅ О­О»ОµОіП‡Ої ПЂПЃО±ОіОјО±П„О№ОєПЊП„О·П„О±П‚.";
    this.xkn = "О О±П„О®ПѓП„Оµ П„Ої О™ОЈО¤ОџОЎО™ОљОџ ОіО№О± ОЅО± ОґОµОЇП„Оµ П„Ої О№ПѓП„ОїПЃО№ОєПЊ П„П‰ОЅ ПЂО±О№П‡ОЅО№ОґО№ПЋОЅ ПѓО±П‚.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "О”ОµОЅ П…ПЂО¬ПЃП‡ОµО№ ПѓПЌОЅОґОµПѓО· ОјОµ П„Ої ОґО№О±ОєОїОјО№ПѓП„О® ПЂО±О№П‡ОЅО№ОґО№ОїПЌ!";
    this.cqa = "О ПЃОїПѓПЂО¬ОёОµО№ОµП‚ ПѓПЌОЅОґОµПѓО·П‚";
    this.raa = "О— ПѓПЌОЅОґОµПѓО· О±ПЂО­П„П…П‡Оµ!";
    this.caa = "О— ОµОЅОµПЃОіО® ПѓП…ОЅОµОґПЃОЇО± П…ПЂО¬ПЃП‡ОµО№ О®ОґО·!";
    this.uzx = "О— ОО•О©ОЎО—О¤О™ОљО‰ О•О О™ОЈО¤ОЎОџО¦О‰ ОЈО¤ОџОќ О О‘ОЉОљО¤О— О“О™О‘ О‘ОҐО¤ОЊ О¤Оџ О О‘О™О§ОќОЉО”О™ О•ОЉОќО‘О™ XY."
}
pbc.prototype = new dyf;

function kui() {
    this.xcx = "РњРРќ. Р—РђР›РћР“ Р•";
    this.tak = "РњРђРљРЎ. Р—РђР›РћР“";
    this.zkb = "РњРРќРРњ. Р—РђР›РћР“";
    this.agt = "РњРђРљРЎ. Р—РђР›РћР“";
    this.rxh = "Р—РђР›РћР“";
    this.start = "РЎРўРђР Рў";
    this.nkq = "РџРћРњРћР©";
    this.khd = "РџР›РђРќ РќРђ|РџР•Р§РђР›Р‘РРўР•";
    this.jue = "РњР•РќР®";
    this.hcb = "РџРћР’Р•Р§Р•|РР“Р Р";
    this.amh = "РЎРўРћРџ";
    this.qjh = "РљР Р•Р”РРў";
    this.rhi = "РР“Р РђРўРђ Р—РђР’РЄР РЁР";
    this.quo = "РџР•Р§Р•Р›РРўР•!";
    this.nia = "РЈРЎРџР•РҐ!";
    this.win = "РџР•Р§РђР›Р‘Рђ";
    this.wow = "РџРћРЎР›.РџР•Р§РђР›Р‘Рђ";
    this.ocv = "РџР РР‘РР РђРќР•";
    this.ipz = "РџР РР‘РР РђРќР•";
    this.joq = "Р”РЈР‘Р›РР РђРќР•";
    this.jwo = "РђР’РўРћ|РЎРўРђР Рў";
    this.zkh = "Р”Р•Р›Р•РќР•|Р”РЈР‘Р›.";
    this.of = "РћРў";
    this.bok = "РР—РҐРћР”";
    this.ifo = "Р—РђРџРћР§РќР•РўР• РР“Р РђРўРђ";
    this.adi = "РР—Р‘Р•Р Р•РўР• Р—РђР›РћР“";
    this.aig = "Р”Р•Р›Р•РќР•";
    this.kkl = "РќРђРўРРЎРќР•РўР• РќРЇРљРћР™ Р‘РЈРўРћРќ Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.ret = "Р’Р РЄР©РђРќР•|РљРЄРњ|РР“Р РђРўРђ";
    this.rzw = "РћР‘Р©Рђ РџР•Р§РђР›Р‘Рђ";
    this.ina = "РќР• Р”РћРЎРўРђРўРЄР§Р•Рќ РљР Р•Р”РРў.";
    this.cbf = "Р‘РѕРЅСѓСЃ!";
    this.tvr = "Р‘РћРќРЈРЎ";
    this.gaj = "РњРћР›РЇ РР—Р§РђРљРђР™РўР• ...";
    this.kzi = "РџРѕРІРµС‡Рµ РРіСЂРё";
    this.gdt = "РўРЈР Р‘Рћ";
    this.rfx = "РџРћР’Р Р•Р”Рђ РђРќРЈР›РР Рђ Р’РЎРР§РљР Р—РђР›РђР“РђРќРРЇ Р РџР›РђР©РђРќРРЇ.";
    this.language = "Р•Р—РРљ";
    this.cvo = "РџР РђР’РР›Рђ РќРђ РР“Р РђРўРђ";
    this.hvf = "РџР РђР’РР›Рђ|РќРђ РР“Р РђРўРђ";
    this.trr = "Р—РђР Р•Р–Р”РђРќР• ...";
    this.hzv = "Р—РђР Р•Р–Р”РђРќР• РќРђ РРЎРўРћР РРЇ ...";
    this.dqg = "Р”РѕСЃС‚РёРіРЅР° РµРґРёРЅ РѕС‚ Р»РёРјРёС‚РёС‚Рµ!";
    this.xrp = "РџСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ";
    this.mda = "РљРѕРјСѓРЅРёРєР°С†РёРѕРЅРЅР° РіСЂРµС€РєР°";
    this.cbt = "Р”РѕСЃС‚РёРіРЅР°Р»Рё СЃС‚Рµ РјР°РєСЃРёРјР°Р»РЅРёСЏ Р±СЂРѕР№ Р±РµР·РїР»Р°С‚РЅРё РёРіСЂРё!";
    this.bos = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ Р·Р°С‚РІРѕСЂРµРЅР°";
    this.qgr = "РРіСЂР°С‚Р° С‰Рµ Р±СЉРґРµ СЂРµСЃС‚Р°СЂС‚РёСЂР°РЅР°";
    this.tkm = "Р”РћРљРћРЎРќР•РўР• Р•РљР РђРќРђ, Р—Рђ Р”Рђ РџР РћР”РЄР›Р–РРўР•";
    this.trb = "РќРђРЎРўР РћР™РљР";
    this.uaw = "V A L U E";
    this.mzr = "РњРѕР»СЏ, РІРєР»СЋС‡РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ!";
    this.sit = "РРќР¤РћР РњРђР¦РРЇ";
    this.jqu = "РњРѕР»СЏ, РґРµР°РєС‚РёРІРёСЂР°Р№С‚Рµ Р§РђРЎРўР•Рќ Р Р•Р–РРњ РЅР° Р±СЂР°СѓР·СЉСЂР°, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РёРіСЂР°С‚Р°.";
    this.hed = "РўР°Р·Рё РёРіСЂР° Рµ РѕРїС‚РёРјРёР·РёСЂР°РЅР° Р·Р° Google Chrome.";
    this.sft = "РњРѕР»СЏ, РёР·РїРѕР»Р·РІР°Р№С‚Рµ С‚РµРєСѓС‰Р°С‚Р° РІРµСЂСЃРёСЏ РЅР°";
    this.zrp = "Р—Р° СЃСЉР¶Р°Р»РµРЅРёРµ С‚РѕР·Рё Р±СЂР°СѓР·СЉСЂ РЅРµ СЃРµ РїРѕРґРґСЉСЂР¶Р° РЅР°РїСЉР»РЅРѕ.";
    this.fkd = "РўР°Р·Рё РёРіСЂР° РЅРµ РјРѕР¶Рµ РґР° СЃРµ СЃС‚Р°СЂС‚РёСЂР° РІ СЂРµР¶РёРј РЅР° СЃРІРѕР±РѕРґРЅР° РёРіСЂР°!";
    this.left = "Р›РЇР’Рђ";
    this.mtg = "Р”РЇРЎРќРђ";
    this.koi = "РђР’РўРћ";
    this.eqz = "РЎРџР•Р§Р•Р›Р•РќРћ";
    this.hhn = "РїРµС‡Р°Р»Р±Рё";
    this.dzb = "РћР‘Р©Рћ";
    this.error = "Р“Р Р•РЁРљРђ";
    this.wfj = "Р‘Р•Р—РџР›РђРўРќРђ РР“Р Рђ";
    this.audio = "Р—Р’РЈРљ";
    this.zyo = "РњРЈР—РРљРђ";
    this.qel = "РџРЄР›Р•Рќ Р•РљР РђРќ";
    this.zoa = "РџРЄР›Р•Рќ|Р•РљР РђРќ";
    this.mgn = "РР” РќРђ РР“Р Рђ";
    this.jmy = "Р’Р Р•РњР• РќРђ РР“Р Рђ";
    this.gar = "РџРѕСЃР»РµРґРЅРё";
    this.crm = "РёРіСЂРё";
    this.yxf = "Р”Р•РџРћР—РРў";
    this.zuo = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.tjl = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ Р‘РћРЇ, Р—Рђ Р”Рђ РЈР§Р•РўР’РћР РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.nxr = "РР“Р РђР™ Р—Рђ РЁРђРќРЎ Р”Рђ РЈР’Р•Р›РР§РРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.baa = "РЎС‚Р°С‚РёСЃС‚РёРєР°";
    this.uvy = "РћР±С‰Рѕ РёРіСЂРё";
    this.nmv = "РћР±С‰Рѕ Р·Р°Р»РѕРі";
    this.jej = "РћР±С‰Рѕ РїРµС‡Р°Р»Р±Рё";
    this.raw = "РћР±С‰Рѕ РІСЂРµРјРµ РЅР° РёРіСЂР°";
    this.ebf = "РџСЂРѕС‡РµС‚РѕС… С‚РѕРІР° СЃСЉРѕР±С‰РµРЅРёРµ.";
    this.clq = "РР—РҐРћР”|РћРў|РР“Р РђРўРђ";
    this.iax = "РРЎРўРћР РРЇ";
    this.fvo = "РќСЏРјР° РёРіСЂР°РЅРё РёРіСЂРё.";
    this.state = "РЎРўРђРўРЈРЎ";
    this.vkw = "РћСЃРЅРѕРІРЅР° РёРіСЂР°";
    this.mwx = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕ СЃСЉР±СЂР°РЅРё";
    this.plh = "РЎСЉР±СЂР°РЅРё";
    this.tjw = "Р‘РѕРЅСѓСЃ-РёРіСЂРё";
    this.rnv = "Р”СѓР±Р»РёСЂР°РЅРµ";
    this.bzs = "РџРѕР»РѕРІРёРЅР°";
    this.wkp = "Respin";
    this.uda = "Р‘РѕРЅСѓСЃ";
    this.urx = "РџСЉСЂРІРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.qmt = "Р’С‚РѕСЂРѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.qbf = "РўСЂРµС‚Рѕ СЂР°Р·РґР°РІР°РЅРµ";
    this.tzv = "РџР РћР”РЄР›Р–Р•РќРР•";
    this.xfz = "РќРµ РїРѕРєР°Р·РІР°Р№ РѕС‚РЅРѕРІРѕ";
    this.syj = "AUTOSTART";
    this.ont = "Р”РЈР‘Р›РР РђРќР•";
    this.icu = "РџР›РђРќ РќРђ РџР•Р§РђР›Р‘РРўР•";
    this.jxk = "Р—РІСѓРєСЉС‚ РЅРµ РјРѕР¶Рµ РґР° Р±СЉРґРµ Р·Р°СЂРµРґРµРЅ!";
    this.jfd = "Р›РёРїСЃРІР°С‚ СЂРµСЃСѓСЂСЃРё!";
    this.glh = "РРіСЂР° Р±РµР· Р·РІСѓРє?";
    this.gvh = "Р—Р°РІСЉСЂС‚РµС‚Рµ СѓСЃС‚СЂРѕР№СЃС‚РІРѕС‚Рѕ СЃРё РІ РїРѕСЂС‚СЂРµС‚РµРЅ СЂРµР¶РёРј, Р·Р° РґР° РёРіСЂР°РµС‚Рµ РєР°С‚Рѕ РЅР° РёСЃС‚РёРЅСЃРєР° СЃР»РѕС‚ РјР°С€РёРЅР°!";
    this.zgp = "РќР°СЃС‚СЂРѕР№С‚Рµ РёРЅС‚РµСЂС„РµР№СЃР° РЅР° РёРіСЂР°С‚Р° СЃРїРѕСЂРµРґ СЃРІРѕРёС‚Рµ РЅСѓР¶РґРё!";
    this.fru = "Р—Рђ РџРћР’Р•Р§Р• РРќР¤РћР РњРђР¦РРЇ Р’РР–РўР• РџР РђР’РР›РђРўРђ РќРђ РР“Р РђРўРђ.";
    this.mpv = "РР—Р§РРЎРўР’РђРќР•";
    this.lzd = "РќРђРЎРўР РћР™РљР РќРђ РђР’РўРћРњРђРўРР§РќРћРўРћ РЎРўРђР РўРР РђРќР•";
    this.osj = "Р‘СЂРѕР№ РёРіСЂРё:";
    this.sna = "РЎРїСЂРё Р°РІС‚РѕРјР°С‚РёС‡РЅРёСЏ СЃС‚Р°СЂС‚";
    this.efi = "РљСЂРµРґРёС‚ РїРѕ-РјР°Р»СЉРє РѕС‚:";
    this.qjz = "РљСЂРµРґРёС‚ РїРѕ-РІРёСЃРѕРє РѕС‚:";
    this.qyp = "РЎРїРµС‡РµР»Рё РїРѕРІРµС‡Рµ РѕС‚:";
    this.sep = "РђРІС‚РѕРјР°С‚РёС‡РЅРѕС‚Рѕ СЃС‚Р°СЂС‚РёСЂР°РЅРµ С‰Рµ Р±СЉРґРµ СЃРїСЂСЏРЅРѕ РІ РЅР°С‡Р°Р»РѕС‚Рѕ РЅР° Р±РѕРЅСѓСЃР°.";
    this.fgz = "РЎРїРѕРґРµР»Рё РІСЉРІ Facebook";
    this.ok = "OK";
    this.nct = "Reality Check";
    this.hhd = "Р—Р°СЏРІРёР»Рё СЃС‚Рµ РїСЂРѕРІРµСЂРєР° РЅР° СЂРµР°Р»РЅРѕСЃС‚С‚Р°.";
    this.xkn = "РќР°С‚РёСЃРЅРµС‚Рµ РРЎРўРћР РРЇ, Р·Р° РґР° РІРёРґРёС‚Рµ С…СЂРѕРЅРѕР»РѕРіРёСЏС‚Р° СЃРё РЅР° РёРіСЂР°.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "РќСЏРјР° РІСЂСЉР·РєР° СЃ РіРµР№РјРёРЅРі СЃСЉСЂРІСЉСЂР°!";
    this.cqa = "РћРїРёС‚Рё Р·Р° СЃРІСЉСЂР·РІР°РЅРµ";
    this.raa = "РќРµСѓСЃРїРµС€РЅРѕ РІР»РёР·Р°РЅРµ!";
    this.caa = "Р’РµС‡Рµ СЃСЉС‰РµСЃС‚РІСѓРІР° Р°РєС‚РёРІРЅР° СЃРµСЃРёСЏ!";
    this.uzx = "РўР•РћР Р•РўРР§РќРђРўРђ Р’РЄР—Р’Р РђР©РђР•РњРћРЎРў РќРђ РР“Р РђР§Рђ Р—Рђ РўРђР—Р РР“Р Рђ Р• XY."
}
kui.prototype = new dyf;

function sec() {
    this.xcx = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ бѓђбѓ бѓбѓЎ";
    this.tak = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.zkb = "бѓ›бѓбѓњбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.agt = "бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ¤бѓЎбѓќбѓњбѓ";
    this.rxh = "бѓ¤бѓЎбѓќбѓњбѓ";
    this.start = "бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.nkq = "бѓ“бѓђбѓ®бѓ›бѓђбѓ бѓ”бѓ‘бѓђ";
    this.khd = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.jue = "бѓ›бѓ”бѓњбѓбѓЈ";
    this.hcb = "бѓ›бѓ”бѓўбѓ|бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.amh = "бѓ’бѓђбѓ©бѓ”бѓ бѓ”бѓ‘бѓђ";
    this.qjh = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ";
    this.rhi = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.quo = "бѓ’бѓђбѓ›бѓђбѓ бѓЇбѓ•бѓ”бѓ‘бѓЈбѓљбѓ!";
    this.nia = "бѓ’бѓбѓЎбѓЈбѓ бѓ•бѓ”бѓ‘бѓ— бѓ¬бѓђбѓ бѓ›бѓђбѓўбѓ”бѓ‘бѓђбѓЎ!";
    this.win = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.wow = "бѓ‘бѓќбѓљбѓќ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.ocv = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.ipz = "бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.joq = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.jwo = "бѓђбѓ•бѓўбѓќ|бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.zkh = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.bok = "бѓ’бѓђбѓ›бѓќбѓЎбѓ•бѓљбѓђ";
    this.ifo = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.adi = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ";
    this.aig = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.ret = "бѓ—бѓђбѓ›бѓђбѓЁбѓ–бѓ”|бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ";
    this.rzw = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.xrp = "бѓ’бѓђбѓ¤бѓ бѓ—бѓ®бѓбѓљбѓ”бѓ‘бѓђ";
    this.dzb = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ";
    this.gaj = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ“бѓђбѓ”бѓљбѓќбѓ“бѓќбѓ— ...";
    this.kzi = "бѓ›бѓ”бѓўбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.gdt = "бѓўбѓЈбѓ бѓ‘бѓќ";
    this.rfx = "бѓ’бѓђбѓЈбѓ›бѓђбѓ бѓ—бѓђбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓ—бѓ®бѓ•бѓ”бѓ•бѓђбѓЁбѓ бѓ§бѓ•бѓ”бѓљбѓђ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ бѓ“бѓђ бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ¬бѓђбѓбѓЁбѓљбѓ”бѓ‘бѓђ.";
    this.tzv = "бѓ’бѓђбѓ’бѓ бѓ«бѓ”бѓљбѓ”бѓ‘бѓђ";
    this.syj = "бѓђбѓ•бѓўбѓќ бѓ“бѓђбѓ¬бѓ§бѓ”бѓ‘бѓђ";
    this.icu = "бѓ’бѓђбѓ“бѓђбѓ®бѓ“бѓбѓЎ бѓ›бѓ бѓбѓЄбѓ®бѓ•бѓ”бѓљбѓ";
    this.ont = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.left = "бѓ›бѓђбѓ бѓЄбѓ®бѓњбѓбѓ•";
    this.mtg = "бѓ›бѓђбѓ бѓЇбѓ•бѓњбѓбѓ•";
    this.koi = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“";
    this.ok = "бѓ™бѓ";
    this.mpv = "бѓ’бѓђбѓЈбѓҐбѓ›бѓ”бѓ‘бѓђ";
    this.rnv = "бѓђбѓ–бѓђбѓ бѓўбѓ";
    this.bzs = "бѓњбѓђбѓ®бѓ”бѓ•бѓђбѓ бѓ";
    this.cvo = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.hvf = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ";
    this.cbf = "BONUS!";
    this.tvr = "бѓ‘бѓќбѓњбѓЈбѓЎ";
    this.kkl = "бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓ¦бѓбѓљбѓђбѓ™бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.ina = "бѓђбѓ бѓђ бѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ.";
    this.tkm = "бѓЁбѓ”бѓ”бѓ®бѓ”бѓ— бѓ”бѓ™бѓ бѓђбѓњбѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓ’бѓ бѓ«бѓ”бѓљбѓќбѓ—";
    this.trr = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  ...";
    this.hzv = "бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓбѓЎ  бѓбѓЎбѓўбѓќбѓ бѓбѓђ  ...";
    this.mda = "бѓЎбѓђбѓ™бѓќбѓ›бѓЈбѓњбѓбѓ™бѓђбѓЄбѓбѓќ бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.dqg = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ”бѓ бѓ— бѓ”бѓ бѓ—бѓ бѓљбѓбѓ›бѓбѓўбѓ бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.cbt = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ›бѓђбѓҐбѓЎбѓбѓ›бѓђбѓљбѓЈбѓ бѓ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓбѓЎ бѓљбѓбѓ›бѓбѓўбѓ бѓЈбѓ™бѓ•бѓ” бѓђбѓ›бѓќбѓ¬бѓЈбѓ бѓ”бѓ—!";
    this.bos = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ“бѓђбѓЎбѓ бѓЈбѓљбѓ“бѓ”бѓ‘бѓђ";
    this.qgr = "бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓ’бѓђбѓ“бѓђбѓбѓўбѓ•бѓбѓ бѓ—бѓ”бѓ‘бѓђ";
    this.eqz = "бѓ›бѓќбѓ’бѓ”бѓ‘бѓЈбѓљбѓбѓђ";
    this.hhn = "wins";
    this.uaw = "V A L U E";
    this.error = "бѓЁбѓ”бѓЄбѓ“бѓќбѓ›бѓђ";
    this.wfj = "бѓЈбѓ¤бѓђбѓЎбѓќ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.mgn = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ  бѓњбѓќбѓ›бѓ”бѓ бѓ";
    this.jmy = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.gar = "бѓ‘бѓќбѓљбѓќ ";
    this.crm = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.yxf = "бѓ“бѓ”бѓћбѓќбѓ–бѓбѓўбѓ";
    this.audio = "бѓ®бѓ›бѓђ";
    this.zyo = "бѓ›бѓЈбѓЎбѓбѓ™бѓђ";
    this.qel = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.zoa = "бѓЎбѓ бѓЈбѓљбѓ бѓ”бѓ™бѓ бѓђбѓњбѓ";
    this.language = "бѓ”бѓњбѓбѓЎ";
    this.xfz = "бѓ›бѓќбѓ›бѓђбѓ•бѓђбѓљбѓЁбѓ бѓђбѓ¦бѓђбѓ  бѓ©бѓ•бѓ”бѓњбѓ”бѓ‘бѓђ";
    this.jxk = "бѓ®бѓ›бѓбѓЎ бѓ©бѓђбѓўбѓ•бѓбѓ бѓ—бѓ•бѓђ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ!";
    this.jfd = "бѓђбѓ бѓђбѓЎбѓђбѓ™бѓ›бѓђбѓ бѓбѓЎбѓ бѓ бѓ”бѓЎбѓЈбѓ бѓЎбѓ”бѓ‘бѓ!";
    this.glh = "бѓ’бѓбѓњбѓ“бѓђбѓ— бѓ®бѓ›бѓбѓЎ бѓ’бѓђбѓ бѓ”бѓЁбѓ” бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ—?";
    this.mzr = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ›бѓќбѓђбѓ‘бѓ бѓЈбѓњбѓќбѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ!";
    this.jqu = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ—, бѓ’бѓђбѓ›бѓќбѓ бѓ—бѓќбѓ— бѓћбѓбѓ бѓђбѓ“бѓ бѓ бѓ”бѓџбѓбѓ›бѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓЁбѓ бѓ бѓќбѓ› бѓЁбѓ”бѓ«бѓљбѓќбѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓ.";
    this.hed = "бѓ”бѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓќбѓћбѓўбѓбѓ›бѓбѓ–бѓбѓ бѓ”бѓ‘бѓЈбѓљбѓбѓђ Google Chrome-бѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ.";
    this.tli = "бѓ’бѓ—бѓ®бѓќбѓ•бѓ— бѓ’бѓђбѓ›бѓќбѓбѓ§бѓ”бѓњбѓќбѓ—";
    this.wmt = "-бѓбѓЎ бѓ›бѓбѓ›бѓ“бѓбѓњбѓђбѓ бѓ” бѓ•бѓ”бѓ бѓЎбѓбѓђ";
    this.zrp = "бѓЎбѓђбѓ›бѓ¬бѓЈбѓ®бѓђбѓ бѓќбѓ“, бѓђбѓ› бѓ‘бѓ бѓђбѓЈбѓ–бѓ”бѓ бѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЎбѓ бѓЈбѓљбѓђбѓ“ бѓ•бѓ”бѓ  бѓ®бѓ”бѓ бѓ®бѓ“бѓ”бѓ‘бѓђ.";
    this.fkd = "бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ—бѓђбѓ›бѓђбѓЁбѓ бѓЈбѓ¤бѓђбѓЎбѓќбѓ“ бѓЁбѓ”бѓЈбѓ«бѓљбѓ”бѓ‘бѓ”бѓљбѓбѓђ!";
    this.gvh = "бѓ©бѓђбѓ бѓ—бѓ”бѓ— бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђ бѓћбѓќбѓ бѓўбѓ бѓ”бѓўбѓбѓЎ бѓ бѓ”бѓџбѓбѓ›бѓ–бѓ” бѓ бѓќбѓ› бѓбѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ— бѓбѓЎбѓ” бѓ—бѓбѓ—бѓҐбѓќбѓЎ бѓ бѓ”бѓђбѓљбѓЈбѓ  бѓЎбѓљбѓќбѓў бѓ›бѓќбѓ¬бѓ§бѓќбѓ‘бѓбѓљбѓќбѓ‘бѓђбѓ–бѓ” бѓ—бѓђбѓ›бѓђбѓЁбѓќбѓ‘бѓ“бѓ”бѓ—!";
    this.zgp = "бѓ›бѓќбѓђбѓ бѓ’бѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓњбѓўбѓ”бѓ бѓ¤бѓ”бѓбѓЎбѓ бѓ—бѓҐбѓ•бѓ”бѓњбѓЎ бѓЎбѓђбѓ­бѓбѓ бѓќбѓ”бѓ‘бѓ”бѓ‘бѓЎ!";
    this.zuo = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.tjl = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓбѓЎ бѓЎбѓ¬бѓќбѓ бѓ бѓ¤бѓ”бѓ бѓ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ—бѓ®бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.nxr = "бѓ“бѓђбѓ“бѓ”бѓ— бѓ¤бѓЎбѓќбѓњбѓ бѓ бѓќбѓ› бѓ’бѓђбѓ–бѓђбѓ бѓ“бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓбѓЎ бѓЁбѓђбѓњбѓЎбѓ";
    this.uvy = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ";
    this.nmv = "бѓ¤бѓЎбѓќбѓњбѓ бѓ›бѓ—бѓљбѓбѓђбѓњбѓђбѓ“";
    this.jej = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.raw = "бѓ›бѓ—бѓљбѓбѓђбѓњбѓ бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓ“бѓ бѓќ";
    this.ebf = "бѓ›бѓ” бѓ’бѓђбѓ•бѓ”бѓЄбѓђбѓњбѓ бѓђбѓ› бѓ’бѓ–бѓђбѓ•бѓњбѓбѓљбѓЎ.";
    this.clq = "бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ|бѓ“бѓђбѓ›бѓ—бѓђбѓ•бѓ бѓ”бѓ‘бѓђ";
    this.iax = "бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ";
    this.fvo = "бѓњбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓ бѓђбѓ  бѓђбѓ бѓбѓЎ.";
    this.state = "бѓ›бѓ“бѓ’бѓќбѓ›бѓђбѓ бѓ”бѓќбѓ‘бѓђ";
    this.vkw = "бѓ«бѓбѓ бѓбѓ—бѓђбѓ“бѓ бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.mwx = "бѓђбѓ•бѓўбѓќбѓ›бѓђбѓўбѓЈбѓ бѓђбѓ“ бѓЁбѓ”бѓ’бѓ бѓќбѓ•бѓ”бѓ‘бѓђ";
    this.plh = "бѓђбѓ¦бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђ";
    this.urx = "бѓћбѓбѓ бѓ•бѓ”бѓљбѓ бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.qmt = "бѓ›бѓ”бѓќбѓ бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.qbf = "бѓ›бѓ”бѓЎбѓђбѓ›бѓ” бѓ“бѓђбѓ бѓбѓ’бѓ”бѓ‘бѓђ";
    this.lzd = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓбѓЎ бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ бѓ”бѓ‘бѓ";
    this.osj = "бѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ‘бѓбѓЎ бѓ бѓђбѓќбѓ“бѓ”бѓњбѓќбѓ‘бѓђ:";
    this.sna = "бѓЁбѓ”бѓђбѓ©бѓ”бѓ бѓ”бѓ— бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ";
    this.efi = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.qjz = "бѓ™бѓ бѓ”бѓ“бѓбѓўбѓ бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.qyp = "бѓ›бѓќбѓбѓ’бѓ”бѓ— бѓЈбѓ¤бѓ бѓќ бѓ›бѓ”бѓўбѓ бѓ•бѓбѓ“бѓ бѓ”:";
    this.sep = "бѓђбѓ•бѓўбѓќбѓ’бѓђбѓ›бѓЁбѓ•бѓ”бѓ‘бѓ бѓЁбѓ”бѓ©бѓ”бѓ бѓ“бѓ”бѓ‘бѓђ бѓ‘бѓќбѓњбѓЈбѓЎбѓбѓЎ бѓ“бѓђбѓЎбѓђбѓ¬бѓ§бѓбѓЎбѓЁбѓ.";
    this.fgz = "бѓ’бѓђбѓђбѓ–бѓбѓђбѓ бѓ”бѓ— бѓ¤бѓ”бѓбѓЎбѓ‘бѓЈбѓҐбѓ–бѓ”";
    this.baa = "бѓЎбѓўбѓђбѓўбѓбѓЎбѓўбѓбѓ™бѓђ";
    this.of = "/";
    this.tjw = "Bonus бѓ—бѓђбѓ›бѓђбѓЁбѓ";
    this.uda = "бѓ‘бѓќбѓњбѓЈбѓЎбѓ";
    this.sit = "бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓђ";
    this.trb = "бѓћбѓђбѓ бѓђбѓ›бѓ”бѓўбѓ .";
    this.wkp = "бѓ®бѓ”бѓљбѓђбѓ®бѓљбѓђ бѓ“бѓђбѓўбѓ бѓбѓђбѓљбѓ”бѓ‘бѓбѓЎ";
    this.fru = "бѓ›бѓ”бѓўбѓ бѓбѓњбѓ¤бѓќбѓ бѓ›бѓђбѓЄбѓбѓбѓЎбѓђбѓ—бѓ•бѓбѓЎ, бѓбѓ®бѓбѓљбѓ”бѓ— бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓ¬бѓ”бѓЎбѓ”бѓ‘бѓ.";
    this.nct = "бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ";
    this.hhd = "бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ—бѓ®бѓќбѓ•бѓ”бѓ— бѓ бѓ”бѓђбѓљбѓќбѓ‘бѓбѓЎ бѓЁбѓ”бѓ›бѓќбѓ¬бѓ›бѓ”бѓ‘бѓђ.";
    this.xkn = "бѓ—бѓҐбѓ•бѓ”бѓњбѓ бѓ—бѓђбѓ›бѓђбѓЁбѓбѓЎ бѓбѓЎбѓўбѓќбѓ бѓбѓбѓЎ бѓЎбѓђбѓњбѓђбѓ®бѓђбѓ•бѓђбѓ“ бѓ“бѓђбѓђбѓ­бѓбѓ бѓ”бѓ— бѓ›бѓќбѓ•бѓљбѓ”бѓњбѓ”бѓ‘бѓбѓЎ бѓ©бѓђбѓњбѓђбѓ¬бѓ”бѓ бѓ-бѓЎ.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "бѓЎбѓђбѓ—бѓђбѓ›бѓђбѓЁбѓќ бѓЎбѓ”бѓ бѓ•бѓ”бѓ бѓ–бѓ” бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.cqa = "бѓ“бѓђбѓ™бѓђбѓ•бѓЁбѓбѓ бѓ”бѓ‘бѓбѓЎ бѓ›бѓЄбѓ“бѓ”бѓљбѓќбѓ‘бѓ”бѓ‘бѓ";
    this.raa = "бѓЁбѓ”бѓЎбѓ•бѓљбѓђ бѓ•бѓ”бѓ  бѓ›бѓќбѓ®бѓ”бѓ бѓ®бѓ“бѓђ!";
    this.caa = "бѓђбѓҐбѓўбѓбѓЈбѓ бѓ бѓЎбѓ”бѓЎбѓбѓђ бѓЈбѓ™бѓ•бѓ” бѓђбѓ бѓЎбѓ”бѓ‘бѓќбѓ‘бѓЎ!";
    this.uzx = "бѓ—бѓ”бѓќбѓ бѓбѓЈбѓљбѓ бѓ“бѓђбѓ‘бѓ бѓЈбѓњбѓ”бѓ‘бѓђ бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ–бѓ” бѓђбѓ› бѓ—бѓђбѓ›бѓђбѓЁбѓЁбѓ бѓђбѓ бѓбѓЎ XY."
}
sec.prototype = new dyf;

function zuf() {
    this.xcx = "A MINIMUM TГ‰T";
    this.tak = "MAXIMUM TГ‰T";
    this.zkb = "MIN. TГ‰T";
    this.agt = "MAX. TГ‰T";
    this.rxh = "TГ‰T";
    this.start = "START";
    this.nkq = "SГљGГ“";
    this.khd = "SГљGГ“";
    this.jue = "MENГњ";
    this.hcb = "MENГњ";
    this.amh = "STOP";
    this.qjh = "HITEL";
    this.rhi = "A JГЃTГ‰KNAK VГ‰GE";
    this.quo = "NYEREMГ‰NY!";
    this.nia = "SOK SZERENCSГ‰T!";
    this.win = "NYEREMГ‰NY";
    this.wow = "UTOLSГ“ NYER.";
    this.ocv = "FELГЌR";
    this.ipz = "FELГЌR";
    this.joq = "SZORZГЃS";
    this.jwo = "AUTO|START";
    this.zkh = "FELEZГ‰S";
    this.bok = "KILГ‰PГ‰S";
    this.ifo = "START";
    this.adi = "VГЃLASSZON TГ‰TET";
    this.aig = "FELEZГ‰S";
    this.ret = "VISSZA A|JГЃTГ‰KHOZ";
    this.rzw = "Г–sszes NyeremГ©ny";
    this.xrp = "FigyelmeztetГ©s";
    this.dzb = "Г–SSZES";
    this.gaj = "KГ‰REM VГЃRJON ...";
    this.kzi = "MenГј";
    this.gdt = "SEBESSГ‰G";
    this.rfx = "A MEGHIBГЃSODГЃS Г‰RVГ‰NYTELENГЌT MINDEN JГЃTГ‰KOT Г‰S KIFIZETГ‰ST.";
    this.tzv = "TOVГЃBB";
    this.syj = "AUTOSTART";
    this.icu = "SГљGГ“";
    this.ont = "SZORZГЃS";
    this.left = "BAL";
    this.mtg = "JOBB";
    this.ok = "OK";
    this.mpv = "MГ‰GSEM";
    this.rnv = "SzorzГЎs";
    this.bzs = "FelezГ©s";
    this.cvo = "JГЃTГ‰KSZABГЃLYOK";
    this.hvf = "JГЃTГ‰KSZABГЃLYOK";
    this.cbf = "BГіnusz!";
    this.tvr = "BГ“NUSZ";
    this.kkl = "A FOLYTATГЃSHOZ NYOMJON MEG EGY GOMBOT";
    this.ina = "NINCS ELГ‰G HITEL";
    this.uaw = "V A L U E";
    this.hhn = "nyeremГ©nyek";
    this.of = "/";
    this.tkm = "Г‰RINTSE MEG A KГ‰PERNYЕђT A FOLYTATГЃSHOZ";
    this.trr = "BETГ–LTГ‰SE ...";
    this.hzv = "JГЃTГ‰K TГ–RTГ‰NET BETГ–LTГ‰SE ...";
    this.mda = "KommunikГЎciГіs hiba";
    this.dqg = "ElГ©rte az egyik limitet!";
    this.cbt = "ElГ©rte a szabad jГЎtГ©kok maximum szГЎmГЎt!";
    this.bos = "A jГЎtГ©k megГЎllГ­tva";
    this.qgr = "JГЎtГ©k Гєjraindul";
    this.eqz = "NYERT";
    this.error = "HIBA";
    this.wfj = "FREEPLAY";
    this.koi = "AUTO";
    this.mgn = "JГЃTГ‰K ID";
    this.jmy = "JГЎtГ©k IdЕ‘";
    this.gar = "utolsГі";
    this.crm = "jГЎtГ©k";
    this.yxf = "HITEL";
    this.audio = "HANG";
    this.zyo = "ZENE";
    this.qel = "TELJES KГ‰PERNYЕђ";
    this.zoa = "TELJES KГ‰PERNYЕђ";
    this.language = "NYELV";
    this.xfz = "Ne mutassa mГ©gegyszer";
    this.jxk = "A hangot nem lehet betГ¶lteni!";
    this.jfd = "ForrГЎsok hiГЎnyoznak!";
    this.glh = "JГЎtГ©k hang nГ©lkГјl?";
    this.trb = "BEГЃLLГЌTГЃS";
    this.mzr = "KГ©rjГјk fordГ­tsa el a kГ©szГјlГ©ket!";
    this.sit = "INFГ“";
    this.jqu = "A jГЎtГ©khoz kГ©rem tiltsa le a PrivГЎt BГ¶ngГ©szГ©s mГіdot a bГ¶ngГ©szЕ‘jГ©ben.";
    this.hed = "Ez a jГЎtГ©k Google Chrome bГ¶ngГ©szЕ‘re van optimalizГЎlva.";
    this.tli = "KГ©rjГјk hasznГЎlja a(z)";
    this.wmt = " legГєjabb verziГіjГЎt!";
    this.zrp = "Sajnos ez a bГ¶ngГ©szЕ‘ nem teljesen tГЎmogatott.";
    this.fkd = "Ez a jГЎtГ©k nem indГ­thatГі FreePlay mГіdban!";
    this.gvh = "FordГ­tsa a kГ©szГјlГ©kГ©t ГЎllГі mГіdba, hogy Гєgy jГЎtsszon, mint egy igazi nyerЕ‘gГ©pen!";
    this.zgp = "ГЃllГ­tsa be a jГЎtГ©k felГјletГ©t az Г–n igГ©nyeinek megfelelЕ‘en!";
    this.zuo = "VГЃLASSZA KI A MEGFELELЕђ SZГЌNT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.tjl = "VГЃLASSZA KI A MEGFELELЕђ KГЃRTYASZГЌNT, HOGY MEGNГ‰GYSZEREZZE A NYEREMГ‰NYT";
    this.nxr = "SZORZГЃS EGY LEHETЕђSГ‰G, HOGY NГ–VELJE A NYEREMГ‰NYT";
    this.baa = "Statisztika";
    this.uvy = "Г–sszes JГЎtГ©k";
    this.nmv = "Г–sszes TГ©t";
    this.jej = "Г–sszes NyeremГ©ny";
    this.raw = "Г–sszes JГЎtГ©k IdЕ‘";
    this.ebf = "Elolvastam az Гјzenetet.";
    this.clq = "KILГ‰PГ‰S";
    this.iax = "ElЕ‘zmГ©nyek";
    this.fvo = "Nincsenek jГЎtГ©kok.";
    this.state = "STГЃTUSZ";
    this.vkw = "FЕ‘ JГЎtГ©k";
    this.mwx = "Autom. FelГ­rГЎs";
    this.plh = "FelГ­rva";
    this.tjw = "BГіnusz jГЎtГ©k";
    this.wkp = "Respin";
    this.uda = "BГіnusz";
    this.urx = "ElsЕ‘ LeosztГЎs";
    this.qmt = "MГЎsodik LeosztГЎs";
    this.qbf = "Harmadik LeosztГЎs";
    this.lzd = "AUTOSTART BEГЃLLГЌTГЃS";
    this.osj = "JГЎtГ©kok szГЎma:";
    this.sna = "Stop autostart";
    this.efi = "A hitel kevesebb, mint:";
    this.qjz = "A hitel tГ¶bb, mint:";
    this.qyp = "A nyeremГ©ny tГ¶bb, mint:";
    this.sep = "Az AUTOSTART funkciГі kikapcsolГіdik a bГіnusz jГЎtГ©k kezdetГ©n.";
    this.fgz = "MegosztГЎs a Facebook-on";
    this.fru = "KIEGГ‰SZГЌTЕђ TГЃJГ‰KOZTATГЃST A JГЃTГ‰KSZABГЃLYOKBAN TALГЃL.";
    this.nct = "Reality Check";
    this.hhd = "Г–n egy valГіsГЎg-ellenЕ‘rzГ©st kГ©rt.";
    this.xkn = "Nyomja meg az ELЕђZMГ‰NYEK lehetЕ‘sГ©get, hogy megtekintse a jГЎtГ©ka elЕ‘zmГ©nyeit.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "Nincs kapcsolat a jГЎtГ©k-szerverrel!";
    this.cqa = "KapcsolГіdГЎsi prГіbГЎlkozГЎs";
    this.raa = "BejelentkezГ©si hiba!";
    this.caa = "Egy szekciГі mГЎr aktГ­v!";
    this.uzx = "A JГЃTГ‰KOSNAK AZ ELVI KIFIZETГ‰S Г–SSZEGE EBBEN A JГЃTГ‰KBAN XY."
}
zuf.prototype = new dyf;

function fue() {
    this.xcx = "MIZA MINIMД‚ ESTE";
    this.tak = "MIZA MAXIMД‚";
    this.zkb = "MIZA MIN.";
    this.agt = "MIZA MAX.";
    this.rxh = "MIZД‚";
    this.start = "START";
    this.nkq = "AJUTOR";
    this.khd = "LISTA|CГ‚ЕћTIGURI";
    this.jue = "MENIU";
    this.hcb = "MENIUL|JOCULUI";
    this.amh = "STOP";
    this.qjh = "CREDIT";
    this.rhi = "SFГ‚RЕћIT JOCUL";
    this.quo = "CГ‚ЕћTIGД‚TOR!";
    this.nia = "MULT NOROC!";
    this.win = "CГ‚ЕћTIG";
    this.wow = "ULTIMUL CГ‚ЕћTIG";
    this.ocv = "COLECTA";
    this.ipz = "COLECTA";
    this.joq = "JOC";
    this.jwo = "AUTO|START";
    this.zkh = "COLECTARE|1/2";
    this.bok = "IEЕћIRE";
    this.ifo = "APД‚SAЕўI START";
    this.adi = "ALEGEЕўI MIZA";
    this.aig = "COLECTARE|1/2";
    this.ret = "ГЋNAPOI|LA JOC";
    this.rzw = "CГўЕџtig total";
    this.xrp = "Avertizare";
    this.dzb = "TOTAL";
    this.gaj = "AЕћTEPTAЕўI VД‚ ROG ...";
    this.kzi = "Meniul Jocului";
    this.gdt = "VITEZД‚";
    this.rfx = "FД‚RД‚ GARANЕўIE LA DEFECTAREA APARATULUI.";
    this.tzv = "CONTINUARE";
    this.syj = "AUTOSTART";
    this.icu = "LISTA CГ‚ЕћTIGURI";
    this.ont = "JOC";
    this.left = "STГ‚NGA";
    this.mtg = "DREAPTA";
    this.ok = "OK";
    this.mpv = "ГЋNTRERUPERE";
    this.rnv = "Joc";
    this.bzs = "Colectare 1/2";
    this.cvo = "REGULILE JOCULUI";
    this.hvf = "REGULILE|JOCULUI";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.kkl = "PENTRU CONTINUARE APASД‚ PE UN BUTON";
    this.ina = "CREDIT INSUFICIENT.";
    this.hhn = "cГўЕџtigДѓ";
    this.uaw = "V A L U E";
    this.of = "DIN";
    this.tkm = "ATINGEИљI ECRANUL PENTRU A CONTINUA";
    this.trr = "ГЋNCARCД‚ ...";
    this.hzv = "ГЋNCARCД‚ ISTORIC ...";
    this.mda = "Eroare de comunicare";
    this.dqg = "AЕЈi atins una dintre limite!";
    this.cbt = "AЕЈi atins numДѓrul maxim de jocuri gratis!";
    this.bos = "Jocul se Г®ncheie";
    this.qgr = "Jocul se restarteazДѓ";
    this.eqz = "CГ‚ЕћTIGAT";
    this.error = "EROARE";
    this.wfj = "FREEPLAY";
    this.koi = "AUTO";
    this.mgn = "ID JOC";
    this.jmy = "TIMP DE JOC";
    this.gar = "ultimele";
    this.crm = "jocuri";
    this.yxf = "CREDIT";
    this.audio = "AUDIO";
    this.zyo = "MUZICД‚";
    this.qel = "ECRAN COMPLET";
    this.zoa = "ECRAN|COMPLET";
    this.language = "LIMBA";
    this.xfz = "Nu reafiИ™aИ›i";
    this.jxk = "Sunetele nu pot fi Г®ncДѓrcate!";
    this.jfd = "Lipsesc resurse!";
    this.glh = "JucaЕЈi fДѓrДѓ sunet?";
    this.trb = "SETД‚RI";
    this.mzr = "VДѓ rugДѓm opriЕЈi aparatul!";
    this.sit = "INFO";
    this.jqu = "VДѓ rugДѓm dezactivaЕЈi PRIVATE MODE Г®n browser-ul dvs. pentru a juca.";
    this.hed = "Acest joc este optimizat pentru Google Chrome.";
    this.sft = "VДѓ rugДѓm utilizaЕЈi versiunea actualДѓ";
    this.zrp = "Din pДѓcate acest browser nu este sprijinit complet.";
    this.fkd = "Acest joc nu poate fi pornit Г®n modul freeplay!";
    this.gvh = "TreceЕЈi aparatul dvs. Г®n modul portret, pentru a juca ca la o maЕџinДѓ automatДѓ!";
    this.zgp = "AjusteazДѓ interfaЕЈa de joc nevoilor dvs!";
    this.zuo = "SELECTEAZД‚ CULOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI";
    this.tjl = "SELECTEAZД‚ CULOAREA CORECTД‚ A CД‚RЕўII PENTRU A CГ‚ЕћTIGA DE 4 ORI";
    this.nxr = "JOACД‚ PENTRU ЕћANSA DE A CREЕћTE PROFITUL";
    this.baa = "StatisticДѓ";
    this.uvy = "NumДѓr jocuri";
    this.nmv = "Pariuri totale";
    this.jej = "CГўЕџtig total";
    this.raw = "Timp total de joc";
    this.ebf = "Am citit mesajul.";
    this.clq = "ГЋNCHEIERE|JOC";
    this.iax = "ISTORIC";
    this.fvo = "Nu existДѓ jocuri.";
    this.state = "STATUT";
    this.vkw = "Joc principal";
    this.mwx = "Auto colectare";
    this.plh = "Colectat";
    this.tjw = "Bonusspins";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "Primul Deal";
    this.qmt = "Al doilea deal";
    this.qbf = "Al treilea deal";
    this.lzd = "SETД‚RI AUTOSTART";
    this.osj = "NumДѓrul jocurilor:";
    this.sna = "Oprire autostart";
    this.efi = "Credit sub:";
    this.qjz = "Credit peste:";
    this.qyp = "CГўИ™tig peste:";
    this.sep = "Autostart se va opti la Г®nceperea bonusului.";
    this.fgz = "Distribuie Facebook";
    this.fru = "PENTRU INFORMAЕўII SUPLIMENTARE, VEZI REGULILE JOCULUI.";
    this.nct = "Reality Check";
    this.hhd = "Ai cerut un Reality Check.";
    this.xkn = "ApasДѓ ISTORIC pentru a vedea istoricul tДѓu de joc.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "FДѓrДѓ conexiune la serverul de jocuri!";
    this.cqa = "Tentative de conectare";
    this.raa = "Conectare nereuЕџitДѓ!";
    this.caa = "ExistДѓ deja o sesiune activДѓ!";
    this.uzx = "DECONTAREA TEORETICД‚ CД‚TRE JUCД‚TORI A ACESTUI JOC ESTE DE XY."
}
fue.prototype = new dyf;

function tkw() {
    this.xcx = "MГЌNIMA APOSTA Г‰";
    this.tak = "MГЃX. APOSTA";
    this.zkb = "MГЌN. APOSTA";
    this.agt = "MГЃX. APOSTA";
    this.rxh = "APOSTA";
    this.start = "PARTIDA";
    this.nkq = "AJUDA";
    this.khd = "ESQUEMA|DE PAGOS";
    this.jue = "MENU";
    this.hcb = "SELEГ‡ГѓO|DE JOGOS";
    this.amh = "PARADA";
    this.qjh = "CRГ‰DITO";
    this.rhi = "FIM DO JOGO";
    this.quo = "VENCEDOR!";
    this.nia = "BOA SORTE!";
    this.win = "GANHO";
    this.wow = "ULTIMO GANHO";
    this.ocv = "COLETAR";
    this.ipz = "COLETAR";
    this.joq = "JOGADA";
    this.jwo = "AUTO|PARTIDA";
    this.zkh = "METADE";
    this.bok = "SAГЌDA";
    this.ifo = "PREMIR PARTIDA";
    this.adi = "SELECIONAR APOSTA";
    this.aig = "METADE";
    this.ret = "VOLTAR|PARA|O JOGO";
    this.rzw = "Ganho total";
    this.xrp = "Aviso";
    this.dzb = "TOTAL";
    this.gaj = "AGUARDE POR FAVOR ...";
    this.kzi = "SeleГ§ГЈo de jogos";
    this.gdt = "VELOCIDADE";
    this.rfx = "NГѓO SE ASSUME RESPONSABILIDADE POR AVARIAS NA MГЃQUINA.";
    this.tzv = "CONTINUAR";
    this.syj = "AUTOPARTIDA";
    this.icu = "ESQUEMA DE PAGOS";
    this.ont = "JOGADA";
    this.left = "ESQUERDA";
    this.mtg = "DIREITA";
    this.ok = "OK";
    this.mpv = "CANCELAR";
    this.rnv = "Jogada";
    this.bzs = "Metade";
    this.cvo = "REGRAS DO JOGO";
    this.hvf = "REGRAS|DO JOGO";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.kkl = "PREMIR QUALQUER TECLA PARA CONTINUAR";
    this.ina = "NГѓO HГЃ CRГ‰DITO SUFICIENTE!";
    this.hhn = "ganha";
    this.uaw = "V A L U E";
    this.of = "DE";
    this.tkm = "TOCAR NA TELA PARA CONTINUAR";
    this.trr = "CARREGANDO ...";
    this.hzv = "CARREGANDO HISTГ“RICO ...";
    this.mda = "Erro de comunicaГ§ГЈo";
    this.dqg = "AlcanГ§ou um dos limities!";
    this.cbt = "AlcanГ§ou a quantidade mГЎxima de jogos livres!";
    this.bos = "O jogo serГЎ encerrado";
    this.qgr = "O jogo serГЎ reiniciado";
    this.eqz = "GANHOU";
    this.error = "ERRO";
    this.wfj = "FREEPLAY";
    this.koi = "AUTO";
    this.mgn = "ID JOGO";
    this.jmy = "Playing Time";
    this.gar = "Гљltimos";
    this.crm = "jogos";
    this.yxf = "DEPOSIT";
    this.audio = "AUDIO";
    this.zyo = "MUSIC";
    this.qel = "TELA CHEIA";
    this.zoa = "TELA|CHEIA";
    this.language = "IDIOMA";
    this.xfz = "NГЈo exibir novamente";
    this.jxk = "Sounds nГЈo podem ser carregados!";
    this.jfd = "Faltam recursos!";
    this.glh = "Jogar sem som?";
    this.trb = "AJUSTES";
    this.mzr = "Favor girar o seu aparelho!";
    this.sit = "INFORMAГ‡ГѓO";
    this.jqu = "Favor desativar o MODO PRIVADO no browser para iniciar o jogo.";
    this.hed = "Este jogo Г© otimizado por Google Chrome.";
    this.sft = "Favor usar a versГЈo atual de";
    this.zrp = "Infelizmente este browser nГЈo Г© completamente suportado.";
    this.fkd = "Este jogo nГЈo pode ser iniciado no modo de jogo livre!";
    this.gvh = "Girar o seu aparelho para o modo de portrait, para jogar como em uma mГЎquina real!";
    this.zgp = "Adapte a interface do jogo Г s suas necessidades!";
    this.zuo = "ESCOLHA A COR CERTA PARA DOBRAR O GANHO";
    this.tjl = "ESCOLHA O NAIPE CERTO PARA QUADRUPLICAR O GANHO";
    this.nxr = "GAMBLE PARA A CHANCE DE AUMENTAR O GANHO";
    this.baa = "EstatГ­sticas";
    this.uvy = "NГєmero de jogos";
    this.nmv = "Aposta total";
    this.jej = "Ganho total";
    this.raw = "Tempo total do jogo";
    this.ebf = "Eu lГ­ esta mensagem.";
    this.clq = "ENCERRAR|JOGO";
    this.iax = "HISTГ“RICO";
    this.fvo = "Ainda nГЈo existem jogos.";
    this.state = "ESTADO";
    this.vkw = "Jogo principal";
    this.mwx = "Coletado automaticamente";
    this.plh = "Coletado";
    this.tjw = "Bonusspins";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "Primeiro Deal";
    this.qmt = "Segundo Deal";
    this.qbf = "Terceiro Deal";
    this.lzd = "AJUSTES AUTOPARTIDA";
    this.osj = "NГєmero de jogos:";
    this.sna = "Parar autopartida";
    this.efi = "CrГ©dito menor do que:";
    this.qjz = "CrГ©dito maior do que:";
    this.qyp = "Ganho maior do que:";
    this.sep = "O autopartida serГЎ parado no inГ­cio do bonus.";
    this.fgz = "Participar no Facebook";
    this.fru = "PARA MAIS INFORMAГ‡Г•ES, CONSULTE AS REGRAS DO JOGO.";
    this.nct = "Reality Check";
    this.hhd = "Solicitaste um Reality Check.";
    this.xkn = "Pressione HISTГ“RICO para ver seu histГіrico de jogos.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "Nenhuma conexГЈo com o servidor do jogo!";
    this.cqa = "Tentativas de conexГЈo";
    this.raa = "Login falhou!";
    this.caa = "Ja existe uma sessГЈo ativa!";
    this.uzx = "O PAGAMENTO TEГ“RICO AO JOGADOR PARA ESTE JOGO Г‰ DE XY."
}
tkw.prototype = new dyf;

function kww() {
    this.xcx = "LA MISE MINIMALE EST DE";
    this.tak = "MISE MAX.";
    this.zkb = "MISE MINI";
    this.agt = "MISE MAX.";
    this.rxh = "MISE";
    this.start = "DEPART";
    this.nkq = "AIDE";
    this.khd = "TABLEAU|DES PAIEMENTS";
    this.jue = "MENU";
    this.hcb = "PLUS|DE JEUX";
    this.amh = "ARRГЉTEZ";
    this.qjh = "CRГ‰DIT";
    this.rhi = "FIN DU JEU";
    this.quo = "GAGNANT!";
    this.nia = "BONNE CHANCE!";
    this.win = "GAIN";
    this.wow = "DERNIER GAIN";
    this.ocv = "ENCAISSER";
    this.ipz = "ENCAISSER";
    this.joq = "DOUBLER";
    this.jwo = "AUTO|LANCER";
    this.zkh = "ENCAISSER|MOITIГ‰";
    this.bok = "SORTIE";
    this.ifo = "APPUYEZ SUR START";
    this.adi = "CHOISIR LA MISE";
    this.aig = "ENCAISSER|MOITIГ‰";
    this.ret = "RETOUR|AU JEU";
    this.rzw = "Gain total";
    this.xrp = "Avertissement";
    this.dzb = "TOTALE";
    this.gaj = "ATTENDEZ S'IL VOUS PLAГЋT ...";
    this.kzi = "Plus de jeux";
    this.gdt = "VITESSE";
    this.rfx = "ГЃ L'OCCASION DВґERREUR DВґAPPAREIL DГ‰CLINER TOUTE RESPONSABILITГ‰.";
    this.tzv = "CONTINUER";
    this.syj = "AUTO LANCER";
    this.icu = "TABLEAU DES PAIEMENTS";
    this.ont = "DOUBLER";
    this.left = "GAUCHE";
    this.mtg = "DROITE";
    this.ok = "OK";
    this.mpv = "ANNULER";
    this.rnv = "Doubler";
    this.bzs = "Encaisser moitiГ©";
    this.cvo = "RГ€GLES DU JEU";
    this.hvf = "RГ€GLES DU JEU";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.kkl = "APPUYEZ SUR UNE TOUCHE POUR CONTINUER";
    this.ina = "PAS ASSEZ DE CRГ‰DIT";
    this.hhn = "gagne";
    this.uaw = "V A L U E";
    this.of = "SUR";
    this.tkm = "EFFLEURE L'Г‰CRAN POUR CONTINUER";
    this.trr = "CHARGEMENT EN COURS ...";
    this.hzv = "CHARGEMENT DE L'HISTORIQUE EN COURS ...";
    this.mda = "Erreur de communication";
    this.dqg = "Vous avez atteint une des limites!";
    this.cbt = "Vous avez atteint le nombre maximum des jeux gratuits!";
    this.bos = "Le jeu sera terminГ©";
    this.qgr = "Le jeu sera dГ©marrГ© de nouveau";
    this.eqz = "GAGNГ‰";
    this.error = "ERREUR";
    this.wfj = "JEU GRATUIT";
    this.koi = "AUTO";
    this.mgn = "ID DU JEU";
    this.jmy = "TEMPS DE JEU";
    this.gar = "Les";
    this.crm = "derniers jeux";
    this.yxf = "AVOIR";
    this.audio = "AUDIO";
    this.zyo = "MUSIQUE";
    this.qel = "PLEIN Г‰CRAN";
    this.zoa = "PLEIN|Г‰CRAN";
    this.language = "LANGUE";
    this.xfz = "Ne pas afficher encore une fois";
    this.jxk = "Impossible de charger des sounds!";
    this.jfd = "Manque de ressources!";
    this.glh = "Jouer sans son?";
    this.trb = "CONFIGUR.";
    this.mzr = "Merci de tourner votre matГ©riel!";
    this.sit = "INFO";
    this.jqu = "Veuillez dГ©sactiver le MODE PRIVГ‰ dans le navigateur afin de dГ©marrer le jeu.";
    this.hed = "Ce jeu est optimisГ© pour Google Chrome.";
    this.sft = "Veuilllez utiliser la version Г  jour de";
    this.zrp = "Malheureusement, ce browser n'est intГ©gralement supportГ©.";
    this.fkd = "Impossible de dГ©marrer ce jeu au mode jeu gratuit!";
    this.gvh = "Tournez votre matГ©riel dans le mode portrait pour jouer comme sur une vГ©ritable machine!";
    this.zgp = "Adapte l'interface de jeu Г  tes besoins!";
    this.zuo = "CHOISIS LA BONNE COULEUR AFIN DE DOUBLER LE GAIN";
    this.tjl = "CHOISIS LA BONNE COULEUR DE LA CARTE AFIN DE QUADRUPLER LE GAIN";
    this.nxr = "GAMBLE POUR LA CHANCE DE MULTIPLIER LE GAIN";
    this.baa = "Statistiques";
    this.uvy = "Nombre des jeux";
    this.nmv = "Total des mises";
    this.jej = "Gain total";
    this.raw = "Temps total du jeu";
    this.ebf = "J'ai lu le message";
    this.clq = "TERMINER|LE JEU";
    this.iax = "Historique";
    this.fvo = "Il n'y a pas encore de jeux jouГ©s.";
    this.state = "Г‰TAT";
    this.vkw = "Jeu principal";
    this.mwx = "Pris automatiquement";
    this.plh = "Pris";
    this.tjw = "Bonusspins";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "Premier Deal";
    this.qmt = "DeuxiГЁme Deal";
    this.qbf = "TroisiГЁme Deal";
    this.lzd = "AUTOSTART CONFIGURATION";
    this.osj = "Nombre des jeux:";
    this.sna = "ArrГЄter autostart";
    this.efi = "CrГ©dit infГ©rieur Г :";
    this.qjz = "CrГ©dit supГ©rieur Г :";
    this.qyp = "Gain supГ©rieur Г :";
    this.sep = "L'autostart est arrГЄtГ© au dГ©but du bonus.";
    this.fgz = "Partager sur Facebook";
    this.fru = "POUR PLUS D'INFORMATIONS, CONSULTEZ LES RГ€GLES DU JEU.";
    this.nct = "Reality Check";
    this.hhd = "Tu as demandГ© un Reality Check.";
    this.xkn = "Appuie sur HISTORIQUE pour afficher ton historique de jeu.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "Aucune connexion avec le gaming serveur!";
    this.cqa = "Tentatives de connexion";
    this.raa = "Connexion Г©chouГ©e!";
    this.caa = "Il y a dГ©jГ  une session active!";
    this.uzx = "LE VERSEMENT THГ‰ORIQUE AU JOUEUR POUR CE JEU S'Г‰LГ€VE ГЂ XY."
}
kww.prototype = new dyf;

function hve() {
    this.xcx = "NAJMANJI ULOG JE";
    this.tak = "MAX ULOG";
    this.zkb = "MIN. ULOG";
    this.agt = "MAKS. ULOG";
    this.rxh = "ULOG";
    this.start = "START";
    this.nkq = "POMOД†";
    this.khd = "LISTA DOBITAKA";
    this.jue = "IZBORNIK";
    this.hcb = "VIЕ E|IGARA";
    this.amh = "STOP";
    this.qjh = "KREDIT";
    this.rhi = "KRAJ IGRE";
    this.quo = "DOBITAK!";
    this.nia = "SRETNO!";
    this.win = "DOBITAK";
    this.wow = "ZADNJI DOBITAK";
    this.ocv = "UPIЕ I";
    this.ipz = "UPIЕ I";
    this.joq = "DUPLANJE";
    this.jwo = "AUTO|START";
    this.zkh = "UZMI|1/2";
    this.bok = "IZLAZ";
    this.ifo = "PRITISNITE START";
    this.adi = "BIRAJTE ULOG";
    this.aig = "UZMI|1/2";
    this.ret = "POVRATAK|U IGRU";
    this.rzw = "Ukupni dobitci";
    this.xrp = "Upozorenje";
    this.dzb = "UKUPNI";
    this.gaj = "MOLIMO PRIДЊEKAJTE ...";
    this.kzi = "ViЕЎe igara";
    this.gdt = "BRZINA";
    this.rfx = "Kod kvara na ureД‘aju nema jamstva.";
    this.tzv = "DALJE";
    this.syj = "AUTOSTART";
    this.icu = "LISTA DOBITAKA";
    this.ont = "DUPLANJE";
    this.left = "LIJEVA";
    this.mtg = "DESNA";
    this.ok = "OK";
    this.mpv = "PREKID";
    this.rnv = "Duplanje";
    this.bzs = "Uzmi 1/2";
    this.cvo = "PRAVILA IGRE";
    this.hvf = "PRAVILA IGRE";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.kkl = "ZA NASTAVITI PRITISNITE BILO KOJU TIPKU";
    this.ina = "NEMATE DOVOLJNO KREDITA.";
    this.hhn = "dobici";
    this.uaw = "V A L U E";
    this.of = "OD";
    this.tkm = "ZA NASTAVAK DODIRNITE ZASLON";
    this.trr = "UДЊITAVANJA ...";
    this.hzv = "POVIJEST UДЊITAVANJA ...";
    this.mda = "Komunikacijska pogreЕЎka";
    this.dqg = "Dostigli ste jednu od graniДЌnih vrijednosti!";
    this.cbt = "Dostigli ste maksimum besplatnih igara!";
    this.bos = "Igra se zatvara";
    this.qgr = "Igra se iznova uДЌitava";
    this.eqz = "OSVOJENO";
    this.error = "POGREЕ KA";
    this.wfj = "FREEPLAY";
    this.koi = "AUTO";
    this.mgn = "ID IGRE";
    this.jmy = "Vrijeme igre";
    this.gar = "posljednjih";
    this.crm = "igara";
    this.yxf = "DEPOZIT";
    this.audio = "ZVUKA";
    this.zyo = "GLAZBA";
    this.qel = "PUN ZASLON";
    this.zoa = "PUN ZASLON";
    this.language = "JEZIKA";
    this.xfz = "Ne prikazuj ponovo";
    this.jxk = "Zvukovi se ne mogu uДЌitati!";
    this.jfd = "Nedostaju resursi!";
    this.glh = "ЕЅelite li igrati uz zvuk?";
    this.trb = "POSTAVKE";
    this.mzr = "UkljuДЌite svoj ureД‘aj!";
    this.sit = "INFORMACIJE";
    this.jqu = "Molimo deaktivirajte PRIVATNI MOD u VaЕЎem pregledniku kako biste mogli igrati";
    this.hed = "Ova igra je optimizirana za Google Chrome.";
    this.sft = "Molimo koristite se trenutnom inaДЌicom";
    this.zrp = "NaЕѕalost ovaj preglednik nije u potpunosti podrЕѕan";
    this.fkd = "Ova se igra ne moЕѕe pokrenuti u reЕѕimu slobodne igre!";
    this.gvh = "Podesite svoj ureД‘aj na portretni format kako biste igrali kao na pravoma automatu!";
    this.zgp = "Prilagodite suДЌelje igre svojim potrebama!";
    this.zuo = "ODABERI PRAVU BOJU I TIME UDVOSTRUДЊI DOBITAK";
    this.tjl = "ODABERI PRAVI ZNAK I TIME UДЊETVEROSTRUДЊI DOBITAK";
    this.nxr = "KOCKANJEM OSVOJI Е ANSU ZA POVEД†ANJE DOBITKA";
    this.baa = "Statistike";
    this.uvy = "Ukupno igara";
    this.nmv = "Ukupni ulog";
    this.jej = "Ukupno dobitaka";
    this.raw = "Ukupno vrijeme igre";
    this.ebf = "ProДЌitao sam ovu poruku";
    this.clq = "IZLAZ|IZ IGRE";
    this.iax = "Povijest";
    this.fvo = "Nema odigranih igara.";
    this.state = "STANJE";
    this.vkw = "Glavna igra";
    this.mwx = "Auto. pokupljeno";
    this.plh = "Pokupljeno";
    this.tjw = "Besplatne igre";
    this.wkp = "Dodatne okretaje";
    this.uda = "Bonus";
    this.urx = "Prvo dijeljenje";
    this.qmt = "Drugo dijeljenje";
    this.qbf = "TreД‡e dijeljenje";
    this.lzd = "POSTAVKE AUTOMATSKE IGRE";
    this.osj = "Ukupno igara:";
    this.sna = "Zaustavljanje automatske igre";
    this.efi = "Kredit manji od:";
    this.qjz = "Kredit veД‡i od:";
    this.qyp = "Dobitak veД‡i od:";
    this.sep = "Automatska igra Д‡e se zaustaviti na poДЌetku besplatne igre.";
    this.fgz = "Podijeli na Facebooku";
    this.fru = "ZA VIЕ E INFORMACIJA POGLEDAJTE PRAVILA IGRE.";
    this.nct = "Reality Check";
    this.hhd = "ZatraЕѕili ste Reality Check.";
    this.xkn = "Pritisni POVIJEST za pregled prijaЕЎnjih igara.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "Nema konekcije sa serverom za igranje!";
    this.cqa = "PokuЕЎaji povezivanja";
    this.raa = "Prijavljivanje nije uspjelo!";
    this.caa = "Aktivna sesija veД‡ postoji!";
    this.uzx = "TEORETSKI POVRATAK NA IGRAДЊA ZA OVU IGRU JE XY."
}
hve.prototype = new dyf;

function stk() {
    this.xcx = "MINIMA PUNTATA Г€";
    this.tak = "PUNTATA MASSIMA";
    this.zkb = "MIN. PUNTATA";
    this.agt = "MASS. PUNTATA";
    this.rxh = "PUNTATA";
    this.start = "START";
    this.nkq = "AIUTO";
    this.khd = "TABELLA VINCITE";
    this.jue = "MENU";
    this.hcb = "SCELTA|GIOCHI";
    this.amh = "STOP";
    this.qjh = "CREDITO";
    this.rhi = "FINE PARTITA";
    this.quo = "VINCITORE!";
    this.nia = "BUONA FORTUNA!";
    this.win = "VINCITA";
    this.wow = "ULTIMA VINCITA";
    this.ocv = "INCASSA";
    this.ipz = "INCASSA";
    this.joq = "GAMBLE";
    this.jwo = "AUTO|START";
    this.zkh = "METГЂ";
    this.bok = "FINE";
    this.ifo = "PREMI START";
    this.adi = "SCEGLI PUNTATA";
    this.aig = "METГЂ";
    this.ret = "RITORNO|AL GIOCO";
    this.rzw = "Totale vincita";
    this.xrp = "Attenzione";
    this.dzb = "TOTALE";
    this.gaj = "ATTENDERE PREGO ...";
    this.kzi = "Scelta Giochi";
    this.gdt = "VELOCITГЂ";
    this.rfx = "In caso di malfunzionamento nessuna responsabilitГ  assunta.";
    this.tzv = "CONTINUA";
    this.syj = "AUTOSTART";
    this.icu = "TABELLA VINCITE";
    this.ont = "GAMBLE";
    this.left = "SINISTRA";
    this.mtg = "DESTRA";
    this.ok = "OK";
    this.mpv = "CANCELLA";
    this.rnv = "Gamble";
    this.bzs = "MetГ ";
    this.cvo = "REGOLAMENTO";
    this.hvf = "REGOLAMENTO";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.kkl = "PREMI UN TASTO PER CONTINUARE";
    this.ina = "CREDITO INSUFFICIENTE!";
    this.hhn = "vince";
    this.uaw = "V A L U E";
    this.of = "DI";
    this.tkm = "TOCCARE LO SCHERMO PER CONTINUARE";
    this.trr = "STA CARICANDO ...";
    this.hzv = "STA CARICANDO LA CRONACA ...";
    this.mda = "Errore di comunicazione";
    this.dqg = "Hai raggiunto uno dei limiti!";
    this.cbt = "Hai raggiunto il numero massimo di free games!";
    this.bos = "La partita sta terminando";
    this.qgr = "La partita sta ripartendo";
    this.eqz = "VINTO";
    this.error = "ERRORE";
    this.wfj = "FREEPLAY";
    this.koi = "AUTO";
    this.mgn = "GAME ID";
    this.jmy = "Durata del gioco";
    this.gar = "Ultime partite";
    this.crm = "";
    this.yxf = "DEPOSITO";
    this.audio = "AUDIO";
    this.zyo = "MUSICA";
    this.qel = "SCHERMO INTERO";
    this.zoa = "SCHERMO INTERO";
    this.language = "LINGUA";
    this.xfz = "Non mostrare di nuovo";
    this.jxk = "Suoni non caricabili!";
    this.jfd = "Mancano risorse!";
    this.glh = "Giocare senza suoni?";
    this.trb = "SETTAGGI";
    this.mzr = "Prego girare l'apparecchio!";
    this.sit = "INFO";
    this.jqu = "Prego disattivare il MODO PRIVATO nel browser per iniziare la partita";
    this.hed = "La partita ГЁ ottimizzata per Google Chrome.";
    this.sft = "Prego utilizzare la versione attuale di";
    this.zrp = "Purtroppo il presente browser non viene supportato interamente";
    this.fkd = "Impossibile avviare questa partita nel modo freeplay!";
    this.gvh = "Girare l'apparecchio nel modo ritratto per giocare come su un apparecchio vero!";
    this.zgp = "Aggiusta l'interfaccia del gioco come ti piace!";
    this.zuo = "SCEGLI IL COLORE GIUSTO PER RADDOPPIARE LA VINCITA";
    this.tjl = "SCEGLI IL SEME GIUSTO PER QUADRUPLARE LA VINCITA";
    this.nxr = "GAMBLE PER L'OPPORTUNITГЂ DI AUMENTARE LA VINCITA";
    this.baa = "Statistica";
    this.uvy = "Totale partite";
    this.nmv = "Totale puntata";
    this.jej = "Totale vincita";
    this.raw = "Totale durata del gioco";
    this.ebf = "Ho letto il messaggio";
    this.clq = "TERMINARE|LA PARTITA";
    this.iax = "Cronaca";
    this.fvo = "Nessuna partita giocata.";
    this.state = "STATO";
    this.vkw = "Partita principale";
    this.mwx = "Raccolto autom.";
    this.plh = "Raccolto";
    this.tjw = "Bonusspin";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "Primo deal";
    this.qmt = "Secondo deal";
    this.qbf = "Terzo deal";
    this.lzd = "SETTAGGI AUTOSTART";
    this.osj = "Numero di partite:";
    this.sna = "Fermare l'autostart";
    this.efi = "Credito piГ№ basso di:";
    this.qjz = "Credito piГ№ alto di:";
    this.qyp = "Vincita piГ№ alta di:";
    this.sep = "L'autostart si ferma all'inizio del bonus.";
    this.fgz = "Dividi su facebook";
    this.fru = "PER ULTERIORI INFORMAZIONI CONSULTARE LE REGOLE DI GIOCO.";
    this.nct = "Reality Check";
    this.hhd = "Avete richiesto un Reality Check.";
    this.xkn = "Premere CRONACA per mostrare la cronaca della giocata.";
    this.mvb = "Game break";
    this.vpo = "Game limits";
    this.tsg = "Self test";
    this.psy = "Nessuna connessione al gaming server!";
    this.cqa = "Tentativi di connessione";
    this.raa = "Login fallito!";
    this.caa = "Г€ giГ  attiva una seduta!";
    this.uzx = "IL PAGAMENTO TEORICO DI QUESTO GIOCO IN FAVORE DEL GIOCATORE AMMONTA A XY."
}
stk.prototype = new dyf;

function qlf() {
    this.xcx = "MIN. INSATSEN Г„R";
    this.tak = "MAXIMAL INSATS";
    this.zkb = "MIN. INSATS";
    this.agt = "MAX. INSATS";
    this.rxh = "INSATS";
    this.start = "STARTA";
    this.nkq = "HJГ„LP";
    this.khd = "VINSTTABELL";
    this.jue = "MENY";
    this.hcb = "FLER|SPEL";
    this.amh = "STOPP";
    this.qjh = "KREDIT";
    this.rhi = "SPELET Г„R SLUT";
    this.quo = "VINNARE!";
    this.nia = "LYCKA TILL!";
    this.win = "VINN";
    this.wow = "SENASTE VINSTEN";
    this.ocv = "INKASSERA";
    this.ipz = "INKASSERA";
    this.joq = "DUBBLERA";
    this.jwo = "AUTO|START";
    this.zkh = "HГ„LFTEN|1/2";
    this.bok = "AVSLUTA";
    this.ifo = "TRYCK PГ… STARTA";
    this.adi = "VГ„LJ INSATS";
    this.aig = "HГ„LFTEN";
    this.ret = "Г…TERGГ…|TILL SPELET";
    this.rzw = "Total Vinst";
    this.xrp = "Varning";
    this.dzb = "TOTALT";
    this.gaj = "VAR VГ„NLIG VГ„NTA ...";
    this.kzi = "Fler spel";
    this.gdt = "TEMPO";
    this.rfx = "Vid tekniskt fel annulleras alla insatser och spel.";
    this.tzv = "FORTSГ„TT";
    this.syj = "AUTOSTART";
    this.icu = "VINSTTABELL";
    this.ont = "DUBBLERA";
    this.left = "VГ„NSTER";
    this.mtg = "HГ–GER";
    this.ok = "OK";
    this.mpv = "AVBRYT";
    this.rnv = "Dubblering";
    this.bzs = "HГ¤lften";
    this.cvo = "SPELREGLER";
    this.hvf = "SPELREGLER";
    this.cbf = "Bonus!";
    this.tvr = "BONUS";
    this.kkl = "TRYCK PГ… EN KNAPP FГ–R ATT FORTSГ„TTA";
    this.ina = "FГ–R LГ…GT SALDO!";
    this.hhn = "vinster";
    this.uaw = "V A L U E";
    this.of = "AV";
    this.tkm = "PEKA PГ… SKГ„RMEN FГ–R ATT FORTSГ„TTA";
    this.trr = "LГ„SER ...";
    this.hzv = "LГ„SER IN HISTORIKEN ...";
    this.mda = "Kommunikationsfel";
    this.dqg = "Du har nГҐtt en av grГ¤nserna!";
    this.cbt = "Du har nГҐtt det maximala antalet gratisspel!";
    this.bos = "Spelet avslutas";
    this.qgr = "Spelet startas om";
    this.eqz = "VUNNA";
    this.error = "FEL";
    this.wfj = "GRATISSPEL";
    this.koi = "AUTO";
    this.mgn = "SPEL-ID";
    this.jmy = "SPELTID";
    this.gar = "senaste";
    this.crm = "spelen";
    this.yxf = "INSГ„TTNING";
    this.audio = "LJUD";
    this.zyo = "MUSIK";
    this.qel = "HELSKГ„RM";
    this.zoa = "HELSKГ„RM";
    this.language = "SPRГ…K";
    this.xfz = "Visa inte igen";
    this.jxk = "Ljud kan inte laddas!";
    this.jfd = "Resurser saknas!";
    this.glh = "Spela utan ljud?";
    this.trb = "INSTГ„LLN.";
    this.mzr = "VГ¤nd din enhet!";
    this.sit = "INFO";
    this.jqu = "Avaktivera PRIVATLГ„GET i din webblГ¤sare fГ¶r att spela spelet.";
    this.hed = "Det hГ¤r spelet Г¤r optimerat fГ¶r Google Chrome.";
    this.sft = "AnvГ¤nd den senaste versionen av";
    this.zrp = "TyvГ¤rr stГ¶ds inte den hГ¤r webblГ¤saren fullt ut.";
    this.fkd = "Det hГ¤r spelet kan inte startas i gratisspelslГ¤get!";
    this.gvh = "HГҐll din enhet i portrГ¤ttlГ¤ge fГ¶r att spela som pГҐ en riktig spelautomat!";
    this.zgp = "Anpassa spelgrГ¤nssnittet efter dina behov!";
    this.zuo = "VГ„LJ RГ„TT FГ„RG FГ–R ATT DUBBLA VINSTEN";
    this.tjl = "VГ„LJ RГ„TT FГ„RGSVIT FГ–R ATT FYRDUBBLA VINSTEN";
    this.nxr = "SPELA FГ–R ATT FГ… CHANSEN ATT Г–KA VINSTEN";
    this.baa = "Statistik";
    this.uvy = "Totalt antal spel";
    this.nmv = "Totalinsats";
    this.jej = "Totalvinst";
    this.raw = "Total speltid";
    this.ebf = "Jag har lГ¤st detta meddelande";
    this.clq = "AVSLUTA|SPELET";
    this.iax = "Historik";
    this.fvo = "Inga spel har spelats.";
    this.state = "STATUS";
    this.vkw = "Huvudspel";
    this.mwx = "Auto. Inkasserat";
    this.plh = "Inkasserat";
    this.tjw = "Bonusspinn";
    this.wkp = "Respin";
    this.uda = "Bonus";
    this.urx = "FГ¶rsta given";
    this.qmt = "Andra given";
    this.qbf = "Tredje given";
    this.lzd = "AUTOSPELINSTГ„LLNINGAR";
    this.osj = "Antal spelrundor:";
    this.sna = "Stoppa automatiskt spel";
    this.efi = "Saldo lГ¤gre Г¤n:";
    this.qjz = "Saldo hГ¶gre Г¤n:";
    this.qyp = "Vinst hГ¶gre Г¤n:";
    this.sep = "Autospelen kommer att stoppas dГҐ bonusen startar.";
    this.fgz = "Dela pГҐ Facebook";
    this.fru = "SE SPELREGLERNA FГ–R MER INFORMATION.";
    this.nct = "Reality Check";
    this.hhd = "Du har begГ¤rt att fГҐ en statusuppdatering.";
    this.xkn = "Tryck pГҐ HISTORIK fГ¶r att visa din spelhistorik.";
    this.mvb = "Spelpaus";
    this.vpo = "SpelgrГ¤nser";
    this.tsg = "SjГ¤lvtest";
    this.psy = "Ingen anslutning till spelservern!";
    this.cqa = "AnslutningsfГ¶rsГ¶k";
    this.raa = "Inloggningen misslyckades!";
    this.caa = "Det finns redan en aktiv session!";
    this.uzx = "DEN TEORETISKA Г…TERBETALNINGEN TILL SPELAREN FГ–R DET HГ„R SPELET Г„R XY."
}
qlf.prototype = new dyf;

function ysb() {
    this.qyb = "HELD";
    this.otn = "RED";
    this.leg = "BLACK";
    this.pen = "HIGH";
    this.kmf = "LOW";
    this.rqj = "DEAL CARDS";
    this.iam = "HOLD CARDS";
    this.zsk = "DRAW CARDS";
    this.hoa = "five equivalent cards (only possible with a wild card)";
    this.yky = "ace - king - queen - jack - ten of the same suit";
    this.rur = "STRAIGHT with cards of the same suit";
    this.xyl = "four cards of the same rank";
    this.qlk = "combination of THREE OF A KIND and a PAIR";
    this.obb = "five cards of the same suit";
    this.kto = "five cards in rank order, but not of the same suit";
    this.rok = "three cards of the same rank";
    this.lck = "two distinct pairs and any 5th card";
    this.ewb = "two jacks, queens, kings or aces";
    this.ope = "four cards of the same suit with any 5th card";
    this.fok = "straight with ace in the center";
    this.qea = "combination of figures which contains jack, queen and king";
    this.mna = "sequence with even or odd successive values";
    this.qjl = "ROYAL FLUSH containing a wild card";
    this.roa = "four twos with any other card";
    this.wwf = "four 5's, 6's, 7's, 8's, 9's, 10's, JACK's, QUEEN's OR KING's";
    this.sdb = "four 2's, 3's or 4's with any other card";
    this.usa = "four aces with any other card";
    this.yhg = "four 2's, 3's OR 4's with an Ace 2,3 or 4";
    this.kpp = "four Aces with 2, 3 or 4";
    this.mrr = "two Kings or Aces";
    this.mjq = "two tens, jacks, queens, kings or aces";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "GAMBLE AGAIN OR COLLECT?";
    this.cqm = "SELECT A CARD";
    this.uhg = "If selected card is higher than dealer: WIN!";
    this.fiw = "If selected card is lower than dealer: lose";
    this.rbo = "If selected card is same as dealer: tie";
    this.tlu = "ACE is highest, two is lowest, no wild cards.";
    this.gqy = "TIE";
    this.jis = "PLAYER";
    this.rso = "DEALER";
    this.yoa = "BEAT THE DEALER TO DOUBLE THE WIN";
    this.bee = "SELECT THE CORRECT VALUE TO DOUBLE THE WIN"
}
ysb.prototype = new wew;

function xlx() {
    this.qyb = "РЈРґРµСЂР¶Р°С‚СЊ";
    this.otn = "РљР РђРЎРќР«Р™";
    this.leg = "BLACK";
    this.pen = "РљР РЈРџРќРђРЇ";
    this.kmf = "РњР•Р›РљРђРЇ";
    this.rqj = "Р РђР—Р”Р•Р›РРўР¬ РљРђР РўР«";
    this.iam = "РЈР”Р•Р Р–РђРўР¬ РљРђР РўР«";
    this.zsk = "Р’Р—РЇРўР¬ РљРђР РўР«";
    this.hoa = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° (РѕРґРЅР° РёР· РЅРёС… РґР¶РѕРєРµСЂ)";
    this.yky = "РўСѓР· - РєРѕСЂРѕР»СЊ - РґР°РјР° - РІР°Р»РµС‚ - 10 РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.rur = "STRAIGHT РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.xyl = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.qlk = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р° Рё РѕРґРЅР° РїР°СЂР°";
    this.obb = "РџСЏС‚СЊ РєР°СЂС‚ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.kto = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ, РЅРѕ РЅРµ РѕРґРЅРѕР№ РјР°СЃС‚Рё";
    this.rok = "РўСЂРё РєР°СЂС‚С‹ РѕРґРЅРѕРіРѕ РЅРѕРјРёРЅР°Р»Р°";
    this.lck = "Р”РІРµ РїР°СЂС‹ Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.ewb = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ РѕРґРЅРѕР№ РјР°СЃС‚Рё Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.ope = "Р”РІР° РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹, РґРІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.fok = "РџСЏС‚СЊ РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ С‡РµСЂРµР· С‚СѓР· (3-2-Рў-Рљ-Р”)";
    this.qea = "РљРѕРјР±РёРЅР°С†РёСЏ РёР· РєР°СЂС‚ СЃ РєР°СЂС‚РёРЅРєР°РјРё: РґРІРµ РІР°Р»РµС‚Р°, РґРІРµ РґР°РјС‹ Рё РєРѕСЂРѕР»СЊ";
    this.mna = "РџСЏС‚СЊ С‡РµС‚РЅС‹С… РёР»Рё РїСЏС‚СЊ РЅРµ С‡РµС‚РЅС‹С… РєР°СЂС‚ РїРѕ РїРѕСЂСЏРґРєСѓ";
    this.qjl = "ROYAL FLUSH СЃ РґР¶РѕРєРµСЂРѕРј";
    this.roa = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2 Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.wwf = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 5, 6, 7, 8, 9, 10, РІР°Р»РµС‚, РґР°РјР° РёР»Рё РєРѕСЂРѕР»СЊ";
    this.sdb = "Р§РµС‚С‹СЂРµ РєР°СЂС‚С‹ 2, 3 РёР»Рё 4 СЃ Р»СЋР±РѕР№ РґРѕРїРѕР». РєР°СЂС‚РѕР№.";
    this.usa = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° Рё РѕРґРЅР° РґРѕРїРѕР». РєР°СЂС‚Р°";
    this.yhg = "Р§РµС‚С‹СЂРµ РґРІРѕР№РєРё, С‚СЂРѕР№РєРё РёР»Рё С‡РµС‚РІРµСЂРєРё СЃ С‚СѓР·РѕРј, РґРІРѕР№РєРѕР№, С‚СЂРѕР№РєРѕР№ РёР»Рё С‡РµС‚РІРµСЂРєРѕР№";
    this.kpp = "Р§РµС‚С‹СЂРµ С‚СѓР·Р° СЃ 2, 3 РёР»Рё 4";
    this.mrr = "Р”РІР° РєРѕСЂРѕР»СЏ РёР»Рё С‚СѓР·Р°";
    this.mjq = "Р”РІРµ РєР°СЂС‚С‹ 10, РІР°Р»РµС‚, РґР°РјР°, РєРѕСЂРѕР»СЊ РёР»Рё С‚СѓР·";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "РЈРґРІРѕРёС‚СЊ РёР»Рё РІР·СЏС‚СЊ?";
    this.cqm = "Р’Р«Р‘Р•Р РРўР• РљРђР РўРЈ";
    this.uhg = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РєСЂСѓРїРЅРµРµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РІС‹РёРіСЂР°РµС‚Рµ!";
    this.fiw = "Р•СЃР»Рё Р’Р°С€Рё РєР°СЂС‚С‹ РјРµР»СЊС‡Рµ, С‡РµРј РєР°СЂС‚С‹ РґРёР»РµСЂР°, Р’С‹ РЅРµ РІС‹РёРіСЂР°РµС‚Рµ";
    this.rbo = "Р•СЃР»Рё РґРѕСЃС‚РѕРёРЅСЃС‚РІРѕ Р’Р°С€РёС… РєР°СЂС‚ СЂР°РІРЅРѕ РєР°СЂС‚Р°Рј РґРёР»РµСЂР°, СЌС‚Рѕ РѕР·РЅР°С‡Р°РµС‚ РЅРёС‡СЊСЋ";
    this.tlu = "РўРЈР— СЃР°РјР°СЏ РєСЂСѓРїРЅР°СЏ, Р”Р’Рђ СЃР°РјР°СЏ РјРµР»РєР°СЏ РєР°СЂС‚Р°, РЅРµС‚ РґР¶РѕРєРµСЂРѕРІ.";
    this.yoa = "Р’Р«РР“Р РђР™РўР• РЈ Р РђР—Р”РђР®Р©Р•Р“Рћ, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ";
    this.gqy = "Р РћР’РќРћ";
    this.jis = "РР“Р РћРљ";
    this.rso = "DEALER";
    this.bee = "Р’Р«Р‘Р•Р РРўР• РџР РђР’РР›Р¬РќР«Р™ РќРћРњРРќРђР›, Р§РўРћР‘Р« РЈР”Р’РћРРўР¬ Р’Р«РР“Р Р«РЁ."
}
xlx.prototype = new nkc;

function nwm() {
    this.qyb = "PARAR";
    this.otn = "ROJO";
    this.leg = "NEGRO";
    this.pen = "ALTO";
    this.kmf = "BAJO";
    this.rqj = "DAR CARTAS";
    this.iam = "RETENER CARTAS";
    this.zsk = "DAR CARTAS";
    this.hoa = "Cinco cartas iguales (sГіlo posible con el comodin)";
    this.yky = "As - rey - dama - sota - 10 del mismo color";
    this.rur = "STRAIGHT del mismo color";
    this.fok = "Escalera con as en el centro";
    this.qea = "CombinaciГіn de figuras con sota, dama y rey";
    this.xyl = "Cuatro cartas del mismo valor";
    this.mna = "Secuencia de cinco cartas pares o impares de valores sucesivos";
    this.qlk = "CombinaciГіn entre THREE OF A KIND y PAIR";
    this.obb = "Cinco cartas del mismo color";
    this.kto = "Cinco cartas puestas en orden pero no del mismo color";
    this.rok = "Tres cartas equivalentes";
    this.lck = "Dos pares diferentes y una quinta carta";
    this.ewb = "Cuatro cartas del mismo color con una quinta carta";
    this.ope = "Dos sotas, damas, reyes o ases";
    this.qjl = "ROYAL FLUSH con comodin";
    this.roa = "Cuatro doses con otra carta";
    this.wwf = "Cuatro 5, 6, 7, 8, 9, 10, sotas, damas o reyes";
    this.sdb = "Cuatro de dos, de tres o de cuatro con otra carta";
    this.usa = "Cuatro ases con otra carta";
    this.yhg = "Cuatro 2, 3 o 4 con un as, una 2, 3 o 4";
    this.kpp = "Cuatro ases con una 2, 3 o 4";
    this.mrr = "Dos reyes o dos ases";
    this.mjq = "Dos 10, sotas, damas, reyes o ases";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "Arriesgar otra vez o tomar el premio?";
    this.cqm = "Tome una carta";
    this.uhg = "Si la carta es mГЎs alta que la del crupier: hay premio!";
    this.fiw = "Si la carta elegida es mГЎs baja que la del crupier: no hay premio!";
    this.rbo = "Si la carta elegida es la misma que la del crupier: QUEDA IGUAL";
    this.tlu = "ACE es la mГЎs alta, dos es la mГЎs baja, no hay comodin.";
    this.yoa = "GANAR LA MANO PARA DOBLAR EL PREMIO";
    this.bee = "SELECCIONAR EL VALOR CORRECTO PARA DOBLAR EL PREMIO";
    this.gqy = "IGUAL";
    this.jis = "JUGADOR";
    this.rso = "MANO"
}
nwm.prototype = new oka;

function obn() {
    this.qyb = "HALTEN";
    this.otn = "ROT";
    this.leg = "SCHWARZ";
    this.pen = "HOCH";
    this.kmf = "TIEF";
    this.rqj = "KARTEN GEBEN";
    this.iam = "KARTEN HALTEN";
    this.zsk = "KARTEN GEBEN";
    this.hoa = "FГјnf gleiche Karten (nur mit Joker mГ¶glich)";
    this.yky = "Ass - KГ¶nig - Dame - Buben - 10er der selben Farbe";
    this.rur = "STRAIGHT in der selben Farbe";
    this.xyl = "Vier wertgleiche Karten";
    this.qlk = "Kombination aus THREE OF A KIND und PAIR";
    this.obb = "FГјnf Karten mit der selben Farbe";
    this.kto = "FГјnf Karten in geordneter Reihenfolge, ohne der selben Farbe";
    this.rok = "Drei gleichwertige Karten";
    this.lck = "Zwei verschiedene Paare und eine 5. Karte";
    this.ewb = "Zwei Buben, Damen, KГ¶nige oder Assen";
    this.ope = "Vier Karten der selben Farbe mit einer 5. Karte";
    this.fok = "Straight mit Ass in der Mitte";
    this.qea = "Bildkarten welche Bube, Dame und KГ¶nig enthalten";
    this.mna = "FГјnf gerade oder ungerade aufeinanderfolgende Werte";
    this.qjl = "ROYAL FLUSH mit Joker";
    this.roa = "Vier Zweier mit einer anderen Karte";
    this.wwf = "Vier 5er, 6er, 7er, 8er, 9er, 10er, Buben, Damen oder KГ¶nige";
    this.sdb = "Vier 2er,3er oder 4er mit einer anderen Karte";
    this.usa = "Vier Assen mit einer anderen Karte";
    this.yhg = "Vier 2er, 3er oder 4er mit einer As, einem 2er, 3er oder 4er";
    this.kpp = "Vier Assen mit einer 2, 3 oder 4";
    this.mrr = "Zwei KГ¶nige oder zwei Assen";
    this.mjq = "Zwei 10er, Buben, Damen, KГ¶nige oder Assen";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "NOCHEINMAL GAMBELN ODER GEWINN NEHMEN?";
    this.cqm = "NIMM EINE KARTE";
    this.uhg = "Wenn die gewГ¤hlte Karte hГ¶her ist als die vom Dealer: Gewinn!";
    this.fiw = "Wenn die gewГ¤hlte Karte niedriger ist als die vom Dealer: Kein Gewinn";
    this.rbo = "Wenn die gewГ¤hlte Karte die selbe ist wie die vom Dealer: GLEICH";
    this.tlu = "Ass ist die hГ¶chste Karte, Zwei die niedrigste, keine Joker.";
    this.yoa = "BESIEGE DEN GEBER UM DEN GEWINN ZU VERDOPPELN";
    this.bee = "WГ„HLE DEN RICHTIGEN WERT UM DEN GEWINN ZU VERDOPPELN";
    this.gqy = "GLEICH";
    this.jis = "SPIELER";
    this.rso = "GEBER"
}
obn.prototype = new lju;

function hpw() {
    this.qyb = "TUTUNUZ";
    this.otn = "KIRMIZI";
    this.leg = "SIYAH";
    this.pen = "YГњKSEK";
    this.kmf = "DERIN";
    this.rqj = "KARTLARI VERД°NД°Z";
    this.iam = "KARTLARI TUTUNUZ";
    this.zsk = "KARTLARI VERД°NД°Z";
    this.hoa = "BeЕџ ayni kartlar (tek jokerle mГјmkГјn)";
    this.yky = "Ass - papaz - dama - valeler - 10lar ayni renkli";
    this.rur = "STRAIGHT ayni renkli";
    this.xyl = "DГ¶rt ayni deДџerde olan kartlar";
    this.qlk = "Kombinasyon THREE OF A KIND ve PAIR le";
    this.obb = "BeЕџ ayni renkli kartlar";
    this.kto = "BeЕџ kartlar dГјzenli bir sД±ralamada, ayni renk siz";
    this.rok = "ГњГ§ ayni deДџerinde olan kartlar";
    this.lck = "Iki deДџiЕџik Г§iftle ve bir 5. kart";
    this.ewb = "Iki valeler, damalar, papazlar veya asslar";
    this.ope = "Ayni renkten dГ¶rt kart ve bir 5. kart";
    this.fok = "AsвЂ™Д± ortada olan Straight";
    this.qea = "Vale, kД±z ve papaz gГ¶steren resimli kartlar";
    this.mna = "Arka arkaya beЕџ Г§ift veya tek deДџer";
    this.qjl = "ROYAL FLUSH  joker le";
    this.roa = "DГ¶rt ikili baЕџka bir kartla";
    this.wwf = "DГ¶rt 5вЂ™li, 6вЂ™lД±, 7вЂ™li, 8вЂ™li, 9вЂ™lu, 10вЂ™lu, vale, kД±z veya papaz";
    this.sdb = "DГ¶rt 2ler,3ler veya 4ler baЕџka bir kartla";
    this.usa = "DГ¶rt as baЕџka bir kartla";
    this.yhg = "Bir as ile bir 2'li, 3'lГј veya 4'lГј ile dГ¶rt adet 2'li, 3'lГј veya 4'lГј";
    this.kpp = "2,3 veya 4 ile dГ¶rt as";
    this.mrr = "Iki papazlar veya iki asslar";
    this.mjq = "Iki 10lar, valeler, damalar, papazlar veya asslar";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "Bir daha riziko veya kazanГ§Д± alД±nД±z?";
    this.cqm = "Bir kart al";
    this.uhg = "SeГ§ilen kart DealerвЂ™inkinden yГјksekse: KazanГ§!";
    this.fiw = "SeГ§ilen kart DealerвЂ™inkinden dГјЕџГјkse: KazanГ§ yok";
    this.rbo = "SeГ§ilen kart DealerвЂ™inkiyle aynД± ise: PAT";
    this.tlu = "ACE is highest, two is lowest, Joker yok";
    this.yoa = "KAДћITLARI DAДћITANI YENEREK KAZANCINI Д°KД°YE KATLAYABД°LД°RSД°N";
    this.gqy = "AYNI";
    this.jis = "OYUNCU";
    this.rso = "DEALER";
    this.bee = "DOДћRU DEДћERД° SEГ‡EREK KAZANCINI Д°KД°YE KATLARSIN"
}
hpw.prototype = new gks;

function yzt() {
    this.qyb = "DRЕЅET";
    this.otn = "CERVENГЃ";
    this.leg = "CERNГЃ";
    this.pen = "VELKГЃ";
    this.kmf = "MALГЃ";
    this.rqj = "DГЃT KARTY";
    this.iam = "KARTY DRЕЅET";
    this.zsk = "DГЃT KARTY";
    this.hoa = "Pet stejnГЅch karet(moЕѕnГ© pouze s Jokerem)";
    this.yky = "Eso - krГЎl - krГЎlovna - kluk - desГ­tka stejnГ© barvy";
    this.rur = "STRAIGHT s kartami stejnГ© barvy";
    this.xyl = "Ctyri karty stejnГ© hodnoty";
    this.qlk = "Kombinace z THREE OF A KIND a PAIR";
    this.obb = "Pet karet stejnГ© barvy";
    this.kto = "Pet karet usporГЎdanГЅch v rade, ale ne stejnГ© barvy";
    this.rok = "Tri karty stejnГ© hodnoty";
    this.lck = "Dve odliЕЎnГ© dvojice a 5. karta";
    this.ewb = "Dva klucii, krГЎlovny, krГЎlovГ© nebo esa";
    this.ope = "Ctyrii karty stejnГ© barvy s 5. kartou";
    this.fok = "postupka s esem uprostred";
    this.qea = "kombinace obsahujГ­cГ­ pouze postavy (jack, queen  a king)";
    this.mna = "postupka vytvorenГЎ ze sudГЅch nebo lichГЅch za sebou nГЎsledujГ­cГ­ch cГ­sel";
    this.qjl = "ROYAL FLUSH s Jokerem";
    this.roa = "Ctyri dvojky s jinou kartou";
    this.wwf = "ДЊtyЕ™i 5ky, 6ky, 7ky,8ky,9ky,10ky, kluci,krГЎlovny nebo krГЎlovГ©";
    this.sdb = "ДЊtyЕ™i 2ky,3ky nebo 4ky s dalЕЎГ­ kartou";
    this.usa = "ДЊtyri Esa s dalЕЎГ­ kartou";
    this.yhg = "ДЊtyЕ™i 2, 3 nebo 4 s Esem, 2,3 nebo 4";
    this.kpp = "ДЊtyЕ™i Esa s jednou 2,3 nebo 4";
    this.mrr = "Dva KrГЎlovГ© nebo dvД› Esa";
    this.mjq = "Dve desГ­tky, kluci, krГЎlovny, krГЎlovГ© nebo esa";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "HRГЃT ZNOVU NEBO VZГЌT VГќHRU?";
    this.cqm = "ZVOL KARTU";
    this.uhg = "Je-li zvolenГЎ karta vyЕЎЕЎГ­ neЕѕ dealerova: VГЅhra!";
    this.fiw = "Je-li  zvolenГЎ karta niЕѕЕЎiГ­ neЕѕ dealerova: ЕЅГЎdnГЎ vГЅhra!";
    this.rbo = "Je-li  zvolenГЎ karta shodnГЎ s dealerovou: nerozhodnГЅ vГЅsledek";
    this.tlu = "Eso je nejvyЕЎЕЎГ­, dvД› je nejniЕѕЕЎГ­, ЕѕГЎdnГ© divokГ© karty.";
    this.yoa = "PORAZIT DEALERA KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.bee = "VYBRAT SPRГЃVNOU HODNOTU KE ZDVOJNГЃSOBENГЌ VГќHRY";
    this.gqy = "STEJNГ‰";
    this.jis = "HRГЃДЊ";
    this.rso = "DEALER"
}
yzt.prototype = new rhl;

function sos() {
    this.qyb = "HOIA";
    this.otn = "PUNANE";
    this.leg = "MUST";
    this.pen = "KГ•RGE";
    this.kmf = "MADAL";
    this.rqj = "JAGA KAARDID";
    this.iam = "HOIA KAARTE";
    this.zsk = "JAGA KAARDID";
    this.hoa = "viis vГµrdvГ¤Г¤rset kaarti (vГµimalik ainult koos Wild kaardiga)";
    this.yky = "sama masti Г¤ss - kuningas - emand - soldat - kГјmme";
    this.rur = "RIDA samavГ¤rvi kaartidest";
    this.xyl = "neli sama vГ¤Г¤rtusega kaarti";
    this.qlk = "kombinatsioon KOLMIK ja PAAR";
    this.obb = "viis sama vГ¤rvi kaarti";
    this.kto = "viis jГ¤rjestikust, kuid erivГ¤rvi kaarti";
    this.rok = "kolm vГµrdvГ¤Г¤rset kaarti";
    this.lck = "kaks kindlat paari ja ГјkskГµik milline viies kaart";
    this.ewb = "kaks soldatit, emandat, kuningat vГµi Г¤ssa";
    this.ope = "neli sama vГ¤rvi kaarti koos ГјkskГµik millise viienda kaardiga";
    this.qjl = "KUNINGLIK MASTIRIDA, mis sisaldab Wild kaarti";
    this.roa = "neli kahte koos ГјkskГµik millise muu kaardiga";
    this.wwf = "neli viite, kuute, seitset, kaheksat, Гјheksat, kГјmmet, Soldatit, Emandat vГµi Kuningat";
    this.sdb = "neli kahte, kolme vГµi nelja koos ГјkskГµik millise muu kaardiga";
    this.usa = "neli Г¤ssa ГјkskГµik millise muu kaardiga";
    this.yhg = "Neli 2-te, 3-e vГµi 4-ja koos 2, 3, vГµi 4";
    this.kpp = "Neli Г¤ssa ja 2, 3, vГµi 4";
    this.mrr = "kaks Kuningat vГµi Г„ssa";
    this.mjq = "kaks kГјmmet, soldatit, emandat, kuningat vГµi Г¤ssa";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.gqy = "VIIK";
    this.jis = "PLAYER";
    this.rso = "DEALER";
    this.pow = "MГ„NGI VEEL VГ•I VГ•TA VГ•IT?";
    this.uhg = "Kui valitud kaart on suurem kui diileril: OLED VГ•ITNUD!";
    this.fiw = "Kui valitud kaart on vГ¤iksem kui diileril: kaotad";
    this.rbo = "Kui valitud kaart on diileri kaardiga vГµrdne: viik";
    this.tlu = "Г„SS on kГµrgeim, kaks madalaim, metsikuid kaarte ei ole.";
    this.fok = "rida Г¤ssaga keskel";
    this.qea = "kombinatsioon soldatist, emandast ja kuningast";
    this.mna = "kaheste vahedega rida";
    this.cqm = "VALI KAART";
    this.yoa = "VГ•IDA DIILERIT, ET KAHEKORDISTADA OMA VГ•IT";
    this.bee = "VГ•IDU DUUBELDAMISEKS VALI Г•IGE VГ„Г„RTUS"
}
sos.prototype = new caw;

function apv() {
    this.qyb = "ОљОЎО‘О¤О—ОЈО¤О•";
    this.otn = "ОљОџОљОљО™ОќОџ";
    this.leg = "ОњО‘ОҐОЎОџ";
    this.pen = "ОҐОЁО—О›Оџ";
    this.kmf = "О§О‘ОњО—О›Оџ";
    this.rqj = "ОњОџО™ОЎО‘ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.iam = "ОљОЎО‘О¤О—ОЈО¤О• О§О‘ОЎО¤О™О‘";
    this.zsk = "О¤ОЎО‘О’О—ОћО¤О• О§О‘ОЎО¤О™О‘";
    this.hoa = "ПЂО­ОЅП„Оµ ОЇОґО№О± П‡О±ПЃП„О№О¬ (ОјПЊОЅО· ПЂО№ОёО±ОЅПЊП„О·П„О± ОјОµ П„Ої Joker)";
    this.yky = "О¬ПѓПѓОїП‚ - ПЃО®ОіО±П‚ - ОЅП„О¬ОјО± - ОІО±О»О­П‚ - ОґО­ОєО± О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.rur = "STRAIGHT ОјОµ П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.xyl = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ ОјОµ П„О·ОЅ ОЇОґО№О± О±ОѕОЇО±";
    this.qlk = "ПѓП…ОЅОґП…О±ПѓОјПЊП‚ О±ПЂПЊ THREE OF A KIND ОєО±О№ О­ОЅО± PAIR";
    this.obb = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ОјОµ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.kto = "ПЂО­ОЅП„Оµ П‡О±ПЃП„О№О¬ ПѓОµ О±ПЌОѕОїП…ПѓО± ПѓОµО№ПЃО¬, О±О»О»О¬ ПЊП‡О№ ОЇОґО№Ої П‡ПЃПЋОјО±";
    this.rok = "П„ПЃОЇО± П‡О±ПЃП„О№О¬ ОЇОґО№О±П‚ О±ОѕОЇО±П‚";
    this.lck = "ОґПЌОї ОґО№О±П†ОїПЃОµП„О№ОєО¬ О¶ОµП…ОіО¬ПЃО№О± ОєО±О№ ОїПЂОїО№ОїОґО®ПЂОїП„Оµ ПЂО­ОјПЂП„Ої П‡О±ПЃП„ОЇ";
    this.ewb = "ОґПЌОї ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.ope = "П„О­ПѓПѓОµПЃО± П‡О±ПЃП„О№О¬ О±ПЂПЊ П„Ої ОЇОґО№Ої П‡ПЃПЋОјО± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ ПЂО­ОјПЂП„О· ОєО¬ПЃП„О±";
    this.fok = "Straight ОјОµ О¬ПѓПѓОї ПѓП„Ої ОєО­ОЅП„ПЃОї";
    this.qea = "ПѓП…ОЅОґО№О±ПѓОјПЊП‚ О±ПЂПЊ П†О№ОіОїПЌПЃОµП‚ ПЂОїП… ОІОіО±ОЇОЅОµО№ ОІО±О»О­П‚, ОЅП„О¬ОјО± ОєО±О№ ПЃО®ОіО±П‚";
    this.mna = "ПѓОµО№ПЃО¬ ОјО±О¶ОЇ ОјОµ ОјОїОЅО¬ О® О¶П…ОіО¬ О­П‡ОµО№ ОґО№О±ОґОїП‡О№ОєО® О±ОѕОЇО±";
    this.qjl = "ROYAL FLUSH ПЂОµПЃО№О­П‡ОµО№ ОєО±О№ Joker";
    this.roa = "П„О­ПѓПѓОµПЃО± ОґП…О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.wwf = "П„О­ПѓПѓОµПЃО± 5's, 6's,7's, 8's, 9's, 10's, О’О‘О›О•О”О•ОЈ, ОќО¤О‘ОњО•ОЈ О® ОЎО—О“О•ОЈ";
    this.sdb = "О¤О­ПѓПѓОµПЃО± 2's О® 4's ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.usa = "П„О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ ОєО¬ОёОµ О¬О»О»О· ОєО¬ПЃП„О±";
    this.yhg = "О¤О­ПѓПѓОµПЃО± 2О¬ПЃО№О±, 3О¬ПЃО№О± О® 4О¬ПЃО№О± ОјО±О¶ОЇ ОјОµ О­ОЅО±ОЅ О†ПѓПѓОї, О­ОЅО± 2О¬ПЃО№, 3О¬ПЃО№ О® 4О¬ПЃО№";
    this.kpp = "О¤О­ПѓПѓОµПЃО№П‚ О¬ПѓПѓОїО№ ОјО±О¶ОЇ ОјОµ О­ОЅО± 2, 3 О® 4";
    this.mrr = "ОґПЌОї ОЎО®ОіОµП‚ О® О†ПѓПѓОїО№";
    this.mjq = "ОґПЌОї ОґОµОєО¬ПЃО№О±, ОІО±О»О­ОґОµП‚, ОЅП„О¬ОјОµП‚, ПЃО®ОіОµП‚ О® О¬ПѓПѓОїО№";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.yoa = "ОљО•ОЎО”О™ОЈО¤О• О¤ОџОќ ОќО¤О™О›О•ОЎ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ";
    this.gqy = "О™ОЈОџО О‘О›О™О‘";
    this.jis = "О О‘IО§О¤О—ОЈ";
    this.rso = "ОќО¤HО›О•ОЎ";
    this.pow = "ОћО‘ОќA ОЎIОЈОљОџ H О О‘ОЎО‘О›О‘О’H;";
    this.uhg = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјОµОіО±О»ПЌП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: ОљО•ОЎО”О™О–О•О¤О•!";
    this.fiw = "О‘ОЅ О­П‡ОµП„Оµ П‡О±ПЃП„ОЇ ОјО№ОєПЃПЊП„ОµПЃОї О±ПЂПЊ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О§О‘ОќО•О¤О•!";
    this.rbo = "О‘ОЅ О­П‡ОµП„Оµ П„Ої ОЇОґО№Ої П‡О±ПЃП„ОЇ ОјОµ П„ОїОЅ ОєПЃОїП…ПЂО№О­ПЃО·: О№ПѓОїОІО±ОёОјО®П„Оµ";
    this.tlu = "О‘ПѓПѓОїП‚ ОµОЇОЅО±О№ П„Ої ОјОµОіО±О»ПЌП„ОµПЃОї, ОґПЌОї ОµОЇОЅО±О№ П„Ої ОјО№ОєПЃПЊП„ОµПЃОї, ОґОµОЅ П…ПЂО¬ПЃП‡ОµО№ О¤О¶ПЊОєОµПЃ";
    this.cqm = "О•О О™О›EОћО¤О• ОљAОЎО¤О‘";
    this.bee = "О•О О™О›О•ОћО¤О• О¤О— ОЈО©ОЈО¤О— О‘ОћО™О‘ О“О™О‘ ОќО‘ О”О™О О›О‘ОЈО™О‘ОЈО•О¤О• О¤Оџ ОљО•ОЎО”ОџОЈ ОЈО‘ОЈ"
}
apv.prototype = new pbc;

function wcn() {
    this.qyb = "Р—РђР”РЄР Р–РђРќР";
    this.otn = "Р§Р•Р Р’Р•РќРђ";
    this.leg = "Р§Р•Р РќРђ";
    this.pen = "Р“РћР›РЇРњРђ";
    this.kmf = "РњРђР›РљРђ";
    this.rqj = "Р РђР—Р”РђР’РђРќР• РќРђ РљРђР РўРРўР•";
    this.iam = "Р—РђРџРђР—Р•РўР• РљРђР РўР";
    this.zsk = "РР—РўР•Р“Р›Р•РўР• РљРђР РўР";
    this.hoa = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё (СЃР°РјРѕ СЃ РґР¶РѕРєРµСЂ)";
    this.yky = "РђСЃРµ - РџРѕРї - Р”Р°РјР° - Р’Р°Р»Рµ - 10 РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.rur = "РљР•РќРўРђ СЃ РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚";
    this.xyl = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.qlk = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ С‚СЂРё РµРґРЅР°РєРІРё РєР°СЂС‚Рё Рё РµРґРёРЅ С‡РёС„С‚";
    this.obb = "РїРµС‚ РµРґРЅР°РєРІРё РєР°СЂС‚Рё";
    this.kto = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё, РЅРѕ РѕС‚ СЂР°Р·Р»РёС‡РµРЅ С†РІСЏС‚";
    this.rok = "С‚СЂРё РєР°СЂС‚Рё СЃ РµРґРЅР° Рё СЃСЉС‰Р° СЃС‚РѕР№РЅРѕСЃС‚";
    this.lck = "РґРІРµ СЂР°Р·Р»РёС‡РЅРё РґРІРѕР№РєРё Рё РЅСЏРєРѕСЏ РґСЂСѓРіР° 5-С‚Р° РєР°СЂС‚Р°";
    this.ewb = "РґРІРµ Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.ope = "С‡РµС‚РёСЂРё РєР°СЂС‚Рё РѕС‚ РµРґРёРЅ Рё СЃСЉС‰ С†РІСЏС‚ СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.qjl = "РљР•РќРў Р¤Р›Р•РЁ Р РћРЇР› СЃ РґР¶РѕРєРµСЂ";
    this.roa = "С‡РµС‚РёСЂРё 2-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.wwf = "С‡РµС‚РёСЂРё 5-С†Рё, 6-С†Рё, 7-С†Рё, 8-С†Рё, 9-РєРё, 10-РєРё, Р’РђР›Р•РўРђ, Р”РђРњР РёР»Рё РџРћРџРћР’Р•";
    this.sdb = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё РёР»Рё 4-РєРё СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.usa = "С‡РµС‚РёСЂРё РђСЃР° СЃ РЅСЏРєРѕСЏ РґСЂСѓРіР° РєР°СЂС‚Р°";
    this.yhg = "С‡РµС‚РёСЂРё 2-РєРё, 3-РєРё, РёР»Рё 4-РєРё СЃ РђСЃ, 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.kpp = "С‡РµС‚РёСЂРё РђСЃР° СЃ 2-РєР°, 3-РєР° РёР»Рё 4-РєР°";
    this.mrr = "РґРІР° РџРѕРїР° РёР»Рё РђСЃР°";
    this.mjq = "РґРІРµ 10-РєРё, Р’Р°Р»РµС‚Р°, Р”Р°РјРё, РџРѕРїР° РёР»Рё РђСЃР°";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.gqy = "РќР•Р Р•РЁР•РќРћ";
    this.jis = "РР“Р РђР§";
    this.rso = "Р”РР›РЄР ";
    this.pow = "Р”РЈР‘Р›РР РђР™РўР• РћРўРќРћР’Рћ РР›Р РџР РР‘Р•Р Р•РўР•?";
    this.uhg = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РіРѕР»СЏРјР° РѕС‚ РєР°СЂС‚Р°С‚Р° РЅР° РґРёР»СЉСЂР°:РџР•Р§Р•Р›РРўР•!";
    this.fiw = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° РєР°СЂС‚Р° Рµ РїРѕ-РјР°Р»РєР° РѕС‚ РґРёР»СЉСЂРѕРІР°С‚Р°:Р“РЈР‘РРўР•";
    this.rbo = "РђРєРѕ РёР·Р±СЂР°РЅР°С‚Р° Рµ СЃСЉС‰Р°С‚Р°:РќРµСЂРµС€РµРЅРѕ";
    this.tlu = "РђСЃ Рµ РЅР°Р№-РіРѕР»СЏРјР°С‚Р°, 2-РєР° Рµ РЅР°Р№-РјР°Р»РєР°С‚Р°, Р±РµР· РґР¶РѕРєРµСЂ РєР°СЂС‚Рё.";
    this.fok = "РїРµС‚ РїРѕСЂРµРґРЅРё РєР°СЂС‚Рё СЃ РђСЃ РІ СЃСЂРµРґР°С‚Р°";
    this.qea = "РєРѕРјР±РёРЅР°С†РёСЏ РѕС‚ РєР°СЂС‚Рё РІ РєРѕРёС‚Рѕ РёРјР°(K -Q -J -РџРѕРї, Р”Р°РјР°, Р’Р°Р»Рµ)";
    this.mna = "РїРµС‚ РєР°СЂС‚Рё СЃ С‡РµС‚РЅРё РёР»Рё РЅРµС‡РµС‚РЅРё СЃС‚РѕР№РЅРѕСЃС‚Рё";
    this.cqm = "Р—РђР”Р РЄР–РўР• РљРђР РўР";
    this.yoa = "РџРћР‘Р•Р”Р Р”РР›РЄР Рђ, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ";
    this.bee = "РР—Р‘Р•Р Р РџР РђР’РР›РќРђРўРђ РЎРўРћР™РќРћРЎРў, Р—Рђ Р”Рђ РЈР”Р’РћРРЁ РџР•Р§РђР›Р‘РђРўРђ"
}
wcn.prototype = new kui;

function zvy() {
    this.qyb = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ—";
    this.otn = "бѓ¬бѓбѓ—бѓ”бѓљбѓ";
    this.leg = "бѓЁбѓђбѓ•бѓ";
    this.pen = "бѓ›бѓђбѓ¦бѓђбѓљбѓ";
    this.kmf = "бѓ“бѓђбѓ‘бѓљбѓђ";
    this.rqj = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.iam = "бѓ“бѓђбѓбѓ­бѓбѓ бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ”бѓ‘бѓ";
    this.zsk = "бѓђбѓбѓ¦бѓ”бѓ— бѓ‘бѓђбѓ бѓђбѓ—бѓ";
    this.hoa = "бѓ®бѓЈбѓ—бѓ бѓбѓ’бѓбѓ•бѓ” бѓ›бѓњбѓбѓЁбѓ•бѓњбѓ”бѓљбѓќбѓ‘бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ (бѓЁбѓ”бѓЎбѓђбѓ«бѓљбѓќбѓђ бѓ›бѓќбѓћбѓќбѓ•бѓ”бѓ‘бѓЈбѓљ бѓбѓҐбѓњбѓђбѓЎ бѓ›бѓ®бѓќбѓљбѓќбѓ“ бѓЇбѓќбѓ™бѓ”бѓ бѓбѓ—)";
    this.yky = "бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓўбѓЈбѓ–бѓ - бѓ›бѓ”бѓ¤бѓ” - бѓ“бѓђбѓ›бѓђ - бѓ•бѓђбѓљбѓ”бѓўбѓ - бѓђбѓ—бѓбѓђбѓњбѓ";
    this.rur = "Straight бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ”бѓ‘бѓбѓ—";
    this.xyl = "бѓбѓ’бѓбѓ•бѓ” бѓбѓ”бѓ бѓђбѓ бѓҐбѓбѓбѓЎ бѓќбѓ—бѓ®бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.qlk = "Three Of A Kind-бѓбѓЎбѓђ бѓ“бѓђ бѓ”бѓ бѓ—бѓ Pair-бѓбѓЎ бѓ™бѓќбѓ›бѓ‘бѓбѓњбѓђбѓЄбѓбѓђ";
    this.obb = "бѓ®бѓЈбѓ—бѓ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.kto = "бѓ®бѓЈбѓ—бѓ бѓ—бѓђбѓњбѓ›бѓбѓ›бѓ“бѓ”бѓ•бѓ бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.rok = "бѓЎбѓђбѓ›бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ";
    this.lck = "бѓќбѓ бѓ бѓќбѓ  бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ  бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.ewb = "бѓќбѓ бѓ бѓ—бѓђбѓњбѓђбѓ‘бѓђбѓ бѓ бѓ™бѓђбѓ бѓўбѓ бѓ•бѓђбѓљбѓ”бѓўбѓбѓ— бѓ–бѓ”бѓ•бѓбѓ—бѓ™бѓ”бѓњ";
    this.ope = "бѓќбѓ—бѓ®бѓ бѓЎбѓ®бѓ•бѓђбѓ“бѓђбѓЎбѓ®бѓ•бѓђ бѓ”бѓ бѓ—бѓ бѓ“бѓђ бѓбѓ’бѓбѓ•бѓ” бѓ¤бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ";
    this.fok = "Straight бѓЁбѓЈбѓђбѓЁбѓ бѓўбѓЈбѓ–бѓбѓ—";
    this.qea = "5 бѓњбѓђбѓ®бѓђбѓўбѓбѓђбѓњбѓ бѓ™бѓђбѓ бѓўбѓ";
    this.mna = "Straight бѓЎбѓђбѓ“бѓђбѓЄ бѓ§бѓќбѓ•бѓ”бѓљбѓ бѓ›бѓ”бѓќбѓ бѓ” бѓ™бѓђбѓ бѓўбѓ бѓђбѓ™бѓљбѓбѓђ";
    this.qjl = "ROYAL FLUSH бѓ бѓќбѓ›бѓ”бѓљбѓбѓЄ бѓЁбѓ”бѓбѓЄбѓђбѓ•бѓЎ бѓЇбѓќбѓ™бѓ”бѓ бѓЎ";
    this.roa = "бѓќбѓ—бѓ®бѓ бѓќбѓ бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.wwf = "бѓќбѓ—бѓ®бѓ 5-бѓбѓђбѓњбѓ, 6-бѓбѓђбѓњбѓ, 7-бѓбѓђбѓњбѓ, 8-бѓбѓђбѓњбѓ, 9-бѓбѓђбѓњбѓ, 10-бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ бѓђбѓњ бѓ›бѓ”бѓ¤бѓ”";
    this.sdb = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.usa = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ бѓњбѓ”бѓ‘бѓбѓЎбѓ›бѓбѓ”бѓ  бѓЎбѓ®бѓ•бѓђ бѓ™бѓђбѓ бѓўбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.yhg = "бѓќбѓ—бѓ®бѓ 2-бѓбѓђбѓњбѓ, 3-бѓбѓђбѓњбѓ бѓђбѓњ 4-бѓбѓђбѓњбѓ бѓўбѓЈбѓ–бѓ—бѓђбѓњ 2-бѓбѓђбѓњбѓ—бѓђбѓњ, 3-бѓбѓђбѓњбѓ—бѓђбѓњ бѓђбѓњ 4-бѓбѓђбѓњбѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.kpp = "бѓќбѓ—бѓ®бѓ бѓўбѓЈбѓ–бѓ 2, 3 бѓђбѓњ 4-бѓ—бѓђбѓњ бѓ”бѓ бѓ—бѓђбѓ“";
    this.mrr = "бѓќбѓ бѓ бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.mjq = "бѓќбѓ бѓ бѓђбѓ—бѓбѓђбѓњбѓ, бѓ•бѓђбѓљбѓ”бѓўбѓ, бѓ“бѓђбѓ›бѓђ, бѓ›бѓ”бѓ¤бѓ” бѓђбѓњ бѓўбѓЈбѓ–бѓ";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "бѓбѓ—бѓђбѓ›бѓђбѓЁбѓ”бѓ— бѓђбѓњ бѓђбѓбѓ¦бѓ”бѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ?";
    this.cqm = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓ™бѓђбѓ бѓўбѓ";
    this.uhg = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ›бѓђбѓ¦бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ›бѓќбѓбѓ’бѓ”бѓ‘бѓ—!";
    this.fiw = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓ“бѓбѓљбѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ–бѓ” бѓЈбѓ¤бѓ бѓќ бѓ“бѓђбѓ‘бѓђбѓљбѓбѓђ: бѓ—бѓҐбѓ•бѓ”бѓњ бѓ¬бѓђбѓђбѓ’бѓ”бѓ‘бѓ—";
    this.rbo = "бѓ—бѓЈ бѓђбѓ бѓ©бѓ”бѓЈбѓљбѓ бѓ™бѓђбѓ бѓўбѓ бѓбѓ’бѓбѓ•бѓ”бѓђ бѓ бѓђбѓЄ бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓђбѓҐбѓ•бѓЎ: бѓђбѓњбѓ’бѓђбѓ бѓбѓЁбѓбѓђ бѓ¤бѓ бѓ”";
    this.tlu = "бѓўбѓЈбѓ–бѓ бѓђбѓ бѓбѓЎ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ›бѓђбѓ¦бѓђбѓљбѓ, бѓќбѓ бѓбѓђбѓњбѓ бѓ§бѓ•бѓ”бѓљбѓђбѓ–бѓ” бѓ“бѓђбѓ‘бѓђбѓљбѓ, бѓЇбѓќбѓ™бѓ”бѓ бѓбѓЎ бѓ™бѓђбѓ бѓўбѓ бѓђбѓ  бѓ—бѓђбѓ›бѓђбѓЁбѓ“бѓ”бѓ‘бѓђ.";
    this.gqy = "бѓ¤бѓ бѓ”";
    this.jis = "бѓ›бѓќбѓ—бѓђбѓ›бѓђбѓЁбѓ”";
    this.rso = "бѓ“бѓбѓљбѓ”бѓ бѓ";
    this.yoa = "бѓ›бѓќбѓЈбѓ’бѓ”бѓ— бѓ“бѓбѓљбѓ”бѓ бѓЎ бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ";
    this.bee = "бѓђбѓбѓ бѓ©бѓбѓ”бѓ— бѓЎбѓ¬бѓќбѓ бѓ бѓЎбѓбѓ“бѓбѓ“бѓ” бѓ бѓќбѓ› бѓ’бѓђбѓђбѓќбѓ бѓ›бѓђбѓ’бѓќбѓ— бѓ›бѓќбѓ’бѓ”бѓ‘бѓђ"
}
zvy.prototype = new sec;

function yrt() {
    this.qyb = "TART";
    this.otn = "PIROS";
    this.leg = "FEKETE";
    this.pen = "MAGAS";
    this.kmf = "ALACSONY";
    this.rqj = "KГ‰RJEN LAPOKAT";
    this.iam = "TARTSON LAPOKAT";
    this.zsk = "KГ‰RJEN LAPOKAT";
    this.hoa = "Г¶t egyforma lap (az Г¶tГ¶dik a JOKER)";
    this.yky = "ГЎsz - kirГЎly - dГЎma - bubi - tizes egy szГ­nben";
    this.rur = "SOR egyforma szГ­nЕ± lapokbГіl";
    this.xyl = "nГ©gy egyforma lap";
    this.qlk = "hГЎrom Г©s kettЕ‘ egyforma lap";
    this.obb = "Г¶t egyforma szГ­nЕ± lap";
    this.kto = "Г¶t sorban kГ¶vetkezЕ‘ lap nem egyforma szГ­nben";
    this.rok = "hГЎrom egyforma lap";
    this.lck = "kettЕ‘ pГЎr Г©s mГ©g egy lap";
    this.ewb = "kettЕ‘ Bubi, DГЎma, KirГЎly vagy ГЃsz";
    this.ope = "nГ©gy egyforma Г©s egy mГЎsmilyen szГ­nЕ± lap";
    this.fok = "5 sorban kГ¶vetkezЕ‘ lap A-val a kГ¶zГ©pen";
    this.qea = "5 'kГ©pes' lap";
    this.mna = "5 egymГЎst kГ¶vetЕ‘ pГЎros vagy pГЎratlan lap";
    this.qjl = "ROYAL FLUSH amelyben van Joker";
    this.roa = "nГ©gy kettes Г©s mГ©g egy lap";
    this.wwf = "nГ©gy 5-Г¶s, 6-os, 7-es, 8-as, 9-es, 10-es, Bubi, DГЎma vagy KirГЎly";
    this.sdb = "nГ©gy kettes, hГЎrmas vagy nГ©gyes + egy lap";
    this.usa = "nГ©gy ГЎsz Г©s mГ©g egy lap";
    this.yhg = "nГ©gy 2, 3 vagy 4 meg egy ГЎsz, 2, 3 vagy 4";
    this.kpp = "nГ©gy ГЃsz Г©s 2, 3 vagy 4";
    this.mrr = "kettЕ‘ KirГЎly vagy ГЃsz";
    this.mjq = "kettЕ‘ tizes, bubi, dГЎma, kirГЎly vagy ГЎsz";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "SZOROZZA VAGY FELГЌRJA?";
    this.cqm = "VГЃLASSZON EGY LAPOT";
    this.uhg = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl nagyobb: NYERT!";
    this.fiw = "Ha a kivГЎlasztott lap az osztГі lapjГЎtГіl kisebb: veszГ­tett";
    this.rbo = "Ha a kГ©t lap egyforma: dГ¶ntetlen";
    this.tlu = "Az ГЃSZ a legnagyobb a kettes pedig a legkisebb lap.";
    this.gqy = "DГ–NTETLEN";
    this.jis = "JГЃTГ‰KOS";
    this.rso = "OSZTГ“";
    this.yoa = "GYЕђZZE LE AZ OSZTГ“T, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT";
    this.bee = "VГЃLASSZA A MEGFELELЕђT, HOGY MEGDUPLГЃZZA A NYEREMГ‰NYT"
}
yrt.prototype = new zuf;

function wfr() {
    this.qyb = "ЕўINERE";
    this.otn = "ROЕћU";
    this.leg = "NEGRU";
    this.pen = "MARE";
    this.kmf = "MICД‚";
    this.rqj = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.iam = "ЕўINERE CД‚RЕўI";
    this.zsk = "ГЋMPД‚RЕўIRE CД‚RЕўI";
    this.hoa = "Cinci cДѓrЕЈi identice (posibil numai cu joker)";
    this.yky = "As - rege - damДѓ - valet - zece de aceeaЕџi culoare";
    this.rur = "STRAIGHT cu cДѓrЕЈi de aceeaЕџi culoare";
    this.xyl = "Patru cДѓrЕЈi de aceeaЕџi valoare";
    this.qlk = "CombinaЕЈie din THREE OF A KIND Еџi PAIR";
    this.obb = "Cinci cДѓrЕЈi de aceeaЕџi culoare";
    this.kto = "Cinci cДѓrЕЈi Г®n succesiune ordonatДѓ, nu de aceeaЕџi culoare";
    this.rok = "Trei cДѓrЕЈi egale ca valoare";
    this.lck = "DouДѓ perechi diferite Еџi o a cincea carte";
    this.ewb = "DouДѓ cДѓrЕЈi cu valeЕЈi, dame, regi sau aЕџi";
    this.ope = "Patru cДѓrЕЈi de aceeaЕџi culoare cu o a 5-a carte";
    this.fok = "Straight cu as Г®n mijloc";
    this.qea = "CombinaЕЈie de cДѓrЕЈi cu figuri cu valet, damДѓ Еџi rege";
    this.mna = "Cinci valori succesive cu soЕЈ sau fДѓrДѓ soЕЈ";
    this.qjl = "ROYAL FLUSH cu joker";
    this.roa = "Patru cДѓrЕЈi de doi cu o altДѓ carte";
    this.wwf = "Patru cДѓrЕЈi de 5, 6, 7, 8, 9, 10, valeЕЈi, dame sau regi";
    this.sdb = "Patru cДѓrЕЈi de 2, 3 sau 4 cu o altДѓ carte";
    this.usa = "Patru aЕџi cu o altДѓ carte";
    this.yhg = "Patru cДѓrЕЈi de 2, 3 sau 4 cu un as, o carte de 2, 3 sau 4";
    this.kpp = "Patru aЕџi cu o carte de 2, 3 sau 4";
    this.mrr = "Doi regi sau doi aЕџi.";
    this.mjq = "DouДѓ cДѓrЕЈi de 10, valeЕЈi, dame, regi sau aЕџi";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "GAMBLE SAU RIDICAREA CГ‚ЕћTIGULUI?";
    this.cqm = "ALEGEЕўI O CARTE";
    this.uhg = "CГўnd cartea aleasДѓ este mai mare decГўt cea a dealerului: cГўЕџtig!";
    this.fiw = "CГўnd cartea aleasДѓ este mai micДѓ decГўt cea a dealerului: fДѓrДѓ cГўЕџtig";
    this.rbo = " CГўnd cartea aleasДѓ este identicДѓ cu cea a dealerului: egal";
    this.tlu = "As este cartea cea mai mare, 2 este cartea cea mai micДѓ, fДѓrДѓ joker.";
    this.gqy = "EGAL";
    this.jis = "PLAYER";
    this.rso = "DEALER";
    this.yoa = "ГЋNVINGE DEALERUL PENTRU DUBLAREA PROFITULUI";
    this.bee = "SELECTEAZД‚ VALOAREA CORECTД‚ PENTRU DUBLAREA CГ‚ЕћTIGULUI"
}
wfr.prototype = new fue;

function hvp() {
    this.qyb = "HELD";
    this.otn = "VERMELHO";
    this.leg = "PRETO";
    this.pen = "ALTO";
    this.kmf = "BAIXO";
    this.rqj = "DAR CARTAS";
    this.iam = "RETER CARTAS";
    this.zsk = "DAR CARTAS";
    this.hoa = "Cinco cartas iguais com o mesmo valor (sГі Г© possГ­vel com curinga)";
    this.yky = "ГЃs - Rei - Dama - Valete - Dez de um naipe";
    this.rur = "STRAIGHT do mesmo naipe";
    this.xyl = "Quatro cartas do mesmo valor";
    this.qlk = "CombinaГ§ГЈo de THREE OF A KIND e PAIR";
    this.obb = "Cinco cartas com o mesmo naipe";
    this.kto = "Cinco cartas sucessivas, sem o mesmo naipe";
    this.rok = "TrГЄs cartas do mesmo valor";
    this.lck = "Dois pares diferentes e uma 5ВЄ carta";
    this.ewb = "Dois valetes, damas, reis ou ГЎses";
    this.ope = "Quatro cartas do mesmo naipe com uma 5ВЄ";
    this.fok = "Uma escada com um ГЎs no centro";
    this.qea = "Uma combinaГ§ГЈo somente de figuras";
    this.mna = "SequГЄncia de pares ou Г­mpares de sucessivos valores";
    this.qjl = "ROYAL FLUSH com curinga";
    this.roa = "Quatro dois com uma outra carta";
    this.wwf = "Quatro 5, 6, 7, 8, 9, 10, valete, dama, rei";
    this.sdb = "Quatro 2, 3 ou 4 com outra carta";
    this.usa = "Quatro ГЎses com uma outra carta";
    this.yhg = "Quatro 2,3 ou 4 A, 2, 3 ou 4";
    this.kpp = "Quatro ГЎses com 2,3 ou 4";
    this.mrr = "Dois reis ou dois ГЎses";
    this.mjq = "Dois 10, valetes, damas, reis ou ГЎses";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "JOGAR OU RECOLHER O PRГ‰MIO?";
    this.cqm = "ESCOLHA UMA CARTA";
    this.uhg = "Se a carta selecionada for mais alta do que a do crupier: PRГ‰MIO";
    this.fiw = "Se a carta selecionada for menor do que a do crupier: Nenhum prГ©mio";
    this.rbo = "Se a carta selecionada for a mesma que a do crupier: Empate";
    this.tlu = "Az Г© carta mais alta, dois Г© a menor, nГЈo hГЎ curingas.";
    this.gqy = "EMPATE";
    this.jis = "JOGADOR";
    this.rso = "CRUPIER";
    this.yoa = "GANHE DO DEALER PARA DOBRAR O GANHO";
    this.bee = "ESCOLHA O VALOR CERTO PARA DUBRAR O GANHO"
}
hvp.prototype = new tkw;

function vqp() {
    this.qyb = "GARDER";
    this.otn = "ROUGE";
    this.leg = "NOIR";
    this.pen = "HAUT";
    this.kmf = "BAS";
    this.rqj = "DONNER DES CARTES";
    this.iam = "GARDER DES CARTES";
    this.zsk = "DONNER DES CARTES";
    this.hoa = "Cinq cartes identiques (possible seulement avec un joker)";
    this.yky = "As, roi, dame, valet, 10 de la mГЄme couleur";
    this.rur = "STRAIGHT dans la mГЄme couleur";
    this.xyl = "Quatre cartes de la mГЄme valeur";
    this.qlk = "Combinaison de trois (BRELAN) et un PAIRE";
    this.obb = "Cinq cartes de la mГЄme couleur";
    this.kto = "Cinq cartes dans l'ordre, mais pas de la mГЄme couleur";
    this.rok = "Trois cartes de la mГЄme valeur";
    this.lck = "Deux paires diffГ©rentes et une 5ГЁme carte";
    this.ewb = "Deux valets, dames, rois ou as";
    this.ope = "Quatre cartes de la mГЄme couleur avec une 5ГЁme carte";
    this.fok = "Straight avec un as au milieu";
    this.qea = "Cartes qui comprennent le valet, la dame et le roi";
    this.mna = "Cinq cartes consГ©cutives paires ou impaires";
    this.qjl = "QUINTE FLUSH avec joker";
    this.roa = "Quatre deux avec une autre carte";
    this.wwf = "Quatre 5, 6, 7, 8, 9, 10, valets, dames ou rois";
    this.sdb = "Quatre 2, 3 ou 4 avec une autre carte";
    this.usa = "Quatres as avec une autre carte";
    this.yhg = "Quatre 2,3 ou 4 avec A, 2, 3, ou 4";
    this.kpp = "Quatre as avec un 2, 3, ou 4";
    this.mrr = "Deux rois ou deux as.";
    this.mjq = "Deux 10, valets, dames, rois ou as";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "GAMBLE OU PRENDRE GAIN?";
    this.cqm = "PRENDS UNE CARTE";
    this.uhg = "Si la carte sГ©lectionnГ©e est supГ©rieure Г  celle du dealer: GAIN";
    this.fiw = "Si la carte sГ©lectionnГ©e est infГ©rieure Г  celle du dealer: PAS DE GAIN";
    this.rbo = "Si la carte sГ©lectionnГ©e est identique Г  celle du dealer: EGALITГ‰";
    this.tlu = "L'as a la valeur la plus importante, le deux la moins importante, aucun joker.";
    this.gqy = "EGALITГ‰";
    this.jis = "JOUER";
    this.rso = "NOUN";
    this.yoa = "VAINCS LE DONNEUR AFIN DE DOUBLER LE GAIN";
    this.bee = "CHOISIS LA BONNE VALEUR AFIN DE DOUBLER LE GAIN"
}
vqp.prototype = new kww;

function zkr() {
    this.qyb = "ZADRЕЅI";
    this.otn = "CRVENA";
    this.leg = "CRNA";
    this.pen = "VELIKA";
    this.kmf = "MALA";
    this.rqj = "DIJELI KARTE";
    this.iam = "ZADRЕЅI KARTE";
    this.zsk = "DIJELI KARTE";
    this.hoa = "Pet istih karata (moguД‡e samo s dЕѕokerom)";
    this.yky = "As - kralj - dama - deДЌko - desetka u istoj boji";
    this.rur = "STRAIGHT u istoj boji";
    this.xyl = "ДЊetiri jednake karte";
    this.qlk = "Kombinacija od TRI ISTE i PARA";
    this.obb = "Pet karata u istoj boji";
    this.kto = "Pet karata u nizu, ali ne u istoj boji";
    this.rok = "Tri jednake karte";
    this.lck = "Dva razliДЌita para i neka 5. karta";
    this.ewb = "Dva deДЌka, dame, kralja ili asa";
    this.ope = "ДЊetiri karte u istoj boji s nekom 5. kartom";
    this.fok = "Pet karata u redu, As u sredini";
    this.qea = "5 karata sa slikama (deДЌko, dama i kralj + 2 slike)";
    this.mna = "5 uzastopnih parnih ili neparnih karata";
    this.qjl = "ROYAL FLUSH s dЕѕokerom";
    this.roa = "ДЊetiri dvojke s nekom drugom kartom";
    this.wwf = "ДЊetiri petice, ЕЎestice, sedmice, osmice, devetke, desetke, deДЌka, dame ili kralja";
    this.sdb = "ДЊetiri dvojke, trojke ili ДЌetvorke s nekom drugom kartom";
    this.usa = "ДЊetiri asa sa nekom drugom kartom";
    this.yhg = "ДЊetiri 2,3 ili 4 sa A, 2, 3 ili 4";
    this.kpp = "ДЊetiri asa s 2, 3 ili 4";
    this.mrr = "Dva kralja ili dva asa";
    this.mjq = "Dvije desetke, deДЌka, dame, kralja ili asa";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "IGRAJ ILI POKUPI DOBITAK?";
    this.cqm = "ODABERITE KARTU";
    this.uhg = "Ako je odabrana karta veД‡a od dilerove karte: DOBITAK";
    this.fiw = "Ako je odabrana karta manja od dilerove karte: NEMA DOBITKA";
    this.rbo = "Ako je odabrana karta ista kao dilerova: NERIJEЕ ENO";
    this.tlu = "As je najveД‡a karta, 2 je najmanja karta, nema dЕѕokera.";
    this.gqy = "ISTA";
    this.jis = "IGRAДЊ";
    this.rso = "DILER";
    this.yoa = "POBJEDI DJELITELJA I TIME UDVOSTRUДЊI DOBITAK";
    this.bee = "ODABERI PRAVU VRIJEDNOST I TIME UDVOSTRUДЊI DOBITAK"
}
zkr.prototype = new hve;

function axz() {
    this.qyb = "TENERE";
    this.otn = "ROSSO";
    this.leg = "NERO";
    this.pen = "ALTO";
    this.kmf = "BASSO";
    this.rqj = "NUOVE CARTE";
    this.iam = "BLOCCA CARTE";
    this.zsk = "NUOVE CARTE";
    this.hoa = "Cinque carte uguali (possibile soltanto con il joker)";
    this.yky = "Asso - Re - Dama - Fante - 10 di un colore";
    this.rur = "STRAIGHT dello stesso colore";
    this.xyl = "Quattro carte dello stesso valore";
    this.qlk = "Combinazione tra THREE OF A KIND e una COPPIA";
    this.obb = "Cinque carte dello stesso colore";
    this.kto = "Cinque carte in ordine cronologico, senza aver lo stesso colore";
    this.rok = "Tre carte dello stesso valore";
    this.lck = "Due coppie diverse e una quinta carta";
    this.ewb = "Due fanti, dame, re o assi";
    this.ope = "Quattro carte dello stesso colore con una quinta carta";
    this.fok = "Straight con asso in centro";
    this.qea = "5 carte solo con figure";
    this.mna = "Straight ove sempre una carta su due manca";
    this.qjl = "ROYAL FLUSH con Jolly";
    this.roa = "Quattro due con un'altra carta";
    this.wwf = "Quattro carte da 5, 6, 7, 8, 9, 10, fante, dama o re";
    this.sdb = "Quattro carte da 2, 3 o 4 con un'altra carta";
    this.usa = "Quattro assi con un'altra carta";
    this.yhg = "Quattro 2,3 o 4 con Asso, 2, 3 o 4";
    this.kpp = "Quattro assi con il 2, 3 o 4";
    this.mrr = "Due re o due assi";
    this.mjq = "Due carte da 10, fante, dama, re o asso";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "GAMBLE O RACCOGLIERE VINCITA?";
    this.cqm = "PRENDI UNA CARTA";
    this.uhg = "Se la carta selezionata ГЁ piГ№ alta di quella del mazziere: VINCITA";
    this.fiw = "Se la carta selezionata ГЁ piГ№ bassa di quella del mazziere: NESSUNA VINCITA";
    this.rbo = "Se la carta selezionata ГЁ uguale a quella del mazziere:ALLA PARI";
    this.tlu = "L'asso ГЁ la piГ№ alta, il due la piГ№ bassa, nessuno jolly.";
    this.gqy = "ALLA PARI";
    this.jis = "GIOCATORE";
    this.rso = "DEALER";
    this.yoa = "VINCI SUL DEALER PER RADDOPPIARE LA VINCITA";
    this.bee = "SCEGLI IL VALORE GIUSTO PER RADDOPPIARE LA VINCITA"
}
axz.prototype = new stk;

function mbp() {
    this.qyb = "HГ…LLET";
    this.otn = "RГ–TT";
    this.leg = "SVART";
    this.pen = "HГ–G";
    this.kmf = "LГ…G";
    this.rqj = "TA KORT";
    this.iam = "BEHГ…LL KORTEN";
    this.zsk = "TA KORT";
    this.hoa = "Fem kort av samma vГ¤rde (endast mГ¶jligt med Joker)";
    this.yky = "Ess - Kung - Dam - Knekt - Tio i samma fГ¤rg";
    this.rur = "Stege i samma fГ¤rg";
    this.xyl = "Fyra kort av samma vГ¤rde";
    this.qlk = "Kombination bestГҐende av TRISS och PAR";
    this.obb = "Fem kort i samma fГ¤rg";
    this.kto = "Fem kort i fГ¶ljd, men inte i samma fГ¤rg";
    this.rok = "Tre kort av samma vГ¤rde";
    this.lck = "TvГҐ olika par och ett 5:e kort";
    this.ewb = "TvГҐ Knektar, Damer, Kungar eller Ess";
    this.ope = "Fyra kort i en fГ¤rg med ett 5:e kort";
    this.fok = "Stege med Ess i mitten";
    this.qea = "Kort som visar Knekt, Dam och Kung";
    this.mna = "Stege med fem udda eller fem jГ¤mna kort i fГ¶ljd";
    this.qjl = "ROYAL FLUSH med Joker";
    this.roa = "Fyra tvГҐor med nГҐgot annat kort";
    this.wwf = "Fyra 5:or, 6:or, 7:or, 8:or, 9:or, 10:or, Knektar, Damer eller Kungar";
    this.sdb = "Fyra 2:or, 3:or eller 4:or med nГҐgot annat kort";
    this.usa = "Fyra Ess med nГҐgot annat kort";
    this.yhg = "Fyra 2:or, 3:or eller 4:or med ett Ess, en 2:a, 3:a eller 4:a";
    this.kpp = "Fyra Ess med en 2:a, 3:a eller 4:a";
    this.mrr = "TvГҐ Kungar eller tvГҐ Ess";
    this.mjq = "TvГҐ 10:or, Knektar, Damer, Kungar eller Ess.";
    this.ejx = "FIVE OF A KIND";
    this.fyj = "ROYAL FLUSH";
    this.hat = "STRAIGHT FLUSH";
    this.ajx = "FOUR OF A KIND";
    this.rdj = "FULL HOUSE";
    this.kvv = "FLUSH";
    this.jee = "STRAIGHT";
    this.auz = "THREE OF A KIND";
    this.vbb = "TWO PAIRS";
    this.fvh = "HIGH PAIR";
    this.kuh = "FOUR FLUSH";
    this.rwr = "POKER";
    this.znb = "SKIP STRAIGHT";
    this.hay = "BLAZE";
    this.wli = "CORNER STRAIGHT";
    this.txt = "TENS OR BETTER";
    this.uie = "JACKS OR BETTER";
    this.rlr = "KINGS OR BETTER";
    this.jhu = "WILD ROYAL FLUSH";
    this.zqd = "FOUR DEUCES";
    this.izp = "FOUR 5 TO KING";
    this.awp = "FOUR 2 TO 4";
    this.zhp = "FOUR ACES";
    this.gtl = "FOUR LOW WITH LOW";
    this.dtf = "FOUR ACES WITH 2, 3 OR 4";
    this.pow = "DUBBLERA ELLER INKASSERA?";
    this.cqm = "VГ„LJ ETT KORT";
    this.uhg = "Om valt kort Г¤r hГ¶gre Г¤n givens: VINST!";
    this.fiw = "Om valt kort Г¤r lГ¤gre Г¤n givens: fГ¶rlust";
    this.rbo = "Om valt kort Г¤r samma som givens: lika";
    this.tlu = "Ess Г¤r hГ¶gst, tvГҐ Г¤r lГ¤gst, inga Jokerkort.";
    this.gqy = "LIKA";
    this.jis = "SPELARE";
    this.rso = "GIVARE";
    this.yoa = "SLГ… DEALERN FГ–R ATT DUBBLA VINSTEN";
    this.bee = "VГ„LJ RГ„TT VALГ–R FГ–R ATT DUBBLA VINSTEN"
}
mbp.prototype = new qlf;

function vxj() {
    this.ujy = {
        backgroundColor: "rgb(0, 0, 0)"
    };
    this.qrf = {
        backgroundColor: "rgb(0,0,0)",
        nlw: "rgba(0,0,0,0.3)"
    };
    this.yoi = {
        qrf: {
            font: "arial",
            scm: "bold",
            backgroundColor: "black",
            eqm: "rgb(0,100,10)",
            mft: "rgb(80,255,100)",
            acr: "rgb(120,120,120)",
            oel: "red",
            drx: "white",
            ujm: "white",
            fng: null
        },
        kub: {
            font: "arial",
            scm: "bold",
            backgroundColor: "black",
            eqm: "rgb(0,100,10)",
            mft: "rgb(80,255,100)",
            acr: "rgb(120,120,120)",
            oel: "red",
            drx: "white",
            ujm: "rgb(230,190,10)",
            fng: null
        }
    };
    this.tex = {
        font: "arial",
        scm: "bold",
        backgroundColor: "rgb(0,0,0)",
        wsn: null,
        ujm: "rgb(255,255,255)",
        ofm: "rgb(30,30,30)",
        borderColor: "rgb(80,80,80)"
    };
    this.hbz = {
        font: "arial",
        scm: "bold",
        backgroundColor: "black",
        jry: "rgb(50,50,50)",
        evj: "rgb(255,255,255)",
        ujm: "white",
        qvi: 0.8,
        huo: {
            pli: {
                font: "sanf-serif",
                scm: "",
                textAlign: "center",
                xqm: "round",
                backgroundColor: "black",
                ujm: "white",
                borderColor: null,
                ofm: null,
                ess: 1
            }
        }
    };
    this.iax = {
        font: "arial",
        scm: "bold",
        backgroundColor: "rgb(20,20,30)",
        borderColor: "rgb(0,0,0)",
        cvs: "rgba(255,255,255,0.2)",
        ujm: "rgb(255,255,255)",
        ewt: "rgba(0,0,0,0.3)",
        display: {
            kyv: "arial",
            gtp: "arial",
            scm: "bold",
            ujm: "rgb(255,255,255)",
            bry: "rgb(255,255,255)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "rgba(255,255,255,0.5)"
        },
        pli: {
            font: "arial",
            scm: "bold",
            ujm: "rgb(0,0,0)",
            jtj: "rgb(150,150,150)",
            backgroundColor: "rgba(255,255,255,0.8)",
            wsn: "rgba(255,255,255,1)",
            ltt: "rgba(255,255,255,0.8)",
            tec: "rgba(255,255,255,1)",
            borderColor: "rgba(200,200,200,0.5)",
            xqm: "rect",
            kaj: -1
        }
    };
    this.baa = {
        font: "arial",
        scm: "bold",
        ede: "rgb(0,0,200)",
        qae: "rgb(255,255,255)",
        czt: "rgb(0,0,150)",
        backgroundColor: "rgb(220,240,255)",
        axr: "rgb(180,220,255)",
        nzu: "rgb(10,20,25)",
        mxk: "rgb(130,220,255)",
        ftd: "rgb(130,190,255)",
        ujm: "rgb(255,255,255)",
        cac: "rgb(130,190,255)",
        kdy: "rgb(100,160,255)",
        efn: "rgb(255,255,255)",
        pli: {
            xqm: "rect",
            font: "arial",
            scm: "bold",
            ujm: "rgb(255,255,255)",
            swt: null,
            backgroundColor: "rgb(90,160,255)",
            oqr: "rgb(90,160,255)",
            borderColor: "rgb(60,120,200)",
            ofm: "rgb(40,80,140)"
        },
        wvj: {
            xqm: "round",
            font: "arial",
            scm: "bold",
            ujm: "rgb(255,255,255)",
            swt: null,
            backgroundColor: "rgba(0,0,100,0.5)",
            oqr: "rgba(150,150,255,0.5)",
            borderColor: "rgb(90,170,255)",
            ofm: "rgb(40,80,140)"
        }
    };
    this.qaf = {};
    this.pde = {
        cyx: ["rgb(255,0,0)", "rgb(255,200,0)", "rgb(0,255,200)", "rgb(240,240,240)"]
    };
    this.ecl = {
        type: "left",
        font: "arial",
        scm: "bold",
        backgroundColor: "rgba(0,0,0,0.7)",
        wsn: null,
        borderColor: "rgb(0,0,0)",
        ofm: "rgb(180,180,180)",
        axr: "rgba(0,0,0,0.6)",
        xzm: null,
        bry: "rgb(255,200,0)",
        ujm: "white",
        iss: {
            font: "arial",
            scm: "bold",
            backgroundColor: "rgb(100,100,100)",
            wsn: "rgb(100,100,100)",
            ltt: null,
            tec: null,
            borderColor: "rgb(100,100,100)",
            ujm: "rgb(255,255,255)",
            jtj: "rgb(255,200,0)",
            xqm: "triangle",
            kaj: 1
        },
        huw: {
            font: "arial",
            scm: "bold",
            backgroundColor: "rgb(100,100,100)",
            wsn: "rgb(100,100,100)",
            ltt: null,
            tec: null,
            borderColor: "rgb(100,100,100)",
            ujm: "rgb(255,255,255)",
            jtj: "rgb(255,200,0)",
            xqm: "triangle",
            kaj: 0
        },
        oph: {
            font: "arial",
            scm: "bold",
            backgroundColor: "rgb(100,100,100)",
            wsn: "rgb(15,15,15)",
            ltt: "rgb(100,100,100)",
            tec: "rgb(15,15,15)",
            borderColor: "rgb(150,150,150)",
            ujm: "rgb(255,255,255)",
            jtj: "rgb(255,200,0)",
            xqm: "rect",
            kaj: -1
        },
        display: {
            gtp: "sans-serif",
            kyv: "sans-serif",
            scm: "bold",
            bry: null,
            ujm: "yellow",
            borderColor: "rgb(100,100,100)",
            ofm: null,
            backgroundColor: "black"
        },
        bnl: {
            font: "arial",
            scm: "bold",
            backgroundColor: null,
            wsn: null,
            ujm: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.csu = {
        font: "arial",
        scm: "bold",
        backgroundColor: "rgb(180,180,180)",
        wsn: "rgb(120,120,120)",
        borderColor: "rgb(80,80,80)",
        ofm: "rgb(30,30,30)",
        ujm: "white",
        htq: {
            font: "arial",
            scm: "bold",
            backgroundColor: "rgba(0,0,0,0.5)",
            wsn: null,
            ltt: "rgba(100,100,100,0.5)",
            tec: null,
            borderColor: null,
            ujm: "white",
            xqm: "rect",
            kaj: -1
        },
        iss: {
            font: "arial",
            scm: "bold",
            backgroundColor: "rgb(255,255,255)",
            wsn: "rgb(255,255,255)",
            ltt: null,
            tec: null,
            borderColor: "rgb(255,255,255)",
            ujm: "rgb(0,0,0)",
            jtj: "rgb(0,0,0)",
            xqm: "triangle",
            kaj: 1
        },
        huw: {
            font: "arial",
            scm: "bold",
            backgroundColor: "rgb(255,255,255)",
            wsn: "rgb(255,255,255)",
            ltt: null,
            tec: null,
            borderColor: "rgb(255,255,255)",
            ujm: "rgb(0,0,0)",
            jtj: "rgb(0,0,0)",
            xqm: "triangle",
            kaj: 0
        },
        ekg: {
            xqm: "rect",
            font: "arial",
            scm: "bold",
            textAlign: "center",
            backgroundColor: "rgba(255,255,255,0.1)",
            ujm: "white",
            ess: 1,
            borderColor: "rgb(255,255,255)",
            ofm: "rgb(220,220,220)"
        },
        display: {
            gtp: "sans-serif",
            kyv: "sans-serif",
            scm: "bold",
            bry: null,
            ujm: "white",
            borderColor: "white",
            ofm: null,
            backgroundColor: "rgb(0,0,0)"
        },
        bnl: {
            font: "arial",
            scm: "bold",
            backgroundColor: null,
            wsn: null,
            ujm: "white",
            textAlign: "left",
            type: "round"
        }
    };
    this.stu = {
        wrb: [{
            gtp: "sans-serif",
            zsj: "verdana",
            scm: "bold",
            bry: "rgb(255,255,100)",
            usd: "rgb(210,190,40)",
            swt: "rgb(252,247,0)",
            igf: "rgb(220,200,0)",
            jry: "rgb(0,0,0)"
        }, {
            gtp: "sans-serif",
            zsj: "verdana",
            scm: "bold",
            bry: "rgb(250,250,250)",
            usd: "rgb(210,210,210)",
            swt: "rgb(255,255,255)",
            igf: "rgb(220,220,220)",
            jry: "rgb(0,0,0)"
        }, {
            gtp: "sans-serif",
            zsj: "verdana",
            scm: "bold",
            bry: "rgb(230,230,230)",
            usd: "rgb(190,190,190)",
            swt: "rgb(255,255,255)",
            igf: "rgb(220,220,220)",
            jry: "rgb(0,0,0)"
        }, {
            gtp: "sans-serif",
            zsj: "verdana",
            scm: "bold",
            bry: "rgb(230,230,230)",
            usd: "rgb(190,190,190)",
            swt: "rgb(255,255,255)",
            igf: "rgb(220,220,220)",
            jry: "rgb(0,0,0)"
        }],
        edi: {
            gtp: "sans-serif",
            zsj: "sans-serif",
            scm: "bold",
            bry: "rgb(236,225,207)",
            usd: "rgb(214,170,102)",
            swt: "rgb(245,220,148)",
            igf: "rgb(190,137,40)"
        },
        hcc: {}
    };
    this.aua = {
        sef: "rgb(240,240,240)",
        lnw: "rgb(255,255,255)",
        borderColor: "rgb(200,200,200)",
        ewt: "rgba(0,80,150,0.6)",
        display: {
            kyv: "arial",
            gtp: "arial",
            scm: "bold",
            ujm: "rgb(0,80,151)",
            bry: "rgb(0,30,80)",
            backgroundColor: "rgb(255,255,255)",
            borderColor: "rgb(200,200,200)"
        }
    }
}

function kck() {
    this.dlp = {
        backgroundColor: null,
        wsn: null,
        axr: "rgb(0,0,0)",
        nzu: "rgb(0,0,0)",
        olx: null,
        gin: 0.5,
        pli: {
            xqm: "rect",
            font: "verdana",
            scm: "bold",
            backgroundColor: "rgb(0,0,0)",
            oqr: "rgb(150,150,150)",
            ujm: "rgb(255,255,255)",
            swt: "rgb(255,255,0)",
            borderColor: "rgb(150,150,150)",
            ofm: "rgb(0,0,0)"
        },
        display: {
            kyv: "sans-serif",
            gtp: "sans-serif",
            scm: "bold",
            backgroundColor: "black",
            ujm: "yellow",
            bry: "yellow",
            borderColor: "rgb(255,255,255)",
            ofm: "rgb(160,160,160)"
        },
        sit: {
            font: "verdana",
            scm: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            ujm: "rgb(255, 255, 0)"
        }
    };
    this.joq = {
        backgroundColor: null,
        axr: "rgb(0,0,0)",
        nzu: "rgb(0,0,0)",
        display: {
            kyv: "sans-serif",
            gtp: "sans-serif",
            scm: "bold",
            backgroundColor: "black",
            ujm: "yellow",
            bry: "yellow",
            borderColor: "rgb(255,255,255)",
            ofm: "rgb(160,160,160)"
        },
        pli: {
            xqm: "rect",
            font: "verdana",
            scm: "bold",
            backgroundColor: "rgb(0,0,0)",
            oqr: "rgb(150,150,150)",
            ujm: "rgb(255,255,255)",
            swt: null,
            borderColor: "rgb(150,150,150)",
            ofm: "rgb(0,0,0)"
        },
        sit: {
            font: "verdana",
            scm: "bold",
            backgroundColor: "rgb(75, 5, 5)",
            borderColor: null,
            ujm: "rgb(255, 255, 0)"
        }
    };
    this.nkq = {
        backgroundColor: null,
        axr: "rgb(0,0,0)",
        nzu: "rgb(0,0,0)",
        pli: {
            xqm: "rect",
            font: "verdana",
            scm: "bold",
            backgroundColor: "rgb(0,0,0)",
            oqr: "rgb(150,150,150)",
            ujm: "rgb(255,255,255)",
            swt: null,
            borderColor: "rgb(150,150,150)",
            ofm: "rgb(0,0,0)"
        },
    };
    this.ywx = {
        font: "arial",
        scm: "bold",
        izi: "yellow",
        lfg: "yellow",
        ujm: "yellow"
    };
    this.wfy = {
        font: "sans-serif",
        scm: "bold",
        ifm: "red",
        daj: "orange",
        jry: "white"
    };
    this.khd = {
        font: "arial",
        scm: "bold",
        ujm: "yellow"
    };
    this.has = {
        font: "sans-serif",
        scm: "bold",
        ujm: "rgb(255,255,255)",
        backgroundColor: "rgb(0,0,0)",
        epd: "rgb(0,0,0)",
        xvx: "rgb(255,0,0)",
        wkx: "rgb(255,255,0)",
        joz: "rgb(80,80,80)",
        agm: "rgb(15,15,15)",
        taj: "rgb(0,0,0)",
        gmk: "rgb(180,180,180)",
        oiz: "rgb(0,0,0)",
        eke: 0.7
    }
}
kck.prototype = new vxj;

function ggz() {
    this.dlp.backgroundColor = "rgb(0,0,110)";
    this.dlp.axr = "rgb(0,0,110)";
    this.dlp.nzu = "rgb(0,0,30)";
    this.dlp.sit.backgroundColor = "rgb(0, 0, 50)";
    this.dlp.pli.backgroundColor = "rgb(0,0,170)";
    this.dlp.pli.oqr = "rgb(0,0,255)";
    this.dlp.pli.borderColor = "rgb(0,0,190)";
    this.dlp.pli.ofm = "rgb(0,0,50)";
    this.ywx.izi = "white";
    this.joq.backgroundColor = "rgb(0,0,110)";
    this.joq.axr = "rgb(0,0,110)";
    this.joq.nzu = "rgb(0,0,30)";
    this.joq.sit.backgroundColor = "rgb(0,0,50)";
    this.joq.pli.backgroundColor = "rgb(0,0,170)";
    this.joq.pli.oqr = "rgb(0,0,255)";
    this.joq.pli.borderColor = "rgb(0,0,190)";
    this.joq.pli.ofm = "rgb(0,0,50)";
    this.joq.font = "arial";
    this.joq.scm = "bold";
    this.joq.ujm = "white";
    this.joq.ywx = {
        font: "arial",
        scm: "bold",
        izi: "white",
        lfg: "yellow",
        ujm: "yellow"
    };
    this.nkq.axr = "rgb(0,0,110)";
    this.nkq.nzu = "rgb(0,0,30)";
    this.nkq.pli.backgroundColor = "rgb(0,0,170)";
    this.nkq.pli.borderColor = "rgb(0,0,190)";
    this.nkq.pli.ofm = "rgb(0,0,50)";
    this.nkq.win = {
        font: "arial",
        scm: "bold",
        ujm: "white",
        bry: "yellow",
        itz: "verdana",
        snj: "bold italic",
        kdh: "white"
    };
    this.hbz.huo.pli.backgroundColor = "rgb(0,0,170)";
    this.khd.byp = "red";
    this.csu.backgroundColor = "rgb(0,0,110)";
    this.csu.wsn = "rgb(0,0,50)"
}
ggz.prototype = new kck;

function dey() {
    this.type = "800_600";
    this.zgj = true;
    this.uux = false;
    this.ivp = false;
    this.pfx = true;
    this.vsz = false;
    this.zwj = false;
    this.chd = false;
    this.tlc = false
}

function yzi() {
    this.zgj = false;
    this.canvas = {
        enh: new icy(0, 0, 800, 620)
    };
    this.vaa = {
        enh: new icy(),
        ayo: 0
    };
    this.qrf = {
        enh: new icy(0, 20, 800, 600),
        bao: 0
    };
    this.nug = {
        ihw: new icy(0, 40, 440, 36),
        kuk: new icy(5, 2, 140, 30),
        gft: new icy(150, 2, 140, 30),
        xxy: new icy(295, 2, 140, 30),
        dwb: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.yoi = {
        qrf: {
            enh: new icy(0, 0, 500, 360),
            naq: new icy(5, 325, 490, 30),
            vli: new icy(5, 329, 490, 14),
            tdm: new icy(50, 345, 400, 6),
            dvl: new icy(5, 285, 490, 70),
            ger: new icy(120, 300, 260, 55),
            fontSize: 14,
            rnr: 18,
            oti: 26,
            bch: 5,
            hmt: 12,
            uha: 5,
            umj: 2
        },
        kub: {
            enh: new icy(0, 0, 800, 620),
            naq: new icy(),
            vli: new icy(),
            tdm: new icy(200, 425, 400, 8),
            dvl: new icy(100, 372, 600, 84),
            ger: new icy(270, 394, 260, 70),
            fontSize: 18,
            rnr: 24,
            oti: 20,
            bch: 0,
            hmt: 12,
            uha: 7,
            umj: 0
        }
    };
    this.tex = {
        enh: new icy(0, 0, 800, 20),
        fontSize: 12,
        idm: 19,
        ito: 15,
        tki: 120,
        hmt: 2,
        uha: 2,
        kih: 2,
        whh: 40
    };
    this.hbz = {
        enh: new icy(0, 20, 800, 70),
        fontSize: 10,
        ezu: 10,
        hmh: 20,
        iej: 40,
        bao: 4,
        hmt: 10,
        uha: 5,
        bch: 10,
        dwb: {
            fontSize: 17,
            bch: 2
        }
    };
    this.baa = {
        enh: new icy(0, 20, 800, 600),
        ihw: new icy(),
        dwb: {
            aaw: 20,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 8,
            isb: 8,
            bao: 0
        },
        gus: new icy(0, 20, 800, 40),
        ehv: new icy(0, 100, 800, 40),
        xtm: new icy(0, 140, 800, 40),
        zvj: new icy(0, 180, 800, 40),
        jar: new icy(225, 275, 350, 100),
        mrk: new icy(200, 480, 400, 40),
        vpp: {
            jan: new icy(340, 540, 120, 55)
        },
        gds: {
            jan: new icy(250, 540, 120, 55),
            yjv: new icy(430, 540, 120, 55)
        },
        otf: 36,
        fontSize: 30,
        lpl: 22,
        uha: 3,
        hmt: 5,
        bao: 2,
        slz: 3,
        tih: 10
    };
    this.qaf = {
        enh: new icy(-10, 25, 310, 50),
        gus: new icy(10, 4, 240, 24),
        vli: new icy(10, 28, 240, 18),
        ilp: new icy(260, 10, 40, 30),
        aoj: new icy(7, 2, 26, 26),
        anb: 16,
        aaw: 12,
        utd: 18
    };
    this.pde = {
        enh: new icy(150, 160, 500, 280),
        anb: 26,
        fontSize: 20,
        yol: new icy(465, 5, 30, 30),
        gus: new icy(30, 5, 440, 30),
        mrk: new icy(20, 40, 460, 160),
        khw: new icy(20, 230, 460, 40),
        dwb: {
            fontSize: 20
        }
    };
    this.ecl = {
        enh: new icy(0, 55, 560, 430),
        bao: 2,
        wrp: 0,
        qum: 5,
        mce: 10,
        anb: 26,
        ldl: 20,
        gus: new icy(30, 15, 500, 30),
        jyf: new icy(20, 50, 520, 60),
        qnx: new icy(40, 60, 220, 40),
        jlb: new icy(328, 60, 30, 40),
        oxe: new icy(360, 60, 120, 40),
        lte: new icy(482, 60, 30, 40),
        jpj: new icy(20, 120, 520, 200),
        zwf: new icy(40, 120, 480, 40),
        tqi: new icy(30, 160, 280, 40),
        lwx: new icy(328, 160, 30, 40),
        dva: new icy(360, 160, 120, 40),
        ugm: new icy(482, 160, 30, 40),
        mva: new icy(30, 215, 280, 40),
        nkw: new icy(328, 215, 30, 40),
        yrs: new icy(360, 215, 120, 40),
        uzi: new icy(482, 215, 30, 40),
        lqp: new icy(30, 270, 280, 40),
        gkk: new icy(328, 270, 30, 40),
        ydq: new icy(360, 270, 120, 40),
        udd: new icy(482, 270, 30, 40),
        naq: new icy(30, 330, 500, 30),
        brb: new icy(210, 370, 140, 50),
        mhc: new icy(),
        bnl: {
            vli: new icy(40, 0, 240, 40),
            nla: new icy(7, 12, 16, 16),
            fontSize: 20,
            iey: 0,
            bao: 2
        },
        huw: {
            iey: 3,
            hmt: -5,
            uha: -1,
            isb: 6,
            fontSize: 20,
            bao: 0
        },
        iss: {
            iey: 3,
            hmt: 5,
            uha: 0,
            isb: 6,
            fontSize: 20,
            bao: 0
        },
        oph: {
            iey: 6,
            hmt: 0,
            uha: 0,
            isb: 6,
            fontSize: 26,
            bao: 2
        },
        display: {
            anb: 16,
            aaw: 24,
            vjs: 0,
            ebq: 0,
            bao: 2,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        }
    };
    this.stu = {
        enh: [
            [new icy(2, 20, 130, 44)],
            [new icy(2, 20, 130, 44), new icy(668, 20, 130, 44)],
            [new icy(2, 20, 130, 23), new icy(668, 20, 130, 23), new icy(2, 41, 130, 23)],
            [new icy(2, 20, 130, 23), new icy(668, 20, 130, 23), new icy(2, 41, 130, 23), new icy(668, 41, 130, 23)]
        ],
        display: {
            xud: new icy(0, 0, 130, 44),
            hlj: new icy(0, 0, 130, 44),
            fly: new icy(),
            gus: new icy(2, 3, 126, 19),
            cwp: new icy(8, 24, 114, 19),
            anb: 16,
            aia: 18,
            qvz: 0
        },
        env: {
            xud: new icy(0, 0, 130, 23),
            hlj: new icy(0, 0, 130, 23),
            fly: new icy(2, 2, 19, 19),
            gus: new icy(),
            cwp: new icy(22, 3, 100, 19),
            anb: 14,
            aia: 18,
            qvz: 0
        },
        edi: {
            enh: new icy(62, 100, 676, 372),
            xud: new icy(32, 10, 612, 351),
            hlj: new icy(0, 0, 676, 372),
            fly: new icy(301, 263, 74, 74),
            gus: new icy(120, 58, 436, 56),
            cwp: new icy(32, 140, 612, 96),
            anb: 68,
            aia: 100,
            qvz: 0
        },
        hcc: {
            enh: new icy(38, 80, 724, 369),
            nxw: new icy(100, 53, 525, 50),
            cwp: new icy(186, 153, 332, 94),
            eud: 340,
            wzn: 30,
            ouy: {
                _0: new icy(2, 0, 90, 94),
                _1: new icy(98, 0, 90, 94),
                _2: new icy(194, 0, 90, 94),
                _3: new icy(290, 0, 90, 94),
                _4: new icy(386, 0, 90, 94),
                _5: new icy(482, 0, 90, 94),
                _6: new icy(578, 0, 90, 94),
                _7: new icy(674, 0, 90, 94),
                _8: new icy(770, 0, 90, 94),
                _9: new icy(866, 0, 90, 94),
                _cm: new icy(962, 0, 28, 94),
                _dt: new icy(999, 0, 28, 94),
                _sp: new icy(1036, 0, 28, 94)
            }
        }
    }
}
yzi.prototype = new dey;

function jdu() {
    this.uux = true
}
jdu.prototype = new yzi;

function xwl() {
    this.vsz = true;
    this.ivp = true;
    this.zgj = false;
    this.uux = true;
    this.canvas = {
        enh: new icy(0, 0, 800, 1165)
    };
    this.vaa = {
        enh: new icy(),
        ayo: 0
    };
    this.qrf = {
        enh: new icy(0, 550, 800, 615),
        bao: 10
    };
    this.nug = {
        ihw: new icy(0, 330, 440, 36),
        kuk: new icy(5, 2, 140, 30),
        gft: new icy(150, 2, 140, 30),
        xxy: new icy(295, 2, 140, 30),
        dwb: {
            fontSize: 14,
            textIndent: 32
        }
    };
    this.yoi = {
        qrf: {
            enh: new icy(0, 0, 500, 360),
            naq: new icy(5, 325, 490, 30),
            vli: new icy(5, 329, 490, 14),
            tdm: new icy(50, 345, 400, 6),
            dvl: new icy(5, 285, 490, 70),
            ger: new icy(120, 300, 260, 55),
            fontSize: 14,
            rnr: 18,
            oti: 26,
            bch: 5,
            hmt: 12,
            uha: 5,
            umj: 2
        },
        kub: {
            enh: new icy(0, 0, 800, 600),
            naq: new icy(),
            vli: new icy(),
            tdm: new icy(200, 411, 400, 8),
            dvl: new icy(100, 360, 600, 110),
            ger: new icy(270, 380, 260, 70),
            fontSize: 18,
            rnr: 24,
            oti: 20,
            bch: 0,
            hmt: 12,
            uha: 7,
            umj: 0
        }
    };
    this.top = {
        enh: new icy(0, 20, 800, 520)
    };
    this.tex = {
        enh: new icy(0, 0, 800, 20),
        fontSize: 12,
        idm: 19,
        ito: 15,
        tki: 120,
        hmt: 2,
        uha: 2,
        kih: 2,
        whh: 60
    };
    this.hbz = {
        enh: new icy(0, 20, 800, 70),
        fontSize: 10,
        ezu: 10,
        hmh: 20,
        iej: 40,
        bao: 4,
        hmt: 10,
        uha: 5,
        bch: 10,
        dwb: {
            fontSize: 17,
            bch: 2
        }
    };
    this.baa = {
        enh: new icy(0, 550, 800, 615),
        ihw: new icy(),
        dwb: {
            aaw: 26,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 10,
            isb: 10,
            bao: 2
        },
        gus: new icy(0, 20, 800, 40),
        ehv: new icy(0, 100, 800, 40),
        xtm: new icy(0, 140, 800, 40),
        zvj: new icy(0, 180, 800, 40),
        jar: new icy(225, 275, 350, 100),
        mrk: new icy(200, 480, 400, 40),
        vpp: {
            jan: new icy(340, 540, 120, 68)
        },
        gds: {
            jan: new icy(250, 540, 120, 68),
            yjv: new icy(430, 540, 120, 68)
        },
        otf: 36,
        fontSize: 30,
        lpl: 22,
        uha: 3,
        hmt: 5,
        bao: 2,
        slz: 3,
        tih: 10,
    };
    this.qaf = {
        enh: new icy(-10, 545, 310, 50),
        gus: new icy(10, 4, 240, 24),
        vli: new icy(10, 28, 240, 18),
        ilp: new icy(260, 10, 40, 30),
        aoj: new icy(7, 2, 26, 26),
        anb: 16,
        aaw: 12,
        utd: 18
    };
    this.pde = {
        enh: new icy(150, 690, 500, 280),
        anb: 26,
        fontSize: 20,
        yol: new icy(465, 5, 30, 30),
        gus: new icy(30, 5, 440, 40),
        mrk: new icy(20, 40, 460, 160),
        khw: new icy(20, 230, 460, 40),
        dwb: {
            fontSize: 20
        }
    };
    this.ecl = {
        enh: new icy(0, 585, 560, 430),
        bao: 2,
        wrp: 0,
        qum: 5,
        mce: 10,
        anb: 26,
        ldl: 20,
        gus: new icy(30, 15, 500, 30),
        jyf: new icy(20, 50, 520, 60),
        qnx: new icy(40, 60, 220, 40),
        jlb: new icy(328, 60, 30, 40),
        oxe: new icy(360, 60, 120, 40),
        lte: new icy(482, 60, 30, 40),
        jpj: new icy(20, 120, 520, 200),
        zwf: new icy(40, 120, 480, 40),
        tqi: new icy(30, 160, 280, 40),
        lwx: new icy(328, 160, 30, 40),
        dva: new icy(360, 160, 120, 40),
        ugm: new icy(482, 160, 30, 40),
        mva: new icy(30, 215, 280, 40),
        nkw: new icy(328, 215, 30, 40),
        yrs: new icy(360, 215, 120, 40),
        uzi: new icy(482, 215, 30, 40),
        lqp: new icy(30, 270, 280, 40),
        gkk: new icy(328, 270, 30, 40),
        ydq: new icy(360, 270, 120, 40),
        udd: new icy(482, 270, 30, 40),
        naq: new icy(30, 330, 500, 30),
        brb: new icy(210, 370, 140, 50),
        mhc: new icy(),
        bnl: {
            vli: new icy(40, 0, 240, 40),
            nla: new icy(7, 12, 16, 16),
            fontSize: 20,
            iey: 0,
            bao: 2
        },
        huw: {
            iey: 3,
            hmt: -5,
            uha: -1,
            isb: 6,
            fontSize: 20,
            bao: 0
        },
        iss: {
            iey: 3,
            hmt: 5,
            uha: 0,
            isb: 6,
            fontSize: 20,
            bao: 0
        },
        oph: {
            iey: 6,
            hmt: 0,
            uha: 0,
            isb: 6,
            fontSize: 26,
            bao: 2
        },
        display: {
            anb: 16,
            aaw: 24,
            vjs: 0,
            ebq: 0,
            bao: 2,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        }
    };
    this.stu = {
        enh: [
            [new icy(2, 550, 130, 44)],
            [new icy(2, 550, 130, 44), new icy(668, 550, 130, 44)],
            [new icy(2, 550, 130, 23), new icy(668, 550, 130, 23), new icy(2, 571, 130, 23)],
            [new icy(2, 550, 130, 23), new icy(668, 550, 130, 23), new icy(2, 571, 130, 23), new icy(668, 571, 130, 23)]
        ],
        display: {
            xud: new icy(0, 0, 130, 44),
            hlj: new icy(0, 0, 130, 44),
            fly: new icy(),
            gus: new icy(2, 3, 126, 19),
            cwp: new icy(8, 24, 114, 19),
            anb: 16,
            aia: 18,
            qvz: 0
        },
        env: {
            xud: new icy(0, 0, 130, 23),
            hlj: new icy(0, 0, 130, 23),
            fly: new icy(2, 2, 19, 19),
            gus: new icy(),
            cwp: new icy(22, 3, 100, 19),
            anb: 14,
            aia: 18,
            qvz: 0
        },
        edi: {
            enh: new icy(62, 640, 676, 372),
            xud: new icy(32, 10, 612, 351),
            hlj: new icy(0, 0, 676, 372),
            fly: new icy(301, 263, 74, 74),
            gus: new icy(120, 58, 436, 56),
            cwp: new icy(32, 140, 612, 96),
            anb: 68,
            aia: 100,
            qvz: 0
        },
        hcc: {
            enh: new icy(38, 610, 724, 369),
            nxw: new icy(100, 53, 525, 50),
            cwp: new icy(186, 153, 332, 94),
            eud: 360,
            wzn: 30,
            ouy: {
                _0: new icy(2, 0, 90, 94),
                _1: new icy(98, 0, 90, 94),
                _2: new icy(194, 0, 90, 94),
                _3: new icy(290, 0, 90, 94),
                _4: new icy(386, 0, 90, 94),
                _5: new icy(482, 0, 90, 94),
                _6: new icy(578, 0, 90, 94),
                _7: new icy(674, 0, 90, 94),
                _8: new icy(770, 0, 90, 94),
                _9: new icy(866, 0, 90, 94),
                _cm: new icy(962, 0, 28, 94),
                _dt: new icy(999, 0, 28, 94),
                _sp: new icy(1036, 0, 28, 94)
            }
        }
    }
}
xwl.prototype = new dey;

function fvl() {
    this.zgj = false;
    this.zwj = true;
    this.chd = true;
    this.canvas = {
        enh: new icy(0, 0, 960, 630)
    };
    this.vaa = {
        enh: new icy(),
        ayo: 0,
        ueo: 0
    };
    this.qrf = {
        enh: new icy(160, 30, 800, 600),
        bao: 0
    };
    this.nug = {
        ihw: new icy(460, 25, 500, 34),
        kuk: new icy(5, 2, 160, 30),
        gft: new icy(170, 2, 160, 30),
        xxy: new icy(335, 2, 160, 30),
        dwb: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.yoi = {
        qrf: {
            enh: new icy(0, 0, 640, 460),
            naq: new icy(6, 416, 628, 38),
            vli: new icy(6, 420, 628, 17),
            tdm: new icy(64, 442, 512, 7),
            dvl: new icy(6, 364, 628, 90),
            ger: new icy(140, 384, 360, 70),
            fontSize: 18,
            rnr: 20,
            oti: 30,
            bch: 6,
            hmt: 12,
            uha: 6,
            umj: 3
        },
        kub: {
            enh: new icy(0, 0, 960, 630),
            naq: new icy(),
            vli: new icy(),
            tdm: new icy(280, 431, 400, 8),
            dvl: new icy(180, 380, 600, 90),
            ger: new icy(350, 400, 260, 70),
            fontSize: 18,
            rnr: 24,
            oti: 20,
            bch: 0,
            hmt: 12,
            uha: 7,
            umj: 0
        }
    };
    this.tex = {
        enh: new icy(160, 0, 800, 30),
        fontSize: 16,
        idm: 26,
        ito: 15,
        tki: 160,
        hmt: 2,
        uha: 2,
        kih: 2,
        whh: 0
    };
    this.hbz = {};
    this.baa = {
        enh: new icy(0, 0, 960, 630),
        ihw: new icy(0, 0, 160, 630),
        dwb: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 8,
            iey: 16,
            bao: 4
        },
        gus: new icy(160, 50, 800, 40),
        ehv: new icy(160, 130, 800, 40),
        xtm: new icy(160, 170, 800, 40),
        zvj: new icy(160, 210, 800, 40),
        jar: new icy(385, 305, 350, 100),
        mrk: new icy(360, 510, 400, 40),
        vpp: {
            jan: new icy(10, 455, 140, 100),
        },
        gds: {
            jan: new icy(10, 355, 140, 100),
            yjv: new icy(10, 165, 140, 100)
        },
        otf: 36,
        fontSize: 30,
        lpl: 22,
        uha: 3,
        hmt: 5,
        bao: 2,
        slz: 3,
        tih: 10
    };
    this.csu = {
        enh: new icy(160, 30, 800, 600),
        bao: 0,
        iey: 0,
        ikw: 50,
        aas: 30,
        ldl: 30,
        ico: new icy(30, 180, 410, 60),
        mrp: new icy(460, 180, 50, 60),
        nxa: new icy(512, 180, 210, 60),
        dwc: new icy(724, 180, 50, 60),
        njx: new icy(30, 310, 410, 60),
        yeh: new icy(460, 310, 50, 60),
        mzm: new icy(512, 310, 210, 60),
        off: new icy(724, 310, 50, 60),
        ave: new icy(30, 440, 410, 60),
        hdo: new icy(512, 440, 210, 60),
        vin: new icy(40, 530, 720, 50),
        qnx: new icy(30, 120, 360, 60),
        jlb: new icy(460, 120, 50, 60),
        oxe: new icy(512, 120, 210, 60),
        lte: new icy(724, 120, 50, 60),
        hvn: new icy(40, 200, 760, 70),
        tqi: new icy(30, 280, 410, 60),
        lwx: new icy(460, 280, 50, 60),
        dva: new icy(512, 280, 210, 60),
        ugm: new icy(724, 280, 50, 60),
        mva: new icy(30, 360, 410, 60),
        nkw: new icy(460, 360, 50, 60),
        yrs: new icy(512, 360, 210, 60),
        uzi: new icy(724, 360, 50, 60),
        lqp: new icy(30, 440, 410, 60),
        gkk: new icy(460, 440, 50, 60),
        ydq: new icy(512, 440, 210, 60),
        udd: new icy(724, 440, 50, 60),
        naq: new icy(40, 530, 720, 50),
        nqe: {
            gqm: new icy(0, 0, 267, 90),
            kog: new icy(267, 0, 266, 90),
            aqo: new icy(533, 0, 267, 90),
            phs: new icy()
        },
        tin: {
            gqm: new icy(0, 0, 200, 90),
            cga: new icy(200, 0, 200, 90),
            kog: new icy(400, 0, 200, 90),
            aqo: new icy(600, 0, 200, 90),
            phs: new icy()
        },
        jtt: [new icy(132, 205, 200, 160), new icy(464, 205, 200, 160)],
        byu: [new icy(50, 205, 200, 160), new icy(300, 205, 200, 160), new icy(550, 205, 200, 160)],
        hme: [new icy(132, 130, 200, 160), new icy(464, 130, 200, 160), new icy(132, 360, 200, 160), new icy(464, 360, 200, 160)],
        ybi: [new icy(50, 130, 200, 160), new icy(300, 130, 200, 160), new icy(550, 130, 200, 160), new icy(50, 360, 200, 160), new icy(300, 360, 200, 160), new icy(550, 360, 200, 160)],
        huw: {
            iey: 3,
            hmt: -10,
            uha: -1,
            isb: 6,
            fontSize: 36,
            bao: 0
        },
        iss: {
            iey: 3,
            hmt: 10,
            uha: -1,
            isb: 6,
            fontSize: 36,
            bao: 0
        },
        htq: {
            fontSize: 36,
            hmt: 0,
            uha: 0,
            isb: 10,
            iey: 0,
            bao: 0
        },
        ekg: {
            fontSize: 26,
            bch: 5,
            iey: 26,
            bao: 4,
            pbm: 40
        },
        vmd: {
            anb: 16,
            aaw: 40,
            vjs: 0,
            ebq: 0,
            bao: 2,
            bch: 3
        },
        hmd: {
            anb: 16,
            aaw: 40,
            vjs: 0,
            ebq: 0,
            bao: 2,
            bch: 3
        },
        bnl: {
            vli: new icy(50, 0, 360, 60),
            nla: new icy(0, 13, 30, 30),
            fontSize: 30,
            iey: 0,
            bao: 2
        }
    };
    this.qaf = {
        enh: new icy(660, 30, 310, 60),
        gus: new icy(60, 6, 240, 26),
        vli: new icy(60, 34, 240, 20),
        ilp: new icy(5, 11, 50, 38),
        aoj: new icy(8, 2, 34, 34),
        anb: 16,
        aaw: 12,
        utd: 24
    };
    this.pde = {
        enh: new icy(280, 150, 560, 330),
        anb: 26,
        fontSize: 20,
        yol: new icy(515, 5, 40, 40),
        gus: new icy(40, 5, 480, 30),
        mrk: new icy(20, 40, 520, 195),
        khw: new icy(20, 265, 520, 54),
        dwb: {
            fontSize: 20
        }
    };
    this.stu = {
        enh: [
            [new icy(162, 30, 130, 44)],
            [new icy(162, 30, 130, 44), new icy(828, 30, 130, 44)],
            [new icy(162, 30, 130, 23), new icy(828, 30, 130, 23), new icy(162, 51, 130, 23)],
            [new icy(162, 30, 130, 23), new icy(828, 30, 130, 23), new icy(162, 51, 130, 23), new icy(828, 51, 130, 23)]
        ],
        display: {
            xud: new icy(0, 0, 130, 44),
            hlj: new icy(0, 0, 130, 44),
            fly: new icy(),
            gus: new icy(2, 3, 126, 19),
            cwp: new icy(8, 24, 114, 19),
            anb: 16,
            aia: 18,
            qvz: 0
        },
        env: {
            xud: new icy(0, 0, 130, 23),
            hlj: new icy(0, 0, 130, 23),
            fly: new icy(2, 2, 19, 19),
            gus: new icy(),
            cwp: new icy(22, 3, 100, 19),
            anb: 14,
            aia: 18,
            qvz: 0
        },
        edi: {
            enh: new icy(222, 110, 676, 372),
            xud: new icy(32, 10, 612, 351),
            hlj: new icy(0, 0, 676, 372),
            fly: new icy(301, 263, 74, 74),
            gus: new icy(120, 58, 436, 56),
            cwp: new icy(32, 140, 612, 96),
            anb: 68,
            aia: 100,
            qvz: 0
        },
        hcc: {
            enh: new icy(198, 90, 724, 369),
            nxw: new icy(100, 53, 525, 50),
            cwp: new icy(186, 153, 332, 94),
            eud: 340,
            wzn: 30,
            ouy: {
                _0: new icy(2, 0, 90, 94),
                _1: new icy(98, 0, 90, 94),
                _2: new icy(194, 0, 90, 94),
                _3: new icy(290, 0, 90, 94),
                _4: new icy(386, 0, 90, 94),
                _5: new icy(482, 0, 90, 94),
                _6: new icy(578, 0, 90, 94),
                _7: new icy(674, 0, 90, 94),
                _8: new icy(770, 0, 90, 94),
                _9: new icy(866, 0, 90, 94),
                _cm: new icy(962, 0, 28, 94),
                _dt: new icy(999, 0, 28, 94),
                _sp: new icy(1036, 0, 28, 94)
            }
        }
    }
}
fvl.prototype = new dey;

function zsy() {
    this.zgj = false;
    this.zwj = true;
    this.chd = true;
    this.canvas = {
        enh: new icy(0, 0, 960, 630)
    };
    this.vaa = {
        enh: new icy(),
        ayo: 0,
        ueo: 0
    };
    this.qrf = {
        enh: new icy(0, 30, 800, 600),
        bao: 0
    };
    this.nug = {
        ihw: new icy(0, 25, 500, 34),
        kuk: new icy(5, 2, 160, 30),
        gft: new icy(170, 2, 160, 30),
        xxy: new icy(335, 2, 160, 30),
        dwb: {
            fontSize: 16,
            textIndent: 32
        }
    };
    this.yoi = {
        qrf: {
            enh: new icy(0, 0, 640, 460),
            naq: new icy(6, 416, 628, 38),
            vli: new icy(6, 420, 628, 17),
            tdm: new icy(64, 442, 512, 7),
            dvl: new icy(6, 364, 628, 90),
            ger: new icy(140, 384, 360, 70),
            fontSize: 18,
            rnr: 20,
            oti: 30,
            bch: 6,
            hmt: 12,
            uha: 6,
            umj: 3
        },
        kub: {
            enh: new icy(0, 0, 960, 630),
            naq: new icy(),
            vli: new icy(),
            tdm: new icy(280, 431, 400, 8),
            dvl: new icy(180, 380, 600, 90),
            ger: new icy(350, 400, 260, 70),
            fontSize: 18,
            rnr: 24,
            oti: 20,
            bch: 0,
            hmt: 12,
            uha: 7,
            umj: 0
        }
    };
    this.tex = {
        enh: new icy(0, 0, 800, 30),
        fontSize: 16,
        idm: 26,
        ito: 15,
        tki: 160,
        hmt: 2,
        uha: 2,
        kih: 2,
        whh: 0
    };
    this.hbz = {};
    this.baa = {
        enh: new icy(0, 0, 960, 630),
        ihw: new icy(800, 0, 160, 630),
        dwb: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 8,
            iey: 16,
            bao: 4
        },
        gus: new icy(0, 50, 800, 40),
        ehv: new icy(0, 130, 800, 40),
        xtm: new icy(0, 170, 800, 40),
        zvj: new icy(0, 210, 800, 40),
        jar: new icy(225, 305, 350, 100),
        mrk: new icy(200, 510, 400, 40),
        vpp: {
            jan: new icy(810, 455, 140, 100),
        },
        gds: {
            jan: new icy(810, 355, 140, 100),
            yjv: new icy(810, 165, 140, 100)
        },
        otf: 36,
        fontSize: 30,
        lpl: 22,
        uha: 3,
        hmt: 5,
        bao: 2,
        slz: 3,
        tih: 10
    };
    this.csu = {
        enh: new icy(0, 30, 800, 600),
        bao: 0,
        iey: 0,
        ikw: 50,
        aas: 30,
        ldl: 30,
        ico: new icy(30, 180, 410, 60),
        mrp: new icy(460, 180, 50, 60),
        nxa: new icy(512, 180, 210, 60),
        dwc: new icy(724, 180, 50, 60),
        njx: new icy(30, 310, 410, 60),
        yeh: new icy(460, 310, 50, 60),
        mzm: new icy(512, 310, 210, 60),
        off: new icy(724, 310, 50, 60),
        ave: new icy(30, 440, 410, 60),
        hdo: new icy(512, 440, 210, 60),
        vin: new icy(40, 530, 720, 50),
        qnx: new icy(30, 120, 360, 60),
        jlb: new icy(460, 120, 50, 60),
        oxe: new icy(512, 120, 210, 60),
        lte: new icy(724, 120, 50, 60),
        hvn: new icy(40, 200, 760, 70),
        tqi: new icy(30, 280, 410, 60),
        lwx: new icy(460, 280, 50, 60),
        dva: new icy(512, 280, 210, 60),
        ugm: new icy(724, 280, 50, 60),
        mva: new icy(30, 360, 410, 60),
        nkw: new icy(460, 360, 50, 60),
        yrs: new icy(512, 360, 210, 60),
        uzi: new icy(724, 360, 50, 60),
        lqp: new icy(30, 440, 410, 60),
        gkk: new icy(460, 440, 50, 60),
        ydq: new icy(512, 440, 210, 60),
        udd: new icy(724, 440, 50, 60),
        naq: new icy(40, 530, 720, 50),
        nqe: {
            gqm: new icy(0, 0, 267, 90),
            kog: new icy(267, 0, 266, 90),
            aqo: new icy(533, 0, 267, 90),
            phs: new icy()
        },
        tin: {
            gqm: new icy(0, 0, 200, 90),
            cga: new icy(200, 0, 200, 90),
            kog: new icy(400, 0, 200, 90),
            aqo: new icy(600, 0, 200, 90),
            phs: new icy()
        },
        jtt: [new icy(132, 205, 200, 160), new icy(464, 205, 200, 160)],
        byu: [new icy(50, 205, 200, 160), new icy(300, 205, 200, 160), new icy(550, 205, 200, 160)],
        hme: [new icy(132, 130, 200, 160), new icy(464, 130, 200, 160), new icy(132, 360, 200, 160), new icy(464, 360, 200, 160)],
        ybi: [new icy(50, 130, 200, 160), new icy(300, 130, 200, 160), new icy(550, 130, 200, 160), new icy(50, 360, 200, 160), new icy(300, 360, 200, 160), new icy(550, 360, 200, 160)],
        huw: {
            iey: 3,
            hmt: -10,
            uha: -1,
            isb: 6,
            fontSize: 36,
            bao: 0
        },
        iss: {
            iey: 3,
            hmt: 10,
            uha: -1,
            isb: 6,
            fontSize: 36,
            bao: 0
        },
        htq: {
            fontSize: 36,
            hmt: 0,
            uha: 0,
            isb: 10,
            iey: 0,
            bao: 0
        },
        ekg: {
            fontSize: 26,
            bch: 5,
            iey: 26,
            bao: 4,
            pbm: 40
        },
        vmd: {
            anb: 16,
            aaw: 40,
            vjs: 0,
            ebq: 0,
            bao: 2,
            bch: 3
        },
        hmd: {
            anb: 16,
            aaw: 40,
            vjs: 0,
            ebq: 0,
            bao: 2,
            bch: 3
        },
        bnl: {
            vli: new icy(50, 0, 360, 60),
            nla: new icy(0, 13, 30, 30),
            fontSize: 30,
            iey: 0,
            bao: 2
        }
    };
    this.qaf = {
        enh: new icy(-10, 30, 310, 60),
        gus: new icy(10, 6, 240, 26),
        vli: new icy(10, 34, 240, 20),
        ilp: new icy(255, 11, 50, 38),
        aoj: new icy(8, 2, 34, 34),
        anb: 16,
        aaw: 12,
        utd: 24
    };
    this.pde = {
        enh: new icy(120, 150, 560, 330),
        anb: 26,
        fontSize: 20,
        yol: new icy(515, 5, 40, 40),
        gus: new icy(40, 5, 480, 30),
        mrk: new icy(20, 40, 520, 195),
        khw: new icy(20, 265, 520, 54),
        dwb: {
            fontSize: 20
        }
    };
    this.stu = {
        enh: [
            [new icy(2, 30, 130, 44)],
            [new icy(2, 30, 130, 44), new icy(668, 30, 130, 44)],
            [new icy(2, 30, 130, 23), new icy(668, 30, 130, 23), new icy(2, 51, 130, 23)],
            [new icy(2, 30, 130, 23), new icy(668, 30, 130, 23), new icy(2, 51, 130, 23), new icy(668, 51, 130, 23)]
        ],
        display: {
            xud: new icy(0, 0, 130, 44),
            hlj: new icy(0, 0, 130, 44),
            fly: new icy(),
            gus: new icy(2, 3, 126, 19),
            cwp: new icy(8, 24, 114, 19),
            anb: 16,
            aia: 18,
            qvz: 0
        },
        env: {
            xud: new icy(0, 0, 130, 23),
            hlj: new icy(0, 0, 130, 23),
            fly: new icy(2, 2, 19, 19),
            gus: new icy(),
            cwp: new icy(22, 3, 100, 19),
            anb: 14,
            aia: 18,
            qvz: 0
        },
        edi: {
            enh: new icy(62, 110, 676, 372),
            xud: new icy(32, 10, 612, 351),
            hlj: new icy(0, 0, 676, 372),
            fly: new icy(301, 263, 74, 74),
            gus: new icy(120, 58, 436, 56),
            cwp: new icy(32, 140, 612, 96),
            anb: 68,
            aia: 100,
            qvz: 0
        },
        hcc: {
            enh: new icy(38, 90, 724, 369),
            nxw: new icy(100, 53, 525, 50),
            cwp: new icy(186, 153, 332, 94),
            eud: 340,
            wzn: 30,
            ouy: {
                _0: new icy(2, 0, 90, 94),
                _1: new icy(98, 0, 90, 94),
                _2: new icy(194, 0, 90, 94),
                _3: new icy(290, 0, 90, 94),
                _4: new icy(386, 0, 90, 94),
                _5: new icy(482, 0, 90, 94),
                _6: new icy(578, 0, 90, 94),
                _7: new icy(674, 0, 90, 94),
                _8: new icy(770, 0, 90, 94),
                _9: new icy(866, 0, 90, 94),
                _cm: new icy(962, 0, 28, 94),
                _dt: new icy(999, 0, 28, 94),
                _sp: new icy(1036, 0, 28, 94)
            }
        }
    }
}
zsy.prototype = new dey;

function bew() {
    this.anz = true;
    this.ztk = true;
    this.dlp = {
        enh: new icy(0, 496, 800, 124),
        liv: new icy(0, 0, 800, 124),
        mcp: new icy(),
        sit: {
            enh: new icy(187, 14, 470, 40),
            uha: 10,
            fontSize: 18,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        nfj: {
            aaw: 22,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 10,
            isb: 8,
            bao: 2
        },
        gxx: {
            aaw: 16,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 8,
            isb: 6,
            bao: 2
        },
        clx: {
            aaw: 16,
            aia: 16,
            hmt: 0,
            iey: 8,
            isb: 6,
            bao: 2,
            ebq: 24,
            wqy: -24
        },
        display: {
            vjs: -12,
            ebq: 11,
            aaw: 26,
            anb: 15,
            bao: 2,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        hzt: new icy(5, 10, 150, 48),
        jmg: new icy(689, 10, 106, 48),
        lwe: {
            hai: new icy(686, 68, 110, 53),
            oow: new icy(492, 68, 80, 53),
            faj: new icy(382, 68, 80, 53),
            yjv: new icy(272, 68, 80, 53),
            wak: new icy(25, 68, 110, 53),
            cwi: new icy()
        },
        taf: {
            hai: new icy(686, 68, 110, 53),
            wak: new icy(532, 68, 80, 53),
            oow: new icy(432, 68, 80, 53),
            faj: new icy(332, 68, 80, 53),
            yjv: new icy(232, 68, 80, 53),
            cjo: new icy(40, 68, 80, 53),
            cwi: new icy()
        },
        lsa: {
            hai: new icy(686, 68, 110, 53),
            wak: new icy(492, 68, 80, 53),
            oow: new icy(382, 68, 80, 53),
            faj: new icy(272, 68, 80, 53),
            cjo: new icy(40, 68, 80, 53),
            cwi: new icy()
        },
        elj: {
            hai: new icy(686, 68, 110, 53),
            oow: new icy(492, 68, 80, 53),
            faj: new icy(382, 68, 80, 53),
            yjv: new icy(272, 68, 80, 53),
            wak: new icy(25, 68, 110, 53),
            cwi: new icy()
        },
        xqf: 15
    };
    this.nkq = {
        enh: new icy(0, 20, 800, 600),
        ihw: new icy(0, 540, 800, 60),
        yjv: new icy(711, 544, 73, 53),
        nlo: new icy(11, 544, 73, 53),
        aav: new icy(316, 544, 73, 53),
        vgz: new icy(411, 544, 73, 53),
        dwb: {
            aaw: 16,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 6,
            iey: 8,
            bao: 2
        }
    };
    this.joq = {
        enh: new icy(0, 20, 800, 600),
        ihw: new icy(0, 485, 800, 115),
        sit: {
            enh: new icy(187, 490, 470, 40),
            fontSize: 18,
            uha: 14,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        dwb: {
            aaw: 18,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 8,
            iey: 10,
            bao: 2
        },
        display: {
            vjs: -12,
            ebq: 11,
            aaw: 26,
            anb: 15,
            bao: 2,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        dny: new icy(689, 486, 106, 48),
        kpz: new icy(5, 486, 150, 48)
    };
    this.xap = {
        enh: new icy(710, 35, 90, 450),
        gus: new icy(5, 5, 80, 15),
        tcu: new icy(50, 25, 35, 410),
        fontSize: 15,
        shr: 20,
        bao: 2,
        iey: 5,
        qpb: 4,
        xlu: 10,
        rrn: 5
    };
    this.ywx = {
        fontSize: 18,
        ylv: 128,
        fjm: 176,
        uyn: 0,
        wlf: 20,
        xwn: true
    };
    this.uhn = new icy(20, 290, 128, 205);
    this.zkp = new icy(176, 290, 128, 205);
    this.srt = new icy(333, 290, 128, 205);
    this.rkq = new icy(490, 290, 128, 205);
    this.fcg = new icy(646, 290, 128, 205);
    this.wfy = {
        enh: new icy(363, 72, 408, 155),
        fontSize: 50,
        hmt: 0,
        uha: 9,
        bch: 0,
        qvz: 2
    };
    this.khd = {
        enh: new icy(355, 30, 424, 236),
        fontSize: 20,
        bch: 6
    }
}
bew.prototype = new yzi;

function nzd() {
    this.uux = true
}
nzd.prototype = new bew;

function syk() {
    this.anz = true;
    this.ztk = true;
    this.dlp = {
        enh: new icy(0, 1026, 800, 139),
        liv: new icy(0, 0, 800, 139),
        mcp: new icy(),
        sit: {
            enh: new icy(187, 14, 470, 40),
            uha: 10,
            fontSize: 18,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        nfj: {
            aaw: 28,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 12,
            isb: 10,
            bao: 2
        },
        gxx: {
            aaw: 21,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 10,
            isb: 8,
            bao: 2
        },
        clx: {
            aaw: 21,
            aia: 21,
            hmt: 0,
            iey: 8,
            isb: 6,
            bao: 2,
            ebq: 30,
            wqy: -32
        },
        display: {
            vjs: -12,
            ebq: 11,
            aaw: 26,
            anb: 15,
            bao: 2,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        hzt: new icy(5, 10, 150, 48),
        jmg: new icy(689, 10, 106, 48),
        lwe: {
            hai: new icy(675, 68, 120, 68),
            oow: new icy(486, 68, 100, 68),
            faj: new icy(371, 68, 100, 68),
            yjv: new icy(256, 68, 100, 68),
            wak: new icy(20, 68, 120, 68),
            cwi: new icy()
        },
        taf: {
            hai: new icy(675, 68, 110, 68),
            wak: new icy(536, 68, 100, 68),
            oow: new icy(426, 68, 100, 68),
            faj: new icy(316, 68, 100, 68),
            yjv: new icy(206, 68, 100, 68),
            cjo: new icy(30, 68, 100, 68),
            cwi: new icy()
        },
        lsa: {
            hai: new icy(675, 68, 120, 68),
            wak: new icy(486, 68, 100, 68),
            oow: new icy(371, 68, 100, 68),
            faj: new icy(256, 68, 100, 68),
            cjo: new icy(30, 68, 100, 68),
            cwi: new icy()
        },
        elj: {
            hai: new icy(675, 68, 120, 68),
            oow: new icy(486, 68, 100, 68),
            faj: new icy(371, 68, 100, 68),
            yjv: new icy(256, 68, 100, 68),
            wak: new icy(20, 68, 120, 68),
            cwi: new icy()
        },
        xqf: 15
    };
    this.nkq = {
        enh: new icy(0, 550, 800, 615),
        ihw: new icy(0, 540, 800, 75),
        yjv: new icy(695, 544, 90, 68),
        nlo: new icy(11, 544, 90, 68),
        aav: new icy(295, 544, 90, 68),
        vgz: new icy(415, 544, 90, 68),
        dwb: {
            aaw: 21,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 8,
            iey: 10,
            bao: 2
        }
    };
    this.joq = {
        enh: new icy(0, 550, 800, 615),
        ihw: new icy(0, 485, 800, 130),
        sit: {
            enh: new icy(187, 490, 470, 40),
            fontSize: 18,
            uha: 14,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        dwb: {
            aaw: 23,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 10,
            iey: 12,
            bao: 2
        },
        display: {
            vjs: -12,
            ebq: 11,
            aaw: 26,
            anb: 15,
            bao: 2,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        dny: new icy(689, 486, 106, 48),
        kpz: new icy(5, 486, 150, 48)
    };
    this.xap = {
        enh: new icy(710, 565, 90, 450),
        gus: new icy(5, 5, 80, 15),
        tcu: new icy(50, 25, 35, 410),
        fontSize: 15,
        shr: 20,
        bao: 2,
        iey: 5,
        qpb: 4,
        xlu: 10,
        rrn: 5
    };
    this.ywx = {
        fontSize: 18,
        ylv: 128,
        fjm: 176,
        uyn: 0,
        wlf: 20,
        xwn: true
    };
    this.uhn = new icy(20, 820, 128, 205);
    this.zkp = new icy(176, 820, 128, 205);
    this.srt = new icy(333, 820, 128, 205);
    this.rkq = new icy(490, 820, 128, 205);
    this.fcg = new icy(646, 820, 128, 205);
    this.wfy = {
        enh: new icy(363, 602, 408, 155),
        fontSize: 50,
        hmt: 0,
        uha: 9,
        bch: 0,
        qvz: 2
    };
    this.khd = {
        enh: new icy(355, 560, 424, 236),
        fontSize: 20,
        bch: 6
    };
    this.top = {
        enh: new icy(0, 20, 800, 520)
    }
}
syk.prototype = new xwl;

function akq() {
    this.anz = false;
    this.ztk = true;
    this.dlp = {
        enh: new icy(0, 0, 960, 630),
        liv: new icy(160, 506, 800, 124),
        mcp: new icy(0, 0, 160, 630),
        sit: {
            enh: new icy(385, 525, 390, 70),
            uha: 14,
            fontSize: 24,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        nfj: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 24,
            isb: 8,
            bao: 6
        },
        gxx: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 16,
            isb: 8,
            bao: 4
        },
        clx: {
            aaw: 0,
            aia: 24,
            hmt: 0,
            iey: 24,
            isb: 8,
            bao: 6,
            ebq: 0,
            wqy: -130
        },
        display: {
            vjs: -20,
            ebq: 16,
            aaw: 32,
            anb: 18,
            bao: 3,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        hzt: new icy(165, 525, 180, 70),
        jmg: new icy(815, 525, 140, 70),
        lwe: {
            hai: new icy(10, 215, 140, 200),
            oow: new icy(),
            faj: new icy(),
            yjv: new icy(10, 455, 140, 100),
            wak: new icy(),
            cwi: new icy(10, 75, 140, 100)
        },
        taf: {
            hai: new icy(10, 215, 140, 200),
            wak: new icy(),
            oow: new icy(),
            faj: new icy(),
            yjv: new icy(10, 455, 140, 100),
            cjo: new icy(),
            cwi: new icy(10, 75, 140, 100)
        },
        lsa: {
            hai: new icy(10, 215, 140, 200),
            wak: new icy(),
            oow: new icy(),
            faj: new icy(),
            cjo: new icy(),
            cwi: new icy(10, 75, 140, 100)
        },
        elj: {
            hai: new icy(10, 215, 140, 200),
            oow: new icy(),
            faj: new icy(),
            yjv: new icy(10, 455, 140, 100),
            wak: new icy(),
            cwi: new icy(10, 75, 140, 100)
        },
        xqf: 15
    };
    this.nkq = {
        enh: new icy(0, 0, 960, 630),
        ihw: new icy(0, 0, 160, 630),
        yjv: new icy(10, 455, 140, 100),
        nlo: new icy(),
        aav: new icy(10, 75, 140, 100),
        vgz: new icy(10, 265, 140, 100),
        dwb: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 16,
            iey: 16,
            bao: 4
        }
    };
    this.joq = {
        enh: new icy(0, 0, 960, 630),
        ihw: new icy(0, 0, 160, 630),
        sit: {
            enh: new icy(390, 525, 390, 70),
            fontSize: 20,
            uha: 14,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        dwb: {
            aaw: 24,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 8,
            iey: 16,
            bao: 4
        },
        display: {
            vjs: -20,
            ebq: 16,
            aaw: 32,
            anb: 18,
            bao: 3,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        kpz: new icy(165, 525, 180, 70),
        dny: new icy(815, 525, 140, 70),
    };
    this.ywx = {
        fontSize: 18,
        ylv: 128,
        fjm: 176,
        uyn: 0,
        wlf: 20,
        xwn: true
    };
    this.uhn = new icy(180, 300, 128, 205);
    this.zkp = new icy(336, 300, 128, 205);
    this.srt = new icy(493, 300, 128, 205);
    this.rkq = new icy(650, 300, 128, 205);
    this.fcg = new icy(806, 300, 128, 205);
    this.wfy = {
        enh: new icy(523, 82, 408, 155),
        fontSize: 50,
        hmt: 0,
        uha: 9,
        bch: 0,
        qvz: 2
    };
    this.khd = {
        enh: new icy(515, 40, 424, 236),
        fontSize: 20,
        bch: 6
    };
    this.csu.ico = new icy();
    this.csu.nxa = new icy();
    this.csu.njx = new icy();
    this.csu.yeh = new icy();
    this.csu.mzm = new icy();
    this.csu.off = new icy();
    this.csu.ave = new icy(30, 180, 410, 60);
    this.csu.hdo = new icy(512, 180, 210, 60)
}
akq.prototype = new fvl;

function ymz() {
    this.anz = false;
    this.ztk = true;
    this.dlp = {
        enh: new icy(0, 0, 960, 630),
        liv: new icy(0, 506, 800, 124),
        mcp: new icy(800, 0, 160, 630),
        sit: {
            enh: new icy(225, 525, 390, 70),
            uha: 14,
            fontSize: 24,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        nfj: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 24,
            isb: 8,
            bao: 6
        },
        gxx: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            iey: 16,
            isb: 8,
            bao: 4
        },
        clx: {
            aaw: 0,
            aia: 24,
            hmt: 0,
            iey: 24,
            isb: 8,
            bao: 6,
            ebq: 0,
            wqy: -130
        },
        display: {
            vjs: -20,
            ebq: 16,
            aaw: 32,
            anb: 18,
            bao: 3,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        hzt: new icy(5, 525, 180, 70),
        jmg: new icy(655, 525, 140, 70),
        lwe: {
            hai: new icy(810, 215, 140, 200),
            oow: new icy(),
            faj: new icy(),
            yjv: new icy(810, 455, 140, 100),
            wak: new icy(),
            cwi: new icy(810, 75, 140, 100)
        },
        taf: {
            hai: new icy(810, 215, 140, 200),
            wak: new icy(),
            oow: new icy(),
            faj: new icy(),
            yjv: new icy(810, 455, 140, 100),
            cjo: new icy(),
            cwi: new icy(810, 75, 140, 100)
        },
        lsa: {
            hai: new icy(810, 215, 140, 200),
            wak: new icy(),
            oow: new icy(),
            faj: new icy(),
            cjo: new icy(),
            cwi: new icy(810, 75, 140, 100)
        },
        elj: {
            hai: new icy(810, 215, 140, 200),
            oow: new icy(),
            faj: new icy(),
            yjv: new icy(810, 455, 140, 100),
            wak: new icy(),
            cwi: new icy(810, 75, 140, 100)
        },
        xqf: 15
    };
    this.nkq = {
        enh: new icy(0, 0, 960, 630),
        ihw: new icy(800, 0, 160, 630),
        yjv: new icy(810, 455, 140, 100),
        nlo: new icy(),
        aav: new icy(810, 75, 140, 100),
        vgz: new icy(810, 265, 140, 100),
        dwb: {
            aaw: 0,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 16,
            iey: 16,
            bao: 4
        }
    };
    this.joq = {
        enh: new icy(0, 0, 960, 630),
        ihw: new icy(800, 0, 160, 630),
        sit: {
            enh: new icy(230, 525, 390, 70),
            fontSize: 20,
            uha: 14,
            iey: 3,
            ceo: 2,
            isb: 6,
            bao: 2
        },
        dwb: {
            aaw: 24,
            aia: 0,
            hmt: 0,
            ebq: 0,
            wqy: 0,
            isb: 8,
            iey: 16,
            bao: 4
        },
        display: {
            vjs: -20,
            ebq: 16,
            aaw: 32,
            anb: 18,
            bao: 3,
            nls: 3,
            jjm: 3,
            bzg: 3,
            ark: 3
        },
        kpz: new icy(5, 525, 180, 70),
        dny: new icy(655, 525, 140, 70),
    };
    this.ywx = {
        fontSize: 18,
        ylv: 128,
        fjm: 176,
        uyn: 0,
        wlf: 20,
        xwn: true
    };
    this.uhn = new icy(20, 300, 128, 205);
    this.zkp = new icy(176, 300, 128, 205);
    this.srt = new icy(333, 300, 128, 205);
    this.rkq = new icy(490, 300, 128, 205);
    this.fcg = new icy(646, 300, 128, 205);
    this.wfy = {
        enh: new icy(363, 82, 408, 155),
        fontSize: 50,
        hmt: 0,
        uha: 9,
        bch: 0,
        qvz: 2
    };
    this.khd = {
        enh: new icy(355, 40, 424, 236),
        fontSize: 20,
        bch: 6
    };
    this.csu.ico = new icy();
    this.csu.nxa = new icy();
    this.csu.njx = new icy();
    this.csu.yeh = new icy();
    this.csu.mzm = new icy();
    this.csu.off = new icy();
    this.csu.ave = new icy(30, 180, 410, 60);
    this.csu.hdo = new icy(512, 180, 210, 60)
}
ymz.prototype = new zsy;

function cyb() {
    this.uhn = new icy(20, 250, 147, 227);
    this.zkp = new icy(174, 250, 147, 227);
    this.srt = new icy(328, 250, 147, 227);
    this.rkq = new icy(479, 250, 147, 227);
    this.fcg = new icy(632, 250, 147, 227);
    this.ywx.ylv = 145;
    this.ywx.fjm = 202;
    this.ywx.uyn = 20;
    this.wfy.enh = new icy(110, 290, 584, 60);
    this.wfy.fontSize = 40;
    this.wfy.bch = 10;
    this.wfy.uha = 3;
    this.khd.enh = new icy(22, 42, 756, 193);
    this.khd.bch = 5;
    this.khd.hmt = 2;
    this.khd.dny = [new icy(209, 2, 103, 189), new icy(314, 2, 103, 189), new icy(419, 2, 103, 189), new icy(524, 2, 103, 189), new icy(629, 2, 125, 189)];
    this.joq.ywx = {
        fontSize: 18,
        ylv: 145,
        fjm: 202,
        uyn: 20,
        wlf: 20,
        xwn: true
    };
    this.joq.uhn = new icy(20, 175, 147, 227);
    this.joq.zkp = new icy(174, 175, 147, 227);
    this.joq.srt = new icy(327, 175, 147, 227);
    this.joq.rkq = new icy(479, 175, 147, 227);
    this.joq.fcg = new icy(632, 175, 147, 227);
    this.joq.fny = new icy(415, 544, 110, 53);
    this.joq.faj = new icy(275, 544, 110, 53);
    this.joq.naq = new icy(50, 20, 700, 120);
    this.joq.fontSize = 20;
    this.nkq.win = {
        enh: new icy(0, 0, 800, 600),
        fontSize: 16,
        anb: 40,
        ldl: 12,
        lineWidth: 1,
        gus: new icy(),
        naq: new icy(0, 530, 800, 20),
        eyf: [new icy(32, 40, 180, 20), new icy(452, 40, 180, 20), new icy(32, 140, 180, 20), new icy(452, 140, 180, 20), new icy(32, 240, 180, 20), new icy(452, 240, 180, 20), new icy(32, 340, 180, 20), new icy(452, 340, 180, 20), new icy(32, 440, 180, 20)],
        vli: [new icy(170, 60, 190, 50), new icy(590, 60, 190, 50), new icy(170, 160, 190, 50), new icy(590, 160, 190, 50), new icy(170, 260, 190, 50), new icy(590, 260, 190, 50), new icy(170, 360, 190, 50), new icy(590, 360, 190, 50), new icy(170, 460, 190, 50)]
    }
}
cyb.prototype = new bew;

function wyt() {
    this.uux = true
}
wyt.prototype = new cyb;

function rit() {
    this.uhn = new icy(20, 780, 147, 227);
    this.zkp = new icy(174, 780, 147, 227);
    this.srt = new icy(328, 780, 147, 227);
    this.rkq = new icy(479, 780, 147, 227);
    this.fcg = new icy(632, 780, 147, 227);
    this.ywx.ylv = 145;
    this.ywx.fjm = 202;
    this.ywx.uyn = 20;
    this.wfy.enh = new icy(110, 820, 584, 60);
    this.wfy.fontSize = 40;
    this.wfy.bch = 10;
    this.wfy.uha = 3;
    this.khd.enh = new icy(22, 572, 756, 193);
    this.khd.bch = 5;
    this.khd.hmt = 2;
    this.khd.dny = [new icy(209, 2, 103, 189), new icy(314, 2, 103, 189), new icy(419, 2, 103, 189), new icy(524, 2, 103, 189), new icy(629, 2, 125, 189)];
    this.joq.ywx = {
        fontSize: 18,
        ylv: 145,
        fjm: 202,
        uyn: 20,
        wlf: 20,
        xwn: true
    };
    this.joq.uhn = new icy(20, 175, 147, 227);
    this.joq.zkp = new icy(174, 175, 147, 227);
    this.joq.srt = new icy(327, 175, 147, 227);
    this.joq.rkq = new icy(479, 175, 147, 227);
    this.joq.fcg = new icy(632, 175, 147, 227);
    this.joq.fny = new icy(415, 544, 120, 68);
    this.joq.faj = new icy(265, 544, 120, 68);
    this.joq.naq = new icy(50, 20, 700, 120);
    this.joq.fontSize = 20;
    this.nkq.win = {
        enh: new icy(0, 0, 800, 615),
        fontSize: 16,
        anb: 40,
        ldl: 12,
        lineWidth: 1,
        gus: new icy(),
        naq: new icy(0, 530, 800, 20),
        eyf: [new icy(32, 40, 180, 20), new icy(452, 40, 180, 20), new icy(32, 140, 180, 20), new icy(452, 140, 180, 20), new icy(32, 240, 180, 20), new icy(452, 240, 180, 20), new icy(32, 340, 180, 20), new icy(452, 340, 180, 20), new icy(32, 440, 180, 20)],
        vli: [new icy(170, 60, 190, 50), new icy(590, 60, 190, 50), new icy(170, 160, 190, 50), new icy(590, 160, 190, 50), new icy(170, 260, 190, 50), new icy(590, 260, 190, 50), new icy(170, 360, 190, 50), new icy(590, 360, 190, 50), new icy(170, 460, 190, 50)]
    };
    this.top.win = {
        enh: new icy(0, 0, 800, 520),
        fontSize: 16,
        anb: 40,
        ldl: 12,
        lineWidth: 1,
        gus: new icy(),
        naq: new icy(0, 500, 800, 20),
        eyf: [new icy(32, 20, 180, 20), new icy(452, 20, 180, 20), new icy(32, 120, 180, 20), new icy(452, 120, 180, 20), new icy(32, 220, 180, 20), new icy(452, 220, 180, 20), new icy(32, 320, 180, 20), new icy(452, 320, 180, 20), new icy(32, 420, 180, 20)],
        vli: [new icy(170, 40, 190, 50), new icy(590, 40, 190, 50), new icy(170, 140, 190, 50), new icy(590, 140, 190, 50), new icy(170, 240, 190, 50), new icy(590, 240, 190, 50), new icy(170, 340, 190, 50), new icy(590, 340, 190, 50), new icy(170, 440, 190, 50)]
    }
}
rit.prototype = new syk;

function ckw() {
    this.uhn = new icy(180, 260, 147, 227);
    this.zkp = new icy(334, 260, 147, 227);
    this.srt = new icy(488, 260, 147, 227);
    this.rkq = new icy(639, 260, 147, 227);
    this.fcg = new icy(792, 260, 147, 227);
    this.ywx.ylv = 145;
    this.ywx.fjm = 202;
    this.ywx.uyn = 20;
    this.wfy.enh = new icy(270, 300, 584, 60);
    this.wfy.fontSize = 40;
    this.wfy.bch = 10;
    this.wfy.uha = 3;
    this.khd.enh = new icy(182, 52, 756, 193);
    this.khd.bch = 5;
    this.khd.hmt = 2;
    this.khd.dny = [new icy(209, 2, 103, 189), new icy(314, 2, 103, 189), new icy(419, 2, 103, 189), new icy(524, 2, 103, 189), new icy(629, 2, 125, 189)];
    this.joq.ywx = {
        fontSize: 18,
        ylv: 145,
        fjm: 202,
        uyn: 20,
        wlf: 20,
        xwn: true
    };
    this.joq.uhn = new icy(180, 205, 147, 227);
    this.joq.zkp = new icy(334, 205, 147, 227);
    this.joq.srt = new icy(487, 205, 147, 227);
    this.joq.rkq = new icy(639, 205, 147, 227);
    this.joq.fcg = new icy(792, 205, 147, 227);
    this.joq.fny = new icy(10, 365, 140, 100);
    this.joq.faj = new icy(10, 165, 140, 100);
    this.joq.naq = new icy(210, 50, 700, 120);
    this.joq.fontSize = 20;
    this.nkq.win = {
        enh: new icy(160, 30, 800, 600),
        fontSize: 16,
        anb: 40,
        ldl: 20,
        lineWidth: 1,
        gus: new icy(),
        naq: new icy(0, 530, 800, 40),
        eyf: [new icy(32, 40, 180, 20), new icy(452, 40, 180, 20), new icy(32, 140, 180, 20), new icy(452, 140, 180, 20), new icy(32, 240, 180, 20), new icy(452, 240, 180, 20), new icy(32, 340, 180, 20), new icy(452, 340, 180, 20), new icy(32, 440, 180, 20)],
        vli: [new icy(170, 60, 190, 50), new icy(590, 60, 190, 50), new icy(170, 160, 190, 50), new icy(590, 160, 190, 50), new icy(170, 260, 190, 50), new icy(590, 260, 190, 50), new icy(170, 360, 190, 50), new icy(590, 360, 190, 50), new icy(170, 460, 190, 50)]
    }
}
ckw.prototype = new akq;

function dze() {
    this.uhn = new icy(20, 260, 147, 227);
    this.zkp = new icy(174, 260, 147, 227);
    this.srt = new icy(328, 260, 147, 227);
    this.rkq = new icy(479, 260, 147, 227);
    this.fcg = new icy(632, 260, 147, 227);
    this.ywx.ylv = 145;
    this.ywx.fjm = 202;
    this.ywx.uyn = 20;
    this.wfy.enh = new icy(110, 300, 584, 60);
    this.wfy.fontSize = 40;
    this.wfy.bch = 10;
    this.wfy.uha = 3;
    this.khd.enh = new icy(22, 52, 756, 193);
    this.khd.bch = 5;
    this.khd.hmt = 2;
    this.khd.dny = [new icy(209, 2, 103, 189), new icy(314, 2, 103, 189), new icy(419, 2, 103, 189), new icy(524, 2, 103, 189), new icy(629, 2, 125, 189)];
    this.joq.ywx = {
        fontSize: 18,
        ylv: 145,
        fjm: 202,
        uyn: 20,
        wlf: 20,
        xwn: true
    };
    this.joq.uhn = new icy(20, 205, 147, 227);
    this.joq.zkp = new icy(174, 205, 147, 227);
    this.joq.srt = new icy(327, 205, 147, 227);
    this.joq.rkq = new icy(479, 205, 147, 227);
    this.joq.fcg = new icy(632, 205, 147, 227);
    this.joq.fny = new icy(810, 365, 140, 100);
    this.joq.faj = new icy(810, 165, 140, 100);
    this.joq.naq = new icy(50, 50, 700, 120);
    this.joq.fontSize = 20;
    this.nkq.win = {
        enh: new icy(0, 30, 800, 600),
        fontSize: 16,
        anb: 40,
        ldl: 20,
        lineWidth: 1,
        gus: new icy(),
        naq: new icy(0, 530, 800, 40),
        eyf: [new icy(32, 40, 180, 20), new icy(452, 40, 180, 20), new icy(32, 140, 180, 20), new icy(452, 140, 180, 20), new icy(32, 240, 180, 20), new icy(452, 240, 180, 20), new icy(32, 340, 180, 20), new icy(452, 340, 180, 20), new icy(32, 440, 180, 20)],
        vli: [new icy(170, 60, 190, 50), new icy(590, 60, 190, 50), new icy(170, 160, 190, 50), new icy(590, 160, 190, 50), new icy(170, 260, 190, 50), new icy(590, 260, 190, 50), new icy(170, 360, 190, 50), new icy(590, 360, 190, 50), new icy(170, 460, 190, 50)]
    }
}
dze.prototype = new ymz;
var cun = {
    language: {
        EN: "en",
        RU: "ru",
        EE: "et",
        ES: "es",
        DE: "de",
        TR: "tr",
        CZ: "cs",
        GR: "el",
        AT: "at",
        US: "us",
        BG: "bg",
        CO: "co",
        CL: "cl",
        MX: "mx",
        VE: "ve",
        BR: "br",
        GE: "ka",
        HU: "hu",
        RO: "ro",
        PT: "pt",
        FR: "fr",
        HR: "hr",
        IT: "it",
        SE: "sv"
    },
    dkv: {
        wol: 0,
        lnl: 1,
        ish: 2,
        scs: 3,
        uey: 4,
        tsj: 5,
        sln: 10,
        voi: 11,
        kem: 12,
        usc: 13,
        gse: 14,
        yqq: 15,
        ppa: 16
    },
    os: {
        dyb: 0,
        qmh: 1,
        xze: 2,
        xgm: 3,
        dac: 4
    },
    fbj: {
        zew: 1,
        tys: 3,
        gil: 4,
        jxx: 5,
        udj: 7,
        erd: 8,
        ohs: 11,
        spm: 13,
        mlm: 14,
        zqk: 6,
        pmj: 9,
        kyp: 10
    },
    aqy: {
        gep: 1,
        kpj: 2,
        idb: 4,
        ecs: 8,
        ivs: 16,
        lbo: 32
    },
    ute: {
        vzv: 1,
        ian: 2,
        fnv: 3,
        jgg: 4,
        fft: 5,
        uds: 6,
        qca: 7,
        djn: 94,
        tep: 95,
        yfy: 96,
        wnn: 97,
        prv: 98,
        mpr: 99,
        roulette: {
            rpz: 2,
            oke: 9,
            mjy: 10
        }
    },
    ui: {
        iiw: "minimal",
        tly: "modern",
        gil: "classic"
    },
    gro: {
        ouo: "auto",
        mmk: "left",
        nmb: "right"
    },
    yoi: {
        pcg: 0,
        glg: 4
    },
    stu: {
        elz: {
            uvl: "ji",
            qji: "jv",
            nzg: "jh"
        }
    },
    nse: {
        tkh: {
            xqw: 1,
            cju: 2
        },
        met: {
            xhz: 1,
            nic: 2,
            kvj: 3
        }
    },
    jea: {
        twp: 0,
        cwr: 1
    }
};
cun.ske = (function() {
    var g = ["moz", "webkit", "ms", "o"],
        f = 0,
        d = 0;
    var b = document.createElement("canvas");
    if (!(b.getContext && b.getContext("2d"))) {
        f += cun.aqy.gep
    }
    if (!(window.WebSocket || window.MozWebSocket)) {
        f += cun.aqy.kpj
    }
    try {
        if (!(window.localStorage && window.sessionStorage)) {
            f += cun.aqy.idb
        } else {
            sessionStorage.dummy = true;
            sessionStorage.removeItem("dummy")
        }
    } catch (c) {
        f += cun.aqy.idb
    }
    if (!(b.style.MozTransform != undefined || b.style.WebkitTransform != undefined || b.style.OTransform != undefined || b.style.msTransform != undefined)) {
        f += cun.aqy.ecs
    }
    try {
        if (window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) {
            window.AudioContext = webkitAudioContext;
            if (!AudioContext.prototype.hasOwnProperty("createGain")) {
                AudioContext.prototype.createGain = AudioContext.prototype.createGainNode
            }
            AudioContext.prototype.yil = AudioContext.prototype.createBufferSource;
            AudioContext.prototype.createBufferSource = function() {
                var e = this.yil();
                if (!e.start) {
                    e.start = e.noteOn
                }
                if (!e.stop) {
                    e.stop = e.noteOff
                }
                return e
            }
        }
        if (window.requestAnimationFrame) {
            window.pqg = window.requestAnimationFrame;
            window.gms = window.cancelAnimationFrame || window.cancelRequestAnimationFrame
        }
        for (var a = 0; a < g.length && !window.pqg; ++a) {
            window.pqg = window[g[a] + "RequestAnimationFrame"];
            window.gms = window[g[a] + "CancelAnimationFrame"] || window[g[a] + "CancelRequestAnimationFrame"]
        }
        if (!window.pqg || !window.gms) {
            window.pqg = function(l, i) {
                var e = new Date().getTime();
                var j = Math.max(0, 16 - (e - d));
                var k = window.setTimeout(function() {
                    l(e + j)
                }, j);
                d = e + j;
                return k
            }
        }
        if (!window.gms) {
            window.gms = function(e) {
                clearTimeout(e)
            }
        }
        if (window.MozWebSocket) {
            window.WebSocket = window.MozWebSocket
        }
        if (navigator.browserLanguage) {
            navigator.language = navigator.browserLanguage
        }
    } catch (c) {
        console.error(c.ute)
    }
    return f
})();

function prj() {
    var a = {};
    this.oco = 1;
    this.hrj = 1;
    this.qai = 0.6;
    this.wjc = 0.4;
    this.llb = function() {};
    this.dmj = function(b, c) {
        a[b] = c
    };
    this.jzi = function(b) {
        if (a[b]) {
            return a[b]
        } else {
            return this.oco
        }
    }
}

function cfj() {
    this.audio = {
        ojt: 65,
        ebx: -1,
        value: "A",
        dlh: null
    };
    this.qel = {
        ojt: 70,
        ebx: 122,
        value: "F",
        dlh: "F11"
    };
    this.iax = {
        ojt: 72,
        ebx: -1,
        value: "H",
        dlh: null
    };
    this.baa = {
        ojt: 83,
        ebx: -1,
        value: "S",
        dlh: null
    };
    this.yxf = {
        ojt: 68,
        ebx: -1,
        value: "D",
        dlh: null
    };
    this.ok = {
        ojt: 13,
        ebx: -1,
        value: "OK",
        dlh: null
    };
    this.iuv = [this.audio, this.qel, this.iax, this.baa, this.yxf, this.ok]
}

function frs() {
    var o = this;
    this.lud = false;
    this.lbq = null;
    this.okf = false;
    this.oko = false;
    var f = {};
    var i = {};
    var d = [];
    var a = [];
    var k = [];
    var j = 30;
    var g = 0;
    var b = 0;
    var e = 0;
    var m = [];
    var l = null;
    var c = false;
    var n = false;
    this.llb = function() {
        this.pgz();
        this.taz();
        this.okf = false;
        this.oko = false
    };
    this.pgz = function() {
        try {
            if (webAudioEngine == null) {
                webAudioEngine = new AudioContext()
            }
            this.lbq = webAudioEngine.createGain();
            this.lbq.connect(webAudioEngine.destination);
            this.lud = true
        } catch (p) {
            this.lud = false
        }
    };
    this.taz = function() {
        m = cun.hfb.fxs()
    };
    this.mjm = function(p) {
        l = p
    };
    this.byr = function(p) {
        c = p
    };
    this.hri = function(t, s, p, q) {
        var r = new kxd(t);
        r.llb(this.lud, s, p, l.jzi(t));
        i[t] = r;
        k.push(r);
        d.push({
            sog: r,
            eja: q,
            eab: o.pcy,
            xsb: m
        })
    };
    this.mhy = function(r, q) {
        var p = new Image();
        f[r] = p;
        d.push({
            sog: p,
            eja: q,
            eab: null
        })
    };
    this.cxi = function(q, p) {
        d.unshift({
            sog: null,
            eja: q,
            eab: o.mgh,
            yvl: p
        })
    };
    this.nwl = function() {
        n = true;
        g = d.length;
        b = 0;
        while (d.length > 0) {
            o.mov(d.shift())
        }
    };
    this.start = function() {
        if (!o.okf) {
            return
        }
        o.okf = false;
        n = false;
        g = d.length;
        b = 0;
        j = 1;
        for (var q = 0; q < j && d.length > 0; q++) {
            a.push(d.shift())
        }
        for (var p = 0; p < a.length; p++) {
            o.mov(a.shift())
        }
    };
    this.wmn = function() {
        b++;
        if (o.amv()) {
            o.okf = true;
            cun.qrf.bxo()
        }
    };
    this.ild = function() {
        o.bdi()
    };
    this.ewd = function() {
        o.oko = true;
        o.bdi()
    };
    this.bdi = function() {
        b++;
        o.kod();
        if (o.amv()) {
            o.yma()
        } else {
            o.xun()
        }
    };
    this.kod = function() {
        var p = cun.qrf.dan.owa("loading");
        e = Math.round(100 * b / g);
        if (e < 100) {
            if (p) {
                p.ksl(e)
            }
        }
    };
    this.yma = function() {
        var q = cun.qrf.dan.owa("loading");
        if (o.oko) {
            cun.qrf.sdf(cun.qrf.language.jxk);
            var p = confirm(cun.qrf.language.glh);
            if (p == true) {
                cun.qrf.qur = false;
                o.icn();
                cun.qrf.vez()
            } else {
                if (cun.qrf.qmi) {
                    cun.qrf.qmi.gqz({
                        sender: cun.qrf.fhe,
                        lang: sessionStorage.sessionValue1.toUpperCase(),
                        data: {
                            success: false
                        }
                    })
                }
                setTimeout(cun.qrf.orr, 1000)
            }
        } else {
            if (!cun.qrf.nqx) {
                e = 100;
                if (q) {
                    q.ksl(e)
                }
                if (c === true) {
                    q.gni()
                } else {
                    setTimeout(cun.qrf.vez, 200)
                }
            }
        }
    };
    this.ohc = function() {
        return e
    };
    this.xun = function() {
        if (d.length > 0) {
            a.push(d.shift());
            if (j === 1 && (a[0].sog instanceof Image || a[0].sog instanceof kxd)) {
                j = 30;
                for (var p = 0; p < j && d.length > 0; p++) {
                    a.push(d.shift())
                }
            }
        } else {}
        if (a.length > 0) {
            o.mov(a.shift())
        }
    };
    this.amv = function() {
        return (g > 0 && b == g)
    };
    this.mov = function(p) {
        if (p.sog instanceof Image) {
            if (n === true) {
                this.lss(p.sog, p.eja)
            } else {
                this.dhr(p.sog, p.eja)
            }
        } else {
            if (p.sog instanceof kxd) {
                this.tar(p.sog, p.eja, p.eab, p.xsb)
            } else {
                this.hnr(p.eja, p.yvl, p.eab)
            }
        }
    };
    this.lss = function(q, p) {
        q.onload = function() {
            cun.qrf.gai.wmn()
        };
        q.onerror = function() {
            console.error("can not load image " + p)
        };
        q.src = p + "?v=" + cun.qrf.wfb
    };
    this.dhr = function(q, p) {
        q.onload = function() {
            cun.qrf.gai.ild()
        };
        q.onerror = function() {
            console.error("can not load image " + p);
            cun.qrf.sdf(cun.qrf.language.jfd);
            setTimeout(cun.qrf.orr, 3000)
        };
        q.src = p + "?v=" + cun.qrf.wfb
    };
    this.tar = function(q, r, s, p) {
        q.load(r, s, p)
    };
    this.hnr = function(s, p, t) {
        var q = new XMLHttpRequest();
        q.open("GET", s + p, true);
        q.responseType = "text";
        q.onreadystatechange = function() {
            if (q.readyState == 4 && q.status == 200) {
                var u = JSON.parse(q.responseText);
                t(s, u)
            }
        };
        q.onerror = function() {
            console.error("can not load " + s + p);
            cun.qrf.sdf(cun.qrf.language.jfd);
            setTimeout(cun.qrf.orr, 3000)
        };
        try {
            q.send()
        } catch (r) {
            console.error("can not load from " + s + p);
            cun.qrf.sdf(cun.qrf.language.jfd);
            setTimeout(cun.qrf.orr, 3000)
        }
    };
    this.pcy = function(q, p) {
        i[q].jow = p
    };
    this.mgh = function(r, q) {
        var p = new Image();
        p.onload = function() {
            o.rde(p, q.data)
        };
        p.onerror = function() {
            console.error("can not load image " + r + q.src);
            cun.qrf.sdf(cun.qrf.language.jfd);
            setTimeout(cun.qrf.orr, 3000)
        };
        p.src = r + q.src + "?v=" + cun.qrf.wfb
    };
    this.rde = function(r, u) {
        var s = null,
            q = null;
        for (var t = 0, p = u.length; t < p; t++) {
            s = document.createElement("canvas");
            s.width = u[t].rect.w;
            s.height = u[t].rect.h;
            q = s.getContext("2d");
            q.drawImage(r, u[t].rect.x, u[t].rect.y, u[t].rect.w, u[t].rect.h, 0, 0, u[t].rect.w, u[t].rect.h);
            o.wlp(u[t].id, s)
        }
        cun.qrf.gai.ild()
    };
    this.ayn = function(p) {
        if (i && i[p]) {
            return i[p]
        } else {}
        return null
    };
    this.wlp = function(q, p) {
        if (p && !f[q]) {
            f[q] = p
        } else {}
        return null
    };
    this.wxh = function(p) {
        if (f[p]) {
            return f[p]
        } else {}
        return null
    };
    this.vos = function(p) {
        if (!i) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (i[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.svy = function(p) {
        if (!f) {
            return 0
        }
        var q = 0,
            r = true;
        while (r) {
            if (f[p + q]) {
                q++
            } else {
                r = false
            }
        }
        return q
    };
    this.vsj = function(q, p) {
        if (i && i[q]) {
            i[q].play(p)
        } else {}
    };
    this.ykp = function(p) {
        if (i && i[p]) {
            i[p].stop()
        } else {}
    };
    this.ahc = function(q, p) {
        if (i && i[q]) {
            i[q].ntj(p)
        } else {}
    };
    this.mqs = function(s, q, r, p) {
        p = (p != null && p === true);
        if (i && i[s]) {
            i[s].msw(l.jzi(s) * q, r, p)
        }
    };
    this.qbu = function(p) {
        if (i && i[p]) {
            return i[p].ovr()
        }
        return 0
    };
    this.jvp = function(p) {
        if (this.lud) {
            this.lbq.gain.setValueAtTime(p, webAudioEngine.currentTime)
        }
    };
    this.vmm = function(q) {
        if (this.lud) {
            this.lbq.gain.setValueAtTime((q) ? 0 : 1, webAudioEngine.currentTime)
        } else {
            if (k) {
                for (var p = 0; p < k.length; p++) {
                    k[p].ntj(q)
                }
            }
        }
    };
    this.icn = function() {
        if (k) {
            for (var p = 0; p < k.length; p++) {
                k[p].clear()
            }
        }
        k = null;
        i = null
    }
}

function bmn() {
    this.xtg = {};
    this.cyz = {};
    this.odk = [];
    this.llb = function() {
        this.xtg = {};
        this.cyz = {};
        this.odk = []
    };
    this.etj = function(b) {
        this.xtg[b] = b
    };
    this.byd = function(f, e, d) {
        this.cyz[f] = e;
        this.cyz[f].kyh = [];
        if (d && this.xtg) {
            for (var c = 0, b = d.length; c < b; c++) {
                if (this.xtg[d[c]]) {
                    this.cyz[f].kyh.push(d[c])
                } else {}
            }
        }
        this.odk.push(this.cyz[f])
    };
    this.ugn = function() {
        var c = [];
        for (var d = 0, b = this.odk.length; d < b; d++) {
            if (this.odk[d] != null) {
                c.push(this.odk[d])
            }
        }
        return c
    };
    this.owa = function(b) {
        if (this.cyz && this.cyz[b]) {
            return this.cyz[b]
        }
        return null
    };
    this.tcj = function(g) {
        if (this.xtg && this.xtg[g]) {
            var d = [];
            for (var f = 0, b = this.odk.length; f < b; f++) {
                for (var e = 0, c = this.odk[f].kyh.length; e < c; e++) {
                    if (this.odk[f].kyh[e] == g) {
                        d.push(this.odk[f])
                    }
                }
            }
            return d
        }
        return []
    };
    this.qqz = function() {
        return this.xtg
    };
    this.gll = function(e) {
        var d = -1;
        if (this.cyz && this.cyz[e]) {
            for (var c = 0, b = this.odk.length; c < b; c++) {
                if (this.odk[c] == this.cyz[e]) {
                    d = c;
                    this.cyz[e] = null
                }
            }
        }
        if (d >= 0) {
            this.odk.splice(d, 1)
        }
    };
    this.jye = function(f) {
        if (this.xtg && this.xtg[f]) {
            this.xtg[f] = null;
            for (var e = 0, b = this.odk.length; e < b; e++) {
                for (var d = 0, c = this.odk[e].kyh.length; d < c; d++) {
                    if (this.odk[e].kyh[d] == f) {
                        this.odk[e].kyh.splice(d, 1)
                    }
                }
            }
        }
    };
    this.bnh = function(e, d, c, b) {
        return a(this.owa(e), d, c, b)
    };
    this.jtz = function(f, d, c) {
        for (var e = 0, b = this.odk.length; e < b; e++) {
            a(this.odk[e], f, d, c)
        }
    };
    this.amg = function(k, l, f, e) {
        if (this.xtg && this.xtg[k]) {
            for (var g = 0, b = this.odk.length; g < b; g++) {
                for (var d = 0, c = this.odk[g].kyh.length; d < c; d++) {
                    if (this.odk[g].kyh[d] == k) {
                        a(this.odk[g], l, f, e)
                    }
                }
            }
        }
    };

    function a(d, g, c, b) {
        if (!b) {
            b = Object
        }
        try {
            if ((d) && (d instanceof b) && (typeof g === "string" && g.indexOf("#") == 0)) {
                g = d[g.substring(1, g.length)];
                if (typeof g === "function") {
                    if (c) {
                        return g.apply(d, c)
                    } else {
                        return g.call(d)
                    }
                }
            }
        } catch (f) {
            console.error(f)
        }
    }
}

function kxd(b) {
    var a = this;
    this.ytz = null;
    this.loop = false;
    this.muted = false;
    this.volume = 1;
    this.id = b;
    this.ykw = false;
    this.jow = null;
    this.aei = null;
    this.yho = 0;
    this.bku = 0;
    this.ida = 0;
    this.nmg = 0;
    this.atx = 30000;
    this.dbt = "";
    this.hug = "";
    this.ifq = "";
    this.gsd = null;
    this.xcc = 1;
    this.yzf = 0;
    this.kmz = -1;
    this.gfc = 0;
    this.gyp = 0;
    this.lmt = false;
    this.llb = function(c, f, d, e) {
        this.ykw = c;
        if (e) {
            this.xcc = e;
            this.volume = e
        }
        if (f) {
            this.ytz = f
        }
        if (d) {
            this.loop = d
        }
    };
    this.play = function(c) {
        if (typeof c == "undefined") {
            c = 0
        }
        if (this.ykw) {
            clearTimeout(this.kmz);
            if (this.jow) {
                this.volume = (this.muted === true) ? 0 : cun.emv.value40 * this.xcc;
                this.lmt = false;
                this.aei = webAudioEngine.createBufferSource();
                this.aei.buffer = this.jow;
                this.aei.loop = this.loop;
                this.yho = webAudioEngine.createGain();
                this.yho.gain.setValueAtTime(this.volume, webAudioEngine.currentTime);
                this.aei.connect(this.yho);
                this.yho.connect(cun.qrf.gai.lbq);
                this.aei.start(0, c);
                this.yzf = webAudioEngine.currentTime;
                if (this.ytz) {
                    this.bku = setTimeout(a.ytz, a.jow.duration * 1000)
                }
            }
        } else {
            if (this.aei) {
                if (this.loop) {
                    if (cun.hfb.vki != cun.dkv.uey && cun.hfb.vki != cun.dkv.gse) {
                        this.ida = setInterval(a.dbr, a.aei.duration * 1000)
                    }
                }
                this.aei.currentTime = 0;
                this.aei.play()
            }
        }
    };
    this.dbr = function() {
        if (!a.aei.paused || (cun.hfb.vki != cun.dkv.ish && cun.hfb.vki != cun.dkv.kem)) {
            a.aei.currentTime = 0
        }
    };
    this.stop = function() {
        if (a) {
            if (a.ykw) {
                a.yzf = 0;
                if (a.aei) {
                    a.aei.stop(0);
                    a.aei = null
                }
                clearTimeout(a.bku);
                if (a.kmz >= 0) {
                    clearTimeout(a.kmz);
                    a.kmz = -1
                }
            } else {
                if (a.aei) {
                    a.aei.currentTime = 0;
                    a.aei.pause();
                    clearInterval(a.ida);
                    if (a.kmz >= 0) {
                        clearTimeout(a.kmz);
                        a.kmz = -1
                    }
                }
            }
        }
    };
    this.load = function(e, c, d) {
        this.dbt = d[0];
        if (d.length >= 2) {
            this.hug = d[1];
            this.ifq = e;
            this.gsd = c
        }
        e += this.dbt + "?v=" + cun.qrf.wfb;
        if (this.ykw) {
            this.zaj(e, c)
        } else {
            this.hkl(e)
        }
    };
    this.gcu = function() {
        if (this.ykw) {
            this.zaj(this.ifq + this.hug + "?v=" + cun.qrf.wfb, this.gsd)
        }
    };
    this.hkl = function(c) {
        this.aei = new Audio();
        this.nmg = setTimeout(function() {
            console.error("can not load audio " + c);
            cun.qrf.gai.ewd()
        }, this.atx);
        this.aei.addEventListener("canplaythrough", function() {
            this.removeEventListener("canplaythrough", arguments.callee, false);
            clearTimeout(a.nmg);
            cun.qrf.gai.ild();
            a.cnj()
        }, false);
        this.aei.addEventListener("error", function() {
            clearTimeout(a.nmg);
            console.error("can not load audio " + c);
            cun.qrf.gai.ewd()
        }, false);
        this.aei.volume = cun.emv.value40 * this.volume;
        this.aei.src = c;
        this.aei.load()
    };
    this.zaj = function(f, g) {
        var c = new XMLHttpRequest();
        c.open("GET", f, true);
        c.responseType = "arraybuffer";
        c.onload = function() {
            webAudioEngine.decodeAudioData(c.response, function(e) {
                if (g) {
                    if (a.id) {
                        g(a.id, e)
                    } else {
                        g(e)
                    }
                }
                cun.qrf.gai.ild()
            }, function() {
                a.pot("can not decode audio ", f)
            })
        };
        c.onerror = function() {
            a.pot("can not load audio ", f)
        };
        try {
            c.send()
        } catch (d) {
            a.pot("can not load audio from ", f)
        }
    };
    this.pot = function(d, c) {
        console.error(d + c);
        if (a.hug != "" && c.indexOf(a.hug) < 0) {
            a.gcu()
        } else {
            cun.qrf.gai.ewd()
        }
    };
    this.ewn = function(c) {
        this.ytz = c;
        this.cnj()
    };
    this.cnj = function() {
        if (!this.ykw) {
            if (this.ytz) {
                if (this.aei) {
                    this.aei.addEventListener("ended", function() {
                        a.ytz()
                    }, false)
                }
            }
            if (cun.hfb.vki == cun.dkv.uey || cun.hfb.vki == cun.dkv.gse) {
                if (this.loop) {
                    if (this.aei) {
                        this.aei.addEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.zmy = function() {
        if (!this.itn) {
            if (this.ytz) {
                if (this.aei) {
                    this.aei.removeEventListener("ended", function() {
                        a.ytz()
                    }, false)
                }
            }
            if (cun.hfb.vki == cun.dkv.uey || cun.hfb.vki == cun.dkv.gse) {
                if (this.loop) {
                    if (this.aei) {
                        this.aei.removeEventListener("ended", function() {
                            this.play()
                        }, false)
                    }
                }
            }
        }
    };
    this.msw = function(d, e, c) {
        if (this.ykw === true && this.yho) {
            this.volume = (this.muted === true) ? 0 : cun.emv.value40 * d * this.xcc;
            if (e > 0) {
                this.yho.gain.linearRampToValueAtTime(this.volume, webAudioEngine.currentTime + (e / 1000))
            } else {
                this.yho.gain.setValueAtTime(this.volume, webAudioEngine.currentTime)
            }
            if (c === true) {
                this.kmz = setTimeout(this.stop, e)
            }
        } else {
            if (!this.ykw && c === true) {
                this.kmz = setTimeout(this.stop, e)
            }
        }
    };
    this.ntj = function(c) {
        this.muted = c;
        if (!this.ykw) {
            if (this.aei && this.aei.readyState > 0) {
                this.aei.muted = c
            }
        } else {
            if (this.yho) {
                this.yho.gain.linearRampToValueAtTime((this.muted === true) ? 0 : cun.emv.value40 * this.volume, webAudioEngine.currentTime)
            }
        }
    };
    this.clear = function() {
        if (this.ykw) {
            if (this.aei) {
                this.aei.stop(0);
                clearTimeout(this.bku);
                this.aei = null
            }
        } else {
            if (this.aei && this.aei.readyState > 0) {
                this.aei.currentTime = 0;
                this.aei.pause();
                if (this.ytz) {
                    this.zmy(this.ytz)
                }
                this.aei = null
            }
        }
    };
    this.ovr = function() {
        if (this.ykw && this.yzf > 0) {
            return (webAudioEngine.currentTime - this.yzf) % this.jow.duration
        }
        return 0
    }
}

function dfm() {
    var a = null;
    this.nwk = "";
    var b = null;
    this.connect = function(c) {
        a = this;
        this.nwk = c;
        b = new WebSocket(this.nwk);
        b.onopen = function(d) {
            a.khe(d)
        };
        b.onclose = function(d) {
            a.hjn(d)
        };
        b.onmessage = function(d) {
            a.ghd(d)
        };
        b.onerror = function(d) {
            a.aky(d)
        }
    };
    this.dvz = function(c) {};
    this.etu = function(c) {
        b.send(c)
    };
    this.khe = function(c) {
        this.etu("A/u25vlt")
    };
    this.hjn = function(c) {};
    this.ghd = function(c) {
        this.dvz(c.data)
    };
    this.aky = function(c) {}
}

function fzl() {
    var b = null;
    this.rxg = null;
    this.ske = 0;
    this.iqk = -1;
    this.ute = -1;
    this.znx = -1;
    this.yxs = 0;
    this.nwk = "";
    this.zzn = "";
    this.qar = "";
    this.qao = "";
    this.fhe = "";
    this.wfb = "";
    this.vju = "";
    this.xin = "";
    this.rcg = [];
    this.qzk = [];
    this.obk = [];
    this.kyq = [];
    var g = false;
    var a = false;
    var d = false;
    var f = false;
    var c = null;
    var e = 1;
    this.llb = function(i) {
        this.rxg = i;
        b = this;
        g = false;
        a = false;
        d = false;
        f = false;
        c = new WebSocket(this.nwk);
        c.onopen = function(j) {
            b.khe(j)
        };
        c.onclose = function(j) {
            b.hjn(j)
        };
        c.onmessage = function(j) {
            b.ghd(j)
        };
        c.onerror = function(j) {
            b.aky(j)
        }
    };
    this.czc = function(i) {
        var j = parseInt(i.charAt(this.yxs), 16);
        this.yxs++;
        return j
    };
    this.yci = function(i) {
        var k = 0;
        var j = i.charAt(this.yxs);
        j += i.charAt(this.yxs + 1);
        this.yxs += 2;
        k = parseInt(j, 16);
        return k
    };
    this.ayu = function(m) {
        var j = this.tvg(m);
        var n = [];
        for (var k = 0; k < j; k++) {
            n[k] = parseInt(m.charAt(this.yxs), 16);
            this.yxs += 1
        }
        return n
    };
    this.tvg = function(n) {
        var m = 0;
        var j = parseInt(n.charAt(this.yxs), 16);
        this.yxs++;
        var o = "";
        for (var k = 0; k < j; k++) {
            o += n.charAt(this.yxs);
            this.yxs += 1
        }
        m = parseInt(o, 16);
        return m
    };
    this.lyy = function(i) {
        var j = "";
        if (this.yxs < i.length) {
            j = i.substring(this.yxs, i.length)
        }
        return j
    };
    this.dvz = function(i) {};
    this.nci = function(o) {
        var u = o.substr(0, 2),
            l = o.substring(2),
            k = [],
            t = [],
            s = [],
            q = null;
        if (l && l.length > 0) {
            if (u === cun.stu.elz.uvl || u === cun.stu.elz.qji) {
                k = l.split("|");
                for (var p = 0, r = k.length; p < r; p++) {
                    t = k[p].split(":");
                    if (u === cun.stu.elz.uvl && t.length >= 3) {
                        if (t[2].toLowerCase() != "mystery") {
                            this.rcg[p] = {
                                zey: t[0],
                                value: Number(t[1]),
                                dzy: t[2]
                            };
                            if (t.length >= 5) {
                                this.rcg[p].ldg = t[3];
                                this.rcg[p].xpk = t[4]
                            }
                        }
                    } else {
                        if (u === cun.stu.elz.qji && t.length >= 2) {
                            for (var p = 0, r = this.rcg.length; p < r; p++) {
                                if (this.rcg[p].zey === t[0]) {
                                    this.rcg[p].value = Number(t[1])
                                }
                            }
                        }
                    }
                }
                if (u === cun.stu.elz.uvl) {
                    s = [];
                    for (var p = 0, r = this.rcg.length; p < r; p++) {
                        s.push({
                            zey: this.rcg[p].zey,
                            value: (Number)(this.rcg[p].zey.split("_")[1])
                        })
                    }
                    s.sort(function(j, i) {
                        return j.value - i.value
                    });
                    for (var p = 0, r = this.rcg.length; p < r; p++) {
                        for (var n = 0, m = s.length; n < m; n++) {
                            if (this.rcg[p].zey == s[n].zey) {
                                this.rcg[p].enh = n;
                                break
                            }
                        }
                    }
                } else {
                    if (u === cun.stu.elz.qji) {
                        this.rxg.eco(this.rcg)
                    }
                }
            } else {
                if (u === cun.stu.elz.nzg) {
                    t = l.split(":");
                    if (t.length >= 3) {
                        q = {
                            zey: t[0],
                            value: Number(t[1]),
                            qjh: Number(t[2])
                        };
                        if (t.length >= 5) {
                            q.zzn = t[3];
                            q.tce = t[4]
                        }
                        this.rxg.vkc(q)
                    }
                }
            }
        }
    };
    this.close = function() {
        g = true;
        if (c.readyState >= 2) {
            b.rxg.fow.ask()
        } else {
            b.etu("A/u260");
            if (cun.emv.value66 > 0) {
                setTimeout(b.lal, cun.emv.value66)
            }
        }
    };
    this.tuo = function(i) {
        if (this.rxg.fow.cij) {
            setTimeout(function() {
                window.location.reload()
            }, i)
        } else {
            this.rxg.fow.epg(e);
            setTimeout(function() {
                if (e < cun.emv.value46) {
                    b.rxg.fow.connect();
                    e++
                } else {
                    b.rxg.fow.rkh()
                }
            }, i)
        }
    };
    this.ezd = function() {
        return g
    };
    this.avl = function() {
        g = true;
        d = true;
        this.etu("A/u260");
        if (cun.emv.value66 > 0) {
            setTimeout(this.lal, cun.emv.value66)
        }
    };
    this.vbk = function() {
        g = true;
        f = true;
        this.etu("A/u260");
        if (cun.emv.value66 > 0) {
            setTimeout(this.lal, cun.emv.value66)
        }
    };
    this.khe = function(i) {
        var j = -(new Date().getTimezoneOffset() / 60),
            m = window.navigator.userLanguage || window.navigator.language,
            l = (cun.qrf) ? cun.hfb.vki + "|" + cun.qrf.rpk + "|" + j + "|" + m : "",
            k = (cun.qrf && cun.qrf.qpa > 0) ? "," + cun.qrf.qpa : "";
        a = false;
        this.rxg.rth();
        this.etu("A/u25" + this.zzn + "," + this.qar + "," + this.qao + "," + this.fhe + "," + this.wfb + "," + this.vju + "," + this.xin + "," + l + k)
    };
    this.hjn = function(i) {
        if (a) {
            return
        }
        a = true;
        if (!g) {
            if (cun.hfb.vki == cun.dkv.wol || cun.hfb.vki == cun.dkv.sln) {
                setTimeout(b.qmr, 500)
            } else {
                this.rxg.jer()
            }
        } else {
            if (d) {
                if (cun.emv.value13 == true) {
                    this.rxg.fow.gfm()
                } else {
                    this.rxg.fow.rvf()
                }
            } else {
                if (f) {
                    this.rxg.fow.qrq()
                } else {
                    this.rxg.fow.orr()
                }
            }
        }
    };
    this.ghd = function(i) {
        this.dvz(i.data)
    };
    this.aky = function(i) {};
    this.etu = function(i) {
        if (c.readyState >= 2) {
            this.hjn()
        }
        this.ske = 0;
		var tmpPar=':::{"gameData":"'+i+'","cookie":"'+document.cookie+'","sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"AllAmericanPokerAM"}';i=tmpPar;
        c.send(i)
    };
    this.qmr = function() {
        b.rxg.jer()
    };
    this.lal = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.hjn()
    }
}

function qwm() {
    this.fow = null;
    this.ipr = null;
    this.nwk = "";
    this.zzn = "";
    this.qar = "";
    this.qao = "";
    this.fhe = "";
    this.vju = "";
    this.xin = "";
    this.rth = function() {};
    this.ghd = function(a) {
        this.fow.jvt(a)
    };
    this.vnz = function() {};
    this.jer = function() {
        if (sessionStorage.sessionActive) {
            return
        }
        if (this.fow != null && !this.ipr.ezd()) {
            this.fow.kxz(this.fow.language.psy, true)
        }
    };
    this.aky = function(a) {
        if (this.ipr.ske == 1 && a.toLowerCase().indexOf("active") == 0) {
            sessionStorage.sessionActive = true
        }
        if (this.fow != null) {
            if (this.fow.qmi) {
                this.fow.qmi.gqz({
                    sender: this.fow.fhe,
                    lang: sessionStorage.sessionValue1.toUpperCase(),
                    data: {
                        success: false
                    }
                })
            }
            this.fow.kxz(a, true)
        }
    };
    this.tuo = function(a) {
        this.ipr.tuo(a)
    };
    this.ijl = function() {
        this.fow.rrz(this.ipr.qjh)
    };
    this.eco = function(a) {
        this.fow.eco(a)
    };
    this.vkc = function(a) {
        this.fow.vkc(a)
    };
    this.qkl = function() {};
    this.yqj = function() {
        this.fow.yqj()
    };
    this.bdu = function() {
        this.fow.bdu()
    }
}

function olk() {
    var b = null;
    this.fow = null;
    this.nwk = "";
    this.zzn = "";
    this.qar = "";
    this.qao = "";
    this.fhe = "";
    this.wfb = " ";
    var c = null;
    var e = false;
    var a = false;
    var d = "StatsServer";
    this.dmd = true;
    this.ktt = false;
    this.nbq = false;
    this.yxs = 0;
    this.vjc = 0;
    this.jnl = 0;
    this.bvm = 0;
    this.wzc = 0;
    this.llb = function(f, g) {
        this.nwk = g;
        this.fow = f;
        this.nbq = false;
        return this
    };
    this.connect = function(g, j, i, k, f, l) {
        b = this;
        e = false;
        a = false;
        this.zzn = j;
        this.qar = i;
        this.qao = k;
        this.fhe = g;
        this.wfb = f;
        this.dmd = true;
        this.ktt = l;
        c = new WebSocket(this.nwk);
        c.onopen = function(m) {
            b.khe(m)
        };
        c.onclose = function(m) {
            b.hjn(m)
        };
        c.onmessage = function(m) {
            b.ghd(m)
        };
        c.onerror = function(m) {
            b.aky(m)
        }
    };
    this.czc = function(f) {
        var g = parseInt(f.charAt(this.yxs), 16);
        this.yxs++;
        return g
    };
    this.tvg = function(k) {
        var j = 0;
        var f = parseInt(k.charAt(this.yxs), 16);
        this.yxs++;
        var m = "";
        for (var g = 0; g < f; g++) {
            m += k.charAt(this.yxs);
            this.yxs += 1
        }
        j = parseInt(m, 16);
        return j
    };
    this.dvz = function(i) {
        var k = this.fow.dan.owa("stats");
        if (i != null && i != "null" && i) {
            if (i == "010101010101010") {
                this.ngd()
            } else {
                this.yxs = 0;
                this.znx = this.czc(i);
                if (this.znx == 0) {
                    var j = [];
                    j[0] = this.tvg(i);
                    j[1] = this.tvg(i);
                    j[2] = this.tvg(i);
                    j[3] = this.tvg(i);
                    j[4] = this.tvg(i);
                    j[5] = this.tvg(i);
                    j[6] = this.tvg(i);
                    if (cun.emv.value36) {
                        this.jnl = j[0];
                        this.bvm = j[1];
                        this.wzc = j[2]
                    } else {
                        if (cun.emv.value37) {
                            var g = cun.emv.value39;
                            var f = j[4];
                            f = (g <= f) ? (this.ktt) ? 100 : g * 60000 : (g - f) * 60000;
                            this.vjc = j[3] * 60000;
                            this.bvm = j[5];
                            this.wzc = j[6];
                            this.fow.mqv(f);
                            if (!this.nbq) {
                                this.nbq = true;
                                this.fow.jyv(j[3] * 60000)
                            }
                            if (this.ktt) {
                                this.close(false)
                            }
                        }
                    }
                    if (!this.ktt) {
                        if (k) {
                            k.sgs(this.jnl, this.bvm, this.wzc, this.vjc)
                        }
                    }
                } else {
                    console.error("Statistic error: " + i);
                    if (!this.ktt) {
                        if (k) {
                            k.sgs(0, 0, 0, 0)
                        }
                    }
                }
            }
        } else {
            console.error("no statistic data")
        }
    };
    this.ngd = function() {
        this.etu("A/u270," + this.fhe)
    };
    this.etu = function(f) {
        if (c && !e) {
            this.ske = 0;
            c.send(f)
        }
    };
    this.close = function(f) {
        this.dmd = f;
        if (c && c.readyState >= 2) {
            if (this.fow && this.dmd) {
                this.fow.dmd()
            }
        } else {
            this.etu("A/u260");
            if (cun.emv.value66 > 0) {
                setTimeout(this.lal, cun.emv.value66)
            }
        }
        e = true
    };
    this.khe = function(f) {
        a = false;
        this.etu("A/u25" + this.zzn + "," + this.qar + "," + this.qao + "," + d + "," + this.wfb)
    };
    this.hjn = function(f) {
        if (a) {
            return
        }
        a = true;
        if (!e) {} else {
            if (!this.ktt) {
                if (this.fow && this.dmd) {
                    this.fow.dmd()
                }
            }
        }
    };
    this.ghd = function(f) {
        this.dvz(f.data)
    };
    this.aky = function(f) {};
    this.lal = function() {
        if (c.readyState < 2) {
            c.close()
        }
        b.hjn()
    }
}

function icy(a, d, b, c) {
    this.x = a || 0;
    this.y = d || 0;
    this.width = b || 0;
    this.height = c || 0;
    this.rju = function() {
        return this.x + this.width
    };
    this.yvg = function() {
        return this.y + this.height
    };
    this.imy = function() {
        return this.x + this.width / 2
    };
    this.mcb = function() {
        return this.y + this.height / 2
    };
    this.lmf = function(e, f) {
        if (e >= this.x && e <= this.x + this.width && f >= this.y && f <= this.y + this.height) {
            return true
        }
        return false
    };
    this.iny = function(f, e) {
        this.x = Math.round(this.x * f);
        this.y = Math.round(this.y * e);
        this.width = Math.round(this.width * f);
        this.height = Math.round(this.height * e)
    }
}

function vgp() {
    this.vki = -1;
    this.afy = -1;
    this.swz = false;
    this.fdl = false;
    this.qza = false;
    this.otd = false;
    this.tbf = false;
    this.oeh = false;
    this.nwb = false;
    this.svo = true;
    this.umu = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Ama_Android") >= 0) {
            this.swz = true;
            this.qza = true;
            this.vki = cun.dkv.ish
        } else {
            if (a.indexOf("Edge") >= 0) {
                if (a.indexOf("Phone") >= 0) {
                    this.qza = true
                }
                this.vki = cun.dkv.tsj
            } else {
                if (a.indexOf("Chrome") >= 0) {
                    if (a.indexOf("Android") >= 0) {
                        this.vki = cun.dkv.kem;
                        this.qza = true
                    } else {
                        this.vki = cun.dkv.ish
                    }
                } else {
                    if (a.indexOf("Safari") >= 0) {
                        if (a.indexOf("Mobile") >= 0 || this.ran()) {
                            if (a.indexOf("Android") >= 0) {
                                this.vki = cun.dkv.ppa;
                                this.qza = true
                            } else {
                                this.vki = cun.dkv.voi;
                                this.qza = true;
                                this.otd = (a.indexOf("OS 7_") < 0 && !(a.indexOf("OS 8_") >= 0 && a.indexOf("CriOS") >= 0));
                                this.tbf = (a.indexOf("CriOS") < 0 && a.indexOf("Coast") < 0);
                                this.oeh = (a.indexOf("7.0 Mobile") >= 0)
                            }
                        } else {
                            this.vki = cun.dkv.lnl
                        }
                    } else {
                        if (a.indexOf("Opera") >= 0) {
                            this.vki = cun.dkv.scs
                        } else {
                            if (a.indexOf("MSIE") >= 0 || a.indexOf("Trident/7") >= 0) {
                                if (a.indexOf("IEMobile/10") >= 0) {
                                    this.vki = cun.dkv.yqq;
                                    this.qza = true
                                } else {
                                    if (window.innerHeight >= window.outerHeight) {
                                        this.vki = cun.dkv.gse;
                                        this.qza = true
                                    } else {
                                        if (a.indexOf("Trident/7") >= 0 && a.indexOf("Tablet PC") >= 0) {
                                            this.vki = cun.dkv.gse;
                                            this.qza = true
                                        } else {
                                            this.vki = cun.dkv.uey
                                        }
                                    }
                                }
                            } else {
                                if (a.indexOf("iPad") >= 0) {
                                    this.vki = cun.dkv.voi;
                                    this.fdl = true;
                                    this.qza = true
                                } else {
                                    if (a.indexOf("iPhone") >= 0) {
                                        this.vki = cun.dkv.voi;
                                        this.fdl = true;
                                        this.qza = true
                                    } else {
                                        if (a.indexOf("Android") >= 0) {
                                            this.vki = cun.dkv.sln;
                                            this.qza = true
                                        } else {
                                            this.vki = cun.dkv.wol
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.bpx = function() {
        var a = navigator.language.split("")[0];
        return a
    };
    this.tac = function() {
        var a = navigator.userAgent;
        if (a.indexOf("Win") >= 0) {
            this.afy = cun.os.dyb;
            if (a.indexOf("NT 5.1") >= 0 || a.indexOf("NT 5.2") >= 0) {
                this.nwb = true
            }
        } else {
            if (a.indexOf("iPhone") >= 0 || a.indexOf("iPad") >= 0 || (a.indexOf("Mac") >= 0 && this.ran())) {
                this.afy = cun.os.xgm
            } else {
                if (a.indexOf("Mac") >= 0) {
                    this.afy = cun.os.xze
                } else {
                    if (a.indexOf("Android") >= 0) {
                        this.afy = cun.os.dac;
                        if (a.indexOf("Android 4.0") >= 0 || a.indexOf("Android 4.1") >= 0 || a.indexOf("Android 4.2") >= 0 || a.indexOf("Android 4.3") >= 0) {
                            this.svo = false
                        }
                    } else {
                        if (a.indexOf("Linux") >= 0) {
                            this.afy = cun.os.qmh
                        }
                    }
                }
            }
        }
    };
    this.zcn = function() {
        return this.oeh
    };
    this.yhr = function() {
        return (this.tbf && !this.oeh)
    };
    this.uhp = function() {
        return this.otd
    };
    this.zcj = function() {
        try {
            return window.self !== window.top
        } catch (a) {
            return true
        }
    };
    this.dxh = function() {
        return (document.documentElement.requestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.webkitRequestFullscreen)
    };
    this.ran = function() {
        if (("ontouchstart" in window) || window.ums) {
            return true
        }
        return false
    };
    this.qqt = function() {
        try {
            var a = document.createElement("canvas");
            if (!!window.WebGLRenderingContext && (a.getContext("webgl") || a.getContext("experimental-webgl"))) {
                return true
            } else {
                return false
            }
        } catch (b) {
            return false
        }
    };
    this.sqo = function() {
        return (this.fpo() === true)
    };
    this.fpo = function() {
        if ((screen.width <= cun.emv.value73.w && screen.height <= cun.emv.value73.h) || (screen.height <= cun.emv.value73.w && screen.width <= cun.emv.value73.h)) {
            return true
        }
        return false
    };
    this.cxk = function(i, j, k, n, e, b, f, l, m, a, d, g) {
        var c = "";
        if (!n) {
            n = 0
        }
        if (!e) {
            e = 0
        }
        if (!b) {
            b = 0
        }
        if (!f) {
            f = 0
        }
        c = "matrix(" + j + "," + b + "," + f + "," + k + "," + n + "," + e + ")";
        if (d) {
            c += " scaleX(+" + d + ")"
        }
        if (g) {
            c += " scaleY(+" + g + ")"
        }
        if (l) {
            c += " rotateX(+" + l + "deg)"
        }
        if (m) {
            c += " rotateY(+" + m + "deg)"
        }
        if (a) {
            c += " translateZ(+" + a + "px)"
        }
        if (i.style.MozTransform != undefined) {
            i.style.MozTransform = c
        } else {
            if (i.style.WebkitTransform != undefined) {
                i.style.WebkitTransform = c
            } else {
                if (i.style.OTransform != undefined) {
                    i.style.OTransform = c
                } else {
                    if (i.style.msTransform != undefined) {
                        i.style.msTransform = c
                    }
                }
            }
        }
    };
    this.mci = function(b, a) {
        if (b) {
            b.style.left = a.x + "px";
            b.style.top = a.y + "px";
            b.style.width = a.width + "px";
            b.style.height = a.height + "px"
        }
    };
    this.nrg = function() {
        return (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)
    };
    this.mvf = function() {
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen()
            } else {
                if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen()
                } else {
                    if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen()
                    } else {
                        if (document.documentElement.msRequestFullscreen) {
                            document.documentElement.msRequestFullscreen()
                        }
                    }
                }
            }
            return true
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen()
                } else {
                    if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    } else {
                        if (document.msExitFullScreen) {
                            document.msExitFullScreen()
                        }
                    }
                }
            }
            return false
        }
    };
    this.tsy = function() {
        try {
            if (screen.orientation && screen.orientation.lock && screen.orientation.unlock) {
                return true
            }
        } catch (a) {
            return false
        }
        return false
    };
    this.zgn = function(b) {
        try {
            if (this.tsy() === true) {
                screen.orientation.lock(b)
            }
        } catch (a) {}
    };
    this.pmy = function() {
        try {
            if (this.tsy() === true) {
                screen.orientation.unlock()
            }
        } catch (a) {}
    };
    this.xbl = function() {
        return false
    };
    this.qfg = function(c, a) {
        var b = new XMLHttpRequest();
        if ("withCredentials" in b) {
            b.open(c, a, true)
        } else {
            if (typeof XDomainRequest != "undefined") {
                b = new XDomainRequest();
                b.open(c, a)
            } else {
                b = null
            }
        }
        return b
    };
    this.fxs = function() {
        var b = document.createElement("audio"),
            c = [];
        if (!!(b.canPlayType && b.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""))) {
            c.push(".ogg")
        }
        if (!!(b.canPlayType && b.canPlayType("audio/mpeg;").replace(/no/, ""))) {
            c.push(".mp3")
        }
        return c
    };
    this.abt = function(q, o, f, l, k, a, p, d, r, g, n, j) {
        try {
            var m = 0,
                b = r,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            q.textAlign = "center";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a / 2, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a / 2, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.cwu = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                l += r;
                a -= r
            }
            q.textAlign = "left";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.dsg = function(q, o, f, l, k, a, p, d, s, g, r, n, j) {
        try {
            var m = 0,
                b = s,
                c = 1;
            if (!g) {
                g = ""
            }
            q.save();
            if (r) {
                a -= r
            }
            q.textAlign = "right";
            q.textBaseline = "bottom";
            q.fillStyle = f;
            q.font = g + " " + b + "px " + d;
            m = q.measureText(o).width;
            if (m > a) {
                c = a / m;
                b = Math.round(b * c) - 1;
                q.font = g + " " + b + "px " + d;
                if (n && j) {
                    j = (j * c < 1) ? 1 : Math.round(j * c)
                }
            }
            q.fillText(o, l + a, k + (p - (p - b) / 2));
            if (n && j) {
                q.strokeStyle = n;
                q.lineWidth = j;
                q.strokeText(o, l + a, k + (p - (p - b) / 2))
            }
            q.restore()
        } catch (i) {
            console.error(i)
        }
    };
    this.qhp = function(r, m, t, k, j, q, p, n, c, d, u, b, z, s) {
        try {
            var l = 0,
                D = 0,
                E = 0,
                a = 0,
                g = [],
                f = "",
                C = 0,
                F = 0,
                A = 0,
                G = 1;
            var o = c;
            if (!d) {
                d = ""
            }
            if (!u) {
                u = "left"
            }
            r.save();
            r.textAlign = u;
            r.textBaseline = "bottom";
            r.fillStyle = t;
            r.font = d + " " + o + "px " + n;
            a = r.measureText(m).width / q;
            a = (a >= Math.round(a)) ? Math.round(a) + 1 : Math.round(a);
            if (o * a > p) {
                G = p / (o * a);
                o = Math.round(G * o) - 1;
                r.font = d + " " + o + "px " + n;
                a = r.measureText(m).width / q;
                a = (a > Math.round(a)) ? Math.round(a) + 1 : Math.round(a)
            }
            for (var v = A; v < m.length; v++) {
                f += m.charAt(v);
                l = r.measureText(f).width;
                if (m.charAt(v) == " " || m.charAt(v) == "|") {
                    C = v
                }
                if (v == m.length - 1) {
                    g[F] = m.substring(A, m.length)
                } else {
                    if (m.charAt(v) == "|") {
                        g[F] = m.substring(A, v);
                        F++;
                        A = v + 1;
                        f = m.substring(C + 1, v)
                    } else {
                        if (l >= q) {
                            g[F] = m.substring(A, C);
                            F++;
                            A = C + 1;
                            f = m.substring(C + 1, v)
                        }
                    }
                }
            }
            for (var v = 0; v < g.length; v++) {
                E = (u == "left") ? k : (u == "center") ? (k + q / 2) : k + q;
                if (b) {
                    D = j + (p + o) / (g.length + 1) * (v + 1)
                } else {
                    D = j + Math.round(o * 1.5 * (v + 1))
                }
                r.fillText(g[v], E, D);
                if (z && s) {
                    r.strokeStyle = z;
                    r.lineWidth = s;
                    r.strokeText(g[v], E, D)
                }
            }
            r.restore()
        } catch (B) {
            console.error(B)
        }
    };
    this.psa = function(m, g, d, a, j, b, k, l, f) {
        try {
            var i = 0;
            m.save();
            if (l && f) {
                i = Math.round(f / 2);
                m.beginPath();
                m.moveTo(g + b + i, d + i);
                m.arcTo(g + a - i, d + i, g + a - i, d + b + i, b);
                m.arcTo(g + a - i, d + j - i, g + a - b - i, d + j - i, b);
                m.arcTo(g + i, d + j - i, g + i, d + j - b - i, b);
                m.arcTo(g + i, d + i, g + b + i, d + i, b);
                m.closePath()
            } else {
                m.beginPath();
                m.moveTo(g + b, d);
                m.arcTo(g + a, d, g + a, d + b, b);
                m.arcTo(g + a, d + j, g + a - b, d + j, b);
                m.arcTo(g, d + j, g, d + j - b, b);
                m.arcTo(g, d, g + b, d, b);
                m.closePath()
            }
            if (k) {
                m.fillStyle = k;
                m.fill()
            }
            if (l && f) {
                m.strokeStyle = l;
                m.lineWidth = f;
                m.stroke()
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.zgr = function(n, i, f, a, k, c, m, b, l, g, o) {
        try {
            var j = 0;
            n.save();
            if (l && g) {
                j = Math.round(g / 2);
                n.beginPath();
                n.moveTo(i + c + j, f + j);
                n.arcTo(i + a - j, f + j, i + a - j, f + c + j, c);
                n.arcTo(i + a - j, f + k - j, i + a - c - j, f + k - j, c);
                n.arcTo(i + j, f + k - j, i + j, f + k - c - j, c);
                n.arcTo(i + j, f + j, i + c + j, f + j, c);
                n.closePath()
            } else {
                n.beginPath();
                n.moveTo(i + c, f);
                n.arcTo(i + a, f, i + a, f + c, c);
                n.arcTo(i + a, f + k, i + a - c, f + k, c);
                n.arcTo(i, f + k, i, f + k - c, c);
                n.arcTo(i, f, i + c, f, c);
                n.closePath()
            }
            if (m) {
                if (b) {
                    n.globalAlpha = b
                }
                n.fillStyle = m;
                n.fill()
            }
            if (l && g) {
                if (o) {
                    n.globalAlpha = o
                }
                n.strokeStyle = l;
                n.lineWidth = g;
                n.stroke()
            }
            n.restore()
        } catch (d) {
            console.error(d)
        }
    };
    this.pin = function(o, d, k, j, n, l, f, p, q, g, m, c) {
        try {
            var b = Math.round(f / 2),
                i = 0,
                r = 1,
                a = 2,
                t = 3;
            o.save();
            o.beginPath();
            if (d === i) {
                o.moveTo(k + f, j + b);
                o.lineTo(k + n - b, j + (l) / 2 - b);
                o.bezierCurveTo(k + n - b, j + (l) / 2 - b, k + n, j + (l) / 2 + b, k + n - b, j + (l) / 2 + b);
                o.lineTo(k + f, j + l - b);
                o.bezierCurveTo(k + f, j + l - b, k, j + l, k, j + l - b);
                o.lineTo(k, j + b);
                o.bezierCurveTo(k, j + b, k + f, j, k + f, j + b)
            } else {
                if (d === r) {
                    o.moveTo(k + n - f, j + b);
                    o.lineTo(k + b, j + (l) / 2 - b);
                    o.bezierCurveTo(k + b, j + (l) / 2 - b, k, j + (l) / 2 + b, k + b, j + (l) / 2 + b);
                    o.lineTo(k + n - f, j + l - b);
                    o.bezierCurveTo(k + n - f, j + l - b, k + n, j + l, k + n, j + l - b);
                    o.lineTo(k + n, j + b);
                    o.bezierCurveTo(k + n, j + b, k + n - f, j, k + n - f, j + b)
                } else {
                    if (d === a) {
                        o.moveTo(k + n - b, j + f);
                        o.lineTo(k + n / 2 + b, j + l - b);
                        o.bezierCurveTo(k + n / 2 + b, j + l - b, k + n / 2 - b, j + l, k + n / 2 - b, j + l - b);
                        o.lineTo(k + b, j + f);
                        o.bezierCurveTo(k + b, j + f, k, j, k + b, j);
                        o.lineTo(k + n - b, j);
                        o.bezierCurveTo(k + n - b, j, k + n, j + f, k + n - b, j + f)
                    } else {
                        if (d === t) {
                            o.moveTo(k + n - b, j + l - f);
                            o.lineTo(k + n / 2 + b, j + b);
                            o.bezierCurveTo(k + n / 2 + b, j + b, k + n / 2 - b, j, k + n / 2 - b, j + b);
                            o.lineTo(k + b, j + l - f);
                            o.bezierCurveTo(k + b, j + l - f, k, j + l, k + b, j + l);
                            o.lineTo(k + n - b, j + l);
                            o.bezierCurveTo(k + n - b, j + l, k + n, j + l - f, k + n - b, j + l - f)
                        }
                    }
                }
            }
            o.closePath();
            if (p) {
                if (q) {
                    o.globalAlpha = q
                }
                o.fillStyle = p;
                o.fill()
            }
            if (g && m) {
                if (c) {
                    o.globalAlpha = c
                }
                o.strokeStyle = g;
                o.lineWidth = m;
                o.stroke()
            }
            o.restore()
        } catch (s) {
            console.error(s)
        }
    };
    this.cdv = function(q, j, g, b, m, p, l, d, f, o, a, n, i, r) {
        try {
            var k = 0;
            q.save();
            if (n && i) {
                k = Math.round(i / 2);
                q.beginPath();
                q.moveTo(j + p + k, g + k);
                if (l > 0) {
                    q.arcTo(j + b - k, g + k, j + b - k, g + l + k, l)
                } else {
                    q.lineTo(j + b - k, g + k)
                }
                if (d > 0) {
                    q.arcTo(j + b - k, g + m - k, j + b - d - k, g + m - k, d)
                } else {
                    q.lineTo(j + b - k, g + m - k)
                }
                if (f > 0) {
                    q.arcTo(j + k, g + m - k, j + k, g + m - f - k, f)
                } else {
                    q.lineTo(j + k, g + m - k)
                }
                if (p > 0) {
                    q.arcTo(j + k, g + k, j + p + k, g + k, p)
                } else {
                    q.lineTo(j + k, g + k)
                }
                q.closePath()
            } else {
                q.beginPath();
                q.moveTo(j + p, g);
                if (l > 0) {
                    q.arcTo(j + b, g, j + b, g + l, l)
                } else {
                    q.lineTo(j + b, g)
                }
                if (d > 0) {
                    q.arcTo(j + b, g + m, j + b - d, g + m, d)
                } else {
                    q.lineTo(j + b, g + m)
                }
                if (f > 0) {
                    q.arcTo(j, g + m, j, g + m - f, f)
                } else {
                    q.lineTo(j, g + m)
                }
                if (p > 0) {
                    q.arcTo(j, g, j + p, g, p)
                } else {
                    q.lineTo(j, g)
                }
                q.closePath()
            }
            if (o) {
                if (a) {
                    q.globalAlpha = a
                }
                q.fillStyle = o;
                q.fill()
            }
            if (n && i) {
                if (r) {
                    q.globalAlpha = r
                }
                q.strokeStyle = n;
                q.lineWidth = i;
                q.stroke()
            }
            q.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.roz = function(m, g, d, a, j, k, b, l, f, n) {
        try {
            var i = 0;
            m.save();
            if (k) {
                m.fillStyle = k;
                if (b) {
                    m.globalAlpha = b
                }
                m.fillRect(g, d, a, j)
            }
            if (l && f) {
                i = Math.round(f / 2);
                m.strokeStyle = l;
                if (n) {
                    m.globalAlpha = n
                }
                m.lineWidth = f;
                m.strokeRect(g + i, d + i, a - 2 * i, j - 2 * i)
            }
            m.restore()
        } catch (c) {
            console.error(c)
        }
    };
    this.tjp = function(k, g, d, c, i, a, j, f, l) {
        try {
            k.save();
            k.beginPath();
            k.arc(g, d, c, 0, Math.PI * 2, false);
            k.closePath();
            if (i) {
                k.fillStyle = i;
                if (a) {
                    k.globalAlpha = a
                }
                k.fill()
            }
            if (j && f) {
                k.strokeStyle = j;
                if (l) {
                    k.globalAlpha = l
                }
                k.lineWidth = f;
                k.stroke()
            }
            k.restore()
        } catch (b) {
            console.error(b)
        }
    }
}

function bom() {
    this.parent = null;
    this.context2D = null;
    this.qce = null;
    this.ucm = null;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.lie = true;
    this.kat = false;
    this.llb = function(a, d, c) {
        try {
            if (a) {
                this.x = a.x || 0;
                this.y = a.y || 0;
                this.width = a.width || 0;
                this.height = a.height || 0
            }
            if (d) {
                this.context2D = d
            } else {
                this.qce = document.createElement("canvas");
                this.qce.width = this.width;
                this.qce.height = this.height;
                this.context2D = this.qce.getContext("2d");
                if (c) {
                    this.ucm = c
                }
            }
            this.kat = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.eda = function(a) {
        try {
            this.x = a.x || 0;
            this.y = a.y || 0;
            this.width = a.width || 0;
            this.height = a.height || 0;
            if (this.qce) {
                this.qce.width = this.width;
                this.qce.height = this.height
            }
            this.kat = (this.width <= 0 || this.height <= 0)
        } catch (b) {
            console.error(b)
        }
    };
    this.dku = function(a) {};
    this.vpj = function(a) {};
    this.cbi = function(a, b) {
        this.lie = a;
        if (b && b === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.bsl = function() {
        return (this.lie && !this.kat)
    };
    this.ksl = function() {}
}

function xth() {
    this.rxm = null;
    this.stj = null;
    this.vhe = -1;
    this.aem = -1;
    this.bho = false;
    this.ybj = false;
    this.nyy = false;
    this.eec = 0;
    this.vht = 0;
    var a = 200;
    this.llb = function(c, f, d, b, e) {
        this.rxm = b;
        this.stj = e;
        xth.prototype.llb.call(this, c, f, d)
    };
    this.otk = function(b, d, c) {
        this.bho = b;
        c = (c === false) ? false : true;
        if (d && d === true && this.bsl()) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
        if (this.bho === true && c === true) {
            clearTimeout(this.eec);
            this.eec = setTimeout(this.fmq, a)
        }
    };
    this.ozv = function() {
        return this.bho
    };
    this.sgw = function(b, c) {
        this.nyy = b;
        c = (c === false) ? false : true;
        clearTimeout(this.vht);
        if (this.nyy === true && c === true) {
            this.vht = setTimeout(this.nbf, a)
        }
    };
    this.aqh = function() {
        return this.nyy
    };
    this.bzf = function(b, c) {
        this.stj = b;
        if (c && c === true && this.bsl()) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.eyu = function(b) {
        this.ybj = b
    };
    this.qvq = function() {
        return this.ybj
    };
    this.ktx = function() {};
    this.nbf = function() {};
    this.fmq = function() {}
}
xth.prototype = new bom;

function xma() {
    var a = this;
    this.dos = null;
    this.value = "";
    this.lsg = false;
    this.qwp = "round";
    this.ics = null;
    this.lkl = "bold";
    this.akn = null;
    this.gdd = null;
    this.fhx = null;
    this.yvi = null;
    this.kqf = null;
    this.gxw = 0;
    this.nke = 6;
    this.muf = -2;
    this.muk = 2;
    this.wdf = -4;
    this.fhc = 8;
    this.hyq = 26;
    this.mgg = 0;
    this.dgy = 1;
    this.xnl = 0;
    this.zzi = 0;
    this.bqs = -1;
    this.qfa = 10;
    this.qpg = 0;
    this.bjk = 0;
    this.ryn = false;
    this.jum = -1;
    this.mdg = true;
    this.llb = function(d, g, e, c, b, f) {
        xma.prototype.llb.call(this, d, g, e, c, f);
        this.dos = b;
        if (this.rxm) {
            this.gxw = Math.round(this.rxm.height / 2)
        }
    };
    this.dku = function(b) {
        try {
            this.qwp = b.xqm;
            this.ics = b.font;
            this.lkl = b.scm;
            this.akn = b.backgroundColor;
            this.gdd = b.oqr;
            this.fhx = b.ujm;
            this.yvi = b.swt;
            if (b.borderColor && b.ofm) {
                this.kqf = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.kqf.addColorStop(0, b.borderColor);
                this.kqf.addColorStop(1, b.ofm)
            } else {
                this.kqf = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.vpj = function(b) {
        try {
            this.hyq = b.aaw;
            this.mgg = b.aia;
            this.nke = b.isb;
            this.muf = b.hmt;
            this.muk = b.ebq;
            this.wdf = b.wqy;
            this.fhc = b.iey;
            this.dgy = b.bao
        } catch (c) {
            console.error(c)
        }
    };
    this.kxj = function() {
        if (this.ygd()) {
            clearInterval(this.jum);
            this.jum = -1
        }
        this.mdg = false;
        this.jum = setInterval(this.ahy, 400)
    };
    this.eeq = function() {
        this.mdg = true;
        clearInterval(this.jum);
        this.jum = -1;
        this.ofd(false)
    };
    this.ofd = function(b, c) {
        this.ryn = b;
        c = (c === false) ? false : true;
        if (c === true && this.bsl() === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.ygd = function() {
        return (this.jum >= 0)
    };
    this.ilm = function(b, c) {
        this.value = b;
        if (c && c === true && this.bsl()) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.mji = function(b) {
        this.xnl = Math.round(b / this.qfa);
        this.qpg = 0;
        this.bjk = 0;
        this.zzi = new Date().getTime();
        this.bqs = setTimeout(this.lrr, this.xnl)
    };
    this.oui = function() {
        if (a.bqs >= 0) {
            clearTimeout(a.bqs);
            a.bqs = -1
        }
        a.qpg = 0;
        a.fmq()
    };
    this.qpx = function() {
        if (a.bqs >= 0) {
            clearInterval(a.bqs);
            a.bqs = -1
        }
        a.qpg = 1;
        a.fmq()
    };
    this.lrr = function() {
        var b = 0,
            c = new Date().getTime();
        a.bjk += 1;
        if (a.bjk < a.qfa) {
            a.qpg += 1 / a.qfa;
            a.parent.ksl(a.x, a.y, a.width, a.height);
            b = a.xnl + (a.bjk * a.xnl - (c - a.zzi));
            a.bqs = setTimeout(a.lrr, b)
        } else {
            a.qpx()
        }
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var g = null,
            f = 0,
            c = 0,
            n = 0,
            k = 0,
            l = this.width / 2 - this.dgy,
            d = (this.qwp === "roundedT" || this.qwp === "roundedL") ? this.fhc : 0,
            b = (this.qwp === "roundedT" || this.qwp === "roundedR") ? this.fhc : 0,
            o = (this.qwp === "roundedB" || this.qwp === "roundedR") ? this.fhc : 0,
            q = (this.qwp === "roundedB" || this.qwp === "roundedL") ? this.fhc : 0,
            e = 1,
            m = String(this.value),
            p = this.context2D;
        p.save();
        p.textAlign = "center";
        p.textBaseline = "bottom";
        if (this.ryn || this.qpg >= 1) {
            if (this.qwp === "round") {
                cun.hfb.tjp(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gdd, 1, this.kqf, this.dgy, 1)
            } else {
                if (this.qwp === "rect") {
                    cun.hfb.psa(p, this.x, this.y, this.width, this.height, this.fhc, this.gdd, this.kqf, this.dgy)
                } else {
                    if (this.qwp === "roundedT" || this.qwp === "roundedB" || this.qwp === "roundedR" || this.qwp === "roundedL") {
                        cun.hfb.cdv(p, this.x, this.y, this.width, this.height, d, b, o, q, this.gdd, 1, this.kqf, this.dgy, 1)
                    }
                }
            }
            if (this.dos || this.rxm) {
                if (this.ozv()) {
                    p.drawImage((this.dos) ? this.dos : this.rxm, 0, this.gxw, this.rxm.width, this.gxw, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage((this.dos) ? this.dos : this.rxm, 0, 0, this.rxm.width, this.gxw, this.x, this.y, this.width, this.height)
                }
            }
        } else {
            if (this.lsg && this.qvq() === false) {
                p.globalAlpha = 0.5
            }
            if (this.qpg > 0) {
                if (this.qwp === "round") {
                    cun.hfb.tjp(p, this.x + this.width / 2, this.y + this.height / 2, l, this.akn, 1 - this.bjk / this.qfa, this.kqf, this.dgy, 1);
                    cun.hfb.tjp(p, this.x + this.width / 2, this.y + this.height / 2, l, this.gdd, this.bjk / this.qfa)
                } else {
                    if (this.qwp === "rect") {
                        kxs = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                        kxs.addColorStop(1 - this.qpg, this.akn);
                        kxs.addColorStop(1 - this.qpg, this.gdd);
                        cun.hfb.zgr(p, this.x, this.y, this.width, this.height, this.fhc, kxs, 1, this.kqf, this.dgy, 1)
                    } else {
                        if (this.qwp === "roundedT" || this.qwp === "roundedB" || this.qwp === "roundedR" || this.qwp === "roundedL") {
                            kxs = this.context2D.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                            kxs.addColorStop(1 - this.qpg, this.akn);
                            kxs.addColorStop(1 - this.qpg, this.gdd);
                            cun.hfb.cdv(p, this.x, this.y, this.width, this.height, d, b, o, q, kxs, 1, this.kqf, this.dgy, 1)
                        }
                    }
                }
            } else {
                if (this.qwp === "round") {
                    cun.hfb.tjp(p, this.x + this.width / 2, this.y + this.height / 2, l, this.akn, 1, this.kqf, this.dgy, 1)
                } else {
                    if (this.qwp === "rect") {
                        cun.hfb.psa(p, this.x, this.y, this.width, this.height, this.fhc, this.akn, this.kqf, this.dgy)
                    } else {
                        if (this.qwp === "roundedT" || this.qwp === "roundedB" || this.qwp === "roundedR" || this.qwp === "roundedL") {
                            cun.hfb.cdv(p, this.x, this.y, this.width, this.height, d, b, o, q, this.akn, 1, this.kqf, this.dgy, 1)
                        }
                    }
                }
            }
            if (this.rxm) {
                if (this.ozv()) {
                    p.drawImage(this.rxm, 0, this.gxw, this.rxm.width, this.gxw, this.x, this.y, this.width, this.height)
                } else {
                    p.drawImage(this.rxm, 0, 0, this.rxm.width, this.gxw, this.x, this.y, this.width, this.height)
                }
            }
        }
        if (m && this.mgg > 0) {
            f = (this.ozv()) ? 2 : 0;
            c = this.mgg;
            p.font = this.lkl + " " + c + "px " + this.ics;
            p.fillStyle = this.yvi;
            n = p.measureText(m).width;
            if (n > this.width - 2 * this.nke) {
                e = ((this.width - 2 * this.nke) / n);
                c = Math.round(e * c) - 1;
                p.font = this.lkl + " " + c + "px " + this.ics
            }
            if (c > this.height / 2 - this.nke) {
                e = ((this.height / 2 - this.nke) / c);
                c = Math.round(e * c) - 1;
                p.font = this.lkl + " " + c + "px " + this.ics
            }
            k = (this.height / 2 - c) / 2;
            k += c;
            p.fillText(m, this.x + this.width / 2 + this.muf, this.y - this.wdf + k + f)
        }
        if (this.stj && this.stj != "" && this.hyq > 0) {
            g = this.stj.split("|");
            f = (this.ozv()) ? 2 : 0;
            c = this.hyq;
            p.font = this.lkl + " " + c + "px " + this.ics;
            p.fillStyle = this.fhx;
            for (var j = 0; j < g.length; j++) {
                n = (p.measureText(g[j]).width > n) ? p.measureText(g[j]).width : n
            }
            if (n > this.width - 2 * this.nke) {
                e = ((this.width - 2 * this.nke) / n);
                c = Math.round(e * c) - 1;
                p.font = this.lkl + " " + c + "px " + this.ics
            }
            if (this.mgg > 0) {
                if (c * g.length > this.height / 2 - this.nke) {
                    e = ((this.height / 2 - this.nke) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.lkl + " " + c + "px " + this.ics
                }
                k = this.height / 2 + (this.height / 2 - c * g.length) / 2
            } else {
                if (c * g.length > this.height - 2 * this.nke) {
                    e = ((this.height - 2 * this.nke) / (c * g.length));
                    c = Math.round(e * c) - 1;
                    p.font = this.lkl + " " + c + "px " + this.ics
                }
                k = (this.height - c * g.length) / 2
            }
            k += c;
            for (var j = 0; j < g.length; j++) {
                p.fillText(g[j], this.x + this.width / 2 + this.muf, this.y - this.muk + k + f);
                k += c
            }
        }
        p.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    };
    this.ahy = function() {
        if (!a.mdg) {
            a.ofd(!a.ryn)
        }
    };
    this.nbf = function() {
        a.nyy = false
    };
    this.fmq = function() {
        a.bho = false;
        if (a.bsl()) {
            a.parent.ksl(a.x, a.y, a.width, a.height)
        }
    }
}
xma.prototype = new xth;

function szt() {
    this.uhv = 0;
    this.zuw = [];
    this.llb = function(a, c, b) {
        szt.prototype.llb.call(this, a, c, b);
        this.uhv = 0;
        this.zuw = []
    };
    this.qoo = function(a, b) {
        if (b && b === true) {
            this.zuw.unshift(a)
        } else {
            this.zuw.push(a)
        }
    };
    this.mkq = function(a) {
        if (a && a === true) {
            this.zuw.shift()
        } else {
            this.zuw.pop()
        }
    };
    this.mfu = function(a) {
        this.uhv = a
    };
    this.rno = function() {
        return this.uhv
    };
    this.ksl = function() {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        if (this.uhv < this.zuw.length) {
            this.zuw[this.uhv].ksl()
        }
        try {
            if (this.ucm && this.qce) {
                this.ucm.drawImage(this.qce, this.x, this.y)
            }
        } catch (a) {}
    }
}
szt.prototype = new bom;

function nas() {
    var a = this;
    this.mib = null;
    this.uhv = 0;
    this.zuw = [];
    this.akn = null;
    this.vxp = null;
    this.swk = null;
    this.hti = new icy();
    this.llb = function(b, d, c) {
        nas.prototype.llb.call(this, b, d, c);
        this.lie = false;
        this.uhv = 0;
        this.zuw = [];
        this.dgn()
    };
    this.dgn = function() {
        this.mib = new bmn();
        this.mib.llb();
        this.mib.etj("buttons")
    };
    this.vpj = function(f) {
        try {
            var d = this.mib.tcj("buttons"),
                c = 0,
                b = d.length;
            this.hti = f.ihw;
            for (; c < b; c++) {
                d[c].vpj(f.dwb)
            }
            this.mib.bnh("return", "#eda", [f.yjv]);
            this.mib.bnh("page", "#eda", [f.nlo]);
            this.mib.bnh("prev", "#eda", [f.aav]);
            this.mib.bnh("next", "#eda", [f.vgz])
        } catch (g) {
            console.error(g)
        }
    };
    this.dku = function(d) {
        try {
            var f = this.mib.tcj("buttons");
            this.akn = d.backgroundColor;
            this.vxp = d.axr;
            this.swk = d.nzu;
            for (var c = 0, b = f.length; c < b; c++) {
                f[c].dku((this.parent.fbj.tlc === false) ? d.pli : (this.parent.rpk === cun.fbj.zqk) ? d.zmd : d.awq)
            }
        } catch (g) {
            console.error(g)
        }
    };
    this.qmq = function(m, l) {
        var k = this.mib.tcj("buttons"),
            g = this.mib.owa("return"),
            c = m - this.x,
            n = l - this.y;
        for (var e = 0, f = k.length; e < f; e++) {
            var b = k[e];
            if (c >= b.x && c <= b.x + b.width && n >= b.y && n <= b.y + b.height && b.bsl() == true) {
                if (b.qvq() && !b.aqh()) {
                    if (b != g) {
                        b.otk(true, true)
                    }
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn");
                    b.ktx();
                    for (var d = 0; d < f; d++) {
                        k[d].sgw(true)
                    }
                    return true
                }
            }
        }
        return false
    };
    this.vlq = function() {
        var e = this.mib.tcj("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ozv() === true) {
                c.otk(false, true);
                return true
            }
        }
        return false
    };
    this.chp = function(k) {
        var g = this.mib.tcj("buttons"),
            c = this.mib.owa("return");
        for (var f = 0, b = g.length; f < b; f++) {
            var d = g[f];
            if (k == d.vhe) {
                if (d.qvq() && !d.aqh()) {
                    if (d != c) {
                        d.otk(true, true)
                    }
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn");
                    d.ktx();
                    for (var e = 0; e < b; e++) {
                        g[e].sgw(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.cyi = function() {
        var e = this.mib.tcj("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ozv() === true) {
                c.otk(false, true);
                return true
            }
        }
        return false
    };
    this.qoo = function(b, c) {
        if (c && c === true) {
            this.zuw.unshift(b);
            this.uhv++
        } else {
            this.zuw.push(b)
        }
    };
    this.mkq = function(b) {
        if (b && b === true) {
            this.zuw.shift();
            this.uhv--
        } else {
            this.zuw.pop()
        }
    };
    this.gls = function() {
        return this.zuw.length
    };
    this.hoe = function(e, c, b) {
        var d = (this.parent.fbj.tlc === false) ? c.pli : (this.parent.rpk === cun.fbj.zqk) ? c.zmd : c.awq;
        if (this.parent.lrw === false) {
            this.mib.byd("return", this.sdx(e.yjv, this.parent.language.ret, (this.parent.fbj.chd === false) ? b : this.parent.gai.wxh("btn_re"), this.tjn, (this.parent.ihh.xoj) ? this.parent.ihh.xoj : null, e.dwb, d), ["buttons"]);
            this.mib.byd("page", this.sdx(e.nlo, (this.uhv + 1) + "/" + this.zuw.length, b, this.joj, null, e.dwb, d), ["buttons"]);
            this.mib.byd("prev", this.sdx(e.aav, this.parent.language.yee, (this.parent.fbj.chd === false) ? b : this.parent.gai.wxh("btn_pr"), this.aud, (this.parent.ihh.vqm) ? this.parent.ihh.vqm : null, e.dwb, d), ["buttons"]);
            this.mib.byd("next", this.sdx(e.vgz, this.parent.language.jwc, (this.parent.fbj.chd === false) ? b : this.parent.gai.wxh("btn_ne"), this.joj, (this.parent.ihh.rdw) ? this.parent.ihh.rdw : null, e.dwb, d), ["buttons"])
        }
    };
    this.sdx = function(g, j, b, i, d, f, e) {
        var c = new xma();
        c.llb(g, this.context2D, null, b, null, j);
        c.parent = this;
        c.ktx = i;
        c.vpj(f);
        c.dku(e);
        if (d) {
            c.vhe = d.ojt
        }
        return c
    };
    this.ksl = function(l, j, m, e) {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var b = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = null,
            g = this.mib.tcj("buttons"),
            d = null;
        if (this.parent.fbj.tlc === false) {
            d = this.parent.gai.wxh("btn_back")
        } else {
            if (this.parent.rpk === cun.fbj.zqk) {
                d = (this.parent.gai.wxh("h_right" + this.uhv) != null) ? this.parent.gai.wxh("h_right" + this.uhv) : this.parent.gai.wxh("h_right")
            } else {
                d = (this.parent.gai.wxh("h_left" + this.uhv) != null) ? this.parent.gai.wxh("h_left" + this.uhv) : this.parent.gai.wxh("h_left")
            }
        }
        n.save();
        if (b) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        if (this.uhv >= 0 && this.uhv < this.zuw.length) {
            this.zuw[this.uhv].ksl()
        }
        if (d) {
            k = n.createLinearGradient(this.hti.x, this.hti.y, this.hti.x + this.hti.width, this.hti.y);
            k.addColorStop(0.2, this.vxp);
            k.addColorStop(1, this.swk);
            n.fillStyle = k;
            n.save();
            if (this.parent.fbj.tlc === false) {
                if (this.parent.rpk === cun.fbj.pmj) {
                    n.translate(this.hti.width / 2, this.hti.height / 2);
                    n.rotate(Math.PI);
                    n.translate(-this.hti.width / 2, -this.hti.height / 2)
                }
                n.fillRect(this.hti.x, this.hti.y, this.hti.width, this.hti.height)
            }
            n.drawImage(d, this.hti.x, this.hti.y, this.hti.width, this.hti.height);
            n.restore()
        } else {
            if (this.akn != null) {
                n.fillStyle = this.akn;
                n.fillRect(this.hti.x, this.hti.y, this.hti.width, this.hti.height)
            }
        }
        for (var c = 0, f = g.length; c < f; c++) {
            g[c].ksl()
        }
        n.restore();
        if (this.ucm && this.qce) {
            if (b) {
                this.ucm.drawImage(this.qce, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.ucm.drawImage(this.qce, this.x, this.y)
            }
        }
    };
    this.kup = function(f, g) {
        var e = this.mib.owa("page"),
            c = this.mib.owa("return"),
            b = this.mib.owa("next"),
            d = this.mib.owa("prev");
        if (e != null) {
            e.bzf((this.uhv + 1) + "/" + this.zuw.length)
        }
        if (c != null) {
            c.cbi(f)
        }
        if (b != null && d != null && e != null) {
            if (f) {
                if (this.zuw.length > 1) {
                    b.cbi(f);
                    d.cbi(f);
                    e.cbi(f)
                } else {
                    b.cbi(false);
                    d.cbi(false);
                    e.cbi(false)
                }
            } else {
                b.cbi(f);
                d.cbi(f);
                e.cbi(f)
            }
        }
        if (g && g === true) {
            this.ksl()
        }
    };
    this.vmo = function() {
        this.uhv = 0;
        this.kup(true);
        this.cbi(true, true)
    };
    this.slm = function() {
        this.kup(false);
        this.cbi(false, true)
    };
    this.wxw = function() {
        var d = this.mib.owa("page"),
            b = this.mib.owa("next"),
            c = this.mib.owa("prev");
        this.uhv = (this.uhv < this.zuw.length) ? this.uhv : this.zuw.length - 1;
        this.uhv = (this.uhv < 0) ? 0 : this.uhv;
        d.bzf((this.uhv + 1) + "/" + this.zuw.length, true);
        if (this.zuw.length == 1) {
            b.cbi(false);
            c.cbi(false);
            d.cbi(false)
        } else {
            b.cbi(true);
            c.cbi(true);
            d.cbi(true)
        }
    };
    this.qla = function(c) {
        var e = this.mib.tcj("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            e[d].eyu(c)
        }
    };
    this.tjn = function() {
        a.parent.bon()
    };
    this.joj = function() {
        var b = a.mib.owa("page");
        if (a.uhv < a.zuw.length - 1) {
            a.uhv++
        } else {
            a.uhv = 0
        }
        if (b) {
            b.bzf((a.uhv + 1) + "/" + a.zuw.length, false)
        }
        a.ksl()
    };
    this.aud = function() {
        var b = a.mib.owa("page");
        if (a.uhv > 0) {
            a.uhv--
        } else {
            a.uhv = a.zuw.length - 1
        }
        if (b) {
            b.bzf((a.uhv + 1) + "/" + a.zuw.length, false)
        }
        a.ksl()
    }
}
nas.prototype = new bom;

function fgd() {
    this.rxm = new Image();
    this.dzy = null;
    this.vjp = [];
    this.zdb = [];
    this.pga = null;
    this.ics = null;
    this.lkl = "bold";
    this.qfo = null;
    this.fhx = null;
    this.nmd = null;
    this.dfi = 0;
    this.ykh = [];
    this.yiz = null;
    this.hpv = 40;
    this.ctl = 18;
    this.cyj = 1;
    this.llb = function(b, d, c, a) {
        this.rxm = a;
        this.vjp = [];
        this.ykh = [];
        fgd.prototype.llb.call(this, b, d, c)
    };
    this.vpj = function(a) {
        try {
            this.yiz = a.gus;
            this.ykh = a.vli;
            this.ctl = a.fontSize;
            this.hpv = a.anb;
            this.cyj = a.lineWidth
        } catch (b) {
            console.error(b)
        }
    };
    this.dku = function(a) {
        try {
            this.pga = a.gtp;
            this.ics = a.font;
            this.lkl = a.scm;
            this.qfo = a.jry;
            this.fhx = a.ujm;
            this.nmd = a.bry
        } catch (b) {
            console.error(b)
        }
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var b = this.context2D;
        b.save();
        b.fillStyle = this.fhx;
        if (this.qfo) {
            b.strokeStyle = this.qfo
        }
        b.lineJoin = "round";
        b.lineCap = "round";
        b.lineWidth = this.cyj;
        b.font = this.lkl + " " + this.ctl + "px " + this.ics;
        b.textBaseline = "bottom";
        b.textAlign = "center";
        b.drawImage(this.rxm, 0, 0);
        if ((this.height - this.rxm.height) > 0) {
            var a = this.parent.hti;
            b.drawImage(this.rxm, a.x, a.y, a.width, this.rxm.height - a.y, a.x, a.y, a.width, a.height)
        }
        if (this.dzy && this.yiz) {
            cun.hfb.abt(b, this.dzy, this.nmd, this.yiz.x, this.yiz.y, this.yiz.width, this.yiz.height, this.pga, this.hpv, this.lkl)
        }
        for (var c = 0; c < this.vjp.length; c++) {
            this.qhp(this.vjp[c], this.ykh[c], this.ctl, this.ics)
        }
        b.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    };
    this.iws = function(j, f, g, d) {
        var b = this.context2D,
            c = 0;
        this.zdb = [];
        b.save();
        b.font = this.lkl + " " + g + "px " + d;
        this.kpy(b, g, j, f, d);
        for (var e = 0, a = this.zdb.length; e < a; e++) {
            c = (f.height + this.dfi) / (this.zdb.length + 1) * (e + 1);
            b.fillText(this.zdb[e], (f.x), f.y + c);
            if (this.qfo != null && b.lineWidth >= 1) {
                b.strokeText(this.zdb[e], (f.x), f.y + c)
            }
        }
        b.restore()
    };
    this.qhp = function(g, e, f, c) {
        var a = this.context2D,
            b = 0;
        this.zdb = [];
        a.save();
        a.font = this.lkl + " " + f + "px " + c;
        this.kpy(a, f, g, e, c);
        for (var d = 0; d < this.zdb.length; d++) {
            b = (e.height + this.dfi) / (this.zdb.length + 1) * (d + 1);
            a.fillText(this.zdb[d], (e.x + e.width / 2), e.y + b);
            if (this.qfo != null && a.lineWidth >= 1) {
                a.strokeText(this.zdb[d], (e.x + e.width / 2), e.y + b)
            }
        }
        a.restore()
    };
    this.kpy = function(m, o, l, g, b) {
        var a = 1,
            k = 0,
            j = "",
            f = 0,
            d = 0,
            c = 0,
            n = 0;
        n = m.measureText(l).width / g.width;
        n = (n >= Math.round(n)) ? Math.round(n) + 1 : Math.round(n);
        this.dfi = o;
        if (this.dfi * n > g.height) {
            a = g.height / (this.dfi * n);
            this.dfi = Math.round(a * this.dfi) - 1;
            m.font = this.lkl + " " + this.dfi + "px " + b;
            n = m.measureText(l).width / g.width;
            n = (n > Math.round(n)) ? Math.round(n) + 1 : Math.round(n)
        }
        for (var e = c; e < l.length; e++) {
            j += l.charAt(e);
            k = m.measureText(j).width;
            if (l.charAt(e) == " " || l.charAt(e) == "|") {
                f = e
            }
            if (e == l.length - 1) {
                this.zdb[d] = l.substring(c, l.length)
            } else {
                if (l.charAt(e) == "|") {
                    this.zdb[d] = l.substring(c, e);
                    d++;
                    c = e + 1;
                    j = l.substring(f + 1, e)
                } else {
                    if (k >= g.width) {
                        this.zdb[d] = l.substring(c, f);
                        d++;
                        c = f + 1;
                        j = l.substring(f + 1, e)
                    }
                }
            }
        }
    }
}
fgd.prototype = new bom;

function uem() {
    var a = this;
    this.rxm = new Image();
    this.iwg = "";
    this.vec = "";
    this.wqe = -1;
    this.ahg = 0;
    this.lpc = 0;
    this.bxz = 5000;
    this.ics = null;
    this.lkl = "bold";
    this.fhx = null;
    this.akn = null;
    this.kzv = null;
    this.fhc = 0;
    this.qyk = 0;
    this.nke = 0;
    this.dgy = 0;
    this.krj = 0;
    this.ctl = 0;
    this.qeq = null;
    this.kcq = 0;
    this.ggg = [];
    this.gst = 0;
    this.txy = true;
    this.juw = 0;
    this.vpj = function(b) {
        try {
            this.ctl = b.fontSize;
            this.krj = b.uha;
            this.fhc = b.iey;
            this.qyk = b.ceo;
            this.nke = b.isb;
            this.dgy = b.bao
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(b) {
        try {
            this.ics = b.font;
            this.lkl = b.scm;
            this.akn = b.backgroundColor;
            this.fhx = b.ujm;
            this.kzv = b.borderColor
        } catch (c) {
            console.error(c)
        }
    };
    this.oaa = function(e, c, d, b) {
        this.iwg = e;
        this.vec = c;
        this.wqe = d;
        this.ahg = b;
        this.txy = true;
        clearTimeout(this.juw);
        if (this.bsl() === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.wvl = function(b, c) {
        this.iwg = b;
        this.vec = undefined;
        this.txy = c;
        if (this.txy) {
            clearTimeout(this.juw)
        }
        if (this.bsl() === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.wam = function() {
        this.iwg = "";
        this.vec = undefined;
        this.txy = true;
        clearTimeout(this.juw);
        if (this.bsl() === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.zak = function(b, c) {
        this.kcq = 0;
        this.gst = b;
        this.txy = false;
        if (c && c > 0) {
            this.juw = setTimeout(this.nmo, c)
        } else {
            this.juw = setTimeout(this.nmo, this.bxz)
        }
    };
    this.sao = function(b) {
        this.kcq = 0;
        this.gst = b;
        if (this.txy) {
            this.wvl(this.ggg[this.gst][this.kcq], false)
        }
        this.txy = false;
        this.juw = setTimeout(this.nmo, this.bxz)
    };
    this.xsz = function() {
        this.txy = false;
        this.juw = setTimeout(this.nmo, this.bxz)
    };
    this.jxv = function() {
        this.txy = true;
        clearTimeout(this.juw)
    };
    this.syd = function() {
        return this.txy
    };
    this.nmo = function() {
        if (!a.txy) {
            a.kcq = (a.ggg[a.gst][a.kcq + 1] != undefined) ? a.kcq + 1 : 0;
            a.juw = setTimeout(a.nmo, a.bxz);
            a.wvl(a.ggg[a.gst][a.kcq], a.txy)
        }
    };
    this.jsi = function(b) {
        this.ggg[b] = []
    };
    this.udf = function(d, b) {
        for (var c = 0; c < d.length; c++) {
            this.ggg[b][c] = d[c]
        }
    };
    this.fte = function(b) {
        this.qeq = b
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var o = this.context2D,
            m = this.ctl,
            b = 0,
            k = 0,
            l = 0,
            j = 0,
            n = 0,
            s = 0,
            x = 0,
            e = 0,
            g = [],
            d = "",
            v = 0,
            y = 0,
            t = 0,
            f = 1,
            r = 0,
            q = (this.kzv && this.dgy) ? this.nke + this.dgy : this.nke;
        o.save();
        if (this.akn) {
            cun.hfb.psa(o, this.x, this.y, this.width, this.height, this.fhc, this.akn, this.kzv, this.dgy)
        } else {
            if (this.qeq) {
                o.putImageData(this.qeq, this.x, this.y)
            }
        }
        o.lineJoin = "round";
        o.lineCap = "round";
        o.fillStyle = this.fhx;
        o.font = this.lkl + " " + m + "px " + this.ics;
        o.textBaseline = "bottom";
        o.textAlign = "center";
        l = o.measureText(this.iwg).width;
        b += l;
        n = o.measureText("WW").width;
        if (this.vec != undefined && this.wqe >= 0) {
            j = o.measureText(this.vec).width;
            b += j;
            b += this.ahg * (this.rxm.width + this.qyk);
            if (this.ahg % 2 != 0) {
                s = this.x + (this.width) / 2 - (this.ahg / 2) * (this.rxm.width + this.qyk);
                x = s - n;
                e = s + (this.ahg) * (this.rxm.width + this.qyk) + n
            } else {
                s = this.x + (this.width) / 2 - (this.ahg / 2) * (this.rxm.width) - (this.ahg - 1) / 2 * this.qyk;
                x = s - n;
                e = s + (this.ahg) * (this.rxm.width) + (this.ahg - 1) * this.qyk + n
            }
            for (var u = 0; u < this.ahg; u++) {
                o.drawImage(this.rxm, 0, this.lpc * this.wqe, this.rxm.width, this.lpc, s + (u * (this.qyk + this.rxm.width)), this.y + ((this.height - this.lpc) / 2), this.rxm.width, this.lpc)
            }
            o.textAlign = "right";
            o.fillText(this.iwg, x, this.y + m + this.krj);
            o.textAlign = "left";
            o.fillText(this.vec, e, this.y + m + this.krj)
        } else {
            if (this.iwg != undefined) {
                do {
                    if (g.length > 1) {
                        m -= 2;
                        o.font = this.lkl + " " + m + "px " + this.ics
                    }
                    g = [];
                    d = "";
                    v = 0;
                    y = 0;
                    t = 0;
                    for (var p = t; p < this.iwg.length; p++) {
                        d += this.iwg.charAt(p);
                        k = o.measureText(d).width;
                        if ((this.iwg.charAt(p) == " ") || (this.iwg.charAt(p) == "|")) {
                            v = p
                        }
                        if (p == this.iwg.length - 1) {
                            g[y] = this.iwg.substring(t, this.iwg.length)
                        } else {
                            if (this.iwg.charAt(p) == "|") {
                                g[y] = this.iwg.substring(t, v);
                                y++;
                                t = v + 1;
                                d = this.iwg.substring(v + 1, p)
                            } else {
                                if (k >= this.width - 2 * q) {
                                    g[y] = this.iwg.substring(t, v);
                                    y++;
                                    t = v + 1;
                                    d = this.iwg.substring(v + 1, p)
                                }
                            }
                        }
                    }
                } while (g.length > 2);
                if (g.length > 1 && m == this.ctl) {
                    o.font = this.lkl + " " + (m - 3) + "px " + this.ics;
                    f = 0
                }
                for (var p = 0; p < g.length; p++) {
                    r = (this.height + m) / (g.length + 1) * (p + 1);
                    o.fillText(g[p], (this.x + this.width / 2), this.y + r + f)
                }
            }
        }
        o.restore()
    }
}
uem.prototype = new bom;

function qtm() {
    this.nja = null;
    this.xxv = null;
    this.oqg = null;
    this.bbb = false;
    this.ybj = false;
    this.gna = true;
    this.vci = false;
    this.gog = false;
    this.qcv = 0;
    this.xjp = 0;
    this.itw = 0;
    this.zes = "";
    this.jvr = "";
    this.vxp = null;
    this.swk = null;
    this.ics = "arial";
    this.lkl = "bold";
    this.vfu = "arial";
    this.ifr = "rgb(0,0,200)";
    this.krs = "rgb(255,255,255)";
    this.dqd = "rgb(0,0,150)";
    this.akn = "rgb(220,240,255)";
    this.zqe = "rgb(130,220,255)";
    this.wul = "rgb(130,190,255)";
    this.fhx = "rgb(255,255,255)";
    this.yun = "rgb(130,190,255)";
    this.yoz = "rgb(100,160,255)";
    this.avd = "rgb(255,255,255)";
    this.hti = new icy();
    this.yiz = null;
    this.hew = null;
    this.zyx = null;
    this.bit = null;
    this.xdi = null;
    this.tpl = null;
    this.pbf = null;
    this.ysr = null;
    this.dgy = 2;
    this.cdk = 3;
    this.vtd = 10;
    this.krj = 3;
    this.muf = 5;
    this.sil = 36;
    this.ctl = 30;
    this.wzi = 22;
    this.llb = function(a, c, b) {
        qtm.prototype.llb.call(this, a, c, b);
        this.vci = cun.emv.value37
    };
    this.ajo = function(b) {
        try {
            var a = (cun.emv.value37) ? b.gds : b.vpp;
            this.yiz = b.gus;
            this.hew = b.ehv;
            this.zyx = b.xtm;
            this.bit = b.zvj;
            this.xdi = b.jar;
            this.tpl = b.mrk;
            this.hti = b.ihw;
            this.sil = b.otf;
            this.ctl = b.fontSize;
            this.wzi = b.lpl;
            this.krj = b.uha;
            this.muf = b.hmt;
            this.dgy = b.bao;
            this.cdk = b.slz;
            this.vtd = b.tih;
            if (cun.emv.value36) {
                this.jvr = this.parent.bgr(this.parent.language.baa)
            } else {
                if (cun.emv.value37) {
                    this.jvr = this.parent.bgr(this.parent.language.nct)
                }
            }
            this.nja = [];
            this.xxv = this.sdx(a.jan, this.parent.language.ret, this.parent.sdh, (this.parent.fbj.chd === false) ? this.parent.gai.wxh("btn") : this.parent.gai.wxh("btn_re"), b.dwb);
            this.nja.push(this.xxv);
            if (cun.emv.value37) {
                this.oqg = this.sdx(a.yjv, this.parent.language.clq, this.parent.zkw, (this.parent.fbj.chd === false) ? this.parent.gai.wxh("btn") : this.parent.gai.wxh("btn_e"), b.dwb);
                this.nja.push(this.oqg)
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.vpj = function(b) {
        try {
            var a = (cun.emv.value37) ? b.gds : b.vpp;
            this.yiz = b.gus;
            this.hew = b.ehv;
            this.zyx = b.xtm;
            this.bit = b.zvj;
            this.xdi = b.jar;
            this.tpl = b.mrk;
            this.hti = b.ihw;
            if (this.xxv) {
                this.xxv.eda(a.jan);
                this.xxv.vpj(b.dwb)
            }
            if (this.oqg) {
                this.oqg.eda(a.yjv);
                this.oqg.vpj(b.dwb)
            }
            this.sil = b.otf;
            this.ctl = b.fontSize;
            this.wzi = b.lpl;
            this.krj = b.uha;
            this.muf = b.hmt;
            this.dgy = b.bao;
            this.cdk = b.slz;
            this.vtd = b.tih
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(c) {
        try {
            this.ics = c.font;
            this.lkl = c.scm;
            this.ifr = c.ede;
            this.krs = c.qae;
            this.dqd = c.czt;
            this.akn = c.backgroundColor;
            this.zqe = c.mxk;
            this.wul = c.ftd;
            this.fhx = c.ujm;
            this.yun = c.cac;
            this.yoz = c.kdy;
            this.avd = c.efn;
            this.vxp = c.axr;
            this.swk = c.nzu;
            for (var b = 0, a = this.nja.length; b < a; b++) {
                this.nja[b].dku((this.parent.fbj.tlc === true) ? c.wvj : c.pli)
            }
        } catch (d) {
            console.error(d)
        }
    };
    this.qmq = function(d, k) {
        var c = d - this.x,
            g = k - this.y;
        for (var f = 0, b = this.nja.length; f < b; f++) {
            var a = this.nja[f];
            if (c >= a.x && c <= a.x + a.width && g >= a.y && g <= a.y + a.height && a.bsl() === true) {
                if (a.qvq() === true && a.aqh() === false && this.gna) {
                    a.otk(true, true);
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn");
                    a.ktx();
                    for (var e = 0; e < b; e++) {
                        this.nja[e].sgw(true)
                    }
                    return true
                }
            }
        }
        if (c >= this.tpl.x && c <= this.tpl.x + this.tpl.width && g >= this.tpl.y && g <= this.tpl.y + this.tpl.height && this.vci && this.ybj) {
            this.bgg()
        }
        return true
    };
    this.vlq = function() {};
    this.chp = function() {};
    this.cyi = function() {};
    this.sdx = function(d, f, e, a, c) {
        var b = new xma();
        b.llb(d, this.context2D, null, a, null, f);
        b.parent = this;
        b.ktx = e;
        b.vpj(c);
        return b
    };
    this.qla = function(c) {
        this.ybj = c;
        for (var b = 0, a = this.nja.length; b < a; b++) {
            this.nja[b].eyu(c)
        }
    };
    this.bgg = function() {
        this.gna = !this.gna;
        this.parent.ksl()
    };
    this.sgs = function(d, a, c, b) {
        this.gog = false;
        this.wdl = true;
        this.zes = this.wgi(b);
        this.qcv = d;
        this.xjp = a;
        this.itw = c;
        if (this.bsl()) {
            this.qla(true);
            this.ksl()
        }
    };
    this.wgi = function(b) {
        var d = Math.floor(b / 3600000);
        b = b - d * 3600000;
        var a = Math.floor(b / 60000);
        b = b - a * 60000;
        var c = Math.floor(b / 1000);
        return this.nyo(d) + ":" + this.nyo(a) + ":" + this.nyo(c)
    };
    this.nyo = function(a) {
        if (a < 10) {
            return "0" + a
        }
        return a
    };
    this.nol = function(a, b) {
        this.gog = a;
        if (b && b === true) {
            this.ksl()
        }
    };
    this.cbi = function(a, b) {
        this.wdl = false;
        if (cun.emv.value37) {
            this.gna = false
        }
        this.nol(a, false);
        qtm.prototype.cbi.call(this, a, b)
    };
    this.ksl = function(j, f, k, d) {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var a = (j != null && f != null && k != null && d != null),
            g = null,
            l = this.context2D,
            c = this.parent.gai.wxh("btn_back");
        l.save();
        if (a) {
            l.beginPath();
            l.rect(j, f, k, d);
            l.closePath();
            l.clip()
        }
        l.fillStyle = this.akn;
        l.fillRect(0, 0, this.width, this.height);
        if (c) {
            g = l.createLinearGradient(this.hti.x, this.hti.y, this.hti.x + this.hti.width, this.hti.y);
            g.addColorStop(0.2, this.vxp);
            g.addColorStop(1, this.swk);
            l.fillStyle = g;
            l.save();
            if (this.parent.rpk === cun.fbj.pmj) {
                l.translate(this.hti.width / 2, this.hti.height / 2);
                l.rotate(Math.PI);
                l.translate(-this.hti.width / 2, -this.hti.height / 2)
            }
            l.fillRect(this.hti.x, this.hti.y, this.hti.width, this.hti.height);
            l.drawImage(c, this.hti.x, this.hti.y, this.hti.width, this.hti.height);
            l.restore()
        } else {
            if (this.parent.fbj.tlc === true) {
                cun.hfb.roz(l, this.hti.x, this.hti.y, this.hti.width, this.hti.height, this.vxp, 1)
            }
        }
        cun.hfb.psa(l, this.yiz.x, this.yiz.y, this.yiz.width, this.yiz.height, 0, this.zqe);
        cun.hfb.abt(l, this.jvr, this.fhx, this.yiz.x, this.yiz.y + this.krj, this.yiz.width, this.yiz.height, this.ics, this.sil, this.lkl);
        cun.hfb.psa(l, this.hew.x, this.hew.y, this.hew.width, this.hew.height, 0, this.zqe);
        if (cun.emv.value36) {
            cun.hfb.cwu(l, this.parent.bgr(this.parent.language.uvy), this.fhx, this.hew.x, this.hew.y + this.krj, this.hew.width, this.hew.height, this.ics, this.ctl, this.lkl, this.muf)
        } else {
            if (cun.emv.value37) {
                cun.hfb.cwu(l, this.parent.bgr(this.parent.language.raw), this.fhx, this.hew.x, this.hew.y + this.krj, this.hew.width, this.hew.height, this.ics, this.ctl, this.lkl, this.muf)
            }
        }
        cun.hfb.psa(l, this.zyx.x, this.zyx.y, this.zyx.width, this.zyx.height, 0, this.wul);
        cun.hfb.cwu(l, this.parent.bgr(this.parent.language.nmv), this.fhx, this.zyx.x, this.zyx.y + this.krj, this.zyx.width, this.zyx.height, this.ics, this.ctl, this.lkl, this.muf);
        cun.hfb.psa(l, this.bit.x, this.bit.y, this.bit.width, this.bit.height, 0, this.zqe);
        cun.hfb.cwu(l, this.parent.bgr(this.parent.language.jej), this.fhx, this.bit.x, this.bit.y + this.krj, this.bit.width, this.bit.height, this.ics, this.ctl, this.lkl, this.muf);
        if (this.vci) {
            this.apf(l)
        }
        if (this.wdl) {
            if (cun.emv.value36) {
                cun.hfb.dsg(l, this.qcv, this.fhx, this.hew.x, this.hew.y + this.krj, this.hew.width, this.hew.height, this.ics, this.ctl, this.lkl, this.muf)
            } else {
                if (cun.emv.value37) {
                    cun.hfb.dsg(l, this.zes, this.fhx, this.hew.x, this.hew.y + this.krj, this.hew.width, this.hew.height, this.ics, this.ctl, this.lkl, this.muf)
                }
            }
            cun.hfb.dsg(l, this.parent.oht(this.xjp), this.fhx, this.zyx.x, this.zyx.y + this.krj, this.zyx.width, this.zyx.height, this.ics, this.ctl, this.lkl, this.muf);
            cun.hfb.dsg(l, this.parent.oht(this.itw), this.fhx, this.bit.x, this.bit.y + this.krj, this.bit.width, this.bit.height, this.ics, this.ctl, this.lkl, this.muf)
        }
        for (var b = 0, e = this.nja.length; b < e; b++) {
            this.nja[b].ksl()
        }
        if (this.gog) {
            cun.hfb.zgr(l, this.xdi.x, this.xdi.y, this.xdi.width, this.xdi.height, this.cdk, this.ifr, 0.3, this.dqd, this.dgy, 1);
            cun.hfb.abt(l, this.parent.bgr(this.parent.language.gaj), this.krs, this.xdi.x, this.xdi.y, this.xdi.width, this.xdi.height, this.ics, this.ctl, this.lkl)
        }
        l.restore();
        if (this.ucm && this.qce) {
            if (a) {
                this.ucm.drawImage(this.qce, j, f, k, d, this.x + j, this.y + f, k, d)
            } else {
                this.ucm.drawImage(this.qce, this.x, this.y)
            }
        }
    };
    this.apf = function(b) {
        var c = Math.round(this.tpl.height / 2),
            a = Math.round(this.tpl.x + c),
            d = Math.round(this.tpl.y + c / 2);
        b.save();
        cun.hfb.psa(b, this.tpl.x, this.tpl.y, this.tpl.width, this.tpl.height, this.vtd, this.yun, this.yoz, this.dgy);
        cun.hfb.abt(b, this.parent.language.ebf, this.fhx, this.tpl.x + this.tpl.height, this.tpl.y, this.tpl.width - this.tpl.height, this.tpl.height, this.ics, this.wzi, this.lkl);
        cun.hfb.roz(b, a, d, c, c, null, 0, this.avd, this.dgy, 1);
        if (this.gna) {
            cun.hfb.roz(b, a + c / 4, d + c / 4, c / 2, c / 2, this.avd, 1)
        }
        b.restore()
    }
}
qtm.prototype = new bom;

function kiw() {
    var a = this;
    this.nbf = function() {
        a.nyy = false
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var b = this.context2D;
        b.save();
        if (this.rxm != null) {
            b.drawImage(this.rxm, 0, 0, this.rxm.width, this.rxm.height, this.x, this.y, this.width, this.height)
        }
        b.restore()
    }
}
kiw.prototype = new xth;

function rpy() {
    this.dzy = "";
    this.stj = "";
    this.rxm = null;
    this.pga = "sans-serif";
    this.qaz = "sans-serif";
    this.lkl = "bold";
    this.nmd = null;
    this.fhx = null;
    this.kzv = null;
    this.ekw = null;
    this.akn = null;
    this.hpv = 16;
    this.hyq = 20;
    this.ztc = 0;
    this.muk = 0;
    this.dgy = 2;
    this.yur = 3;
    this.ydp = 3;
    this.jtc = 3;
    this.fyp = 3;
    this.llb = function(a, e, b, d, c) {
        rpy.prototype.llb.call(this, a, e, b);
        this.dzy = d;
        this.stj = c
    };
    this.vpj = function(a) {
        try {
            this.hpv = a.anb;
            this.hyq = a.aaw;
            this.ztc = a.vjs;
            this.muk = a.ebq;
            this.dgy = a.bao;
            this.yur = a.nls;
            this.ydp = a.jjm;
            this.jtc = a.bzg;
            this.fyp = a.ark
        } catch (b) {
            console.error(b)
        }
    };
    this.dku = function(a) {
        try {
            this.pga = a.gtp;
            this.qaz = a.kyv;
            this.lkl = a.scm;
            this.nmd = a.bry;
            this.fhx = a.ujm;
            this.kzv = a.borderColor;
            this.ekw = a.ofm;
            this.akn = a.backgroundColor
        } catch (b) {
            console.error(b)
        }
    };
    this.bzf = function(a, b) {
        this.stj = a;
        if (b && b === true && this.context2D != null && this.bsl() === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.gjq = function(a, b) {
        this.dzy = a;
        if (b && b === true && this.context2D != null && this.bsl() === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.lineJoin = "round";
        a.lineCap = "round";
        a.textAlign = "center";
        if (this.ekw) {
            b = a.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            b.addColorStop(0, this.kzv);
            b.addColorStop(1, this.ekw);
            cun.hfb.cdv(a, this.x, this.y, this.width, this.height, this.yur, this.ydp, this.jtc, this.fyp, this.akn, 1, b, this.dgy, 1)
        } else {
            cun.hfb.cdv(a, this.x, this.y, this.width, this.height, this.yur, this.ydp, this.jtc, this.fyp, this.akn, 1, this.kzv, this.dgy, 1)
        }
        if (this.dzy != null) {
            cun.hfb.abt(a, this.dzy, this.nmd, this.x + this.dgy, this.y + this.ztc, this.width - 2 * this.dgy, this.height, this.pga, this.hpv, this.lkl)
        }
        if (this.stj != null) {
            if (this.dzy != null) {
                cun.hfb.abt(a, this.stj, this.fhx, this.x + this.dgy, this.y + this.muk, this.width - 2 * this.dgy, this.height, this.qaz, this.hyq, this.lkl)
            } else {
                cun.hfb.abt(a, this.stj, this.fhx, this.x + this.dgy, this.y + this.dgy, this.width - 2 * this.dgy, this.height, this.qaz, this.hyq, this.lkl)
            }
        }
        if (this.rxm) {
            a.drawImage(this.rxm, 0, 0, this.rxm.width, this.rxm.height, this.x + this.dgy, this.y + this.dgy, this.width - 2 * this.dgy, this.height - 2 * this.dgy)
        }
        a.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    }
}
rpy.prototype = new bom;

function ygt() {
    this.rxm = new Image();
    this.stj = "";
    this.dpq = true;
    this.ics = null;
    this.lkl = "bold";
    this.pid = "red";
    this.lix = "orange";
    this.qfo = "white";
    this.ctl = 40;
    this.muf = 0;
    this.krj = 0;
    this.qmu = 0;
    this.qzr = 2;
    this.gue = null;
    this.zhf = 0;
    this.aam = 0;
    this.llb = function(a, e, c, b, d) {
        ygt.prototype.llb.call(this, a, e, c);
        this.rxm = b;
        this.stj = d
    };
    this.vpj = function(a) {
        try {
            this.ctl = a.fontSize;
            this.muf = a.hmt;
            this.krj = a.uha;
            this.qmu = a.bch;
            this.qzr = a.qvz
        } catch (b) {
            console.error(b)
        }
    };
    this.dku = function(a) {
        try {
            this.ics = a.font;
            this.lkl = a.scm;
            this.pid = a.ifm;
            this.lix = a.daj;
            this.qfo = a.jry
        } catch (b) {
            console.error(b)
        }
    };
    this.bzf = function(a, b) {
        this.stj = a;
        if (b && b === true && this.context2D != null) {
            this.cbi(true, true)
        }
    };
    this.zry = function(a, b) {
        this.stj = a;
        this.dpq = false;
        if (b && b === true && this.context2D != null) {
            this.cbi(true, true)
        }
    };
    this.cbi = function(a, b) {
        this.lie = a;
        if (b && b === true && this.context2D != null) {
            if (this.qce == null && this.bsl()) {
                this.ksl()
            } else {
                if (this.parent != null) {
                    this.parent.ksl(this.x, this.y, this.width, this.height)
                }
            }
        }
    };
    this.bmu = function(a, b, c) {
        this.gue = a;
        this.zhf = b;
        this.aam = c
    };
    this.ksl = function() {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var b = this.context2D,
            c = null,
            a = (this.qce != null) ? 0 : this.x,
            d = (this.qce != null) ? 0 : this.y;
        b.save();
        if (this.qce == null) {
            b.beginPath();
            b.rect(this.x, this.y, this.width, this.height);
            b.closePath();
            b.clip()
        }
        if (this.dpq === true) {
            if (this.gue != null) {
                b.drawImage(this.gue, this.x + this.zhf, this.y + this.aam, this.width, this.height, this.x, this.y, this.width, this.height)
            }
            if (this.rxm != null) {
                b.drawImage(this.rxm, a, d)
            }
        }
        c = b.createLinearGradient(a + this.width / 2 + this.muf, d, a + this.width / 2 + this.muf, d + this.height);
        c.addColorStop(0, this.pid);
        c.addColorStop(1, this.lix);
        cun.hfb.abt(b, this.stj, c, a + this.qmu + this.muf, d + this.krj, this.width - 2 * this.qmu, this.height, this.ics, this.ctl, this.lkl, this.qfo, this.qzr);
        b.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    }
}
ygt.prototype = new bom;

function vne() {
    var a = this;
    this.state = 0;
    this.ckk = 1;
    this.sit = null;
    this.blv = null;
    this.lnt = null;
    this.qwp = "round";
    this.ics = null;
    this.lkl = "bold";
    this.xqd = "center";
    this.akn = null;
    this.fhx = null;
    this.bwk = 1;
    this.kqf = null;
    this.ctl = 17;
    this.qmu = 2;
    this.fhc = 0;
    this.dgy = 1;
    this.wgz = 0;
    this.wrt = 0;
    this.ueu = 0;
    this.vpj = function(b) {
        try {
            this.ctl = b.fontSize;
            this.qmu = b.bch;
            this.fhc = b.iey;
            this.dgy = b.bao;
            this.ueu = b.pbm
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(b) {
        try {
            this.qwp = b.xqm;
            this.ics = b.font;
            this.lkl = b.scm;
            this.xqd = b.textAlign;
            this.akn = b.backgroundColor;
            this.fhx = b.ujm;
            this.bwk = b.ess;
            if (b.borderColor && b.ofm) {
                this.kqf = this.context2D.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
                this.kqf.addColorStop(0, b.borderColor);
                this.kqf.addColorStop(1, b.ofm)
            } else {
                this.kqf = b.borderColor
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.dtk = function() {
        return this.qwp
    };
    this.pnt = function(c, b) {
        this.state = c;
        this.ckk = b
    };
    this.wlp = function(b) {
        this.rxm = b;
        if (this.qwp === "round") {
            this.wgz = this.width / 2 - this.qmu
        }
        if (this.rxm) {
            this.wrt = Math.round(this.rxm.height / (2 * this.ckk))
        }
    };
    this.wqi = function(b) {
        this.state = (b < this.ckk) ? b : this.state
    };
    this.lzh = function(b) {
        this.sit = b
    };
    this.nbf = function() {
        a.nyy = false
    };
    this.fmq = function() {
        a.bho = false;
        if (a.bsl()) {
            a.parent.ksl(a.x, a.y, a.width, a.height)
        }
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var l = this.context2D,
            e = (this.qvq()) ? this.bwk : this.bwk / 2,
            b = this.ctl,
            d = null,
            c = 0,
            k = 0,
            j = 0,
            g = 0;
        l.save();
        if (this.rxm && this.ktx) {
            if (!this.qvq()) {
                l.globalAlpha = e
            }
            if (this.qwp === "round") {
                cun.hfb.tjp(l, this.x + this.width / 2, this.y + this.height / 2, this.wgz, this.akn, e * this.bwk)
            } else {
                if (this.qwp === "rect") {
                    cun.hfb.zgr(l, this.x, this.y, this.width, this.height, this.fhc, this.akn, e * this.bwk, this.kqf, this.dgy, e)
                }
            }
            if (this.ozv()) {
                if (this.qwp === "round") {
                    l.drawImage(this.rxm, 0, (this.state * 2 * this.wrt) + this.wrt, this.rxm.width, this.wrt, this.x, this.y, this.width, this.height)
                } else {
                    if (this.qwp === "rect") {
                        l.drawImage(this.rxm, 0, (this.state * 2 * this.wrt) + this.wrt, this.rxm.width, this.wrt, this.x, this.y, this.width, this.height)
                    }
                }
            } else {
                if (this.qwp === "round") {
                    l.drawImage(this.rxm, 0, (this.state * 2 * this.wrt), this.rxm.width, this.wrt, this.x, this.y, this.width, this.height)
                } else {
                    if (this.qwp === "rect") {
                        l.drawImage(this.rxm, 0, (this.state * 2 * this.wrt), this.rxm.width, this.wrt, this.x, this.y, this.width, this.height)
                    }
                }
            }
            if (this.stj != null) {
                l.textAlign = this.xqd;
                l.textBaseline = "bottom";
                l.font = this.lkl + " " + b + "px " + this.ics;
                l.fillStyle = this.fhx;
                d = this.stj.split("|");
                j = 0;
                g = (this.xqd === "center") ? this.x + this.width / 2 : (this.xqd === "left") ? this.x + 2 * this.qmu : this.x + this.width - 2 * this.qmu;
                for (var f = 0; f < d.length; f++) {
                    j = (l.measureText(d[f]).width > j) ? l.measureText(d[f]).width : j
                }
                if (j > this.width - 2 * this.qmu) {
                    c = ((this.width - 2 * this.qmu) / j);
                    b = Math.round(c * b) - 1;
                    l.font = this.lkl + " " + b + "px " + this.ics
                }
                if (b * d.length > this.ueu) {
                    c = ((this.ueu) / (b * d.length));
                    b = Math.round(c * b) - 1;
                    l.font = this.lkl + " " + b + "px " + this.ics
                }
                k = (this.height - this.qmu - this.ueu) + (this.ueu - b * d.length) / 2;
                k += b;
                for (var f = 0; f < d.length; f++) {
                    l.fillText(d[f], g, this.y + k);
                    k += b
                }
            }
        }
        l.restore()
    }
}
vne.prototype = new xth;

function nsd() {
    var a = this;
    this.qwp = "rect";
    this.olu = -1;
    this.ics = null;
    this.lkl = "bold";
    this.akn = null;
    this.hhs = null;
    this.dfe = null;
    this.wkm = null;
    this.kzv = null;
    this.fhx = null;
    this.rwa = null;
    this.fhc = 3;
    this.muf = -2;
    this.krj = 2;
    this.nke = 6;
    this.ctl = 26;
    this.dgy = 2;
    this.vpj = function(b) {
        try {
            this.ctl = b.fontSize;
            this.muf = b.hmt;
            this.krj = b.uha;
            this.nke = b.isb;
            this.fhc = b.iey;
            this.dgy = b.bao
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(b) {
        try {
            this.ics = b.font;
            this.lkl = b.scm;
            this.akn = b.backgroundColor;
            this.hhs = b.wsn;
            this.dfe = b.ltt;
            this.wkm = b.tec;
            this.kzv = b.borderColor;
            this.fhx = b.ujm;
            this.rwa = b.jtj;
            this.qwp = b.xqm;
            this.olu = b.kaj
        } catch (c) {
            console.error(c)
        }
    };
    this.dtk = function() {
        return this.qwp
    };
    this.nbf = function() {
        a.nyy = false
    };
    this.fmq = function() {
        a.bho = false;
        if (a.bsl()) {
            a.parent.ksl(a.x, a.y, a.width, a.height)
        }
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var p = this.context2D,
            l = null,
            n = this.akn,
            m = this.hhs,
            b = this.ctl,
            f = null,
            d = 0,
            o = 0,
            c = 1,
            k = 0,
            e = (this.olu == 0 || this.olu == 3) ? this.fhc : 0;
        lt = (this.olu == 1 || this.olu == 3) ? this.fhc : 0;
        rb = (this.olu == 0 || this.olu == 2) ? this.fhc : 0;
        lb = (this.olu == 1 || this.olu == 2) ? this.fhc : 0;
        h = 0;
        p.save();
        p.lineJoin = "round";
        p.lineCap = "round";
        p.textAlign = "center";
        if (this.ozv()) {
            n = (this.dfe != null) ? this.dfe : n;
            m = (this.wkm != null) ? this.wkm : m
        }
        if (n != null) {
            if (m != null) {
                l = p.createLinearGradient(this.x, this.y, this.x, this.y + this.height);
                l.addColorStop(1, m);
                l.addColorStop(0, n);
                if (this.qwp === "rrect") {
                    cun.hfb.cdv(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, l, 1, this.kzv, this.dgy, 1)
                } else {
                    if (this.qwp === "rect") {
                        if (this.kzv) {
                            cun.hfb.psa(p, this.x, this.y, this.width, this.height, this.fhc, l, this.kzv, this.dgy)
                        } else {
                            cun.hfb.roz(p, this.x, this.y, this.width, this.height, l, 1)
                        }
                    } else {
                        if (this.qwp === "triangle") {
                            cun.hfb.pin(p, this.olu, this.x, this.y, this.width, this.height, this.fhc, l, 1, this.kzv, this.dgy, 1)
                        }
                    }
                }
            } else {
                if (this.qwp === "rrect") {
                    cun.hfb.cdv(p, this.x, this.y, this.width, this.height, lt, e, rb, lb, n, 1, this.kzv, this.dgy, 1)
                } else {
                    if (this.qwp === "rect") {
                        if (this.kzv) {
                            cun.hfb.psa(p, this.x, this.y, this.width, this.height, this.fhc, n, this.kzv, this.dgy, 1)
                        } else {
                            cun.hfb.roz(p, this.x, this.y, this.width, this.height, n, 1)
                        }
                    } else {
                        if (this.qwp === "triangle") {
                            cun.hfb.pin(p, this.olu, this.x, this.y, this.width, this.height, this.fhc, n, 1, this.kzv, this.dgy, 1)
                        }
                    }
                }
            }
        }
        if (this.rxm != null) {
            h = this.height - 2 * this.nke;
            p.drawImage(this.rxm, this.x + this.width / 2 - h / 2, this.y + this.nke, h, h)
        }
        if (this.stj != null) {
            p.textAlign = "center";
            p.textBaseline = "bottom";
            f = this.stj.split("|");
            d = 0;
            if (this.ozv()) {
                d = 1;
                p.fillStyle = this.rwa
            } else {
                p.fillStyle = this.fhx
            }
            p.font = this.lkl + " " + b + "px " + this.ics;
            for (var g = 0, j = f.length; g < j; g++) {
                o = (p.measureText(f[g]).width > o) ? p.measureText(f[g]).width : o
            }
            if (o > this.width - 2 * this.nke) {
                c = ((this.width - 2 * this.nke) / o);
                b = Math.round(c * b) - 1;
                p.font = this.lkl + " " + b + "px " + this.ics
            }
            if (b * f.length > this.height) {
                c = ((this.height) / (b * f.length));
                b = Math.round(c * b) - 1;
                p.font = this.lkl + " " + b + "px " + this.ics
            }
            k = (this.height - b * f.length) / 2;
            k += b;
            for (var g = 0; g < f.length; g++) {
                p.fillText(f[g], (this.x + this.width / 2) + this.muf, this.y - this.krj + k + d);
                k += b
            }
        }
        p.restore()
    }
}
nsd.prototype = new xth;

function exi() {
    var a = this;
    this.stj = null;
    this.ybj = false;
    this.nyy = false;
    this.rlf = false;
    this.ics = null;
    this.lkl = "bold";
    this.xqd = "center";
    this.akn = null;
    this.kzv = null;
    this.fhx = null;
    this.cep = "rect";
    this.eex = new icy();
    this.cbm = new icy();
    this.ctl = 16;
    this.fhc = 8;
    this.dgy = 1;
    this.vht = 0;
    var b = 200;
    this.llb = function(c, f, d, e) {
        this.stj = e;
        exi.prototype.llb.call(this, c, f, d)
    };
    this.dku = function(c) {
        try {
            this.ics = c.font;
            this.lkl = c.scm;
            this.xqd = c.textAlign;
            this.akn = c.backgroundColor;
            this.kzv = c.borderColor;
            this.fhx = c.ujm;
            this.cep = c.type
        } catch (d) {
            console.error(d)
        }
    };
    this.vpj = function(c) {
        try {
            this.eex = c.vli;
            this.cbm = c.nla;
            this.ctl = c.fontSize;
            this.fhc = c.iey;
            this.dgy = c.bao
        } catch (d) {
            console.error(d)
        }
    };
    this.eyu = function(c) {
        this.ybj = c
    };
    this.qvq = function() {
        return this.ybj
    };
    this.fwm = function(c, d) {
        this.rlf = c;
        if (d && d === true) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.nsu = function() {
        return this.rlf
    };
    this.bzf = function(c, d) {
        this.stj = c;
        if (d && d === true && this.bsl()) {
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.sgw = function(c, d) {
        this.nyy = c;
        d = (d === false) ? false : true;
        clearTimeout(this.vht);
        if (this.nyy === true && d === true) {
            this.vht = setTimeout(this.nbf, b)
        }
    };
    this.aqh = function() {
        return this.nyy
    };
    this.nbf = function() {
        a.nyy = false
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var c = this.context2D;
        c.save();
        cun.hfb.psa(c, this.x, this.y, this.width, this.height, this.fhc, this.akn, this.kzv, this.dgy);
        if (this.cep === "rect") {
            cun.hfb.roz(c, this.x + this.cbm.x, this.y + this.cbm.y, this.cbm.width, this.cbm.height, this.fhx, 0.2, this.fhx, this.dgy, 1);
            if (this.rlf === true) {
                cun.hfb.roz(c, this.x + this.cbm.x + this.cbm.width / 4, this.y + this.cbm.y + this.cbm.height / 4, this.cbm.width / 2, this.cbm.height / 2, this.fhx, 1)
            }
        } else {
            if (this.cep === "round") {
                cun.hfb.tjp(c, this.x + this.cbm.x + this.cbm.width / 2, this.y + this.cbm.y + this.cbm.height / 2, this.cbm.width / 2, this.fhx, 0.2, this.fhx, this.dgy, 1);
                if (this.rlf === true) {
                    cun.hfb.tjp(c, this.x + this.cbm.x + this.cbm.width / 2, this.y + this.cbm.y + this.cbm.height / 2, this.cbm.width / 4, this.fhx, 1)
                }
            }
        }
        if (this.stj && this.stj != "") {
            cun.hfb.qhp(c, this.stj, this.fhx, this.x + this.eex.x, this.y + this.eex.y, this.eex.width, this.eex.height, this.ics, this.ctl, this.lkl, this.xqd, true)
        }
        c.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    };
    this.ktx = {}
}
exi.prototype = new bom;

function jdq() {
    var b = this;
    var c = 0;
    var a = 1;
    this.mib = null;
    this.dzy = "";
    this.kof = "";
    this.oxm = "";
    this.mwq = "";
    this.sif = false;
    this.qcv = [];
    this.tpz = 0;
    this.mzy = 0;
    this.cns = 0;
    this.ayz = 0;
    this.xcf = 0;
    this.zhx = 0;
    this.wiz = 0;
    this.xnk = 0;
    this.jln = false;
    this.uyv = false;
    this.viz = false;
    this.cep = "center";
    this.ics = "arial";
    this.lkl = "bold";
    this.nmd = "white";
    this.fhx = "white";
    this.akn = "black";
    this.hhs = null;
    this.kzv = "white";
    this.ekw = "rgb(150,150,150)";
    this.vxp = null;
    this.wbz = null;
    this.dgy = 3;
    this.xra = 0;
    this.box = 0;
    this.eos = 0;
    this.hpv = 30;
    this.zsr = 24;
    this.yiz = new icy();
    this.jvf = new icy();
    this.apb = new icy();
    this.mks = new icy();
    this.yux = new icy();
    this.kap = new icy();
    this.pkf = new icy();
    this.ept = new icy();
    this.lyi = new icy();
    this.hpk = 7;
    this.tvv = 0;
    this.okq = 0;
    this.ohe = 0;
    this.wkk = c;
    this.yzf = 0;
    this.dnh = 89;
    this.lew = false;
    this.voo = 0;
    this.siu = 0;
    this.fgt = 0;
    this.ida = 0;
    this.zvt = null;
    this.hrp = 0;
    this.iug = 1;
    this.eaj = 250;
    this.llb = function(d, f, e) {
        jdq.prototype.llb.call(this, d, f, e);
        this.mib = new bmn();
        this.mib.llb();
        this.mib.etj("buttons");
        this.mib.etj("checkboxes");
        this.mib.etj("displays");
        this.mib.etj("lbuttons");
        this.mib.etj("mbuttons");
        this.mib.etj("vbuttons");
        this.mib.etj("cbuttons")
    };
    this.ajo = function(d) {
        try {
            this.hoe(d);
            this.xsn(d)
        } catch (f) {
            console.error(f)
        }
    };
    this.dku = function(k) {
        try {
            var n = this.mib.tcj("lbuttons"),
                m = this.mib.tcj("mbuttons"),
                f = this.mib.tcj("cbuttons"),
                g = this.mib.tcj("displays");
            this.cep = k.type;
            this.ics = k.font;
            this.lkl = k.scm;
            this.nmd = k.bry;
            this.fhx = k.ujm;
            this.akn = k.backgroundColor;
            this.hhs = k.wsn;
            this.kzv = k.borderColor;
            this.vxp = k.axr;
            this.wbz = k.xzm;
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].dku(k.iss)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].dku(k.huw)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].dku(k.oph)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].dku(k.display)
            }
            this.mib.amg("checkboxes", "#dku", [k.bnl])
        } catch (l) {
            console.error(l)
        }
    };
    this.vpj = function(k) {
        try {
            var n = this.mib.tcj("lbuttons"),
                m = this.mib.tcj("mbuttons"),
                f = this.mib.tcj("cbuttons"),
                g = this.mib.tcj("displays");
            this.dgy = k.bao;
            this.xra = k.wrp;
            this.box = k.qum;
            this.eos = k.mce;
            this.hpv = k.anb;
            this.zsr = k.ldl;
            this.yiz = k.gus;
            this.jvf = k.naq;
            this.apb = k.jyf;
            this.mks = k.qnx;
            this.yux = k.jpj;
            this.kap = k.zwf;
            this.mib.bnh("lgames", "#eda", [k.jlb]);
            this.mib.bnh("mgames", "#eda", [k.lte]);
            this.mib.bnh("lmincredit", "#eda", [k.lwx]);
            this.mib.bnh("mmincredit", "#eda", [k.ugm]);
            this.mib.bnh("lmaxcredit", "#eda", [k.nkw]);
            this.mib.bnh("mmaxcredit", "#eda", [k.uzi]);
            this.mib.bnh("lmaxwin", "#eda", [k.gkk]);
            this.mib.bnh("mmaxwin", "#eda", [k.udd]);
            this.mib.bnh("start", "#eda", [k.brb]);
            this.mib.bnh("cancel", "#eda", [k.mhc]);
            this.mib.bnh("gamesd", "#eda", [k.oxe]);
            this.mib.bnh("mincreditd", "#eda", [k.dva]);
            this.mib.bnh("maxcreditd", "#eda", [k.yrs]);
            this.mib.bnh("maxwind", "#eda", [k.ydq]);
            for (var j = 0, d = n.length; j < d; j++) {
                n[j].vpj(k.iss)
            }
            for (var j = 0, d = m.length; j < d; j++) {
                m[j].vpj(k.huw)
            }
            for (var j = 0, d = f.length; j < d; j++) {
                f[j].vpj(k.oph)
            }
            for (var j = 0, d = g.length; j < d; j++) {
                g[j].vpj(k.display)
            }
            this.mib.bnh("cmincredit", "#eda", [k.tqi]);
            this.mib.bnh("cmaxcredit", "#eda", [k.mva]);
            this.mib.bnh("cmaxwin", "#eda", [k.lqp]);
            this.mib.amg("checkboxes", "#vpj", [k.bnl])
        } catch (l) {
            console.error(l)
        }
    };
    this.hoe = function(d) {
        this.mib.byd("start", this.sdx(d.brb, this.parent.language.start, this.hqo, this.parent.ihh.xub), ["buttons", "cbuttons"]);
        this.mib.byd("cancel", this.sdx(d.mhc, this.parent.language.mpv, this.zhj, this.parent.ihh.psc), ["buttons", "cbuttons"]);
        this.mib.byd("lgames", this.sdx(d.jlb, "", this.pgc, null), ["buttons", "lbuttons", "vbuttons"]);
        this.mib.byd("mgames", this.sdx(d.lte, "+", this.yns, null), ["buttons", "mbuttons", "vbuttons"]);
        this.mib.byd("lmincredit", this.sdx(d.lwx, "", this.qjr, null), ["buttons", "lbuttons", "vbuttons"]);
        this.mib.byd("mmincredit", this.sdx(d.ugm, "+", this.hxe, null), ["buttons", "mbuttons", "vbuttons"]);
        this.mib.byd("lmaxcredit", this.sdx(d.nkw, "", this.nra, null), ["buttons", "lbuttons", "vbuttons"]);
        this.mib.byd("mmaxcredit", this.sdx(d.uzi, "+", this.bgy, null), ["buttons", "mbuttons", "vbuttons"]);
        this.mib.byd("lmaxwin", this.sdx(d.gkk, "", this.ker, null), ["buttons", "lbuttons", "vbuttons"]);
        this.mib.byd("mmaxwin", this.sdx(d.udd, "+", this.nyg, null), ["buttons", "mbuttons", "vbuttons"]);
        this.mib.byd("cmincredit", this.lbh(d.tqi, "", this.uai), ["checkboxes"]);
        this.mib.byd("cmaxcredit", this.lbh(d.mva, "", this.zlq), ["checkboxes"]);
        this.mib.byd("cmaxwin", this.lbh(d.lqp, "", this.nqu), ["checkboxes"])
    };
    this.xsn = function(d) {
        this.mib.byd("gamesd", this.rfp(d.oxe, null, (this.qcv[this.tpz] > 0) ? this.qcv[this.tpz] : "---"), ["displays"]);
        this.mib.byd("mincreditd", this.rfp(d.dva, null, "---"), ["displays"]);
        this.mib.byd("maxcreditd", this.rfp(d.yrs, null, "---"), ["displays"]);
        this.mib.byd("maxwind", this.rfp(d.ydq, null, "---"), ["displays"])
    };
    this.rfp = function(d, g, f) {
        var e = new rpy();
        e.llb(d, this.context2D, null, g, f);
        e.parent = this;
        return e
    };
    this.sdx = function(f, i, g, e) {
        var d = new nsd();
        d.llb(f, this.context2D, null, null, i);
        d.parent = this;
        d.ktx = g;
        if (e) {
            d.vhe = e.ojt
        }
        return d
    };
    this.lbh = function(e, g, f) {
        var d = new exi();
        d.llb(e, this.context2D, null, g);
        d.parent = this;
        d.ktx = f;
        return d
    };
    this.qmq = function(r, n) {
        var s = this.mib.tcj("vbuttons"),
            l = this.mib.tcj("cbuttons"),
            g = this.mib.tcj("checkboxes"),
            p = this.mib.owa("cancel"),
            q = r - this.x,
            o = n - this.y;
        if (this.fkj) {
            return true
        }
        if ((!p || !p.bsl()) && (r < this.x || r > this.x + this.width || n < this.y || n > this.y + this.height)) {
            this.viz = true;
            this.slm();
            return true
        }
        for (var f = 0, m = s.length; f < m; f++) {
            var d = s[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.bsl() === true && d.qvq() === true && d.aqh() === false) {
                    d.otk(true, false, false);
                    this.hrp = 0;
                    this.iug = 1;
                    if (d.ktx() === false) {
                        this.zvt = function() {
                            if (d.ktx() === true) {
                                clearInterval(b.ida);
                                d.otk(false, false);
                                b.parent.ksl();
                                for (var i = 0; i < m; i++) {
                                    s[i].sgw(false)
                                }
                            }
                        };
                        this.ida = setInterval(this.zvt, this.eaj)
                    }
                    for (var e = 0; e < m; e++) {
                        s[e].sgw(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = l.length; f < m; f++) {
            var d = l[f];
            if (q >= d.x && q <= d.x + d.width && o >= d.y && o <= d.y + d.height) {
                if (d.bsl() === true && d.qvq() === true) {
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn");
                    d.otk(true, false);
                    d.ktx();
                    for (var e = 0; e < m; e++) {
                        l[e].sgw(true)
                    }
                }
                return true
            }
        }
        for (var f = 0, m = g.length; f < m; f++) {
            var k = g[f];
            if (q >= k.x && q <= k.x + k.width && o >= k.y && o <= k.y + k.height) {
                if (k.bsl() === true && k.qvq() === true) {
                    k.fwm(!k.nsu(), true);
                    k.ktx();
                    for (var e = 0; e < m; e++) {
                        g[e].sgw(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.vlq = function() {
        var e = this.mib.tcj("vbuttons"),
            j = this.mib.tcj("cbuttons");
        for (var g = 0, d = e.length; g < d; g++) {
            var f = e[g];
            if (f.ozv() == true) {
                clearInterval(this.ida);
                f.otk(false, false);
                this.parent.ksl();
                return true
            }
        }
        for (var g = 0, d = j.length; g < d; g++) {
            var f = j[g];
            if (f.ozv() == true) {
                f.otk(false, false);
                this.parent.ksl();
                return true
            }
        }
        return false
    };
    this.chp = function(l) {
        var k = this.mib.tcj("buttons");
        if (this.fkj) {
            return true
        }
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l == f.vhe) {
                if (f.qvq() && !f.aqh()) {
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn");
                    f.otk(true, false);
                    f.ktx();
                    for (var e = 0; e < d; e++) {
                        k[e].sgw(true)
                    }
                }
                return true
            }
        }
        return true
    };
    this.cyi = function() {
        var g = this.mib.tcj("buttons");
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ozv() == true) {
                e.otk(false, false);
                this.parent.ksl();
                return true
            }
        }
        return false
    };
    this.qla = function(d) {
        this.mib.amg("buttons", "#eyu", [d]);
        this.mib.amg("checkboxes", "#eyu", [d]);
        if (d === true && this.uyv === true) {
            this.mib.bnh("cmincredit", "#eyu", [false])
        }
    };
    this.sww = function(d) {
        this.qcv = d.g;
        this.mzy = d.v;
        this.cns = d.v;
        this.jln = d.r;
        this.uyv = d.l;
        if (typeof d.m != "undefined" && d.m != null && d.m > 0) {
            this.ayz = d.m;
            this.xcf = d.m
        }
    };
    this.nkf = function() {
        if (this.jln === true) {
            this.zhx = this.parent.qjh;
            this.wiz = this.parent.qjh;
            this.tpz = 0;
            this.xnk = 0
        }
    };
    this.nnx = function() {
        if (this.qcv.length > 0 && this.tpz >= 0 && this.viz === false) {
            return this.qcv[this.tpz]
        }
        return 0
    };
    this.wvk = function() {
        var d = this.mib.owa("cmincredit") == null || this.mib.bnh("cmincredit", "#nsu");
        if (this.zhx > 0 && d === true) {
            return this.zhx
        }
        return 0
    };
    this.jjl = function() {
        var d = this.mib.owa("cmaxcredit") == null || this.mib.bnh("cmaxcredit", "#nsu");
        if (this.wiz > 0 && d === true) {
            return this.wiz
        }
        return 0
    };
    this.evt = function() {
        var d = this.mib.owa("cmaxwin") == null || this.mib.bnh("cmaxwin", "#nsu");
        if (this.xnk > 0 && d === true) {
            return this.xnk
        }
        return 0
    };
    this.vmo = function() {
        var f = this.mib.owa("cmincredit") == null || this.mib.bnh("cmincredit", "#nsu"),
            d = this.mib.owa("cmaxcredit") == null || this.mib.bnh("cmaxcredit", "#nsu"),
            e = this.mib.owa("cmaxwin") == null || this.mib.bnh("cmaxwin", "#nsu");
        this.lew = false;
        this.viz = false;
        this.cns = (this.xcf > 0) ? this.parent.nlf() * this.xcf : this.cns;
        this.mzy = (this.ayz > 0) ? this.parent.nlf() * this.ayz : this.mzy;
        if (this.jln === true) {
            f = this.uyv;
            d = false;
            e = false;
            this.nkf()
        } else {
            if (this.uyv === true) {
                f = true;
                this.zhx = (this.zhx < this.parent.qjh) ? this.zhx : this.parent.qjh;
                this.zhx = (this.zhx > 0) ? this.zhx : this.parent.qjh
            } else {
                f = (this.zhx <= this.parent.qjh) ? f : false;
                this.zhx = (this.zhx < this.parent.qjh) ? this.zhx : this.parent.qjh
            }
            d = (this.wiz >= this.parent.qjh) ? d : false;
            this.wiz = (this.wiz > this.parent.qjh) ? this.wiz : this.parent.qjh
        }
        this.mib.bnh("cmincredit", "#fwm", [f]);
        this.mib.bnh("cmaxcredit", "#fwm", [d]);
        this.mib.bnh("cmaxwin", "#fwm", [e]);
        this.mib.bnh("gamesd", "#bzf", [(this.qcv[this.tpz] > 0) ? this.qcv[this.tpz] : "---"]);
        this.mib.bnh("mincreditd", "#bzf", [(f === true && this.zhx > 0) ? this.parent.oht(this.zhx) : "---"]);
        this.mib.bnh("maxcreditd", "#bzf", [(d === true && this.wiz > 0) ? this.parent.oht(this.wiz) : "---"]);
        this.mib.bnh("maxwind", "#bzf", [(e === true && this.xnk > 0) ? this.parent.oht(this.xnk) : "---"]);
        this.mib.bnh("lmincredit", "#cbi", [f]);
        this.mib.bnh("mmincredit", "#cbi", [f && this.zhx < this.parent.qjh]);
        this.mib.bnh("lmaxcredit", "#cbi", [d && this.wiz > this.parent.qjh]);
        this.mib.bnh("mmaxcredit", "#cbi", [d]);
        this.mib.bnh("lmaxwin", "#cbi", [e && this.xnk > this.cns]);
        this.mib.bnh("mmaxwin", "#cbi", [e]);
        if (this.sif === false) {
            this.qla(true);
            this.cbi(true);
            this.parent.ksl()
        } else {
            this.teh();
            this.parent.gai.ykp("panel_out");
            this.parent.gai.vsj("panel_out");
            this.hjz()
        }
    };
    this.slm = function() {
        b.qla(false);
        if (b.sif === false) {
            b.cbi(false);
            b.parent.ksl()
        } else {
            b.zma();
            b.parent.gai.ykp("panel_out");
            b.parent.gai.vsj("panel_out");
            b.hjz()
        }
    };
    this.teh = function() {
        this.cbi(true);
        this.fkj = true;
        this.ybj = false;
        this.wkk = c;
        this.tvv = Math.floor(this.width / this.hpk);
        this.ohe = 0;
        this.okq = 0;
        this.yzf = new Date().getTime()
    };
    this.zma = function() {
        this.fkj = true;
        this.ybj = false;
        this.wkk = a;
        this.tvv = -Math.floor(this.width / this.hpk);
        this.ohe = 1;
        this.okq = this.width;
        this.yzf = new Date().getTime()
    };
    this.hjz = function() {
        var d = b.dnh,
            e = new Date().getTime();
        if (b.ohe < b.hpk) {
            b.okq += b.tvv;
            b.ohe++;
            b.parent.ksl();
            d = (((b.wkk === a) ? b.ohe - 1 : b.ohe) * b.dnh - (e - b.yzf));
            b.voo = setTimeout(b.hjz, d)
        } else {
            b.fkj = false;
            b.ybj = true;
            if (b.wkk == a) {
                b.cbi(false);
                b.parent.kmv();
                if (b.lew === true) {
                    b.siu = setTimeout(b.parent.zlc, 200)
                }
            } else {
                if (b.wkk == c) {
                    b.qla(true)
                }
            }
            b.parent.ksl()
        }
    };
    this.stop = function() {
        clearTimeout(this.voo);
        clearTimeout(this.fgt);
        clearTimeout(this.siu);
        clearInterval(this.ida)
    };
    this.nhz = function(d) {
        this.dzy = d.lzd;
        this.kof = d.osj;
        this.oxm = d.sna;
        this.mib.bnh("start", "#bzf", [d.start]);
        this.mib.bnh("cancel", "#bzf", [d.mpv]);
        this.mib.bnh("cmincredit", "#bzf", [d.efi]);
        this.mib.bnh("cmaxcredit", "#bzf", [d.qjz]);
        this.mib.bnh("cmaxwin", "#bzf", [d.qyp]);
        if (this.parent.jmw === true && cun.emv.value44.d === true) {
            this.mwq = d.sep
        }
    };
    this.ksl = function(n, m, o, j) {
        if (!this.bsl()) {
            return
        }
        var f = (n != null && m != null && o != null && j != null),
            p = this.context2D,
            d = this.mib.ugn(),
            e = this.akn,
            l = this.kzv;
        if (this.hhs) {
            e = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            e.addColorStop(0, this.akn);
            e.addColorStop(1, this.hhs)
        }
        if (this.ekw) {
            if (this.cep === "center") {
                l = p.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height)
            } else {
                if (this.cep === "left") {
                    l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                } else {
                    if (this.cep === "right") {
                        l = p.createLinearGradient(this.width, this.height / 2, 0, this.height / 2)
                    }
                }
            }
            if (this.cep === "left") {
                l.addColorStop(1, this.kzv);
                l.addColorStop(0, this.ekw)
            } else {
                if (this.cep === "center" || this.cep === "right") {
                    l.addColorStop(0, this.kzv);
                    l.addColorStop(1, this.ekw)
                }
            }
        }
        p.save();
        p.clearRect(0, 0, this.width, this.height);
        if (f) {
            p.beginPath();
            p.rect(n, m, o, j);
            p.closePath();
            p.clip()
        }
        cun.hfb.cdv(p, 0, 0, this.width, this.height, this.xra, this.box, this.box, this.xra, e, 1, l, this.dgy, 1);
        cun.hfb.psa(p, this.apb.x, this.apb.y, this.apb.width, this.apb.height, this.eos, this.vxp, this.wbz, this.dgy / 2);
        cun.hfb.psa(p, this.yux.x, this.yux.y, this.yux.width, this.yux.height, this.eos, this.vxp, this.wbz, this.dgy / 2);
        cun.hfb.abt(p, this.dzy, this.nmd, this.yiz.x, this.yiz.y, this.yiz.width, this.yiz.height, this.ics, this.hpv, this.lkl);
        cun.hfb.qhp(p, this.mwq, this.fhx, this.jvf.x, this.jvf.y, this.jvf.width, this.jvf.height, this.ics, this.zsr, this.lkl, "center", true);
        cun.hfb.cwu(p, this.kof, this.fhx, this.mks.x, this.mks.y, this.mks.width, this.mks.height, this.ics, this.zsr, this.lkl, 0);
        cun.hfb.abt(p, this.oxm, this.fhx, this.kap.x, this.kap.y, this.kap.width, this.kap.height, this.ics, this.zsr, this.lkl);
        for (var g = 0, k = d.length; g < k; g++) {
            d[g].ksl()
        }
        p.restore();
        if (this.ucm && this.qce) {
            if (this.fkj) {
                if (this.okq > 0) {
                    if (this.cep === "left") {
                        this.ucm.drawImage(this.qce, this.width - this.okq, 0, this.okq, this.height, this.x, this.y, this.okq, this.height)
                    } else {
                        if (this.cep === "right") {
                            this.ucm.drawImage(this.qce, 0, 0, this.okq, this.height, this.x + this.width - this.okq, this.y, this.okq, this.height)
                        }
                    }
                }
            } else {
                if (f) {
                    this.ucm.drawImage(this.qce, n, m, o, j, this.x + n, this.y + m, o, j)
                } else {
                    this.ucm.drawImage(this.qce, this.x, this.y)
                }
            }
        }
    };
    this.hqo = function() {
        b.parent.ksl();
        if (b.qcv[b.tpz] <= 0) {
            return
        }
        if (b.sif === false) {
            b.fgt = setTimeout(b.parent.kmv, 400);
            b.siu = setTimeout(b.parent.zlc, 500)
        } else {
            b.fkj = true;
            b.lew = true;
            b.fgt = setTimeout(b.slm, 400)
        }
    };
    this.zhj = function() {
        b.parent.ksl();
        b.viz = true;
        if (b.sif === false) {
            b.fgt = setTimeout(b.parent.kmv, 400)
        } else {
            b.fkj = true;
            b.fgt = setTimeout(b.slm, 400)
        }
    };
    this.yns = function() {
        b.tpz = (b.tpz < b.qcv.length - 1) ? b.tpz + 1 : 0;
        b.parent.gai.vsj("step0");
        b.mib.bnh("gamesd", "#bzf", [(b.qcv[b.tpz] > 0) ? b.qcv[b.tpz] : "---"]);
        b.parent.ksl();
        return (b.tpz >= b.qcv.length - 1)
    };
    this.pgc = function() {
        b.tpz = (b.tpz > 0) ? b.tpz - 1 : b.qcv.length - 1;
        b.parent.gai.vsj("step0");
        b.mib.bnh("gamesd", "#bzf", [(b.qcv[b.tpz] > 0) ? b.qcv[b.tpz] : "---"]);
        b.parent.ksl();
        return (b.tpz <= 0)
    };
    this.hxe = function() {
        var d = b.mib.owa("cmincredit") == null || b.mib.bnh("cmincredit", "#nsu");
        if (d === true) {
            if (++b.hrp > 10) {
                b.iug = 10
            }
            b.zhx = (b.zhx + (b.mzy * b.iug) <= b.parent.qjh) ? b.zhx + (b.mzy * b.iug) : b.parent.qjh;
            b.parent.gai.vsj("step0");
            b.mib.bnh("mincreditd", "#bzf", [(b.zhx > 0) ? b.parent.oht(b.zhx) : "---"]);
            b.mib.bnh("mmincredit", "#cbi", [d && b.zhx < b.parent.qjh]);
            b.mib.bnh("lmincredit", "#cbi", [d && b.zhx > 0]);
            b.parent.ksl();
            return (b.zhx >= b.parent.qjh)
        }
        return true
    };
    this.qjr = function() {
        var d = b.mib.owa("cmincredit") == null || b.mib.bnh("cmincredit", "#nsu");
        if (d === true) {
            if (++b.hrp > 10) {
                b.iug = 10
            }
            b.zhx = (b.zhx - (b.mzy * b.iug) > 0) ? b.zhx - (b.mzy * b.iug) : 0;
            b.parent.gai.vsj("step0");
            b.mib.bnh("mincreditd", "#bzf", [(b.zhx > 0) ? b.parent.oht(b.zhx) : "---"]);
            b.mib.bnh("mmincredit", "#cbi", [d && b.zhx < b.parent.qjh]);
            b.mib.bnh("lmincredit", "#cbi", [d && b.zhx > 0]);
            b.parent.ksl();
            return (b.zhx >= b.parent.qjh || b.zhx <= 0)
        }
        return true
    };
    this.bgy = function() {
        var d = b.mib.owa("cmaxcredit") == null || b.mib.bnh("cmaxcredit", "#nsu");
        if (d === true) {
            if (++b.hrp > 10) {
                b.iug = 10
            }
            b.wiz = (b.wiz + (b.cns * b.iug) > 0) ? b.wiz + (b.cns * b.iug) : 0;
            b.parent.gai.vsj("step0");
            b.mib.bnh("maxcreditd", "#bzf", [(b.wiz > 0) ? b.parent.oht(b.wiz) : "---"]);
            b.mib.bnh("lmaxcredit", "#cbi", [d && b.wiz > b.parent.qjh]);
            b.parent.ksl();
            return (b.wiz <= b.parent.qjh)
        }
        return true
    };
    this.nra = function() {
        var d = b.mib.owa("cmaxcredit") == null || b.mib.bnh("cmaxcredit", "#nsu");
        if (d === true) {
            if (++b.hrp > 10) {
                b.iug = 10
            }
            b.wiz = (b.wiz - (b.cns * b.iug) > b.parent.qjh) ? b.wiz - (b.cns * b.iug) : b.parent.qjh;
            b.parent.gai.vsj("step0");
            b.mib.bnh("maxcreditd", "#bzf", [(b.wiz > 0) ? b.parent.oht(b.wiz) : "---"]);
            b.mib.bnh("lmaxcredit", "#cbi", [d && b.wiz > b.parent.qjh]);
            b.parent.ksl();
            return (b.wiz <= b.parent.qjh)
        }
        return true
    };
    this.nyg = function() {
        var d = b.mib.owa("cmaxwin") == null || b.mib.bnh("cmaxwin", "#nsu");
        if (d === true) {
            if (++b.hrp > 10) {
                b.iug = 10
            }
            b.xnk = (b.xnk + (b.cns * b.iug) > 0) ? b.xnk + (b.cns * b.iug) : 0;
            b.parent.gai.vsj("step0");
            b.mib.bnh("maxwind", "#bzf", [(b.xnk > 0) ? b.parent.oht(b.xnk) : "---"]);
            b.mib.bnh("lmaxwin", "#cbi", [d && b.xnk > b.cns]);
            b.parent.ksl();
            return (b.xnk <= b.cns)
        }
        return true
    };
    this.ker = function() {
        var d = b.mib.owa("cmaxwin") == null || b.mib.bnh("cmaxwin", "#nsu");
        if (d === true) {
            if (++b.hrp > 10) {
                b.iug = 10
            }
            b.xnk = (b.xnk - (b.cns * b.iug) > 0) ? b.xnk - (b.cns * b.iug) : b.cns;
            b.parent.gai.vsj("step0");
            b.mib.bnh("maxwind", "#bzf", [(b.xnk > 0) ? b.parent.oht(b.xnk) : "---"]);
            b.mib.bnh("lmaxwin", "#cbi", [d && b.xnk > b.cns]);
            b.parent.ksl();
            return (b.xnk <= b.cns)
        }
        return true
    };
    this.uai = function() {
        var d = b.mib.owa("cmincredit") == null || b.mib.bnh("cmincredit", "#nsu");
        b.zhx = b.parent.qjh;
        b.mib.bnh("mincreditd", "#bzf", [(d === true && b.zhx > 0) ? b.parent.oht(b.zhx) : "---"]);
        b.mib.bnh("lmincredit", "#cbi", [d]);
        b.mib.bnh("mmincredit", "#cbi", [d && b.zhx < b.parent.qjh]);
        b.parent.ksl()
    };
    this.zlq = function() {
        var d = b.mib.owa("cmaxcredit") == null || b.mib.bnh("cmaxcredit", "#nsu");
        b.wiz = b.parent.qjh;
        b.mib.bnh("maxcreditd", "#bzf", [(d === true && b.wiz > 0) ? b.parent.oht(b.wiz) : "---"]);
        b.mib.bnh("lmaxcredit", "#cbi", [d && b.wiz > b.parent.qjh]);
        b.mib.bnh("mmaxcredit", "#cbi", [d]);
        b.parent.ksl()
    };
    this.nqu = function() {
        var d = b.mib.owa("cmaxwin") == null || b.mib.bnh("cmaxwin", "#nsu");
        if (b.xnk === 0) {
            b.xnk = b.cns
        }
        b.mib.bnh("maxwind", "#bzf", [(d === true && b.xnk > 0) ? b.parent.oht(b.xnk) : "---"]);
        b.mib.bnh("lmaxwin", "#cbi", [d && b.xnk > b.cns]);
        b.mib.bnh("mmaxwin", "#cbi", [d]);
        b.parent.ksl()
    }
}
jdq.prototype = new bom;

function vdz() {
    this.nmb = "right";
    this.mmk = "left";
    this.usb = null;
    this.gsj = null;
    this.dzy = null;
    this.lsy = -1;
    this.qib = -1;
    this.ybj = true;
    this.rlf = false;
    this.nyy = false;
    this.fkj = false;
    this.idr = 0;
    this.cgu = 0;
    this.ilh = [];
    this.boo = 0;
    this.uhv = 0;
    this.aad = 1;
    this.nop = 0;
    this.sbd = 0;
    this.cep = this.nmb;
    this.ics = null;
    this.lkl = "bold";
    this.fhx = "rgb(255,255,255)";
    this.akn = "rgb(0,0,0)";
    this.isd = "rgb(0,0,0)";
    this.oya = "rgb(0,0,0)";
    this.ymn = 0.7;
    this.nxj = null;
    this.qrb = null;
    this.ghk = null;
    this.nlu = new icy();
    this.mxc = new icy();
    this.isp = new icy();
    this.yiz = new icy();
    this.dgy = 2;
    this.fhc = 5;
    this.sre = 4;
    this.npj = 10;
    this.lzx = 5;
    this.ctl = 15;
    var a = 200;
    this.flh = function(c, d, f) {
        this.ilh = [];
        this.idr = (d < 0) ? 0 : d;
        this.cgu = (f < 0) ? 0 : f;
        for (var e = this.idr, b = 0; e <= this.cgu; e++) {
            this.ilh[b++] = c[e]
        }
        this.boo = this.ilh.length;
        this.nop = this.nlu.height / this.boo
    };
    this.vpj = function(b) {
        try {
            this.ctl = b.fontSize;
            this.dgy = b.bao;
            this.fhc = b.iey;
            this.sre = b.qpb;
            this.npj = b.xlu;
            this.lzx = b.rrn;
            this.nlu = new icy(b.tcu.x, b.tcu.y + b.shr, b.tcu.width, b.tcu.height - 2 * b.shr);
            this.mxc = new icy(b.tcu.x, b.tcu.y, b.tcu.width, b.shr);
            this.isp = new icy(b.tcu.x, b.tcu.y + b.tcu.height - b.shr, b.tcu.width, b.shr);
            this.yiz = b.gus
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(b) {
        try {
            this.ics = b.font;
            this.lkl = b.scm;
            this.fhx = b.ujm;
            this.akn = b.backgroundColor;
            this.isd = b.epd;
            this.oya = b.oiz;
            this.ymn = b.eke;
            this.qrb = this.context2D.createLinearGradient(this.x + this.width / 2, 0, this.x + this.width / 2, this.height);
            this.qrb.addColorStop(0, b.xvx);
            this.qrb.addColorStop(1, b.wkx);
            this.nxj = this.context2D.createLinearGradient(this.nlu.x, 0, this.nlu.x + this.nlu.width, 0);
            this.ghk = this.context2D.createLinearGradient(this.width, this.height / 2, 0, this.height / 2);
            if (this.cep === this.nmb) {
                this.nxj.addColorStop(0, b.agm);
                this.nxj.addColorStop(1, b.joz);
                this.ghk.addColorStop(0, b.gmk);
                this.ghk.addColorStop(1, b.taj)
            } else {
                if (this.cep === this.mmk) {
                    this.nxj.addColorStop(0, b.joz);
                    this.nxj.addColorStop(1, b.agm);
                    this.ghk.addColorStop(0, b.taj);
                    this.ghk.addColorStop(1, b.gmk)
                }
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.qmq = function(b, f, c) {
        if (this.fkj || !this.ybj || this.nyy) {
            return true
        }
        if ((b < this.x || b > this.x + this.width || f < this.y || f > this.y + this.height)) {
            return false
        } else {
            var e = b - this.x,
                d = f - this.y;
            if (this.isp.lmf(e, d)) {
                this.fin(-1);
                this.vsj();
                this.sgw(true, true)
            } else {
                if (this.mxc.lmf(e, d)) {
                    this.fin(1);
                    this.vsj();
                    this.sgw(true, true)
                } else {
                    if (this.nlu.lmf(e, d)) {
                        this.rlf = true;
                        this.rge(f);
                        this.sgw(true, true)
                    }
                }
            }
            this.ktx(this.uhv);
            return true
        }
    };
    this.vlq = function() {
        if (this.rlf) {
            this.rlf = false;
            this.vsj();
            return true
        }
        return false
    };
    this.chp = function(b) {
        if (this.fkj || !this.ybj || this.nyy) {
            return true
        }
        if (b == this.qib) {
            this.fin(-1);
            this.vsj();
            this.sgw(true, true);
            this.ktx(this.uhv);
            return true
        } else {
            if (b == this.lsy) {
                this.fin(1);
                this.vsj();
                this.sgw(true, true);
                this.ktx(this.uhv);
                return true
            }
        }
        return false
    };
    this.cyi = function() {};
    this.ejf = function(b, d, c) {
        if (!this.rlf) {
            return false
        }
        if (b >= this.x + this.nlu.x && b <= this.x + this.nlu.x + this.nlu.width && d >= this.y + this.nlu.y && d <= this.y + this.nlu.y + this.nlu.height) {
            this.rge(d);
            this.ktx(this.uhv);
            return true
        }
        return false
    };
    this.sgw = function(b, c) {
        this.nyy = b;
        c = (c === false) ? false : true;
        clearTimeout(this.vht);
        if (this.nyy === true && c === true) {
            this.vht = setTimeout(this.nbf, a)
        }
    };
    this.nbf = function() {};
    this.ktx = function(b) {};
    this.vsj = function() {};
    this.okb = function(b, c) {
        this.idr = (b < 0) ? 0 : b;
        this.cgu = (c < 0) ? 0 : c;
        if (this.ilh) {
            this.cgu = (this.cgu > this.ilh.length - 1) ? this.ilh.length - 1 : this.cgu
        }
    };
    this.vmo = function() {
        this.cbi(true, true)
    };
    this.slm = function() {
        this.cbi(false, true)
    };
    this.eyu = function(b) {
        this.ybj = b
    };
    this.qvq = function() {
        return this.ybj
    };
    this.mfu = function(b, c) {
        this.uhv = b;
        if (this.uhv < this.idr) {
            this.uhv = this.idr
        }
        if (this.uhv >= this.cgu) {
            this.uhv = this.cgu
        }
        this.aad = this.uhv + 1;
        if (c && c === true) {
            this.parent.ksl()
        }
    };
    this.lgz = function(d, e) {
        this.uhv = 0;
        for (var c = 0, b = this.ilh.length; c < b; c++) {
            if (this.ilh[c] == d) {
                this.uhv = c;
                break
            }
        }
        this.uhv = (this.uhv >= this.idr) ? this.uhv : this.idr;
        this.uhv = (this.uhv < this.cgu) ? this.uhv : this.cgu;
        this.aad = this.uhv + 1;
        if (e) {
            this.parent.ksl()
        }
    };
    this.rge = function(b) {
        this.uhv = Math.ceil(((this.nlu.height) - (b - this.nlu.y - this.y)) / this.nop) - 1;
        this.uhv = (this.uhv >= this.idr) ? this.uhv : this.idr;
        this.uhv = (this.uhv < this.cgu) ? this.uhv : this.cgu;
        this.aad = this.uhv + 1;
        this.parent.ksl()
    };
    this.fin = function(b) {
        this.uhv += b;
        this.uhv = (this.uhv >= this.idr) ? this.uhv : this.idr;
        this.uhv = (this.uhv < this.cgu) ? this.uhv : this.cgu;
        this.aad = this.uhv + 1;
        this.parent.ksl()
    };
    this.ksl = function() {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        this.kim();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.ido, this.x, this.y)
        }
    };
    this.kim = function() {
        var b = this.context2D;
        b.save();
        b.clearRect(0, 0, this.width, this.height);
        this.phu(b);
        this.sxe(b);
        this.lku(b);
        this.sam(b);
        this.gve(b);
        b.restore()
    };
    this.phu = function(b) {
        if (this.cep === this.mmk) {
            cun.hfb.cdv(b, 0, 0, this.width, this.height, this.fhc, 0, 0, this.fhc, this.akn, 0.4, this.ghk, this.dgy, 1)
        } else {
            if (this.cep === this.nmb) {
                cun.hfb.cdv(b, 0, 0, this.width, this.height, 0, this.fhc, this.fhc, 0, this.akn, 0.4, this.ghk, this.dgy, 1)
            }
        }
    };
    this.sxe = function(b) {
        cun.hfb.roz(b, this.nlu.x, this.nlu.y, this.nlu.width, this.nlu.height, this.isd, 1)
    };
    this.lku = function(b) {
        cun.hfb.roz(b, this.nlu.x, this.nlu.y + this.nlu.height - Math.round(this.aad * this.nop), this.nlu.width, Math.round(this.aad * this.nop), this.qrb, 1)
    };
    this.sam = function(b) {
        cun.hfb.roz(b, this.nlu.x - this.sre, this.nlu.y - this.sre, this.nlu.width + 2 * this.sre, this.nlu.height + 2 * this.sre, null, 0, this.nxj, this.sre, 1);
        if (this.cep === this.mmk) {
            cun.hfb.cdv(b, this.nlu.x - this.sre, this.mxc.y, this.nlu.width + 2 * this.sre, this.mxc.height, this.npj, 0, 0, 0, this.nxj, 1);
            cun.hfb.cdv(b, this.nlu.x - this.sre, this.isp.y, this.nlu.width + 2 * this.sre, this.isp.height, 0, 0, 0, this.npj, this.nxj, 1)
        } else {
            if (this.cep === this.nmb) {
                cun.hfb.cdv(b, this.nlu.x - this.sre, this.mxc.y, this.nlu.width + 2 * this.sre, this.mxc.height, 0, this.npj, 0, 0, this.nxj, 1);
                cun.hfb.cdv(b, this.nlu.x - this.sre, this.isp.y, this.nlu.width + 2 * this.sre, this.isp.height, 0, 0, this.npj, 0, this.nxj, 1)
            }
        }
        b.strokeStyle = this.nxj;
        b.lineWidth = Math.round(this.sre / 4);
        b.beginPath();
        for (var c = 1; c < this.boo; c++) {
            b.moveTo(this.nlu.x, this.nlu.y + this.nlu.height - Math.round(c * this.nop));
            b.lineTo(this.nlu.x + this.nlu.width, this.nlu.y + this.nlu.height - Math.round(c * this.nop))
        }
        b.closePath();
        b.stroke();
        if (this.usb) {
            if (this.cep === this.mmk) {
                b.drawImage(this.usb, 0, 0, this.usb.width / 2, this.usb.height, this.nlu.x, this.nlu.y, this.nlu.width, this.nlu.height)
            } else {
                if (this.cep === this.nmb) {
                    b.drawImage(this.usb, this.usb.width / 2, 0, this.usb.width / 2, this.usb.height, this.nlu.x, this.nlu.y, this.nlu.width, this.nlu.height)
                }
            }
        }
    };
    this.gve = function(c) {
        var f = this.fhx,
            e = this.fhx,
            b = 0,
            d = 0;
        if (this.cep === this.mmk) {
            b = this.lzx;
            d = this.nlu.x - 2 * this.lzx
        } else {
            if (this.cep === this.nmb) {
                b = this.nlu.x + this.nlu.width + this.lzx;
                d = this.width - this.lzx - (this.nlu.x + this.nlu.width + this.lzx)
            }
        }
        if (this.uhv > 0 && this.uhv < this.ilh.length - 1) {
            cun.hfb.roz(c, b, this.nlu.y + ((this.boo - this.aad) * this.nop), d, this.nop, this.oya, this.ymn);
            cun.hfb.dsg(c, this.ilh[this.uhv], this.qrb, b, this.nlu.y + ((this.boo - this.aad) * this.nop) + (this.nop - this.ctl) / 2, d, this.ctl, this.ics, this.ctl, this.lkl, this.lzx)
        } else {
            if (this.uhv == 0) {
                f = this.qrb
            } else {
                if (this.uhv == this.ilh.length - 1) {
                    e = this.qrb
                }
            }
        }
        cun.hfb.roz(c, b, this.nlu.y + (this.nop * (this.boo - 1)), d, this.nop, this.oya, this.ymn);
        cun.hfb.dsg(c, this.ilh[0], f, b, this.nlu.y + (this.nop * (this.boo - 1)) + (this.nop - this.ctl) / 2, d, this.ctl, this.ics, this.ctl, this.lkl, this.lzx);
        cun.hfb.roz(c, b, this.nlu.y, d, this.nop, this.oya, this.ymn);
        cun.hfb.dsg(c, this.ilh[this.ilh.length - 1], e, b, this.nlu.y + (this.nop - this.ctl) / 2, d, this.ctl, this.ics, this.ctl, this.lkl, this.lzx);
        cun.hfb.abt(c, "+", this.fhx, this.mxc.x, this.mxc.y, this.mxc.width, this.mxc.height, this.ics, this.ctl, this.lkl);
        cun.hfb.abt(c, "", this.fhx, this.isp.x, this.isp.y, this.isp.width, this.isp.height, this.ics, this.ctl, this.lkl);
        if (this.dzy) {
            cun.hfb.abt(c, this.dzy, this.fhx, this.yiz.x, this.yiz.y, this.yiz.width, this.yiz.height, this.ics, this.ctl, this.lkl)
        }
    }
}
vdz.prototype = new bom;

function ibx() {
    var a = this;
    this.mib = null;
    this.bfm = false;
    this.dws = "";
    this.etf = "";
    this.qvg = "";
    this.evd = "";
    this.mwq = "";
    this.kof = "";
    this.oxm = "";
    this.ics = "arial";
    this.lkl = "bold";
    this.fhx = "white";
    this.akn = "black";
    this.hhs = null;
    this.kzv = "white";
    this.ekw = "rgb(150,150,150)";
    this.dgy = 3;
    this.fhc = 4;
    this.rje = 24;
    this.fqp = 24;
    this.zsr = 24;
    this.xta = new icy();
    this.dky = new icy();
    this.wxj = new icy();
    this.bto = new icy();
    this.nyt = new icy();
    this.jip = new icy();
    this.ggx = new icy();
    this.qcv = [];
    this.tpz = 0;
    this.mzy = 0;
    this.cns = 0;
    this.ayz = 0;
    this.xcf = 0;
    this.zhx = 0;
    this.wiz = 0;
    this.xnk = 0;
    this.ybt = false;
    this.uyv = false;
    this.uhv = 0;
    this.nbg = true;
    this.ebv = true;
    this.zvt = null;
    this.ida = 0;
    this.hrp = 0;
    this.iug = 1;
    this.eaj = 250;
    this.llb = function(b, d, c) {
        ibx.prototype.llb.call(this, b, d, c);
        this.mib = new bmn();
        this.mib.llb();
        this.mib.etj("buttons");
        this.mib.etj("displays");
        this.mib.etj("checkboxes");
        this.mib.etj("lbuttons");
        this.mib.etj("mbuttons");
        this.mib.etj("tbuttons");
        this.mib.etj("bbuttons");
        this.mib.etj("bdisplays");
        this.mib.etj("abuttons");
        this.mib.etj("adisplays");
        this.mib.etj("acheckboxes");
        this.mib.etj("sbuttons");
        this.mib.etj("hbuttons")
    };
    this.ajo = function(b) {
        try {
            this.hoe(b);
            this.tzy(b);
            this.qsx(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(b) {
        try {
            var c = this.mib.tcj("lbuttons"),
                n = this.mib.tcj("mbuttons"),
                k = this.mib.tcj("tbuttons"),
                m = this.mib.tcj("sbuttons"),
                l = this.mib.tcj("hbuttons"),
                f = this.mib.tcj("displays");
            this.ics = b.font;
            this.lkl = b.scm;
            this.fhx = b.ujm;
            this.akn = b.backgroundColor;
            this.hhs = b.wsn;
            this.kzv = b.borderColor;
            this.ekw = b.ofm;
            for (var d = 0, g = c.length; d < g; d++) {
                c[d].dku(b.iss)
            }
            for (var d = 0, g = n.length; d < g; d++) {
                n[d].dku(b.huw)
            }
            for (var d = 0, g = k.length; d < g; d++) {
                k[d].dku(b.htq)
            }
            for (var d = 0, g = f.length; d < g; d++) {
                f[d].dku(b.display)
            }
            for (var d = 0, g = m.length; d < g; d++) {
                m[d].dku(b.ekg)
            }
            for (var d = 0, g = l.length; d < g; d++) {
                l[d].dku(b.ekg)
            }
            this.mib.amg("checkboxes", "#dku", [b.bnl])
        } catch (j) {
            console.error(j)
        }
    };
    this.vpj = function(g) {
        try {
            var b = this.mib.tcj("lbuttons"),
                o = this.mib.tcj("mbuttons"),
                l = this.mib.tcj("tbuttons"),
                n = this.mib.tcj("sbuttons"),
                m = this.mib.tcj("hbuttons"),
                c = this.mib.tcj("bdisplays"),
                f = this.mib.tcj("adisplays");
            tke = this.mib.tcj("checkboxes"), vyn = n.length, ozm = (vyn <= 2) ? g.jtt : (vyn <= 3) ? g.byu : (vyn <= 4) ? g.hme : g.ybi, vyn = m.length, qoc = (vyn <= 2) ? g.jtt : (vyn <= 3) ? g.byu : (vyn <= 4) ? g.hme : g.ybi, ipl = (this.parent.wqz() != null) ? g.tin : g.nqe;
            this.dgy = g.bao;
            this.fhc = g.iey;
            this.rje = g.ikw;
            this.fqp = g.aas;
            this.zsr = g.ldl;
            this.xta = g.ico;
            this.dky = g.njx;
            this.wxj = g.ave;
            this.bto = g.vin;
            this.nyt = g.naq;
            this.jip = g.qnx;
            this.ggx = g.hvn;
            this.mib.bnh("bett", "#eda", [ipl.gqm]);
            this.mib.bnh("autot", "#eda", [ipl.cga]);
            this.mib.bnh("helpt", "#eda", [ipl.kog]);
            this.mib.bnh("settingt", "#eda", [ipl.aqo]);
            this.mib.bnh("returnt", "#eda", [ipl.phs]);
            this.mib.bnh("lbet", "#eda", [g.mrp]);
            this.mib.bnh("mbet", "#eda", [g.dwc]);
            this.mib.bnh("llines", "#eda", [g.yeh]);
            this.mib.bnh("mlines", "#eda", [g.off]);
            this.mib.bnh("betd", "#eda", [g.nxa]);
            this.mib.bnh("linesd", "#eda", [g.mzm]);
            this.mib.bnh("totald", "#eda", [g.hdo]);
            this.mib.bnh("lgames", "#eda", [g.jlb]);
            this.mib.bnh("mgames", "#eda", [g.lte]);
            this.mib.bnh("lmincredit", "#eda", [g.lwx]);
            this.mib.bnh("mmincredit", "#eda", [g.ugm]);
            this.mib.bnh("lmaxcredit", "#eda", [g.nkw]);
            this.mib.bnh("mmaxcredit", "#eda", [g.uzi]);
            this.mib.bnh("lmaxwin", "#eda", [g.gkk]);
            this.mib.bnh("mmaxwin", "#eda", [g.udd]);
            this.mib.bnh("gamesd", "#eda", [g.oxe]);
            this.mib.bnh("mincreditd", "#eda", [g.dva]);
            this.mib.bnh("maxcreditd", "#eda", [g.yrs]);
            this.mib.bnh("maxwind", "#eda", [g.ydq]);
            this.mib.bnh("cmincredit", "#eda", [g.tqi]);
            this.mib.bnh("cmaxcredit", "#eda", [g.mva]);
            this.mib.bnh("cmaxwin", "#eda", [g.lqp]);
            for (var d = 0, j = b.length; d < j; d++) {
                b[d].vpj(g.iss)
            }
            for (var d = 0, j = o.length; d < j; d++) {
                o[d].vpj(g.huw)
            }
            for (var d = 0, j = l.length; d < j; d++) {
                l[d].vpj(g.htq)
            }
            for (var d = 0, j = c.length; d < j; d++) {
                c[d].vpj(g.vmd)
            }
            for (var d = 0, j = f.length; d < j; d++) {
                f[d].vpj(g.hmd)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].vpj(g.ekg)
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].vpj(g.ekg)
            }
            for (var d = 0, j = tke.length; d < j; d++) {
                tke[d].vpj(g.bnl)
            }
            for (var d = 0, j = n.length; d < j; d++) {
                n[d].eda(ozm[d])
            }
            for (var d = 0, j = m.length; d < j; d++) {
                m[d].eda(qoc[d])
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.hoe = function(c) {
        var b = (this.parent.wqz() != null) ? c.tin : c.nqe;
        this.mib.byd("bett", this.why(b.gqm, null, this.parent.gai.wxh("btn_b"), this.lwk, null), ["buttons", "tbuttons"]);
        if (this.parent.wqz() != null) {
            this.mib.byd("autot", this.why(b.cga, null, this.parent.gai.wxh("btn_as"), this.vwt, null), ["buttons", "tbuttons"])
        }
        this.mib.byd("helpt", this.why(b.kog, null, this.parent.gai.wxh("btn_i"), this.hsg, null), ["buttons", "tbuttons"]);
        this.mib.byd("settingt", this.why(b.aqo, null, this.parent.gai.wxh("btn_se"), this.kwp, null), ["buttons", "tbuttons"]);
        this.mib.byd("returnt", this.why(b.phs, null, this.parent.gai.wxh("btn_c"), this.tjn, null), ["buttons", "tbuttons"])
    };
    this.tzy = function(b) {
        this.mib.byd("betd", this.rfp(b.nxa, null, this.parent.xqk), ["displays", "bdisplays"]);
        this.mib.byd("lbet", this.sdx(b.mrp, "", this.parent.mzd), ["buttons", "lbuttons", "bbuttons"]);
        this.mib.byd("mbet", this.sdx(b.dwc, "+", this.parent.wik), ["buttons", "mbuttons", "bbuttons"]);
        this.mib.byd("linesd", this.rfp(b.mzm, null, this.parent.agc), ["displays", "bdisplays"]);
        if (this.bfm) {
            this.mib.byd("llines", this.sdx(b.yeh, "", this.parent.xjn), ["buttons", "lbuttons", "bbuttons"]);
            this.mib.byd("mlines", this.sdx(b.off, "+", this.parent.nqs), ["buttons", "mbuttons", "bbuttons"])
        }
        this.mib.byd("totald", this.rfp(b.hdo, null, this.parent.nlf()), ["displays", "bdisplays"])
    };
    this.qsx = function(b) {
        this.mib.byd("gamesd", this.rfp(b.oxe, null, this.qcv[this.tpz]), ["displays", "adisplays"]);
        this.mib.byd("lgames", this.sdx(b.jlb, "", this.pgc), ["buttons", "lbuttons", "abuttons"]);
        this.mib.byd("mgames", this.sdx(b.lte, "+", this.yns), ["buttons", "mbuttons", "abuttons"]);
        this.mib.byd("mincreditd", this.rfp(b.dva, null, "---"), ["displays", "adisplays"]);
        this.mib.byd("lmincredit", this.sdx(b.lwx, "", this.qjr), ["buttons", "lbuttons", "abuttons"]);
        this.mib.byd("mmincredit", this.sdx(b.ugm, "+", this.hxe), ["buttons", "mbuttons", "abuttons"]);
        this.mib.byd("maxcreditd", this.rfp(b.yrs, null, "---"), ["displays", "adisplays"]);
        this.mib.byd("lmaxcredit", this.sdx(b.nkw, "", this.nra), ["buttons", "lbuttons", "abuttons"]);
        this.mib.byd("mmaxcredit", this.sdx(b.uzi, "+", this.bgy), ["buttons", "mbuttons", "abuttons"]);
        this.mib.byd("maxwind", this.rfp(b.ydq, null, "---"), ["displays", "adisplays"]);
        this.mib.byd("lmaxwin", this.sdx(b.gkk, "", this.ker), ["buttons", "lbuttons", "abuttons"]);
        this.mib.byd("mmaxwin", this.sdx(b.udd, "+", this.nyg), ["buttons", "mbuttons", "abuttons"]);
        this.mib.byd("cmincredit", this.lbh(b.tqi, "", this.uai), ["checkboxes", "acheckboxes"]);
        this.mib.byd("cmaxcredit", this.lbh(b.mva, "", this.zlq), ["checkboxes", "acheckboxes"]);
        this.mib.byd("cmaxwin", this.lbh(b.lqp, "", this.nqu), ["checkboxes", "acheckboxes"])
    };
    this.gqn = function(i, g, f, e, d, b) {
        var c = new vne();
        c.llb(new icy(0, 0, 1, 1), this.context2D);
        c.parent = this;
        c.ktx = e;
        c.stj = g;
        c.pnt(d, b);
        c.vpj(this.parent.fbj.csu.ekg);
        c.dku(this.parent.style.csu.ekg);
        c.wlp(f);
        this.mib.byd(i, c, ["buttons", "sbuttons"])
    };
    this.bte = function(f, e, d, c) {
        var b = new vne();
        b.llb(new icy(0, 0, 1, 1), this.context2D);
        b.parent = this;
        b.ktx = c;
        b.stj = e;
        b.vpj(this.parent.fbj.csu.ekg);
        b.dku(this.parent.style.csu.ekg);
        b.wlp(d);
        this.mib.byd(f, b, ["buttons", "hbuttons"])
    };
    this.rfp = function(b, e, d) {
        var c = new rpy();
        c.llb(b, this.context2D, null, e, d);
        c.parent = this;
        return c
    };
    this.sdx = function(c, e, d) {
        var b = new nsd();
        b.llb(c, this.context2D, null, null, e);
        b.parent = this;
        b.ktx = d;
        return b
    };
    this.why = function(d, g, f, e, c) {
        var b = new nsd();
        b.llb(d, this.context2D, null, f, g);
        b.parent = this;
        b.ktx = e;
        if (c != null) {
            b.vhe = c
        }
        return b
    };
    this.lbh = function(c, e, d) {
        var b = new exi();
        b.llb(c, this.context2D, null, e);
        b.parent = this;
        b.ktx = d;
        return b
    };
    this.qmq = function(o, n) {
        var m = this.mib.tcj("buttons"),
            g = this.mib.tcj("checkboxes"),
            f = o - this.x,
            d = n - this.y;
        for (var e = 0, l = m.length; e < l; e++) {
            var b = m[e];
            if (f >= b.x && f <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.bsl() === true) {
                if (b.qvq() === true && b.aqh() === false) {
                    if (b instanceof vne) {
                        this.parent.gai.ykp("btn");
                        this.parent.gai.vsj("btn");
                        b.otk(true, true, true);
                        b.ktx()
                    } else {
                        if (b instanceof nsd) {
                            if (b.dtk() === "rect") {
                                this.parent.gai.ykp("btn");
                                this.parent.gai.vsj("btn");
                                b.otk(true, true, false);
                                b.ktx()
                            } else {
                                b.otk(true, false, false);
                                this.hrp = 0;
                                this.iug = 1;
                                if (b.ktx() === false) {
                                    this.zvt = function() {
                                        if (b.ktx() === true) {
                                            clearInterval(a.ida);
                                            b.otk(false, true);
                                            for (var i = 0; i < l; i++) {
                                                m[i].sgw(false)
                                            }
                                        }
                                    };
                                    this.ida = setInterval(this.zvt, this.eaj)
                                }
                            }
                        }
                    }
                    for (var c = 0; c < l; c++) {
                        m[c].sgw(true)
                    }
                    return true
                }
            }
        }
        for (var e = 0, l = g.length; e < l; e++) {
            var k = g[e];
            if (f >= k.x && f <= k.x + k.width && d >= k.y && d <= k.y + k.height) {
                if (k.bsl() === true && k.qvq() === true) {
                    k.fwm(!k.nsu(), true);
                    k.ktx();
                    for (var c = 0; c < l; c++) {
                        g[c].sgw(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.vlq = function() {
        var e = this.mib.tcj("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ozv() == true && !(c instanceof nsd && c.dtk() === "rect")) {
                clearInterval(this.ida);
                c.otk(false, true);
                return true
            }
        }
        return false
    };
    this.chp = function(b) {};
    this.cyi = function(b) {};
    this.sgs = function(c, b, d) {
        this.mib.bnh("betd", "#bzf", [c]);
        this.mib.bnh("linesd", "#bzf", [b]);
        this.mib.bnh("totald", "#bzf", [d]);
        this.parent.ksl()
    };
    this.yzy = function(b) {
        this.qcv = b.g;
        this.mzy = b.v;
        this.cns = b.v;
        this.ybt = b.r;
        this.uyv = b.l;
        if (typeof b.m != "undefined" && b.m != null && b.m > 0) {
            this.ayz = b.m;
            this.xcf = b.m
        }
    };
    this.uwp = function() {
        if (this.ybt === true) {
            this.zhx = this.parent.qjh;
            this.wiz = this.parent.qjh;
            this.tpz = 0;
            this.xnk = 0
        }
    };
    this.nnx = function() {
        if (this.qcv.length > 0 && this.tpz >= 0) {
            return this.qcv[this.tpz]
        }
        return 0
    };
    this.wvk = function() {
        var b = this.mib.owa("cmincredit") == null || this.mib.bnh("cmincredit", "#nsu");
        if (this.zhx > 0 && b === true) {
            return this.zhx
        }
        return 0
    };
    this.jjl = function() {
        var b = this.mib.owa("cmaxcredit") == null || this.mib.bnh("cmaxcredit", "#nsu");
        if (this.wiz > 0 && b === true) {
            return this.wiz
        }
        return 0
    };
    this.evt = function() {
        var b = this.mib.owa("cmaxwin") == null || this.mib.bnh("cmaxwin", "#nsu");
        if (this.xnk > 0 && b === true) {
            return this.xnk
        }
        return 0
    };
    this.vmo = function(c, f, d) {
        if (this.qcv && this.qcv.length > 0) {
            var g = this.mib.owa("cmincredit") == null || this.mib.bnh("cmincredit", "#nsu"),
                e = this.mib.owa("cmaxcredit") == null || this.mib.bnh("cmaxcredit", "#nsu"),
                b = this.mib.owa("cmaxwin") == null || this.mib.bnh("cmaxwin", "#nsu");
            if (this.ybt === true) {
                g = this.uyv;
                e = false;
                b = false;
                this.uwp()
            } else {
                if (this.uyv === true) {
                    g = true;
                    this.zhx = (this.zhx < this.parent.qjh) ? this.zhx : this.parent.qjh;
                    this.zhx = (this.zhx > 0) ? this.zhx : this.parent.qjh
                } else {
                    g = (this.zhx < this.parent.qjh) ? g : false;
                    this.zhx = (this.zhx < this.parent.qjh) ? this.zhx : this.parent.qjh
                }
                e = (this.wiz > this.parent.qjh) ? e : false;
                this.wiz = (this.wiz > this.parent.qjh) ? this.wiz : this.parent.qjh
            }
            this.mib.bnh("cmincredit", "#fwm", [g]);
            this.mib.bnh("cmaxcredit", "#fwm", [e]);
            this.mib.bnh("cmaxwin", "#fwm", [b]);
            this.mib.bnh("gamesd", "#bzf", [(this.qcv[this.tpz] > 0) ? this.qcv[this.tpz] : "---"]);
            this.mib.bnh("mincreditd", "#bzf", [(g === true && this.zhx > 0) ? this.parent.oht(this.zhx) : "---"]);
            this.mib.bnh("maxcreditd", "#bzf", [(e === true && this.wiz > 0) ? this.parent.oht(this.wiz) : "---"]);
            this.mib.bnh("maxwind", "#bzf", [(b === true && this.xnk > 0) ? this.parent.oht(this.xnk) : "---"]);
            this.mib.bnh("lmincredit", "#cbi", [g]);
            this.mib.bnh("mmincredit", "#cbi", [g]);
            this.mib.bnh("lmaxcredit", "#cbi", [e]);
            this.mib.bnh("mmaxcredit", "#cbi", [e]);
            this.mib.bnh("lmaxwin", "#cbi", [b]);
            this.mib.bnh("mmaxwin", "#cbi", [b])
        }
        this.nbg = c;
        this.ebv = f;
        if (typeof d == "number") {
            if (d === 0) {
                this.lwk()
            } else {
                if (d === 1) {
                    if (this.parent.wqz() != null) {
                        this.vwt()
                    } else {
                        this.hsg()
                    }
                } else {
                    if (d === 2) {
                        if (this.parent.wqz() != null) {
                            this.hsg()
                        } else {
                            this.kwp()
                        }
                    } else {
                        if (d === 3 && this.parent.wqz() != null) {
                            this.kwp()
                        }
                    }
                }
            }
        } else {
            this.lwk()
        }
        this.mib.amg("tbuttons", "#eyu", [true]);
        this.cbi(true);
        this.parent.ksl()
    };
    this.slm = function() {
        this.mib.amg("tbuttons", "#eyu", [false]);
        this.mib.amg("bbuttons", "#eyu", [false]);
        this.mib.amg("sbuttons", "#eyu", [false]);
        this.mib.amg("abuttons", "#eyu", [false]);
        this.mib.amg("acheckboxes", "#eyu", [false]);
        this.cbi(false);
        this.parent.ksl()
    };
    this.stop = function() {
        clearInterval(this.ida)
    };
    this.nhz = function(d, b) {
        var c = "";
        this.mib.bnh("language", "#bzf", [cun.qrf.bgr(d.language)]);
        this.mib.bnh("audio", "#bzf", [cun.qrf.bgr(d.audio)]);
        this.mib.bnh("melody", "#bzf", [cun.qrf.bgr(d.zyo)]);
        this.mib.bnh("fullscreen", "#bzf", [cun.qrf.bgr(d.qel)]);
        this.mib.bnh("turbo", "#bzf", [cun.qrf.bgr(d.gdt)]);
        this.mib.bnh("help", "#bzf", [cun.qrf.bgr(d.khd)]);
        this.mib.bnh("history", "#bzf", [cun.qrf.bgr(d.iax)]);
        this.mib.bnh("statistic", "#bzf", [cun.qrf.bgr(d.baa)]);
        this.mib.bnh("rules", "#bzf", [cun.qrf.bgr(d.hvf)]);
        this.mib.bnh("gamble", "#bzf", [cun.qrf.bgr(d.ont)]);
        if (cun.qrf.jzx[cun.qrf.vsp] === cun.gro.mmk) {
            c = cun.qrf.bgr(d.left)
        } else {
            if (cun.qrf.jzx[cun.qrf.vsp] === cun.gro.nmb) {
                c = cun.qrf.bgr(d.mtg)
            } else {
                if (cun.qrf.jzx[cun.qrf.vsp] === cun.gro.ouo) {
                    c = cun.qrf.bgr(d.koi)
                }
            }
        }
        this.mib.bnh("adjustment", "#bzf", [c]);
        if (b && b === true) {
            this.dws = cun.qrf.bgr(d.rxh) + "/" + cun.qrf.bgr(d.ozl) + ":";
            this.etf = cun.qrf.bgr(d.agc) + ":"
        } else {
            this.dws = cun.qrf.bgr(d.rxh) + ":"
        }
        this.qvg = cun.qrf.bgr(d.nmv) + ":";
        this.kof = cun.qrf.bgr(d.osj);
        this.oxm = cun.qrf.bgr(d.sna);
        if (this.parent.jmw === true && cun.emv.value44.d === true) {
            this.mwq = cun.qrf.bgr(d.sep)
        }
        this.mib.bnh("cmincredit", "#bzf", [cun.qrf.bgr(d.efi)]);
        this.mib.bnh("cmaxcredit", "#bzf", [cun.qrf.bgr(d.qjz)]);
        this.mib.bnh("cmaxwin", "#bzf", [cun.qrf.bgr(d.qyp)])
    };
    this.ksl = function(l, j, m, e) {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var c = (l != null && j != null && m != null && e != null),
            n = this.context2D,
            k = this.mib.tcj("tbuttons"),
            b = this.akn,
            g = this.kzv;
        if (this.hhs) {
            b = n.createRadialGradient(this.x + this.width / 2, this.y + this.height / 2, this.height / 6, this.x + this.width / 2, this.y + this.height / 2, this.height);
            b.addColorStop(0, this.akn);
            b.addColorStop(1, this.hhs)
        }
        if (this.ekw) {
            g = n.createLinearGradient(this.x + this.width / 2, this.y, this.x + this.width / 2, this.y + this.height);
            g.addColorStop(0, this.kzv);
            g.addColorStop(1, this.ekw)
        }
        n.save();
        n.clearRect(0, 0, this.width, this.height);
        if (c) {
            n.beginPath();
            n.rect(l, j, m, e);
            n.closePath();
            n.clip()
        }
        cun.hfb.psa(n, 0, 0, this.width, this.height, this.fhc, b, g, this.dgy);
        for (var d = 0, f = k.length; d < f; d++) {
            k[d].ksl()
        }
        if (this.uhv === 0) {
            this.yyu(n)
        } else {
            if (this.uhv === 1) {
                this.ydk(n)
            } else {
                if (this.uhv === 2) {
                    this.raf(n)
                } else {
                    if (this.uhv === 3) {
                        this.khy(n)
                    }
                }
            }
        }
        n.restore();
        if (this.ucm && this.qce) {
            if (c) {
                this.ucm.drawImage(this.qce, l, j, m, e, this.x + l, this.y + j, m, e)
            } else {
                this.ucm.drawImage(this.qce, this.x, this.y)
            }
        }
    };
    this.yyu = function(c) {
        var f = this.mib.tcj("bbuttons"),
            d = this.mib.tcj("bdisplays");
        if (this.xta.width > 0 && this.xta.height > 0) {
            cun.hfb.cwu(c, this.dws, this.fhx, this.xta.x, this.xta.y, this.xta.width, this.xta.height, this.ics, this.rje, this.lkl, 0)
        }
        if (this.dky.width > 0 && this.dky.height > 0) {
            cun.hfb.cwu(c, this.etf, this.fhx, this.dky.x, this.dky.y, this.dky.width, this.dky.height, this.ics, this.rje, this.lkl, 0)
        }
        if (this.wxj.width > 0 && this.wxj.height > 0) {
            cun.hfb.cwu(c, this.qvg, this.fhx, this.wxj.x, this.wxj.y, this.wxj.width, this.wxj.height, this.ics, this.rje, this.lkl, 0)
        }
        cun.hfb.qhp(c, this.evd, this.fhx, this.bto.x, this.bto.y, this.bto.width, this.bto.height, this.ics, this.zsr, this.lkl, "center", true);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].ksl()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].ksl()
        }
    };
    this.ydk = function(c) {
        var f = this.mib.tcj("abuttons"),
            d = this.mib.tcj("adisplays"),
            g = this.mib.tcj("acheckboxes");
        cun.hfb.qhp(c, this.mwq, this.fhx, this.nyt.x, this.nyt.y, this.nyt.width, this.nyt.height, this.ics, this.zsr, this.lkl, "center", true);
        cun.hfb.cwu(c, this.kof, this.fhx, this.jip.x, this.jip.y, this.jip.width, this.jip.height, this.ics, this.fqp, this.lkl, 0);
        cun.hfb.abt(c, this.oxm, this.fhx, this.ggx.x, this.ggx.y, this.ggx.width, this.ggx.height, this.ics, this.fqp, this.lkl);
        for (var e = 0, b = f.length; e < b; e++) {
            f[e].ksl()
        }
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].ksl()
        }
        for (var e = 0, b = g.length; e < b; e++) {
            g[e].ksl()
        }
    };
    this.raf = function(c) {
        var d = this.mib.tcj("hbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].ksl()
        }
    };
    this.khy = function(c) {
        var d = this.mib.tcj("sbuttons");
        for (var e = 0, b = d.length; e < b; e++) {
            d[e].ksl()
        }
    };
    this.yns = function() {
        a.tpz = (a.tpz < a.qcv.length - 1) ? a.tpz + 1 : 0;
        a.parent.gai.vsj("btn");
        a.mib.bnh("gamesd", "#bzf", [(a.qcv[a.tpz] > 0) ? a.qcv[a.tpz] : "---"]);
        a.ksl();
        return (a.tpz >= a.qcv.length - 1)
    };
    this.pgc = function() {
        a.tpz = (a.tpz > 0) ? a.tpz - 1 : a.qcv.length - 1;
        a.parent.gai.vsj("btn");
        a.mib.bnh("gamesd", "#bzf", [(a.qcv[a.tpz] > 0) ? a.qcv[a.tpz] : "---"]);
        a.ksl();
        return (a.tpz <= 0)
    };
    this.hxe = function() {
        var b = a.mib.owa("cmincredit") == null || a.mib.bnh("cmincredit", "#nsu");
        if (b === true) {
            if (++a.hrp > 10) {
                a.iug = 10
            }
            a.zhx = (a.zhx + (a.mzy * a.iug) <= a.parent.qjh) ? a.zhx + (a.mzy * a.iug) : a.parent.qjh;
            a.parent.gai.vsj("btn");
            a.mib.bnh("mincreditd", "#bzf", [(a.zhx > 0) ? a.parent.oht(a.zhx) : "---"]);
            a.mib.bnh("mmincredit", "#cbi", [b && a.zhx < a.parent.qjh]);
            a.mib.bnh("lmincredit", "#cbi", [b && a.zhx > 0]);
            a.ksl();
            return (a.zhx >= a.parent.qjh)
        }
        return true
    };
    this.qjr = function() {
        var b = a.mib.owa("cmincredit") == null || a.mib.bnh("cmincredit", "#nsu");
        if (b === true) {
            if (++a.hrp > 10) {
                a.iug = 10
            }
            a.zhx = (a.zhx - (a.mzy * a.iug) > 0) ? a.zhx - (a.mzy * a.iug) : 0;
            a.parent.gai.vsj("btn");
            a.mib.bnh("mincreditd", "#bzf", [(a.zhx > 0) ? a.parent.oht(a.zhx) : "---"]);
            a.mib.bnh("mmincredit", "#cbi", [b && a.zhx < a.parent.qjh]);
            a.mib.bnh("lmincredit", "#cbi", [b && a.zhx > 0]);
            a.ksl();
            return (a.zhx >= a.parent.qjh || a.zhx <= 0)
        }
        return true
    };
    this.bgy = function() {
        var b = a.mib.owa("cmaxcredit") == null || a.mib.bnh("cmaxcredit", "#nsu");
        if (b === true) {
            if (++a.hrp > 10) {
                a.iug = 10
            }
            a.wiz = (a.wiz + (a.cns * a.iug) > 0) ? a.wiz + (a.cns * a.iug) : 0;
            a.parent.gai.vsj("btn");
            a.mib.bnh("maxcreditd", "#bzf", [(a.wiz > 0) ? a.parent.oht(a.wiz) : "---"]);
            a.mib.bnh("lmaxcredit", "#cbi", [b && a.wiz > a.parent.qjh]);
            a.ksl();
            return (a.wiz <= a.parent.qjh)
        }
        return true
    };
    this.nra = function() {
        var b = a.mib.owa("cmaxcredit") == null || a.mib.bnh("cmaxcredit", "#nsu");
        if (b === true) {
            if (++a.hrp > 10) {
                a.iug = 10
            }
            a.wiz = (a.wiz - (a.cns * a.iug) > a.parent.qjh) ? a.wiz - (a.cns * a.iug) : a.parent.qjh;
            a.parent.gai.vsj("btn");
            a.mib.bnh("maxcreditd", "#bzf", [(a.wiz > 0) ? a.parent.oht(a.wiz) : "---"]);
            a.mib.bnh("lmaxcredit", "#cbi", [b && a.wiz > a.parent.qjh]);
            a.ksl();
            return (a.wiz <= a.parent.qjh)
        }
        return true
    };
    this.nyg = function() {
        var b = a.mib.owa("cmaxwin") == null || a.mib.bnh("cmaxwin", "#nsu");
        if (b === true) {
            if (++a.hrp > 10) {
                a.iug = 10
            }
            a.xnk = (a.xnk + (a.cns * a.iug) > 0) ? a.xnk + (a.cns * a.iug) : 0;
            a.parent.gai.vsj("btn");
            a.mib.bnh("maxwind", "#bzf", [(a.xnk > 0) ? a.parent.oht(a.xnk) : "---"]);
            a.mib.bnh("lmaxwin", "#cbi", [b && a.xnk > a.cns]);
            a.ksl();
            return (a.xnk <= a.cns)
        }
        return true
    };
    this.ker = function() {
        var b = a.mib.owa("cmaxwin") == null || a.mib.bnh("cmaxwin", "#nsu");
        if (b === true) {
            if (++a.hrp > 10) {
                a.iug = 10
            }
            a.xnk = (a.xnk - (a.cns * a.iug) > 0) ? a.xnk - (a.cns * a.iug) : a.cns;
            a.parent.gai.vsj("btn");
            a.mib.bnh("maxwind", "#bzf", [(a.xnk > 0) ? a.parent.oht(a.xnk) : "---"]);
            a.mib.bnh("lmaxwin", "#cbi", [b && a.xnk > a.cns]);
            a.ksl();
            return (a.xnk <= a.cns)
        }
        return true
    };
    this.uai = function() {
        var b = a.mib.owa("cmincredit") == null || a.mib.bnh("cmincredit", "#nsu");
        a.zhx = a.parent.qjh;
        a.mib.bnh("mincreditd", "#bzf", [(b === true && a.zhx > 0) ? a.parent.oht(a.zhx) : "---"]);
        a.mib.bnh("lmincredit", "#cbi", [b]);
        a.mib.bnh("mmincredit", "#cbi", [b && a.zhx < a.parent.qjh]);
        a.ksl()
    };
    this.zlq = function() {
        var b = a.mib.owa("cmaxcredit") == null || a.mib.bnh("cmaxcredit", "#nsu");
        a.wiz = a.parent.qjh;
        a.mib.bnh("maxcreditd", "#bzf", [(b === true && a.wiz > 0) ? a.parent.oht(a.wiz) : "---"]);
        a.mib.bnh("lmaxcredit", "#cbi", [b && a.wiz > a.parent.qjh]);
        a.mib.bnh("mmaxcredit", "#cbi", [b]);
        a.ksl()
    };
    this.nqu = function() {
        var b = a.mib.owa("cmaxwin") == null || a.mib.bnh("cmaxwin", "#nsu");
        if (a.xnk === 0) {
            a.xnk = a.cns
        }
        a.mib.bnh("maxwind", "#bzf", [(b === true && a.xnk > 0) ? a.parent.oht(a.xnk) : "---"]);
        a.mib.bnh("lmaxwin", "#cbi", [b && a.xnk > a.cns]);
        a.mib.bnh("mmaxwin", "#cbi", [b]);
        a.ksl()
    };
    this.lwk = function() {
        a.uhv = 0;
        a.mib.bnh("bett", "#otk", [true, false, false]);
        a.mib.bnh("autot", "#otk", [false, false, false]);
        a.mib.bnh("helpt", "#otk", [false, false, false]);
        a.mib.bnh("settingt", "#otk", [false, false, false]);
        a.mib.bnh("returnt", "#otk", [false, false, false]);
        a.mib.amg("bbuttons", "#eyu", [a.nbg]);
        a.mib.amg("bbuttons", "#cbi", [a.nbg]);
        a.mib.amg("abuttons", "#eyu", [false]);
        a.mib.amg("acheckboxes", "#eyu", [false]);
        a.mib.amg("hbuttons", "#eyu", [false]);
        a.mib.amg("sbuttons", "#eyu", [false]);
        a.ksl()
    };
    this.vwt = function() {
        var d = a.mib.owa("cmincredit") == null || a.mib.bnh("cmincredit", "#nsu"),
            c = a.mib.owa("cmaxcredit") == null || a.mib.bnh("cmaxcredit", "#nsu"),
            b = a.mib.owa("cmaxwin") == null || a.mib.bnh("cmaxwin", "#nsu");
        a.uhv = 1;
        a.mzy = (a.ayz > 0) ? a.parent.nlf() * a.ayz : a.mzy;
        a.cns = (a.xcf > 0) ? a.parent.nlf() * a.xcf : a.cns;
        a.mib.bnh("bett", "#otk", [false, false, false]);
        a.mib.bnh("autot", "#otk", [true, false, false]);
        a.mib.bnh("helpt", "#otk", [false, false, false]);
        a.mib.bnh("settingt", "#otk", [false, false, false]);
        a.mib.bnh("returnt", "#otk", [false, false, false]);
        a.mib.amg("bbuttons", "#eyu", [false]);
        a.mib.amg("abuttons", "#eyu", [true]);
        a.mib.bnh("mmincredit", "#cbi", [d && a.zhx < a.parent.qjh]);
        a.mib.bnh("lmaxcredit", "#cbi", [c && a.wiz > a.parent.qjh]);
        a.mib.bnh("lmaxwin", "#cbi", [b && a.xnk > a.cns]);
        a.mib.amg("acheckboxes", "#eyu", [true]);
        a.mib.amg("hbuttons", "#eyu", [false]);
        a.mib.amg("sbuttons", "#eyu", [false]);
        if (a.uyv === true) {
            a.mib.bnh("cmincredit", "#eyu", [false])
        }
        a.ksl()
    };
    this.hsg = function() {
        a.uhv = 2;
        a.mib.bnh("bett", "#otk", [false, false, false]);
        a.mib.bnh("autot", "#otk", [false, false, false]);
        a.mib.bnh("helpt", "#otk", [true, false, false]);
        a.mib.bnh("settingt", "#otk", [false, false, false]);
        a.mib.bnh("returnt", "#otk", [false, false, false]);
        a.mib.amg("bbuttons", "#eyu", [false]);
        a.mib.amg("abuttons", "#eyu", [false]);
        a.mib.amg("acheckboxes", "#eyu", [false]);
        a.mib.amg("hbuttons", "#eyu", [true]);
        a.mib.amg("sbuttons", "#eyu", [false]);
        a.ksl()
    };
    this.kwp = function() {
        a.uhv = 3;
        a.mib.bnh("bett", "#otk", [false, false, false]);
        a.mib.bnh("autot", "#otk", [false, false, false]);
        a.mib.bnh("helpt", "#otk", [false, false, false]);
        a.mib.bnh("settingt", "#otk", [true, false, false]);
        a.mib.bnh("returnt", "#otk", [false, false, false]);
        a.mib.amg("bbuttons", "#eyu", [false]);
        a.mib.amg("abuttons", "#eyu", [false]);
        a.mib.amg("acheckboxes", "#eyu", [false]);
        a.mib.amg("hbuttons", "#eyu", [false]);
        a.mib.amg("sbuttons", "#eyu", [true]);
        a.mib.bnh("gamble", "#eyu", [a.ebv]);
        a.ksl()
    };
    this.tjn = function() {
        a.parent.xvk();
        a.mib.bnh("returnt", "#otk", [false, false, false])
    }
}
ibx.prototype = new bom;

function hzy() {
    var a = this;
    this.ics = null;
    this.lkl = "bold";
    this.akn = "rgb(0,0,0)";
    this.hhs = null;
    this.fhx = "rgb(255,255,255)";
    this.ekw = null;
    this.kzv = "rgb(60,60,60)";
    this.asd = null;
    this.wyy = null;
    this.ybj = false;
    this.vtb = [];
    this.fnq = [];
    this.hsi = null;
    this.eta = 19;
    this.ygm = 15;
    this.jac = 120;
    this.muf = 2;
    this.krj = 2;
    this.zkc = 2;
    this.ljj = 10;
    this.ctl = 12;
    this.llb = function(b, d, c) {
        hzy.prototype.llb.call(this, b, d, c)
    };
    this.vpj = function(b) {
        try {
            this.ctl = b.fontSize;
            this.eta = b.idm;
            this.ygm = b.ito;
            this.jac = b.tki;
            this.muf = b.hmt;
            this.krj = b.uha;
            this.zkc = b.kih;
            this.ljj = b.whh
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(b) {
        try {
            this.ics = b.font;
            this.lkl = b.scm;
            this.akn = b.backgroundColor;
            this.hhs = b.wsn;
            this.fhx = b.ujm;
            this.kzv = b.borderColor;
            this.ekw = b.ofm;
            if (this.hhs) {
                this.asd = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.asd.addColorStop(0, this.hhs);
                this.asd.addColorStop(0.5, this.akn)
            } else {
                this.asd = this.akn
            }
            if (this.ekw) {
                this.wyy = this.context2D.createLinearGradient(0, 0, 0, this.height);
                this.wyy.addColorStop(0, this.ekw);
                this.wyy.addColorStop(1, this.kzv)
            } else {
                this.wyy = this.kzv
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.qmq = function(b, g, c) {
        var e = b - this.x,
            d = g - this.y,
            f = (c && c === true) ? this.ljj : 0;
        if (e >= this.x && e <= this.x + this.width && d >= this.y && d <= this.y + this.height + f && this.qvq()) {
            this.parent.sxb();
            return true
        }
        return false
    };
    this.bda = function(d, b, c) {
        this.fnq.push({
            id: d,
            pds: b,
            value: c,
            wvz: null
        })
    };
    this.tzh = function(e, c, d, b) {
        this.fnq.push({
            id: e,
            pds: c,
            value: d,
            wvz: b
        })
    };
    this.qwg = function(d, b, c) {
        this.vtb.push({
            id: d,
            zey: b,
            value: c
        })
    };
    this.wqi = function(e, d) {
        for (var c = 0, b = this.fnq.length; c < b; c++) {
            if (this.fnq[c].id == e) {
                this.fnq[c].value = d;
                return true
            }
        }
        return false
    };
    this.fgx = function(c, e) {
        for (var d = 0, b = c.length; d < b; d++) {
            if (c[d] == e) {
                return d
            }
        }
        return -1
    };
    this.lzh = function(e, d) {
        for (var c = 0, b = this.vtb.length; c < b; c++) {
            if (this.vtb[c].id == e) {
                if (this.vtb[c].value != d) {
                    this.vtb[c].value = d;
                    return true
                } else {
                    return false
                }
            }
        }
        return false
    };
    this.epn = function(b) {
        this.hsi = b
    };
    this.eyu = function(b) {
        this.ybj = b
    };
    this.qvq = function(b) {
        return this.ybj
    };
    this.zbo = function(c, b) {
        if (this.wqi(c, b)) {
            window.pqg(a.ksl)
        }
    };
    this.tym = function(c, b) {
        if (this.lzh(c, b)) {
            window.pqg(a.ksl)
        }
    };
    this.wxs = function(b) {
        this.epn(b);
        window.pqg(a.ksl)
    };
    this.ksl = function() {
        if (!a.bsl() || !a.parent.fus()) {
            return
        }
        var e = (a.height - a.ctl) / 2 + a.krj,
            c = a.muf + a.eta * a.fnq.length,
            d = a.width - c - (a.jac * a.vtb.length),
            b = a.context2D;
        b.save();
        cun.hfb.roz(b, 0, 0, a.width, a.height, a.asd, 1);
        a.out(b, e);
        a.aly(b, e);
        if (a.hsi && a.hsi != "") {
            cun.hfb.abt(b, a.hsi, a.fhx, c, e, d, a.ctl, a.ics, a.ctl, a.lkl)
        } else {
            if (a.qvq()) {
                a.egw(b)
            }
        }
        a.mwl(b, 0, a.height - a.zkc / 2, a.width, a.height - a.zkc / 2);
        b.restore();
        if (a.ucm && a.qce) {
            a.ucm.drawImage(a.qce, a.x, a.y)
        }
    };
    this.out = function(d, g) {
        var c = 0;
        for (var f = 0, b = this.fnq.length; f < b; f++) {
            if (this.fnq[f].wvz) {
                var e = this.fgx(this.fnq[f].wvz, this.fnq[f].value);
                if (this.fnq[f].pds instanceof Array) {
                    cun.hfb.abt(d, this.fnq[f].pds[e], this.fhx, c, g, this.eta, this.ctl, this.ics, this.ctl, this.lkl)
                } else {
                    if (this.fnq[f].pds instanceof Image || this.fnq[f].pds instanceof HTMLCanvasElement) {
                        d.drawImage(this.fnq[f].pds, e * this.ygm, 0, this.ygm, this.fnq[f].pds.height, c + this.muf, g - this.krj, this.eta - 2 * this.muf, this.ctl)
                    }
                }
            } else {
                d.save();
                d.globalAlpha = (this.fnq[f].value == true) ? 1 : 0.3;
                if (this.fnq[f].pds instanceof String) {
                    cun.hfb.abt(d, this.fnq[f].pds, this.fhx, c, g, this.eta, this.ctl, this.ics, this.ctl, this.lkl)
                } else {
                    if (this.fnq[f].pds instanceof Image || this.fnq[f].pds instanceof HTMLCanvasElement) {
                        d.drawImage(this.fnq[f].pds, c + this.muf, g - this.krj, this.eta - 2 * this.muf, this.ctl)
                    }
                }
                d.restore()
            }
            c += this.eta;
            this.mwl(d, c, 0, c, this.height)
        }
        return c
    };
    this.aly = function(d, f) {
        var c = this.width - this.muf - this.jac * this.vtb.length;
        for (var e = 0, b = this.vtb.length; e < b; e++) {
            if (this.vtb[e].id == "freeplay") {
                cun.hfb.roz(d, c, 0, this.jac, this.height, "red", 0.4)
            } else {
                if (this.vtb[e].id == "freespin") {
                    cun.hfb.roz(d, c, 0, this.jac, this.height, "rgb(100,255,100)", 0.5)
                }
            }
            this.mwl(d, c, 0, c, this.height);
            cun.hfb.abt(d, this.vtb[e].zey + this.vtb[e].value, this.fhx, c, f, this.jac, this.ctl, this.ics, this.ctl, this.lkl);
            c += this.jac
        }
    };
    this.mwl = function(b, d, f, c, e) {
        b.save();
        b.strokeStyle = this.wyy;
        b.lineWidth = this.zkc;
        b.beginPath();
        b.moveTo(d, f);
        b.lineTo(c, e);
        b.stroke();
        b.restore()
    };
    this.egw = function(c) {
        if (this.parent.dan.owa("topb") == null) {
            return
        }
        var g = 3 * this.height,
            j = this.zkc,
            e = 9,
            d = Math.floor(this.height / 5),
            b = (this.width - g) / 2,
            k = this.zkc;
        c.save();
        c.strokeStyle = this.kzv;
        c.lineWidth = j;
        c.beginPath();
        for (var f = 0; f < d; f++) {
            c.moveTo(b + (e - 1) * f, k);
            c.lineTo(((b + g - e * f) + (b + e * f)) / 2, ((this.height - k - j) - f * 2 * j));
            c.lineTo(b + g - (e - 1) * f, k)
        }
        c.stroke();
        c.restore()
    }
}
hzy.prototype = new bom;

function nvs() {
    var b = this;
    var c = 0;
    var a = 1;
    this.iod = 7;
    this.psl = 89;
    this.otg = 10000;
    this.mib = null;
    this.ybj = false;
    this.fkj = false;
    this.oot = -1;
    this.voo = 0;
    this.ics = null;
    this.lkl = "bold";
    this.akn = "black";
    this.qfo = null;
    this.pum = null;
    this.ghk = null;
    this.fhx = "white";
    this.tta = 0.8;
    this.hyc = 0;
    this.rtm = 0;
    this.ohe = 0;
    this.wkk = 0;
    this.bsc = 0;
    this.xvw = 0;
    this.kxg = 0;
    this.muf = 10;
    this.krj = 5;
    this.qmu = 10;
    this.tjo = this.muf;
    this.ias = 10;
    this.dup = 20;
    this.aez = 40;
    this.dgy = 4;
    this.ctl = 10;
    this.lhb = null;
    this.aub = null;
    this.pgu = "";
    this.yvq = null;
    this.llb = function(d, f, e) {
        nvs.prototype.llb.call(this, d, f, e);
        this.mib = new bmn();
        this.mib.llb();
        this.mib.etj("buttons");
        this.mib.etj("system");
        this.mib.etj("setting")
    };
    this.vpj = function(d) {
        try {
            this.ctl = d.fontSize;
            this.ias = d.ezu;
            this.dup = d.hmh;
            this.aez = d.iej;
            this.dgy = d.bao;
            this.muf = d.hmt;
            this.krj = d.uha;
            this.qmu = d.bch
        } catch (f) {
            console.error(f)
        }
    };
    this.dku = function(g, m) {
        try {
            var k = this.mib.tcj("buttons"),
                j = (m === true) ? g.kfu.pli : g.huo.pli;
            this.ics = g.font;
            this.lkl = g.scm;
            this.akn = g.backgroundColor;
            this.qfo = g.jry;
            this.pum = g.evj;
            this.fhx = g.ujm;
            this.tta = g.qvi;
            if (this.qfo && this.pum) {
                this.ghk = this.context2D.createLinearGradient(0, 0, this.width, 0);
                this.ghk.addColorStop(0, this.qfo);
                this.ghk.addColorStop(0.5, this.pum);
                this.ghk.addColorStop(1, this.qfo)
            }
            for (var f = 0, d = k.length; f < d; f++) {
                k[f].dku(j)
            }
        } catch (l) {
            console.error(l)
        }
    };
    this.qmq = function(p, o) {
        var n = this.mib.ugn(),
            q = this.mib.owa("audio"),
            r = this.mib.owa("language"),
            f = this.mib.owa("history"),
            e = p - this.x,
            d = o - this.y;
        if (this.fkj) {
            return true
        }
        for (var l = 0, m = n.length; l < m; l++) {
            var g = n[l];
            if (e >= g.x && e <= g.x + g.width && d >= g.y && d <= g.y + g.height && g.bsl()) {
                if (g.qvq() && !g.aqh()) {
                    if (g != q && g != r) {
                        this.parent.gai.ykp("btn");
                        this.parent.gai.vsj("btn")
                    }
                    g.otk(true, true, false);
                    g.ktx();
                    for (var k = 0; k < m; k++) {
                        n[k].sgw(true)
                    }
                    if (g != f) {
                        if (this.oot >= 0) {
                            clearTimeout(this.oot);
                            this.oot = -1
                        }
                        this.oot = setTimeout(this.cir, this.otg)
                    }
                }
                return true
            }
        }
        if (this.bsl() && this.qvq()) {
            if (p < this.x + this.bsc || p > this.x + this.bsc + this.xvw || o < this.y || o > this.y + this.height) {
                if (this.oot >= 0) {
                    clearTimeout(this.oot);
                    this.oot = -1
                }
                return false
            }
        }
        return true
    };
    this.vlq = function() {
        var g = this.mib.ugn();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ozv() == true) {
                e.otk(false, true);
                return true
            }
        }
        return false
    };
    this.chp = function(e) {
        var o = this.mib.ugn(),
            d = this.mib.tcj("system"),
            m = this.mib.tcj("setting"),
            q = this.mib.owa("audio"),
            l = 0,
            k = 0,
            n = 0,
            g = 0;
        if (this.fkj) {
            return true
        }
        for (l = 0, n = m.length; l < n; l++) {
            var f = m[l];
            if ((e == f.vhe || e == f.aem) && !f.aqh()) {
                if (f != q) {
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn")
                }
                f.otk(true, true, false);
                f.ktx();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].sgw(true)
                }
                if (this.oot >= 0) {
                    clearTimeout(this.oot);
                    this.oot = -1
                }
                return true
            }
        }
        for (l = 0, n = d.length; l < n; l++) {
            var f = d[l];
            if ((e == f.vhe || e == f.aem) && f.qvq() && !f.aqh()) {
                if (f != q) {
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn")
                }
                f.otk(true, true, false);
                f.ktx();
                for (k = 0, g = o.length; k < g; k++) {
                    o[k].sgw(true)
                }
                if (this.oot >= 0) {
                    clearTimeout(this.oot);
                    this.oot = -1
                }
                return true
            }
        }
        if (this.bsl() && this.qvq()) {
            if (this.parent.ihh) {
                for (l = 0, n = this.parent.ihh.iuv.length; l < n; l++) {
                    var p = this.parent.ihh.iuv[l];
                    if (p.ojt == e || p.ojt == e) {
                        if (this.oot >= 0) {
                            clearTimeout(this.oot);
                            this.oot = -1
                        }
                        return false
                    }
                }
            }
        }
        return false
    };
    this.cyi = function() {
        var g = this.mib.ugn();
        for (var f = 0, d = g.length; f < d; f++) {
            var e = g[f];
            if (e.ozv() == true) {
                e.otk(false, true, false);
                return true
            }
        }
        return false
    };
    this.ejf = function(e, m) {
        var k = this.mib.ugn(),
            l = e - this.x,
            j = m - this.y;
        this.aub = this.lhb;
        this.lhb = null;
        for (var g = 0, d = k.length; g < d; g++) {
            var f = k[g];
            if (l >= f.x && l <= f.x + f.width && j >= f.y && j <= f.y + f.height && f.bsl() && f.qvq() && !f.aqh()) {
                this.lhb = f
            }
        }
        if (this.lhb) {
            this.xmc(true)
        } else {
            this.xmc(false)
        }
        return true
    };
    this.gqn = function(e, f, g, i, l, d, m) {
        this.kxg = g.width;
        var k = new icy(this.tjo, this.krj, this.kxg, this.kxg);
        var j = new vne();
        j.llb(k, this.context2D);
        j.parent = this;
        j.ktx = i;
        j.sit = f;
        j.pnt(d, m);
        j.vpj(this.parent.fbj.hbz.dwb);
        j.dku(this.parent.style.hbz.huo.pli);
        j.wlp(g);
        if (l != null) {
            j.aem = l.ebx;
            j.vhe = l.ojt;
            j.blv = l.value
        }
        this.mib.byd(e, j, ["buttons", "setting"]);
        this.tjo += this.kxg + this.muf;
        this.xvw = this.tjo
    };
    this.kxy = function(k, j, i, g, e) {
        this.kxg = i.width;
        var f = new icy(this.tjo, this.krj, this.kxg, this.kxg);
        var d = new vne();
        d.llb(f, this.context2D);
        d.parent = this;
        d.ktx = g;
        d.sit = j;
        d.vpj(this.parent.fbj.hbz.dwb);
        d.dku(this.parent.style.hbz.huo.pli);
        d.wlp(i);
        if (e != null) {
            d.aem = e.ebx;
            d.vhe = e.ojt;
            d.blv = e.value
        }
        this.mib.byd(k, d, ["buttons", "system"]);
        this.tjo += this.kxg + this.muf;
        this.xvw = this.tjo
    };
    this.fpj = function() {
        var f = this.mib.ugn();
        this.xvw += 2 * this.qmu;
        this.bsc = Math.round((this.width - this.xvw) / 2);
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].x += this.bsc + this.qmu
        }
    };
    this.bwy = function() {
        return this.xvw
    };
    this.eyu = function(d) {
        this.ybj = d
    };
    this.qvq = function() {
        return this.ybj
    };
    this.qla = function(g) {
        var f = this.mib.ugn();
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].eyu(g)
        }
        this.parent.ksl()
    };
    this.uhd = function(g) {
        var f = this.mib.tcj("system");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].eyu(g)
        }
        this.parent.ksl()
    };
    this.pfq = function(g) {
        var f = this.mib.tcj("setting");
        for (var e = 0, d = f.length; e < d; e++) {
            f[e].eyu(g)
        }
        this.parent.ksl()
    };
    this.vmo = function() {
        if (this.bsl()) {
            return
        }
        if (this.fkj) {
            if (this.wkk === a) {
                this.yvq = this.vmo
            } else {
                this.yvq = null
            }
        } else {
            this.yvq = null;
            this.teh();
            this.fpd()
        }
    };
    this.jjk = function(d) {
        if (this.parent.bvw) {
            this.parent.bvw()
        }
        this.stop();
        this.fkj = false;
        this.yvq = null;
        this.cbi(true, d);
        if (this.oot >= 0) {
            clearTimeout(this.oot);
            this.oot = -1
        }
        this.oot = setTimeout(this.cir, this.otg)
    };
    this.cir = function() {
        if (b.bsl()) {
            b.parent.gai.ykp("panel_out");
            b.parent.gai.vsj("panel_out");
            b.slm()
        }
    };
    this.slm = function() {
        if (!this.bsl()) {
            return
        }
        if (this.fkj) {
            if (this.wkk === c) {
                this.yvq = this.slm
            } else {
                this.yvq = null
            }
        } else {
            this.yvq = null;
            this.zma();
            this.fpd();
            if (this.oot >= 0) {
                clearTimeout(this.oot);
                this.oot = -1
            }
        }
    };
    this.gxl = function(d) {
        if (this.parent.pbl) {
            this.parent.pbl()
        }
        this.stop();
        this.fkj = false;
        this.yvq = null;
        this.cbi(false, d);
        if (typeof this.ukg === "function") {
            this.ukg();
            this.ukg = null
        }
    };
    this.teh = function() {
        this.cbi(true);
        this.fkj = true;
        this.ybj = false;
        this.wkk = c;
        this.hyc = Math.floor(this.height / this.iod);
        this.ohe = 1;
        this.rtm = Math.floor(this.height / this.iod)
    };
    this.zma = function() {
        if (this.parent.pbl) {
            this.parent.pbl()
        }
        this.fkj = true;
        this.ybj = false;
        this.wkk = a;
        this.hyc = -Math.floor(this.height / this.iod);
        this.ohe = 1;
        this.rtm = this.height
    };
    this.fpd = function() {
        this.voo = setInterval(this.sif, this.psl)
    };
    this.bpr = function() {
        if (b.wkk == c) {
            if (b.parent.bvw) {
                b.parent.bvw()
            }
            if (b.oot >= 0) {
                clearTimeout(b.oot);
                b.oot = -1
            }
            b.oot = setTimeout(b.cir, b.otg)
        }
        clearInterval(b.voo);
        if (b.yvq) {
            b.yvq()
        }
    };
    this.stop = function() {
        clearTimeout(this.oot);
        clearInterval(this.voo);
        this.oot = -1
    };
    this.sif = function() {
        if (!b.hjz()) {
            b.bpr()
        }
    };
    this.hjz = function() {
        if (b.ohe < b.iod) {
            b.parent.ksl(b.x, b.y, b.width, b.height);
            b.rtm += b.hyc;
            b.ohe++;
            return true
        } else {
            b.fkj = false;
            b.ybj = true;
            if (b.wkk == a) {
                b.cbi(false);
                if (typeof b.ukg === "function") {
                    b.ukg();
                    b.ukg = null
                }
            }
            b.parent.ksl(b.x, b.y, b.width, b.height);
            return false
        }
    };
    this.ksl = function(n, m, o, g) {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var p = this.context2D,
            e = (n != null && m != null && o != null && g != null),
            l = this.mib.ugn(),
            k = 0,
            d = 0;
        p.save();
        if (e) {
            p.beginPath();
            p.rect(n, m, o, g);
            p.closePath();
            p.clip()
        }
        p.clearRect(0, 0, this.width, this.height);
        this.ayj(p);
        for (var f = 0, j = l.length; f < j; f++) {
            l[f].ksl()
        }
        if (this.lhb && this.pgu != "") {
            k = this.lhb.x - this.muf - this.kxg;
            d = 3 * this.kxg + 2 * this.muf;
            if (k + d >= this.bsc + this.xvw) {
                k = this.bsc + this.xvw - d;
                cun.hfb.dsg(p, this.pgu, this.fhx, k, this.lhb.y + this.lhb.height, d, this.ctl, this.ics, this.ctl, this.lkl, this.muf)
            } else {
                cun.hfb.abt(p, this.pgu, this.fhx, k, this.lhb.y + this.lhb.height, d, this.ctl, this.ics, this.ctl, this.lkl)
            }
        }
        p.restore();
        if (this.fkj) {
            if (this.ucm && this.qce && this.rtm > 0) {
                this.ucm.drawImage(this.qce, 0, this.height - this.rtm, this.width, this.rtm, this.x, this.y, this.width, this.rtm)
            }
        } else {
            if (e) {
                this.parent.ksl(this.x + n, this.y + m, o, g)
            } else {
                if (this.ucm && this.qce) {
                    this.ucm.drawImage(this.qce, this.x, this.y)
                }
            }
        }
    };
    this.ayj = function(d) {
        var f = this.dgy,
            e = f / 2;
        d.save();
        d.strokeStyle = this.ghk;
        d.fillStyle = this.akn;
        d.lineWidth = f;
        d.beginPath();
        d.moveTo(e, 0);
        d.arcTo(e, this.ias, this.ias + e, this.ias, this.ias);
        d.arcTo(this.bsc, this.ias, this.bsc, this.height - this.dup - e, this.aez);
        d.arcTo(this.bsc, this.height - e, this.bsc + this.dup, this.height - e, this.dup);
        d.lineTo(this.bsc + this.xvw - this.dup, this.height - e);
        d.arcTo(this.bsc + this.xvw, this.height - e, this.bsc + this.xvw, this.height - this.dup - e, this.dup);
        d.arcTo(this.bsc + this.xvw, this.ias, this.width - this.ias - e, this.ias, this.aez);
        d.arcTo(this.width - e, this.ias, this.width - e, 0, this.ias);
        d.stroke();
        d.closePath();
        d.globalAlpha = this.tta;
        d.fill();
        d.restore()
    };
    this.xmc = function(d) {
        if (this.lhb && this.lhb != this.aub) {
            if (d && this.lhb) {
                this.pgu = this.parent.bgr(this.lhb.sit);
                if (!cun.hfb.qza) {
                    this.pgu = (this.lhb.blv) ? this.pgu + " [" + this.lhb.blv + "]" : this.pgu
                }
            } else {
                this.pgu = ""
            }
            this.parent.ksl(this.x, this.y, this.width, this.height)
        } else {
            if (d && (this.lhb && this.pgu != this.parent.bgr(this.lhb.sit))) {
                this.pgu = this.parent.bgr(this.lhb.sit);
                if (!cun.hfb.qza) {
                    this.pgu = (this.lhb.blv) ? this.pgu + " [" + this.lhb.blv + "]" : this.pgu
                }
            }
            this.parent.ksl(this.x, this.y, this.width, this.height)
        }
    };
    this.ukg = null
}
nvs.prototype = new bom;

function xac() {
    var a = this;
    this.dei = "LOADING ... ";
    this.uvd = "ERROR";
    this.aip = null;
    this.fng = null;
    this.ctm = false;
    this.sfa = false;
    this.zrv = true;
    this.ktx = null;
    this.eod = null;
    this.ufo = null;
    this.voo = 0;
    this.eyy = 0;
    this.vvz = false;
    this.yzf = 0;
    this.dnh = 60;
    this.nop = 0;
    this.ics = "arial";
    this.lkl = "bold";
    this.nhl = "black";
    this.inu = "rgb(0,100,10)";
    this.dqq = "rgb(80,255,100)";
    this.lhn = "rgb(120,120,120)";
    this.wyr = "red";
    this.ghr = "white";
    this.fhx = "yellow";
    this.ctl = 14;
    this.qkr = 18;
    this.uvt = 20;
    this.jvf;
    this.eex;
    this.mby;
    this.ply;
    this.qmu = 5;
    this.muf = 12;
    this.krj = 5;
    this.cca = 2;
    this.tkn = new icy();
    this.zzf = new icy();
    this.hnh = [];
    this.mxi = 0;
    this.usq = 20;
    this.llb = function(b, d, c) {
        xac.prototype.llb.call(this, b, d, c);
        this.eod = document.createElement("canvas");
        this.ufo = this.eod.getContext("2d")
    };
    this.vpj = function(b) {
        try {
            this.ctl = b.fontSize;
            this.qkr = b.rnr;
            this.uvt = b.oti;
            this.qmu = b.bch;
            this.muf = b.hmt;
            this.krj = b.uha;
            this.cca = b.umj;
            this.jvf = b.naq;
            this.eex = b.vli;
            this.mby = b.tdm;
            this.ply = b.dvl;
            this.tkn = b.ger;
            if (this.zzf.width > 0 && this.zzf.height) {
                this.dgi()
            }
        } catch (c) {
            console.error(c)
        }
    };
    this.dku = function(b) {
        try {
            this.ics = b.font;
            this.lkl = b.scm;
            this.nhl = b.backgroundColor;
            this.inu = b.eqm;
            this.dqq = b.mft;
            this.lhn = b.acr;
            this.wyr = b.oel;
            this.ghr = b.drx;
            this.fhx = b.ujm;
            this.fng = b.fng
        } catch (c) {
            console.error(c)
        }
    };
    this.qmq = function(b, e) {
        var d = b - this.x,
            c = e - this.y;
        if (d >= this.zzf.x && d <= this.zzf.x + this.zzf.width && c >= this.zzf.y && c <= this.zzf.y + this.zzf.height) {
            this.ktx();
            return true
        }
        return false
    };
    this.ksl = function(b) {
        if (b && b >= 0) {
            this.eyy = b
        }
        if (!this.bsl()) {
            return
        }
        if (cun.emv.value45 == cun.yoi.pcg) {
            this.nbp()
        } else {
            if (cun.emv.value45 == cun.yoi.glg) {
                this.vrr()
            }
        }
    };
    this.nbp = function() {
        if (this.ctm) {
            var c = this.context2D,
                b = this.mby.width / 100;
            c.save();
            if (this.sfa === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.gai.wxh("splash"), 0, 0, this.width, this.height);
            if (this.fng) {
                cun.hfb.roz(c, this.qmu, this.qmu, this.width - 2 * this.qmu, this.height - 2 * this.qmu, this.fng, 0.3)
            }
            if (this.aip != null && this.aip != "") {
                this.wue(this.ply, true)
            } else {
                if (this.vvz) {
                    cun.hfb.roz(c, this.tkn.x, this.tkn.y, this.tkn.width, this.tkn.height, this.nhl, 0.7);
                    c.drawImage(this.eod, this.tkn.x + this.tkn.width * (1 - this.hnh[this.mxi]) / 2, this.tkn.y + this.tkn.height * (1 - this.hnh[this.mxi]) / 2, this.tkn.width * this.hnh[this.mxi], this.tkn.height * this.hnh[this.mxi])
                } else {
                    if (this.zrv === true) {
                        if (this.sfa === false) {
                            cun.hfb.roz(c, this.jvf.x, this.jvf.y, this.jvf.width, this.jvf.height, this.nhl, 0.7)
                        }
                        var e = this.dei + " " + this.eyy + "%";
                        var d = c.createLinearGradient(this.mby.x, this.mby.y, this.mby.x + this.mby.width, this.mby.y);
                        d.addColorStop(0, this.inu);
                        d.addColorStop(1, this.dqq);
                        cun.hfb.abt(c, e, this.ghr, this.eex.x, this.eex.y, this.eex.width, this.eex.height, this.ics, this.ctl, this.lkl);
                        cun.hfb.zgr(c, this.mby.x - this.cca, this.mby.y, this.mby.width + 2 * this.cca, this.mby.height, this.cca, this.nhl, 0.8, this.lhn, this.cca, 0.8);
                        cun.hfb.roz(c, this.mby.x, this.mby.y + this.cca / 2, b * this.eyy, this.mby.height - this.cca, d, 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.vrr = function() {
        if (this.ctm) {
            var c = this.context2D,
                b = this.mby.width / 100;
            c.save();
            if (this.sfa === true) {
                c.clearRect(0, 0, this.width, this.height)
            }
            c.drawImage(this.parent.gai.wxh("splash"), 0, 0, this.width, this.height);
            if (this.aip != null && this.aip != "") {
                this.wue(this.ply, true)
            } else {
                if (this.vvz) {
                    c.drawImage(this.parent.gai.wxh("continue"), this.tkn.x, this.tkn.y, this.tkn.width, this.tkn.height);
                    c.drawImage(this.eod, this.tkn.x + this.tkn.width * (1 - this.hnh[this.mxi]) / 2, this.tkn.y + this.tkn.height * (1 - this.hnh[this.mxi]) / 2, this.tkn.width * this.hnh[this.mxi], this.tkn.height * this.hnh[this.mxi])
                } else {
                    if (this.zrv === true) {
                        cun.hfb.roz(c, this.mby.x, this.mby.y, this.mby.width, this.mby.height, "rgb(0,0,0)", 0.5);
                        cun.hfb.roz(c, this.mby.x, this.mby.y, b * this.eyy, this.mby.height, "rgb(0,250,0)", 1)
                    }
                }
            }
            c.restore()
        }
    };
    this.wue = function(c, m) {
        var l = this.context2D,
            o = [],
            d = this.ctl,
            k = this.aip,
            f = "",
            t = 0,
            v = 0,
            s = 0,
            u = 0,
            n = "center",
            e = Math.round(d * 1.5),
            j = Math.round(this.qkr * 1.5),
            b = 0,
            w = 1,
            q = 0,
            g = 0;
        l.save();
        l.font = this.lkl + " " + d + "px " + this.ics;
        for (var p = s; p < k.length; p++) {
            f += k.charAt(p);
            u = l.measureText(f).width;
            if (k.charAt(p) == " ") {
                t = p
            }
            if (p == k.length - 1) {
                o[v] = k.substring(s, k.length)
            } else {
                if (k.charAt(p) == "|") {
                    o[v] = k.substring(s, p);
                    v++;
                    s = p + 1;
                    f = k.substring(p + 1, p + 1)
                } else {
                    if (u >= c.width - 2 * this.muf) {
                        o[v] = k.substring(s, t);
                        v++;
                        s = t + 1;
                        f = k.substring(t + 1, p)
                    }
                }
            }
        }
        b = v * (e);
        if (b > (c.height - j - this.krj)) {
            w = (c.height - j - this.krj) / b;
            d = Math.round(d * w) - 1;
            l.font = this.lkl + " " + d + "px " + this.ics;
            e = Math.round(d * 1.5);
            b = v * (e)
        }
        if (d < 10) {
            w = 10 / d;
            d = Math.round(d * w);
            l.font = this.lkl + " " + d + "px " + this.ics;
            e = Math.round(d * 1.5);
            b = v * (e);
            g = (c.height - (j + b + this.krj));
            c.height = j + b + this.krj;
            c.y += g
        }
        l.textAlign = n;
        l.lineJoin = "round";
        l.lineCap = "round";
        if (m && m === true) {
            cun.hfb.roz(l, c.x, c.y, c.width, c.height, this.nhl, 0.7)
        }
        if (this.uvd != null) {
            l.font = this.lkl + " " + this.qkr + "px " + this.ics;
            l.fillStyle = this.wyr;
            l.textBaseline = "bottom";
            l.fillText(this.uvd, c.x + c.width / 2, c.y + this.qkr + this.krj)
        }
        l.font = this.lkl + " " + d + "px " + this.ics;
        l.fillStyle = this.ghr;
        if (o.length == 1) {
            q = j + b + e;
            l.fillText(o[0], (c.x + c.width / 2), c.y + q)
        } else {
            for (var p = 0, r = o.length; p < r; p++) {
                q = j + (b + e) / (r + 1) * (p + 1);
                if (n == "start") {
                    l.fillText(o[p], (c.x + this.muf), c.y + q)
                } else {
                    l.fillText(o[p], (c.x + c.width / 2), c.y + q)
                }
            }
        }
        l.restore()
    };
    this.gth = function() {
        return (this.vvz)
    };
    this.gni = function() {
        for (var b = 0; b < this.usq; b++) {
            this.hnh[b] = 1 - Math.sin(Math.PI * b / (this.usq - 1)) * 0.04
        }
        this.hnh[this.usq - 1] = 1;
        this.vvz = true;
        this.mxi = 0;
        this.dgi();
        this.voo = setInterval(this.lwc, this.dnh);
        this.ksl()
    };
    this.lwc = function() {
        a.ksl();
        a.mxi = (a.mxi < a.usq - 1) ? a.mxi + 1 : 0
    };
    this.stop = function() {
        this.vvz = false;
        clearTimeout(this.voo)
    };
    this.dgi = function() {
        var b = this.ufo;
        this.zzf = this.tkn;
        this.eod.width = Math.round(this.zzf.width);
        this.eod.height = Math.round(this.zzf.height);
        b.save();
        b.clearRect(0, 0, this.eod.width, this.eod.height);
        cun.hfb.qhp(b, this.parent.language.tzv, this.fhx, 0, 0, this.eod.width, this.eod.height, this.ics, this.uvt, this.lkl, "center", true);
        b.restore()
    }
}
xac.prototype = new bom;

function xaw() {
    var b = this;
    var c = 0;
    var a = 1;
    var e = 2;
    var d = 3;
    this.psb = null;
    this.vtr = null;
    this.tgs = null;
    this.qcb = null;
    this.ulc = null;
    this.ukd = [];
    this.bvi = 0;
    this.yxy = [];
    this.wpc = [];
    this.uhv = 0;
    this.tbg = false;
    this.lie = false;
    this.llb = function() {
        this.psb = document.getElementById("messageOverlay");
        this.vtr = document.getElementById("messagePanel");
        this.tgs = document.getElementById("messageTitle");
        this.qcb = document.getElementById("messageText");
        this.ulc = document.getElementById("btne");
        if (this.ulc) {
            this.ulc.innerHTML = "\u00D7";
            this.ulc.onclick = this.slm;
            this.ulc.ontouchend = this.slm
        }
        for (var f = 0; f < 4; f++) {
            this.ukd[f] = document.getElementById("btn" + (f + 1))
        }
    };
    this.dku = function(f) {
        try {
            this.yxy = f.cyx
        } catch (g) {
            console.error(g)
        }
    };
    this.vpj = function(j) {
        try {
            if (this.vtr) {
                cun.hfb.mci(this.vtr, j.enh)
            }
            if (this.tgs) {
                this.tgs.style.fontSize = j.anb + "px";
                cun.hfb.mci(this.tgs, j.gus)
            }
            if (this.qcb) {
                this.qcb.style.fontSize = j.aaw + "px";
                cun.hfb.mci(this.qcb, j.mrk)
            }
            if (this.ulc) {
                cun.hfb.mci(this.ulc, j.yol)
            }
            for (var g = 0, f = this.ukd.length; g < f; g++) {
                this.ukd[g].style.fontSize = j.dwb.fontSize + "px";
                this.ukd[g].style.top = j.khw.y + "px";
                this.ukd[g].style.height = j.khw.height + "px"
            }
        } catch (k) {
            console.error(k)
        }
    };
    this.vmo = function(j) {
        this.wpc.length = 0;
        this.uhv = 0;
        for (var g = 0, f = j.length; g < f; g++) {
            this.wpc[g] = j[g]
        }
        this.ykb(this.wpc[this.uhv])
    };
    this.slm = function() {
        if (b.vtr) {
            b.lie = false;
            b.vtr.style.display = "none";
            b.psb.style.display = "none";
            cun.qrf.ycg();
            cun.qrf.ksa = false
        }
    };
    this.ykb = function(l) {
        var n = this.wpc.length > 1,
            m = "";
        if (l.Buttons && l.Buttons.length >= 1) {
            for (var k = l.Buttons.length - 1; k >= 0; k--) {
                if (l.Buttons[k].Action.toLowerCase() == "cashier") {
                    l.Buttons.splice(k, 1)
                }
            }
        }
        if (l.dmt === cun.ute.djn || l.dmt === cun.ute.mpr) {
            this.bvi = d;
            this.tbg = (l.DisplayType == cun.nse.tkh.xqw) ? true : false
        } else {
            if (l.dmt === cun.ute.fnv || l.dmt === cun.ute.jgg || l.dmt === cun.ute.qca || l.dmt === cun.ute.roulette.oke || l.dmt === cun.ute.roulette.mjy) {
                this.bvi = a;
                this.tbg = false
            } else {
                if (l.dmt === cun.ute.fft || l.dmt === cun.ute.uds) {
                    this.bvi = c;
                    this.tbg = false
                } else {
                    if (l.dmt === cun.ute.tep || l.dmt === cun.ute.yfy || l.dmt === cun.ute.wnn) {
                        this.bvi = e;
                        this.tbg = false
                    }
                }
            }
        }
        if (l.Title && this.tgs) {
            this.tgs.style.color = this.yxy[this.bvi];
            this.tgs.innerHTML = l.Title
        }
        if (l.Text && this.qcb) {
            this.qcb.innerHTML = l.Text.replace(/[\r]?\n/g, "<br>")
        }
        if (n) {
            this.ukd[0].innerHTML = "\u2039";
            this.ukd[0].onclick = this.mos;
            this.ukd[0].ontouchend = this.mos;
            this.ukd[0].style.display = "inline-block";
            this.ukd[this.ukd.length - 1].innerHTML = "\u203A";
            this.ukd[this.ukd.length - 1].onclick = this.nll;
            this.ukd[this.ukd.length - 1].ontouchend = this.nll;
            this.ukd[this.ukd.length - 1].style.display = "inline-block"
        }
        for (var k = 0, g = (n) ? 1 : 0, f = (n) ? this.ukd.length - 1 : this.ukd.length; g < f; g++, k++) {
            if (l.Buttons && k < l.Buttons.length) {
                m = l.Buttons[k].Text;
                if (m.indexOf("_") != 0) {
                    this.ukd[g].innerHTML = m
                } else {
                    var j = m.substr(1);
                    if (j == "exit") {
                        this.ukd[g].innerHTML = cun.qrf.language.bok
                    } else {
                        if (j == "continue") {
                            this.ukd[g].innerHTML = cun.qrf.language.tzv.replace(/ /g, "")
                        } else {
                            this.ukd[g].innerHTML = j.toUpperCase()
                        }
                    }
                }
                if (l.Buttons[k].Action.toLowerCase() == "quit") {
                    this.ukd[g].onclick = cun.qrf.rkh;
                    this.ukd[g].ontouchend = cun.qrf.rkh
                } else {
                    if (l.Buttons[k].Action.toLowerCase() == "continue") {
                        if (l.dmt === cun.ute.djn) {
                            this.ukd[g].onclick = this.yau.bind(this, l.Buttons[k].Link);
                            this.ukd[g].ontouchend = this.yau.bind(this, l.Buttons[k].Link)
                        } else {
                            if (l.dmt === cun.ute.mpr || l.dmt === cun.ute.tep || l.dmt === cun.ute.yfy) {
                                this.ukd[g].onclick = this.chr;
                                this.ukd[g].ontouchend = this.chr
                            } else {
                                if (l.dmt === cun.ute.fft || l.dmt === cun.ute.uds || l.dmt === cun.ute.wnn) {
                                    this.ukd[g].onclick = this.osy;
                                    this.ukd[g].ontouchend = this.osy
                                }
                            }
                        }
                    } else {
                        if (l.Buttons[k].Action.toLowerCase() == "history") {
                            this.ukd[g].onclick = cun.qrf.etv;
                            this.ukd[g].ontouchend = cun.qrf.etv
                        } else {
                            if (l.Buttons[k].Action.toLowerCase() == "link") {
                                if (l.Buttons[k].LinkType === cun.nse.met.xhz) {
                                    this.ukd[g].onclick = this.tvj.bind(this, l.Buttons[k].Link);
                                    this.ukd[g].ontouchend = this.tvj.bind(this, l.Buttons[k].Link)
                                } else {
                                    if (l.Buttons[k].LinkType === cun.nse.met.nic) {
                                        this.ukd[g].onclick = this.yau.bind(this, l.Buttons[k].Link);
                                        this.ukd[g].ontouchend = this.yau.bind(this, l.Buttons[k].Link)
                                    } else {
                                        if (l.Buttons[k].LinkType === cun.nse.met.kvj) {
                                            this.ukd[g].onclick = this.fob.bind(this, l.Buttons[k].Link);
                                            this.ukd[g].ontouchend = this.fob.bind(this, l.Buttons[k].Link)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this.ukd[g].style.display = "inline-block"
            } else {
                this.ukd[g].style.display = "none"
            }
        }
        this.ulc.style.display = (this.tbg) ? "inline-block" : "none";
        if (this.vtr) {
            this.lie = true;
            this.vtr.style.display = "block";
            this.psb.style.display = "block";
            cun.qrf.ycg();
            cun.qrf.ksa = true
        }
    };
    this.bsl = function() {
        if (this.lie) {
            return true
        }
        return false
    };
    this.chr = function() {
        b.slm();
        cun.qrf.wzu(cun.qrf.state)
    };
    this.yau = function(f) {
        var g = null;
        if (f) {
            g = cun.hfb.qfg("GET", f);
            if (!g) {
                console.error("Could not send request!")
            } else {
                g.onerror = function() {
                    console.error("Error on request!")
                }
            }
            g.send()
        }
        if (cun.qrf.qmi) {
            cun.qrf.qmi.iqf({
                sender: cun.qrf.fhe,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        b.slm();
        cun.qrf.iqe()
    };
    this.fob = function(j) {
        var k = null;
        if (j == null) {
            console.error("Request url is missing!");
            return
        }
        k = cun.hfb.qfg("GET", j);
        if (!k) {
            console.error("Could not send request!")
        } else {
            for (var g = 0, f = b.ukd.length; g < f; g++) {
                b.ukd[g].disabled = true
            }
            k.onload = function() {
                b.slm();
                for (var m = 0, l = b.ukd.length; m < l; m++) {
                    b.ukd[m].disabled = false
                }
                cun.qrf.iqe()
            };
            k.onerror = function() {
                console.error("Error on request!");
                for (var m = 0, l = b.ukd.length; m < l; m++) {
                    b.ukd[m].disabled = false
                }
            }
        }
        if (cun.qrf.qmi) {
            cun.qrf.qmi.iqf({
                sender: cun.qrf.fhe,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        k.send()
    };
    this.osy = function() {
        window.location.reload()
    };
    this.tvj = function(f) {
        if (cun.qrf.qmi) {
            cun.qrf.qmi.iqf({
                sender: cun.qrf.fhe,
                lang: sessionStorage.sessionValue1.toUpperCase()
            })
        }
        window.location.href = f
    };
    this.mos = function() {
        b.uhv = (b.uhv > 0) ? b.uhv - 1 : b.wpc.length - 1;
        b.ykb(b.wpc[b.uhv])
    };
    this.nll = function() {
        b.uhv = (b.uhv < b.wpc.length - 1) ? b.uhv + 1 : 0;
        b.ykb(b.wpc[b.uhv])
    }
}
cun.emv = new Settings();
cun.hfb = new vgp();

function roo() {
    this.jcn = "";
    this.rnp = "";
    this.waw = null;
    this.canvas = null;
    this.context2D = null;
    this.vaa = null;
    this.nrk = null;
    this.hoo = null;
    this.pde = null;
    this.qaf = null;
    this.oep = {};
    this.offsetLeft = 0;
    this.offsetTop = 0;
    this.zep = 0;
    this.apo = 0;
    this.ggt = false;
    this.width = 0;
    this.height = 0;
    this.kgk = 0;
    this.ihp = 0;
    this.ngv = 1;
    this.zwd = 1;
    this.vix = false;
    this.qel = false;
    this.style = null;
    this.fbj = null;
    this.rpk = -1;
    this.irg = false;
    this.nqx = false;
    this.cij = false;
    this.kbk = false;
    this.ksa = false;
    this.vti = false;
    this.pey = false;
    this.ime = false;
    this.che = "";
    this.fnh = "";
    this.veh = "";
    this.qpn = "";
    this.vju = "";
    this.xin = "";
    this.wfb = "1_1_60";
    try {
        if (cun.emv.value19) {
            this.che = sessionStorage.sessionValue2;
            this.fnh = sessionStorage.sessionValue2
        } else {
            var c = a("hash");
            if (c != "") {
                sessionStorage.sessionValue2 = c
            }
            if (sessionStorage.sessionValue2 != "freeplay") {
                this.veh = sessionStorage.sessionValue2
            } else {
                this.che = sessionStorage.sessionValue2;
                this.fnh = sessionStorage.sessionValue2;
                if (a("w") != "") {
                    this.veh = sessionStorage.sessionValue2
                } else {
                    this.veh = ""
                }
            }
        }
    } catch (b) {}
    this.rxg = null;
    this.iqx = null;
    this.nfw = false;
    this.mnx = null;
    this.gai = null;
    this.dan = null;
    this.qur = true;
    this.pno = [0, 0.5, 1];
    try {
        if (sessionStorage.sessionValue6) {
            if (sessionStorage.sessionValue6 == "false") {
                this.vss = 0
            } else {
                if (sessionStorage.sessionValue6 == "true") {
                    this.vss = this.pno.length - 1
                } else {
                    this.vss = Number(sessionStorage.sessionValue6)
                }
            }
        } else {
            this.vss = this.pno.length - 1
        }
    } catch (b) {
        this.vss = 0
    }
    this.yyf = 0;
    this.language = new dyf();
    this.ocz = 0;
    this.cqw = 1;
    this.cpk = this.cqw;
    this.jzx = [cun.gro.ouo, cun.gro.mmk, cun.gro.nmb];
    this.vsp = (cun.hfb.xbl()) ? 0 : this.jzx.length - 1;
    try {
        if (localStorage.localValue1) {
            this.vsp = Number(localStorage.localValue1);
            if (!cun.hfb.xbl() && this.jzx[this.vsp] === cun.gro.ouo) {
                this.vsp = this.jzx.length - 1
            }
        }
    } catch (b) {}
    this.cfs = false;
    this.fhe = "";
    this.fcq = "";
    this.yet = 0;
    this.state = 0;
    this.hwu = false;
    this.qvc = 5000;
    this.pxv = 0;
    this.cpc = 0;
    this.ssl = 0;
    this.eqo = 0;
    this.lrw = false;
    this.fed = false;
    this.lvo = false;
    this.ihh = null;
    this.xii = 0;
    this.xue = 0;
    this.xee = 0;
    this.lqe = -1;
    this.qbk = -1;
    this.wts = 0;
    this.stu = null;
    this.kyq = [];
    this.qjs = [];
    this.qmi = null;
    this.dna = false;
    this.hek = 0;
    this.qpa = 0;
    this.eby = false;

    function a(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var d = "[\\?&]" + e + "=([^&#]*)";
        var g = new RegExp(d);
        var f = g.exec(window.location.href);
        if (f == null) {
            return ""
        } else {
            return f[1]
        }
    }
    this.llb = function(d) {
        this.zqp();
        cun.hfb.umu();
        cun.hfb.tac();
        this.uuv();
        if (!this.lrw) {
            this.qzn()
        }
        this.qvs(this.lwl(d.fbj));
        this.tol();
        this.fgb();
        this.ycm();
        this.rkj();
        this.clp();
        this.lmo();
        this.wof();
        this.deu();
        this.wnf();
        this.muo();
        return this
    };
    this.ycm = function() {};
    this.zqp = function() {};
    this.deu = function() {
        try {
            if (cun.emv.value64 && !this.lvo) {
                this.mnx = new dfm();
                this.mnx.connect("ws://127.0.0.1:2001/vltclient")
            }
        } catch (d) {
            console.error("Can not connect to terminal!")
        }
    };
    this.uuv = function() {
        try {
            var j = a("exit");
            if (j != "") {
                sessionStorage.sessionValue5 = j
            }
            if ((!sessionStorage.sessionValue5 || sessionStorage.sessionValue5 == "null") && cun.emv.value8) {
                sessionStorage.sessionValue5 = cun.emv.value8
            }
            var p = a("curr");
            if (p != "") {
                sessionStorage.sessionValue8 = p
            }
            if (sessionStorage.sessionValue8 && sessionStorage.sessionValue8 != "") {
                this.xin = sessionStorage.sessionValue8;
                if (cun.emv.value72) {
                    var o = cun.emv.value72[this.xin];
                    if (cun.emv.value21.e === true && o) {
                        cun.emv.value21.s = o.s;
                        cun.emv.value21.m = o.m;
                        cun.emv.value21.ts = o.ts;
                        cun.emv.value21.cs = o.cs
                    }
                    if (cun.emv.value76 && cun.emv.value76.f === true && o) {
                        cun.emv.value76.s = o.s;
                        cun.emv.value76.m = o.m;
                        cun.emv.value76.ts = o.ts;
                        cun.emv.value76.cs = o.cs
                    }
                }
            }
            if (this.lhw()) {
                sessionStorage.sessionValue7 = ""
            }
            var d = a("w");
            if (d != "") {
                sessionStorage.sessionValue7 = d
            }
            if (sessionStorage.sessionValue7 && sessionStorage.sessionValue7 != "") {
                this.vju = sessionStorage.sessionValue7
            }
            var f = a("scale");
            if (f == "proportional" || f == "default") {
                sessionStorage.sessionValue22 = f
            }
            var r = a("fullscreen");
            if (r != "") {
                sessionStorage.sessionValue14 = r
            }
            if (sessionStorage.sessionValue14 != "true" && sessionStorage.sessionValue14 != "false") {
                sessionStorage.sessionValue14 = (cun.hfb.qza) ? cun.emv.value51.m : cun.emv.value51.d
            }
            var i = a("sessionTime");
            if (i != "") {
                sessionStorage.sessionValue15 = i
            }
            if (sessionStorage.sessionValue15 != "true" && sessionStorage.sessionValue15 != "false") {
                sessionStorage.sessionValue15 = cun.emv.value11
            }
            var t = a("realityCheckURL");
            if (t != "") {
                sessionStorage.sessionValue16 = t
            }
            var n = a("realityCheckTime");
            if (n != "") {
                sessionStorage.sessionValue17 = n
            }
            if (cun.emv.value39 > 0) {
                sessionStorage.sessionValue17 = cun.emv.value39
            }
            var s = a("loggedInTime");
            if (sessionStorage.sessionValue18 != null) {
                var g = sessionStorage.sessionValue18.split(";");
                if (g.length == 2) {
                    this.hek = Number(g[0]);
                    this.qpa = Number(g[1])
                }
            }
            if (s != "") {
                if (Number(s) != this.qpa) {
                    this.qpa = Number(s);
                    this.hek = new Date().getTime() - (this.qpa * 1000);
                    sessionStorage.sessionValue18 = this.hek + ";" + this.qpa
                }
            }
            if (cun.emv.value86 === true) {
                var q = a("selfTestURL");
                if (q != "") {
                    sessionStorage.sessionValue19 = q
                }
                var m = a("limitsURL");
                if (m != "") {
                    sessionStorage.sessionValue20 = m
                }
                var l = a("pauseURL");
                if (l != "") {
                    sessionStorage.sessionValue21 = l
                }
            }
        } catch (k) {
            console.error(k.ute)
        }
    };
    this.wof = function() {
        if (!(cun.hfb.afy == cun.os.dac && cun.hfb.vki == cun.dkv.sln)) {
            document.ontouchstart = cun.qrf.nek
        }
        if (cun.hfb.vki != cun.dkv.wol && cun.hfb.vki != cun.dkv.sln) {
            document.ontouchmove = cun.qrf.gby;
            document.ontouchend = cun.qrf.kdw
        }
        if (!cun.hfb.swz) {
            document.onmousedown = cun.qrf.adn;
            document.onmouseup = cun.qrf.rle;
            document.onmousemove = cun.qrf.wud
        }
        document.onkeydown = cun.qrf.iuq;
        document.onkeyup = cun.qrf.lna;
        document.oncontextmenu = cun.qrf.owg;
        this.vti = (this.efh() && cun.hfb.dxh() && cun.hfb.qza);
        if (cun.hfb.zcj() === false && cun.hfb.afy === cun.os.xgm && cun.hfb.yhr() === true && screen.width <= 414 && this.apt()) {
            this.wts = setInterval(this.fwa, 1000)
        }
    };
    this.nek = function(d) {
        if (cun.qrf.irg === true) {
            cun.qrf.qkn();
            cun.qrf.yfp()
        }
        cun.qrf.qmq(d)
    };
    this.kdw = function(d) {
        if (cun.qrf.irg === true) {
            if (cun.qrf.vti) {
                cun.qrf.byn()
            } else {
                cun.qrf.vlq(d)
            }
        } else {
            if (cun.qrf.pey) {
                cun.qrf.nhv()
            }
        }
    };
    this.gby = function(d) {
        cun.qrf.wfp(d)
    };
    this.adn = function(d) {
        window.focus();
        if (cun.qrf.irg === true) {
            cun.qrf.qkn();
            cun.qrf.yfp()
        }
        cun.qrf.qmq(d)
    };
    this.rle = function(d) {
        if (cun.qrf.irg === true) {
            cun.qrf.vlq(d)
        }
    };
    this.wud = function(d) {};
    this.iuq = function(d) {
        if ((d.keyCode == 122 && (cun.hfb.afy == cun.os.dyb || cun.hfb.afy == cun.os.qmh)) || (d.keyCode == 70 && d.ctrlKey && cun.hfb.afy == cun.os.xze)) {
            return
        }
        cun.qrf.qkn();
        cun.qrf.yfp();
        cun.qrf.chp(d)
    };
    this.lna = function(d) {
        cun.qrf.cyi(d)
    };
    this.owg = function() {
        return false
    };
    this.qmq = function(d) {};
    this.vlq = function(d) {};
    this.chp = function(d) {};
    this.cyi = function(d) {};
    this.wfp = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        return
    };
    this.pzb = function() {
        var f = cun.qrf.dan.owa("topb"),
            e = cun.qrf.dan.owa("settings"),
            d = cun.qrf.dan.owa("topi"),
            g = cun.qrf.dan.owa("gameb");
        if (cun.hfb.vki == cun.dkv.wol || cun.hfb.vki == cun.dkv.uey) {
            cun.qrf.qel = (window.innerWidth == window.outerWidth)
        } else {
            if (cun.hfb.vki == cun.dkv.lnl || cun.hfb.vki == cun.dkv.ish) {
                cun.qrf.qel = (window.innerHeight >= window.outerHeight)
            } else {
                if (cun.hfb.vki == cun.dkv.tsj) {
                    cun.qrf.qel = (document.fullscreenElement) ? true : false
                } else {
                    if (cun.hfb.qza) {
                        if (cun.hfb.vki == cun.dkv.kem || cun.hfb.vki == cun.dkv.usc || cun.hfb.vki == cun.dkv.voi) {
                            cun.qrf.qel = (document.webkitFullscreenElement) ? true : false
                        } else {
                            if (cun.hfb.vki == cun.dkv.sln) {
                                cun.qrf.qel = (document.mozFullScreenElement) ? true : false
                            }
                        }
                    }
                }
            }
        }
        if (d) {
            d.wqi("fullscreen", cun.qrf.qel)
        }
        if (f) {
            f.mib.bnh("fullscreen", "#wqi", [(cun.qrf.qel) ? 1 : 0])
        }
        if (e) {
            e.mib.bnh("fullscreen", "#wqi", [(cun.qrf.qel) ? 1 : 0])
        }
        if (g) {
            g.mib.bnh("fullscreen", "#wqi", [(cun.qrf.qel) ? 1 : 0])
        }
        cun.qrf.upp();
        cun.qrf.vfq();
        cun.qrf.eqg();
        if (cun.hfb.yhr() === true && cun.hfb.zcj() === false) {
            document.body.style.height = "5000px"
        }
        if (!cun.hfb.zcj() && cun.hfb.vki === cun.dkv.voi && cun.qrf.apo < screen.width) {
            window.scrollTo(0, 0)
        }
    };
    this.lyq = function() {
        cun.qrf.pzb();
        cun.qrf.fwa()
    };
    this.fwa = function() {
        if (cun.hfb.yhr() === true && cun.hfb.zcj() === false) {
            if (cun.qrf.apt() === true) {
                var f = document.getElementById("slideUpOverlay"),
                    e = document.getElementById("slideElem1"),
                    d = document.getElementById("slideElem2");
                if (f && e && d) {
                    if (window.innerHeight < screen.width) {
                        e.className = "slideUpAnim1";
                        d.className = "slideUpAnim2";
                        f.style.display = "block";
                        document.ontouchstart = null;
                        document.ontouchend = null;
                        document.ontouchmove = null;
                        if (window.ontouchmove == null) {
                            cun.qrf.pzb();
                            window.ontouchmove = cun.qrf.lyq
                        }
                    } else {
                        e.className = null;
                        d.className = null;
                        f.style.display = "none";
                        document.ontouchstart = cun.qrf.nek;
                        document.ontouchmove = cun.qrf.gby;
                        document.ontouchend = cun.qrf.kdw;
                        if (window.ontouchmove != null) {
                            cun.qrf.pzb();
                            window.ontouchmove = null
                        }
                        window.scrollTo(0, 0)
                    }
                }
            }
        }
    };
    this.ggh = function(g) {
        var j = document.getElementById("rotateOverlay"),
            e = document.getElementById("rotatePanel"),
            k = document.getElementById("rotate"),
            f = document.getElementById("rotateInfo"),
            d = 500,
            l = 700,
            n = window.innerHeight / d,
            m = window.innerWidth / l,
            i = (n < m) ? n : m;
        if (j && k) {
            if (g === true) {
                if (i < 1) {
                    cun.hfb.cxk(e, i, i)
                }
                f.innerHTML = cun.qrf.language.mzr;
                k.className = "rotateAnim";
                j.style.display = "block";
                cun.qrf.ksa = true
            } else {
                j.style.display = "none";
                k.className = null;
                cun.qrf.ksa = false
            }
        }
    };
    this.epr = function() {
        var d = cun.qrf.dan.owa("settings");
        cun.qrf.pzb();
        if (d) {
            d.mib.bnh("adjustment", "#wqi", [(cun.qrf.rpk === cun.fbj.zqk) ? 0 : 1]);
            d.ksl()
        }
        if (cun.qrf.cfs === true) {
            cun.qrf.ksa = true;
            cun.qrf.rsg(true);
            cun.qrf.ggh(true)
        } else {
            cun.qrf.ksa = false;
            cun.qrf.rsg((cun.qrf.pno[cun.qrf.vss] === 0));
            cun.qrf.ggh(false)
        }
    };
    this.upp = function() {
        this.zep = window.innerWidth, this.apo = window.innerHeight;
        this.ggt = false;
        if (cun.hfb.zcj() == true && cun.emv.value69 === true) {
            if (cun.hfb.zcn() === true) {
                this.ggt = true;
                this.zep = (window.innerWidth > window.outerWidth) ? window.outerWidth : window.innerWidth;
                this.apo = (window.innerHeight > window.outerHeight) ? window.outerHeight : window.innerHeight;
                if (this.zep > this.apo) {
                    this.apo *= 0.98
                }
            } else {
                if (cun.hfb.yhr() === true) {
                    this.ggt = true;
                    if (window.orientation === 90 || window.orientation === -90) {
                        if (screen.height === 1024) {
                            this.zep = 1024;
                            this.apo = (window.innerHeight < 704) ? 662 : 704
                        } else {
                            if (screen.height === 736) {
                                this.zep = 736;
                                this.apo = (window.innerHeight < 414 || window.innerHeight === 475) ? 370 : 414
                            } else {
                                if (screen.height === 667) {
                                    this.zep = 667;
                                    this.apo = 375
                                }
                            }
                        }
                    } else {
                        if (screen.height === 1024) {
                            this.zep = 768;
                            this.apo = (window.innerHeight < 960) ? 928 : 960
                        } else {
                            if (screen.height === 736) {
                                this.zep = 414;
                                this.apo = 628
                            } else {
                                if (screen.height === 667) {
                                    this.zep = 375;
                                    this.apo = 559
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.eqg = function() {
        var g = 0,
            j = 0,
            f = 1,
            e = 1,
            i = this.zep,
            d = this.apo;
        this.vix = (this.qel || i < this.width || d < this.height || this.fbj.uux);
        g = this.ysv(this.vix);
        f = ((i - j) / this.width).toString();
        f = Number(f.substring(0, (f.length > 5) ? 5 : f.length));
        e = ((d - g) / this.height).toString();
        e = Number(e.substring(0, (e.length > 5) ? 5 : e.length));
        if (this.vix) {
            if (this.fbj.zgj || sessionStorage.sessionValue22 == "proportional") {
                if (f > e) {
                    this.ngv = e;
                    this.zwd = e
                } else {
                    this.ngv = f;
                    this.zwd = f
                }
            } else {
                this.ngv = f;
                this.zwd = e
            }
        } else {
            this.ngv = 1;
            this.zwd = 1
        }
        cun.hfb.cxk(this.canvas, this.ngv, this.zwd);
        if (this.vaa != null) {
            cun.hfb.cxk(this.vaa, this.ngv, this.zwd, ((this.fbj.vaa.enh.x) - ((this.fbj.vaa.enh.x + this.fbj.vaa.ueo) / 2 * (1 - this.ngv))), ((this.fbj.vaa.enh.y) - ((this.fbj.vaa.enh.y + this.fbj.vaa.ayo) / 2 * (1 - this.zwd))))
        }
        if (this.hoo != null) {
            cun.hfb.cxk(this.hoo, this.ngv, this.zwd)
        }
        if (this.vix) {
            this.offsetLeft = Math.floor((i - (this.canvas.width * this.ngv))) / 2;
            this.offsetTop = Math.floor((d - (this.canvas.height * this.zwd))) / 2
        } else {
            this.offsetLeft = this.waw.offsetLeft;
            this.offsetTop = this.waw.offsetTop
        }
    };
    this.vfq = function() {
        if (this.cvn() === true) {
            var e = null;
            if (this.jzx[this.vsp] === cun.gro.ouo) {
                if (window.orientation === -90) {
                    e = cun.fbj.pmj
                } else {
                    e = cun.fbj.zqk
                }
            } else {
                if (this.jzx[this.vsp] === cun.gro.mmk) {
                    e = cun.fbj.pmj
                } else {
                    if (this.jzx[this.vsp] === cun.gro.nmb) {
                        e = cun.fbj.zqk
                    }
                }
            }
            this.cfs = (this.apo > this.zep);
            this.qvs(e);
            this.zyq(false);
            if (this.kbk === true) {
                this.ksl()
            } else {
                this.dan.bnh("loading", "#ksl")
            }
        } else {
            if (cun.hfb.qza) {
                var f = (this.zep > this.apo) ? this.cqw : this.ocz,
                    d = this.fbj.vsz,
                    e = null;
                if (f != this.cpk) {
                    this.cpk = f;
                    if (this.lrw) {
                        e = (this.cpk == this.cqw) ? cun.fbj.spm : cun.fbj.udj
                    } else {
                        e = (this.cpk == this.cqw) ? cun.emv.value33 : cun.emv.value32
                    }
                    this.qvs(e);
                    this.zyq((d != this.fbj.vsz) || this.lrw);
                    if (this.kbk === true) {
                        if (this.lrw && this.fed) {
                            this.uuq(this.bgr(this.language.fvo))
                        } else {
                            this.ksl()
                        }
                    } else {
                        this.dan.bnh("loading", "#ksl")
                    }
                }
            } else {
                if (!this.lrw) {
                    e = (this.qel) ? cun.emv.value15 : cun.emv.value14;
                    this.qvs(e);
                    this.zyq(false);
                    if (this.kbk === true) {
                        this.ksl()
                    } else {
                        this.dan.bnh("loading", "#ksl")
                    }
                }
            }
        }
    };
    this.cvn = function() {
        return false
    };
    this.apt = function() {
        return false
    };
    this.qvs = function(d) {};
    this.tol = function() {
        this.style = new vxj()
    };
    this.ysv = function(d) {
        var e = 0;
        if (cun.hfb.zcn() && window.innerWidth > window.innerHeight && d) {
            if (this.irg === true && document.body.style.backgroundColor !== this.style.ujy.backgroundColor) {
                document.body.style.backgroundColor = this.style.ujy.backgroundColor
            }
        }
        return e
    };
    this.mrb = function() {
        if (cun.hfb.zcn() && !cun.hfb.zcj() && window.innerWidth > window.innerHeight) {
            return 0
        }
        return 0
    };
    this.qxj = function() {
        return false
    };
    this.rkj = function() {
        if (cun.hfb.swz) {
            this.gai = new sbs()
        } else {
            this.gai = new frs()
        }
        this.gai.llb();
        this.gai.mjm(this.grl())
    };
    this.clp = function() {
        this.dan = new bmn();
        this.dan.llb();
        this.dan.etj("jackpots")
    };
    this.grl = function() {
        var d = new prj();
        d.llb();
        return d
    };
    this.qzn = function() {
        this.ihh = new cfj()
    };
    this.fgb = function() {
        try {
            var d = a("lang"),
                f = a("uselang"),
                o = [],
                p = [];
            if (d != "") {
                sessionStorage.sessionValue1 = d
            }
            if (f != "") {
                sessionStorage.sessionValue11 = f
            }
            if (sessionStorage.sessionValue11) {
                o = sessionStorage.sessionValue11.split(",");
                for (var l = 0, m = o.length; l < m; l++) {
                    for (var k = 0, g = cun.emv.value5.length; k < g; k++) {
                        if (o[l] === cun.emv.value5[k] && p.indexOf(o[l]) < 0) {
                            p.push(o[l])
                        }
                    }
                }
                if (p.length == 0) {
                    p.push(cun.emv.value5[0])
                }
                cun.emv.value5 = [];
                for (var l = 0, m = p.length; l < m; l++) {
                    cun.emv.value5.push(p[l])
                }
            }
            if (sessionStorage.sessionValue1 == null) {
                var q = cun.hfb.bpx();
                if (this.vre(q)) {
                    sessionStorage.sessionValue1 = q
                } else {
                    if (q === cun.language.EN && this.vre(cun.language.US)) {
                        sessionStorage.sessionValue1 = cun.language.US
                    } else {
                        if (q === cun.language.DE && this.vre(cun.language.AT)) {
                            sessionStorage.sessionValue1 = cun.language.AT
                        } else {
                            if (q === cun.language.ES && this.vre(cun.language.MX)) {
                                sessionStorage.sessionValue1 = cun.language.MX
                            } else {
                                if (q === cun.language.ES && this.vre(cun.language.CO)) {
                                    sessionStorage.sessionValue1 = cun.language.CO
                                } else {
                                    if (q === cun.language.ES && this.vre(cun.language.CL)) {
                                        sessionStorage.sessionValue1 = cun.language.CL
                                    } else {
                                        if (q === cun.language.ES && this.vre(cun.language.VE)) {
                                            sessionStorage.sessionValue1 = cun.language.VE
                                        } else {
                                            if (q === cun.language.EN && this.vre(cun.language.BR)) {
                                                sessionStorage.sessionValue1 = cun.language.BR
                                            } else {
                                                sessionStorage.sessionValue1 = cun.emv.value5[0]
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.vre(sessionStorage.sessionValue1)) {
                for (var l = 0, m = cun.emv.value5.length; l < m; l++) {
                    if (cun.emv.value5[l] == sessionStorage.sessionValue1) {
                        this.yyf = l;
                        break
                    }
                }
                this.language = this.vge(sessionStorage.sessionValue1)
            } else {
                this.yyf = 0;
                this.language = this.vge(cun.emv.value5[this.yyf]);
                sessionStorage.sessionValue1 = cun.emv.value5[this.yyf]
            }
        } catch (n) {
            this.yyf = 0;
            this.language = this.vge(cun.emv.value5[this.yyf]);
            console.error(n.ute)
        }
    };
    this.wnf = function() {
        var d = (cun.emv.value45 == cun.yoi.pcg) ? this.fbj.yoi.qrf : this.fbj.yoi.kub;
        this.waw = document.getElementById("gameArea");
        if (this.ggt === false) {
            this.waw.style.marginTop = (-d.enh.height / 2) + "px";
            this.waw.style.marginLeft = (-d.enh.width / 2) + "px"
        } else {
            this.waw.style.left = "0px";
            this.waw.style.top = "0px";
            this.waw.style.marginTop = ((window.innerHeight - d.enh.height) / 2) + "px";
            this.waw.style.marginLeft = ((window.innerWidth - d.enh.width) / 2) + "px"
        }
        this.waw.style.width = (d.enh.width > window.innerWidth) ? window.innerWidth + "px" : d.enh.width + "px";
        this.waw.style.height = (d.enh.height > window.innerHeight) ? window.innerHeight + "px" : d.enh.height + "px";
        this.canvas = document.getElementById("canvas");
        this.canvas.width = Math.round(d.enh.width);
        this.canvas.height = Math.round(d.enh.height);
        this.context2D = this.canvas.getContext("2d");
        this.hoo = document.getElementById("gameOverlay");
        if (this.hoo) {
            this.hoo.style.width = d.enh.width + "px";
            this.hoo.style.height = d.enh.height + "px"
        }
        this.hwf(d)
    };
    this.hwf = function(e) {
        var f = new xac(),
            d = (cun.emv.value45 == cun.yoi.pcg) ? this.style.yoi.qrf : this.style.yoi.kub;
        f.llb(e.enh, this.context2D);
        f.parent = this;
        f.ktx = (cun.hfb.qza) ? this.scc : this.nhv;
        f.dei = (this.lrw) ? this.language.hzv : this.language.trr;
        f.uvd = this.language.error;
        f.vpj(e);
        f.dku(d);
        this.dan.byd("loading", f)
    };
    this.mrt = function() {
        var d = new hzy();
        d.llb(this.fbj.tex.enh, null, this.context2D);
        d.parent = this;
        d.vpj(this.fbj.tex);
        d.dku(this.style.tex);
        if (sessionStorage.sessionValue15 == "true" && cun.emv.value49) {
            d.qwg("time", "", "--:-- [--:--]")
        } else {
            if (sessionStorage.sessionValue15 == "true" || cun.emv.value49) {
                d.qwg("time", "", "--:--")
            }
        }
        if (this.lhw()) {
            d.qwg("freeplay", "", this.language.wfj)
        } else {
            d.qwg("id", "", "")
        }
        this.dan.byd("topi", d)
    };
    this.jyo = function() {
        var d = new nvs();
        d.llb(this.fbj.hbz.enh, null, this.context2D);
        d.parent = this;
        d.vpj(this.fbj.hbz);
        d.dku(this.style.hbz, false);
        d.cbi(false);
        this.dan.byd("topb", d)
    };
    this.kii = function() {};
    this.yyz = function() {
        var d = new qtm();
        d.llb(this.fbj.baa.enh, null, this.context2D);
        d.parent = this;
        d.ajo(this.fbj.baa);
        d.dku(this.style.baa);
        d.cbi(false);
        this.dan.byd("stats", d)
    };
    this.bjq = function() {
        this.pde = new xaw();
        this.pde.llb();
        this.pde.dku(this.style.pde);
        this.pde.vpj(this.fbj.pde)
    };
    this.xbv = function() {
        this.qaf = new dnp();
        this.qaf.llb();
        this.qaf.dku(this.style.qaf);
        this.qaf.vpj(this.fbj.qaf)
    };
    this.ptu = function() {
        if (this.mod()) {
            this.oep.kae = document.getElementById("jurisdictionDiv");
            this.oep.kre = document.getElementById("btnsp");
            this.oep.cjs = document.getElementById("btnsl");
            this.oep.iwn = document.getElementById("btnst");
            if (this.oep.kre) {
                this.oep.kre.innerHTML = this.language.mvb;
                this.oep.kre.onclick = this.khr;
                this.oep.kre.ontouchend = this.khr
            }
            if (this.oep.cjs) {
                this.oep.cjs.innerHTML = this.language.vpo;
                this.oep.cjs.onclick = this.iko;
                this.oep.cjs.ontouchend = this.iko
            }
            if (this.oep.iwn) {
                this.oep.iwn.innerHTML = this.language.tsg;
                this.oep.iwn.onclick = this.otv;
                this.oep.iwn.ontouchend = this.otv
            }
            this.zbv();
            this.ycg()
        }
    };
    this.qsx = function(e) {
        var d = new jdq();
        d.llb(this.fbj.ecl.enh, null, this.context2D);
        d.parent = this;
        d.sif = true;
        if (e) {
            d.sww(e)
        }
        d.ajo(this.fbj.ecl);
        d.nhz(this.language);
        d.dku(this.style.ecl);
        d.vpj(this.fbj.ecl);
        d.cbi(false);
        this.dan.byd("autop", d)
    };
    this.rzj = function(d) {
        var e = new ibx();
        e.llb(this.fbj.csu.enh, null, this.context2D);
        e.parent = this;
        if (d) {
            e.yzy(d)
        }
        e.cbi(false);
        this.dan.byd("settings", e)
    };
    this.zyq = function(d) {};
    this.ltr = function() {
        var d = this.dan.owa("stats");
        if (d) {
            d.eda(this.fbj.baa.enh);
            d.vpj(this.fbj.baa)
        }
    };
    this.tdq = function() {
        if (this.pde) {
            this.pde.vpj(this.fbj.pde)
        }
    };
    this.jvw = function() {
        if (this.qaf) {
            this.qaf.vpj(this.fbj.qaf)
        }
    };
    this.zbv = function() {
        var d = null,
            e = 0;
        if (this.oep) {
            d = this.fbj.nug;
            if (this.oep.kae) {
                cun.hfb.mci(this.oep.kae, d.ihw)
            }
            if (this.oep.kre) {
                this.oep.kre.style.fontSize = d.dwb.fontSize + "px";
                this.oep.kre.style.textIndent = d.dwb.textIndent + "px";
                cun.hfb.mci(this.oep.kre, d.kuk)
            }
            if (this.oep.cjs) {
                this.oep.cjs.style.fontSize = d.dwb.fontSize + "px";
                this.oep.cjs.style.textIndent = d.dwb.textIndent + "px";
                cun.hfb.mci(this.oep.cjs, d.gft)
            }
            if (this.oep.iwn) {
                this.oep.iwn.style.fontSize = d.dwb.fontSize + "px";
                this.oep.iwn.style.textIndent = d.dwb.textIndent + "px";
                cun.hfb.mci(this.oep.iwn, d.xxy)
            }
            if (this.oep.kae) {
                e = (d.ihw.width - d.ihw.height) / 2;
                if (this.rpk == cun.fbj.pmj) {
                    this.oep.kae.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + e + "px)"
                } else {
                    this.oep.kae.style.transform = "rotate(-90deg) translate(" + (-e) + "px, " + (-e) + "px)"
                }
            }
        }
    };
    this.xqt = function() {
        var d = this.dan.owa("autop");
        if (d) {
            d.eda(this.fbj.ecl.enh);
            d.vpj(this.fbj.ecl)
        }
    };
    this.wjw = function() {
        var d = this.dan.owa("settings");
        if (d) {
            d.eda(this.fbj.csu.enh);
            d.vpj(this.fbj.csu)
        }
    };
    this.kjk = function() {
        var d = this.dan.owa("topi");
        if (d) {
            d.eda(this.fbj.tex.enh);
            d.vpj(this.fbj.tex)
        }
    };
    this.bmo = function() {
        var d = this.dan.owa("topb");
        if (d) {
            d.eda(this.fbj.hbz.enh);
            d.vpj(this.fbj.hbz)
        }
    };
    this.zuq = function() {
        var e = this.dan.owa("loading"),
            d = (cun.emv.value45 == cun.yoi.pcg) ? this.fbj.yoi.qrf : this.fbj.yoi.kub;
        if (e) {
            this.canvas.width = 0;
            if (this.ggt === false) {
                this.waw.style.marginTop = (-d.enh.height / 2) + "px";
                this.waw.style.marginLeft = (-d.enh.width / 2) + "px"
            } else {
                this.waw.style.left = "0px";
                this.waw.style.top = "0px";
                this.waw.style.marginTop = ((this.apo - d.enh.height) / 2) + "px";
                this.waw.style.marginLeft = ((this.zep - d.enh.width) / 2) + "px"
            }
            this.waw.style.width = (d.enh.width > this.zep) ? this.zep + "px" : d.enh.width + "px";
            this.waw.style.height = (d.enh.height > this.apo) ? this.apo + "px" : d.enh.height + "px";
            this.canvas.width = Math.round(d.enh.width);
            this.canvas.height = Math.round(d.enh.height);
            if (this.hoo) {
                this.hoo.style.width = d.enh.width + "px";
                this.hoo.style.height = d.enh.height + "px"
            }
            e.eda(d.enh);
            e.vpj(d)
        }
    };
    this.lmo = function() {
        if (cun.hfb.qza && !cun.hfb.swz) {
            if (!this.gai.lud && cun.hfb.vki != cun.dkv.gse) {
                this.qur = false;
                this.vss = 0
            }
        }
    };
    this.lwl = function(d) {
        if (cun.hfb.qza) {
            if (!this.lrw) {
                return cun.fbj.mlm
            } else {
                if (!this.lvo) {
                    return cun.fbj.spm
                }
            }
        }
        return d
    };
    this.bxo = function() {
        var d = this.dan.owa("loading");
        this.pzb();
        if (d) {
            d.ctm = true
        }
        if ((cun.hfb.vki === cun.dkv.kem || cun.hfb.vki === cun.dkv.ish || cun.hfb.vki === cun.dkv.ppa) && cun.hfb.afy === cun.os.dac && cun.hfb.svo === true) {
            if (this.gai.lud === false || cun.hfb.dxh() === false || cun.hfb.tsy() === false) {
                cun.ske = cun.aqy.kpj
            }
        }
        if (cun.ske == 0) {
            if (this.qur === true && cun.hfb.fxs().length === 0) {
                this.qur = false
            }
            if (d) {
                d.ksl(0)
            }
            this.gvo();
            if (this.qur === true) {
                this.roe()
            }
            this.gai.start()
        } else {
            if (d) {
                if (cun.ske == cun.aqy.idb && cun.hfb.vki === cun.dkv.voi) {
                    d.aip = this.language.jqu;
                    d.ksl(0)
                } else {
                    if (cun.ske == cun.ute.prv) {
                        d.aip = this.language.fkd;
                        d.ksl(0)
                    } else {
                        d.aip = this.language.zrp;
                        if (cun.hfb.afy === cun.os.dac || cun.hfb.afy === cun.os.qmh) {
                            if (cun.ske != cun.aqy.idb && sessionStorage.sessionValue1 === cun.language.TR) {
                                d.aip += "|Google Chrome" + this.language.sft
                            } else {
                                if (cun.ske != cun.aqy.idb && (sessionStorage.sessionValue1 === cun.language.GE || sessionStorage.sessionValue1 === cun.language.HU)) {
                                    d.aip += "|" + this.language.tli + " Google Chrome" + this.language.wmt
                                } else {
                                    d.aip += "|" + this.language.sft + " Google Chrome"
                                }
                            }
                        } else {
                            if (cun.hfb.afy === cun.os.dyb || cun.hfb.afy === cun.os.qmh) {
                                if (cun.ske != cun.aqy.idb && sessionStorage.sessionValue1 === cun.language.TR) {
                                    d.aip += "|Google Chrome, Mozilla Firefox" + this.language.sft
                                } else {
                                    if (cun.ske != cun.aqy.idb && (sessionStorage.sessionValue1 === cun.language.GE || sessionStorage.sessionValue1 === cun.language.HU)) {
                                        d.aip += "|" + this.language.tli + " Google Chrome, Mozilla Firefox" + this.language.wmt
                                    } else {
                                        d.aip += "|" + this.language.sft + " Google Chrome, Mozilla Firefox"
                                    }
                                }
                            }
                        }
                        console.error("Errorcode: " + cun.ske);
                        d.ksl(0)
                    }
                }
            }
        }
    };
    this.gvo = function() {};
    this.roe = function() {};
    this.muo = function() {
        var e = this.jcn + this.fbj.type + "/",
            d = this.dan.owa("loading");
        if (!this.lrw) {
            this.gai.mhy("continue", cun.emv.value30 + "/basic/images/" + this.fbj.type + "/btn_continue.png")
        }
        if (cun.emv.value45 == cun.yoi.pcg) {
            e += "load.jpg"
        } else {
            if (cun.emv.value45 == cun.yoi.glg) {
                e += "load_amanet.jpg"
            }
        }
        if (e.indexOf(".png") >= 0) {
            if (d) {
                d.sfa = true
            }
        }
        this.gai.mhy("splash", e);
        this.gai.nwl()
    };
    this.aaq = function() {};
    this.vre = function(e) {
        for (var d = 0; d < cun.emv.value5.length; d++) {
            if (cun.emv.value5[d] == e) {
                return true
            }
        }
        return false
    };
    this.vez = function() {
        cun.qrf.nqx = true;
        if (!cun.qrf.lrw) {
            cun.qrf.qdm();
            if (cun.qrf.uhz()) {
                cun.qrf.ueg()
            }
        } else {
            cun.qrf.akb()
        }
        cun.qrf.connect()
    };
    this.qdm = function() {};
    this.akb = function() {};
    this.connect = function() {
        this.rxg.connect(this.fhe, this.che, this.fnh, this.veh, this.wfb, this.vju, this.xin)
    };
    this.tuo = function(d) {
        if (typeof d === "undefined") {
            cun.qrf.rxg.tuo(0)
        } else {
            cun.qrf.rxg.tuo(d)
        }
    };
    this.epg = function(d) {
        this.cpc = 0;
        this.ssl = 0;
        this.eqo = d;
        clearInterval(this.xii);
        this.xii = setInterval(this.ntl, 1000)
    };
    this.ntl = function() {
        var d = cun.qrf.dan.owa("loading");
        cun.qrf.cpc++;
        cun.qrf.ssl = Math.round(cun.emv.value47 / 1000) - cun.qrf.cpc;
        cun.qrf.ssl = (cun.qrf.ssl > 0) ? cun.qrf.ssl : 0;
        if (!cun.qrf.irg) {
            if (d) {
                d.aip = cun.qrf.language.psy + "|" + cun.qrf.language.cqa + ": " + cun.qrf.eqo + " (" + cun.qrf.ssl + " sec)";
                d.ksl(0)
            }
        }
    };
    this.wqz = function() {
        return cun.emv.value74
    };
    this.ksl = function(d, g, e, f) {};
    this.fus = function() {
        return (this.kbk === true && this.irg === true && this.cfs === false)
    };
    this.uuq = function(e) {
        var d = this.dan.owa("history");
        this.kbk = true;
        if (this.irg) {
            if (this.fbj.ivp) {
                cun.hfb.roz(this.context2D, this.fbj.qrf.enh.x - this.fbj.qrf.bao, this.fbj.qrf.enh.y - this.fbj.qrf.bao, this.fbj.qrf.enh.width + 2 * this.fbj.qrf.bao, this.fbj.qrf.enh.height + 2 * this.fbj.qrf.bao, "black", 1)
            }
            cun.hfb.abt(this.context2D, e, "white", this.fbj.qrf.enh.x, this.fbj.qrf.enh.y, this.fbj.qrf.enh.width, this.fbj.qrf.enh.height, "arial", 28, "bold");
            if (d) {
                d.ksl()
            }
        }
    };
    this.etv = function() {
        if (cun.qrf.pde) {
            cun.qrf.pde.slm()
        }
        cun.qrf.acu(false);
        cun.qrf.enj.qla(false);
        cun.qrf.enj.mib.bnh("exit", "#eyu", [true]);
        if (cun.hfb.nrg()) {
            cun.hfb.mvf();
            setTimeout(cun.qrf.pzb, 1400)
        }
        if (cun.emv.value67 > 0) {
            cun.qrf.tuo(cun.emv.value67)
        } else {
            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null" && cun.qrf.qmi) {
                cun.qrf.qmi.kzx({
                    sender: cun.qrf.fhe,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                });
                window.location.href = decodeURIComponent(sessionStorage.sessionValue16)
            } else {
                if (sessionStorage.sessionValue5 && sessionStorage.sessionValue5 != "null" && cun.qrf.qmi) {
                    cun.qrf.qmi.sax({
                        sender: cun.qrf.fhe,
                        lang: sessionStorage.sessionValue1.toUpperCase()
                    });
                    if (sessionStorage.sessionValue5 !== "(api)") {
                        window.location.href = decodeURIComponent(sessionStorage.sessionValue5)
                    }
                }
            }
        }
    };
    this.rkh = function() {
        clearTimeout(cun.qrf.lqe);
        cun.qrf.acu(false);
        if (cun.qrf.enj) {
            cun.qrf.enj.qla(false)
        }
        if (!cun.qrf.lrw) {
            cun.qrf.stop();
            if (cun.qrf.enj) {
                cun.qrf.enj.mib.bnh("info", "#wvl", [cun.qrf.language.gaj]);
                cun.qrf.ksl()
            }
            if (cun.qrf.cvn() === true && cun.hfb.nrg()) {
                cun.hfb.mvf();
                setTimeout(cun.qrf.pzb, 800);
                setTimeout(cun.qrf.rxg.ipr.close, 800)
            } else {
                cun.qrf.rxg.ipr.close()
            }
        } else {
            cun.qrf.rxg.close()
        }
    };
    this.tgz = function() {
        cun.qrf.vti = true
    };
    this.byn = function() {
        if (cun.hfb.qza == true) {
            if (cun.qrf.vti == true) {
                cun.qrf.vti = false;
                cun.hfb.mvf();
                setTimeout(cun.qrf.pzb, 1400)
            }
        } else {
            cun.hfb.mvf();
            setTimeout(cun.qrf.pzb, 1400)
        }
    };
    this.fqc = function() {
        var e = (cun.qrf.cvn() === true) ? "smartphone" : "desktop",
            i = "en";
        if (sessionStorage.sessionValue1 == cun.language.ES || sessionStorage.sessionValue1 == cun.language.CO || sessionStorage.sessionValue1 == cun.language.CL || sessionStorage.sessionValue1 == cun.language.MX || sessionStorage.sessionValue1 == cun.language.VE) {
            i = "es"
        } else {
            if (sessionStorage.sessionValue1 == cun.language.RO) {
                i = "ro"
            } else {
                if (sessionStorage.sessionValue1 == cun.language.PT || sessionStorage.sessionValue1 == cun.language.BR) {
                    i = "pt"
                } else {
                    if (sessionStorage.sessionValue1 == cun.language.HR) {
                        i = "hr"
                    } else {
                        if (sessionStorage.sessionValue1 == cun.language.DE) {
                            i = "de"
                        } else {
                            if (sessionStorage.sessionValue1 == cun.language.SE) {
                                i = "se"
                            }
                        }
                    }
                }
            }
        }
        if (cun.qrf.uzx != "") {
            var f = null,
                g = "",
                d = "";
            if (cun.qrf.uzx != "") {
                g += "rtp=" + cun.qrf.uzx
            }
            if (cun.qrf.ghz != "") {
                g += (cun.qrf.uzx != "") ? "&" : "";
                g += "maxwin=" + ((cun.qrf.ghz == "0") ? "0" : cun.qrf.hga(Number(cun.qrf.ghz) * cun.qrf.alz()))
            }
            d = encodeURIComponent(g);
            f = window.open(cun.emv.value30 + "/gamerules/" + i + "/" + e + "/" + cun.qrf.fhe.toLowerCase() + ".html?" + d, "_blank", (e === "desktop") ? "width=800,scrollbars=yes" : null);
            if (f == null || typeof f === "undefined") {
                window.location.href = cun.emv.value30 + "/gamerules/" + i + "/" + e + "/" + cun.qrf.fhe.toLowerCase() + ".html?" + d
            }
        }
    };
    this.bwq = function() {
        cun.qrf.nfw = false;
        cun.qrf.akj();
        cun.qrf.iki();
        cun.qrf.qrq()
    };
    this.sdh = function() {
        var d = cun.qrf.dan.owa("stats");
        if (d) {
            d.nol(true, true)
        }
        cun.qrf.iqx.close(true)
    };
    this.zkw = function() {
        var d = cun.qrf.dan.owa("stats");
        cun.qrf.stop();
        if (d && d.bsl()) {
            d.nol(true, true)
        }
        cun.qrf.rxg.ipr.close();
        if (cun.qrf.iqx) {
            cun.qrf.iqx.close(false)
        }
    };
    this.dbj = function() {
        clearTimeout(cun.qrf.lqe);
        cun.qrf.enj.qla(false);
        cun.qrf.stop();
        cun.qrf.rxg.ipr.avl()
    };
    this.zbb = function() {
        if (cun.qrf.fed) {
            return
        }
        var d = cun.qrf.dan.owa("history");
        if (d) {
            d.qla(false)
        }
        cun.qrf.stop();
        cun.qrf.rxg.drh(cun.qrf.yet)
    };
    this.mty = function() {
        if (cun.qrf.fed) {
            return
        }
        var d = cun.qrf.dan.owa("history");
        if (d) {
            d.qla(false)
        }
        cun.qrf.stop();
        cun.qrf.rxg.mwg(cun.qrf.yet)
    };
    this.rcs = function() {
        var d = cun.qrf.dan.owa("history");
        if (d) {
            d.qla(false)
        }
        cun.qrf.stop();
        clearInterval(cun.qrf.wts);
        cun.qrf.ftj();
        cun.qrf.rxg.close()
    };
    this.osk = function() {
        cun.qrf.gai.ykp("btn");
        cun.qrf.gai.vsj("btn");
        cun.qrf.dcs()
    };
    this.ydn = function() {
        var f = cun.qrf.dan.owa("topb"),
            e = cun.qrf.dan.owa("settings"),
            g = cun.qrf.dan.owa("gameb"),
            d = cun.qrf.dan.owa("topi");
        if (webAudioEngine && webAudioEngine.state == "suspended") {
            webAudioEngine.resume()
        }
        if (cun.qrf.gai.lud === true) {
            cun.qrf.vss = (cun.qrf.vss === cun.qrf.pno.length - 1) ? 0 : cun.qrf.vss + 1;
            cun.qrf.dzj(cun.qrf.pno[cun.qrf.vss])
        } else {
            cun.qrf.vss = (cun.qrf.vss === cun.qrf.pno.length - 1) ? 0 : cun.qrf.pno.length - 1;
            cun.qrf.rsg((cun.qrf.pno[cun.qrf.vss] === 0))
        }
        sessionStorage.sessionValue6 = cun.qrf.vss;
        if (cun.qrf.pno[cun.qrf.vss] > 0) {
            cun.qrf.gai.vsj("audioon")
        }
        if (d) {
            d.zbo("audio", cun.qrf.pno[cun.qrf.vss])
        }
        if (f) {
            f.mib.bnh("audio", "#wqi", [cun.qrf.vss])
        }
        if (e) {
            e.mib.bnh("audio", "#wqi", [cun.qrf.vss])
        }
        if (g) {
            g.mib.bnh("audio", "#wqi", [cun.qrf.vss])
        }
        cun.qrf.ksl()
    };
    this.scc = function() {
        cun.qrf.pey = true
    };
    this.nhv = function() {};
    this.lke = function() {
        var d = cun.qrf.dan.owa("settings");
        if (d) {
            if (d.bsl()) {
                cun.qrf.xvk()
            } else {
                cun.qrf.mvm()
            }
            cun.qrf.gai.vsj("btn");
            if (cun.qrf.fbj.tlc === false) {
                cun.qrf.enj.mib.bnh("setting", "#ofd", [d.bsl()])
            }
        }
    };
    this.vai = function() {
        var d = cun.qrf.dan.owa("settings"),
            e = "";
        cun.qrf.vsp = (cun.qrf.vsp < cun.qrf.jzx.length - 1) ? cun.qrf.vsp + 1 : (cun.hfb.xbl()) ? 0 : 1;
        localStorage.localValue1 = cun.qrf.vsp;
        cun.qrf.pzb();
        if (d) {
            d.mib.bnh("adjustment", "#wqi", [(cun.qrf.rpk === cun.fbj.zqk) ? 0 : 1]);
            if (cun.qrf.jzx[cun.qrf.vsp] === cun.gro.mmk) {
                e = cun.qrf.language.left
            } else {
                if (cun.qrf.jzx[cun.qrf.vsp] === cun.gro.nmb) {
                    e = cun.qrf.language.mtg
                } else {
                    if (cun.qrf.jzx[cun.qrf.vsp] === cun.gro.ouo) {
                        e = cun.qrf.language.koi
                    }
                }
            }
            d.mib.bnh("adjustment", "#bzf", [e])
        }
    };
    this.khr = function() {
        if (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue21)
        }
    };
    this.iko = function() {
        if (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue20)
        }
    };
    this.otv = function() {
        if (sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") {
            window.location.href = decodeURIComponent(sessionStorage.sessionValue19)
        }
    };
    this.ijl = function(e, d) {
        this.enj.mib.bnh("creditd", "#bzf", [this.hga(e), d])
    };
    this.lhi = function(e, d) {
        if (e > 0) {
            this.enj.mib.bnh("betd", "#bzf", [this.hga(e), d])
        } else {
            this.enj.mib.bnh("betd", "#bzf", ["", d])
        }
    };
    this.irn = function(e) {
        var d = this.dan.owa("topi");
        this.yet = e;
        if (d) {
            d.tym("id", (e > 0) ? e : "")
        }
    };
    this.wsa = function() {
        var e = "",
            d = cun.qrf.dan.owa("topi");
        if (cun.emv.value49) {
            e += cun.qrf.iut()
        }
        if (cun.emv.value49 && sessionStorage.sessionValue15 == "true") {
            e += " ["
        }
        if (sessionStorage.sessionValue15 == "true") {
            e += cun.qrf.cgq()
        }
        if (cun.emv.value49 && sessionStorage.sessionValue15 == "true") {
            e += "]"
        }
        if (d) {
            d.tym("time", e)
        }
    };
    this.cgq = function() {
        return this.getTime(new Date().getTime() - this.fpp)
    };
    this.iut = function() {
        var d = new Date();
        return this.nyo(d.getHours()) + ":" + this.nyo(d.getMinutes())
    };
    this.getTime = function(e) {
        var g = e,
            d = 0,
            f = 0;
        d = Math.floor(e / (60000));
        g = e - d * 60000;
        f = Math.round(g / 1000);
        if (f >= 60) {
            f -= 60;
            d++
        }
        return this.nyo(d) + ":" + this.nyo(f)
    };
    this.nyo = function(d) {
        if (d < 0) {
            return "00"
        } else {
            if (d < 10) {
                return "0" + d
            }
        }
        return d
    };
    this.zmn = function() {
        if (sessionStorage.sessionValue15 == "true" || cun.emv.value49) {
            if (cun.emv.value49) {
                this.iut()
            }
            this.fpp = (this.hek > 0) ? this.hek : new Date().getTime();
            this.wsa();
            this.xue = setInterval(this.wsa, 1000)
        }
    };
    this.cuv = function() {
        clearInterval(this.xue)
    };
    this.jyv = function(d) {
        this.fpp -= d
    };
    this.sdf = function(d, f) {
        var e = this.dan.owa("loading");
        if (e && e.aip == null) {
            if (f && f !== "") {
                e.uvd = f
            } else {
                e.uvd = this.language.error
            }
            e.aip = d;
            e.ksl(this.gai.ohc())
        }
    };
    this.mvm = function() {};
    this.xvk = function() {};
    this.aqt = function() {};
    this.kmv = function() {};
    this.dcs = function() {
        var g = false,
            i = this.dan.owa("topb"),
            f = this.dan.owa("settings"),
            j = this.dan.owa("gameb"),
            d = this.dan.owa("topi");
        this.yyf = (this.yyf + 1 == cun.emv.value5.length) ? 0 : this.yyf + 1;
        sessionStorage.sessionValue1 = cun.emv.value5[this.yyf];
        this.language = this.vge(cun.emv.value5[this.yyf]);
        this.nhz();
        if (i && g == false) {
            var e = i.mib.owa("language");
            if (e) {
                e.wlp(this.ngf(cun.emv.value5[this.yyf]));
                g = true
            }
            i.xmc(true)
        }
        if (f && g == false) {
            var e = f.mib.owa("language");
            if (e) {
                e.wlp(this.ngf(cun.emv.value5[this.yyf]));
                g = true
            }
        }
        if (j && g == false) {
            var e = j.mib.owa("language");
            if (e) {
                e.wlp(this.ngf(cun.emv.value5[this.yyf]));
                g = true
            }
        }
        if (g == false) {
            var e = this.enj.mib.owa("lang");
            if (e) {
                e.rxm = this.ngf(cun.emv.value5[this.yyf])
            }
        }
        if (d) {
            d.wqi("language", sessionStorage.sessionValue1)
        }
        this.ksl()
    };
    this.nhz = function() {};
    this.vge = function(d) {
        if (d == cun.language.EN || d == cun.language.US) {
            return new wew()
        } else {
            if (d == cun.language.ES || d == cun.language.CO || d == cun.language.MX || d == cun.language.CL || d == cun.language.VE) {
                return new oka()
            } else {
                if (d == cun.language.DE || d == cun.language.AT) {
                    return new lju()
                } else {
                    if (d == cun.language.PT || d == cun.language.BR) {
                        return new tkw()
                    } else {
                        if (d == cun.language.RU) {
                            return new nkc()
                        } else {
                            if (d == cun.language.EE) {
                                return new caw()
                            } else {
                                if (d == cun.language.TR) {
                                    return new gks()
                                } else {
                                    if (d == cun.language.CZ) {
                                        return new rhl()
                                    } else {
                                        if (d == cun.language.GR) {
                                            return new pbc()
                                        } else {
                                            if (d == cun.language.BG) {
                                                return new kui()
                                            } else {
                                                if (d == cun.language.GE) {
                                                    return new sec()
                                                } else {
                                                    if (d == cun.language.HU) {
                                                        return new zuf()
                                                    } else {
                                                        if (d == cun.language.RO) {
                                                            return new fue()
                                                        } else {
                                                            if (d == cun.language.FR) {
                                                                return new kww()
                                                            } else {
                                                                if (d == cun.language.HR) {
                                                                    return new hve()
                                                                } else {
                                                                    if (d == cun.language.IT) {
                                                                        return new stk()
                                                                    } else {
                                                                        if (d == cun.language.SE) {
                                                                            return new qlf()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.ngf = function(d) {
        if (d) {
            return this.gai.wxh(d)
        }
        return null
    };
    this.vwo = function() {
        this.gai.icn()
    };
    this.ftj = function() {};
    this.rsg = function(d) {
        this.gai.vmm(d)
    };
    this.dzj = function(d) {
        this.gai.jvp(d)
    };
    this.ifg = function() {
        this.kii();
        var d = this.dan.owa("history");
        this.irg = true;
        this.fed = true;
        if (d) {
            d.usw(true)
        }
        this.uuq(this.bgr(this.language.fvo))
    };
    this.rvf = function() {
        loadGame("hist_" + cun.qrf.fhe.toLowerCase(), cun.emv.value30 + "/" + cun.qrf.fhe.toLowerCase() + "/src/hist_" + cun.qrf.fhe.toLowerCase(), "UTF-8");
        removeGame(cun.qrf.fhe.toLowerCase(), cun.emv.value30 + "/" + cun.qrf.fhe.toLowerCase() + "/src/" + cun.qrf.fhe.toLowerCase())
    };
    this.gfm = function() {
        var d = "./history_" + this.fhe.toLowerCase() + ".html";
        if (sessionStorage.sessionValue12) {
            d += "?config=" + sessionStorage.sessionValue12
        }
        window.location.href = d
    };
    this.orr = function() {
        var d = null;
        if (cun.qrf.lvo) {
            return
        }
        if (sessionStorage.sessionValue5 != null) {
            if (cun.qrf.qmi) {
                cun.qrf.qmi.sax({
                    sender: cun.qrf.fhe,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            sessionStorage.exitGame = "true";
            d = decodeURIComponent(sessionStorage.sessionValue5);
            cun.qrf.moa();
            if (d !== "(api)") {
                window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(cun.qrf.fhe.toLowerCase(), cun.emv.value30 + "/" + cun.qrf.fhe.toLowerCase() + "/src/" + cun.qrf.fhe.toLowerCase());
            removeGame("hist_" + cun.qrf.fhe.toLowerCase(), cun.emv.value30 + "/" + cun.qrf.fhe.toLowerCase() + "/src/hist_" + cun.qrf.fhe.toLowerCase());
            loadMenu("menu", cun.emv.value1001, "UTF-8", true)
        }
    };
    this.ask = function() {
        var d = null;
        if (sessionStorage.sessionValue5 != null) {
            if (cun.qrf.qmi) {
                cun.qrf.qmi.sax({
                    sender: cun.qrf.fhe,
                    lang: sessionStorage.sessionValue1.toUpperCase()
                })
            }
            d = decodeURIComponent(sessionStorage.sessionValue5);
            cun.qrf.moa();
            if (d !== "(api)") {
               window.parent.postMessage('CloseGame',"*");	
            }
        } else {
            removeGame(cun.qrf.fhe.toLowerCase(), cun.emv.value30 + "/" + cun.qrf.fhe.toLowerCase() + "/src/" + cun.qrf.fhe.toLowerCase());
            removeGame("hist_" + cun.qrf.fhe.toLowerCase(), cun.emv.value30 + "/" + cun.qrf.fhe.toLowerCase() + "/src/hist_" + cun.qrf.fhe.toLowerCase());
            loadMenu("menu", cun.emv.value1001, "UTF-8", false)
        }
    };
    this.moa = function() {
        if (!cun.qrf.lrw && cun.emv.value83) {
            sessionStorage.clear()
        }
    };
    this.wfo = function(f) {
        var g = null;
        if (this.pde) {
            for (var e = 0, d = f.length; e < d; e++) {
                g = f[e];
                if (g.dmt !== cun.ute.djn) {
                    if (g.dmt === cun.ute.fnv || g.dmt === cun.ute.qca) {
                        g.Title = this.language.xrp;
                        g.Text = (g.dmt === cun.ute.fnv) ? this.language.dqg : this.language.cbt;
                        g.Buttons = [{
                            Text: this.language.bok,
                            Action: "quit"
                        }]
                    } else {
                        if (g.dmt === cun.ute.jgg) {
                            g.Title = this.language.nct;
                            g.Text = this.language.hhd + "\n";
                            if (sessionStorage.sessionValue16 && sessionStorage.sessionValue16 != "null") {
                                g.Text += this.language.xkn;
                                g.Buttons = [{
                                    Text: this.bgr(this.language.iax),
                                    Action: "history"
                                }, {
                                    Text: this.language.bok,
                                    Action: "quit"
                                }]
                            } else {
                                g.Buttons = [{
                                    Text: this.language.bok,
                                    Action: "quit"
                                }]
                            }
                        } else {
                            if (g.dmt === cun.ute.tep || g.dmt === cun.ute.yfy || g.dmt === cun.ute.wnn) {
                                g.Title = this.psd;
                                if (g.dmt === cun.ute.tep) {
                                    g.Text = this.language.freerounds_startinfo + " " + this.freeRoundTotal + " " + this.language.freerounds + "\n\n" + this.language.lpu
                                } else {
                                    if (g.dmt === cun.ute.yfy) {
                                        g.Text = this.language.freerounds_info1 + " " + (this.freeRoundTotal - this.vab) + " " + this.language.freerounds_info2 + "\n\n" + this.language.lpu
                                    } else {
                                        if (g.dmt === cun.ute.wnn) {
                                            g.Text = this.language.freerounds_played + ": " + this.vab + "\n" + this.language.freerounds_win + ": " + this.oht(this.flf)
                                        }
                                    }
                                }
                                g.Buttons = [{
                                    Text: this.language.ok,
                                    Action: "continue"
                                }]
                            }
                        }
                    }
                    if (g.dmt === cun.ute.fft || g.dmt === cun.ute.uds) {
                        g.Title = this.language.mda;
                        g.Text = this.language.qgr;
                        g.Buttons = [{
                            Text: this.language.ok,
                            Action: "continue"
                        }]
                    } else {
                        if (g.dmt === cun.ute.mpr) {
                            g.Title = this.language.sit;
                            g.Text = this.language.hed;
                            g.Buttons = [{
                                Text: this.language.ok,
                                Action: "continue"
                            }]
                        } else {
                            if (g.dmt === cun.ute.roulette.oke || g.dmt === cun.ute.roulette.mjy) {
                                g.Title = this.language.xrp;
                                g.Text = (g.dmt === cun.ute.roulette.oke) ? this.language.hmr : this.language.knb;
                                g.Buttons = [{
                                    Text: this.language.bok,
                                    Action: "quit"
                                }]
                            }
                        }
                    }
                }
            }
            this.pde.vmo(f)
        }
    };
    this.stop = function() {
        this.cuv();
        this.pyw();
        this.mra();
        clearTimeout(this.xee);
        if (!this.lrw) {
            clearInterval(this.wts)
        }
        this.dan.bnh("autop", "#stop");
        this.dan.bnh("settings", "#stop");
        this.dan.bnh("topb", "#stop")
    };
    this.lhw = function() {
        var d = false;
        if (this.qpn.toLowerCase().indexOf("freeplay") === 0) {
            d = true
        } else {
            if (this.che == "freeplay" && this.fnh == "freeplay") {
                d = true
            } else {
                if (this.veh && (this.veh == "b71d982ffcbe56eb8cd11fa05963bbee" || this.veh.toLowerCase() == "freeplay")) {
                    d = true
                } else {
                    if (cun.emv.value68 != null && this.xin.toLowerCase() === cun.emv.value68.toLowerCase()) {
                        d = true
                    }
                }
            }
        }
        if (d === true) {
            cun.emv.value21.e = false;
            if (cun.emv.value76) {
                cun.emv.value76.f = false
            }
        }
        return d
    };
    this.ijm = function() {
        return (cun.emv.value65 > 0)
    };
    this.efh = function() {
        return (this.lrw === false)
    };
    this.qlc = function() {
        return false
    };
    this.gxh = function() {
        if (cun.qrf.ijm() && cun.qrf.qlc()) {
            clearTimeout(cun.qrf.lqe);
            cun.qrf.lqe = setTimeout(cun.qrf.rkh, cun.emv.value65)
        }
    };
    this.qkn = function() {
        if (cun.qrf.ijm() && cun.qrf.lqe >= 0) {
            if (cun.qrf.qlc()) {
                clearTimeout(cun.qrf.lqe);
                cun.qrf.lqe = setTimeout(cun.qrf.rkh, cun.emv.value65)
            } else {
                clearTimeout(cun.qrf.lqe);
                cun.qrf.lqe = -1
            }
        }
    };
    this.pyw = function() {
        if (cun.qrf.ijm()) {
            clearTimeout(cun.qrf.lqe);
            cun.qrf.lqe = -1
        }
    };
    this.lso = function() {
        return false
    };
    this.fhk = function() {
        return false
    };
    this.tev = function() {
        if (cun.qrf.lso() && cun.qrf.fhk() && cun.qrf.qbk < 0) {
            clearTimeout(cun.qrf.qbk);
            cun.qrf.qbk = setTimeout(cun.qrf.rjl, cun.qrf.qvc)
        }
    };
    this.yfp = function() {
        if (cun.qrf.lso() && cun.qrf.qbk >= 0) {
            if (cun.qrf.fhk()) {
                clearTimeout(cun.qrf.qbk);
                cun.qrf.qbk = setTimeout(cun.qrf.rjl, cun.qrf.qvc)
            } else {
                clearTimeout(cun.qrf.qbk);
                cun.qrf.qbk = -1
            }
        }
    };
    this.mra = function() {
        if (cun.qrf.lso()) {
            clearTimeout(cun.qrf.qbk);
            cun.qrf.qbk = -1
        }
    };
    this.rjl = function() {};
    this.olr = function() {};
    this.fhb = function(f) {
        var e = Number(f.replace(/_*/g, "")),
            d = Number(this.wfb.replace(/_*/g, ""));
        if (e > d) {
            this.wfb = f
        }
    };
    this.acu = function(g) {
        var e = (g && !this.jwo),
            f = this.dan.owa("topb"),
            d = this.dan.owa("topi");
        if (d) {
            d.eyu(e)
        }
        if (f) {
            f.eyu(e);
            f.qla(e)
        }
    };
    this.shy = function(g) {
        var e = (g && !this.jwo),
            f = this.dan.owa("topb"),
            d = this.dan.owa("topi");
        if (d) {
            d.eyu(e)
        }
        if (f) {
            f.eyu(e);
            f.uhd(e)
        }
    };
    this.bht = function(g) {
        var e = (g && !this.jwo),
            f = this.dan.owa("topb"),
            d = this.dan.owa("topi");
        if (d) {
            d.eyu(e)
        }
        if (f) {
            f.eyu(e);
            f.pfq(e)
        }
    };
    this.sxb = function() {
        var d = this.dan.owa("topb");
        if (d && !d.bsl()) {
            this.gai.ykp("panel_in");
            this.gai.vsj("panel_in");
            d.vmo()
        }
    };
    this.akj = function(d) {
        var e = this.dan.owa("topb");
        if (e && e.bsl()) {
            this.gai.ykp("panel_out");
            this.gai.vsj("panel_out");
            if (d) {
                e.ukg = d
            }
            e.slm()
        }
    };
    this.oht = function(f) {
        if (this.pxv > 0) {
            return (f * this.pxv).toFixed(0).toString()
        } else {
            if (cun.emv.value21.e == false || this.lvo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (cun.emv.value21.m != 1) {
                    e = f * cun.emv.value21.m;
                    var g = cun.emv.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = cun.emv.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.gvi(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.hga = function(f) {
        if (this.pxv > 0) {
            var e = (f * this.pxv).toFixed(0).toString();
            if (cun.emv.value21.e == true && cun.emv.value21.m == 1 && cun.emv.value21.s && this.lvo == false) {
                e = cun.emv.value21.s + " " + e
            }
            return e
        } else {
            if (cun.emv.value21.e == false || this.lvo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (cun.emv.value21.m != 1) {
                    e = f * cun.emv.value21.m;
                    var g = cun.emv.value21.m.toString().indexOf(".");
                    if (g > 0) {
                        d = cun.emv.value21.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.gvi(e, (d == 0) ? 0 : d + 1);
                if (cun.emv.value21.s) {
                    e = cun.emv.value21.s + " " + e
                }
                return e
            }
        }
    };
    this.gvi = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (cun.emv.value21.cs != null) {
                l = l.replace(/\./, cun.emv.value21.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (cun.emv.value21.ts != null) {
                        e += cun.emv.value21.ts
                    }
                }
            }
            if (cun.emv.value21.cs != null) {
                f = f.replace(/\./, cun.emv.value21.cs)
            }
            return e + f
        }
    };
    this.rka = function(f) {
        if (this.pxv > 0) {
            return (f * this.pxv).toFixed(0).toString()
        } else {
            if (cun.emv.value76.f == false || this.lvo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (cun.emv.value76.m != 1) {
                    e = f * cun.emv.value76.m;
                    var g = cun.emv.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = cun.emv.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.gmu(e, (d == 0) ? 0 : d + 1);
                return e
            }
        }
    };
    this.zxd = function(f) {
        if (this.pxv > 0) {
            var e = (f * this.pxv).toFixed(0).toString();
            if (cun.emv.value76.f == true && cun.emv.value76.m == 1 && cun.emv.value76.s && this.lvo == false) {
                e = cun.emv.value76.s + " " + e
            }
            return e
        } else {
            if (cun.emv.value76.f == false || this.lvo == true) {
                return f.toString()
            } else {
                var e = Number(f),
                    d = 0;
                if (cun.emv.value76.m != 1) {
                    e = f * cun.emv.value76.m;
                    var g = cun.emv.value76.m.toString().indexOf(".");
                    if (g > 0) {
                        d = cun.emv.value76.m.toString().length - (g + 1)
                    }
                }
                e = e.toFixed(d).toString();
                e = this.gmu(e, (d == 0) ? 0 : d + 1);
                if (cun.emv.value76.s) {
                    e = cun.emv.value76.s + " " + e
                }
                return e
            }
        }
    };
    this.gmu = function(l, k) {
        var e = "",
            g = "",
            f = "",
            d = [];
        l = l.toString();
        k = (k) ? k : 0;
        f = l.substring(l.length - k, l.length);
        g = l.substring(0, l.length - k);
        if (g.length < 4) {
            if (cun.emv.value76.cs != null) {
                l = l.replace(/\./, cun.emv.value76.cs)
            }
            return l.toString()
        } else {
            d[0] = g.substring(g.length - 3, g.length);
            for (var j = 1; j * 3 < g.length; j++) {
                d[j] = g.substring(g.length - (j + 1) * 3, g.length - j * 3)
            }
            for (var j = d.length - 1; j >= 0; j--) {
                e += d[j];
                if (j > 0) {
                    if (cun.emv.value76.ts != null) {
                        e += cun.emv.value76.ts
                    }
                }
            }
            if (cun.emv.value76.cs != null) {
                f = f.replace(/\./, cun.emv.value76.cs)
            }
            return e + f
        }
    };
    this.bgr = function(d) {
        if (d && sessionStorage.sessionValue1 !== cun.language.GE) {
            return d.toUpperCase()
        }
        return d
    };
    this.ocf = function() {
        for (var f = 0, d = this.rxg.ipr.rcg.length, e = null, g = 0; f < d; f++) {
            e = this.rxg.ipr.rcg[f];
            g = e.zey.substring(e.zey.length - 1);
            this.dan.byd(e.zey, this.jxe(this.fbj.stu.enh[d - 1][e.enh], (d > 2) ? this.fbj.stu.env : this.fbj.stu.display, this.style.stu.wrb[e.enh], e.dzy, e.value, this.gai.wxh((d > 2) ? e.zey + "_smalldsp" : e.zey + "_dsp"), (d <= 2) ? [this.gai.wxh("jackpot_frame")] : (Number(g) <= 2) ? [this.gai.wxh("jackpot_topframe")] : [this.gai.wxh("jackpot_bottomframe")], (d > 2) ? this.gai.wxh(e.zey + "_sym") : null), ["jackpots"])
        }
        this.dan.byd("jwp", this.jxe(this.fbj.stu.edi.enh, this.fbj.stu.edi, this.style.stu.edi, null, null, null, [this.gai.wxh("jackpot_win_0"), this.gai.wxh("jackpot_win_1"), this.gai.wxh("jackpot_win_2")], null));
        this.dan.bnh("jwp", "#cbi", [false]);
        if (this.nva()) {
            this.dan.byd("mjwp", this.zoh(this.fbj.stu.hcc.enh, this.fbj.stu.hcc, this.style.stu.hcc, this.gai.wxh("mj_bg"), this.gai.wxh("mj_font"), this.gai.wxh("mj_label"), [this.gai.wxh("mj_0"), this.gai.wxh("mj_1"), this.gai.wxh("mj_2"), this.gai.wxh("mj_3"), this.gai.wxh("mj_4"), this.gai.wxh("mj_5")]));
            this.dan.bnh("mjwp", "#cbi", [false])
        }
    };
    this.zgy = function() {
        var e = this.dan.tcj("jackpots"),
            f = this.dan.owa("jwp"),
            k = this.dan.owa("mjwp");
        for (var j = 0, d = this.rxg.ipr.rcg.length, g = null; j < d; j++) {
            g = this.rxg.ipr.rcg[j];
            e[j].eda(this.fbj.stu.enh[d - 1][g.enh]);
            e[j].vpj((d > 2) ? this.fbj.stu.env : this.fbj.stu.display)
        }
        if (f) {
            f.eda(this.fbj.stu.edi.enh);
            f.vpj(this.fbj.stu.edi)
        }
        if (k) {
            k.eda(this.fbj.stu.hcc.enh);
            k.vpj(this.fbj.stu.hcc)
        }
    };
    this.jxe = function(k, i, e, l, m, f, d, g) {
        var j = new wly();
        j.llb(k, null, this.context2D);
        j.parent = this;
        j.lba = f;
        j.dng = d;
        j.wtc = g;
        j.gjq(l);
        j.ilm(m);
        j.dku(e);
        j.vpj(i);
        return j
    };
    this.zoh = function(j, i, g, k, l, f, e) {
        var d = new spt();
        d.llb(j, null, this.context2D);
        d.parent = this;
        d.igw = k;
        d.jpy = l;
        d.jxa = f;
        d.dvq = e;
        d.dku(g);
        d.vpj(i);
        return d
    };
    this.eco = function(f) {
        if (this.sat() === true) {
            for (var e = 0, d = f.length; e < d; e++) {
                this.dan.bnh(f[e].zey, "#ilm", [f[e].value])
            }
            this.ksl()
        }
    };
    this.vkc = function(d) {
        if (this.sat() === true) {
            this.stu = {
                zey: d.zey,
                value: d.value,
                qjh: d.qjh
            }
        }
    };
    this.lpe = function() {
        this.stu = null
    };
    this.urj = function() {
        return false
    };
    this.nva = function() {
        return false
    };
    this.sat = function() {
        return (!this.lrw && this.rxg.ipr.rcg.length > 0 && this.urj())
    };
    this.jjh = function() {
        return (this.stu != null)
    };
    this.mod = function() {
        return (cun.emv.value86 === true && ((sessionStorage.sessionValue19 && sessionStorage.sessionValue19 != "null") || (sessionStorage.sessionValue20 && sessionStorage.sessionValue20 != "null") || (sessionStorage.sessionValue21 && sessionStorage.sessionValue21 != "null")))
    };
    this.bdu = function() {
        if (this.hnu() && this.xdd()) {
            this.pfv()
        }
    };
    this.xdd = function() {
        return false
    };
    this.hnu = function() {
        if (this.lrw) {
            return false
        }
        return (this.rxg.ipr.obk.length + this.rxg.ipr.qzk.length > 0)
    };
    this.pfv = function() {
        var g = null,
            e = this.rxg.ipr.obk.length,
            d = this.rxg.ipr.qzk.length;
        if (d + e > 0) {
            for (var f = e - 1; f >= 0; f--) {
                g = this.rxg.ipr.obk.splice(f, 1)[0];
                g.dmt = cun.ute.djn;
                this.qjs.push(g)
            }
            for (var f = d - 1; f >= 0; f--) {
                g = this.rxg.ipr.qzk.splice(f, 1)[0];
                g.dmt = cun.ute.djn;
                this.qjs.push(g)
            }
            if (this.pde && !this.pde.bsl()) {
                this.iqe()
            }
        }
    };
    this.iqe = function() {
        var d = null;
        if (this.qjs.length > 0) {
            d = this.qjs.shift();
            this.wfo([d])
        }
    };
    this.sce = function() {
        if (cun.qrf.kyq.length > 0) {
            cun.qrf.wfo(cun.qrf.kyq)
        }
    };
    this.wln = function() {
        this.qjs.length = 0
    };
    this.ywe = function() {
        this.kyq.length = 0;
        if (this.qaf) {
            this.qaf.slm()
        }
    };
    this.yqj = function() {
        var f = null,
            d = this.rxg.ipr.kyq.length;
        if (d > 0) {
            for (var e = d - 1; e >= 0; e--) {
                f = this.rxg.ipr.kyq.splice(e, 1)[0];
                f.dmt = cun.ute.djn;
                this.kyq.push(f)
            }
            if (this.qaf) {
                this.qaf.vmo(this.kyq[0].Title, this.kyq[0].Text, this.kyq.length)
            }
        }
    };
    this.ycg = function() {
        var d = false;
        if (this.pde && this.pde.bsl()) {
            d = true
        }
        if (this.qaf && this.qaf.bsl()) {
            d = true
        }
        if (this.mod()) {
            d = true
        }
        if (this.hoo) {
            this.hoo.style.display = (d) ? "block" : "none"
        }
    };
    this.hsj = function() {
        this.acu(false);
        this.enj.qla(false);
        this.enj.mib.bnh("info", "#wam");
        this.wfo([{
            dmt: cun.ute.jgg
        }])
    };
    this.flu = function() {
        cun.qrf.dna = true
    };
    this.ueg = function() {
        this.iqx = new olk().llb(this, cun.emv.value6)
    };
    this.lhv = function() {
        if (this.iqx) {
            this.iqx.connect(this.fhe, this.che, this.fnh, this.veh, this.wfb, true)
        }
    };
    this.qrq = function() {
        if (cun.qrf.iqx) {
            cun.qrf.iqx.connect(cun.qrf.fhe, cun.qrf.che, cun.qrf.fnh, cun.qrf.veh, cun.qrf.wfb, false)
        }
    };
    this.iki = function() {};
    this.dmd = function() {};
    this.mqv = function(d) {
        if (!this.lhw() && !this.lrw) {
            clearTimeout(this.xee);
            if (this.uhz()) {
                this.xee = setTimeout(this.bzi, d)
            } else {
                if (Number(sessionStorage.sessionValue17) > 0) {
                    this.xee = setTimeout(this.flu, Number(sessionStorage.sessionValue17) * 60000)
                }
            }
        }
    };
    this.bzi = function() {
        cun.qrf.nfw = true
    };
    this.uhz = function() {
        return cun.emv.value36 || cun.emv.value37
    }
}

function lfh() {
    this.llb = function() {
        this.dmj("btn", this.qai);
        this.dmj("gamble_on", this.qai);
        this.dmj("gamble_off", this.qai);
        this.dmj("panel_in", this.qai);
        this.dmj("panel_out", this.qai);
        this.dmj("audioon", this.qai);
        for (var a = 0; a < 12; a++) {
            this.dmj("step" + a, this.qai)
        }
        this.dmj("maxstep", this.qai);
        this.dmj("gambleprop", this.wjc)
    }
}
lfh.prototype = new prj;

function jqb() {
    this.gdt = {
        ojt: 84,
        ebx: -1,
        value: "T",
        dlh: null
    };
    this.nkq = {
        ojt: 80,
        ebx: -1,
        value: "P",
        dlh: null
    };
    this.start = {
        ojt: 32,
        ebx: -1,
        value: "SPACE",
        dlh: null
    };
    this.jwo = {
        ojt: 16,
        ebx: -1,
        value: "SHIFT",
        dlh: null
    };
    this.tzf = {
        ojt: 38,
        ebx: -1,
        value: "\u25B2",
        dlh: null
    };
    this.dcr = {
        ojt: 40,
        ebx: -1,
        value: "\u25BC",
        dlh: null
    };
    this.joq = {
        ojt: 71,
        ebx: -1,
        value: "G",
        dlh: null
    };
    this.kzi = {
        ojt: 27,
        ebx: -1,
        value: "ESC",
        dlh: null
    };
    this.language = {
        ojt: 76,
        ebx: -1,
        value: "L",
        dlh: null
    };
    this.xub = {
        ojt: 13,
        ebx: -1,
        value: "ENTER",
        dlh: null
    };
    this.psc = {
        ojt: 27,
        ebx: -1,
        value: "ESC",
        dlh: null
    };
    this.rdw = {
        ojt: 39,
        ebx: -1,
        value: "\u25B6",
        dlh: null
    };
    this.vqm = {
        ojt: 37,
        ebx: -1,
        value: "\u25C0",
        dlh: null
    };
    this.xoj = {
        ojt: 27,
        ebx: -1,
        value: "ESC",
        dlh: null
    };
    this.iuv.push(this.gdt);
    this.iuv.push(this.nkq);
    this.iuv.push(this.start);
    this.iuv.push(this.tzf);
    this.iuv.push(this.dcr);
    this.iuv.push(this.kzi);
    this.iuv.push(this.language);
    this.iuv.push(this.jwo);
    this.iuv.push(this.joq)
}
jqb.prototype = new cfj;

function uef(g, c, f, e, i, a, d, b) {
    this.nwk = g;
    this.zzn = f;
    this.qar = e;
    this.qao = i;
    this.fhe = c;
    this.wfb = a;
    this.vju = d;
    this.xin = b;
    this.rcy = [];
    this.sgr = [];
    this.keu = [];
    this.kfq = [];
    this.cpo = [];
    this.yet = 0;
    this.qjh = 0;
    this.win = 0;
    this.wqr = 0;
    this.ldg = 0;
    this.puh = 0;
    this.ack = 0;
    this.opy = 0;
    this.foo = -1;
    this.ppx = -1;
    this.jxj = 0;
    this.jwo = false;
    this.tjg = -1;
    this.hgf = 0;
    this.cky = "";
    this.dvz = function(l) {
        if (l != null) {
            this.yxs = 0;
            this.znx = this.czc(l);
            if (this.znx == 0) {
                this.iqk = this.yci(l);
                this.ute = this.czc(l);
                this.yet = this.tvg(l);
                this.qjh = this.tvg(l);
                this.win = this.tvg(l);
                this.wqr = this.tvg(l);
                this.ack = this.yci(l);
                this.ldg = this.tvg(l);
                this.puh = this.tvg(l);
                this.opy = this.tvg(l);
                for (var j = 0; j < 8; j++) {
                    this.keu[j] = this.yci(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.sgr[j] = this.tvg(l)
                }
                for (var j = 0; j < 5; j++) {
                    this.rcy[j] = this.tvg(l)
                }
                this.foo = this.yci(l);
                this.ppx = this.yci(l);
                this.jxj = this.yci(l);
                this.hgf = this.yci(l);
                this.tjg = this.yci(l);
                var m = this.yci(l);
                for (var j = 0; j < m; j++) {
                    this.kfq[j] = this.tvg(l)
                }
                var k = this.yci(l);
                for (var j = 0; j < k; j++) {
                    this.cpo[j] = this.tvg(l)
                }
                this.jyq(l);
                if (this.iqk == 0) {
                    this.etu("A/u250")
                } else {
                    this.rxg.jjz()
                }
            } else {
                if (this.znx == 1) {
                    this.iqk = this.yci(l);
                    this.ute = this.czc(l);
                    this.yet = this.tvg(l);
                    this.qjh = this.tvg(l);
                    this.win = this.tvg(l);
                    this.wqr = this.tvg(l);
                    this.ack = this.yci(l);
                    this.ldg = this.tvg(l);
                    this.puh = this.tvg(l);
                    this.opy = this.tvg(l);
                    for (var j = 0; j < 8; j++) {
                        this.keu[j] = this.yci(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.sgr[j] = this.tvg(l)
                    }
                    for (var j = 0; j < 5; j++) {
                        this.rcy[j] = this.tvg(l)
                    }
                    this.foo = this.yci(l);
                    this.ppx = this.yci(l);
                    this.jxj = this.yci(l);
                    this.jwo = (this.yci(l) == 1) ? true : false;
                    this.hgf = this.yci(l);
                    this.tjg = this.yci(l);
                    this.jyq(l);
                    if (this.ute == 0) {
                        if (this.iqk == cun.rwr.ckk.muh) {
                            this.rxg.jjz()
                        } else {
                            if (this.iqk == cun.rwr.ckk.rmg) {
                                this.rxg.lyd()
                            } else {
                                if (this.iqk == cun.rwr.ckk.tej) {
                                    this.rxg.qzv()
                                } else {
                                    if (this.iqk == cun.rwr.ckk.lgw) {
                                        this.rxg.vph()
                                    } else {
                                        if (this.iqk == cun.rwr.ckk.plx) {
                                            this.rxg.yxd()
                                        } else {
                                            if (this.iqk == cun.rwr.ckk.myz) {
                                                this.rxg.ubd()
                                            } else {
                                                if (this.iqk == cun.rwr.ckk.hul) {
                                                    this.rxg.dvo()
                                                } else {
                                                    if (this.iqk == cun.rwr.ckk.pje) {
                                                        this.rxg.kfm()
                                                    } else {
                                                        if (this.iqk == cun.rwr.ckk.svd) {
                                                            this.rxg.dvc()
                                                        } else {
                                                            if (this.iqk == cun.rwr.ckk.jvv) {
                                                                this.rxg.coj()
                                                            } else {
                                                                if (this.iqk == cun.rwr.ckk.eso) {
                                                                    this.rxg.nok()
                                                                } else {
                                                                    if (this.iqk == cun.rwr.ckk.iem) {
                                                                        this.rxg.vnz()
                                                                    } else {
                                                                        this.hxg()
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.rxg.ghd(this.ute)
                    }
                } else {
                    if (this.znx == 2) {} else {
                        if (this.znx == 3) {
                            this.qjh = this.tvg(l);
                            this.rxg.ijl()
                        } else {
                            if (this.znx === 8) {
                                this.etu("8")
                            } else {
                                if (this.znx == 9) {
                                    this.rxg.fow.qpn = l.substring(this.yxs)
                                } else {
                                    this.ske = this.czc(l);
                                    this.rxg.aky(l.substring(2))
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.jyq = function(j) {
        if (this.znx == 0) {
            this.cky = this.lyy(j);
            if (cun.emv.value21.e === true && cun.emv.value21.s !== "") {
                this.cky = ""
            }
        }
    };
    this.hxg = function() {};
    this.ekx = function(j, k) {
        this.etu("A/u251," + j + "," + k)
    };
    this.rtw = function(j, l, k) {
        this.etu("A/u2512," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.vya = function(j, l, k) {
        this.etu("A/u253," + k[0] + "," + k[1] + "," + k[2] + "," + k[3] + "," + k[4] + "," + j + "," + l)
    };
    this.ocv = function() {
        this.etu("A/u257")
    };
    this.aig = function() {
        this.etu("A/u259")
    };
    this.joq = function(j) {
        this.etu("A/u258," + j)
    };
    this.mfc = function() {
        this.etu("A/u2514")
    };
    this.ivd = function() {
        this.etu("A/u2515")
    };
    this.gws = function(j) {
        this.etu("A/u2513," + j)
    }
}
uef.prototype = new fzl;

function kox() {
    this.llb = function(a, b) {
        this.nwk = b;
        this.fow = a;
        return this
    };
    this.connect = function(c, f, e, g, a, d, b) {
        this.zzn = f;
        this.qar = e;
        this.qao = g;
        this.fhe = c;
        this.vju = d;
        this.xin = b;
        this.ipr = new uef(this.nwk, c, f, e, g, a, d, b);
        this.ipr.llb(this)
    };
    this.ekx = function(a, b) {
        this.ipr.ekx(a, b)
    };
    this.rtw = function(a, c, b) {
        this.ipr.rtw(a, c, b)
    };
    this.vya = function(a, c, b) {
        this.ipr.vya(a, c, b)
    };
    this.ocv = function() {
        this.ipr.ocv()
    };
    this.aig = function() {
        this.ipr.aig()
    };
    this.joq = function(a) {
        this.ipr.joq(a)
    };
    this.mfc = function() {
        this.ipr.mfc()
    };
    this.ivd = function() {
        this.ipr.ivd()
    };
    this.gws = function(a) {
        this.ipr.gws(a)
    };
    this.jjz = function() {
        var c = this.ipr.iqk;
        for (var b = 0; b < this.ipr.sgr.length; b++) {
            this.fow.sgr[b] = this.ipr.sgr[b]
        }
        for (var b = 0; b < this.ipr.rcy.length; b++) {
            this.fow.rcy[b] = this.ipr.rcy[b]
        }
        this.fow.qjh = this.ipr.qjh;
        this.fow.ldg = this.ipr.ldg;
        this.fow.puh = this.ipr.puh;
        for (var b = 0, a = this.ipr.kfq.length; b < a && this.ipr.kfq[b] <= this.ipr.puh; b++) {
            this.fow.kfq[b] = this.ipr.kfq[b]
        }
        if (c == cun.rwr.ckk.muh || (c == cun.rwr.ckk.tej && this.ipr.win + this.ipr.wqr == 0) || c == cun.rwr.ckk.lgw || (c == cun.rwr.ckk.plx && this.ipr.win + this.ipr.wqr == 0) || c == cun.rwr.ckk.hul || (c == cun.rwr.ckk.svd && this.ipr.win + this.ipr.wqr == 0) || (c == cun.rwr.ckk.rmg && this.fow.cgk == true)) {
            this.fow.czu = true
        } else {
            this.fow.czu = false
        }
        this.fow.wbs = this.ipr.ack;
        this.fow.totalBet = this.fow.kfq[this.fow.wbs];
        this.fow.win = this.ipr.win;
        this.fow.yeq = this.ipr.foo;
        this.fow.ppx = this.ipr.ppx;
        this.fow.jxj = this.ipr.jxj;
        this.fow.state = c;
        this.qkl();
        this.fow.gud();
        this.fow.uns(this.ipr.iqk, this.ipr.yet, this.ipr.keu, this.ipr.hgf, this.ipr.tjg)
    };
    this.lyd = function() {
        for (var a = 0; a < this.ipr.sgr.length; a++) {
            this.fow.sgr[a] = this.ipr.sgr[a]
        }
        for (var a = 0; a < this.ipr.rcy.length; a++) {
            this.fow.rcy[a] = this.ipr.rcy[a]
        }
        this.fow.qjh = this.ipr.qjh;
        this.fow.yeq = this.ipr.foo;
        this.fow.state = this.ipr.iqk;
        this.fow.ppx = this.ipr.ppx;
        this.qkl();
        this.fow.xyh();
        this.fow.irn(this.ipr.yet)
    };
    this.kfm = function() {
        for (var a = 0; a < this.ipr.sgr.length; a++) {
            this.fow.sgr[a] = this.ipr.sgr[a]
        }
        for (var a = 0; a < this.ipr.rcy.length; a++) {
            this.fow.rcy[a] = this.ipr.rcy[a]
        }
        this.fow.qjh = this.ipr.qjh;
        this.fow.ppx = this.ipr.ppx;
        this.fow.yeq = this.ipr.foo;
        this.fow.state = this.ipr.iqk;
        this.qkl();
        this.fow.yjm();
        this.fow.irn(this.ipr.yet)
    };
    this.qzv = function() {
        for (var a = 0; a < this.ipr.sgr.length; a++) {
            this.fow.sgr[a] = this.ipr.sgr[a]
        }
        for (var a = 0; a < this.ipr.rcy.length; a++) {
            this.fow.rcy[a] = this.ipr.rcy[a]
        }
        this.fow.qjh = this.ipr.qjh;
        this.fow.win = this.ipr.win;
        this.fow.ppx = this.ipr.ppx;
        this.fow.yeq = this.ipr.foo;
        this.fow.state = this.ipr.iqk;
        if (this.fow.win > 0) {
            this.fow.zaw.vfv(this.ipr.keu, this.ipr.hgf)
        }
        this.qkl();
        this.fow.pnv();
        this.fow.irn(this.ipr.yet)
    };
    this.vph = function() {
        this.fow.qjh = this.ipr.qjh;
        this.fow.state = this.ipr.iqk;
        this.qkl();
        this.fow.aui()
    };
    this.dvo = function() {
        for (var a = 0; a < this.ipr.sgr.length; a++) {
            this.fow.sgr[a] = this.ipr.sgr[a]
        }
        for (var a = 0; a < this.ipr.rcy.length; a++) {
            this.fow.rcy[a] = this.ipr.rcy[a]
        }
        this.fow.qjh = this.ipr.qjh;
        this.fow.win = this.ipr.win;
        this.fow.ppx = this.ipr.ppx;
        this.fow.yeq = this.ipr.foo;
        this.fow.state = this.ipr.iqk;
        if (this.fow.win > 0) {
            this.fow.zaw.vfv(this.ipr.keu, this.ipr.hgf)
        }
        this.qkl();
        this.fow.fjd(this.ipr.hgf);
        this.fow.irn(this.ipr.yet)
    };
    this.yxd = function() {
        this.fow.qjh = this.ipr.qjh;
        this.fow.win = this.ipr.win;
        this.fow.state = this.ipr.iqk;
        this.fow.zaw.vfv(this.ipr.keu, this.ipr.hgf);
        this.qkl();
        this.fow.zug();
        this.fow.irn(this.ipr.yet)
    };
    this.ubd = function() {
        this.fow.qjh = this.ipr.qjh;
        this.fow.win = this.ipr.win;
        this.fow.state = this.ipr.iqk;
        this.qkl();
        this.fow.kxl();
        this.fow.irn(this.ipr.yet)
    };
    this.dvc = function() {
        this.fow.qjh = this.ipr.qjh;
        this.fow.win = this.ipr.win;
        this.fow.state = this.ipr.iqk;
        this.fow.zaw.vfv(this.ipr.keu, this.ipr.hgf);
        this.qkl();
        this.fow.btv(this.ipr.hgf);
        this.fow.irn(this.ipr.yet)
    };
    this.coj = function() {
        this.fow.qjh = this.ipr.qjh;
        this.fow.win = this.ipr.win;
        this.fow.state = this.ipr.iqk;
        this.qkl();
        this.fow.zgx(this.ipr.tjg);
        this.fow.irn(this.ipr.yet)
    };
    this.nok = function() {
        this.fow.qjh = this.ipr.qjh;
        this.fow.win = this.ipr.win;
        this.fow.state = this.ipr.iqk;
        this.fow.zaw.vfv(this.ipr.keu, this.ipr.hgf);
        this.qkl();
        this.fow.uxa(this.ipr.tjg);
        this.fow.irn(this.ipr.yet)
    };
    this.qkl = function() {
        this.fow.cky = this.ipr.cky
    }
}
kox.prototype = new qwm;

function fjr() {
    var a = this;
    this.ouc = false;
    this.hpn = null;
    this.mib = null;
    this.ybj = false;
    this.iaz = -1;
    this.ida = 0;
    this.ckt = null;
    this.cqu = 800;
    this.iup = 0;
    this.gqr = null;
    this.fnc = null;
    this.akn = null;
    this.hhs = null;
    this.htv = null;
    this.vxp = null;
    this.swk = null;
    this.uqm = new icy();
    this.oom = new icy();
    this.rqt = 30;
    this.llb = function(b, d, c) {
        fjr.prototype.llb.call(this, b, d, c);
        this.gqr = document.createElement("canvas");
        this.gqr.width = this.width;
        this.gqr.height = this.height;
        this.fnc = this.gqr.getContext("2d");
        this.dgn()
    };
    this.ajo = function(c, b) {
        try {
            this.rqt = c.xqf;
            this.uqm = c.liv;
            this.oom = c.mcp;
            this.hoe(c);
            this.xsn(c);
            this.sfo(c);
            this.dku(b, false)
        } catch (d) {
            console.error(d)
        }
    };
    this.vpj = function(f) {
        try {
            var c = {},
                b = this.mib.owa("info"),
                m = this.mib.owa("creditd"),
                l = this.mib.owa("betd"),
                k = this.mib.tcj("buttons");
            if (this.parent.wqz() != null) {
                c = f.elj
            } else {
                if (cun.emv.value57 === cun.ui.tly) {
                    c = f.lwe
                } else {
                    if (cun.emv.value57 === cun.ui.gil) {
                        c = f.taf
                    } else {
                        if (cun.emv.value57 === cun.ui.iiw) {
                            c = f.lsa
                        }
                    }
                }
            }
            this.rqt = f.xqf;
            this.uqm = f.liv;
            this.oom = f.mcp;
            if (m) {
                m.vpj(f.display);
                m.eda(f.hzt)
            }
            if (l) {
                l.vpj(f.display);
                l.eda(f.jmg)
            }
            if (b) {
                b.vpj(f.sit);
                b.eda(f.sit.enh)
            }
            this.syq();
            for (var d = 0, g = k.length; d < g; d++) {
                if (k[d] instanceof xma) {
                    k[d].vpj(f.gxx)
                }
            }
            if (this.parent.wqz() != null) {
                this.mib.bnh("astart", "#vpj", [f.clx]);
                if (this.parent.cvn() === true) {
                    this.mib.bnh("start", "#vpj", [f.clx])
                } else {
                    this.mib.bnh("start", "#vpj", [f.nfj])
                }
            } else {
                this.mib.bnh("start", "#vpj", [f.nfj]);
                if (cun.emv.value57 === cun.ui.tly) {
                    this.mib.bnh("astart", "#vpj", [f.nfj])
                }
            }
            this.mib.bnh("start", "#eda", [c.hai]);
            this.mib.bnh("astart", "#eda", [c.wak]);
            this.mib.bnh("bet", "#eda", [c.oow]);
            this.mib.bnh("gamble", "#eda", [c.faj]);
            this.mib.bnh("exit", "#eda", [c.yjv]);
            this.mib.bnh("lang", "#eda", [c.cjo]);
            this.mib.bnh("setting", "#eda", [c.cwi])
        } catch (j) {
            console.error(j)
        }
    };
    this.dku = function(f) {
        try {
            var k = this.mib.owa("info"),
                c = this.mib.tcj("displays"),
                g = this.mib.tcj("buttons");
            this.akn = f.backgroundColor;
            this.hhs = f.wsn;
            this.vxp = f.axr;
            this.swk = f.nzu;
            if (k) {
                k.dku(f.sit)
            }
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].dku(f.pli)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].dku(f.display)
            }
            this.syq()
        } catch (j) {
            console.error(j)
        }
    };
    this.qmq = function(o, n, p) {
        var m = this.mib.tcj("buttons"),
            d = this.mib.owa("bet"),
            b = this.mib.owa("start"),
            k = this.mib.owa("betd"),
            c = this.mib.owa("creditd");
        xap = this.parent.dan.owa("betsel"), ext = o - this.x, mrg = n - this.y;
        for (var g = 0, l = m.length; g < l; g++) {
            var e = m[g];
            if (ext >= e.x && ext <= e.x + e.width && mrg >= e.y && mrg <= e.y + e.height && e.bsl() == true) {
                if (e.qvq() && !e.aqh()) {
                    if (e === d) {
                        e.otk(true, true, false);
                        for (var f = 0; f < l; f++) {
                            m[f].sgw(true, false)
                        }
                        e.ktx();
                        this.ckt = function() {
                            if (e.ktx() === true) {
                                clearInterval(a.ida);
                                e.otk(false, true);
                                for (var i = 0; i < l; i++) {
                                    m[i].sgw(false)
                                }
                            }
                        };
                        this.ida = setInterval(this.ckt, e.tpt)
                    } else {
                        if (e === b && b.ktx === this.jjr) {
                            e.otk(true, true, false)
                        } else {
                            e.otk(true, true)
                        }
                        e.ktx();
                        for (var f = 0; f < l; f++) {
                            m[f].sgw(true)
                        }
                    }
                    return true
                }
            }
        }
        if (d && d.qvq() && !d.aqh()) {
            if (k && ext >= k.x && ext <= k.x + k.width && mrg >= k.y && mrg <= k.y + k.height) {
                if (!p) {
                    if (xap && xap.qvq()) {
                        this.parent.rza()
                    }
                    return true
                }
            } else {
                if (c && ext >= c.x && ext <= c.x + c.width && mrg >= c.y && mrg <= c.y + c.height) {
                    if (!p) {
                        this.parent.obs()
                    }
                    return true
                }
            }
        }
        return false
    };
    this.vlq = function() {
        var f = this.mib.tcj("buttons"),
            k = this.mib.owa("bet"),
            g = this.mib.owa("start");
        for (var d = 0, b = f.length; d < b; d++) {
            var e = f[d];
            if (e.ozv() === true) {
                e.otk(false, true);
                if (e === k) {
                    clearInterval(this.ida);
                    for (var c = 0; c < b; c++) {
                        f[c].sgw(false)
                    }
                } else {
                    if (e === g && g.ktx === this.jjr) {
                        clearTimeout(this.iup);
                        a.parent.gai.ykp("auto_fill");
                        this.mib.bnh("start", "#oui")
                    }
                }
                return true
            }
        }
        return false
    };
    this.chp = function(g) {
        var f = this.mib.tcj("buttons"),
            k = this.mib.owa("bet");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (g == d.vhe) {
                if (d.qvq() && !d.aqh()) {
                    d.otk(true, true);
                    d.ktx();
                    for (var c = 0; c < b; c++) {
                        f[c].sgw(true)
                    }
                }
                return true
            }
        }
        if (g == this.parent.ihh.dcr.ojt) {
            if (k && k.qvq() && !k.aqh()) {
                this.parent.mzd();
                for (var c = 0, b = f.length; c < b; c++) {
                    f[c].sgw(true)
                }
            }
            return true
        }
        return false
    };
    this.cyi = function() {
        var e = this.mib.tcj("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ozv() == true) {
                c.otk(false, true);
                return true
            }
        }
        return false
    };
    this.chl = function(l, k, m) {
        var j = this.mib.tcj("buttons"),
            c = this.mib.owa("bet");
        if (l != null && k != null) {
            var e = l - this.x;
            var d = k - this.y;
            for (var f = 0, g = j.length; f < g; f++) {
                var b = j[f];
                if (e >= b.x && e <= b.x + b.width && d >= b.y && d <= b.y + b.height && b.bsl() && b.qvq() && !b.aqh()) {
                    return b.ktx
                }
            }
        } else {
            if (m != null) {
                for (var f = 0, g = j.length; f < g; f++) {
                    var b = j[f];
                    if (m == b.vhe && b.bsl() && b.qvq() && !b.aqh()) {
                        return b.ktx
                    }
                }
                if (m == this.parent.ihh.dcr.ojt && c && c.bsl() && c.qvq() && !c.aqh()) {
                    return this.parent.mzd
                }
            }
        }
        return null
    };
    this.dgn = function() {
        this.mib = new bmn();
        this.mib.llb();
        this.mib.etj("displays");
        this.mib.etj("buttons");
        this.mib.etj("allbuttons");
        this.mib.etj("infos");
        this.mib.etj("start");
        this.mib.etj("collect");
        this.mib.etj("game");
        this.mib.etj("hold");
        this.mib.etj("settings")
    };
    this.sfo = function(b) {
        var c = this.bgu(b.sit.enh);
        c.vpj(b.sit);
        this.mib.byd("info", c, ["infos"])
    };
    this.hoe = function(c) {
        var b = {};
        if (this.parent.wqz() != null) {
            b = c.elj
        } else {
            if (cun.emv.value57 === cun.ui.tly) {
                b = c.lwe
            } else {
                if (cun.emv.value57 === cun.ui.gil) {
                    b = c.taf
                } else {
                    if (cun.emv.value57 === cun.ui.iiw) {
                        b = c.lsa
                    }
                }
            }
        }
        if (this.parent.wqz() != null) {
            this.mib.byd("astart", this.tei(b.wak, this.parent.language.syj, "---", this.parent.gai.wxh("btn_s"), this.parent.zlc, (!this.parent.lrw) ? this.parent.ihh.jwo : null, c.clx), ["buttons", "allbuttons", "start", "collect", "hold"]);
            if (this.parent.cvn() === true) {
                this.mib.byd("start", this.tei(b.hai, (this.parent.fbj.chd === false) ? this.parent.language.start : null, "---", (this.parent.fbj.chd === false) ? this.parent.gai.wxh("btn") : this.parent.gai.wxh("btn_dl"), (this.parent.cvn() === true) ? this.jjr : this.parent.npd, (!this.parent.lrw) ? this.parent.ihh.start : null, c.clx), ["buttons", "allbuttons", "start", "collect", "hold"])
            } else {
                this.mib.byd("start", this.sdx(b.hai, (this.parent.fbj.chd === false) ? this.parent.language.start : null, (this.parent.fbj.chd === false) ? this.parent.gai.wxh("btn") : this.parent.gai.wxh("btn_dl"), (this.parent.cvn() === true) ? this.jjr : this.parent.npd, (!this.parent.lrw) ? this.parent.ihh.start : null, c.nfj), ["buttons", "allbuttons", "start", "collect", "hold"])
            }
        } else {
            this.mib.byd("start", this.sdx(b.hai, (this.parent.fbj.chd === false) ? this.parent.language.start : null, (this.parent.fbj.chd === false) ? this.parent.gai.wxh("btn") : this.parent.gai.wxh("btn_dl"), (this.parent.cvn() === true) ? this.jjr : this.parent.npd, (!this.parent.lrw) ? this.parent.ihh.start : null, c.nfj), ["buttons", "allbuttons", "start", "collect", "hold"]);
            this.mib.byd("astart", this.sdx(b.wak, this.parent.language.jwo, (cun.emv.value57 === cun.ui.tly) ? this.parent.gai.wxh("btn") : this.parent.gai.wxh("btn_s"), this.parent.zlc, (!this.parent.lrw) ? this.parent.ihh.jwo : null, c.gxx), ["buttons", "allbuttons", "start", "collect", "game", "hold"])
        }
        this.mib.byd("bet", this.sdx(b.oow, this.parent.language.rxh, this.parent.gai.wxh("btn_s"), this.parent.wik, (!this.parent.lrw) ? this.parent.ihh.tzf : null, c.gxx), ["buttons", "allbuttons"]);
        this.mib.owa("bet").tpt = 300;
        this.mib.byd("gamble", this.sdx(b.faj, this.parent.language.joq, this.parent.gai.wxh("btn_s"), this.parent.aov, (!this.parent.lrw) ? this.parent.ihh.joq : null, c.gxx), ["buttons", "allbuttons", "start", "game", "collect", "hold"]);
        if (this.parent.wqz() != null) {
            this.mib.byd("exit", this.sdx(b.yjv, (this.parent.fbj.chd === true) ? null : (cun.emv.value50.g === true) ? this.parent.language.bok : this.parent.language.hcb, (this.parent.fbj.chd === false) ? this.parent.gai.wxh("btn_s") : this.parent.gai.wxh("btn_e"), this.parent.rkh, (!this.parent.lrw) ? this.parent.ihh.kzi : null, c.gxx), ["buttons", "allbuttons", "collect"])
        } else {
            if (cun.emv.value57 !== cun.ui.iiw) {
                this.mib.byd("exit", this.sdx(b.yjv, (this.parent.fbj.chd === true) ? null : (cun.emv.value50.g === true) ? this.parent.language.bok : this.parent.language.hcb, (this.parent.fbj.chd === false) ? this.parent.gai.wxh("btn_s") : this.parent.gai.wxh("btn_e"), this.parent.rkh, (!this.parent.lrw) ? this.parent.ihh.kzi : null, c.gxx), ["buttons", "allbuttons", "collect"])
            }
            if (cun.emv.value57 !== cun.ui.tly && this.parent.wqz() == null) {
                this.mib.byd("lang", this.epa(b.cjo, this.parent.ngf(sessionStorage.sessionValue1), this.parent.osk, (!this.parent.lrw) ? this.parent.ihh.language : null), ["buttons", "allbuttons", "hold"])
            }
        }
        this.mib.byd("setting", this.sdx(b.cwi, null, (this.parent.fbj.chd === true) ? this.parent.gai.wxh("btn_m") : this.parent.gai.wxh("btn_s"), this.parent.lke, null, c.gxx), ["buttons", "settings"])
    };
    this.xsn = function(c) {
        var b = this.parent.gai.wxh("display_effect");
        this.mib.byd("creditd", this.rfp(c.hzt, (this.parent.lhw()) ? this.parent.language.wfj : this.parent.language.qjh, this.parent.hga(this.parent.qjh), b, c.display), ["displays"]);
        this.mib.byd("betd", this.rfp(c.jmg, this.parent.language.rxh, this.parent.hga(this.parent.totalBet), b, c.display), ["displays"])
    };
    this.spn = function() {
        if (this.iaz == 1) {
            this.qla(this.ybj)
        } else {
            if (this.iaz == 2) {
                this.vjb(this.ybj)
            } else {
                if (this.iaz == 3) {
                    this.qab(this.ybj)
                } else {
                    if (this.iaz == 4) {
                        this.rmw(this.ybj)
                    } else {
                        if (this.iaz == 5) {
                            this.btn(this.ybj)
                        } else {
                            if (this.iaz == 6) {
                                this.pfq(this.ybj)
                            }
                        }
                    }
                }
            }
        }
    };
    this.qla = function(d) {
        var c = this.mib.tcj("allbuttons"),
            e = 0,
            b = 0;
        this.ybj = d;
        this.iaz = 1;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].eyu(d)
        }
    };
    this.vjb = function(d) {
        var c = this.mib.tcj("allbuttons"),
            f = this.mib.tcj("start"),
            e = 0,
            b = 0;
        this.ybj = d;
        this.iaz = 2;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].eyu(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].eyu(d)
        }
    };
    this.qab = function(d) {
        var c = this.mib.tcj("allbuttons"),
            f = this.mib.tcj("game"),
            e = 0,
            b = 0;
        this.ybj = d;
        this.iaz = 3;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].eyu(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].eyu(d)
        }
    };
    this.rmw = function(d) {
        var c = this.mib.tcj("allbuttons"),
            f = this.mib.tcj("hold"),
            e = 0,
            b = 0;
        this.ybj = d;
        this.iaz = 4;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].eyu(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].eyu(d)
        }
    };
    this.btn = function(d) {
        var c = this.mib.tcj("allbuttons"),
            f = (this.ouc === true) ? this.mib.tcj("collect") : this.mib.tcj("start"),
            e = 0,
            b = 0;
        this.ybj = d;
        this.iaz = 5;
        for (e = 0, b = c.length; e < b; e++) {
            c[e].eyu(false)
        }
        for (e = 0, b = f.length; e < b; e++) {
            f[e].eyu(d)
        }
    };
    this.pfq = function(e) {
        var c = this.mib.tcj("allbuttons"),
            d = this.mib.tcj("settings"),
            f = 0,
            b = 0;
        this.ybj = e;
        this.iaz = 6;
        for (f = 0, b = c.length; f < b; f++) {
            c[f].eyu(false)
        }
        for (f = 0, b = d.length; f < b; f++) {
            d[f].eyu(e)
        }
    };
    this.rfp = function(c, g, f, e, b) {
        var d = new rpy();
        d.llb(c, this.context2D, null, g, f);
        d.parent = this;
        d.rxm = e;
        d.vpj(b);
        return d
    };
    this.sdx = function(e, i, g, f, c, d) {
        var b = new xma();
        b.llb(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.ktx = f;
        b.vpj(d);
        if (c) {
            b.vhe = c.ojt
        }
        return b
    };
    this.tei = function(e, j, g, i, f, c, d) {
        var b = new xma();
        b.llb(e, this.context2D, null, i, null, j);
        b.parent = this;
        b.ktx = f;
        b.value = g;
        b.vpj(d);
        if (c) {
            b.vhe = c.ojt
        }
        return b
    };
    this.epa = function(d, f, e, c) {
        var b = new kiw();
        b.llb(d, this.context2D, null, f, null);
        b.parent = this;
        b.ktx = e;
        if (c) {
            b.vhe = c.ojt
        }
        return b
    };
    this.bgu = function(b) {
        var c = new uem();
        c.llb(b, this.context2D);
        c.parent = this;
        return c
    };
    this.sgt = function(c, b) {
        var d = this.mib.owa("info");
        if (d) {
            d.jsi(b);
            d.udf(c, b)
        }
    };
    this.stop = function() {
        clearInterval(this.ida)
    };
    this.syq = function() {
        var b = this.fnc;
        b.save();
        if (this.akn != null) {
            var d = b.createLinearGradient(this.uqm.x, this.uqm.y, this.uqm.x, this.uqm.y + this.uqm.height);
            d.addColorStop(0, this.akn);
            b.fillStyle = d;
            b.fillRect(this.uqm.x, this.uqm.y, this.uqm.width, this.uqm.height)
        }
        if (this.hhs != null) {
            var d = b.createLinearGradient(this.uqm.x, this.uqm.y, this.uqm.x, this.uqm.y + this.rqt);
            d.addColorStop(0, this.hhs);
            d.addColorStop(1, this.akn);
            b.fillStyle = d;
            b.fillRect(this.uqm.x, this.uqm.y, this.uqm.width, this.rqt)
        }
        if (this.hpn != null) {
            b.drawImage(this.hpn, this.uqm.x, this.uqm.y, this.uqm.width, this.uqm.height)
        }
        if (this.oom && this.oom.width > 0 && this.oom.height > 0) {
            var d = b.createLinearGradient(this.oom.x, this.oom.y, this.oom.x + this.oom.width, this.oom.y),
                c = this.parent.gai.wxh("btn_back");
            d.addColorStop(0.2, this.vxp);
            d.addColorStop(1, this.swk);
            b.fillStyle = d;
            if (this.parent.rpk === cun.fbj.zqk) {
                b.fillRect(this.oom.x, this.oom.y, this.oom.width, this.oom.height);
                if (c) {
                    b.drawImage(c, this.oom.x, this.oom.y, this.oom.width, this.oom.height)
                }
            } else {
                if (this.parent.rpk === cun.fbj.pmj) {
                    b.save();
                    b.translate(this.oom.width / 2, this.oom.height / 2);
                    b.rotate(Math.PI);
                    b.translate(-this.oom.width / 2, -this.oom.height / 2);
                    b.fillRect(this.oom.x, this.oom.y, this.oom.width, this.oom.height);
                    if (c) {
                        b.drawImage(c, this.oom.x, this.oom.y, this.oom.width, this.oom.height)
                    }
                    b.restore()
                }
            }
        }
        b.restore()
    };
    this.ksl = function(k, g, l, e) {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var c = (k != null && g != null && l != null && e != null),
            j = (c === true) ? new icy(k, g, l, e) : new icy(this.x, this.y, this.width, this.height),
            m = this.context2D,
            b = this.mib.ugn();
        m.save();
        if (c) {
            m.beginPath();
            m.rect(k, g, l, e);
            m.closePath();
            m.clip()
        }
        if (this.gqr != null) {
            m.drawImage(this.gqr, 0, 0)
        }
        for (var d = 0, f = b.length; d < f; d++) {
            b[d].ksl()
        }
        if (this.parent.chs === true && this.parent.cvn() === false) {
            this.parent.znt(m, j)
        }
        m.restore();
        if (this.ucm && this.qce) {
            if (c) {
                this.ucm.drawImage(this.qce, k, g, l, e, this.x + k, this.y + g, l, e)
            } else {
                this.ucm.drawImage(this.qce, this.x, this.y)
            }
        }
    };
    this.jjr = function() {
        if (a.parent.jwo === true) {
            a.parent.zlc()
        } else {
            a.parent.npd();
            if (a.parent.nnr() === true) {
                a.parent.gai.vsj("auto_fill");
                a.mib.bnh("start", "#mji", [a.cqu]);
                a.iup = setTimeout(a.mxl, a.cqu)
            }
        }
    };
    this.mxl = function() {
        a.parent.zlc();
        a.mib.bnh("start", "#qpx")
    }
}
fjr.prototype = new bom;

function dej() {
    this.rxm = null;
    this.hit = [];
    this.ahq = [];
    this.qik = [];
    this.ics = "arial";
    this.lkl = "bold";
    this.fhx = "yellow";
    this.ctl = 30;
    this.qmu = 6;
    this.dku = function(a) {
        try {
            this.ics = a.font;
            this.lkl = a.scm;
            this.fhx = a.ujm
        } catch (b) {
            console.error(b)
        }
    };
    this.vpj = function(a) {
        try {
            this.ctl = a.fontSize;
            this.qmu = a.bch
        } catch (b) {
            console.error(b)
        }
    };
    this.get = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.qik[b] = c[a - 1 - b]
        }
    };
    this.auq = function(c) {
        for (var b = 0, a = c.length; b < a; b++) {
            this.ahq[b] = c[a - 1 - b];
            this.hit[b] = c[a - 1 - b]
        }
    };
    this.fsg = function(c) {
        for (var b = 0, a = this.ahq.length; b < a; b++) {
            this.hit[b] = this.ahq[b] * c
        }
        this.ksl()
    };
    this.ksl = function() {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var b = this.context2D,
            g = this.height - 2 * this.qmu,
            c = this.width,
            d = Math.round(g / this.qik.length),
            f = (this.ctl < d) ? this.ctl : d - 2;
        b.save();
        if (this.rxm != null) {
            b.drawImage(this.rxm, 0, 0)
        }
        for (var e = 0, a = this.qik.length; e < a; e++) {
            cun.hfb.cwu(b, this.qik[e], this.fhx, 0, this.qmu + d * (e), c, f, this.ics, f, this.lkl, this.qmu)
        }
        for (var e = 0, a = this.hit.length; e < a; e++) {
            cun.hfb.dsg(b, this.parent.oht(this.hit[e]), this.fhx, 0, this.qmu + d * (e), c, f, this.ics, f, this.lkl, this.qmu)
        }
        b.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    }
}
dej.prototype = new bom;

function ngo() {
    var a = this;
    this.nmk = 0;
    this.xsi = 1;
    this.iod = 7;
    this.voo = 0;
    this.tvv = 0;
    this.okq = 0;
    this.ohe = 0;
    this.wkk = this.nmk;
    this.cep = this.mmk;
    this.teh = function() {
        this.cbi(true);
        this.fkj = true;
        this.ybj = false;
        this.wkk = this.nmk;
        this.tvv = Math.floor(this.width / this.iod);
        this.ohe = 0;
        this.okq = 0
    };
    this.zma = function() {
        this.fkj = true;
        this.ybj = false;
        this.wkk = this.xsi;
        this.tvv = -Math.floor(this.width / this.iod);
        this.ohe = 1;
        this.okq = this.width
    };
    this.hjz = function() {
        if (a.ohe < a.iod) {
            a.okq += a.tvv;
            a.ohe++;
            return true
        } else {
            a.fkj = false;
            a.ybj = true;
            if (a.wkk == a.xsi) {
                a.cbi(false)
            }
            return false
        }
    };
    this.vsj = function() {
        if (this.uhv == this.cgu) {
            this.parent.gai.vsj("maxstep")
        } else {
            this.parent.gai.vsj("step" + (this.uhv % 12))
        }
    };
    this.nbf = function() {
        a.nyy = false
    };
    this.ksl = function() {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        this.kim();
        if (this.ucm && this.qce) {
            if (this.fkj) {
                if (this.okq > 0) {
                    if (this.cep == this.nmb) {
                        this.ucm.drawImage(this.qce, this.width - this.okq, 0, this.okq, this.height, this.x, this.y, this.okq, this.height)
                    } else {
                        if (this.cep == this.mmk) {
                            this.ucm.drawImage(this.qce, 0, 0, this.okq, this.height, this.x + this.width - this.okq, this.y, this.okq, this.height)
                        }
                    }
                }
            } else {
                this.ucm.drawImage(this.qce, this.x, this.y)
            }
        }
    };
    this.gve = function(c) {
        var f = this.fhx,
            e = this.fhx,
            b = 0,
            d = 0;
        if (this.cep == this.mmk) {
            b = this.lzx;
            d = this.nlu.x - 2 * this.lzx
        } else {
            if (this.cep == this.nmb) {
                b = this.nlu.x + this.nlu.width + this.lzx;
                d = this.width - this.lzx - (this.nlu.x + this.nlu.width + this.lzx)
            }
        }
        if (this.uhv > 0 && this.uhv < this.ilh.length - 1) {
            cun.hfb.roz(c, b, this.nlu.y + ((this.boo - this.aad) * this.nop), d, this.nop, this.oya, this.ymn);
            cun.hfb.dsg(c, this.parent.oht(this.ilh[this.uhv]), this.qrb, b, this.nlu.y + ((this.boo - this.aad) * this.nop) + (this.nop - this.ctl) / 2, d, this.ctl, this.ics, this.ctl, this.lkl, this.lzx)
        } else {
            if (this.uhv == 0) {
                f = this.qrb
            } else {
                if (this.uhv == this.ilh.length - 1) {
                    e = this.qrb
                }
            }
        }
        cun.hfb.roz(c, b, this.nlu.y + (this.nop * (this.boo - 1)), d, this.nop, this.oya, this.ymn);
        cun.hfb.dsg(c, this.parent.oht(this.ilh[0]), f, b, this.nlu.y + (this.nop * (this.boo - 1)) + (this.nop - this.ctl) / 2, d, this.ctl, this.ics, this.ctl, this.lkl, this.lzx);
        cun.hfb.roz(c, b, this.nlu.y, d, this.nop, this.oya, this.ymn);
        cun.hfb.dsg(c, this.parent.oht(this.ilh[this.ilh.length - 1]), e, b, this.nlu.y + (this.nop - this.ctl) / 2, d, this.ctl, this.ics, this.ctl, this.lkl, this.lzx);
        cun.hfb.abt(c, "+", this.fhx, this.mxc.x, this.mxc.y, this.mxc.width, this.mxc.height, this.ics, this.ctl, this.lkl);
        cun.hfb.abt(c, "", this.fhx, this.isp.x, this.isp.y, this.isp.width, this.isp.height, this.ics, this.ctl, this.lkl);
        if (this.dzy) {
            cun.hfb.abt(c, this.dzy, this.fhx, this.yiz.x, this.yiz.y, this.yiz.width, this.yiz.height, this.ics, this.ctl, this.lkl)
        }
    }
}
ngo.prototype = new vdz;

function ezh() {
    this.rxm = null;
    this.mbf = [];
    this.ybj = false;
    this.hit = false;
    this.aze = false;
    this.vny = false;
    this.ror = true;
    this.qlo = -1;
    this.pgu = null;
    this.gqr = null;
    this.fnc = null;
    this.ics = "arial";
    this.lkl = "bold";
    this.vsn = "yellow";
    this.hdk = "yellow";
    this.fhx = "yellow";
    this.ctl = 18;
    this.yjs = 0;
    this.pbz = 0;
    this.ymi = 20;
    this.tza = 0;
    this.dku = function(a) {
        try {
            this.ics = a.font;
            this.lkl = a.scm;
            this.vsn = a.izi;
            this.hdk = a.lfg;
            this.fhx = a.ujm
        } catch (b) {
            console.error(b)
        }
    };
    this.vpj = function(a) {
        try {
            this.ctl = a.fontSize;
            this.yjs = a.ylv;
            this.pbz = a.fjm;
            this.ymi = a.wlf;
            this.tza = a.uyn;
            this.ror = a.xwn
        } catch (b) {
            console.error(b)
        }
    };
    this.qmq = function(a, b) {
        if (a >= this.x && a <= this.x + this.width && b >= this.y && b <= this.y + this.height && this.bsl() === true) {
            if (this.qvq() === true) {
                this.parent.ulz(this.aze);
                this.otk();
                if (this.aze) {
                    this.parent.gai.vsj("hold")
                } else {
                    this.parent.gai.vsj("unhold")
                }
                return true
            }
        }
        return false
    };
    this.vlq = function() {};
    this.chp = function() {};
    this.cyi = function() {};
    this.eyu = function(a) {
        this.ybj = a
    };
    this.qvq = function() {
        return this.ybj
    };
    this.vbu = function(a) {
        if (this.gqr == null) {
            this.gqr = document.createElement("canvas");
            this.gqr.width = this.width;
            this.gqr.height = this.height;
            this.fnc = this.gqr.getContext("2d");
            this.fnc.save();
            this.fnc.drawImage(a, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);
            this.fnc.restore()
        }
    };
    this.otk = function() {
        this.aze = !this.aze;
        if (this.aze) {
            this.pgu = this.parent.language.qyb;
            this.fhx = this.vsn
        }
        this.ksl()
    };
    this.ilm = function(d, e) {
        var a = 0,
            c = false;
        if (d == this.parent.dzm) {
            this.qlo = d;
            c = true
        } else {
            if ((a = this.parent.ybf.length) > 0) {
                for (var b = 0; b < a && !c; b++) {
                    if (d == this.parent.ybf[b]) {
                        this.qlo = this.parent.nxh[b];
                        c = true
                    }
                }
            }
        }
        if (!c) {
            this.qlo = d
        }
        if (e && e === true) {
            this.ksl()
        }
    };
    this.llj = function(a, b) {
        this.aze = a;
        if (this.aze) {
            this.pgu = this.parent.language.qyb;
            this.fhx = this.vsn
        }
        if (b && b === true) {
            this.ksl()
        }
    };
    this.onr = function() {
        return this.aze
    };
    this.whf = function(a, b) {
        this.hit = a;
        if (this.hit) {
            this.pgu = this.parent.language.win;
            this.fhx = this.hdk
        }
        if (b && b === true) {
            this.ksl()
        }
    };
    this.pjv = function() {
        return this.hit
    };
    this.lzh = function(c, b, a, d) {
        this.vny = c;
        this.pgu = b;
        if (a) {
            this.fhx = a
        }
        if (d && d === true) {
            this.ksl()
        }
    };
    this.tub = function() {
        return this.vny
    };
    this.ksl = function() {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var a = this.context2D,
            b = null;
        a.save();
        a.beginPath();
        a.rect(this.x, this.y, this.width, this.height);
        a.closePath();
        a.clip();
        if (this.gqr != null) {
            a.drawImage(this.gqr, this.x, this.y)
        }
        if (this.rxm != null) {
            if (this.aze || this.hit) {
                if (this.ror) {
                    a.drawImage(this.rxm, this.mbf[this.qlo] * this.yjs, 0, this.yjs, this.pbz, this.x, this.y + this.ymi, this.yjs, this.pbz)
                } else {
                    a.drawImage(this.rxm, this.mbf[this.qlo] * this.yjs, 0, this.yjs, this.pbz, this.x, this.y, this.yjs, this.pbz)
                }
            } else {
                a.drawImage(this.rxm, this.mbf[this.qlo] * this.yjs, 0, this.yjs, this.pbz, this.x, this.y + this.tza, this.yjs, this.pbz)
            }
        }
        if (this.aze || this.hit || this.vny) {
            b = this.pgu
        }
        if (b != null) {
            if (this.ror) {
                cun.hfb.abt(a, b, this.fhx, this.x, this.y, this.width, this.ymi, this.ics, this.ctl, this.lkl)
            } else {
                cun.hfb.abt(a, b, this.fhx, this.x, this.y + this.pbz, this.width, this.ymi, this.ics, this.ctl, this.lkl)
            }
        }
        a.restore()
    }
}
ezh.prototype = new bom;
cun.rwr = {
    ckk: {
        muh: 0,
        quc: 1,
        rmg: 2,
        xhk: 3,
        tej: 4,
        ltl: 5,
        pcg: 6,
        lgw: 7,
        plx: 8,
        myz: 9,
        hul: 10,
        pje: 11,
        bxa: 12,
        svd: 13,
        jvv: 14,
        eso: 15,
        iem: 68
    }
};

function mws() {
    this.rrf = false;
    this.wad = null;
    this.ssd = null;
    this.sqr = null;
    this.hhl = null;
    this.vmz = null;
    this.gvv = [];
    this.enj = null;
    this.jix = null;
    this.win = 0;
    this.wqr = 0;
    this.wbs = 0;
    this.totalBet = 1000;
    this.kfq = [];
    this.ldg = 0;
    this.puh = 0;
    this.qjh = 0;
    this.dnd = [];
    this.zye = [];
    this.mbf = [];
    this.dzm = 63;
    this.ppx = -1;
    this.jxj = -1;
    this.sgr = [];
    this.rcy = [];
    this.jqz = 0;
    this.gei = null;
    this.txw = null;
    this.gyu = null;
    this.zaw = null;
    this.lzj = null;
    this.dkc = false;
    this.joq = false;
    this.zac = false;
    this.dmx = false;
    this.chs = false;
    this.dkp = true;
    this.jwo = false;
    this.jbd = 1;
    this.jwm = 0;
    this.jui = 150;
    this.mjf = 150;
    this.ukh = 200;
    this.fyk = 120;
    this.tmz = 0;
    this.ybf = [];
    this.nxh = [];
    this.rlv = true;
    this.wox = true;
    this.gah = false;
    this.koz = 0;
    this.khl = 0;
    this.bkf = 50;
    this.dkh = 100;
    this.zrk = false;
    this.zmb = 0;
    this.rnw = 0;
    this.kbp = false;
    this.dtw = 0;
    this.uul = 0;
    this.jkk = 2;
    this.eni = 1;
    this.cgk = false;
    this.yeq = 0;
    this.jpo = 0;
    this.czu = false;
    this.ogo = 0;
    this.vlb = 0;
    this.lka = 0;
    this.mbm = -1;
    this.bhy = 0;
    this.vgx = 0;
    this.hxl = 0;
    this.doc = true;
    this.gdt = false;
    this.nxe = false;
    this.qoa = false;
    this.ahh = true;
    this.skv = null;
    this.tgy = false;
    this.ouc = true;
    this.cky = "";
    this.fsw = 0;
    this.mkg = 0;
    this.emf = 0;
    this.ewr = 0;
    this.grl = function() {
        var a = new lfh();
        a.llb();
        return a
    };
    this.qzn = function() {
        this.ihh = new jqb()
    };
    this.flh = function() {
        while (this.wbs < this.ldr()) {
            this.wbs++
        }
        var b = this.pdw(this.czu);
        if (this.wbs > b) {
            var a = (b < 0) ? 0 : b;
            this.wbs = a
        }
        this.totalBet = this.kfq[this.wbs];
        this.gvm();
        this.xve();
        this.quv();
        this.jkt()
    };
    this.jyl = function() {
        this.tji();
        this.wcz();
        this.ccn();
        this.tle();
        if (this.fbj.ztk) {
            this.kwh()
        }
        if (this.fbj.anz) {
            this.oyb()
        }
        if (this.fbj.pfx) {
            this.mrt();
            if (!this.fbj.zwj) {
                this.jyo()
            }
        }
        if (this.lrw) {
            this.kii()
        } else {
            if (this.fbj.vsz) {
                this.rld()
            }
            this.bjq();
            if (this.uhz()) {
                this.yyz()
            }
            if (this.wqz() != null && !this.cvn()) {
                this.qsx(this.wqz())
            }
        }
        if (!(this.lrw && !this.lvo)) {
            this.wrc();
            this.opg()
        }
        if (this.fbj.zwj) {
            this.rzj(this.wqz())
        }
        this.wzj()
    };
    this.gud = function() {
        if (!this.cij) {
            if (this.ggt === false) {
                this.waw.style.marginTop = (-this.height / 2 + this.mrb()) + "px";
                this.waw.style.marginLeft = (-this.width / 2) + "px"
            } else {
                this.waw.style.left = "0px";
                this.waw.style.top = "0px";
                this.waw.style.marginTop = ((this.apo - this.height) / 2 + this.mrb()) + "px";
                this.waw.style.marginLeft = ((this.zep - this.width) / 2) + "px"
            }
            this.waw.style.width = (this.width > this.zep) ? this.zep + "px" : this.width + "px";
            this.waw.style.height = (this.height > this.apo) ? this.apo + "px" : this.height + "px";
            this.canvas.width = Math.round(this.width);
            this.canvas.height = Math.round(this.height);
            this.context2D = this.canvas.getContext("2d");
            if (this.hoo) {
                this.hoo.style.width = this.width + "px";
                this.hoo.style.height = this.height + "px"
            }
            this.offsetLeft = this.waw.offsetLeft;
            this.offsetTop = this.waw.offsetTop;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
            this.cij = true
        }
    };
    this.wzj = function() {};
    this.mrt = function() {
        mws.prototype.mrt.call(this);
        var a = this.dan.owa("topi");
        try {
            if (a) {
                if (cun.emv.value57 === cun.ui.tly || this.wqz() != null) {
                    a.tzh("language", this.gai.wxh("icon_l"), sessionStorage.sessionValue1, [cun.language.EN, cun.language.DE, cun.language.RU, cun.language.EE, cun.language.ES, cun.language.TR, cun.language.CZ, cun.language.GR, cun.language.AT, cun.language.US, cun.language.BG, cun.language.CO, cun.language.MX, cun.language.CL, cun.language.VE, cun.language.BR, cun.language.GE, cun.language.HU, cun.language.RO, cun.language.PT, cun.language.FR, cun.language.HR, cun.language.IT, cun.language.SE])
                }
                if (this.cvn() === false) {
                    a.bda("help", new String("?"), true)
                }
                if (cun.emv.value27 && this.qur) {
                    a.tzh("audio", this.gai.wxh("icon_a"), this.pno[this.vss], this.pno)
                }
                if (sessionStorage.sessionValue14 == "true" && cun.hfb.dxh()) {
                    a.bda("fullscreen", this.gai.wxh("icon_f"), this.qel)
                }
                if (cun.emv.value28 && this.doc) {
                    a.bda("turbo", this.gai.wxh("icon_t"), this.gdt)
                }
                a.bda("auto", this.gai.wxh("icon_as"), this.jwo);
                a.bda("gamble", this.gai.wxh("icon_g"), this.joq)
            }
        } catch (b) {
            console.error(b)
        }
    };
    this.jyo = function() {
        mws.prototype.jyo.call(this);
        var b = this.dan.owa("topb");
        try {
            if (b) {
                if (cun.emv.value5.length > 1 && (cun.emv.value57 === cun.ui.tly || this.wqz() != null)) {
                    b.gqn("language", this.language.language, this.ngf(cun.emv.value5[this.yyf]), this.osk, this.ihh.language, 0, 1)
                }
                if (cun.emv.value27 && this.qur) {
                    b.gqn("audio", this.language.audio, this.gai.wxh("btn_a"), this.ydn, this.ihh.audio, this.vss, this.pno.length)
                }
                if (sessionStorage.sessionValue14 == "true" && cun.hfb.dxh()) {
                    b.gqn("fullscreen", this.language.qel, this.gai.wxh("btn_f"), (cun.hfb.qza) ? this.tgz : this.byn, this.ihh.qel, (this.qel) ? 1 : 0, 2)
                }
                if (cun.emv.value28 && this.doc) {
                    b.gqn("turbo", this.language.gdt, this.gai.wxh("btn_t"), this.msv, this.ihh.gdt, (this.gdt) ? 1 : 0, 2)
                }
                b.kxy("help", this.language.khd, this.gai.wxh("btn_p"), this.cvg, this.ihh.nkq);
                if (cun.emv.value12 && !this.lhw()) {
                    b.kxy("history", this.language.iax, this.gai.wxh("btn_h"), this.dbj, this.ihh.iax)
                }
                if (cun.emv.value36 && !this.lhw()) {
                    b.kxy("statistic", this.language.baa, this.gai.wxh("btn_st"), this.bwq, this.ihh.baa)
                }
                b.fpj()
            }
        } catch (a) {
            console.error(a)
        }
    };
    this.rzj = function(a) {
        mws.prototype.rzj.call(this, a);
        var b = this.dan.owa("settings"),
            c = "";
        if (b) {
            b.gqn("language", this.language.language, this.ngf(cun.emv.value5[this.yyf]), this.osk, 0, 1);
            if (cun.emv.value27 && this.qur) {
                b.gqn("audio", this.language.audio, this.gai.wxh("btn_a"), this.ydn, this.vss, this.pno.length)
            }
            if (sessionStorage.sessionValue14 == "true" && cun.hfb.dxh()) {
                b.gqn("fullscreen", this.language.qel, this.gai.wxh("btn_f"), this.tgz, (this.qel) ? 1 : 0, 2)
            }
            if (cun.emv.value28 && this.doc) {
                b.gqn("turbo", this.language.gdt, this.gai.wxh("btn_t"), this.msv, (this.gdt) ? 1 : 0, 2)
            }
            b.gqn("gamble", this.language.joq, this.gai.wxh("btn_g"), this.aov, (this.joq) ? 1 : 0, 2);
            if (this.jzx[this.vsp] === cun.gro.mmk) {
                c = this.language.left
            } else {
                if (this.jzx[this.vsp] === cun.gro.nmb) {
                    c = this.language.mtg
                } else {
                    if (this.jzx[this.vsp] === cun.gro.ouo) {
                        c = this.language.koi
                    }
                }
            }
            b.gqn("adjustment", c, this.gai.wxh("btn_l"), this.vai, (this.rpk === cun.hfb.jyx) ? 0 : 1, 2);
            b.bte("help", this.language.icu, this.gai.wxh("btn_p"), this.cvg);
            if (cun.emv.value12 && !this.lhw()) {
                b.bte("history", this.language.iax, this.gai.wxh("btn_h"), this.dbj)
            }
            if (cun.emv.value36 && !this.lhw()) {
                b.bte("statistic", this.language.baa, this.gai.wxh("btn_st"), this.bwq)
            }
            b.bfm = false;
            b.ajo(this.fbj.csu);
            b.vpj(this.fbj.csu);
            b.dku(this.style.csu);
            b.nhz(this.language, false)
        }
    };
    this.tji = function() {
        this.enj = new fjr();
        this.enj.parent = this;
        this.enj.ouc = this.ouc;
        this.enj.hpn = this.gai.wxh("control_back");
        this.enj.llb(this.fbj.dlp.enh, null, this.context2D);
        this.enj.ajo(this.fbj.dlp, this.style.dlp);
        this.enj.sgt(this.gei, 0);
        this.enj.sgt(this.gyu, 1);
        this.enj.sgt(this.txw, 2)
    };
    this.oyb = function() {
        var a = new ngo();
        a.llb(this.fbj.xap.enh, null, this.context2D);
        a.parent = this;
        a.dzy = this.language.rxh;
        a.ktx = this.sfr;
        a.lsy = this.ihh.tzf.ojt;
        a.qib = this.ihh.dcr.ojt;
        a.usb = this.gai.wxh("effect");
        a.vpj(this.fbj.xap);
        a.dku(this.style.has);
        a.flh(this.kfq, this.ldr(), this.pdw(false));
        a.mfu(this.wbs, false);
        a.cbi(false);
        this.dan.byd("betsel", a)
    };
    this.opg = function() {
        this.jix.hoe(this.fbj.nkq, this.style.nkq, this.gai.wxh("btn_s"))
    };
    this.rld = function() {
        var a = new szt();
        a.llb(this.fbj.top.enh, null, this.context2D);
        a.parent = this;
        this.dan.byd("tops", a)
    };
    this.wcz = function() {
        this.wad = new ezh();
        this.ssd = new ezh();
        this.sqr = new ezh();
        this.hhl = new ezh();
        this.vmz = new ezh();
        this.wad.llb(this.fbj.uhn, this.context2D);
        this.ssd.llb(this.fbj.zkp, this.context2D);
        this.sqr.llb(this.fbj.srt, this.context2D);
        this.hhl.llb(this.fbj.rkq, this.context2D);
        this.vmz.llb(this.fbj.fcg, this.context2D);
        this.gvv = [this.wad, this.ssd, this.sqr, this.hhl, this.vmz];
        for (var b = 0, a = this.gvv.length; b < a; b++) {
            this.gvv[b].parent = this;
            this.gvv[b].rxm = this.gai.wxh("cards");
            this.gvv[b].mbf = this.mbf;
            this.gvv[b].ilm(this.dzm);
            this.gvv[b].dku(this.style.ywx);
            this.gvv[b].vpj(this.fbj.ywx)
        }
    };
    this.wrc = function() {
        this.jix = new nas();
        this.jix.llb(this.fbj.nkq.enh, null, this.context2D);
        this.jix.parent = this;
        this.jix.kup(false);
        this.jix.vpj(this.fbj.nkq);
        this.jix.dku(this.style.nkq)
    };
    this.ccn = function() {
        var a = new dej();
        a.llb(this.fbj.khd.enh, null, this.context2D);
        a.parent = this;
        a.rxm = this.gai.wxh("paytable");
        a.vpj(this.fbj.khd);
        a.dku(this.style.khd);
        a.auq(this.dnd);
        a.get(this.zye);
        this.dan.byd("paytable", a)
    };
    this.tle = function() {};
    this.kwh = function() {
        var a = new ygt();
        a.llb(this.fbj.wfy.enh, this.context2D, null, this.gai.wxh("winpanel"), "");
        a.parent = this;
        a.vpj(this.fbj.wfy);
        a.dku(this.style.wfy);
        a.cbi(false);
        this.dan.byd("winp", a)
    };
    this.kii = function() {
        var a = new rgy();
        a.llb(this.fbj.iax.enh, null, this.context2D);
        a.parent = this;
        a.ajo(this.fbj.iax);
        a.dku(this.style.iax);
        this.dan.byd("history", a)
    };
    this.uns = function(d, b, c, a, e) {
        this.irg = true;
        this.state = d;
        this.yet = b;
        this.ctp = e;
        this.bju = a;
        clearInterval(this.xii);
        if (this.qur) {
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                this.vss = 0
            }
            if (this.gai.lud === true) {
                this.dzj(this.pno[this.vss])
            } else {
                this.rsg((this.pno[this.vss] === 0))
            }
        }
        if (this.cfs === true) {
            this.ksa = true
        }
        this.flh();
        this.jyl();
        this.zmn();
        this.mqv();
        this.zaw.vfv(c, a);
        window.pqg(this.xuh)
    };
    this.xuh = function() {
        cun.qrf.irn(cun.qrf.yet);
        cun.qrf.kbk = true;
        cun.qrf.pzb();
        cun.qrf.ksl();
        if (cun.qrf.cfs === true) {
            cun.qrf.ggh(true)
        }
        if (cun.hfb.afy === cun.os.dac && cun.hfb.vki !== cun.dkv.kem) {
            cun.qrf.wfo([{
                dmt: cun.ute.mpr
            }])
        } else {
            cun.qrf.wzu(cun.qrf.state)
        }
        cun.qrf.nhz();
        if (cun.emv.value37 && !cun.qrf.lhw()) {
            cun.qrf.lhv()
        }
    };
    this.qdm = function() {
        this.rxg = new kox().llb(this, cun.emv.value6)
    };
    this.akb = function() {
        this.rxg = new mef().llb(this, cun.emv.value6)
    };
    this.qmq = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.ksa) {
            return
        }
        var p = 0,
            o = 0,
            d = false,
            q = false,
            l = false,
            j = this.dan.owa("loading"),
            b = this.dan.owa("stats"),
            r = this.dan.owa("topb"),
            n = this.dan.owa("topi"),
            a = this.dan.owa("betsel"),
            m = this.dan.owa("autop"),
            e = this.dan.owa("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.vix) {
                p = g.pageX - this.offsetLeft;
                o = g.pageY - this.offsetTop
            } else {
                p = Math.round((g.pageX - this.offsetLeft) / this.ngv);
                o = Math.round((g.pageY - this.offsetTop) / this.zwd)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.vix) {
                p = c.pageX - this.offsetLeft;
                o = c.pageY - this.offsetTop
            } else {
                p = Math.round((c.pageX - this.offsetLeft) / this.ngv);
                o = Math.round((c.pageY - this.offsetTop) / this.zwd)
            }
        }
        if (this.irg === true) {
            if (m && m.bsl()) {
                if (m.qmq(p, o)) {
                    return
                }
            }
            if (r && r.bsl()) {
                if (r.qmq(p, o)) {
                    clearTimeout(this.hxl);
                    return
                } else {
                    l = true
                }
            }
            if (a) {
                if (a.bsl()) {
                    if (a.qmq(p, o, d)) {
                        clearTimeout(this.hxl);
                        return
                    } else {
                        q = true
                    }
                }
            }
            if (l) {
                this.akj(this.enj.chl(p, o, null));
                return
            } else {
                if (q) {
                    if (a && a.qvq()) {
                        this.zku(this.enj.chl(p, o, null))
                    }
                    return
                }
            }
            if (e && e.bsl()) {
                if (e.qmq(p, o)) {
                    return
                }
            }
            if (n) {
                if (n.qmq(p, o, d)) {
                    return
                }
            }
            if (b && b.bsl()) {
                if (b.qmq(p, o)) {
                    return
                }
            }
            if (this.jix && this.jix.bsl()) {
                if (this.jix.qmq(p, o)) {
                    return
                }
            }
            if (this.zaw && this.zaw.bsl()) {
                if (this.zaw.qmq(p, o)) {
                    return
                }
            }
            if (this.enj) {
                if (this.enj.qmq(p, o, q)) {
                    return
                }
            }
            if (this.gvv) {
                for (var f = 0, k = this.gvv.length; f < k; f++) {
                    if (this.gvv[f].qmq(p, o)) {
                        return
                    }
                }
            }
        } else {
            if (j && j.bsl()) {
                if (j.qmq(p, o)) {
                    return
                }
            }
        }
    };
    this.vlq = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.ksa) {
            return
        }
        var e = this.dan.owa("topb"),
            b = this.dan.owa("betsel"),
            a = this.dan.owa("autop"),
            c = this.dan.owa("settings");
        if (this.irg === true) {
            if (a && a.bsl()) {
                if (a.vlq()) {
                    return
                }
            }
            if (b) {
                if (b.vlq()) {
                    return
                }
            }
            if (this.jix && this.jix.bsl()) {
                if (this.jix.vlq()) {
                    return
                }
            }
            if (this.zaw && this.zaw.bsl()) {
                if (this.zaw.vlq()) {
                    return
                }
            }
            if (this.enj) {
                if (this.enj.vlq()) {
                    return
                }
            }
            if (e) {
                if (e.vlq()) {
                    return
                }
            }
            if (c) {
                if (c.vlq()) {
                    return
                }
            }
        }
    };
    this.chp = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        if (this.ksa) {
            return
        }
        var f = false,
            c = false,
            e = this.dan.owa("topb"),
            b = this.dan.owa("betsel"),
            a = this.dan.owa("autop");
        if (a && a.bsl()) {
            if (a.chp(d.keyCode)) {
                return
            }
        }
        if (e) {
            if (e.chp(d.keyCode)) {
                clearTimeout(this.hxl);
                return
            } else {
                if (e.bsl() && e.qvq()) {
                    c = true
                }
            }
        }
        if (b) {
            if (b.bsl()) {
                if (b.chp(d.keyCode)) {
                    clearTimeout(this.hxl);
                    return
                } else {
                    f = true
                }
            }
        }
        if (c) {
            this.akj(this.enj.chl(null, null, d.keyCode));
            return
        } else {
            if (f) {
                if (b && b.qvq()) {
                    this.zku(this.enj.chl(null, null, d.keyCode))
                }
                return
            }
        }
        if (this.jix && this.jix.bsl()) {
            if (this.jix.chp(d.keyCode)) {
                return
            }
        }
        if (this.zaw && this.zaw.bsl()) {
            if (this.zaw.chp(d.keyCode)) {
                return
            }
        }
        if (this.enj) {
            if (this.enj.chp(d.keyCode)) {
                return
            }
        }
    };
    this.cyi = function(b) {
        if (b.preventDefault) {
            b.preventDefault()
        }
        if (b.stopPropagation) {
            b.stopPropagation()
        }
        if (this.ksa) {
            return
        }
        var a = this.dan.owa("autop"),
            c = this.dan.owa("topb");
        if (a && a.bsl()) {
            if (a.cyi()) {
                return
            }
        }
        if (this.jix && this.jix.bsl()) {
            if (this.jix.cyi()) {
                return
            }
        }
        if (this.zaw && this.zaw.bsl()) {
            if (this.zaw.cyi()) {
                return
            }
        }
        if (this.enj) {
            if (this.enj.cyi()) {
                return
            }
        }
        if (c) {
            if (c.cyi()) {
                return
            }
        }
    };
    this.cvn = function() {
        return (cun.hfb.sqo() && !this.lrw)
    };
    this.apt = function() {
        return (cun.hfb.sqo() && !this.lvo)
    };
    this.qvs = function(a) {
        this.fbj = this.yea(a);
        this.width = this.fbj.canvas.enh.width;
        this.height = this.fbj.canvas.enh.height;
        this.zbp()
    };
    this.tol = function() {
        this.style = new kck()
    };
    this.yea = function(a) {
        this.rpk = a;
        if (a == cun.fbj.zew) {
            return new uyx()
        } else {
            if (a == cun.fbj.tys) {
                return new sek()
            } else {
                if (a == cun.fbj.gil) {
                    return new bew()
                } else {
                    if (a == cun.fbj.jxx) {
                        return new syk()
                    } else {
                        if (a == cun.fbj.udj) {
                            return new lwi()
                        } else {
                            if (a == cun.fbj.erd) {
                                return new ldq()
                            } else {
                                if (a == cun.fbj.ohs) {
                                    return new yie()
                                } else {
                                    if (a == cun.fbj.spm) {
                                        return new vxg()
                                    } else {
                                        if (a == cun.fbj.mlm) {
                                            return new nzd()
                                        } else {
                                            if (a == cun.fbj.pmj) {
                                                return new akq()
                                            } else {
                                                if (a == cun.fbj.zqk) {
                                                    return new ymz()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.zbp = function() {};
    this.zyq = function(a) {
        if (this.cij) {
            this.zpd();
            this.igg(a)
        } else {
            this.zuq()
        }
    };
    this.zpd = function() {
        this.canvas.width = 0;
        if (this.ggt === false) {
            this.waw.style.marginTop = (-this.height / 2 + this.mrb()) + "px";
            this.waw.style.marginLeft = (-this.width / 2) + "px"
        } else {
            this.waw.style.left = "0px";
            this.waw.style.top = "0px";
            this.waw.style.marginTop = ((this.apo - this.height) / 2 + this.mrb()) + "px";
            this.waw.style.marginLeft = ((this.zep - this.width) / 2) + "px"
        }
        this.waw.style.width = (this.width > this.zep) ? this.zep + "px" : this.width + "px";
        this.waw.style.height = (this.height > this.apo) ? this.apo + "px" : this.height + "px";
        this.canvas.width = Math.round(this.width);
        this.canvas.height = Math.round(this.height);
        if (this.hoo) {
            this.hoo.style.width = this.width + "px";
            this.hoo.style.height = this.height + "px"
        }
        this.width = this.canvas.width;
        this.height = this.canvas.height
    };
    this.igg = function(a) {
        this.lwy();
        this.vyu();
        this.svb();
        this.kbe();
        if (!(this.lrw && !this.lvo)) {
            this.xhq()
        }
        if (!this.lrw) {
            if (this.fbj.vsz) {
                if (this.dan.owa("tops")) {
                    this.noy()
                } else {
                    this.rld()
                }
            } else {
                this.dan.gll("tops")
            }
            this.tdq();
            this.xqt();
            if (this.uhz()) {
                this.ltr()
            }
        } else {
            this.kii()
        }
        if (this.fbj.ztk) {
            this.bmx()
        }
        if (this.fbj.anz) {
            this.nzp()
        }
        if (this.fbj.pfx) {
            this.kjk();
            if (!this.fbj.zwj) {
                this.bmo()
            }
        }
        if (this.fbj.zwj) {
            this.wjw()
        }
        this.odh();
        if (a) {
            this.yzo()
        }
    };
    this.lwy = function() {
        if (this.enj) {
            this.enj.eda(this.fbj.dlp.enh);
            this.enj.vpj(this.fbj.dlp)
        }
    };
    this.bmo = function() {
        mws.prototype.bmo.call(this);
        var b = this.dan.owa("topb");
        if (b) {
            if (this.ahh) {
                var a = b.mib.owa("help");
                if (a) {
                    a.eyu(!this.fbj.vsz)
                }
            }
        }
    };
    this.nzp = function() {
        var a = this.dan.owa("betsel");
        if (a) {
            a.eda(this.fbj.xap.enh);
            a.vpj(this.fbj.xap)
        }
    };
    this.vyu = function() {
        if (this.wad) {
            this.wad.eda(this.fbj.uhn)
        }
        if (this.ssd) {
            this.ssd.eda(this.fbj.zkp)
        }
        if (this.sqr) {
            this.sqr.eda(this.fbj.srt)
        }
        if (this.hhl) {
            this.hhl.eda(this.fbj.rkq)
        }
        if (this.vmz) {
            this.vmz.eda(this.fbj.fcg)
        }
        for (var b = 0, a = this.gvv.length; b < a; b++) {
            this.gvv[b].vpj(this.fbj.ywx)
        }
    };
    this.bmx = function() {
        var a = this.dan.owa("winp");
        if (a) {
            a.eda(this.fbj.wfy.enh);
            a.vpj(this.fbj.wfy)
        }
    };
    this.xhq = function() {
        if (this.jix) {
            this.jix.eda(this.fbj.nkq.enh);
            this.jix.vpj(this.fbj.nkq)
        }
    };
    this.noy = function() {
        var a = this.dan.owa("tops");
        if (a) {
            a.eda(this.fbj.top.enh);
            a.cbi(this.fbj.vsz)
        }
    };
    this.svb = function() {
        var a = this.dan.owa("paytable");
        if (a) {
            a.eda(this.fbj.khd.enh);
            a.vpj(this.fbj.khd)
        }
    };
    this.kbe = function() {};
    this.odh = function() {};
    this.yzo = function() {
        if (this.dan.owa("tops")) {
            this.jix.mkq(true);
            this.iar();
            if (this.jix.gls() == 0) {
                this.bon()
            }
        } else {
            this.lxe = null;
            this.jix.qoo(this.qyn, true)
        }
        this.jix.wxw()
    };
    this.gvm = function() {
        this.gei = [];
        if (this.lhw() === false && this.cky != "") {
            this.gei.push(this.cky)
        }
        this.gei.push(this.language.rqj);
        this.gei.push(this.language.zkb + " " + this.oht(this.tqr()) + ((this.cvn() === true) ? "|" : " ") + this.language.agt + " " + this.oht(this.alz()));
        this.gei.push(this.language.adi)
    };
    this.xve = function() {
        this.txw = [];
        this.txw[0] = this.language.iam;
        this.txw[1] = this.language.zsk
    };
    this.quv = function() {
        this.gyu = [];
        this.gyu[0] = this.language.nxr;
        this.gyu[1] = this.language.ipz
    };
    this.jkt = function() {
        this.lzj = [];
        this.lzj[0] = this.language.bee
    };
    this.rkj = function() {
        mws.prototype.rkj.call(this);
        if (this.efh() === true) {
            this.gai.byr(true)
        }
    };
    this.roe = function() {
        var b = cun.emv.value30 + "/poker/sounds/";
        this.gai.hri("collect", null, false, b + "collect");
        this.gai.hri("collectend", null, false, b + "collect1");
        b = cun.emv.value30 + "/basic/sounds/";
        if (!cun.emv.value55) {
            if (this.cvn() === false) {
                this.gai.hri("btn", null, false, b + "btn");
                this.gai.hri("auto_on", null, false, b + "auto_on");
                this.gai.hri("gamble_on", null, false, b + "gamble_on");
                this.gai.hri("gamble_off", null, false, b + "gamble_off");
                this.gai.hri("gambleprop", null, true, b + "gambleprop");
                this.gai.hri("auto_off", null, false, b + "auto_off");
                for (var a = 0; a < 12; a++) {
                    this.gai.hri("step" + a, null, false, b + "step" + (a + 1))
                }
                this.gai.hri("maxstep", null, false, b + "maxstep")
            } else {
                this.gai.hri("btn", null, false, b + "btn2");
                this.gai.hri("auto_fill", null, false, b + "auto_fill")
            }
        } else {
            this.gai.hri("btn", null, false, b + "ama_btn");
            if (this.cvn() === false) {
                this.gai.hri("gamble_on", null, false, b + "ama_gamble_on");
                this.gai.hri("gamble_off", null, false, b + "ama_gamble_off");
                this.gai.hri("gambleprop", null, true, b + "ama_gambleprop");
                for (var a = 0; a < 12; a++) {
                    this.gai.hri("step" + a, null, false, b + "ama_step")
                }
                this.gai.hri("maxstep", null, false, b + "ama_step")
            }
        }
        this.gai.hri("silence", null, false, b + "silence");
        this.gai.hri("audioon", null, false, b + "audio_on");
        if (this.cvn() === false) {
            this.gai.hri("panel_in", null, false, b + "panel_in");
            this.gai.hri("panel_out", null, false, b + "panel_out")
        }
        this.pjt();
        this.cow()
    };
    this.cow = function() {
        var b = cun.emv.value30 + "/poker/sounds/";
        this.gai.hri("hold", null, false, b + "hold");
        this.gai.hri("unhold", null, false, b + "unhold");
        for (var a = 0; a < 5; a++) {
            this.gai.hri("deal" + a, null, false, b + "deal2")
        }
    };
    this.pjt = function() {
        for (var a = 0; a < this.uul; a++) {
            this.gai.hri("win" + a, this.joi, false, this.rnp + "win" + (a + 1))
        }
    };
    this.gvo = function() {
        var a = this.jcn + this.fbj.type + "/";
        this.gai.mhy("icon", a + "icon_out.png");
        this.gai.mhy("back", a + "main.jpg");
        this.gai.mhy("cards", a + "cardDeck.png");
        this.gai.mhy("winpanel", a + "winPanel.png");
        this.gai.mhy("help", a + "help.jpg");
        a = cun.emv.value30 + "/basic/images/" + this.fbj.type + "/";
        if (this.fbj.chd === true) {
            this.gai.mhy("btn_back", a + "buttonback.png")
        }
        a = cun.emv.value30 + "/poker/images/" + this.fbj.type + "/";
        if (this.cvn() === true) {
            this.gai.cxi(a, "gui_mobile_v15.json")
        } else {
            if (cun.emv.value57 === cun.ui.tly || this.wqz() != null) {
                this.gai.cxi(a, "gui_desktop_v25.json")
            } else {
                this.gai.cxi(a, "gui_desktop_v15.json")
            }
        }
        this.xjq()
    };
    this.xjq = function() {
        var a = this.jcn + this.fbj.type + "/";
        this.gai.mhy("g_back", a + "gamble.jpg")
    };
    this.yce = function() {
        if (this.zac && !this.gah) {
            this.ijl(this.qjh - this.win - this.wqr, true)
        } else {
            this.ijl(this.qjh, true)
        }
        this.lhi(this.totalBet, true);
        this.qzi();
        this.dan.bnh("tops", "#ksl");
        this.dan.bnh("settings", "#sgs", [0, 0, this.oht(this.nlf())]);
        this.ksl()
    };
    this.ksl = function(m, l, n, t) {
        if (cun.qrf.fus()) {
            var a = (m != null && l != null && n != null && t != null),
                c = (a === true) ? new icy(m, l, n, t) : new icy(cun.qrf.fbj.qrf.enh.x, cun.qrf.fbj.qrf.enh.y, cun.qrf.fbj.qrf.enh.width, cun.qrf.fbj.qrf.enh.height),
                q = cun.qrf.context2D,
                e = cun.qrf.canvas,
                f = (cun.qrf.lvo === true) ? cun.qrf.style.qrf.nlw : cun.qrf.style.qrf.backgroundColor,
                z = cun.qrf.dan.owa("stats"),
                b = cun.qrf.dan.owa("history"),
                u = cun.qrf.dan.owa("topb"),
                g = cun.qrf.dan.owa("topi"),
                j = cun.qrf.dan.owa("betsel"),
                v = cun.qrf.dan.owa("paytable"),
                p = cun.qrf.dan.owa("tops"),
                k = cun.qrf.dan.owa("winp"),
                o = cun.qrf.dan.owa("autop"),
                d = cun.qrf.dan.owa("settings");
            cun.qrf.chs = false;
            q.save();
            if (a) {
                q.beginPath();
                q.rect(m, l, n, t);
                q.closePath();
                q.clip()
            }
            q.clearRect(0, 0, cun.qrf.width, cun.qrf.height);
            q.restore();
            if (cun.qrf.fbj.ivp) {
                cun.hfb.roz(q, cun.qrf.fbj.qrf.enh.x - cun.qrf.fbj.qrf.bao, cun.qrf.fbj.qrf.enh.y - cun.qrf.fbj.qrf.bao, cun.qrf.fbj.qrf.enh.width + 2 * cun.qrf.fbj.qrf.bao, cun.qrf.fbj.qrf.enh.height + 2 * cun.qrf.fbj.qrf.bao, f, 1)
            }
            if (b) {
                b.ksl()
            }
            if (g) {
                g.ksl()
            }
            if (p && p.bsl()) {
                p.ksl()
            }
            if (z && z.bsl()) {
                z.ksl()
            } else {
                if (cun.qrf.jix != null && cun.qrf.jix.bsl()) {
                    cun.qrf.jix.ksl()
                } else {
                    if (cun.qrf.zaw != null && cun.qrf.zaw.bsl()) {
                        cun.qrf.zaw.ksl()
                    } else {
                        q.drawImage(cun.qrf.gai.wxh("back"), cun.qrf.fbj.qrf.enh.x, cun.qrf.fbj.qrf.enh.y);
                        if (cun.qrf.enj) {
                            cun.qrf.enj.ksl()
                        }
                        for (var r = 0, s = cun.qrf.gvv.length; r < s; r++) {
                            cun.qrf.gvv[r].vbu(e);
                            cun.qrf.gvv[r].ksl()
                        }
                        if (k) {
                            k.ksl()
                        }
                        if (v) {
                            v.ksl()
                        }
                    }
                }
            }
            if (j) {
                j.ksl()
            }
            if (u) {
                u.ksl()
            }
            if (o) {
                o.ksl()
            }
            if (d) {
                d.ksl()
            }
        }
    };
    this.znt = function(a, b) {
        this.chs = true;
        cun.hfb.roz(a, b.x, b.y, b.width, b.height, "black", 0.5)
    };
    this.rbi = function() {
        this.wke();
        if (this.state == cun.rwr.ckk.tej && this.ppx > 0) {
            this.gai.ykp("win" + (this.ppx - 1))
        }
        this.enj.mib.bnh("info", "#wam");
        this.acu(false);
        this.enj.qla(false);
        this.jua(false);
        this.jix.vmo();
        this.jix.qla(true);
        this.dan.bnh("settings", "#slm");
        this.enj.mib.bnh("setting", "#ofd", [this.dan.bnh("settings", "#bsl")])
    };
    this.bon = function() {
        this.jix.qla(false);
        if (this.state != cun.rwr.ckk.rmg && this.state != cun.rwr.ckk.pje) {
            this.enj.qla(true)
        } else {
            this.enj.rmw(true)
        }
        this.acu(true);
        this.jua(true);
        this.jix.slm();
        this.enj.mib.bnh("info", "#sao", [0])
    };
    this.rae = function() {
        var a = cun.qrf.enj.mib.owa("gamble");
        cun.qrf.hgy();
        cun.qrf.tsd();
        if (a) {
            a.eeq();
            a.ofd(cun.qrf.joq)
        }
        cun.qrf.wke();
        cun.qrf.gai.ykp("win" + (cun.qrf.ppx - 1));
        cun.qrf.enj.mib.bnh("info", "#wam");
        cun.qrf.enj.qla(false);
        cun.qrf.jua(false);
        cun.qrf.zaw.qla(true);
        cun.qrf.zaw.ilg(cun.qrf.qjh, cun.qrf.win + cun.qrf.wqr, cun.qrf.ppx, false);
        cun.qrf.zaw.vmo(!cun.qrf.jwo)
    };
    this.fmx = function() {
        cun.qrf.gxh();
        cun.qrf.zaw.rkz();
        cun.qrf.jua(true);
        cun.qrf.zaw.qla(false);
        cun.qrf.zaw.cbi(false, true);
        cun.qrf.enj.mib.bnh("start", "#bzf", [cun.qrf.language.start, true]);
        cun.qrf.gah = true;
        if (cun.qrf.jwo) {
            cun.qrf.enj.qab(true);
            cun.qrf.vgx = setTimeout(cun.qrf.jhx, 800)
        } else {
            cun.qrf.enj.qla(true);
            if (!(cun.qrf.jwo || cun.qrf.zac)) {
                cun.qrf.acu(true)
            }
            cun.qrf.enj.mib.bnh("info", "#sao", [0])
        }
    };
    this.jjp = function() {
        var a = this.dan.owa("tops");
        if (a) {
            a.mfu(0);
            this.ksl()
        }
    };
    this.ang = function() {
        this.pko();
        this.yce();
        this.tsd();
        this.acu(false);
        this.qze(false);
        this.dan.bnh("winp", "#cbi", [false]);
        this.dan.bnh("paytable", "#cbi", [true]);
        this.ehj()
    };
    this.cpn = function() {
        this.obi();
        if (this.jkk == this.eni) {
            this.yce()
        }
        this.acu(false);
        this.qze(false);
        this.ehj()
    };
    this.yhi = function() {
        this.uhf();
        if (this.jkk >= 2 && this.eni == 2) {
            this.yce()
        }
        this.acu(false);
        this.qze(false);
        this.ehj()
    };
    this.ygq = function() {
        var a = cun.qrf.jui,
            b = 0;
        if (cun.qrf.jpo == 0) {
            cun.qrf.jwm = new Date().getTime()
        } else {
            b = new Date().getTime();
            a = cun.qrf.jui + (cun.qrf.tmz * cun.qrf.jui - (b - cun.qrf.jwm))
        }
        if (!cun.qrf.gvv[cun.qrf.jpo].onr()) {
            cun.qrf.tmz += 1;
            cun.qrf.gai.vsj("deal" + (cun.qrf.tmz - 1));
            cun.qrf.gvv[cun.qrf.jpo].ilm(cun.qrf.sgr[cun.qrf.jpo], true)
        } else {
            a = 0
        }
        cun.qrf.jpo++;
        if (a <= 0) {
            a = 0
        }
        if (cun.qrf.jpo < cun.qrf.sgr.length) {
            if (a == 0) {
                cun.qrf.ygq()
            } else {
                cun.qrf.vlb = setTimeout(cun.qrf.ygq, a)
            }
        } else {
            cun.qrf.vlb = setTimeout(cun.qrf.afm, cun.qrf.jui)
        }
    };
    this.jko = function() {
        var a = 40,
            b = a,
            c = 0;
        if (cun.qrf.jpo == 0) {
            cun.qrf.jwm = new Date().getTime()
        } else {
            c = new Date().getTime();
            b = a + (cun.qrf.tmz * a - (c - cun.qrf.jwm))
        }
        if (!cun.qrf.gvv[cun.qrf.jpo].onr()) {
            cun.qrf.tmz += 1;
            cun.qrf.gvv[cun.qrf.jpo].ilm(cun.qrf.dzm, true)
        } else {
            b = 0
        }
        cun.qrf.jpo++;
        if (b <= 0) {
            b = 0
        }
        if (cun.qrf.jpo < cun.qrf.sgr.length) {
            if (b == 0) {
                cun.qrf.jko()
            } else {
                cun.qrf.vlb = setTimeout(cun.qrf.jko, b)
            }
        } else {
            cun.qrf.vlb = setTimeout(cun.qrf.lwr, 200)
        }
    };
    this.ehj = function() {
        this.rrf = true;
        this.tmz = 0;
        this.rph();
        if (this.yeq == 1) {
            for (var b = 0, a = this.sgr.length; b < a; b++) {
                this.gvv[b].ilm(this.dzm, false)
            }
            this.enj.mib.bnh("info", "#wvl", [this.language.nia, true]);
            this.ksl();
            this.jpo = 0;
            this.vlb = setTimeout(this.ygq, 200)
        } else {
            this.enj.mib.bnh("info", "#wam");
            for (var b = 0, a = this.sgr.length; b < a; b++) {
                if (!this.gvv[b].onr()) {
                    this.gvv[b].ilm(this.dzm, false)
                }
            }
            this.ksl();
            this.vlb = setTimeout(this.dmc, 200)
        }
    };
    this.dmc = function() {
        if (cun.qrf.jqz > 0) {
            cun.qrf.jpo = 0;
            cun.qrf.ygq()
        } else {
            cun.qrf.afm()
        }
    };
    this.lwr = function() {
        cun.qrf.tmz = 0;
        for (var b = 0, a = cun.qrf.gai.vos("deal"); b < a; b++) {
            cun.qrf.gai.ykp("deal" + b)
        }
        if (cun.qrf.yeq == 1) {
            cun.qrf.jpo = 0;
            cun.qrf.ygq()
        } else {
            if (cun.qrf.jqz > 0) {
                cun.qrf.jpo = 0;
                cun.qrf.ygq()
            } else {
                cun.qrf.afm()
            }
        }
    };
    this.afm = function() {
        cun.qrf.rrf = false;
        cun.qrf.dkp = true;
        if (cun.qrf.scx()) {
            if (cun.qrf.yeq == 1) {
                cun.qrf.hxy()
            } else {
                if (cun.qrf.yeq == 2) {
                    cun.qrf.xuq()
                }
            }
            cun.qrf.hou(true);
            cun.qrf.qze(true);
            cun.qrf.enj.mib.bnh("info", "#sao", [2]);
            if (cun.qrf.jwo) {
                cun.qrf.enj.vjb(true);
                cun.qrf.vgx = setTimeout(cun.qrf.jhx, 800)
            } else {
                cun.qrf.enj.rmw(true);
                if ((cun.qrf.jkk == 3 && (cun.qrf.eni == 3 || (cun.qrf.eni == 2 && cun.qrf.yeq == 2))) || (cun.qrf.jkk == 2 && cun.qrf.eni == 2)) {
                    cun.qrf.enj.mib.bnh("bet", "#eyu", [cun.qrf.cgk]);
                    cun.qrf.enj.mib.bnh("exit", "#eyu", [true])
                }
                if (cun.qrf.jkk == cun.qrf.eni) {
                    cun.qrf.gxh()
                }
                cun.qrf.acu(true)
            }
        } else {
            cun.qrf.pne();
            cun.qrf.skp();
            if (cun.qrf.win > 0) {
                cun.qrf.gah = false;
                cun.qrf.dbx()
            } else {
                if (!cun.qrf.vfc()) {
                    cun.qrf.gxh();
                    cun.qrf.enj.mib.bnh("info", "#wvl", [cun.qrf.language.rhi, true]);
                    if (cun.qrf.jwo) {
                        cun.qrf.enj.vjb(true);
                        cun.qrf.vgx = setTimeout(cun.qrf.jhx, 800)
                    } else {
                        cun.qrf.enj.qla(true);
                        cun.qrf.acu(true)
                    }
                } else {
                    cun.qrf.vzl()
                }
            }
        }
    };
    this.rph = function() {
        if (cun.emv.value79 > 0) {
            this.jui = cun.emv.value79 / this.gvv.length
        } else {
            if (this.gdt) {
                this.jui = this.fyk
            } else {
                if (this.yeq == 1) {
                    this.jui = this.mjf
                } else {
                    this.jui = this.ukh
                }
            }
        }
    };
    this.hou = function(d) {
        var c = false;
        this.wox = true;
        for (var b = 0, a = this.rcy.length; b < a; b++) {
            if (this.rcy[b] > 0) {
                this.gvv[b].llj(true, false);
                if (!c && d) {
                    this.gai.vsj("hold");
                    c = true
                }
            } else {
                this.gvv[b].llj(false, false)
            }
        }
        this.ksl()
    };
    this.skp = function() {
        for (var b = 0, a = this.rcy.length; b < a; b++) {
            this.gvv[b].llj(false, false);
            if (this.rlv) {
                if (this.rcy[b] > 0) {
                    this.gvv[b].whf(true, false)
                } else {
                    this.gvv[b].whf(false, false)
                }
            }
        }
        this.ksl()
    };
    this.dbx = function() {
        this.enj.qla(false);
        this.xgc(this.win);
        this.enj.mib.bnh("info", "#wvl", [this.language.quo, false]);
        this.dmx = false;
        if (!this.lrw) {
            this.gai.vsj("win" + (this.ppx - 1))
        }
        this.ksl();
        this.gzv()
    };
    this.vzl = function() {};
    this.vfc = function() {
        return false
    };
    this.xgc = function(a) {
        this.dan.bnh("winp", "#bzf", [this.oht(a), false]);
        this.dan.bnh("winp", "#cbi", [true]);
        this.dan.bnh("paytable", "#cbi", [false])
    };
    this.gzv = function() {
        if (this.joq && this.dkc) {
            setTimeout(this.rae, 1000)
        } else {
            if ((this.zac || this.jwo)) {
                if (!this.kbp && !this.gah) {
                    this.enj.mib.bnh("start", "#bzf", [this.language.ocv, true]);
                    if (this.zac) {
                        this.kbp = true;
                        this.enj.qla(false);
                        setTimeout(this.ocv, 2000)
                    } else {
                        if (this.jwo) {
                            this.vgx = setTimeout(this.jhx, 800)
                        }
                    }
                }
            } else {
                this.enj.mib.bnh("start", "#bzf", [this.language.ocv, true]);
                if (!this.lrw) {
                    this.enj.mib.bnh("gamble", "#kxj");
                    this.enj.mib.bnh("info", "#zak", [1])
                } else {
                    if (!this.inAutogamble && !this.uzs) {
                        this.enj.mib.bnh("gamble", "#kxj")
                    }
                }
                setTimeout(this.zhi, 400)
            }
        }
    };
    this.zhi = function() {
        cun.qrf.enj.btn(true)
    };
    this.pko = function() {};
    this.obi = function() {};
    this.uhf = function() {};
    this.hxy = function() {};
    this.xuq = function() {};
    this.pne = function() {};
    this.scx = function() {
        return this.state == cun.rwr.ckk.rmg || this.state == cun.rwr.ckk.pje
    };
    this.ulz = function(a) {
        if (this.wox) {
            if (!a) {
                this.tsd()
            }
            this.wox = false
        }
    };
    this.tsd = function() {
        for (var b = 0, a = this.gvv.length; b < a; b++) {
            this.gvv[b].llj(false, false);
            this.gvv[b].whf(false, false)
        }
        this.ksl()
    };
    this.vis = function() {
        return !this.zac
    };
    this.zge = function() {
        var b = this.enj.mib.owa("gamble"),
            a = this.enj.mib.owa("info");
        this.enj.qla(false);
        this.tsd();
        this.hgy();
        if (b) {
            b.eeq();
            b.ofd(this.joq)
        }
        if (a) {
            a.wam();
            a.wvl(this.language.wow + ": " + this.oht(this.win + this.wqr));
            a.zak(0)
        }
        this.rxg.ocv()
    };
    this.ocv = function() {
        if (!cun.qrf.gah) {
            cun.qrf.tsd();
            cun.qrf.gai.ykp("collect");
            cun.qrf.gai.ykp("collectend");
            if (cun.qrf.skv != cun.qrf.rkh) {
                cun.qrf.enj.vjb(true)
            }
            cun.qrf.gai.ykp("win" + (cun.qrf.ppx - 1));
            cun.qrf.koz = 10;
            if (cun.qrf.win + cun.qrf.wqr < cun.qrf.koz) {
                cun.qrf.koz = cun.qrf.win + cun.qrf.wqr;
                cun.qrf.gpo()
            } else {
                if (cun.qrf.win + cun.qrf.wqr >= cun.qrf.nlf() * 25) {
                    cun.qrf.koz = 20
                }
                cun.qrf.gpo()
            }
        }
    };
    this.qcs = function() {
        this.gah = true;
        this.kbp = false;
        clearTimeout(this.lka);
        this.gai.ykp("collect");
        this.gai.vsj("collectend");
        this.ijl(this.qjh, true);
        this.wke();
        this.acu(true);
        this.enj.mib.bnh("start", "#bzf", [this.language.start, true]);
        if (!this.jwo) {
            this.enj.qla(true)
        } else {
            this.vgx = setTimeout(this.jhx, 500)
        }
    };
    this.gpo = function() {
        this.qoa = false;
        this.zrk = (this.win + this.wqr > this.totalBet) ? true : false;
        this.khl = 0;
        this.nat = this.win + this.wqr;
        this.dtw = this.qjh - this.win - this.wqr;
        this.zmb = 0;
        this.rnw = this.win + this.wqr;
        this.jwm = new Date().getTime();
        this.kbp = true;
        this.lka = setTimeout(this.qyi, this.dkh)
    };
    this.qyi = function() {
        var c = 0,
            a = cun.qrf.bkf,
            b = 0;
        if (cun.qrf.rnw > 0) {
            if (!cun.qrf.qoa) {
                cun.qrf.gai.vsj("collect");
                cun.qrf.qoa = true
            }
            c = Math.round(cun.qrf.rnw / cun.qrf.koz);
            cun.qrf.rnw -= c;
            if (cun.qrf.rnw < 0) {
                cun.qrf.rnw = 0
            }
            cun.qrf.eqd(cun.qrf.nat - (cun.qrf.win + cun.qrf.wqr - cun.qrf.rnw));
            cun.qrf.ijl(cun.qrf.dtw + (cun.qrf.win + cun.qrf.wqr - cun.qrf.rnw), true);
            cun.qrf.khl++;
            cun.qrf.koz -= 1;
            a = cun.qrf.bkf;
            b = new Date().getTime();
            a = cun.qrf.dkh + (cun.qrf.khl * cun.qrf.dkh - (b - cun.qrf.jwm));
            cun.qrf.lka = setTimeout(cun.qrf.qyi, a)
        } else {
            cun.qrf.gai.ykp("collect");
            cun.qrf.gai.vsj("collectend");
            cun.qrf.kbp = false;
            cun.qrf.gah = true;
            clearTimeout(cun.qrf.lka);
            cun.qrf.wke();
            cun.qrf.enj.mib.bnh("start", "#bzf", [cun.qrf.language.start, true]);
            if (cun.qrf.skv == cun.qrf.rkh) {
                cun.qrf.skv()
            } else {
                if (!(cun.qrf.jwo)) {
                    cun.qrf.enj.qla(true);
                    cun.qrf.acu(true)
                } else {
                    cun.qrf.enj.qab(true);
                    cun.qrf.enj.mib.bnh("info", "#wvl", [cun.qrf.language.wow + ": " + cun.qrf.oht(cun.qrf.win + cun.qrf.wqr)]);
                    cun.qrf.vgx = setTimeout(cun.qrf.jhx, 500)
                }
            }
        }
    };
    this.wwp = function(a, b, c) {
        if (a <= b) {
            return 1
        }
        var d = 0,
            e = this.sol(a, b, c),
            f = 0;
        while (a > f) {
            e = this.sol(a - f, b, c);
            f += e;
            d++
        }
        return d
    };
    this.sol = function(d, a, b) {
        var c = a;
        if (d <= a && !b) {
            return d
        } else {
            if (b) {
                if (d <= 10) {
                    c = 1
                } else {
                    c = 10;
                    if (d > a) {
                        c = a
                    } else {
                        c = Math.floor(d / 2)
                    }
                }
            }
        }
        return c
    };
    this.wzu = function(d) {
        var e = this.ctp,
            c = this.bju;
        this.hwu = true;
        this.enj.mib.bnh("info", "#wvl", ["", true]);
        this.yce();
        if (d == cun.rwr.ckk.muh) {
            this.gxh();
            this.enj.mib.bnh("info", "#sao", [0]);
            this.enj.qla(true);
            this.acu(true);
            this.kqt()
        } else {
            if (d == cun.rwr.ckk.rmg) {
                for (var b = 0, a = this.sgr.length; b < a; b++) {
                    this.gvv[b].ilm(this.sgr[b], false)
                }
                this.hxy();
                this.hou(false);
                this.qze(true);
                this.enj.mib.bnh("info", "#sao", [2]);
                this.enj.rmw(true);
                if (this.jkk == this.eni) {
                    this.enj.mib.bnh("exit", "#eyu", [true]);
                    this.enj.mib.bnh("bet", "#eyu", [this.cgk]);
                    this.gxh()
                }
                this.acu(true)
            } else {
                if (d == cun.rwr.ckk.tej) {
                    for (var b = 0, a = this.sgr.length; b < a; b++) {
                        this.gvv[b].ilm(this.sgr[b], false)
                    }
                    this.pne();
                    this.skp();
                    if (this.win > 0) {
                        if (this.cvn() === false) {
                            this.dkc = true
                        } else {
                            this.dkc = false;
                            this.zac = true
                        }
                        this.gah = false;
                        this.dbx()
                    } else {
                        if (this.vfc()) {
                            this.dkc = true;
                            this.vzl()
                        } else {
                            this.gxh();
                            this.enj.mib.bnh("info", "#sao", [0]);
                            this.enj.qla(true);
                            this.acu(true);
                            this.kqt()
                        }
                    }
                } else {
                    if (d == cun.rwr.ckk.lgw) {
                        this.gah = true;
                        for (var b = 0, a = this.sgr.length; b < a; b++) {
                            this.gvv[b].ilm(this.sgr[b], false)
                        }
                        this.gxh();
                        this.enj.mib.bnh("info", "#sao", [0]);
                        this.enj.qla(true);
                        this.acu(true);
                        this.kqt()
                    } else {
                        if (d == cun.rwr.ckk.plx) {
                            for (var b = 0, a = this.sgr.length; b < a; b++) {
                                this.gvv[b].ilm(this.sgr[b], false)
                            }
                            this.ksl();
                            if (!this.zaw.bsl() && this.win + this.wqr > 0) {
                                this.rae();
                                this.zaw.ilg(this.qjh, this.win + this.wqr, this.ppx, true)
                            }
                            if (this.win + this.wqr == 0) {
                                this.gxh();
                                this.enj.mib.bnh("info", "#sao", [0]);
                                this.enj.qla(true);
                                this.acu(true);
                                this.kqt()
                            }
                        } else {
                            if (d == cun.rwr.ckk.myz) {
                                for (var b = 0, a = this.sgr.length; b < a; b++) {
                                    this.gvv[b].ilm(this.sgr[b], false)
                                }
                                if (!this.zaw.bsl()) {
                                    this.rae()
                                }
                                this.ijl(this.qjh, false);
                                this.zaw.ilg(this.qjh, this.win + this.wqr, this.ppx, true);
                                this.zaw.qla(true)
                            } else {
                                if (d == cun.rwr.ckk.hul) {
                                    this.gah = true;
                                    for (var b = 0, a = this.sgr.length; b < a; b++) {
                                        this.gvv[b].ilm(this.sgr[b], false)
                                    }
                                    this.gxh();
                                    this.enj.mib.bnh("info", "#sao", [0]);
                                    this.enj.qla(true);
                                    this.acu(true);
                                    this.kqt()
                                } else {
                                    if (d == cun.rwr.ckk.pje) {
                                        for (var b = 0, a = this.sgr.length; b < a; b++) {
                                            this.gvv[b].ilm(this.sgr[b], false)
                                        }
                                        this.xuq();
                                        this.hou(false);
                                        this.qze(true);
                                        this.enj.mib.bnh("info", "#sao", [2]);
                                        this.enj.rmw(true);
                                        if ((this.jkk == 3 && this.eni >= 2) && this.enj.oqg != null) {
                                            this.enj.mib.bnh("exit", "#eyu", [true])
                                        }
                                    } else {
                                        if (d == cun.rwr.ckk.svd) {
                                            for (var b = 0, a = this.sgr.length; b < a; b++) {
                                                this.gvv[b].ilm(this.sgr[b], false)
                                            }
                                            if (!this.zaw.bsl()) {
                                                this.rae()
                                            }
                                            this.ijl(this.qjh, false);
                                            this.zaw.ilg(this.qjh, this.win, this.ppx, true);
                                            this.zaw.kup(false);
                                            this.zaw.sib(c)
                                        } else {
                                            if (d == cun.rwr.ckk.jvv || d == cun.rwr.ckk.eso) {
                                                for (var b = 0, a = this.sgr.length; b < a; b++) {
                                                    this.gvv[b].ilm(this.sgr[b], false)
                                                }
                                                if (!this.zaw.bsl()) {
                                                    this.rae()
                                                }
                                                this.ijl(this.qjh, false);
                                                this.zaw.ilg(this.qjh, this.win, this.ppx, true);
                                                this.zaw.kup(false);
                                                this.zaw.onv(e)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    this.xyh = function() {
        this.hwu = false;
        this.zac = false;
        this.dkc = false;
        this.jqz = 5;
        this.ang();
        this.enj.qab(true);
        this.uml()
    };
    this.yjm = function() {
        this.hwu = false;
        this.zac = false;
        this.dkc = false;
        this.cpn();
        this.enj.qab(true)
    };
    this.pnv = function() {
        this.hwu = false;
        this.zac = false;
        this.dkc = true;
        this.gah = false;
        this.yhi();
        this.enj.qab(true)
    };
    this.fjd = function(a) {
        this.hwu = false;
        this.zac = true;
        this.dkc = false;
        this.gah = false;
        if (this.zaw.bsl()) {
            this.zaw.ilg(this.qjh, this.win + this.wqr, this.ppx, true);
            this.zaw.rkz();
            this.ijl(this.qjh, false);
            try {
                if (this.zaw instanceof sbw) {
                    this.zaw.sib(a, true)
                } else {
                    setTimeout(this.zaw.moz, 500)
                }
            } catch (b) {
                setTimeout(this.zaw.moz, 500)
            }
        } else {
            this.yhi();
            this.enj.qab(true)
        }
    };
    this.aui = function() {
        this.hwu = false;
        this.dkc = false;
        this.dkp = true;
        this.pyw();
        if (this.zaw.bsl()) {
            this.zaw.rkz();
            this.ijl(this.qjh, false);
            setTimeout(this.zaw.moz, 100)
        } else {
            this.ocv()
        }
    };
    this.zug = function() {
        this.hwu = false;
        if (!this.zaw.bsl() && this.win + this.wqr > 0) {
            this.rae()
        }
        this.zaw.ilg(this.qjh, this.win + this.wqr, this.ppx, true);
        if (this.win + this.wqr == 0) {
            this.zaw.mib.bnh("info", "#wam");
            setTimeout(this.fmx, 1000)
        } else {
            this.zaw.tqb()
        }
    };
    this.kxl = function() {
        this.hwu = false;
        if (!this.zaw.bsl()) {
            this.rae()
        }
        this.ijl(this.qjh, false);
        this.zaw.ilg(this.qjh, this.win + this.wqr, this.ppx, true);
        this.zaw.qla(true)
    };
    this.zgx = function(a) {
        this.hwu = false;
        if (!this.zaw.bsl() && this.win > 0) {
            this.rae()
        }
        this.zaw.ilg(this.qjh, this.win, this.ppx, true);
        this.zaw.kup(false);
        this.zaw.onv(a)
    };
    this.uxa = function(a) {
        this.hwu = false;
        if (!this.zaw.bsl() && this.win > 0) {
            this.rae()
        }
        this.zaw.ilg(this.qjh, this.win, this.ppx, true);
        this.zaw.kup(false);
        this.zaw.onv(a)
    };
    this.btv = function(a) {
        this.hwu = false;
        this.zaw.ilg(this.qjh, this.win, this.ppx, true);
        this.zaw.sib(a, false)
    };
    this.kxz = function(b, d) {
        var c = this.dan.owa("stats"),
            a = this.dan.owa("history");
        if (b == "authfailed") {
            b = this.language.raa
        } else {
            if (b.toLowerCase().indexOf("active") == 0) {
                b = this.language.caa
            }
        }
        if (this.nqx) {
            if (!this.lrw) {
                if (c && c.bsl()) {
                    c.qla(false);
                    c.cbi(false)
                }
                this.dan.bnh("settings", "#slm");
                if (this.zaw != null && this.zaw.bsl()) {
                    this.zaw.mib.bnh("info", "#wvl", [b, true]);
                    this.zaw.qla(false);
                    this.cuv()
                } else {
                    if (this.enj != null) {
                        if (this.jix != null && this.jix.bsl()) {
                            this.bon()
                        }
                        this.enj.qla(false);
                        this.stop();
                        this.enj.mib.bnh("setting", "#ofd", [false]);
                        this.enj.mib.bnh("info", "#wvl", [b, true])
                    } else {
                        this.sdf(b)
                    }
                }
            } else {
                this.stop();
                this.kii();
                if (a) {
                    a.usw(true)
                }
                this.uuq(this.bgr(b))
            }
        } else {
            this.sdf(b)
        }
        if (d) {
            if (!this.lrw && this.rxg.ipr.ske == 0 && cun.emv.value46 > 0) {
                this.tuo((this.cij) ? cun.emv.value71 : cun.emv.value47)
            } else {
                setTimeout(this.rkh, cun.emv.value10)
            }
        }
    };
    this.jvt = function(a) {
        if (a == cun.ute.vzv) {
            this.enj.mib.bnh("info", "#wvl", [this.language.ina, true])
        } else {
            if (a == cun.ute.ian) {
                this.enj.mib.bnh("info", "#wvl", [this.language.xcx + " " + this.oht(this.ldg), true])
            } else {
                if (a >= cun.ute.fnv) {
                    this.enj.mib.bnh("info", "#wam");
                    if (a == cun.ute.fft || a == cun.ute.uds) {
                        this.stop()
                    }
                    this.enj.qla(false);
                    this.acu(false)
                }
            }
        }
        this.ftw();
        if (a < cun.ute.fnv) {
            this.dkp = true;
            this.enj.qla(true);
            this.acu(true)
        } else {
            this.wfo([{
                dmt: a
            }])
        }
    };
    this.rrz = function(a) {
        this.qjh = a;
        if (!(this.zaw.bsl() || this.jix.bsl())) {
            this.ijl(a, true)
        } else {
            if (this.zaw.bsl()) {
                this.zaw.mib.bnh("creditd", "#bzf", [this.hga(a), true]);
                this.ijl(a, false)
            }
        }
        if (this.qjh > 0) {
            this.pyw()
        } else {
            this.gxh()
        }
    };
    this.npd = function() {
        clearTimeout(cun.qrf.vgx);
        if (cun.qrf.dkp) {
            if (cun.qrf.win + cun.qrf.wqr > 0 && !cun.qrf.gah) {
                if (!cun.qrf.kbp) {
                    if (cun.qrf.vis()) {
                        cun.qrf.dkp = false;
                        cun.qrf.zge()
                    }
                } else {
                    cun.qrf.qcs()
                }
            } else {
                if (!cun.qrf.rrf) {
                    if (cun.qrf.dna) {
                        cun.qrf.ftw();
                        cun.qrf.hsj();
                        return
                    } else {
                        if (cun.qrf.nfw) {
                            cun.qrf.ftw();
                            cun.qrf.bwq();
                            return
                        }
                    }
                    cun.qrf.dkp = false;
                    if (cun.qrf.cvn() === true) {
                        cun.qrf.jbd = (!cun.qrf.joq) ? 1 : 0
                    } else {
                        if (cun.emv.value62 === true) {
                            cun.qrf.jbd = 0;
                            if (cun.qrf.jwo) {
                                cun.qrf.jbd |= 2
                            }
                            if (cun.qrf.joq) {
                                cun.qrf.jbd |= 4
                            }
                        } else {
                            cun.qrf.jbd = (cun.qrf.jwo && !cun.qrf.joq) ? 1 : 0
                        }
                    }
                    cun.qrf.vuu();
                    if ((cun.qrf.state == cun.rwr.ckk.muh || cun.qrf.state == cun.rwr.ckk.tej || cun.qrf.state == cun.rwr.ckk.lgw || cun.qrf.state == cun.rwr.ckk.plx || cun.qrf.state == cun.rwr.ckk.hul || cun.qrf.state == cun.rwr.ckk.svd) || cun.qrf.dtz()) {
                        if (cun.qrf.qjh >= cun.qrf.nlf() && cun.qrf.nlf() >= cun.qrf.ldg) {
                            cun.qrf.rxg.ekx(cun.qrf.wbs, cun.qrf.jbd);
                            cun.qrf.enj.qla(false)
                        } else {
                            cun.qrf.wto();
                            cun.qrf.ftw();
                            cun.qrf.enj.qla(true);
                            cun.qrf.acu(true);
                            cun.qrf.dkp = true
                        }
                    } else {
                        if (cun.qrf.state == cun.rwr.ckk.rmg) {
                            if (cun.qrf.jkk == 2 && cun.qrf.eni == 2 && cun.qrf.cgk && (cun.qrf.jqz == 5 || cun.qrf.totalBet != cun.qrf.tsl)) {
                                cun.qrf.rxg.ekx(cun.qrf.wbs, cun.qrf.jbd);
                                cun.qrf.enj.qla(false);
                                cun.qrf.qze(false);
                                return
                            }
                            cun.qrf.suo();
                            if (cun.qrf.jkk == 2 || (cun.qrf.jkk == 3 && cun.qrf.jqz == 0 && cun.qrf.ppx > 0)) {
                                cun.qrf.rxg.vya(cun.qrf.wbs, cun.qrf.jbd, cun.qrf.rcy);
                                cun.qrf.enj.qla(false)
                            } else {
                                if (cun.qrf.jkk == 3) {
                                    cun.qrf.rxg.rtw(cun.qrf.wbs, cun.qrf.jbd, cun.qrf.rcy);
                                    cun.qrf.enj.qla(false)
                                }
                            }
                        } else {
                            if (cun.qrf.state == cun.rwr.ckk.pje) {
                                cun.qrf.suo();
                                cun.qrf.rxg.vya(cun.qrf.wbs, cun.qrf.jbd, cun.qrf.rcy);
                                cun.qrf.enj.qla(false)
                            }
                        }
                    }
                    cun.qrf.qze(false)
                }
            }
        }
    };
    this.zlc = function() {
        var a = cun.qrf.dan.owa("topi"),
            c = 0,
            b = 0,
            d = 0;
        if (!cun.emv.value55) {
            cun.qrf.gai.ykp("auto_on");
            cun.qrf.gai.ykp("auto_off")
        }
        if (cun.qrf.jwo) {
            cun.qrf.jwo = false;
            cun.qrf.uwp();
            cun.qrf.enj.mib.bnh("astart", "#ofd", [cun.qrf.jwo]);
            cun.qrf.enj.mib.bnh("start", "#bzf", [cun.qrf.language.start, true]);
            if (!cun.emv.value55) {
                cun.qrf.gai.vsj("auto_off")
            }
        } else {
            if (cun.qrf.wqz() != null && cun.qrf.fsw <= 0 && cun.qrf.cvn() === false) {
                if (a && a.qvq() === true) {
                    cun.qrf.acu(false);
                    cun.qrf.enj.qla(false);
                    cun.qrf.id = setTimeout(cun.qrf.aqt, 300)
                }
            } else {
                cun.qrf.jwo = true;
                if (cun.qrf.wqz() != null && cun.qrf.cvn() === true) {
                    cun.qrf.fsw = cun.qrf.dan.bnh("settings", "#nnx");
                    c = cun.qrf.dan.bnh("settings", "#wvk");
                    b = cun.qrf.dan.bnh("settings", "#jjl");
                    d = cun.qrf.dan.bnh("settings", "#evt");
                    cun.qrf.mkg = (c > 0) ? c : 0;
                    cun.qrf.emf = (b > 0) ? b : 0;
                    cun.qrf.ewr = (d > 0) ? d : 0;
                    cun.qrf.uml()
                }
                cun.qrf.enj.mib.bnh("astart", "#ofd", [cun.qrf.jwo]);
                cun.qrf.enj.mib.bnh("start", "#bzf", [cun.qrf.language.start, true]);
                if (!cun.emv.value55) {
                    cun.qrf.gai.vsj("auto_on")
                }
                cun.qrf.npd()
            }
        }
        if (a) {
            a.zbo("auto", cun.qrf.jwo)
        }
    };
    this.rkh = function() {
        if (cun.ske == 0 && cun.qrf.lrw === false && cun.qrf.win + cun.qrf.wqr > 0 && !cun.qrf.gah && cun.qrf.vis()) {
            if (!cun.qrf.kbp) {
                cun.qrf.zge()
            }
            cun.qrf.skv = cun.qrf.rkh
        } else {
            mws.prototype.rkh.call(this)
        }
    };
    this.wik = function() {
        if (cun.qrf.wbs < cun.qrf.kfq.length - 1) {
            if (cun.qrf.wbs >= cun.qrf.pdw(true)) {
                cun.qrf.wbs = 0;
                while (cun.qrf.wbs < cun.qrf.ldr()) {
                    cun.qrf.wbs++
                }
            } else {
                cun.qrf.wbs++
            }
        } else {
            cun.qrf.wbs = 0;
            while (cun.qrf.wbs < cun.qrf.ldr()) {
                cun.qrf.wbs++
            }
        }
        cun.qrf.vnz(false);
        if (cun.qrf.wbs >= cun.qrf.pdw(true)) {
            return true
        }
        return false
    };
    this.mzd = function() {
        if (cun.qrf.wbs > 0) {
            if (cun.qrf.wbs <= cun.qrf.ldr()) {
                cun.qrf.wbs = cun.qrf.kfq.length;
                while (cun.qrf.wbs > cun.qrf.pdw(true)) {
                    cun.qrf.wbs--
                }
            } else {
                cun.qrf.wbs--
            }
        } else {
            cun.qrf.wbs = cun.qrf.kfq.length;
            while (cun.qrf.wbs > cun.qrf.pdw(true)) {
                cun.qrf.wbs--
            }
        }
        if (cun.qrf.wbs < 0) {
            cun.qrf.wbs = 0
        }
        cun.qrf.vnz(false);
        if (cun.qrf.wbs <= cun.qrf.ldr()) {
            return true
        }
        return false
    };
    this.aov = function() {
        var a = cun.qrf.dan.owa("topi"),
            b = cun.qrf.dan.owa("settings");
        if (cun.qrf.cvn() === false && cun.qrf.dkc && cun.qrf.win + cun.qrf.wqr > 0) {
            if (!cun.qrf.rrf) {
                cun.qrf.hwu = false;
                cun.qrf.rae()
            }
        } else {
            cun.qrf.gai.ykp("gamble_on");
            cun.qrf.gai.ykp("gamble_off");
            cun.qrf.joq = !cun.qrf.joq;
            if (cun.qrf.joq) {
                cun.qrf.gai.vsj("gamble_on")
            } else {
                cun.qrf.gai.vsj("gamble_off")
            }
            cun.qrf.enj.mib.bnh("gamble", "#ofd", [cun.qrf.joq]);
            if (a) {
                a.zbo("gamble", cun.qrf.joq)
            }
            if (b) {
                b.mib.bnh("gamble", "#wqi", [(cun.qrf.joq) ? 1 : 0])
            }
        }
    };
    this.cvg = function() {
        if (!cun.qrf.jix.bsl()) {
            cun.qrf.akj();
            if (cun.qrf.dan.owa("tops")) {
                cun.qrf.jjp()
            }
            if (cun.qrf.jix.gls() > 0) {
                cun.qrf.rbi()
            }
        } else {
            cun.qrf.bon()
        }
    };
    this.msv = function() {
        var a = cun.qrf.dan.owa("topi"),
            b = cun.qrf.dan.owa("settings"),
            c = cun.qrf.dan.owa("topb");
        cun.qrf.gdt = !cun.qrf.gdt;
        if (a) {
            a.zbo("turbo", cun.qrf.gdt)
        }
        if (c) {
            c.mib.bnh("turbo", "#wqi", [(cun.qrf.gdt) ? 1 : 0])
        }
        if (b) {
            b.mib.bnh("turbo", "#wqi", [(cun.qrf.gdt) ? 1 : 0])
        }
    };
    this.byn = function() {
        var a = false;
        if (cun.hfb.qza == true) {
            if (cun.qrf.vti == true) {
                cun.qrf.vti = false;
                a = cun.hfb.mvf();
                setTimeout(cun.qrf.pzb, 1400)
            }
        } else {
            a = cun.hfb.mvf();
            setTimeout(cun.qrf.pzb, 1400)
        }
    };
    this.nhv = function() {
        if (cun.qrf.gai.amv() && !cun.qrf.ime) {
            cun.qrf.pey = false;
            cun.qrf.ime = true;
            cun.qrf.dan.bnh("loading", "#stop");
            setTimeout(cun.qrf.vez, 100);
            cun.qrf.gai.vsj("silence");
            if (cun.hfb.dxh() && cun.hfb.qza) {
                cun.qrf.byn()
            }
            if (webAudioEngine && webAudioEngine.state == "suspended") {
                webAudioEngine.resume()
            }
        }
    };
    this.vge = function(a) {
        if (a == cun.language.EN || a == cun.language.US) {
            return new ysb()
        } else {
            if (a == cun.language.ES || a == cun.language.CO || a == cun.language.MX || a == cun.language.CL || a == cun.language.VE) {
                return new nwm()
            } else {
                if (a == cun.language.DE || a == cun.language.AT) {
                    return new obn()
                } else {
                    if (a == cun.language.PT || a == cun.language.BR) {
                        return new hvp()
                    } else {
                        if (a == cun.language.RU) {
                            return new xlx()
                        } else {
                            if (a == cun.language.EE) {
                                return new sos()
                            } else {
                                if (a == cun.language.TR) {
                                    return new hpw()
                                } else {
                                    if (a == cun.language.CZ) {
                                        return new yzt()
                                    } else {
                                        if (a == cun.language.GR) {
                                            return new apv()
                                        } else {
                                            if (a == cun.language.BG) {
                                                return new wcn()
                                            } else {
                                                if (a == cun.language.GE) {
                                                    return new zvy()
                                                } else {
                                                    if (a == cun.language.HU) {
                                                        return new yrt()
                                                    } else {
                                                        if (a == cun.language.RO) {
                                                            return new wfr()
                                                        } else {
                                                            if (a == cun.language.FR) {
                                                                return new vqp()
                                                            } else {
                                                                if (a == cun.language.HR) {
                                                                    return new zkr()
                                                                } else {
                                                                    if (a == cun.language.IT) {
                                                                        return new axz()
                                                                    } else {
                                                                        if (a == cun.language.SE) {
                                                                            return new mbp()
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.nhz = function() {
        var f = this.dan.owa("stats"),
            e = this.dan.owa("topb"),
            c = this.dan.owa("topi"),
            b = this.dan.owa("betsel");
        this.gvm();
        this.enj.sgt(this.gei, 0);
        this.gyu[0] = this.language.nxr;
        this.gyu[1] = this.language.ipz;
        this.enj.sgt(this.gyu, 1);
        this.txw[0] = this.language.iam;
        this.txw[1] = this.language.zsk;
        this.enj.sgt(this.txw, 2);
        if (this.jwo) {
            this.enj.mib.bnh("start", "#bzf", [this.language.start])
        } else {
            if (this.win + this.wqr > 0 && !this.zac && !this.gah) {
                this.enj.mib.bnh("start", "#bzf", [this.language.ocv])
            } else {
                this.enj.mib.bnh("start", "#bzf", [this.language.start])
            }
        }
        if (this.wqz() != null) {
            this.enj.mib.bnh("astart", "#bzf", [this.language.syj])
        } else {
            this.enj.mib.bnh("astart", "#bzf", [this.language.jwo])
        }
        this.enj.mib.bnh("gamble", "#bzf", [this.language.joq]);
        this.enj.mib.bnh("exit", "#bzf", [(cun.emv.value50.g === true) ? this.language.bok : this.language.hcb]);
        this.enj.mib.bnh("bet", "#bzf", [this.language.rxh]);
        this.enj.mib.bnh("creditd", "#gjq", [(this.lhw()) ? this.language.wfj : this.language.qjh]);
        this.enj.mib.bnh("betd", "#gjq", [this.language.rxh]);
        if (e) {
            e.mib.bnh("language", "#lzh", [this.language.language]);
            e.mib.bnh("audio", "#lzh", [this.language.audio]);
            e.mib.bnh("turbo", "#lzh", [this.language.gdt]);
            e.mib.bnh("fullscreen", "#lzh", [this.language.qel]);
            e.mib.bnh("help", "#lzh", [this.language.nkq]);
            e.mib.bnh("history", "#lzh", [this.language.iax]);
            e.mib.bnh("statistic", "#lzh", [this.language.baa]);
            e.mib.bnh("deposit", "#lzh", [this.language.yxf])
        }
        if (c) {
            c.lzh("freeplay", this.language.wfj)
        }
        if (b) {
            b.dzy = this.language.rxh
        }
        if (f) {
            if (cun.emv.value36) {
                f.dzy = this.bgr(this.language.baa)
            } else {
                if (cun.emv.value37) {
                    f.dzy = this.bgr(this.language.nct)
                }
            }
            if (f.xxv != null) {
                f.xxv.bzf(this.language.ret, false)
            }
            if (f.oqg != null) {
                f.oqg.bzf(this.language.clq, false)
            }
        }
        this.jix.mib.bnh("return", "#bzf", [this.language.ret, false]);
        for (var d = 0, a = this.gvv.length; d < a; d++) {
            if (this.gvv[d].pjv()) {
                this.gvv[d].whf(true, false)
            } else {
                if (this.gvv[d].onr()) {
                    this.gvv[d].llj(true, false)
                }
            }
        }
        this.dan.bnh("settings", "#nhz", [this.language, false]);
        this.dan.bnh("autop", "#nhz", [this.language]);
        this.eok()
    };
    this.eok = function() {
        this.lzj[0] = this.language.bee;
        this.zaw.sgt(this.lzj)
    };
    this.nlf = function() {
        return this.totalBet
    };
    this.tqr = function() {
        return this.ldg
    };
    this.alz = function() {
        return this.puh
    };
    this.pdw = function(b) {
        for (var c = 0; c < this.kfq.length; c++) {
            var a = this.kfq[c];
            if (a > this.puh || (b && (this.qjh > 0 && this.qjh < a))) {
                return c - 1
            } else {
                if (a == this.puh || c == this.kfq.length - 1) {
                    return c
                }
            }
        }
        return -1
    };
    this.ldr = function() {
        for (var b = 0; b < this.kfq.length; b++) {
            var a = this.kfq[b];
            if (a >= this.ldg && a < this.puh) {
                return b
            }
        }
        return -1
    };
    this.wto = function() {
        var c = this.pdw(true),
            a = this.ldr(),
            b = this.kfq.length - 1;
        b = (b > c) ? c : b;
        if (b > 0) {
            while (this.kfq[b] > this.qjh) {
                b--;
                if (b <= a) {
                    break
                }
            }
        }
        this.wbs = (b < a) ? a : b;
        this.vnz(false);
        if (this.nlf() > this.qjh) {
            this.enj.mib.bnh("info", "#wvl", [this.language.ina, true])
        } else {
            if (this.nlf() < this.ldg) {
                this.enj.mib.bnh("info", "#wvl", [this.language.xcx + " " + this.ldg, true])
            }
        }
    };
    this.vnz = function(b) {
        var a = this.enj.mib.owa("info");
        this.totalBet = this.kfq[this.wbs];
        this.yce();
        if (a && a.syd() === false) {
            a.wvl(this.gei[2], true)
        }
        if (this.cvn() == true) {
            this.gai.vsj("btn")
        } else {
            if (this.wbs == this.pdw(true)) {
                this.gai.vsj("maxstep")
            } else {
                this.gai.vsj("step" + (this.wbs % 12))
            }
        }
        this.dan.bnh("betsel", "#mfu", [this.wbs, true])
    };
    this.oif = function() {
        this.totalBet = this.kfq[this.wbs];
        this.yce()
    };
    this.sfr = function(a) {
        cun.qrf.wbs = a;
        cun.qrf.oif()
    };
    this.qzi = function() {
        this.dan.bnh("paytable", "#fsg", [this.totalBet])
    };
    this.stop = function() {
        mws.prototype.stop.call(this);
        this.pbl();
        if (this.enj != null) {
            this.enj.mib.bnh("gamble", "#eeq");
            this.enj.mib.bnh("info", "#wam");
            this.enj.stop()
        }
        clearTimeout(this.mbm);
        clearTimeout(this.lka);
        clearTimeout(this.ogo);
        clearTimeout(this.vlb);
        clearTimeout(this.bhy);
        this.ytn();
        if (this.zaw != null && this.zaw.bsl()) {
            this.zaw.rkz();
            try {
                if (this.zaw instanceof sbw) {
                    this.zaw.mib.bnh("gamble", "#eeq")
                } else {
                    this.zaw.mib.bnh("info", "#wam")
                }
            } catch (a) {
                this.zaw.mib.bnh("info", "#wam")
            }
        }
        this.vwo();
        if (!this.lrw) {
            this.ksl()
        }
    };
    this.ytn = function() {};
    this.wke = function() {
        var a = this.dan.owa("winp");
        if (a && a.bsl()) {
            a.cbi(false, true)
        }
    };
    this.eqd = function(a) {
        this.dan.bnh("winp", "#bzf", [this.oht(a), true])
    };
    this.qze = function(c) {
        if (!(c && this.jwo)) {
            for (var b = 0, a = this.gvv.length; b < a; b++) {
                this.gvv[b].eyu(c)
            }
        }
    };
    this.jua = function(a) {
        this.enj.mib.amg("buttons", "#cbi", [a]);
        this.ksl()
    };
    this.vuu = function() {
        this.jqz = 5;
        for (var b = 0, a = this.gvv.length; b < a; b++) {
            if (this.gvv[b].onr()) {
                this.jqz--
            }
        }
    };
    this.suo = function() {
        for (var b = 0, a = this.gvv.length; b < a; b++) {
            if (this.gvv[b].onr()) {
                this.rcy[b] = this.sgr[b]
            } else {
                this.rcy[b] = 0
            }
        }
    };
    this.yti = function(b) {
        for (var c = 0, a = this.ybf.length; c < a; c++) {
            if (b == this.ybf[c]) {
                return true
            }
        }
        return false
    };
    this.rod = function(b) {
        for (var c = 0, a = this.ybf.length; c < a; c++) {
            if (b == this.ybf[c]) {
                if (this.nxh[c]) {
                    return this.nxh[c]
                }
            }
        }
        return -1
    };
    this.dtz = function() {
        return false
    };
    this.joi = function() {
        if (!cun.qrf.gah && !cun.qrf.kbp && !(cun.qrf.zac || cun.qrf.jwo) && !(cun.qrf.joq && cun.qrf.dkc)) {
            if (cun.qrf.win + cun.qrf.wqr > 0 && !cun.qrf.dmx) {
                cun.qrf.gai.ykp("gambleprop");
                cun.qrf.gai.vsj("gambleprop")
            }
        }
    };
    this.hgy = function() {
        if (!this.lrw) {
            this.gai.ykp("gambleprop");
            this.dmx = true
        }
    };
    this.acu = function(e) {
        mws.prototype.acu.call(this, e);
        var d = this.dan.owa("topb"),
            c = (this.dan.owa("tops") != null),
            a = (e && !this.jwo);
        if (this.enj) {
            this.enj.mib.bnh("setting", "#eyu", [a])
        }
        if (c) {
            var a = (e && !this.jwo);
            if (this.ahh && d) {
                var b = d.mib.owa("help");
                if (b) {
                    b.eyu(a && !c)
                }
            }
        }
    };
    this.shy = function(e) {
        mws.prototype.shy.call(this, e);
        var d = this.dan.owa("topb"),
            c = (this.dan.owa("tops") != null),
            a = (e && !this.jwo);
        if (this.enj) {
            this.enj.mib.bnh("setting", "#eyu", [a])
        }
        if (c) {
            var a = (e && !this.jwo);
            if (this.ahh && d) {
                var b = d.mib.owa("help");
                if (b) {
                    b.eyu(a && !c)
                }
            }
        }
    };
    this.bht = function(e) {
        mws.prototype.bht.call(this, e);
        var d = this.dan.owa("topb"),
            c = (this.dan.owa("tops") != null),
            a = (e && !this.jwo);
        if (this.enj) {
            this.enj.mib.bnh("setting", "#eyu", [a])
        }
        if (c) {
            var a = (e && !this.jwo);
            if (this.ahh && d) {
                var b = d.mib.owa("help");
                if (b) {
                    b.eyu(a && !c)
                }
            }
        }
    };
    this.epr = function() {
        mws.prototype.epr.call(this);
        if (cun.qrf.cfs === true && cun.qrf.kbk === true) {
            cun.qrf.ftw()
        }
    };
    this.nnr = function() {
        if (cun.emv.value74 != null && this.dan.bnh("settings", "#nnx") <= 0) {
            return false
        } else {
            if ((this.state == cun.rwr.ckk.muh || this.state == cun.rwr.ckk.tej || this.state == cun.rwr.ckk.lgw || this.state == cun.rwr.ckk.plx || this.state == cun.rwr.ckk.hul || this.state == cun.rwr.ckk.svd) || this.dtz()) {
                if (!(this.qjh >= this.nlf() && this.nlf() >= this.ldg)) {
                    return false
                }
            }
        }
        return true
    };
    this.nzf = function() {
        var b = this.dan.owa("stats"),
            a = this.dan.owa("settings");
        if (this.jix && this.jix.bsl()) {
            return false
        } else {
            if (this.zaw && this.zaw.bsl()) {
                return false
            } else {
                if (b && b.bsl()) {
                    return false
                } else {
                    if (a && a.bsl()) {
                        return false
                    }
                }
            }
        }
        return true
    };
    this.kqt = function() {
        if (cun.emv.value78 && this.cvn() === false) {
            if (cun.emv.value78.t === true) {
                this.dan.bnh("topb", "#cbi", [true])
            }
            if (cun.emv.value78.b === true) {
                this.dan.bnh("betsel", "#cbi", [true])
            }
            if (cun.emv.value78.t === true || cun.emv.value78.b === true) {
                this.bvw()
            }
            this.ksl();
            if (cun.emv.value78.d > 0) {
                this.hxl = setTimeout(this.ngq, cun.emv.value78.d)
            }
        }
    };
    this.ngq = function() {
        cun.qrf.zku();
        clearTimeout(cun.qrf.hxl)
    };
    this.akj = function(b) {
        var a = this.dan.owa("betsel");
        if (a && a.bsl() && a.qvq()) {
            this.zku(b)
        } else {
            mws.prototype.akj.call(this, b)
        }
    };
    this.bvw = function() {
        if (this.canvas) {
            this.canvas.onmousemove = function(a) {
                cun.qrf.wfp(a)
            };
            this.canvas.ontouchmove = function(a) {
                cun.qrf.wfp(a)
            }
        }
    };
    this.pbl = function() {
        if (this.canvas) {
            this.canvas.onmousemove = null;
            this.canvas.ontouchmove = null
        }
    };
    this.wfp = function(d) {
        if (d.preventDefault) {
            d.preventDefault()
        }
        if (d.stopPropagation) {
            d.stopPropagation()
        }
        var b = 0,
            g = 0,
            c = false,
            e = this.dan.owa("topb"),
            a = this.dan.owa("betsel");
        if (d.touches) {
            var f = d.touches[0];
            c = true;
            if (!this.vix) {
                b = f.pageX - this.offsetLeft;
                g = f.pageY - this.offsetTop
            } else {
                b = Math.round((f.pageX - this.offsetLeft) / this.ngv);
                g = Math.round((f.pageY - this.offsetTop) / this.zwd)
            }
        } else {
            if (!this.vix) {
                b = d.pageX - this.offsetLeft;
                g = d.pageY - this.offsetTop
            } else {
                b = Math.round((d.pageX - this.offsetLeft) / this.ngv);
                g = Math.round((d.pageY - this.offsetTop) / this.zwd)
            }
        }
        if (a && a.bsl()) {
            if (a.ejf(b, g, c)) {
                return
            }
        }
        if (e && e.bsl()) {
            e.ejf(b, g)
        }
    };
    this.rza = function() {
        if (this.mbm >= 0) {
            return
        }
        this.dan.bnh("betsel", "#teh");
        this.gai.ykp("panel_in");
        this.gai.vsj("panel_in");
        this.acu(false);
        this.jwm = new Date().getTime();
        this.khl = 0;
        this.mbm = setTimeout(this.cmq, 89)
    };
    this.zku = function(b) {
        var c = this.dan.owa("topb"),
            a = this.dan.owa("betsel");
        if (this.mbm >= 0 || !((c && c.bsl()) || (a && a.bsl()))) {
            return
        }
        if (b == this.mzd || b == this.wik) {
            b();
            return
        }
        if (c) {
            c.zma()
        }
        if (a) {
            a.zma()
        }
        this.gai.ykp("panel_out");
        this.gai.vsj("panel_out");
        this.jjc = b;
        this.jwm = new Date().getTime();
        this.khl = 0;
        this.mbm = setTimeout(this.vfs, 89)
    };
    this.cmq = function() {
        var a = cun.qrf.dan.owa("betsel"),
            d = (!a || (a && !a.hjz())),
            c = 0,
            b = 0;
        cun.qrf.ksl();
        cun.qrf.khl++;
        if (d) {
            cun.qrf.bvw();
            clearTimeout(cun.qrf.mbm);
            cun.qrf.mbm = -1
        } else {
            c = new Date().getTime();
            b = 89 + (cun.qrf.khl * 89 - (c - cun.qrf.jwm));
            cun.qrf.mbm = setTimeout(cun.qrf.cmq, b)
        }
    };
    this.vfs = function() {
        var a = cun.qrf.dan.owa("betsel"),
            e = cun.qrf.dan.owa("topb"),
            f = (!a || (a && !a.hjz())),
            b = (!e || (e && !e.hjz())),
            d = 0,
            c = 0;
        cun.qrf.ksl();
        cun.qrf.khl++;
        if (f && b) {
            cun.qrf.pbl();
            clearTimeout(cun.qrf.mbm);
            if (cun.qrf.nzf()) {
                cun.qrf.acu(true)
            }
            cun.qrf.mbm = -1;
            if (typeof cun.qrf.jjc === "function") {
                cun.qrf.jjc();
                cun.qrf.jjc = null
            }
        } else {
            d = new Date().getTime();
            c = 89 + (cun.qrf.khl * 89 - (d - cun.qrf.jwm));
            cun.qrf.mbm = setTimeout(cun.qrf.vfs, c)
        }
    };
    this.jjc = function() {};
    this.qlc = function() {
        return (this.qjh == 0 && (this.state == cun.rwr.ckk.muh || (this.state == cun.rwr.ckk.tej && (this.win + this.wqr) == 0) || this.state == cun.rwr.ckk.lgw || (this.state == cun.rwr.ckk.plx && (this.win + this.wqr) == 0) || this.state == cun.rwr.ckk.hul || (this.state == cun.rwr.ckk.svd && (this.win + this.wqr) == 0) || (this.state == cun.rwr.ckk.rmg && this.cgk == true)))
    };
    this.obs = function() {
        if (cun.qrf.cky != "" && cun.qrf.lhw() === false) {
            cun.qrf.enj.mib.bnh("info", "#jxv");
            cun.qrf.enj.mib.bnh("info", "#sao", [0])
        }
    };
    this.iki = function() {
        if (this.state == cun.rwr.ckk.tej && this.ppx > 0) {
            this.gai.ykp("win" + (this.ppx - 1))
        }
        this.enj.mib.bnh("info", "#wam");
        this.enj.qla(false);
        this.acu(false);
        this.jua(false);
        this.dan.bnh("settings", "#slm");
        this.enj.mib.bnh("setting", "#ofd", [this.dan.bnh("settings", "#bsl")]);
        this.dan.bnh("stats", "#cbi", [true]);
        this.ksl()
    };
    this.dmd = function() {
        this.dan.bnh("stats", "#qla", [false]);
        this.dan.bnh("stats", "#cbi", [false]);
        if (this.state != cun.rwr.ckk.rmg && this.state != cun.rwr.ckk.pje) {
            this.enj.qla(true)
        } else {
            this.enj.rmw(true)
        }
        this.acu(true);
        this.jua(true);
        this.ksl();
        this.enj.mib.bnh("info", "#sao", [0])
    };
    this.mvm = function() {
        var a = this.enj.mib.bnh("bet", "#qvq");
        this.wke();
        if (this.state == cun.rwr.ckk.tej && this.ppx > 0) {
            this.gai.ykp("win" + (this.ppx - 1))
        }
        this.enj.mib.bnh("info", "#wam");
        this.jua(false);
        this.enj.mib.amg("settings", "#cbi", [true]);
        this.acu(false);
        this.enj.qla(false);
        this.enj.pfq(true);
        this.dan.bnh("settings", "#vmo", [a, true])
    };
    this.xvk = function() {
        this.dan.bnh("settings", "#slm");
        if (this.state != cun.rwr.ckk.rmg && this.state != cun.rwr.ckk.pje) {
            this.enj.qla(true)
        } else {
            this.enj.rmw(true)
        }
        this.acu(true);
        this.jua(true);
        this.enj.mib.bnh("info", "#sao", [0])
    };
    this.aqt = function() {
        cun.qrf.acu(false);
        cun.qrf.enj.qla(false);
        cun.qrf.enj.mib.bnh("info", "#jxv");
        cun.qrf.dan.bnh("autop", "#vmo")
    };
    this.kmv = function() {
        var a = cun.qrf.dan.owa("autop");
        if (a) {
            cun.qrf.fsw = a.nnx();
            cun.qrf.mkg = (a.wvk() > 0) ? a.wvk() : 0;
            cun.qrf.emf = (a.jjl() > 0) ? a.jjl() : 0;
            cun.qrf.ewr = (a.evt() > 0) ? a.evt() : 0;
            if (cun.qrf.fsw <= 0) {
                cun.qrf.acu(true);
                cun.qrf.enj.qla(true);
                cun.qrf.enj.mib.bnh("info", "#xsz")
            } else {
                cun.qrf.enj.mib.bnh("astart", "#ilm", [(cun.qrf.fsw >= 0) ? cun.qrf.fsw : "---"])
            }
        }
    };
    this.uml = function() {
        if (this.wqz() != null && this.fsw >= 0) {
            this.fsw -= 1;
            this.enj.mib.bnh("astart", "#ilm", [(this.fsw >= 0) ? this.fsw : "---", true]);
            this.enj.mib.bnh("start", "#ilm", [(this.fsw >= 0) ? this.fsw : "---", true])
        }
    };
    this.uwp = function() {
        if (cun.qrf.wqz() != null) {
            cun.qrf.fsw = 0;
            cun.qrf.mkg = 0;
            cun.qrf.emf = 0;
            cun.qrf.ewr = 0;
            cun.qrf.enj.mib.bnh("astart", "#ilm", ["---"]);
            cun.qrf.enj.mib.bnh("start", "#ilm", ["---"])
        }
        cun.qrf.enj.mib.bnh("start", "#oui");
        cun.qrf.dan.bnh("autop", "#nkf");
        cun.qrf.dan.bnh("settings", "#uwp")
    };
    this.ftw = function() {
        var a = cun.qrf.dan.owa("topi");
        cun.qrf.jwo = false;
        cun.qrf.uwp();
        cun.qrf.enj.mib.bnh("astart", "#ofd", [cun.qrf.jwo]);
        if (a) {
            a.zbo("auto", cun.qrf.jwo)
        }
    };
    this.jhx = function() {
        cun.qrf.vuu();
        var a = ((cun.qrf.win + cun.qrf.wqr > 0 && cun.qrf.gah || cun.qrf.win + cun.qrf.wqr === 0) && (cun.qrf.state == cun.rwr.ckk.muh || cun.qrf.state == cun.rwr.ckk.tej || cun.qrf.state == cun.rwr.ckk.lgw || cun.qrf.state == cun.rwr.ckk.plx || cun.qrf.state == cun.rwr.ckk.hul || cun.qrf.state == cun.rwr.ckk.svd) || (cun.qrf.state == cun.rwr.ckk.rmg && cun.qrf.jkk == 2 && cun.qrf.eni == 2 && cun.qrf.cgk && (cun.qrf.jqz == 5 || cun.qrf.totalBet != cun.qrf.tsl)) || cun.qrf.dtz());
        if (cun.qrf.wqz() != null && a === true && (cun.qrf.fsw <= 0 || (cun.qrf.qjh - cun.qrf.nlf() < cun.qrf.mkg) || (cun.qrf.emf > 0 && cun.qrf.qjh >= cun.qrf.emf) || (cun.qrf.ewr > 0 && cun.qrf.win > cun.qrf.ewr))) {
            if (cun.qrf.jwo === true) {
                cun.qrf.zlc()
            }
            cun.qrf.acu(true);
            cun.qrf.enj.mib.bnh("info", "#xsz");
            cun.qrf.enj.qla(true)
        } else {
            cun.qrf.npd()
        }
    }
}
mws.prototype = new roo;

function jqm(a) {
    var c = aic(a);
    var b = fyg(a);
    return c + b * 13
}

function aic(a) {
    return a >> 2
}

function fyg(a) {
    return a & 3
}

function sbw() {
    var a = this;
    this.rxm = null;
    this.jvn = null;
    this.qoa = false;
    this.zrk = false;
    this.koz = 10;
    this.khl = 0;
    this.nat = 0;
    this.dtw = 0;
    this.zmb = 0;
    this.rnw = 0;
    this.jwm = 0;
    this.ref = false;
    this.lka = 0;
    this.mbf = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 53];
    this.dzm = 52;
    this.jui = 150;
    this.tmz = 0;
    this.keu = [];
    this.pjv = false;
    this.win = 0;
    this.hgf = 0;
    this.gei = [];
    this.cnt = 0;
    this.audio = true;
    this.zac = false;
    this.jpo = 0;
    this.tjg = -1;
    this.mib = null;
    this.akn = null;
    this.vxp = null;
    this.swk = null;
    this.ics = "arial";
    this.lkl = "bold";
    this.fhx = "white";
    this.hti = null;
    this.ctl = 20;
    this.jvf = new icy(50, 20, 700, 120);
    this.uix = false;
    this.llb = function(b, d, c) {
        sbw.prototype.llb.call(this, b, d, c);
        this.dgn()
    };
    this.ajo = function(b) {
        try {
            this.hoe(b);
            this.xsn(b);
            this.sfo(b);
            this.wcz(b)
        } catch (c) {
            console.error(c)
        }
    };
    this.vpj = function(g) {
        try {
            var f = this.mib.tcj("buttons"),
                c = this.mib.tcj("displays"),
                l = this.mib.tcj("cards"),
                k = this.mib.owa("info");
            for (var d = 0, b = f.length; d < b; d++) {
                f[d].vpj(g.dwb)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].vpj(g.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].vpj(g.ywx)
            }
            if (k) {
                k.vpj(g.sit);
                k.eda(g.sit.enh)
            }
            this.mib.bnh("collect", "#eda", [g.fny]);
            this.mib.bnh("gamble", "#eda", [g.faj]);
            this.mib.bnh("creditd", "#eda", [g.kpz]);
            this.mib.bnh("wind", "#eda", [g.dny]);
            this.mib.bnh("card1", "#eda", [g.uhn]);
            this.mib.bnh("card2", "#eda", [g.zkp]);
            this.mib.bnh("card3", "#eda", [g.srt]);
            this.mib.bnh("card4", "#eda", [g.rkq]);
            this.mib.bnh("card5", "#eda", [g.fcg]);
            this.hti = g.ihw;
            this.jvf = g.naq;
            this.ctl = g.fontSize
        } catch (j) {
            console.error(j)
        }
    };
    this.dku = function(f) {
        try {
            var g = this.mib.tcj("buttons"),
                c = this.mib.tcj("displays"),
                l = this.mib.tcj("cards"),
                k = this.mib.owa("info");
            this.akn = f.backgroundColor;
            this.vxp = f.axr;
            this.swk = f.nzu;
            this.ics = f.font;
            this.lkl = f.scm;
            this.fhx = f.ujm;
            for (var d = 0, b = g.length; d < b; d++) {
                g[d].dku(f.pli)
            }
            for (var d = 0, b = c.length; d < b; d++) {
                c[d].dku(f.display)
            }
            for (var d = 0, b = l.length; d < b; d++) {
                l[d].dku(f.ywx)
            }
            if (k) {
                k.dku(f.sit)
            }
        } catch (j) {
            console.error(j)
        }
    };
    this.qmq = function(o, n) {
        var m = this.mib.tcj("buttons"),
            b = this.mib.tcj("cards"),
            l = o - this.x,
            k = n - this.y;
        for (var f = 0, g = m.length; f < g; f++) {
            var c = m[f];
            if (l >= c.x && l <= c.x + c.width && k >= c.y && k <= c.y + c.height && c.bsl() === true && c.qvq() === true && c.aqh() === false) {
                this.parent.gai.ykp("btn");
                this.parent.gai.vsj("btn");
                c.otk(true, false, true);
                this.ksl();
                c.ktx();
                for (var e = 0; e < g; e++) {
                    m[e].sgw(true)
                }
                return true
            }
        }
        for (var f = 1, g = b.length; f < g; f++) {
            var d = b[f];
            if (l >= d.x && l <= d.x + d.width && k >= d.y && k <= d.y + d.height && d.bsl() === true && d.qvq() === true) {
                d.lzh(true, this.parent.language.jis, "white", true);
                this.qze(false);
                this.qla(false);
                this.jwn();
                this.parent.rxg.gws(f);
                return true
            }
        }
        return false
    };
    this.vlq = function() {
        var e = this.mib.tcj("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ozv() === true) {
                c.otk(false, true);
                return true
            }
        }
        return false
    };
    this.chp = function(g) {
        var f = this.mib.tcj("buttons");
        for (var e = 0, b = f.length; e < b; e++) {
            var d = f[e];
            if (d.vhe == g) {
                if (d.bsl() === true && d.qvq() === true && d.aqh() === false) {
                    this.parent.gai.ykp("btn");
                    this.parent.gai.vsj("btn");
                    d.otk(true, false, true);
                    this.ksl();
                    d.ktx();
                    for (var c = 0; c < b; c++) {
                        f[c].sgw(true)
                    }
                }
                return true
            }
        }
        return false
    };
    this.cyi = function() {
        var e = this.mib.tcj("buttons");
        for (var d = 0, b = e.length; d < b; d++) {
            var c = e[d];
            if (c.ozv() === true) {
                c.otk(false, true);
                return true
            }
        }
        return false
    };
    this.dgn = function() {
        this.mib = new bmn();
        this.mib.llb();
        this.mib.etj("buttons");
        this.mib.etj("displays");
        this.mib.etj("cards")
    };
    this.hoe = function(b) {
        this.mib.byd("collect", this.sdx(b.fny, this.parent.language.ocv, this.parent.gai.wxh("btn"), (!this.parent.lrw) ? this.parent.ihh.xyg : null, this.ksw, b.dwb), ["buttons"]);
        this.mib.byd("gamble", this.sdx(b.faj, this.parent.language.joq, this.parent.gai.wxh("btn"), (!this.parent.lrw) ? this.parent.ihh.dll : null, this.joq, b.dwb), ["buttons"])
    };
    this.xsn = function(b) {
        this.mib.byd("creditd", this.rfp(b.kpz, (this.parent.lhw()) ? this.parent.language.wfj : this.parent.language.qjh, this.parent.hga(this.parent.qjh), "yellow", b.display), ["displays"]);
        this.mib.byd("wind", this.rfp(b.dny, this.parent.language.win, this.parent.hga(this.parent.win), "yellow", b.display), ["displays"])
    };
    this.wcz = function(b) {
        this.mib.byd("card1", this.okv(b.uhn, this.parent.gai.wxh("cards"), b.ywx), ["cards"]);
        this.mib.byd("card2", this.okv(b.zkp, this.parent.gai.wxh("cards"), b.ywx), ["cards"]);
        this.mib.byd("card3", this.okv(b.srt, this.parent.gai.wxh("cards"), b.ywx), ["cards"]);
        this.mib.byd("card4", this.okv(b.rkq, this.parent.gai.wxh("cards"), b.ywx), ["cards"]);
        this.mib.byd("card5", this.okv(b.fcg, this.parent.gai.wxh("cards"), b.ywx), ["cards"])
    };
    this.sfo = function(b) {
        var c = new uem();
        c.llb(b.sit.enh, this.context2D);
        c.parent = this;
        c.vpj(b.sit);
        this.mib.byd("info", c)
    };
    this.okv = function(d, e, c) {
        var b = new ezh();
        b.llb(d, this.context2D);
        b.parent = this.parent;
        b.rxm = e;
        b.mbf = this.mbf;
        b.ilm(this.dzm);
        b.vpj(c);
        return b
    };
    this.sdx = function(e, i, g, c, f, d) {
        var b = new xma();
        b.llb(e, this.context2D, null, g, null, i);
        b.parent = this;
        b.ktx = f;
        b.vpj(d);
        if (c) {
            b.vhe = c.ojt
        }
        return b
    };
    this.rfp = function(c, g, f, d, b) {
        var e = new rpy();
        e.llb(c, this.context2D, null, g, f);
        e.parent = this;
        e.rxm = this.parent.gai.wxh("display_effect");
        e.vpj(b);
        return e
    };
    this.qla = function(e) {
        var d = this.mib.tcj("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].eyu(e)
        }
    };
    this.qze = function(e) {
        var d = this.mib.tcj("cards");
        for (var c = 1, b = d.length; c < b; c++) {
            d[c].eyu(e)
        }
    };
    this.ilg = function(e, c, b, d) {
        this.win = c;
        this.mib.bnh("creditd", "#bzf", [this.parent.hga(e), false]);
        this.mib.bnh("wind", "#bzf", [this.parent.hga(c), false]);
        if (d && d === true) {
            this.ksl()
        }
    };
    this.vfv = function(d, b) {
        for (var c = 0; c < 5; c++) {
            this.keu[c] = d[c]
        }
    };
    this.vrf = function(f, d) {
        var k = this.mib.owa("info"),
            j = this.mib.tcj("cards");
        if (f > 0) {
            if (!d) {
                var e = aic(this.keu[f]),
                    c = aic(this.keu[0]);
                if (k) {
                    if (e > c) {
                        k.wvl(this.parent.language.quo, true)
                    } else {
                        k.wvl("", true)
                    }
                }
                j[f].lzh(true, this.parent.language.jis, "white", false)
            } else {
                if (k) {
                    k.wvl("", true)
                }
                j[f].lzh(true, "", "white", false)
            }
        } else {
            if (k) {
                k.wvl("", true)
            }
        }
        j[0].lzh(true, this.parent.language.rso, "white", false);
        for (var g = 0, b = this.keu.length; g < b; g++) {
            if (this.keu[g] >= 0) {
                j[g].ilm(jqm(this.keu[g]), false)
            } else {
                j[g].ilm(this.dzm, false)
            }
        }
    };
    this.sgt = function(d, b) {
        var c = this.mib.owa("info");
        if (c) {
            c.jsi(b);
            c.udf(d, b)
        }
    };
    this.wvl = function(d) {
        this.gei = [];
        for (var c = 0, b = d.length; c < b; c++) {
            this.gei[c] = d[c]
        }
    };
    this.kup = function(e) {
        var d = this.mib.tcj("buttons");
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].cbi(e)
        }
    };
    this.vmo = function(d) {
        var f = this.mib.owa("info"),
            e = this.mib.tcj("cards"),
            g = this.mib.owa("gamble");
        this.qla(!d);
        this.kup((this.parent.state == cun.rwr.ckk.svd || this.parent.state == cun.rwr.ckk.eso || (this.parent.state == cun.rwr.ckk.tej && !d)));
        if (f) {
            f.cbi(true)
        }
        for (var c = 0, b = e.length; c < b; c++) {
            e[c].ilm(this.dzm, false);
            e[c].lzh(false, "", null, false)
        }
        this.cbi(true, true);
        if (!this.parent.hwu && d) {
            this.uix = true;
            this.parent.rxg.mfc()
        } else {
            if (!d) {
                this.uix = false;
                if (g) {
                    g.kxj()
                }
                if (f) {
                    f.sao(3)
                }
                this.nei()
            }
        }
    };
    this.onv = function(e) {
        var d = this.mib.tcj("cards");
        for (var c = 0, b = this.parent.gai.vos("deal"); c < b; c++) {
            this.parent.gai.ykp("deal" + c)
        }
        this.tjg = jqm(e);
        for (var c = 0, b = d.length; c < b; c++) {
            d[c].ilm(this.dzm, false);
            d[c].lzh(false, "", null, false)
        }
        this.ksl();
        setTimeout(this.bkv, 400)
    };
    this.bkv = function() {
        var c = a.mib.owa("card1"),
            b = a.mib.owa("info");
        a.parent.gai.vsj("deal0");
        if (c) {
            c.ilm(a.tjg, true);
            c.lzh(true, a.parent.language.rso, "white", true)
        }
        if (b) {
            b.wam();
            b.sao(0)
        }
        a.ksl();
        a.qze(true);
        a.mjg()
    };
    this.sib = function(d, c) {
        var e = this.mib.owa("card1"),
            b = this.mib.owa("card" + (d + 1));
        this.pjv = aic(this.keu[d]) > aic(this.keu[0]);
        this.hgf = d;
        this.zac = c;
        this.tmz = 0;
        if (e) {
            e.ilm(jqm(this.keu[0]), true);
            e.lzh(true, this.parent.language.rso, "white", true)
        }
        this.parent.gai.vsj("deal" + this.tmz);
        if (b) {
            b.ilm(jqm(this.keu[d]), true);
            b.lzh(true, this.parent.language.jis, "white", true)
        }
        this.ksl();
        this.jpo = 1;
        setTimeout(this.ygq, 500)
    };
    this.ygq = function() {
        var c = a.jui,
            b = a.mib.owa("card" + (a.jpo + 1));
        if (a.jpo == 1) {
            a.jwm = new Date().getTime()
        } else {
            var d = new Date().getTime();
            c = a.jui + (a.tmz * a.jui - (d - a.jwm))
        }
        if (b && !b.tub()) {
            a.tmz += 1;
            a.parent.gai.vsj("deal" + (a.tmz - 1));
            b.ilm(jqm(a.keu[a.jpo]), true);
            a.ksl()
        } else {
            c = 0
        }
        a.jpo++;
        if (c <= 0) {
            c = 0
        }
        if (a.jpo < 5) {
            if (c == 0) {
                a.ygq()
            } else {
                setTimeout(a.ygq, c)
            }
        } else {
            setTimeout(a.afm, a.jui)
        }
    };
    this.afm = function() {
        var b = a.mib.owa("card" + (a.hgf + 1)),
            d = a.mib.owa("info"),
            c = a.mib.owa("gamble");
        if (a.win > 0) {
            if (a.zac) {
                a.moz()
            } else {
                if (d) {
                    d.wam()
                }
                if (a.pjv) {
                    a.parent.gai.vsj("gamblewin");
                    if (b) {
                        b.lzh(true, a.parent.language.win, "yellow", true)
                    }
                    if (d) {
                        d.sao(1)
                    }
                } else {
                    if (b) {
                        b.lzh(true, a.parent.language.gqy, "yellow", true)
                    }
                    if (d) {
                        d.sao(2)
                    }
                    a.nei()
                }
                a.kup(true);
                if (c) {
                    c.kxj()
                }
                a.ksl()
            }
        } else {
            if (d) {
                d.wam()
            }
            setTimeout(a.parent.fmx, 1000)
        }
    };
    this.rkz = function() {};
    this.mjg = function() {
        this.audio = true;
        this.cnt = setInterval(function() {
            a.audio = !a.audio;
            if (a.audio) {
                a.parent.gai.vsj("gamble1");
                a.parent.gai.ykp("gamble2")
            } else {
                a.parent.gai.vsj("gamble2");
                a.parent.gai.ykp("gamble1")
            }
        }, 400)
    };
    this.nei = function() {
        cun.qrf.gai.ykp("gambleprop");
        cun.qrf.gai.vsj("gambleprop");
        cun.qrf.zaw.qla(true)
    };
    this.jwn = function() {
        clearInterval(this.cnt);
        this.parent.gai.ykp("gamble1");
        this.parent.gai.ykp("gamble2")
    };
    this.ksw = function() {
        a.qla(false);
        a.mib.bnh("gamble", "#eeq");
        a.parent.gai.ykp("gambleprop");
        a.parent.rxg.ocv()
    };
    this.joq = function() {
        a.qla(false);
        a.mib.bnh("gamble", "#eeq");
        a.parent.gai.ykp("gambleprop");
        if (a.uix == false) {
            a.uix = true;
            a.parent.rxg.mfc()
        } else {
            a.parent.rxg.ivd()
        }
    };
    this.moz = function() {
        a.mib.bnh("info", "#wam");
        setTimeout(a.gpo, 10)
    };
    this.gpo = function() {
        a.qoa = false;
        a.zrk = (a.parent.win > a.parent.totalBet) ? true : false;
        a.koz = 10;
        a.khl = 0;
        a.nat = a.parent.win;
        a.dtw = a.parent.qjh - a.parent.win;
        a.zmb = 0;
        a.rnw = a.parent.win;
        a.jwm = new Date().getTime();
        a.ref = true;
        a.lka = setTimeout(a.qyi, a.parent.dkh)
    };
    this.qyi = function() {
        var b = 0,
            c = a.parent.bkf,
            d = 0;
        if (a.rnw > 0) {
            if (!a.qoa) {
                a.parent.gai.ykp("collect");
                a.parent.gai.vsj("collect");
                a.qoa = true
            }
            b = Math.round(a.rnw / a.koz);
            a.rnw -= b;
            if (a.rnw < 0) {
                a.rnw = 0
            }
            a.mib.bnh("wind", "#bzf", [a.parent.hga(a.nat - (a.parent.win - a.rnw)), true]);
            a.mib.bnh("creditd", "#bzf", [a.parent.hga(a.dtw + (a.parent.win - a.rnw)), true]);
            a.khl++;
            a.koz -= 1;
            d = new Date().getTime();
            c = a.parent.dkh + (a.khl * a.parent.dkh - (d - a.jwm));
            a.lka = setTimeout(a.qyi, c)
        } else {
            a.parent.gai.ykp("collect");
            a.parent.gai.vsj("collectend");
            a.ref = false;
            clearTimeout(a.lka);
            setTimeout(a.parent.fmx, 100)
        }
    };
    this.ksl = function(n, m, o, j) {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var d = (n != null && m != null && o != null && j != null),
            q = this.context2D,
            c = this.qce,
            b = this.mib.tcj("cards"),
            l = this.mib.tcj("buttons"),
            g = this.mib.tcj("displays"),
            p = this.mib.owa("info"),
            f = this.parent.gai.wxh("btn_back"),
            e = 0,
            k = 0;
        q.save();
        if (d) {
            q.beginPath();
            q.rect(n, m, o, j);
            q.closePath();
            q.clip()
        }
        if (f) {
            q.drawImage(this.rxm, (this.hti.x == 0) ? this.hti.width : 0, this.height - f.height);
            yqx = q.createLinearGradient(this.hti.x, this.hti.y, this.hti.x + this.hti.width, this.hti.y);
            yqx.addColorStop(0.2, this.vxp);
            yqx.addColorStop(1, this.swk);
            q.fillStyle = yqx;
            q.save();
            if (this.parent.rpk === cun.fbj.pmj) {
                q.translate(this.hti.width / 2, this.hti.height / 2);
                q.rotate(Math.PI);
                q.translate(-this.hti.width / 2, -this.hti.height / 2)
            }
            q.fillRect(this.hti.x, this.hti.y, this.hti.width, this.hti.height);
            q.drawImage(f, this.hti.x, this.hti.y, this.hti.width, this.hti.height);
            q.restore()
        } else {
            q.drawImage(this.rxm, 0, 0);
            if (this.akn != null) {
                cun.hfb.roz(q, this.hti.x, this.hti.y, this.hti.width, this.hti.height, this.akn, 1)
            }
        }
        this.hks(q);
        q.restore();
        for (e = 0, k = b.length; e < k; e++) {
            b[e].vbu(c);
            b[e].ksl()
        }
        for (e = 0, k = l.length; e < k; e++) {
            l[e].ksl()
        }
        p.ksl();
        for (e = 0, k = g.length; e < k; e++) {
            g[e].ksl()
        }
        if (this.ucm && this.qce) {
            if (d) {
                this.ucm.drawImage(this.qce, n, m, o, j, this.x + n, this.y + m, o, j)
            } else {
                this.ucm.drawImage(this.qce, this.x, this.y)
            }
        }
    };
    this.hks = function(c) {
        var d = Math.round(this.jvf.height / this.gei.length) - 1;
        for (var e = 0, b = this.gei.length; e < b; e++) {
            cun.hfb.abt(c, this.gei[e], this.fhx, this.jvf.x, this.jvf.y + (e) * d, this.jvf.width, this.ctl, this.ics, this.ctl, this.lkl)
        }
    }
}
sbw.prototype = new bom;

function bqr() {
    this.xyg = {
        ojt: 32,
        ebx: -1,
        value: "SPACE",
        dlh: null
    };
    this.dll = {
        ojt: 8,
        ebx: -1,
        value: "BACKSPACE",
        dlh: null
    }
}
bqr.prototype = new jqb;

function zos() {
    this.usr = [800, 800, 800, 800, 800];
    this.pdz = [1, 2, 3, 4, 5];
    this.hit = [
        [],
        [],
        [],
        [],
        []
    ];
    this.sch = 0;
    this.csj = -1;
    this.ews = 0;
    this.fuw = "red";
    this.wca = [];
    this.muf = 2;
    this.dku = function(a) {
        zos.prototype.dku.call(this, a);
        try {
            this.fuw = a.byp
        } catch (b) {
            console.error(b)
        }
    };
    this.vpj = function(a) {
        zos.prototype.vpj.call(this, a);
        try {
            this.wca = a.dny;
            this.muf = a.hmt
        } catch (b) {
            console.error(b)
        }
    };
    this.qmq = function(b, j) {
        var g = b - this.x,
            f = j - this.y,
            e = this.parent.enj.mib.owa("bet");
        for (var c = 0, a = this.wca.length; c < a; c++) {
            var d = this.wca[c];
            if (g >= d.x && g <= d.x + d.width && f >= d.y && f <= d.y + d.height && this.bsl() === true) {
                if (e && e.qvq() === true) {
                    if (c < 3) {
                        this.parent.wbs = this.parent.ldr() + c
                    } else {
                        if (c == 4) {
                            this.parent.wbs = this.parent.pdw()
                        } else {
                            if (this.parent.wbs < this.parent.kfq.length - 1) {
                                if (this.parent.wbs >= this.parent.pdw() - 1) {
                                    this.parent.wbs = 0;
                                    while (this.parent.wbs < this.parent.ldr() + 3) {
                                        this.parent.wbs++
                                    }
                                } else {
                                    if (this.parent.wbs < this.parent.ldr() + 3) {
                                        this.parent.wbs = this.parent.ldr() + 3
                                    } else {
                                        this.parent.wbs++
                                    }
                                }
                            } else {
                                this.parent.wbs = 0;
                                while (this.parent.wbs < this.parent.ldr() + 3) {
                                    this.parent.wbs++
                                }
                            }
                        }
                    }
                    this.parent.vnz(false);
                    this.parent.enj.mib.amg("buttons", "#sgw", [true]);
                    return true
                }
            }
        }
        return false
    };
    this.vlq = function() {};
    this.chp = function() {};
    this.cyi = function() {};
    this.auq = function(f) {
        var e = 0;
        this.ews = this.parent.ldr();
        for (; e < 4; e++) {
            this.pdz[e] = this.parent.kfq[this.ews + e]
        }
        this.pdz[e] = this.parent.puh;
        for (var e = 0, b = f.length; e < b; e++) {
            this.ahq[e] = f[b - 1 - e]
        }
        for (var a = 0, d = this.pdz.length; a < d; a++) {
            for (var e = 0, c = this.ahq.length; e < c; e++) {
                if (e == 0 && a == 4) {
                    this.hit[a][e] = this.usr[this.parent.jxj] * this.pdz[a]
                } else {
                    this.hit[a][e] = this.ahq[e] * this.pdz[a]
                }
            }
        }
    };
    this.fsg = function(c) {
        if (c < this.parent.puh && c > this.parent.kfq[this.ews + 2]) {
            this.sch = 3;
            this.pdz[3] = c;
            for (var b = 0, a = this.ahq.length; b < a; b++) {
                this.hit[3][b] = this.ahq[b] * this.pdz[3]
            }
        } else {
            if (c == this.parent.kfq[this.ews]) {
                this.sch = 0
            } else {
                if (c == this.parent.kfq[this.ews + 1]) {
                    this.sch = 1
                } else {
                    if (c == this.parent.kfq[this.ews + 2]) {
                        this.sch = 2
                    } else {
                        if (c == this.parent.puh) {
                            this.sch = 4
                        }
                    }
                }
            }
        }
        this.ksl()
    };
    this.dbx = function(a, b) {
        this.csj = this.qik.length - a;
        if (b && b === true) {
            this.ksl()
        }
    };
    this.izg = function(a) {
        this.csj = -1;
        if (a && a === true) {
            this.ksl()
        }
    };
    this.ksl = function() {
        if (!this.bsl() || !this.parent.fus()) {
            return
        }
        var l = this.context2D,
            b = this.height - 2 * this.qmu,
            a = Math.round(b / this.qik.length),
            c = (this.ctl < a) ? this.ctl : a - 2;
        l.save();
        if (this.rxm != null) {
            l.drawImage(this.rxm, 0, 0)
        }
        cun.hfb.roz(l, this.wca[this.sch].x, this.wca[this.sch].y, this.wca[this.sch].width, this.wca[this.sch].height, this.fuw, 1);
        for (var g = 0, k = this.qik.length; g < k; g++) {
            if (g == this.csj) {
                cun.hfb.cwu(l, this.qik[g], "white", 0, this.qmu + a * (g), 200, a, this.ics, c, this.lkl, this.qmu)
            } else {
                cun.hfb.cwu(l, this.qik[g], this.fhx, 0, this.qmu + a * (g), 200, a, this.ics, c, this.lkl, this.qmu)
            }
        }
        for (var g = 0, e = this.hit.length; g < e; g++) {
            for (var f = 0, d = this.hit[g].length; f < d; f++) {
                if ((g == 4 && f == 0) || (this.csj == f && g == this.sch)) {
                    cun.hfb.dsg(l, this.parent.oht(this.hit[g][f]), "white", this.wca[g].x, this.qmu + a * (f), this.wca[g].width, a, this.ics, c, this.lkl, this.muf)
                } else {
                    cun.hfb.dsg(l, this.parent.oht(this.hit[g][f]), this.fhx, this.wca[g].x, this.qmu + a * (f), this.wca[g].width, a, this.ics, c, this.lkl, this.muf)
                }
            }
        }
        l.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    }
}
zos.prototype = new dej;

function vep() {
    this.lyo = [];
    this.bth = "verdana";
    this.bwb = "bold italic";
    this.dve = "white";
    this.rxp = [];
    this.zsr = 12;
    this.jvf = new icy();
    this.dku = function(a) {
        vep.prototype.dku.call(this, a);
        try {
            this.bth = a.itz;
            this.bwb = a.snj;
            this.dve = a.kdh
        } catch (b) {
            console.error(b)
        }
    };
    this.vpj = function(a) {
        vep.prototype.vpj.call(this, a);
        try {
            this.rxp = a.eyf;
            this.jvf = a.naq;
            this.zsr = a.ldl
        } catch (b) {
            console.error(b)
        }
    };
    this.ksl = function() {
        if (!this.bsl()) {
            return
        }
        var a = this.context2D;
        a.save();
        if (this.qfo) {
            a.strokeStyle = this.qfo
        }
        a.lineJoin = "round";
        a.lineCap = "round";
        a.lineWidth = this.cyj;
        a.font = this.lkl + " " + this.ctl + "px " + this.ics;
        a.textBaseline = "bottom";
        a.drawImage(this.rxm, 0, 0);
        a.textAlign = "left";
        a.fillStyle = this.nmd;
        for (var b = 0; b < this.lyo.length; b++) {
            this.iws(this.lyo[b], this.rxp[b], this.ctl, this.ics)
        }
        a.textAlign = "center";
        a.fillStyle = this.fhx;
        for (var b = 0; b < this.vjp.length; b++) {
            this.qhp(this.vjp[b], this.ykh[b], this.ctl, this.ics)
        }
        cun.hfb.abt(a, cun.qrf.bgr(cun.qrf.language.rfx), this.dve, this.jvf.x, this.jvf.y, this.jvf.width, this.jvf.height, this.bth, this.zsr, this.bwb);
        a.restore();
        if (this.ucm && this.qce) {
            this.ucm.drawImage(this.qce, this.x, this.y)
        }
    }
}
vep.prototype = new fgd;

function nbk() {
    this.fhe = "AllAmericanPoker";
    this.fcq = "All American";
    this.jcn = cun.emv.value30 + "/allamericanpoker/images/";
    this.rnp = cun.emv.value30 + "/allamericanpoker/sounds/";
    this.uul = 9;
    this.qyn = null;
    this.lxe = null;
    this.zlv = [
        [1, 1, 3, 8, 8, 8, 40, 200, 250],
        [1, 1, 3, 8, 8, 8, 35, 200, 250],
        [1, 1, 3, 8, 8, 8, 30, 200, 250],
        [1, 1, 3, 8, 8, 8, 25, 200, 250],
        [1, 1, 3, 8, 8, 8, 15, 200, 250]
    ];
	gameController=this;
    this.wgr = null;
    this.hiw = null;
    this.fzi = null;
    this.pam = null;
    this.ycm = function() {
        this.zye = [this.language.uie, this.language.vbb, this.language.auz, this.language.jee, this.language.kvv, this.language.rdj, this.language.ajx, this.language.hat, this.language.fyj];
        this.mbf = [-1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, -1, -1, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, -1, -1, -1, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53];
        this.dzm = 63;
        this.fhb("1_0_81")
    };
    this.qmq = function(c) {
        if (c.preventDefault) {
            c.preventDefault()
        }
        if (c.stopPropagation) {
            c.stopPropagation()
        }
        if (this.ksa) {
            return
        }
        var q = 0,
            p = 0,
            d = false,
            r = false,
            m = false,
            j = this.dan.owa("loading"),
            b = this.dan.owa("stats"),
            s = this.dan.owa("topb"),
            o = this.dan.owa("topi"),
            a = this.dan.owa("betsel"),
            l = this.dan.owa("paytable"),
            n = this.dan.owa("autop"),
            e = this.dan.owa("settings");
        if (c.touches) {
            var g = c.touches[0];
            d = true;
            if (!this.vix) {
                q = g.pageX - this.offsetLeft;
                p = g.pageY - this.offsetTop
            } else {
                q = Math.round((g.pageX - this.offsetLeft) / this.ngv);
                p = Math.round((g.pageY - this.offsetTop) / this.zwd)
            }
        } else {
            if (c.which != 1) {
                return
            }
            if (!this.vix) {
                q = c.pageX - this.offsetLeft;
                p = c.pageY - this.offsetTop
            } else {
                q = Math.round((c.pageX - this.offsetLeft) / this.ngv);
                p = Math.round((c.pageY - this.offsetTop) / this.zwd)
            }
        }
        if (this.irg === true) {
            if (n && n.bsl()) {
                if (n.qmq(q, p)) {
                    return
                }
            }
            if (s && s.bsl()) {
                if (s.qmq(q, p)) {
                    clearTimeout(this.hxl);
                    return
                } else {
                    m = true
                }
            }
            if (a) {
                if (a.bsl()) {
                    if (a.qmq(q, p, d)) {
                        clearTimeout(this.hxl);
                        return
                    } else {
                        r = true
                    }
                }
            }
            if (m) {
                this.akj(this.enj.chl(q, p, null));
                return
            } else {
                if (r) {
                    if (a && a.qvq()) {
                        this.zku(this.enj.chl(q, p, null))
                    }
                    return
                }
            }
            if (e && e.bsl()) {
                if (e.qmq(q, p)) {
                    return
                }
            }
            if (o) {
                if (o.qmq(q, p, d)) {
                    return
                }
            }
            if (b && b.bsl()) {
                if (b.qmq(q, p)) {
                    return
                }
            }
            if (this.jix && this.jix.bsl()) {
                if (this.jix.qmq(q, p)) {
                    return
                }
            }
            if (this.zaw && this.zaw.bsl()) {
                if (this.zaw.qmq(q, p)) {
                    return
                }
            }
            if (this.enj != null) {
                if (this.enj.qmq(q, p, r)) {
                    return
                }
            }
            if (this.gvv != null) {
                for (var f = 0, k = this.gvv.length; f < k; f++) {
                    if (this.gvv[f].qmq(q, p)) {
                        return
                    }
                }
            }
            if (l) {
                if (l.qmq(q, p)) {
                    return
                }
            }
        } else {
            if (j && j.bsl()) {
                if (j.qmq(q, p)) {
                    return
                }
            }
        }
    };
    this.qzn = function() {
        this.ihh = new bqr()
    };
    this.flh = function() {
        nbk.prototype.flh.call(this);
        this.dnd = this.zlv[this.jxj]
    };
    this.tle = function() {
        this.zaw = new sbw();
        this.zaw.llb(this.fbj.joq.enh, null, this.context2D);
        this.zaw.parent = this;
        this.zaw.rxm = this.gai.wxh("g_back");
        this.zaw.ajo(this.fbj.joq);
        this.zaw.sgt(this.lzj, 0);
        this.zaw.sgt(this.wgr, 1);
        this.zaw.sgt(this.hiw, 2);
        this.zaw.sgt(this.pam, 3);
        this.zaw.wvl(this.fzi);
        this.zaw.dku(this.style.joq);
        this.zaw.vpj(this.fbj.joq);
        this.zaw.cbi(false);
        var a = this.gai.ayn("gamblewin");
        if (!this.lrw && a != null) {
            a.ewn(this.zaw.nei)
        }
    };
    this.ccn = function() {
        var a = new zos();
        a.llb(this.fbj.khd.enh, null, this.context2D);
        a.parent = this;
        a.rxm = this.gai.wxh("paytable");
        a.dku(this.style.khd);
        a.vpj(this.fbj.khd);
        a.auq(this.dnd);
        a.get(this.zye);
        this.dan.byd("paytable", a)
    };
    this.opg = function() {
        this.kop();
        this.iar();
        nbk.prototype.opg.call(this)
    };
    this.kop = function() {
        this.qyn = new vep();
        this.qyn.llb(this.fbj.nkq.win.enh, null, this.jix.context2D, this.gai.wxh("help"));
        this.qyn.parent = this.jix;
        this.qyn.vjp[0] = this.language.yky;
        this.qyn.vjp[1] = this.language.rur;
        this.qyn.vjp[2] = this.language.xyl;
        this.qyn.vjp[3] = this.language.qlk;
        this.qyn.vjp[4] = this.language.obb;
        this.qyn.vjp[5] = this.language.kto;
        this.qyn.vjp[6] = this.language.rok;
        this.qyn.vjp[7] = this.language.lck;
        this.qyn.vjp[8] = this.language.ewb;
        this.qyn.lyo[0] = this.language.fyj;
        this.qyn.lyo[1] = this.language.hat;
        this.qyn.lyo[2] = this.language.ajx;
        this.qyn.lyo[3] = this.language.rdj;
        this.qyn.lyo[4] = this.language.kvv;
        this.qyn.lyo[5] = this.language.jee;
        this.qyn.lyo[6] = this.language.auz;
        this.qyn.lyo[7] = this.language.vbb;
        this.qyn.lyo[8] = this.language.uie;
        this.qyn.dku(this.style.nkq.win);
        this.qyn.vpj(this.fbj.nkq.win);
        if (!this.dan.owa("tops")) {
            this.jix.qoo(this.qyn)
        }
    };
    this.iar = function() {
        var a = this.dan.owa("tops");
        if (a) {
            this.lxe = new vep();
            this.lxe.llb(this.fbj.top.win.enh, null, a.context2D, this.gai.wxh("help_top"));
            this.lxe.parent = a;
            this.lxe.vjp[0] = this.language.yky;
            this.lxe.vjp[1] = this.language.rur;
            this.lxe.vjp[2] = this.language.xyl;
            this.lxe.vjp[3] = this.language.qlk;
            this.lxe.vjp[4] = this.language.obb;
            this.lxe.vjp[5] = this.language.kto;
            this.lxe.vjp[6] = this.language.rok;
            this.lxe.vjp[7] = this.language.lck;
            this.lxe.vjp[8] = this.language.ewb;
            this.lxe.lyo[0] = this.language.fyj;
            this.lxe.lyo[0] = this.language.hat;
            this.lxe.lyo[0] = this.language.ajx;
            this.lxe.lyo[0] = this.language.rdj;
            this.lxe.lyo[0] = this.language.kvv;
            this.lxe.lyo[0] = this.language.jee;
            this.lxe.lyo[0] = this.language.auz;
            this.lxe.lyo[0] = this.language.vbb;
            this.lxe.lyo[0] = this.language.uie;
            this.lxe.dku(this.style.nkq.win);
            this.lxe.vpj(this.fbj.top.win);
            a.qoo(this.lxe)
        }
    };
    this.eok = function() {
        this.lzj[0] = this.language.cqm;
        this.lzj[1] = this.language.yoa;
        this.zaw.sgt(this.lzj, 0);
        this.wgr[0] = this.language.quo;
        this.wgr[1] = this.language.pow;
        this.zaw.sgt(this.wgr, 1);
        this.hiw[0] = this.language.gqy;
        this.hiw[1] = this.language.pow;
        this.zaw.sgt(this.hiw, 2);
        this.pam[0] = this.language.nxr;
        this.pam[1] = this.language.ipz;
        this.zaw.sgt(this.pam, 3);
        this.fzi[0] = this.language.uhg;
        this.fzi[1] = this.language.fiw;
        this.fzi[2] = this.language.rbo;
        this.fzi[3] = this.language.tlu;
        this.zaw.wvl(this.fzi);
        this.zaw.mib.bnh("creditd", "#gjq", [(this.lhw()) ? this.language.wfj : this.language.qjh, false]);
        this.zaw.mib.bnh("wind", "#gjq", [this.language.win, false]);
        this.zaw.mib.bnh("collect", "#bzf", [this.language.ocv, false]);
        this.zaw.mib.bnh("gamble", "#bzf", [this.language.joq, false]);
        if (this.qyn != null) {
            this.qyn.vjp[0] = this.language.yky;
            this.qyn.vjp[1] = this.language.rur;
            this.qyn.vjp[2] = this.language.xyl;
            this.qyn.vjp[3] = this.language.qlk;
            this.qyn.vjp[4] = this.language.obb;
            this.qyn.vjp[5] = this.language.kto;
            this.qyn.vjp[6] = this.language.rok;
            this.qyn.vjp[7] = this.language.lck;
            this.qyn.vjp[8] = this.language.ewb;
            this.qyn.lyo[0] = this.language.fyj;
            this.qyn.lyo[1] = this.language.hat;
            this.qyn.lyo[2] = this.language.ajx;
            this.qyn.lyo[3] = this.language.rdj;
            this.qyn.lyo[4] = this.language.kvv;
            this.qyn.lyo[5] = this.language.jee;
            this.qyn.lyo[6] = this.language.auz;
            this.qyn.lyo[7] = this.language.vbb;
            this.qyn.lyo[8] = this.language.uie
        }
        if (this.lxe != null) {
            this.lxe.vjp[0] = this.language.yky;
            this.lxe.vjp[1] = this.language.rur;
            this.lxe.vjp[2] = this.language.xyl;
            this.lxe.vjp[3] = this.language.qlk;
            this.lxe.vjp[4] = this.language.obb;
            this.lxe.vjp[5] = this.language.kto;
            this.lxe.vjp[6] = this.language.rok;
            this.lxe.vjp[7] = this.language.lck;
            this.lxe.vjp[8] = this.language.ewb;
            this.lxe.lyo[0] = this.language.fyj;
            this.lxe.lyo[1] = this.language.hat;
            this.lxe.lyo[2] = this.language.ajx;
            this.lxe.lyo[3] = this.language.rdj;
            this.lxe.lyo[4] = this.language.kvv;
            this.lxe.lyo[5] = this.language.jee;
            this.lxe.lyo[6] = this.language.auz;
            this.lxe.lyo[7] = this.language.vbb;
            this.lxe.lyo[8] = this.language.uie
        }
    };
    this.jkt = function() {
        this.lzj = [];
        this.lzj[0] = this.language.cqm;
        this.lzj[1] = this.language.yoa;
        this.wgr = [];
        this.wgr[0] = this.language.quo;
        this.wgr[1] = this.language.pow;
        this.hiw = [];
        this.hiw[0] = this.language.gqy;
        this.hiw[1] = this.language.pow;
        this.pam = [];
        this.pam[0] = this.language.nxr;
        this.pam[1] = this.language.ipz;
        this.fzi = [];
        this.fzi[0] = this.language.uhg;
        this.fzi[1] = this.language.fiw;
        this.fzi[2] = this.language.rbo;
        this.fzi[3] = this.language.tlu
    };
    this.odh = function() {
        if (this.qyn) {
            this.qyn.eda(this.fbj.nkq.win.enh);
            this.qyn.vpj(this.fbj.nkq.win)
        }
    };
    this.kbe = function() {
        if (this.zaw) {
            this.zaw.eda(this.fbj.joq.enh);
            this.zaw.vpj(this.fbj.joq)
        }
    };
    this.xjq = function() {
        nbk.prototype.xjq.call(this);
        var a = this.jcn + this.fbj.type + "/";
        this.gai.mhy("paytable", a + "paytable.png");
        this.gai.mhy("help_top", a + "help_top.jpg")
    };
    this.cow = function() {
        nbk.prototype.cow.call(this);
        var a = this.rnp;
        this.gai.hri("gamblewin", null, false, a + "win11");
        this.gai.hri("gamble1", null, false, a + "gamble1");
        this.gai.hri("gamble2", null, false, a + "gamble2")
    };
    this.xgc = function(b) {
        var a = this.dan.owa("winp");
        if (a) {
            a.bzf(this.zye[this.ppx - 1] + " " + this.language.hhn + " " + this.oht(b), false);
            a.cbi(true)
        }
        this.dan.bnh("paytable", "#dbx", [this.ppx, false])
    };
    this.eqd = function(a) {
        this.dan.bnh("winp", "#bzf", [this.zye[this.ppx - 1] + " " + this.language.hhn + " " + this.oht(a), true])
    };
    this.wke = function() {
        this.dan.bnh("paytable", "#izg");
        nbk.prototype.wke.call(this)
    };
    this.yea = function(a) {
        this.rpk = a;
        if (a == cun.fbj.zew) {
            return new ukp()
        } else {
            if (a == cun.fbj.tys) {
                return new las()
            } else {
                if (a == cun.fbj.gil) {
                    return new cyb()
                } else {
                    if (a == cun.fbj.jxx) {
                        return new rit()
                    } else {
                        if (a == cun.fbj.udj) {
                            return new jlg()
                        } else {
                            if (a == cun.fbj.erd) {
                                return new kuy()
                            } else {
                                if (a == cun.fbj.ohs) {
                                    return new vck()
                                } else {
                                    if (a == cun.fbj.spm) {
                                        return new zmj()
                                    } else {
                                        if (a == cun.fbj.mlm) {
                                            return new wyt()
                                        } else {
                                            if (a == cun.fbj.pmj) {
                                                return new ckw()
                                            } else {
                                                if (a == cun.fbj.zqk) {
                                                    return new dze()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null
    };
    this.tol = function() {
        this.style = new ggz()
    }
}
nbk.prototype = new mws;

function fug() {
    cun.qfn = -1;
    cun.qrf = new nbk();
    cun.qrf.llb({
        fbj: cun.emv.value14
    });
    window.focus()
}

function ecq() {
    if (cun.qrf != null) {
        if (cun.qfn >= 0) {
            clearTimeout(cun.qfn)
        }
        cun.qfn = setTimeout(cun.qrf.pzb, 200)
    }
}

function wvs() {
    if (cun.qrf != null) {
        if (cun.qfn >= 0) {
            clearTimeout(cun.qfn)
        }
        cun.qfn = setTimeout(cun.qrf.epr, 200)
    }
}
if (cun.hfb.sqo()) {
    window.onorientationchange = wvs;
    window.onresize = wvs
} else {
    window.onresize = ecq
}
if (cun.emv.value9) {
    window.onload = fug
} else {
    fug()
};