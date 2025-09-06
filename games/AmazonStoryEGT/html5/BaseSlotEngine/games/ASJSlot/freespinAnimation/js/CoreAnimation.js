View("CoreAnimation",
{
	ANIMATION_COMPLETE: "animationComplete"
},
(function()
{
	var p = 
	{
		init: function(cssClass,config)
		{
			this._super();
			var self = this;
			this._animation = cssClass;
			this._config = config;
			var settings = GameSettings.getInstance();
			var language = this._config.language;
			this._defaultSettings = FreeSpinTranslations.defaultSettings;
			this._textLinesArray = [];

			this._sound;

			this._blackRect = {x:0,y:0,width:1281,height:720,opacity:0};

			this._background = new CanvasView("", 0, 0);
			this._background.setSize(1281, 720);
			this._context = this._background.getContext2D();
			this.addChild(this._background);

			this._img = Loader.getLoader(settings.engineType+'/games/'+settings.gameType+'/freespinAnimation/images/sp_bgr.jpg').getData();

            this._blackRectDiv = new View("blackRect");
            window.addEventListener("resize", function(){onWindowResize.call(self)});
            this.addChild(this._blackRectDiv);
            onWindowResize.call(this);
            this._blackRectDiv._containerDiv.css("background-color", "black");
            this._blackRectDiv._containerDiv.css("opacity", "0");
            this._blackRectDiv._containerDiv.css("top", "-3px");

			WebFont.load({
			  custom: {
			    families: [ FreeSpinTranslations[language].defaultFontFace, this._defaultSettings.numberFontFace ]
			  },
			  	loading: function() {},
  				active: function() {
  					self.playSoundManagerAfterWebFont.call(self);
					createAndPositionLinesForScreen.call(self, self._config.translations, self._config.valueText);
					TweenMax.to(self._blackRect, 0.8 , {opacity:1, ease : Quad.easeInOut,
						onUpdate : function() {
                            $(".blackRect").css("opacity", (""+self._blackRect.opacity));
						},
						onComplete : function() {
		  					self._onFadeInComplete();
						}
					});
  				}
			});
		},
		
		playSoundManagerAfterWebFont: function(){

		},

		_onFadeInComplete: function(time)
		{
			var self = this;
            self._context.drawImage(self._img,0,0);
            self._drawText();
			TweenMax.to(this._blackRect, 0.8 , {opacity:0, ease: Quad.easeInOut,
				onUpdate : function() {
                    $(".blackRect").css("opacity", (""+self._blackRect.opacity));
				},
				onComplete : function() {
					self.dispatchEvent(new Event("refreshScreen"));
					setTimeout(function(){self._onFadeOut();}, time);
				}
			});
		},

		_onFadeOut: function() {
			var self = this;

			TweenMax.to(this._blackRect, 0.8 , {opacity:1, ease: Quad.easeInOut,
				onUpdate : function() {
                    $(".blackRect").css("opacity", (""+self._blackRect.opacity));
				},
				onComplete : function() {
					SoundManager.getInstance().stop(this._sound);
					self.dispatchEvent(new Event("refreshScreen"));
		  			self._onFadeOutComplete();
				}
			});
		},

		_onFadeOutComplete: function() {
			var self = this;
            self._context.clearRect(self._blackRect.x, self._blackRect.y, self._blackRect.width, self._blackRect.height);
			TweenMax.to(this._blackRect, 0.8 , {opacity:0, ease: Quad.easeInOut,
				onUpdate : function() {
                    $(".blackRect").css("opacity", (""+self._blackRect.opacity));
				},
				onComplete : function() {
					self.dispatchEvent(new Event(CoreAnimation.ANIMATION_COMPLETE));
				}
			});
		},

		_drawText: function() {
			for (var i = 0; i < this._textLinesArray.length; i++) {
				shadowText.call(this, this._textLinesArray[i].text, this._textLinesArray[i].align, this._textLinesArray[i].font, 
									this._textLinesArray[i].x, this._textLinesArray[i].y, 
									this._textLinesArray[i].fill, this._textLinesArray[i].stroke, this._textLinesArray[i].shadow);
			}
		}
	};

    function onWindowResize() {
        this._blackRectDiv.setSize(1280, window.innerHeight / Device.scale + 6 );
    }

	function createAndPositionLinesForScreen(translations, valueText) {
		var self = this;
		var translations = translations;

		// Set some default variables
		var offsetY = translations.settings.offsetY;
		var lineHeight = this._defaultSettings.lineHeight;
		var hGap = this._defaultSettings.hGap;
		var fillStyle;
		var strokeStyle;

  		// Special font weight and face for numbers
  		var numberFontWeight = this._defaultSettings.numberFontWeight;
  		var numberFontFace = this._defaultSettings.numberFontFace;

  		// The size of the value text in Outro animation
  		var valueFontSize = this._defaultSettings.valueFontSize;

  		// Setting default canvas properties
		self._context.textBaseline = this._defaultSettings.textBaseline;
		self._context.lineWidth = this._defaultSettings.lineWidth;
		self._context.lineCap = this._defaultSettings.lineCap;
		self._context.lineJoin = this._defaultSettings.lineJoin;
		setFont.call(this);

		// Get the text from translations and split it to lines
		var text = translations.text;
		var lines = text.split("\n");

		// Loop through each line of the text
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i].split("^");
			var jsonItem = JSON.parse(line[0]);
			var textItem = line[1];
			var measuredText = 0;
			var vGap = translations.settings.vGap;

			fontSize = translations.settings.baseFontSize;

			// Some line text could have different font size
			if (typeof(jsonItem.specialFontSize) !== 'undefined') {
				fontSize = jsonItem.specialFontSize;
			}
			// The gap between current line and next one
			if (typeof(jsonItem.vGap) !== 'undefined') {
				vGap = jsonItem.vGap;
			}

			// Enter here if text line has a number in it
			if (textItem.indexOf("*") != -1) {
				self._context.textAlign = "left";
				var numberFirst = false;
				var numberLast = false;
				
				var specialLine = textItem.split("*");

				// Loop through each part of the line with number to calculate the width of the text
				for (var j = 0; j < specialLine.length; j++) {
					if (specialLine[j].indexOf("~") != -1) {
						var numberText = specialLine[j].split("~");
						var jsonItemNumber = JSON.parse(numberText[0]);
						var number = numberText[1];

						if (this._config.message.freeSpins !== null && this._animation == "introAnimation")
							number = this._config.message.freeSpins;

						// Numer could have different font size
						if (typeof(jsonItemNumber.specialFontSize) != 'undefined') {
							fontSize = jsonItemNumber.specialFontSize;
						}
						// See if the sentence begins or ends with number
						if (typeof(jsonItemNumber.numberFirst) != 'undefined') 
							numberFirst = true;
						if (typeof(jsonItemNumber.numberLast) != 'undefined') 
							numberLast = true;

						setFont.call(this, fontSize, numberFontWeight, numberFontFace);
						measuredText += this._context.measureText(number).width;
						
					} else {
						var otherText = specialLine[j];
						fontSize = translations.settings.baseFontSize;

						setFont.call(this, fontSize);
						measuredText += this._context.measureText(otherText).width;
					}
				}

				// Calculate the starting point
				if (numberFirst && numberLast) {
					var coordX = (this._context.canvas.width - measuredText - (2*hGap))/2;
				} else if (numberFirst) {
					var coordX = (this._context.canvas.width - measuredText - (3*hGap))/2;
				} else if (numberLast) {
					var coordX = (this._context.canvas.width - measuredText - hGap)/2;
				} else {
					var coordX = (this._context.canvas.width - measuredText - (2*hGap))/2;
				}

				// Push the values to the array
				for (var k = 0; k < specialLine.length; k++) {


					if (specialLine[k].indexOf("~") != -1) {
						var numberText = specialLine[k].split("~");
						var jsonItemNumber = JSON.parse(numberText[0]);
						var number = numberText[1];

						if (this._config.message.freeSpins !== null && this._animation == "introAnimation")
							number = this._config.message.freeSpins;

						fillStyle = translations.settings.fillStyle;
						strokeStyle = translations.settings.strokeStyle;
						shadowStyle = this._defaultSettings.shadowStyle;

						// Numbers could have different font size, fill and stroke
						if (typeof(jsonItemNumber.specialFontSize) !== 'undefined') {
							fontSize = jsonItemNumber.specialFontSize;
						}
						if (typeof(jsonItemNumber.specialFill) !== 'undefined') {
							fillStyle = jsonItemNumber.specialFill;
						}
						if (typeof(jsonItemNumber.specialStroke) !== 'undefined') {
							strokeStyle = jsonItemNumber.specialStroke;
						}
						if (typeof(jsonItemNumber.specialShadow) !== 'undefined') {
							shadowStyle = jsonItemNumber.specialShadow;
						}

						setFont.call(this, fontSize, numberFontWeight, numberFontFace);
						this._textLinesArray.push({text: number, align: "left", font: setFont.call(this, fontSize, numberFontWeight, numberFontFace), 
											fill: fillStyle, stroke: strokeStyle, shadow: shadowStyle, 
											x: coordX, y: offsetY});

						coordX += (this._context.measureText(number).width + hGap);
					} else {
						var otherText = specialLine[k];
						fontSize = translations.settings.baseFontSize;

						fillStyle = translations.settings.fillStyle;
						strokeStyle = translations.settings.strokeStyle;
						shadowStyle = this._defaultSettings.shadowStyle;

						setFont.call(this, fontSize);
						this._textLinesArray.push({text: otherText, align: "left", font: setFont.call(this, fontSize), 
											fill: fillStyle, stroke: strokeStyle, shadow: shadowStyle, 
											x: coordX, y: offsetY});

						coordX += (this._context.measureText(otherText).width + hGap);
					}
				}

			} else {
				self._context.textAlign = "center";
				fillStyle = translations.settings.fillStyle;
				strokeStyle = translations.settings.strokeStyle;
				shadowStyle = this._defaultSettings.shadowStyle;

				this._textLinesArray.push({text: textItem, align: "center", font: setFont.call(this, fontSize), 
											fill: fillStyle, stroke: strokeStyle, shadow: shadowStyle, 
											x: self._context.canvas.clientWidth/2, y: offsetY});
			}
			
			// Calculate the y point for the line
			offsetY += (lineHeight + vGap);

		}

		// Enter only on Outro animation
		if (typeof(valueText) !== 'undefined') {
			var coordX = self._context.canvas.clientWidth/2;
			var value;
			var currency = "";

			if(this._config.currency)
			{
				value = Utils.formatNumber(valueText, 100, true, this._config.noCoins);
				currency = this._config.currencyType;
			}
			else
				value = Utils.formatNumber(valueText, this._config.denomination);
			
			numberFontFace = this._defaultSettings.numberFontFace;

			// Measure text to specify the starting point
			setFont.call(this, valueFontSize, numberFontWeight, numberFontFace);
			coordX -= (this._context.measureText(value).width/2 + hGap/2);

			if(this._config.currency)
			{
				setFont.call(this, valueFontSize/2, numberFontWeight);
				coordX -= this._context.measureText(currency).width/2;
			}

			// Push the properties to the array
			setFont.call(this, valueFontSize, numberFontWeight, numberFontFace);
			this._textLinesArray.push({text: value, align: "left", font: setFont.call(this, valueFontSize, numberFontWeight, numberFontFace), 
											fill: this._defaultSettings.valueFillStyle, stroke: this._defaultSettings.valueStrokeStyle,
											shadow: this._defaultSettings.valueShadowStyle, x: coordX, y: offsetY});
			if(this._config.currency)
			{
				coordX += this._context.measureText(value).width + hGap;

				setFont.call(this, valueFontSize/2, numberFontWeight);
				this._textLinesArray.push({text: this._config.currencyType, align: "left", font: setFont.call(this, valueFontSize/2, numberFontWeight, numberFontFace), 
												fill: this._defaultSettings.valueFillStyle, stroke: this._defaultSettings.valueStrokeStyle,
												shadow: this._defaultSettings.valueShadowStyle, x: coordX, y: offsetY});
			}
		}
	}

	function setFont(fontSize, fontWeight, fontFace) {
		var language = this._config.language;
		if (fontWeight == null) {
			fontWeight = this._defaultSettings.fontWeight;
		}
		if (fontSize == null) {
			fontSize = this._defaultSettings.fontSize;
		}
		if (fontFace == null) {
			fontFace = FreeSpinTranslations[language].defaultFontFace;
		}
	
		return this._context.font = fontWeight + " " + fontSize + "px " + fontFace;
	}

	function shadowText(text, align, font, x, y, fill, stroke, shadow) {
		this._context.textAlign = align;
		this._context.font = font;
		this._context.fillStyle = fill;
		this._context.shadowColor = shadow;
		this._context.shadowBlur = this._defaultSettings.shadowBlur;
		this._context.lineWidth = this._defaultSettings.lineWidth + this._defaultSettings.shadowLineWidth;
  		this._context.strokeStyle = shadow;
		this._context.strokeText(text, x, y);
		this._context.shadowBlur = 0;
		this._context.lineWidth = this._defaultSettings.lineWidth;
  		this._context.strokeStyle = stroke;
		this._context.strokeText(text, x, y);
		this._context.fillText(text, x, y);
	}

	return p;
})());