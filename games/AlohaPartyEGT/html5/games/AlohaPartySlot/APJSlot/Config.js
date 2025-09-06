// TODO: wrap this in a self executing function to avoid overriding
// some other global function Config
function Config()
{
    this.reelWidth = 172 ;
    this.reelHeight = 516;
    this.reelSpacing = 17;

    this.numImages = 12;
    this.numReels = 5;
    this.numReelCards = 4;
    this.wildIndex = 10;
    this.linesCount = [4 , 16 , 64 , 256, 1024];
    this.comboColors = [0xD5008D, 0x4783D2, 0x353E9A, 0xCC1B1C];
    this.waysCells = [
        [ 1,0 , 1,1, 1,3, 2,0, 2,1, 2,3, 3,0, 3,1, 3,3, 4,0, 4,1, 4,3 ],
        [ 2,0, 2,1, 2,3, 3,0, 3,1, 3,3, 4,0, 4,1, 4,3 ],
        [ 3,0, 3,1, 3,3, 4,0, 4,1, 4,3 ],
        [ 4,0, 4,1, 4,3 ],
        [ ]
    ];
    this.lineGame = false;
    this.fixedLinesCount = false;
    this.restoreReels = false;
    this.hasFreespins = true;

    this.coinAnimationCoef = 20;

    this.linesSelectActiveColor = 0xf9a600;
    this.linesSelectInactiveColor = 0xb4adad;
    this.linesSelectActiveGlowColor = 0x000000;
    this.linesSelectInactiveGlowColor = 0x282128;

    this.gameNumberTimeHelpColor = 0x965a12;
    this.labelsColor = 0xe89232;

    this.toolTipMainTextColor = 0xFFFFFF;
    this.toolTipUsernameTextColor = 0xfefefe;
    this.toolTipWinAmountTextColor = 0xFFFFFF;
    this.toolTipCurrencyTextColor = 0xfefefe;
    this.toolTipDateTextColor = 0xbfbfbf;
    this.toolTipNumberOfWinnersTextColor = 0xfefefe;
    this.toolTipDateSeparator = "/";

    this.paytableExitColor = 0x521e1e;
    this.paytablePageCount = 5;
    this.paytableGamblePage = 2;

    this.scatterConfig  = [
        {index: 11, minCount: 3, freespinMinCount: 3, validReels: [ true, true, true, true, true ],freespinVideoIndex: 11,freespinSound:"win11",
            stopSounds:["stopScatterSound", "stopScatterSound", "stopScatterSound", "stopScatterSound", "stopScatterSound"], isContinuousScatter:true}];
    
    this.wildConfig = [
        {index: 1, multiplier: 3, videoIndex: 2},//wildIndex + videoIndex = correct position in reeVideos
        {index: 3, multiplier: 5, videoIndex: 3}
    ];
    this.reelVideos = [
        {src:["images/videos/00-0.json"], fps: 12},
        {src:["images/videos/01-0.json"], fps: 12},
        {src:["images/videos/02-0.json"], fps: 12},
        {src:["images/videos/03-0.json"], fps: 12},
        {src:["images/videos/04-0.json"], fps: 12},
        {src:["images/videos/05-0.json"], fps: 12},
        {src:["images/videos/06-0.json"], fps: 12},
        {src:["images/videos/07-0.json"], fps: 12},
        {src:["images/videos/08-0.json", "images/videos/08-1.json", "images/videos/08-2.json"], fps: 20},
        {src:["images/videos/09-0.json", "images/videos/09-1.json"], fps: 20},
        {src:["images/videos/10-0.json"], fps: 12},
        {src:["images/videos/11-0.json", "images/videos/11-1.json"], fps: 12},
        {src:["images/videos/12-0.json", "images/videos/12-1.json"], fps: 12},//wild x3
        {src:["images/videos/13-0.json", "images/videos/13-1.json"], fps: 12}//wild x5
        ];

    this.expandVideo = null;

    this.reelImages = ["reelImages.json"];

    this.fullLineSounds = [
        {card:0, name:"fullLine1"},
        {card:1, name:"fullLine1"},
        {card:2, name:"fullLine1"},
        {card:3, name:"fullLine2"},
        {card:4, name:"fullLine2"},
        {card:5, name:"fullLine3"},
        {card:6, name:"fullLine3"},
        {card:7, name:"fullLine3"},
        {card:8, name:"fullLine4"},
        {card:9, name:"fullLine4"}];

    this.gameSounds = [
        {
            src: "shortSounds.mp3", sounds:[
                {name: "reelAccelerateSound", start:1, duration: 3.07},
                {name: "stopScatterSound", start:0, duration: 0.43}]
        },
        {
            src: "winSounds.mp3", sounds:[
            {name: "win5",			start:0, 	duration: 3.964},
            {name: "win6",			start:10, 	duration: 4.028},
            {name: "win7",			start:5, 	duration: 4.667},
            {name: "win8",			start:15, 	duration: 4.493},
            {name: "win9", 			start:20, 	duration: 4.167},
            {name: "win10",			start:25, 	duration: 5.387},
            {name: "win11",			start:31, 	duration: 7.579},
            {name: "creditAnimationSound", 		start:39, 	duration: 10.0}

                ]
        }];
    this.freespinSounds = [
        {
            src: "freespinSounds.mp3", id: "freespinSounds", sounds:[
            {name: "pressStartSound", start:0, duration: 8.031},
            {name: "freeSpinsBackgroundSound", start:15, duration: 8.411},
            {name: "outroSound", start:9, duration: 5.63}
        ]
        }];

    this.helpLanguages = ["en", "bg", "ro", "es", "pt"];
    this.paytableLanguages = ['en', 'bg', 'ru', 'mk', 'fr', 'nl', 'es','ro', 'pt'];
    this.freespinLanguages = ['en', 'bg', 'ru', 'mk', 'fr', 'nl', 'es','ro', 'pt'];
}

com.egt.baseslot.Config = Config;
com.egt.baseslot.buildTime = 1562834777679;