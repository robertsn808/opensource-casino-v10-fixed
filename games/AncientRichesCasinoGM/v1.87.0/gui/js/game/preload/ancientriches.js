
function getPreloadImages( conf, slotConf, winLines, lang, jackpotType ) {
	var images = getPreloadImagesCommon( { 
		conf : conf,
		slotConf: slotConf,
		folder: 'ancientriches',
		winLines: winLines,
		attentionSpin: true,
		jackpotType: jackpotType,
		lang: lang
	});	
	
	// ####
	if( conf.mode( 'l' ) == 0 ) { // layout 3:2
		var conImages = [
		    'gui/picts/rest/ancientriches/<resol>/bg_top-fg2.jpg'
 		];
		
		if(jackpotType == 'firepot') {
			//backgrounds
			conImages.push( 'gui/picts/rest/ancientrichesRHFP/<resol>/bg_top.jpg' );
		}
 		
 		conImages.push( 'gui/picts/rest/ancientriches/<resol>/bg_top-fg.jpg' );
		
		images = images.concat( conImages );
	}
	
	// ####
	if( conf.mode( 'c') == 0 ) { // web 
		var conImages = [
			// info sites
			'gui/picts/rest/ancientriches/<resol>/infoSites/web/button-close.png',
			'gui/picts/rest/ancientriches/<resol>/infoSites/web/checkbox-off.png',
			'gui/picts/rest/ancientriches/<resol>/infoSites/web/checkbox-on.png',
			'gui/picts/rest/ancientriches/<resol>/infoSites/web/background.png'
		];
		
		images = images.concat( conImages );
	}
	else { // mobile
		var conImages = [
	    ];
		
		images = images.concat( conImages );
		
		if( conf.mode( 'c' ) == 2 ) { // supporting portrait mode
			var portConImages = [
			    'gui/picts/rest/ancientriches/<resol>/portrait_bottom_l169.jpg',
				'gui/picts/rest/ancientriches/<resol>/portrait_bottom_l32.jpg'
			];
			
			if( jackpotType == 'firepot' ) {
				portConImages.push( 'gui/picts/rest/ancientrichesRHFP/<resol>/portrait_top.jpg' );
				portConImages.push( 'gui/picts/rest/ancientrichesRHFP/<resol>/portrait_top-fg.jpg' );
				portConImages.push( 'gui/picts/rest/ancientrichesRHFP/<resol>/portrait_top_small.jpg' );
				portConImages.push( 'gui/picts/rest/ancientrichesRHFP/<resol>/portrait_top_small-fg.jpg' );
			}
	 		else {
	 			portConImages.push( 'gui/picts/rest/ancientriches/<resol>/portrait_top.jpg' );
				portConImages.push( 'gui/picts/rest/ancientriches/<resol>/portrait_top-fg.jpg' );
				portConImages.push( 'gui/picts/rest/ancientriches/<resol>/portrait_top_small.jpg' );
				portConImages.push( 'gui/picts/rest/ancientriches/<resol>/portrait_top_small-fg.jpg' );
	 		}
			
			images = images.concat( portConImages );
		}	
	}
	
	var common = [
		//backgrounds
		'gui/picts/rest/ancientriches/<resol>/bg_middle.jpg',
		'gui/picts/rest/ancientriches/<resol>/bg_bottom.jpg',    	
		'gui/picts/rest/ancientriches/<resol>/bg_middle-fg.jpg',
		'gui/picts/rest/ancientriches/<resol>/bg_bottom-fg.jpg',   
		'gui/picts/rest/ancientriches/<resol>/fadeout.png',
		'gui/picts/rest/ancientriches/<resol>/fadeout-fg.png',
		
//		// infosites
		'gui/picts/rest/ancientriches/<resol>/infoSites/feature.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/lines.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-1.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-2.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-3.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-4.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-5.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-6.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-7.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-8.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-9.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-10.png',
		'gui/picts/rest/ancientriches/<resol>/infoSites/symbol-11.png',
		
		// symbols
		[ '/symbol-10.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-10.jpg' ],
		[ '/symbol-j.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-j.jpg' ],
		[ '/symbol-q.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-q.jpg' ],
		[ '/symbol-k.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-k.jpg' ],
		[ '/symbol-a.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-a.jpg' ],
		[ '/symbol-chest.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-chest.jpg' ],
		[ '/symbol-knife.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-knife.jpg' ],
		[ '/symbol-lady.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-lady.jpg' ],
		[ '/symbol-man.png', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-man.png' ],
		[ '/symbol-dragon.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-dragon.jpg' ],	
		[ '/symbol-scatter.png', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-scatter.png' ],
		[ '/symbol-fg-10.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-10.jpg' ],
		[ '/symbol-fg-j.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-j.jpg' ],
		[ '/symbol-fg-q.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-q.jpg' ],
		[ '/symbol-fg-k.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-k.jpg' ],
		[ '/symbol-fg-a.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-a.jpg' ],
		[ '/symbol-fg-chest.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-chest.jpg' ],
		[ '/symbol-fg-knife.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-knife.jpg' ],
		[ '/symbol-fg-lady.jpg', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-lady.jpg' ],
		[ '/scatter_small.png', 'gui/picts/rest/ancientriches/<resol>/symbols/scatter_small.png' ],
		[ '/scatter_smallt.png', 'gui/picts/rest/ancientriches/<resol>/symbols/scatter_smallt.png' ],
		[ '/scatter_smallb.png', 'gui/picts/rest/ancientriches/<resol>/symbols/scatter_smallb.png' ],
		[ '/scatter_smallm.png', 'gui/picts/rest/ancientriches/<resol>/symbols/scatter_smallm.png' ],
		[ '/man_small.png', 'gui/picts/rest/ancientriches/<resol>/symbols/man_small.png' ],
		[ '/man_smallt.png', 'gui/picts/rest/ancientriches/<resol>/symbols/man_smallt.png' ],
		[ '/man_smallb.png', 'gui/picts/rest/ancientriches/<resol>/symbols/man_smallb.png' ],
		[ '/man_smallm.png', 'gui/picts/rest/ancientriches/<resol>/symbols/man_smallm.png' ],
		[ 'scatterBlendTop', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-scatter_bot-dark.png' ],
		[ 'scatterBlendBottom', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-scatter_top-dark.png' ],
		[ 'scatterBlendTopBottom', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-scatter_bot-top-dark.png' ],
		[ 'topSymBlendTop', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-man_bot-dark.png' ],
		[ 'topSymBlendBottom', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-man_top-dark.png' ],
		[ 'topSymBlendTopBottom', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-man_bot-top-dark.png' ],
		
//		// freegame blending
		'gui/picts/rest/ancientriches/<resol>/bg_middle-fg2.jpg',
		
	];
	
	images = images.concat( common );
	
	if( winLines == 10 ) {
		var wImages = [
			// linemarkers
			'gui/picts/game/<resol>/linemarker/line-number-1.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-2.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-3.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-4.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-5.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-6.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-7.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-8.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-9.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-10.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-grey.jpg',
	    	'gui/picts/game/<resol>/linemarker/line-number-dimm.png'
		];
	} 
	else {
		var wImages = [
			// linemarkers
			'gui/picts/rest/ancientriches/<resol>/linemarker-active.png',
			'gui/picts/rest/ancientriches/<resol>/linemarker-active-fg.png',
			'gui/picts/rest/ancientriches/<resol>/linemarker-inactive.png',
			'gui/picts/rest/ancientriches/<resol>/linemarker-inactive-fg.png'
	    ];
	}
	images = images.concat( wImages );
	
	if( conf.playSymbolAnims() ) {
		var rImages = [
       		// symbol anims
       		[ 'symbolWin1BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin1BG_0.jpg' ],
       		[ 'symbolWin1FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin1FG_0.jpg' ],
       		[ 'symbolWin2BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin2BG_0.jpg' ],
       		[ 'symbolWin2FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin2FG_0.jpg' ],
       		[ 'symbolWin3BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin3BG_0.jpg' ],
       		[ 'symbolWin3FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin3FG_0.jpg' ],
       		[ 'symbolWin4BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin4BG_0.jpg' ],
       		[ 'symbolWin4FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin4FG_0.jpg' ],
       		[ 'symbolWin5BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin5BG_0.jpg' ],
       		[ 'symbolWin5FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin5FG_0.jpg' ],
       		[ 'symbolWin6BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin6BG_0.jpg' ],
       		[ 'symbolWin6FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin6FG_0.jpg' ],
       		[ 'symbolWin7BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin7BG_0.jpg' ],
       		[ 'symbolWin7FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin7FG_0.jpg' ],
       		[ 'symbolWin8BG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin8BG_0.jpg' ],
       		[ 'symbolWin8FG_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin8FG_0.jpg' ],
       		[ 'symbolWin9_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin9_0.jpg' ],
       		[ 'symbolWin9_1.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin9_1.jpg' ],
       		[ 'symbolWin9Mask_0.png', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin9Mask_0.png' ],
       		[ 'symbolWin9Mask_1.png', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin9Mask_1.png' ],
       		[ 'symbolWin10_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolWin10_0.jpg' ],
       		[ 'symbolTeaser11_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolTeaser11_0.jpg' ],
       		[ 'symbolTeaser11Mask.png', 'gui/picts/rest/ancientriches/<resol>/symanim/symbolTeaser11Mask.png' ],
       		[ 'scatter_0.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/scatter_0.jpg' ],
       		[ 'scatter_1.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/scatter_1.jpg' ],
       		[ 'scatterEnd.png', 'gui/picts/rest/ancientriches/<resol>/symanim/scatterEnd.png' ],
       		[ 'scatterMask.png', 'gui/picts/rest/ancientriches/<resol>/symanim/scatterMask.png' ],
		];
		if( conf.mode( 'r' ) == 0 ) {
			rImages.push( [ 'scatter_2.jpg', 'gui/picts/rest/ancientriches/<resol>/symanim/scatter_2.jpg' ] );
		}
		
		images = images.concat( rImages );
	}
	else{
		var oImages = [
           // optimal slot animations
		   	[ 'symbolWin1BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-10.jpg' ],
		   	[ 'symbolWin1BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/10_glow.png' ],
		   	[ 'symbolWin1FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-10.jpg' ],
		   	[ 'symbolWin1FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/10_glow.png' ],
		   	[ 'symbolWin2BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-j.jpg' ],
		   	[ 'symbolWin2BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/J_glow.png' ],
		   	[ 'symbolWin2FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-j.jpg' ],
		   	[ 'symbolWin2FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/J_glow.png' ],
		   	[ 'symbolWin3BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-q.jpg' ],
		   	[ 'symbolWin3BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Q_glow.png' ],
		   	[ 'symbolWin3FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-q.jpg' ],
		   	[ 'symbolWin3FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Q_glow.png' ],
		   	[ 'symbolWin4BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-k.jpg' ],
		   	[ 'symbolWin4BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/K_glow.png' ],
		   	[ 'symbolWin4FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-k.jpg' ],
		   	[ 'symbolWin4FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/K_glow.png' ],
		   	[ 'symbolWin5BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-a.jpg' ],
		   	[ 'symbolWin5BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/A_glow.png' ],
		   	[ 'symbolWin5FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-a.jpg' ],
		   	[ 'symbolWin5FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/A_glow.png' ],
		   	[ 'symbolWin6BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-chest.jpg' ],
		   	[ 'symbolWin6BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Truhe_glow.png' ],
		   	[ 'symbolWin6FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-chest.jpg' ],
		   	[ 'symbolWin6FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Truhe_glow.png' ],
		   	[ 'symbolWin7BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-knife.jpg' ],
		   	[ 'symbolWin7BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Dolch_glow.png' ],
		   	[ 'symbolWin7FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-knife.jpg' ],
		   	[ 'symbolWin7FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Dolch_glow.png' ],
		   	[ 'symbolWin8BG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-lady.jpg' ],
		   	[ 'symbolWin8BGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Taenzerin_glow.png' ],
		   	[ 'symbolWin8FG', 'gui/picts/rest/ancientriches/<resol>/symbols/symbol-fg-lady.jpg' ],
		   	[ 'symbolWin8FGGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/Taenzerin_glow.png' ],
		   	[ 'symbolWin9', 'gui/picts/rest/ancientriches/<resol>/optanim/TopSym.png' ],
		   	[ 'symbolWin9Glow', 'gui/picts/rest/ancientriches/<resol>/optanim/TopSym_glow.png' ],
		   	[ 'symbolWin10', 'gui/picts/rest/ancientriches/<resol>/optanim/Wild.png' ],
		   	[ 'symbolWin10Glow', 'gui/picts/rest/ancientriches/<resol>/optanim/Wild_glow.png' ],
		   	[ 'scatter', 'gui/picts/rest/ancientriches/<resol>/optanim/AR_Bonus.png' ],
		   	[ 'scatterGlow', 'gui/picts/rest/ancientriches/<resol>/optanim/AR_Bonus_glow.png' ],
		];
		images = images.concat( oImages );
	}	
	
	return images;
}