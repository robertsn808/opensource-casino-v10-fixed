var FreeSpinTranslations = // If some property is null it takes the parent value
{
	"defaultSettings" : {
		"cyrillicLanguages"	: ["bg", "ru", "fr","ro","mk"],
		"multiplier"		: "x15",

		"width"				: 1280,
		"height"			: 720,

		"fsBGWidth"			: 733,
		"fsBGHeight"		: 415,
		"fsBGOffsetY"		: -30,

		"lineCap"			: "round",
		"lineJoin"			: "round",
		"textAlign" 		: "center",
		"vGap" 				: 20, // the gap between each lines
		"offset"			: 0, // offset y position of the text, only applied on Intro
		"valueCurrencyGap"	: 20, // the gap between value and currency in outro animation
		"currencyScale"		: 0.5, // change the scale of currency  in outro animation
		"introTitleScale"	: 1, // change the scale of title in intro animation
		"outroTitleScale"	: 1.2, // change the scale of title in outro animation

		/* Text in intro, outro and retrigger animation */
		"defaultFontFace" 	: "Cooper",
		"cyrillicFontFace" 	: "Tahoma,Geneva,Kalimati,sans-serif",
		"fontStyle" 		: "normal",
		"fontWeight" 		: "bold",
		"fontSize" 			: 55,
		"fillStyle"			: "#ffcc00",
		"strokeStyle"		: "#71290a",
		"shadowStyle"		: null,
		"strokeWidth" 		: 6,
		"shadowWidth"		: 5, // if null : 1.5 * strokeWidth
		"shadowAlpha"		: null, // default 1
		"shadowPos"			: {x : 0, y: 0}, // position of the shadow, default 0,0
		"shadowBlur"		: 10, 

		/* Start Animation */
		"blink"				: true,
		"blinkingWords"		: [],
		"blinkingInterval"	: 0.6,
		"textPosition"		: 'bottom',
		"startOffset"		: -30,
		"startFontFace"		: "Tahoma,Geneva,Kalimati,sans-serif",
		"startFontSize"		: 26,
		"startFontStyle" 	: "normal",
		"startFontWeight"	: "900",
		"startFillStyle"	: "#ffffff",
		"startStrokeStyle"	: "#000000",
		"startShadowStyle"	: null,
		"startStrokeWidth" 	: 2,
		"startShadowWidth"	: 2,
		"startShadowBlur"	: 20,
		"startShadowPos"	: {x : 0, y: 0}, // translate by [x, y]

		/* Numbers in intro and retrigger animation */
		"numberFontFace" 	: "Cooper",
		"numberFontStyle" 	: null,
		"numberFontWeight" 	: "bold",
		"numberFontSize"	: 80, // if null : 1.5 * fontSize
		"numberFillStyle"	: "#2dc78b",
		"numberStrokeStyle"	: "#29295d",
		"numberShadowStyle"	: null,
		"numberStrokeWidth"	: 6,
		"numberShadowWidth"	: 20,
		"numberShadowAlpha"	: 1,
		"numberShadowPos"	: {x : 0, y: 0},
		"numberShadowBlur"	: 2,

		/* Value and currency in outro animation */
		"valueFontFace"		: "Cooper",
		"valueFontStyle"	: null,
		"valueFontWeight"	: null,
		"valueFontSize"		: 90, // if null : 1.5 * fontSize
		"valueFillStyle"	: "#2dc78b",
		"valueStrokeStyle"	: "29295d",
		"valueShadowStyle"	: null,
		"valueStrokeWidth"	: 6,
		"valueShadowWidth"	: 5,
		"valueShadowAlpha"	: 1,
		"valueShadowPos"	: {x: 0, y: 0},
		"valueShadowBlur"	: 0,
		
	} ,
	"en":
	{
		"IntroAnimation" : {
			"text" : '{freeSpins} FREE SPINS\nwith\nmultiplier up to {multiplier}'
		},
		"RetriggerAnimation" : {
			"text" : 'ADDITIONAL\n{freeSpins}\nFREE SPINS'
		},
		"OutroAnimation" : {
			"text" : 'TOTAL\nWIN\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Press START to run this feature'
		},
	},
	"bg":
	{
		"IntroAnimation" : {
			"fontSize" : 60,
			"text" : '{freeSpins} СВОБОДНИ ИГРИ\nс множител\nдо {multiplier}'
		},
		"RetriggerAnimation" : {
			"fontSize": 60,
			"text" : 'ДОПЪЛНИТЕЛНИ\n{freeSpins} СВОБОДНИ ИГРИ'
		},
		"OutroAnimation" : {
			"text" : 'ОБЩА\nПЕЧАЛБА\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Натиснете СТАРТ за свободни игри'
		},
	},
	"ru":
	{
		"IntroAnimation" : {
			"fontSize" : 55,
			"text" : '{freeSpins} СВОБОДНЫЕ ИГРЫ\nс множителем\nдо {multiplier}'
		},
		"RetriggerAnimation" : {
			"fontSize": 65,
			"text" : '{freeSpins}\nДОПОЛНИТЕЛЬНЫХ\nСВОБОДНЫХ ИГР'
		},
		"OutroAnimation" : {
			"text" : 'ОБЩИЙ\nВЫИГРЫШ\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Нажмите СТАРТ для запуска этой функции'
		},
	},
	"nl":
	{
		"IntroAnimation" : {
			"fontSize" : 45,
			"text" : '{freeSpins} FREE SPINS\nTEGEN {multiplier} MULTIPLIER'
		},
		"RetriggerAnimation" : {
			"text" : '{freeSpins} EXTRA\nFREE SPINS'
		},
		"OutroAnimation" : {
			"text" : 'TOTALE\nWINST\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Druk op START om deze functie te starten'
		},
	},
	"fr":
	{
		"IntroAnimation" : {
			"fontSize": 50,
			"text" : '{freeSpins} PARTIES GRATUITES\navec multiplicateur\njusqu\'à {multiplier}'
		},
		"RetriggerAnimation" : {
			"fontSize": 70,
			"text" : '{freeSpins} PARTIES\nGRATUITES\nSUPPLÉMENTAIRES'
		},
		"OutroAnimation" : {
			"text" : 'GAIN\nTOTAL\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Appuyez sur START pour démarrer la session'
		},
	},
	"ro":
	{
		"IntroAnimation" : {
			"text" : '{freeSpins} ROTIRI GRATUITE\ncu multiplicator \npână la  {multiplier}'
		},
		"RetriggerAnimation" : {
			"text" : '{freeSpins} ROTIRI GRATUITE\nADIȚIONALE  '
		},
		"OutroAnimation" : {
			"text" : 'TOTAL\nCÂŞTIG\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Apăsați pe START pentru a începe'
		},
	},
    "pt":
        {
            "IntroAnimation" : {
                "text" : '{freeSpins} RODADAS GRÁTIS\ncom multiplicador \naté  {multiplier}'
            },
            "RetriggerAnimation" : {
                "text" : '{freeSpins} RODADAS GRÁTIS\nADICIONAIS  '
            },
            "OutroAnimation" : {
                "text" : 'PRÉMIO\nTOTAL\n{total}'
            },
            "StartAnimation" : {
                "text" : 'Prima INICIAR para começar'
            },
        },
	"es":
	{
		"IntroAnimation" : {
			"text" : '{freeSpins} JUEGOS GRATIS\ncon multiplicador \nde hasta {multiplier}'
		},
		"RetriggerAnimation" : {
			"text" : '{freeSpins} JUEGOS GRATIS\nADICIONALES'
		},
		"OutroAnimation" : {
			"text" : 'GANANCIA\nTOTAL\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Presione INICIO para comenzar la atracción '
		},
	},
	"mk":
	{
		"IntroAnimation" : {
			"text" : '{freeSpins} БЕСПЛАТНИ\nЗАВРТУВАЊА\nсо мултипликатор до\n {multiplier}'
		},
		"RetriggerAnimation" : {
			"text" : 'ДОПОЛНИТЕЛНИ\n{freeSpins}\nБЕСПЛАТНИ\nЗАВРТУВАЊА'
		},
		"OutroAnimation" : {
			"text" : 'ВКУПНА\nДОБИВКА\n{total}'
		},
		"StartAnimation" : {
			"text" : 'Притиснете СТАРТ за да ја активирате оваа опција'
		},
	}
}