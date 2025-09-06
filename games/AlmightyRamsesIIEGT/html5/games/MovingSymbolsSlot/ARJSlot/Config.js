function Config() {
    var self = this;
    this.functions = {
        createMask: function () {
            const cardWidth = self.reelWidth;
            const cardHeight = self.reelHeight / self.numReelCards;
            const mask = new PIXI.Graphics();
            mask.beginFill(0xff0000);
            mask.drawRect (0, 0, cardWidth, cardHeight);
            mask.endFill();

            return mask;
        },

        maskTween: function (masks, colIndex, currentFrame, reelCoordX) {

            var positionX = reelCoordX + colIndex * (self.reelWidth + self.reelSpacing);
            var time =  ( (self.expandVideo.maskEndFrame - self.expandVideo.maskStartFrame) / self.expandVideo.fps );
            if (currentFrame != self.expandVideo.maskStartFrame) {
                time =   ( (self.expandVideo.maskEndFrame - currentFrame) / self.expandVideo.fps );
                var startPosX = reelCoordX + colIndex * (self.reelWidth + self.reelSpacing) - self.reelWidth + (self.reelWidth * currentFrame) / ( self.expandVideo.maskEndFrame - self.expandVideo.maskStartFrame)
                masks.forEach( (mask) => {
                        mask.x = startPosX;
                    }
                );
            }
            TweenMax.to(masks, time, {pixi: {x: positionX}, ease: Linear.easeNone});
        }
    };

    this.reelWidth = 172 ;
    this.reelHeight = 516;
    this.reelSpacing = 17;

    this.numImages = 12;
    this.numReels = 5;
    this.numReelCards = 3;
    this.wildIndex = 9;
    this.linesCount = [1, 5, 10, 15, 20];
    this.fixedLinesCount = true;
    this.hasFreespins = true;

    this.coinAnimationCoef = 20;

    this.linesSelectActiveColor = 0xdc3a03;
    this.linesSelectInactiveColor = 0xb4b2ae;
    this.linesSelectActiveGlowColor = 0x172981;
    this.linesSelectInactiveGlowColor = 0x000000;
    this.gameNumberTimeHelpColor = 0xffc126;
    this.labelsColor = 0xffc126;
    this.paytableExitColor = 0x2f0000;

    this.toolTipMainTextColor = 0xFFFFFF;
    this.toolTipUsernameTextColor = 0xffc126;
    this.toolTipWinAmountTextColor = 0xFFFFFF;
    this.toolTipCurrencyTextColor = 0xffc126;
    this.toolTipDateTextColor = 0xbfbfbf;
    this.toolTipNumberOfWinnersTextColor = 0xffc126;
    this.toolTipDateSeparator = "/";

    this.paytablePageCount = 5;
    this.paytableGamblePage = 2;

    this.scatterConfig  = [
        {index: 10, minCount: 3, freespinMinCount: 3,
            validReels: [ false, true, true, true, false ], freespinVideoIndex: 10, freespinSound: "win10",
            stopSounds:[null, "stopScatterSound2", "stopScatterSound3", "stopScatterSound4", null]}
    ];

    this.reelVideos = [
        {src:["images/videos/00-0.json"], fps: 20},
        {src:["images/videos/01-0.json"], fps: 20},
        {src:["images/videos/02-0.json"], fps: 20},
        {src:["images/videos/03-0.json"], fps: 20},
        {src:["images/videos/04-0.json", "images/videos/04-1.json"], fps: 20},
        {src:["images/videos/05-0.json", "images/videos/05-1.json"], fps: 20},
        {src:["images/videos/06-0.json", "images/videos/06-1.json"], fps: 20},
        {src:["images/videos/07-0.json", "images/videos/07-1.json", "images/videos/07-2.json", "images/videos/07-3.json"], fps: 20},
        {src:["images/videos/08-0.json", "images/videos/08-1.json", "images/videos/08-2.json", "images/videos/08-3.json"], fps: 20},
        {src:["images/videos/09-0.json", "images/videos/09-1.json", "images/videos/09-2.json", "images/videos/09-3.json"], fps: 20},
        {src:["images/videos/10-0.json", "images/videos/10-1.json", "images/videos/10-2.json", "images/videos/10-3.json"], fps: 20}
    ];

    this.expandVideo = {src:["images/videos/expand.json"], fps: 20, scale: 1, maskStartFrame: 2, maskEndFrame: 16, startNextColFrame: 20, shouldClearCells: false};

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
        {coords:[184,289, 265,289, 453,137, 640,489, 831,138, 1002,289, 1095,289], color:0xa2a2a2}
    ];

    this.fullLineSounds = [
        {card:0, name:"fullLine1"},
        {card:1, name:"fullLine1"},
        {card:2, name:"fullLine1"},
        {card:3, name:"fullLine1"},
        {card:4, name:"fullLine2"},
        {card:5, name:"fullLine2"},
        {card:6, name:"fullLine3"},
        {card:7, name:"fullLine3"},
        {card:8, name:"fullLine3"},
        {card:9, name:"fullLine4"}
    ];

    this.gameSounds = [
        {
            src: "shortSounds.mp3", sounds:[
                {name: "stopScatterSound2", start:0, duration: 1.361},
                {name: "stopScatterSound3", start:2, duration: 1.297},
                {name: "stopScatterSound4", start:4, duration: 0.831},
                {name: "reelAccelerateSound", start:5, duration: 2.074}
            ]
        },
        {
            src: "winSounds.mp3", sounds:[
                {name: "win4", start:0, duration: 3.097},
                {name: "win5", start:4, duration: 3.541},
                {name: "win6", start:8, duration: 3.603},
                {name: "win7", start:12, duration: 4.8},
                {name: "win8", start:17, duration: 4.841},
                {name: "win9", start:22, duration: 5.334},
                {name: "win10", start:28, duration: 5.755},
                {name: "creditAnimationSound", start:40, duration: 10.0},
                {name: "expandSound", start:34, duration: 5.133}
            ]
        }
    ];

    this.freespinSounds = [
        {
            src: "freespinSounds.mp3", id: "freespinSounds", sounds:[
                {name: "pressStartSound", start:0, duration: 8.031},
                {name: "introSound", start:9, duration: 6.742},
                {name: "retriggerSound", start:16, duration: 7.074},
                {name: "outroSound", start:24, duration: 6.824}
            ]
        }
    ];

    this.helpLanguages = ["en", "bg", "ro", "es", "pt", "it"];
    this.paytableLanguages = ['en', 'bg', 'ru', 'mk', 'fr', 'nl', 'es', 'ro'];
    this.freespinLanguages = ['en', 'bg', 'ru', 'mk', 'fr', 'nl', 'es', 'ro'];
}

com.egt.baseslot.Config = Config;
com.egt.baseslot.buildTime = 1561039201322;