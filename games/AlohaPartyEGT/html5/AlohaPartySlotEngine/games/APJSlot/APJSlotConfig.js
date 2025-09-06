function APJSlotConfig(settings) 
{
	var _slotName = settings.gameType;
	var _engineType = settings.engineType;
    
    //// END VARIABLES
    
    this.resources = 
    {
        css : [_engineType+'/games/'+_slotName+'/'+_slotName+'.css'],
        img : [
			_engineType+'/games/'+_slotName+'/images/background.jpg',
			_engineType+'/games/'+_slotName+'/images/backgroundOverlay.png',
			_engineType+'/games/'+_slotName+'/images/reel_images_01.png',
			_engineType+'/games/'+_slotName+'/images/reel_images_02.jpg',
			_engineType+'/games/'+_slotName+'/images/betButton.png',
			_engineType+'/games/'+_slotName+'/images/denominationButton.png',
			_engineType+'/games/'+_slotName+'/images/autoSoundButton.png',
			_engineType+'/games/'+_slotName+'/images/settingsPaytableCloseButton.png',
			_engineType+'/games/'+_slotName+'/images/waysPay.png',
			_engineType+'/games/'+_slotName+'/images/settingsInfo.png',
			'common/commonImages/button_sprite.png',
			'common/commonImages/gambleButton.png',
			'common/commonImages/mainGambleCards.png',
			'common/commonImages/historyGambleCards.png'
        ],
        freespinAnimation:
    	{
			js: 
			[
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/js/FreespinAnimation.js',
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/js/CoreAnimation.js',
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/js/StartAnimation.js',
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/js/IntroAnimation.js',
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/js/RetriggerAnimation.js',
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/js/OutroAnimation.js',
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/js/Translations.js',

			],
			css:
			[
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/fonts.css',
			 	_engineType+'/games/'+_slotName+'/freespinAnimation/style.css'
			],
			img:
			{
    			nonlocalized:
    			[
    				_engineType+'/games/'+_slotName+'/freespinAnimation/images/sp_bgr.png'
    			]
			}
    	}
    };

    if(settings.jackpotAllowed)
    {
    	this.resources.img.push(_engineType+'/games/'+_slotName+'/images/gameTitle.png');
    	this.resources.img.push('common/commonImages/jackpotImages.png');
        this.resources.img.push('common/commonImages/jackpotCardsElements.jpg');
        this.resources.img.push('common/commonImages/jackpotCardBack.jpg');
        this.resources.img.push('common/commonImages/jackpotCards.png');
    }
    else
    {
    	this.resources.img.push(_engineType+'/games/'+_slotName+'/images/gameTitleNoJackpot.png');
    	this.resources.img.push(_engineType+'/games/'+_slotName+'/images/topGameTitle.png');
    }
    
    this.prepareSettings = function() 
	{
		settings.numImages          					= 12;
		settings.numReels	      						= 5;
		settings.numReelCards     						= 4;
		settings.combCount      						= 2;
		settings.reelWidth     							= 175;
		settings.reelHeight								= 524;
		settings.imageHeight							= 131;
		settings.reelCoordX								= 8;
		settings.reelCoordY								= 7;
		settings.reelSpacing							= 22;
		settings.transparentReels						= true;
		settings.wildIndex								= 10;
		settings.lineGame								= false;
		settings.linesCountConfig						= [4 , 16 , 64 , 256, 1024];
		settings.fixedLinesCount						= false;
		settings.comboColors							= [0xD5008D, 0x4784D2, 0x353E9A, 0xCC1B1C];
		settings.restoreReels 							= false;
		settings.serverMessage							= null;
		settings.mainFakeReels;

		settings.waysCells = [
			[ 1,0 , 1,1, 1,3, 2,0, 2,1, 2,3, 3,0, 3,1, 3,3, 4,0, 4,1, 4,3 ],
			[ 2,0, 2,1, 2,3, 3,0, 3,1, 3,3, 4,0, 4,1, 4,3 ],
			[ 3,0, 3,1, 3,3, 4,0, 4,1, 4,3 ],
			[ 4,0, 4,1, 4,3 ],
			[ ]
		];

		settings.scatterConfig	= [{index:11, minCount : 3, freespinMinCount:3, validReels : [ true, true, true, true, true ], freespinsVideoIndex: 11, freespinsSoundIndex:0}];
		
		settings.reelImages[0] = _engineType+'/games/'+_slotName+'/images/reel_images_01.png';
		settings.reelImages[1] = _engineType+'/games/'+_slotName+'/images/reel_images_02.jpg';
		
		settings.cardsInfo = [ 
							{reelImageIndex:0, x:0, y:0},
							{reelImageIndex:0, x:175, y:0},
							{reelImageIndex:0, x:350, y:0},
							{reelImageIndex:0, x:525, y:0},
							{reelImageIndex:0, x:700, y:0},
							{reelImageIndex:1, x:0, y:0},
							{reelImageIndex:1, x:350, y:0},
							{reelImageIndex:1, x:175, y:0},
							{reelImageIndex:1, x:525, y:0},
							{reelImageIndex:1, x:700, y:0},
							{reelImageIndex:1, x:1050, y:0},
							{reelImageIndex:1, x:875, y:0}
							];
		
		settings.soundsInfo[1] = {src: _engineType+"/games/"+_slotName+"/sounds/shortSounds.mp3", sounds:[	
																							{name: "reelAccelerateSound", 		start:1, 	duration: 2.05},	
																							{name: "stopScatterSound", 			start:0, 	duration: 0.4}
																							]};
		settings.soundsInfo[2] = {src: _engineType+"/games/"+_slotName+"/sounds/winSounds.mp3", sounds:[	
																							{name: "winCocktail", 				start:10, 	duration: 3.6},
																							{name: "winHibiscus", 				start:0, 	duration: 4.4},
																							{name: "winParadise", 				start:5, 	duration: 3.8},
																							{name: "winWoman", 					start:19, 	duration: 4.5},
																							{name: "winMan", 					start:14, 	duration: 3.8},
																							{name: "winWild", 					start:24, 	duration: 5.4},
																							{name: "winScatterFS", 				start:30, 	duration: 7.6},
																							{name: "creditAnimationSound", 		start:38, 	duration: 10.0}
																							]};
		settings.soundsInfo[5] = {src: _engineType+"/games/"+_slotName+"/sounds/freeSpinsSounds.mp3", sounds:[	
																							{name: "pressStartSound", 				start:0, 	duration: 8},
																							{name: "freeSpinsBackgroundSound", 		start:15, 	duration: 16.5},
																							{name: "outroSound", 					start:9, 	duration: 5.6}
																							]};
																							
		settings.winSounds = [null, null, null, null, null, "winCocktail", "winParadise", "winHibiscus", "winWoman", "winMan", "winWild", "winScatterFS"];
		settings.winFullSounds = [
			{ card: 0, name: "fullLine1" },
			{ card: 1, name: "fullLine1" },
			{ card: 2, name: "fullLine1" },
			{ card: 3, name: "fullLine2" },
			{ card: 4, name: "fullLine2" },
			{ card: 5, name: "fullLine3" },
			{ card: 6, name: "fullLine3" },
			{ card: 7, name: "fullLine3" },
			{ card: 8, name: "fullLine4" },
			{ card: 9, name: "fullLine4" },
			{ card: 10, name: "fullLine4" }
		];
		settings.freespinSounds = ["winScatterFS"];							
		settings.scatterSounds = [	{scatter:11, sounds:["stopScatterSound", "stopScatterSound", "stopScatterSound", "stopScatterSound", "stopScatterSound"]}];
		settings.jackpotWinSounds = ["jackpotWin1", "jackpotWin2", "jackpotWin3", "jackpotWin4"];
		
		settings.reelVideos = [
					{src:_engineType+"/games/"+_slotName+"/images/videos/10.png", 		fps: 12, width: 175, height: 131, scale: 1, length: 6, transparent: true},
					{src:_engineType+"/games/"+_slotName+"/images/videos/J.png", 		fps: 12, width: 175, height: 131, scale: 1, length: 6, transparent: true},
					{src:_engineType+"/games/"+_slotName+"/images/videos/Q.png", 		fps: 12, width: 175, height: 131, scale: 1, length: 6, transparent: true},
					{src:_engineType+"/games/"+_slotName+"/images/videos/K.png", 		fps: 12, width: 175, height: 131, scale: 1, length: 6, transparent: true},
					{src:_engineType+"/games/"+_slotName+"/images/videos/A.png", 		fps: 12, width: 175, height: 131, scale: 1, length: 6, transparent: true},
					{src:_engineType+"/games/"+_slotName+"/images/videos/cocktail.jpg", fps: 12, width: 175, height: 131, scale: 1, length: 6},
					{src:_engineType+"/games/"+_slotName+"/images/videos/hibiscus.jpg", fps: 12, width: 175, height: 131, scale: 1, length: 6},
					{src:_engineType+"/games/"+_slotName+"/images/videos/paradise.jpg", fps: 12, width: 175, height: 131, scale: 1, length: 6},
					{src:_engineType+"/games/"+_slotName+"/images/videos/woman.jpg", 	fps: 12, width: 175, height: 131, scale: 1, length: 42},
					{src:_engineType+"/games/"+_slotName+"/images/videos/man.jpg", 		fps: 12, width: 175, height: 131, scale: 1, length: 33},
					{src:_engineType+"/games/"+_slotName+"/images/videos/wild.jpg", 	fps: 12, width: 175, height: 131, scale: 1, length: 10},
					{src:_engineType+"/games/"+_slotName+"/images/videos/scatter.jpg", 	fps: 12, width: 175, height: 131, scale: 1, length: 28},
					{src:_engineType+"/games/"+_slotName+"/images/videos/wildx3.jpg", 	fps: 12, width: 175, height: 131, scale: 1, length: 20},
					{src:_engineType+"/games/"+_slotName+"/images/videos/wildx5.jpg", 	fps: 12, width: 175, height: 131, scale: 1, length: 20}
					];
		settings.expandVideo = null;
		
		settings.paytableURLs = {en: _engineType+"/games/"+_slotName+"/paytable/paytable_en.html",
								 bg: _engineType+"/games/"+_slotName+"/paytable/paytable_bg.html",
								 ru: _engineType+"/games/"+_slotName+"/paytable/paytable_ru.html",
								 ro: _engineType+"/games/"+_slotName+"/paytable/paytable_ro.html",
								 es: _engineType+"/games/"+_slotName+"/paytable/paytable_es.html",
								 mk: _engineType+"/games/"+_slotName+"/paytable/paytable_mk.html",
								 nl: _engineType+"/games/"+_slotName+"/paytable/paytable_nl.html",
								 fr: _engineType+"/games/"+_slotName+"/paytable/paytable_fr.html",
								 pt: _engineType+"/games/"+_slotName+"/paytable/paytable_pt.html"
								};
		settings.helpLanguages = ["en", "bg", "es", "ro", "pt"];
	};
}