function Config()
{
    this.reelWidth = 172 ;
    this.reelHeight = 516;
    this.reelSpacing = 17;

    this.numImages = 11;
    this.numReels = 5;
    this.numReelCards = 3;
    this.wildIndex = 9;
    this.linesCount = [1, 5, 10, 20, 30];

    this.hasFreespins = true;

    this.coinAnimationCoef = 15;

    this.linesSelectActiveColor = 0xfffe00;
    this.linesSelectInactiveColor = 0xffffff;
    this.linesSelectActiveGlowColor = 0xbd0000;
    this.linesSelectInactiveGlowColor = 0x241d24;
    this.gameNumberTimeHelpColor = 0xc38602;
    this.labelsColor = 0xc38602;
    this.toolTipMainTextColor = 0xFFFFFF;
    this.toolTipUsernameTextColor = 0xc38602;
    this.toolTipWinAmountTextColor = 0xFFFFFF;
    this.toolTipCurrencyTextColor = 0xc38602;
    this.toolTipDateTextColor = 0xbfbfbf;
    this.toolTipNumberOfWinnersTextColor = 0xc38602;

    this.toolTipDateSeparator = "/";

    this.paytableExitColor = 0x040017;

    this.paytablePageCount = 5;
    this.paytableGamblePage = 2;

    this.scatterConfig  = [
        {index: 10, minCount: 2, freespinMinCount: 7,
            validReels: [ false, true, true, true, false ], freespinVideoIndex: 10, freespinSound: "winScatterFs",
            stopSounds:[null , "stopScatterSound2", "stopScatterSound3", "stopScatterSound4", null]}
    ];

    this.reelVideos = [
        {src:["images/videos/00-0.json", "images/videos/00-1.json"], fps: 18},
        {src:["images/videos/01-0.json", "images/videos/01-1.json"], fps: 18},
        {src:["images/videos/02-0.json", "images/videos/02-1.json"], fps: 18},
        {src:["images/videos/03-0.json", "images/videos/03-1.json"], fps: 18},
        {src:["images/videos/04-0.json", "images/videos/04-1.json"], fps: 18},
        {src:["images/videos/05-0.json", "images/videos/05-1.json"], fps: 18},
        {src:["images/videos/06-0.json", "images/videos/06-1.json", "images/videos/06-2.json"], fps: 18, loopIndex: 15},
        {src:["images/videos/07-0.json", "images/videos/07-1.json", "images/videos/07-2.json"], fps: 18, loopIndex: 18},
        {src:["images/videos/08-0.json", "images/videos/08-1.json", "images/videos/08-2.json"], fps: 18, loopIndex: 14},
        {src:["images/videos/09-0.json", "images/videos/09-1.json", "images/videos/09-2.json", "images/videos/09-3.json"], fps: 18, loopIndex: 1},
        {src:["images/videos/10-0.json", "images/videos/10-1.json", "images/videos/10-2.json", "images/videos/10-3.json"], fps: 18, loopIndex: 1}];

    this.reelImages = ["reelImages.json"];

    this.linesCoords = [
        {coords:[184,320, 1095,320], color:0xfff221},
        {coords:[184,150, 1095,150], color:0xf9af0c},
        {coords:[184,497, 1095,497], color:0x17e614},
        {coords:[184,157, 259,157, 640,507, 1018,157, 1095,157], color:0xdf3d3d},
        {coords:[184,506, 259,506, 640,140, 1018,506, 1095,506], color:0xc90404},
        {coords:[184,143, 444,143, 833,488, 1095,488], color:0x308a7},
        {coords:[184,488, 457,488, 838,143, 1095,143], color:0xd84b5},
        {coords:[184,336, 259,336, 442,505, 850,505, 1018,336, 1095,336], color:0xc86b07},
        {coords:[184,305, 259,305, 462,141, 824,141, 1011,305, 1095,305], color:0x3bb108},
        {coords:[184,134, 245,134, 449,327, 829,327, 1039,134, 1095,134], color:0x4a82f3},
        {coords:[184,479, 280,479, 451,311, 825,311, 997,479, 1095,479], color:0xce0089},
        {coords:[184,343, 276,343, 440,497, 831,141, 1060,343, 1095,343], color:0xce52a1},
        {coords:[184,297, 262,297, 452,143, 851,497, 1049,297, 1095,297], color:0xaf2dc5},
        {coords:[184,164, 284,164, 447,318, 640,134, 830,320, 1000,164, 1095,164], color:0x3a9e26},
        {coords:[184,514, 236,514, 442,312, 640,497, 838,315, 1043,514, 1095,514], color:0x227ab3},
        {coords:[184,329, 466,329, 640,490, 816,329, 1095,329], color:0x6e0cb3},
        {coords:[184,311, 447,311, 640,129, 826,311, 1095,311], color:0xce00ba},
        {coords:[184,172, 264,172, 439,499, 640,137, 850,497, 1012,172, 1095,172], color:0xcba303},
        {coords:[184,471, 268,471, 451,141, 640,498, 831,141, 1009,471, 1095,471], color:0xbc3500},
        {coords:[184,289, 265,289, 453,137, 640,489, 831,138, 1002,289, 1095,289], color:0xa2a2a2},
        {coords:[184,348, 268,348, 438,506, 640,146, 850,506, 1002,348, 1095,348], color:0xdc9314},
        {coords:[184,127, 452,127, 640,486, 833,127, 1094,127], color:0xc71c5},
        {coords:[184,519, 435,519, 640,150, 853,519, 1094,519], color:0x692ec1},
        {coords:[184,177, 260,177, 437,509, 851,509, 1016,177, 1094,177], color:0x30b337},
        {coords:[184,464, 263,464, 444,136, 838,136, 1013,464, 1094,464], color:0xf60d76},
        {coords:[184,130, 452,130, 641,312, 833,130, 1095,130], color:0x990b5d},
        {coords:[184,515, 452,515, 641,324, 833,515, 1095,515], color:0x4d2db7},
        {coords:[184,122, 242,122, 439,522, 642,324, 842,522, 1029,122, 1095,122], color:0xa39f9a},
        {coords:[184,522, 242,522, 444,129, 642,312, 842,129, 1029,522, 1095,522], color:0x7f35dc},
        {coords:[184,324, 256,324, 444,519, 642,324, 842,519, 1029,324, 1095,324], color:0x9adb3d}
    ];

    this.fullLineSounds = [
        {card:0, name:"fullLine1"}, {card:1, name:"fullLine1"},
        {card:2, name:"fullLine1"}, {card:3, name:"fullLine1"},
        {card:4, name:"fullLine2"}, {card:5, name:"fullLine2"},
        {card:6, name:"fullLine2"}, {card:7, name:"fullLine3"},
        {card:8, name:"fullLine3"}, {card:9, name:"fullLine4"},
        {card:10, name:"fullLine4"}
        ];

    this.gameSounds = [
        {
            src: "shortSounds.mp3", sounds:[
            {name: "reelAccelerateSound", start:12, duration: 2.05},
            {name: "stopScatterSound2", start:0, duration: 0.95},
            {name: "stopScatterSound3", start:2, duration: 0.95},
            {name: "stopScatterSound4", start:4, duration: 0.95},
            {name: "stopScatterSound2FS", start:6, duration: 0.95},
            {name: "stopScatterSound3FS", start:8, duration: 0.95},
            {name: "stopScatterSound4FS", start:10, duration: 0.95}]
        },
        {
            src: "winSounds.mp3", sounds:[
            {name: "win4", start:0, duration: 3.9},
            {name: "win5", start:5, duration: 3},
            {name: "win6", start:9, duration: 3.2},
            {name: "win7", start:19, duration: 4.3},
            {name: "win8", start:13, duration: 5.2},
            {name: "win9", start:24, duration: 6.3},
            {name: "winScatterFs", start:31, duration: 10.94},
            {name: "creditAnimationSound", start:43, duration: 10.0}]
        }];

    this.freespinSounds = [
        {
            src: "freespinSounds.mp3", id: "freespinSounds", sounds:[
            {name: "pressStartSound", start:0, duration: 8},
            {name: "introSound", start:9, duration: 6.66},
            {name: "outroSound", start:17, duration: 6.31},
            {name: "freeSpinsBackgroundSound", start:25, duration: 9.6}]
        }];

    this.helpLanguages = ["en", "bg"];
    this.paytableLanguages = ['en', 'bg', 'fr', 'nl'];
    this.freespinLanguages = ['en', 'bg', 'fr', 'nl'];
}
com.egt.baseslot.Config = Config;

com.egt.baseslot.buildTime = 1562835494834;