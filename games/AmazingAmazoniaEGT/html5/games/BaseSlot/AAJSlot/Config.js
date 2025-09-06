function Config()
{
    this.reelWidth = 172 ;
    this.reelHeight = 516;
    this.reelSpacing = 17;

    this.numImages = 13;
    this.numReels = 5;
    this.numReelCards = 3;
    this.wildIndex = 11;
    this.linesCount = [1, 3, 5, 7, 10];
    this.hasFreespins = true;

    this.coinAnimationCoef = 15;

    this.linesSelectActiveColor = 0xdc0000;
    this.linesSelectInactiveColor = 0xffffff;
    this.linesSelectActiveGlowColor = 0xfff000;
    this.linesSelectInactiveGlowColor = 0x0f0601;

    this.gameNumberTimeHelpColor = 0x9a4e08;
    this.labelsColor = 0xffb000;

    this.paytableExitColor = 0x240e00;

    this.toolTipMainTextColor = 0xFFFFFF;
    this.toolTipWinAmountTextColor = 0xFFFFFF;

    this.toolTipDateTextColor = 0xbfbfbf;

    this.toolTipUsernameTextColor = 0xffb000;
    this.toolTipCurrencyTextColor = 0xffb000;
    this.toolTipNumberOfWinnersTextColor = 0xffb000;

    this.toolTipDateSeparator = "/";

    this.paytablePageCount = 5;
    this.paytableGamblePage = 2;

    this.scatterConfig  = [
        {index: 12, minCount: 2, freespinMinCount: 3,
            validReels: [ true, true, true, true, true ], freespinVideoIndex: 13, freespinSound: "winScatterFs",
            stopSounds:["stopScatterSound1", "stopScatterSound2", "stopScatterSound3", "stopScatterSound4", "stopScatterSound5"]}
    ];

    this.reelVideos = [
        {src:["images/videos/00-0.json", "images/videos/00-1.json"], fps: 18},
        {src:["images/videos/01-0.json", "images/videos/01-1.json"], fps: 18},
        {src:["images/videos/02-0.json", "images/videos/02-1.json"], fps: 18},
        {src:["images/videos/03-0.json", "images/videos/03-1.json"], fps: 18},
        {src:["images/videos/04-0.json", "images/videos/04-1.json"], fps: 18},
        {src:["images/videos/05-0.json", "images/videos/05-1.json"], fps: 18},
        {src:["images/videos/06-0.json", "images/videos/06-1.json"], fps: 18},
        {src:["images/videos/07-0.json", "images/videos/07-1.json"], fps: 18},
        {src:["images/videos/08-0.json", "images/videos/08-1.json"], fps: 18},
        {src:["images/videos/09-0.json", "images/videos/09-1.json"], fps: 18},
        {src:["images/videos/10-0.json", "images/videos/10-1.json"], fps: 18},
        {src:["images/videos/11-0.json", "images/videos/11-1.json"], fps: 10},
        {src:["images/videos/12-0.json", "images/videos/12-1.json"], fps: 10},
        {src:["images/videos/13-0.json", "images/videos/13-1.json", "images/videos/13-2.json"], fps: 10, loopIndex: 31}
    ];

    this.reelImages = ["reelImages.json"];

    this.linesCoords = [
        {coords:[184,320, 1095,320], color:0xfff221},
        {coords:[184,150, 1095,150], color:0xf9af0c},
        {coords:[184,497, 1095,497], color:0x17e614},
        {coords:[184,157, 259,157, 640,507, 1018,157, 1095,157], color:0xdf3d3d},
        {coords:[184,506, 259,506, 640,140, 1018,506, 1095,506], color:0xc90404},
        {coords:[184,143, 444,143, 833,488, 1095,488], color:0x60bad},
        {coords:[184,488, 457,488, 838,143, 1095,143], color:0x1189ba},
        {coords:[184,336, 259,336, 442,505, 850,505, 1018,336, 1095,336], color:0xc86b07},
        {coords:[184,305, 259,305, 462,141, 824,141, 1011,305, 1095,305], color:0x3bb108},
        {coords:[184,134, 245,134, 449,327, 829,327, 1039,134, 1095,134], color:0x4a82f3}
    ];

    this.fullLineSounds = [
        {card:0, name:"fullLine1"}, {card:1, name:"fullLine1"},
        {card:2, name:"fullLine1"}, {card:3, name:"fullLine1"},
        {card:4, name:"fullLine2"}, {card:5, name:"fullLine2"},
        {card:6, name:"fullLine3"}, {card:7, name:"fullLine3"},
        {card:8, name:"fullLine3"}, {card:9, name:"fullLine4"},
        {card:10, name:"fullLine4"}, {card:11, name:"fullLine4"}
    ];

    this.gameSounds = [
        {
            src: "shortSounds.mp3", sounds:[
                {name: "reelAccelerateSound", 		    start:10, 	duration: 2.05},
                {name: "stopScatterSound1", 			start:0, 	duration: 1.55},
                {name: "stopScatterSound2", 			start:2, 	duration: 1.05},
                {name: "stopScatterSound3", 			start:4, 	duration: 1.05},
                {name: "stopScatterSound4", 			start:6, 	duration: 1.15},
                {name: "stopScatterSound5", 			start:8, 	duration: 1.4}]
        },
        {
            src: "winSounds.mp3", sounds:[
                {name: "win4", 					    start:3, 	duration: 4.4},
                {name: "win5", 						start:0, 	duration: 2.4},
                {name: "win6", 				        start:14, 	duration: 2.85},
                {name: "win7", 					    start:8, 	duration: 5},
                {name: "win8", 						start:18, 	duration: 4.6},
                {name: "win9", 						start:23, 	duration: 3.6},
                {name: "win10", 					start:27, 	duration: 4.45},
                {name: "win11", 					start:32, 	duration: 4.75},
                {name: "win12", 					start:38, 	duration: 3.6},
                {name: "winScatterFs", 				start:42, 	duration: 8.8},
                {name: "creditAnimationSound", 		start:51, 	duration: 10.0}]
        }];

    this.freespinSounds = [
        {
            src: "freespinSounds.mp3",
            id: "freespinSounds",
            sounds:[
                    {name: "pressStartSound", 				start:0, 	duration: 8},
                    {name: "introSound", 					start:9, 	duration: 7.4},
                    {name: "outroSound", 					start:17, 	duration: 7.4},
                    {name: "freeSpinsBackgroundSound",      start:25 ,  duration: 18.15}
            ]
        }];

    this.helpLanguages = ["en", "bg", "ro", "es", "pt"];
    this.paytableLanguages = ['en', 'bg', 'ru', 'mk', 'fr', 'nl', 'es','ro', 'pt'];
    this.freespinLanguages = ['en', 'bg', 'ru', 'mk', 'fr', 'nl', 'es','ro', 'pt'];
 }

com.egt.baseslot.Config = Config;
com.egt.baseslot.buildTime = 1562835494834;