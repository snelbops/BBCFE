(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Game_atlas_1", frames: [[1602,0,433,399],[0,0,1600,1200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.MarioBackground = function() {
	this.initialize(ss["Game_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.play_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtEBQgZgQgKgUQgKgWAAgkIAAjbIghAAQgmAAglAEIAAh4QAlAEAoAAIAfAAIAAgPQAAgzgHgvICvAAQgHAuAAA0IAAAPIAfAAQA1AAAfgDIAAB3QgngEgoAAIgkAAIAAC3QAAAPADAJQAEAIAIAFQAPAIAZAAQAdAAAfgNIANBtQg4AOg/AAQhVAAgogZg");
	this.shape.setTransform(98.4859,23.9883,0.2523,0.2523);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjWDgQAIgzgBg6IAAjdQABhBgIgrICsAAIAAA5QAfgjAogPQApgQA8AAQAjAAAxAJIgpCBQg2gNghAAQhBAAglAmQgNANgFAOQgGAOgCAWIAABxQAABAAHAsg");
	this.shape_1.setTransform(87.7427,25.1617,0.2523,0.2523);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjZC/QgvglAAg9QAAhFA+gjQBBgmBzgJQAogDBQgCIAAgRQAAgZgTgNQgUgMgrABQgogBgXAMQgXANgKAZIilgWQANgfARgUQAQgTAbgRQBFgpB8ABQAvgBAsAIQArAGAZAMQApATATAeQATAfAAAxIAADBQAAA2AGAxIinAAIAAgiQgkAXgnALQgmAKg1gBQhiAAgzgngAgyAqQgXAIgNAMQgOANAAAPQAAATATAMQASAKAiAAQAaAAAagIQAbgGARgNQAfgWAAghIAAgUQhiABgyAMg");
	this.shape_2.setTransform(73.3281,25.2437,0.2523,0.2523);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgtEBQgZgQgLgUQgKgWABgkIAAjbIghAAQgmAAglAEIAAh4QAmAEAmAAIAgAAIAAgPQgBg3gGgrICvAAQgIAzABAvIAAAPIAeAAQA2AAAfgDIAAB3QgmgEgpAAIgkAAIAAC3QAAAcAPAJQAPAIAZAAQAdAAAfgNIANBtQg4AOg/AAQhVAAgogZg");
	this.shape_3.setTransform(60.6924,23.9883,0.2523,0.2523);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhgEwQg0gJgjgRQhCgfgag9QgLgUgIgvICzgOQACATAFAMQAFALAKALQAQAQAaAJQAaAJAgAAQAxAAAdgSQAcgRAAgeQAAgRgKgNQgJgOgSgGQgWgJhpgVQg8gLgcgIQgcgIgYgPQgogWgWgkQgVgjAAgsQAAhTBKgwQBLgxB/AAQBSAAA9AVQA+AUAiApQAQARAKATQAIATAJAfIi2ARQgIgkgZgPQgZgQgwAAQgnAAgaAQQgaARAAAYQAAAeAoAQQANAFAOADIBbAQQBdARAvAYQBcAvAABjQABBTg9AxQhLA9iYAAQg2AAgygJg");
	this.shape_4.setTransform(47.1673,23.244,0.2523,0.2523);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC1C24").s().p("A9sQGQjRAAi/hRQi5hOiPiPQiOiPhOi4QhRjAAAjRIAAAAQAAjRBRi/QBOi5COiOQCPiPC5hOQC/hRDRAAMA7YAAAQDRAADABRQC4BOCPCPQCPCOBOC5QBRC/AADRIAAAAQAADRhRDAQhOC4iPCPQiPCPi4BOQjABRjRAAgEgj4gOrQi3BOiNCNQiNCNhNC3QhRC9AADPQAADPBRC+QBNC2CNCOQCNCNC3BNQC+BRDOAAMA7YAAAQDPAAC9hRQC4hNCNiNQCNiOBOi2QBQi+AAjPQAAjOhQi9QhOi4iNiNQiNiNi4hOQi9hQjPAAMg7YAAAQjOAAi+BQg");
	this.shape_5.setTransform(73.8935,25.9683,0.2523,0.2523);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE1D25").s().p("A9sQGQjRAAi/hRQi5hOiPiPQiOiOhOi5QhRi/AAjSIAAAAQAAjRBRi/QBOi5COiOQCPiPC5hOQC/hRDRAAMA7YAAAQDRAADABRQC4BOCPCPQCPCOBOC5QBRC/AADRIAAAAQAADShRC/QhOC5iPCOQiPCPi4BOQjABRjRAAg");
	this.shape_6.setTransform(73.8935,25.962,0.2523,0.2523);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.9,52);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egh0AfLMAAAg+VMBDpAAAMAAAA+Vg");
	mask.setTransform(216.5,199.5);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5CBQgZg1AAhMQAAhKAZg2QAYg1AhAAQAiAAAZA1QAYA2AABKQAABMgYA1QgZA2gigBQghABgYg2g");
	this.shape.setTransform(237.5,155.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6CBQgXg2AAhLQAAhLAXg1QAZg2AhABQAigBAYA2QAYA1AABLQAABLgYA2QgYA1giAAQghAAgZg1g");
	this.shape_1.setTransform(181.75,156.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5).p("ABkAAQAACtgdB8QgdB7gqAAQgpAAgdh7Qgdh7AAiuQAAitAdh7QAdh7ApAAQAqAAAdB7QAdB7AACtg");
	this.shape_2.setTransform(237.5,177.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGEpQgdh7AAiuQAAitAdh7QAdh7ApAAQApAAAdB7QAeB7AACtQAACugeB7QgdB7gpAAQgpAAgdh7g");
	this.shape_3.setTransform(237.5,177.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5).p("ABkAAQAACtgdB8QgdB7gqAAQgpAAgdh7Qgdh7AAiuQAAitAdh7QAdh7ApAAQAqAAAdB7QAdB7AACtg");
	this.shape_4.setTransform(182.5,177.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhGEpQgdh7AAiuQAAitAdh7QAeh7AoAAQAqAAAcB7QAeB7AACtQAACugeB7QgcB7gqAAQgoAAgeh7g");
	this.shape_5.setTransform(182.5,177.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(170,133,80,89), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egh0AfLMAAAg+VMBDpAAAMAAAA+Vg");
	mask.setTransform(216.5,199.5);

	// Layer_3
	this.instance = new lib.Image();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,433,399), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgZJAoIMAAAhQPMAyTAAAMAAABQPg");
	mask.setTransform(161.05,256.75);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E6E6E6").ss(0.7).p("AhIhdICRC7");
	this.shape.setTransform(304.45,322.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6E6E6").ss(0.7).p("Al8AuIAGgGQALgLANgFIgXgdQgpg1AEhIQAEhIAvgwIDJjOQAvgwA+AEQA9ADAqA2IB0CVQAIALAHAMQAGAEAFAHIDIECQARAVgBAfQgCAfgUAVQgUAUgbgBQgagCgRgUIA7BMQASAXgCAfQgCAfgUAUQgUAVgbgCQgbgBgSgXIi6jxIgHAGQAKAGAJALIDHEBQASAXgCAfQgCAfgUAUQgUAVgbgCQgbgBgSgXIjGkCQgIgJgEgNIgGAGIC3DuQARAWgBAfQgCAfgUAVQgUAUgbgBQgbgCgSgXIjGkBQgHgKgEgJIgLgBIBQBmQARAXgBAfQgCAfgUAUIgDADIgDAEQgUAUgbgBQgbgCgSgXIjHkBQgSgXACgfQACgfAUgUg");
	this.shape_1.setTransform(280.5422,319.9897);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2F2F2").s().p("ABmH2QgbgCgSgXIjGkBQgHgKgEgJIgLgBIBQBmQARAXgBAfQgCAfgUAUIgDADIgDAEQgUAUgbgBQgbgCgSgXIjHkBQgSgXACgfQACgfAUgUIAGgGQALgLANgFIgXgdQgpg1AEhIQAEhIAvgwIDJjOQAvgwA+AEQA9ADAqA2IB0CVQAIALAHAMQAGAEAFAHIDIECQARAVgBAfQgCAfgUAVQgUAUgbgBQgagCgRgUIA7BMQASAXgCAfQgCAfgUAUQgUAVgbgCQgbgBgSgXIi6jxIgHAGQAKAGAJALIDHEBQASAXgCAfQgCAfgUAUQgUAVgbgCQgbgBgSgXIjGkCQgIgJgEgNIgGAGIC3DuQARAWgBAfQgCAfgUAVQgTATgZAAIgDAAg");
	this.shape_2.setTransform(280.5422,319.9897);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E6E6E6").ss(0.7).p("ABJhdIiRC7");
	this.shape_3.setTransform(17.6,320.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E6E6E6").ss(0.7).p("AF9AuIgDgDQgBgCgCgCQgKgKgOgFIAXgeQApg1gEhIQgEhHgvgwIjJjOQgvgwg+ADQg9AEgqA1Ih0CWQgHAJgIAOQgGAEgFAHIjIEBQgRAWABAfQACAfAUAVQAVAUAagBQAagCARgUIg7BMQgSAXACAfQACAfAUAUQAUAVAbgCQAbgBASgXIC6jxIAHAGQgKAGgJAKIjHECQgSAXACAeQACAfAUAVQAUAUAbgBQAbgCASgXIDGkBQAIgKAEgNIAGAHIi3DtQgSAXACAfQACAfAUAVQAUAUAbgBQAbgCASgXIDGkBQAHgKAEgKIALgBIhQBnQgRAXABAfQACAfAUAUIADADIADAEQAVAUAagBQAbgCASgXIDHkBQASgXgCgfQgCgfgUgUg");
	this.shape_4.setTransform(41.5117,318.9182);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2F2F2").s().p("AiUHjQgUgVgCgfQgCgfASgXIC3jtIgGgHQgEANgIAKIjGEBQgSAXgbACQgbABgUgUQgUgVgCgfQgCgeASgXIDHkCQAJgKAKgGIgHgGIi6DxQgSAXgbABQgbACgUgVQgUgUgCgfQgCgfASgXIA7hMQgRAUgaACQgaABgVgUQgUgVgCgfQgBgfARgWIDIkBQAFgHAGgEQAIgOAHgJIB0iWQAqg1A9gEQA+gDAvAwIDJDOQAvAwAEBHQAEBIgpA1IgXAeQAOAFAKAKIADAEIADADQAUAUACAfQACAfgSAXIjHEBQgSAXgbACQgaABgVgUIgDgEIgDgDQgUgUgCgfQgBgfARgXIBQhnIgLABQgEAKgHAKIjGEBQgSAXgbACIgDAAQgZAAgTgTg");
	this.shape_5.setTransform(41.5117,318.9182);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#381390").ss(0.7).p("AN+O0Ijst+QAYgwAAgxIAAgPIAAAAIAAqjQAAiZhehtQhehsiGAAIqkAAQiGAAheBsQhfBtAACZIAAJ/QgFAXgBAYIj4PwIG1COIDJswQCCAgCPAAQB5AABsgWIDUMjg");
	this.shape_6.setTransform(158.1776,361.7959);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#381390").s().p("At9PCID4vxQABgYAFgWIAAp/QAAiaBfhsQBehtCGAAIKkAAQCGAABeBtQBeBsAACaIAAKjIAAAAIAAAPQAAAwgYAwIDsN/ImzCXIjUsiQhsAWh5AAQiPAAiCggIjJMwg");
	this.shape_7.setTransform(158.175,361.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#F3FB48").ss(0.7).p("ABAAAQAAAjgSAZQgTAZgbAAQgaAAgTgZQgTgZAAgjQAAgiATgZQATgZAaAAQAbAAATAZQASAYAAAjg");
	this.shape_8.setTransform(187.05,242.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F3FB48").s().p("AgsA8QgUgZABgjQgBgiAUgZQASgZAaAAQAbAAATAZQATAYgBAjQABAjgTAZQgTAZgbAAQgaAAgSgZg");
	this.shape_9.setTransform(187.05,242.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#F3FB48").ss(0.7).p("ABAAAQAAAjgSAZQgTAZgbAAQgaAAgSgZQgUgZAAgjQAAgiAUgZQASgZAaAAQAbAAATAZQASAYAAAjg");
	this.shape_10.setTransform(129,242.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3FB48").s().p("AgsA8QgUgZABgjQgBgiAUgZQASgZAaAAQAbAAATAZQATAYgBAjQABAjgTAZQgTAZgbAAQgaAAgSgZg");
	this.shape_11.setTransform(129,242.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#381390").ss(0.7).p("ACrDTIlVAAIAAmlIFVAAg");
	this.shape_12.setTransform(157.725,251.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#381390").s().p("AiqDTIAAmlIFVAAIAAGlg");
	this.shape_13.setTransform(157.725,251.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#EFBA80").ss(0.7).p("AC5AAQAAA+g2ArQg2AshNAAQhMAAg2gsQg2grAAg+QAAg8A2gsQA2gsBMAAQBNAAA2AsQA2AsAAA8g");
	this.shape_14.setTransform(159.425,149.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EFBA80").s().p("AiCBpQg2grAAg+QAAg8A2gsQA2gsBMAAQBNAAA2AsQA2AsAAA8QAAA+g2ArQg2AshNAAQhMAAg2gsg");
	this.shape_15.setTransform(159.425,149.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.7).p("AA/AAQAAAtgSAgQgTAggaAAQgZAAgTggQgSggAAgtQAAgtASgfQATggAZAAQAbAAASAgQASAfAAAtg");
	this.shape_16.setTransform(168.375,122.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgsBNQgSggAAgtQAAgtASgfQATggAZAAQAbAAASAgQASAfAAAtQAAAtgSAgQgTAggaAAQgZAAgTggg");
	this.shape_17.setTransform(168.375,122.325);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.7).p("ABAAAQAAAtgTAgQgSAggbAAQgZAAgTggQgSggAAgtQAAgsASggQATggAZAAQAbAAASAgQATAgAAAsg");
	this.shape_18.setTransform(149.45,121.725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgsBNQgTggAAgtQAAgsATggQATggAZAAQAaAAATAgQASAgAAAsQAAAtgSAgQgTAggaAAQgZAAgTggg");
	this.shape_19.setTransform(149.45,121.725);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#33A8CC").ss(0.7).p("ABUAAQAAA+gZArQgYAsgjAAQgiAAgZgsQgYgrAAg+QAAg9AYgrQAZgsAiAAQAjAAAYAsQAZArAAA9g");
	this.shape_20.setTransform(170.8,124.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33A8CC").s().p("Ag6BpQgZgrAAg+QAAg9AZgrQAYgsAiAAQAjAAAZAsQAYArAAA9QAAA+gYArQgZAsgjAAQgiAAgYgsg");
	this.shape_21.setTransform(170.8,124.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#33A8CC").ss(0.7).p("ABUAAQAAA9gZAsQgYAsgjAAQgiAAgYgsQgZgsAAg9QAAg9AZgrQAYgsAiAAQAjAAAYAsQAZArAAA9g");
	this.shape_22.setTransform(146.9,124.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33A8CC").s().p("Ag6BpQgZgsAAg9QAAg9AZgrQAYgsAiAAQAjAAAYAsQAZArAAA9QAAA9gZAsQgYAsgjAAQgiAAgYgsg");
	this.shape_23.setTransform(146.9,124.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.7).p("AB0AAQAABOgiA4QgiA3gwAAQgvAAgig3Qgig4AAhOQAAhOAig3QAig3AvAAQAwAAAiA3QAiA3AABOg");
	this.shape_24.setTransform(144.25,126.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhRCGQghg4gBhOQABhOAhg3QAig3AvAAQAwAAAiA3QAhA3AABOQAABOghA4QgiA3gwAAQgvAAgig3g");
	this.shape_25.setTransform(144.25,126.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#F3E8D1").ss(0.7).p("ACAAAQAABXgmA+QglA+g1AAQg0AAglg+Qgmg+AAhXQAAhXAmg9QAlg+A0AAQA1AAAlA+QAmA9AABXg");
	this.shape_26.setTransform(143.7,122.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3E8D1").s().p("AhZCVQgmg+AAhXQAAhXAmg9QAlg+A0AAQA1AAAlA+QAlA9AABXQAABXglA+QglA+g1AAQg0AAglg+g");
	this.shape_27.setTransform(143.7,122.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#42210F").ss(0.7).p("ACAAAQAABYgmA9QglA+g1AAQg0AAglg+Qgmg9AAhYQAAhXAmg9QAlg+A0AAQA1AAAlA+QAmA9AABXg");
	this.shape_28.setTransform(143.7,111.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#42210F").s().p("AhZCVQgmg+AAhXQAAhWAmg+QAlg+A0AAQA1AAAlA+QAlA+AABWQAABXglA+QglA+g1AAQg0AAglg+g");
	this.shape_29.setTransform(143.7,111.15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.7).p("AB0AAQAABOgiA4QgiA3gwAAQgvAAgig3Qgig4AAhOQAAhOAig3QAig3AvAAQAwAAAiA3QAiA3AABOg");
	this.shape_30.setTransform(173.625,125.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhRCGQgig4AAhOQAAhOAig3QAig3AvAAQAwAAAiA3QAiA3AABOQAABOgiA4QgiA3gwAAQgvAAgig3g");
	this.shape_31.setTransform(173.625,125.875);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#F3E8D1").ss(0.7).p("ACAAAQAABXgmA+QglA+g1AAQg0AAglg+Qgmg+AAhXQAAhXAmg9QAlg+A0AAQA1AAAlA+QAmA+AABWg");
	this.shape_32.setTransform(172.8,122.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3E8D1").s().p("AhZCVQgmg+AAhXQAAhXAmg9QAlg+A0AAQA0AAAmA+QAmA+AABWQAABXgmA+QgmA+g0AAQg0AAglg+g");
	this.shape_33.setTransform(172.8,122.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#42210F").ss(0.7).p("ACAAAQAABYgmA9QglA+g1AAQg0AAglg+Qgmg9AAhYQAAhXAmg9QAlg+A0AAQA1AAAlA+QAmA+AABWg");
	this.shape_34.setTransform(172.8,111.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#42210F").s().p("AhZCVQgmg+AAhXQAAhXAmg9QAlg+A0AAQA0AAAmA+QAmA+AABWQAABXgmA+QgmA+g0AAQg0AAglg+g");
	this.shape_35.setTransform(172.8,111.45);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F3E8D1").ss(0.7).p("AFOAAQAABRhiA5QhhA5iLAAQiJAAhig5Qhig5AAhRQAAhPBig6QBig5CJAAQCLAABhA5QBiA6AABPg");
	this.shape_36.setTransform(160.575,137.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3E8D1").s().p("AjrCKQhig5AAhRQAAhPBig6QBig5CJAAQCLAABhA5QBiA6AABPQAABRhiA5QhhA5iLAAQiJAAhig5g");
	this.shape_37.setTransform(160.575,137.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#603815").ss(0.7).p("AGLAAQAABxh0BQQh0BQijAAQijAAh0hQQhzhQAAhxQAAhwBzhQQB1hQCiAAQCjAAB0BQQB0BQAABwg");
	this.shape_38.setTransform(160.4,152.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#603815").s().p("AkWDBQh0hQAAhxQAAhwB0hQQBzhQCjAAQCjAAB1BQQBzBQAABwQAABxhzBQQh1BQijAAQijAAhzhQg");
	this.shape_39.setTransform(160.4,152.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#EFBA80").ss(0.7).p("AD4AAQAAA3hIAnQhJAnhnAAQhmAAhIgnQhJgnAAg3QAAg2BJgmQBJgoBlAAQBnAABJAoQBIAmAAA2g");
	this.shape_40.setTransform(159.9,176.45);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3E8D1").s().p("AiuBeQhJgnAAg3QAAg2BJgmQBIgoBmAAQBmAABKAoQBIAmAAA2QAAA3hIAnQhJAnhnAAQhmAAhIgng");
	this.shape_41.setTransform(159.9,176.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#F3E8D1").ss(0.7).p("AH/E7QACgQAAgTIgCqpIgJAAQgDhniThIQiThIjOABQjPABiTBJQiTBJgCBnIgKAAIADKpQAAAWADAUQgCALAAALQAAB9CWBYQCWBYDUAAQDUAACXhYQCWhYAAh9QAAgOgEgTg");
	this.shape_42.setTransform(159.4741,148.6993);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F3E8D1").s().p("AloIxQiWhYAAh9IACgWQgDgUAAgWIgDqpIAKAAQAChnCThJQCThJDPgBQDOgBCTBIQCTBIADBnIAJAAIACKpQAAATgCAQQAEATAAAOQAAB9iWBYQiXBYjUAAQjUAAiWhYg");
	this.shape_43.setTransform(159.475,148.6993);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#C0242D").ss(0.7).p("AIICwIwPAAQAAiSBZhmQBahnB/AAIGrAAQB/AABaBnQBZBmAACSg");
	this.shape_44.setTransform(159.175,89.325);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C0242D").s().p("AoHCwQAAiSBZhmQBahnB/AAIGrAAQB/AABaBnQBZBmAACSg");
	this.shape_45.setTransform(159.175,89.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#EB2D23").ss(0.7).p("AIbDTIw2AAQAAiuBsh8QBrh7CYAAIFZAAQCXAABsB7QBrB8AACug");
	this.shape_46.setTransform(159.65,86.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EB2D23").s().p("AobDTQAAivBsh7QBsh7CXAAIFZAAQCYAABrB7QBrB7AACvg");
	this.shape_47.setTransform(159.65,86.35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(0.7).p("ADeAAQAABchBBBQhBBBhcAAQhbAAhBhBQhBhBAAhcQAAhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbg");
	this.shape_48.setTransform(159.65,47.375);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AicCdQhBhBABhcQgBhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbQAABchBBBQhBBBhcAAQhbAAhBhBg");
	this.shape_49.setTransform(159.65,47.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#EB2D23").ss(0.7).p("AHjIaIvFAAQhhAAhFhPQhFhPAAhwQAAikA3iVQA1iQBhhwQBhhvB+g9QCDhACOAAIAhAAQCOAACCBAQB+A9BhBvQBhBwA2CQQA3CVAACkQAABvhFBQQhGBPhgAAg");
	this.shape_50.setTransform(160.15,54.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FB2813").s().p("AniIaQhhAAhEhPQhFhPgBhwQAAikA3iVQA2iRBhhvQBghvB/g+QCCg/COAAIAhAAQCOAACCA/QB+A+BhBvQBhBvA2CRQA3CVAACkQAABwhFBPQhFBPhhAAg");
	this.shape_51.setTransform(160.15,54.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#F3E8D1").ss(0.7).p("AgMDxIApAAQAxAAAjgoQAjgoAAg5IAAjPQAAg4gjgoQgjgpgxAAIg5AAQgxAAgjApQgjAoAAA4IAAC9QAABAAoAuQAnAtA4AAg");
	this.shape_52.setTransform(212.875,130.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F3E8D1").s().p("AgMDxQg4AAgnguQgogtAAhAIAAi9QAAg5AjgoQAjgoAxAAIA5AAQAxAAAjAoQAjAoAAA5IAADPQAAA5gjAoQgjAogxAAg");
	this.shape_53.setTransform(212.875,130.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#F3E8D1").ss(0.7).p("AgMDxIApAAQAxAAAjgoQAjgpAAg5IAAjOQAAg4gjgpQgjgogxAAIg5AAQgxAAgkAoQgjApAAA4IAAC8QAABBAoAuQAoAtA4AAg");
	this.shape_54.setTransform(105.8,132.35);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F3E8D1").s().p("AgMDxQg4AAgogtQgngvAAhAIAAi8QAAg4AigpQAkgoAxAAIA5AAQAxAAAkAoQAiApABA4IAADPQgBA4giAoQgkApgxAAg");
	this.shape_55.setTransform(105.8,132.35);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#381390").ss(0.7).p("AhomtIAANbIDRAAIAAtbg");
	this.shape_56.setTransform(129.175,229.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#381390").s().p("AhoGuIAAtbIDRAAIAANbg");
	this.shape_57.setTransform(129.175,229.85);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#381390").ss(0.7).p("AhomtIAANbIDRAAIAAtbg");
	this.shape_58.setTransform(186.35,230.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#381390").s().p("AhoGuIAAtbIDRAAIAANbg");
	this.shape_59.setTransform(186.35,230.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.7).p("AD1B+InpAAIAAj7IHpAAg");
	this.shape_60.setTransform(158.7,217.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EB2D23").s().p("Aj0B+IAAj7IHpAAIAAD7g");
	this.shape_61.setTransform(158.7,217.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FB2813").ss(0.7).p("AikIGIlul3IFxnaQCHiuDKgOQDLgNCXCcg");
	this.shape_62.setTransform(100.45,254.1,1,1,0,0,0,0,-0.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FB2813").s().p("AoRCQIFwnaQCIiuDJgOQDLgNCYCcIq3N/g");
	this.shape_63.setTransform(100.45,254.1999);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FB2813").ss(0.7).p("AoSl3QCXicDLANQDJANCICtIFyHZIltF5g");
	this.shape_64.setTransform(223,254.5,1,1,0,0,0,0.1,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FB2813").s().p("AoSl2QCXicDLANQDJANCICtIFyHZIltF5g");
	this.shape_65.setTransform(222.925,254.4036);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#8B623B").ss(0.7).p("ADfEWIm9AAQhDAAgvg3Qgvg2AAhMQAAiZBehsQBfhtCGAAIG8AAIAAFyQAABMgwA2QgvA3hCAAg");
	this.shape_66.setTransform(75.15,485.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8B623B").s().p("AjdEWQhDAAgwg2Qgvg2AAhOQAAiYBehsQBfhtCGAAIG8AAIAAFxQAABOgvA2QgwA2hDAAg");
	this.shape_67.setTransform(75.15,485.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#8B623B").ss(0.7).p("AjeEWIG9AAQBDAAAvg3QAvg2AAhMQAAiZhfhsQhehtiGAAIm8AAIAAFyQAABMAvA2QAwA3BCAAg");
	this.shape_68.setTransform(242.225,484.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8B623B").s().p("AjeEWQhCAAgwg3Qgvg2AAhMIAAlyIG8AAQCGAABeBtQBfBsAACZQAABMgvA2QgvA3hDAAg");
	this.shape_69.setTransform(242.225,484.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.1,0,322,513.5), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egh0AfLMAAAg+VMBDpAAAMAAAA+Vg");
	mask.setTransform(216.5,199.5);

	// Layer_3
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(216.5,199.5,1,1,0,0,0,216.5,199.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,433,399), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgZJAoIMAAAhQPMAyTAAAMAAABQPg");
	mask.setTransform(161.05,256.75);

	// Layer_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(161.1,256.8,1,1,0,0,0,161.1,256.8);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0.1,0,322,513.5), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(216.5,199.5,1,1,0,0,0,216.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,433,399), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egh0AfLMAAAg+VMBDpAAAMAAAA+Vg");
	mask.setTransform(216.5,199.5);

	// Layer_3
	this.instance = new lib.Group();
	this.instance.setTransform(216.5,199.5,1,1,0,0,0,216.5,199.5);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "multiply";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,433,399), null);


(lib.ClipGroup_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egh0AfLMAAAg+VMBDpAAAMAAAA+Vg");
	mask_1.setTransform(216.5,199.5);

	// Layer_3
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(216.5,199.5,1,1,0,0,0,216.5,199.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#F2ED48").ss(5).p("ATDb0Iy7pcIy1JoIDh0MIvWuNIVGjDIJXyZIJgSUIVIC1IvNOWg");
	this.shape_70.setTransform(209.4437,192.3173);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F2ED48").s().p("AvMHvIvWuMIVGjEIJXyZIJgSUIVIC2IvNOWIDsUKIy6pcIy1Jng");
	this.shape_71.setTransform(209.45,192.8);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(216.5,199.5,1,1,0,0,0,216.5,199.5);

	var maskedShapeInstanceList = [this.instance,this.shape_70,this.shape_71,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_71},{t:this.shape_70},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0_1, new cjs.Rectangle(0,0,433,399), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egh0AfLMAAAg+VMBDpAAAMAAAA+Vg");
	mask_1.setTransform(216.5,199.5);

	// Layer_3
	this.instance_1 = new lib.ClipGroup_0_1();
	this.instance_1.setTransform(216.5,199.5,1,1,0,0,0,216.5,199.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,433,399), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("smb_1upwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(50.5,46.55,0.2333,0.2333,0,0,0,216.5,199.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,93.1);


(lib.Star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("smb_1upwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(50.5,46.55,0.2333,0.2333,0,0,0,216.5,199.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,93.1);


(lib.Starc1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Star();
	this.instance.setTransform(50.5,46.5,1,1,0,0,0,50.5,46.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Star(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101,93.1);


// stage content:
(lib.Game = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.play_btn.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// star
	this.instance = new lib.Symbol1();
	this.instance.setTransform(300.25,245,1,1,0,0,0,50.5,46.5);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).wait(40));

	// arrow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE0000").s().p("ArAo8IWBjOIvEYWgAqyo1IGyUpIOt3yg");
	this.shape.setTransform(187.3029,87.2238,0.3842,0.3842);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE0000").s().p("ArAo8IWBjOIvEYWg");
	this.shape_1.setTransform(187.3029,87.2238,0.3842,0.3842);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE0000").s().p("AvFkRIEinUIZpP3IkiHUgAu2kUIZWPsIEXnDI5Wvrg");
	this.shape_2.setTransform(227.2838,106.148,0.3842,0.3842);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE0000").s().p("AvFkRIEinUIZpP3IkiHUg");
	this.shape_3.setTransform(227.2838,106.148,0.3842,0.3842);

	this.instance_1 = new lib.Starc1();
	this.instance_1.setTransform(300.25,245,1,1,0,0,0,50.5,46.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1}]},10).wait(40));

	// speech
	this.text = new cjs.Text("", "12px 'Times-Roman'");
	this.text.lineHeight = 14;
	this.text.lineWidth = 26;
	this.text.parent = this;
	this.text.setTransform(468.95,126.65,0.2905,0.2905);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABODXIgEgOIgBgiIgDhIQgCgqgVgPQgMgIgaAAIhgAAIAAC5IgsAAIAAmtICSAAQAlAAAXAOQAsAcAABKQABAmgMAZQgNAZgVANQATALAJAQQALARAAAmIACA6QABAYACAMQAEAVAJAGIAAAJgAhXgRIBhAAQAeAAARgQQASgQAAgsQAAgtgZgSQgNgIgVAAIhnAAg");
	this.shape_4.setTransform(539.0646,180.8549,0.2904,0.2904);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABgDXIggiBIh/AAIgjCBIgtAAIB5mtIAxAAIB1GtgAgyAnIBjAAIgwi9g");
	this.shape_5.setTransform(529.7561,180.8549,0.2904,0.2904);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVDXIAAl6IhtAAIAAgzIEFAAIAAAzIhtAAIAAF6g");
	this.shape_6.setTransform(522.3718,180.8549,0.2904,0.2904);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhbC5QgignAAhHIAqAAQABAmALAWQAVAqA0ABQAYAAATgKQAmgSAAgvQAAgjgQgPQgRgOgigLIgpgOQgpgMgRgPQgegbgBg2QAAg5AegmQAdglA2AAQAvAAAjAgQAjAiAABHIgpAAQgDgigLgTQgTghgsgBQglABgRAVQgQAWAAAcQAAAgATAOQAOAKAqAOIAsAOQAfAKASAQQAdAfAAA4QABBJgmAeQgnAfgxAAQg7AAgggqg");
	this.shape_7.setTransform(513.9274,180.8839,0.2904,0.2904);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah2DXIAAmtIDpAAIAAA1Ii+AAIAACCICwAAIAAAxIiwAAIAACSIDCAAIAAAzg");
	this.shape_8.setTransform(501.8815,180.8549,0.2904,0.2904);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABTDXIAAjJIilAAIAADJIgsAAIAAmtIAsAAIAACyIClAAIAAiyIAsAAIAAGtg");
	this.shape_9.setTransform(492.6021,180.8549,0.2904,0.2904);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVDXIAAl6IhtAAIAAgzIEFAAIAAAzIhtAAIAAF6g");
	this.shape_10.setTransform(483.9181,180.8549,0.2904,0.2904);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABNDXIhzjXIg1BBIAACWIgqAAIAAmtIAqAAIAADSIChjSIA9AAIiJCtICMEAg");
	this.shape_11.setTransform(472.6855,180.8549,0.2904,0.2904);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhbC1Qgxg8AAh8QAAhfAlg9QAohDBGAAQA9AAAiArQAhAsAEA2IgrAAQgHgpgWgZQgVgYgmAAQguAAgdAtQgcAsAABcQAABMAaAvQAaAvAyAAQAwAAAYgyQAOgaAGgrIAqAAQgEBFghAtQgmA4hAAAQg3AAgmgug");
	this.shape_12.setTransform(463.043,180.8476,0.2904,0.2904);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVDXIAAmtIArAAIAAGtg");
	this.shape_13.setTransform(456.6607,180.8549,0.2904,0.2904);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhmDXIAAmtIAsAAIAAF6IChAAIAAAzg");
	this.shape_14.setTransform(451.4474,180.8549,0.2904,0.2904);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhbC1Qgxg8AAh8QAAhfAlg9QAohDBGAAQA9AAAhArQAhArAEA3IgqAAQgHgpgWgZQgVgYgmAAQguAAgdAtQgdAuAABaQAABLAaAwQAbAvAyAAQAwAAAYgyQAOgaAGgrIAqAAQgFBEggAuQgmA4hAAAQg3AAgmgug");
	this.shape_15.setTransform(442.7198,180.8476,0.2904,0.2904);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AY32pMgxhAAAQjOAAiTCTQiTCTAADOIAAZsIgIAAIGxLuIGurpMAr+AAAQDPAACSiTQCTiSAAjPIAAx9QAAjOiTiTQiSiTjPAAg");
	this.shape_16.setTransform(483.9325,189.865,0.2905,0.2905);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EggoAK6IAIAAIAA5tQAAjNCTiTQCTiTDOAAMAxhAAAQDPAACSCTQCTCTAADNIAAR+QAADOiTCSQiSCTjPAAMgr+AAAImuLpg");
	this.shape_17.setTransform(483.9858,189.7924,0.2905,0.2905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text}]},10).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text}]},39).wait(1));

	// mario
	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(-53.85,268.05,0.34,0.34,0,0,0,161.1,256.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({x:178.15},14).wait(25).to({x:175.15},0).wait(1));

	// toad
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5E8D1").s().p("AiXBqQg/gsAAg+QAAg9A/gsQA/gsBYAAQBZAAA/AsQA/AsAAA9QAAA+g/AsQg/AshZAAQhYAAg/gsg");
	this.shape_18.setTransform(435.1795,336.7278,0.2816,0.2816);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F5E8D1").s().p("AiXBqQg/gsAAg+QAAg9A/gsQA/gsBYAAQBZAAA/AsQA/AsAAA9QAAA+g/AsQg/AshZAAQhYAAg/gsg");
	this.shape_19.setTransform(376.6065,336.4462,0.2816,0.2816);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("ABLAAQAABfgWBEQgWBDgfAAQgeAAgWhDQgWhDAAhgQAAhfAWhDQAWhDAeAAQAfAAAWBDQAWBDAABfg");
	this.shape_20.setTransform(412.7922,275.7612,0.2816,0.2816);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag0CiQgWhCAAhgQAAhfAWhDQAWhDAeAAQAfAAAWBDQAWBDAABfQAABfgWBDQgWBEgfAAQgeAAgWhEg");
	this.shape_21.setTransform(412.7922,275.7612,0.2816,0.2816);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("ABLAAQAABggWBDQgWBDgfAAQgeAAgWhDQgWhEAAhfQAAhfAWhDQAWhDAeAAQAfAAAWBDQAWBDAABfg");
	this.shape_22.setTransform(397.5717,275.7612,0.2816,0.2816);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag0CiQgWhDAAhfQAAhfAWhDQAWhDAeAAQAfAAAWBDQAWBDAABfQAABggWBCQgWBEgfAAQgeAAgWhEg");
	this.shape_23.setTransform(397.5717,275.7612,0.2816,0.2816);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#F5E8D1").p("AFyAAQAACdhsBwQhtBviZAAQiYAAhthvQhshwAAidQAAidBshvQBthvCYAAQCZAABtBvQBsBvAACdg");
	this.shape_24.setTransform(404.7567,281.3717,0.2816,0.2816);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F5E8D1").s().p("AkFEMQhshvAAidQAAicBshwQBshvCZAAQCZAABsBvQBtBwAACcQAACdhtBvQhsBwiZAAQiZAAhshwg");
	this.shape_25.setTransform(404.7567,281.3717,0.2816,0.2816);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("AFyAAQAACdhsBwQhsBviaAAQiYAAhshvQhthwAAidQAAidBthvQBshvCYAAQCaAABsBvQBsBvAACdg");
	this.shape_26.setTransform(404.7426,287.5659,0.2816,0.2816);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AkFENQhshwAAidQAAicBshvQBthwCYAAQCZAABtBwQBsBvAACcQAACdhsBwQhtBviZAAQiYAAhthvg");
	this.shape_27.setTransform(404.7426,287.5659,0.2816,0.2816);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#F5E8D1").p("AAAMRQiXAAiJg6QiGg5hnhnQhnhmg5iGQg6iKAAiXIAAhSQAAiYA6iKQA5iFBnhnQBnhnCGg5QCJg6CXAAQCYAACJA6QCGA5BnBnQBnBnA5CFQA6CKAACYIAABSQAACXg6CKQg5CGhnBnQhnBniGA4QiJA6iYAAg");
	this.shape_28.setTransform(404.6258,280.2457,0.2816,0.2816);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F5E8D1").s().p("AkhLXQiFg5hnhnQhnhmg5iGQg6iKAAiXIAAhSQAAiYA6iKQA5iFBnhnQBnhnCFg5QCLg6CWAAQCXAACLA6QCFA5BnBnQBnBnA5CFQA6CKAACYIAABSQAACXg6CKQg5CGhnBnQhnBniFA4QiLA6iXAAQiWAAiLg6g");
	this.shape_29.setTransform(404.6258,280.2457,0.2816,0.2816);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FBB045").ss(10).p("AlsJEILZAAIAAmuQAAiVg5iGQg3iDhlhlQhlhliCg4QiIg5iUAAg");
	this.shape_30.setTransform(427.9843,307.5756,0.2816,0.2816);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0005FA").s().p("AlsJEIAByHQCUAACHA5QCDA4BlBlQBkBlA4CDQA5CGAACVIAAGug");
	this.shape_31.setTransform(427.9846,307.5751,0.2816,0.2816);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FBB045").ss(10).p("AFtJEIrZAAIAAmuQAAiVA6iHQA3iCBlhlQBlhmCCg3QCIg5CUAAg");
	this.shape_32.setTransform(383.7733,307.3005,0.2816,0.2816);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#0005FA").s().p("AlsJEIAAmvQAAiUA6iGQA3iEBlhkQBlhlCCg4QCHg5CVAAIAASHg");
	this.shape_33.setTransform(383.7733,307.3005,0.2816,0.2816);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#F5E8D1").p("AF3HlIrtAAIAAvJILtAAg");
	this.shape_34.setTransform(406.0197,298.9933,0.2816,0.2816);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F5E8D1").s().p("Al2HlIAAvJILtAAIAAPJg");
	this.shape_35.setTransform(406.0197,298.9933,0.2816,0.2816);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#E6E6E6").p("AAAHeQicAAhwiMQhuiMAAjGQAAjFBuiMQBwiMCcAAQCdAABwCMQBuCMAADFQAADGhuCMQhwCMidAAg");
	this.shape_36.setTransform(429.8855,245.7127,0.2816,0.2816);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FE0000").s().p("AkLFSQhviMAAjGQAAjFBviMQBviMCcAAQCdAABwCMQBvCMAADFQAADGhvCMQhwCMidAAQicAAhviMg");
	this.shape_37.setTransform(429.8855,245.7127,0.2816,0.2816);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#E6E6E6").p("AAAHmQiYAAhsiOQhtiPAAjJQAAjJBtiOQBsiPCYAAQCZAABsCPQBtCOAADJQAADJhtCPQhsCOiZAAg");
	this.shape_38.setTransform(377.1572,245.7409,0.2816,0.2816);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FE0000").s().p("AkEFYQhtiPAAjJQAAjIBtiPQBsiOCYgBQCZABBsCOQBtCPAADIQAADJhtCPQhsCOiZAAQiYAAhsiOg");
	this.shape_39.setTransform(377.1572,245.7409,0.2816,0.2816);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#E6E6E6").p("AIbAAQAACQieBlQieBljfAAQjeAAiehlQiehlAAiQQAAiPCehlQCehmDeAAQDfAACeBmQCeBlAACPg");
	this.shape_40.setTransform(402.6661,226.0461,0.2816,0.2816);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FE0000").s().p("Al8D1QiehmAAiPQAAiOCehmQCehlDegBQDfABCeBlQCeBmAACOQAACPieBmQieBljfAAQjeAAiehlg");
	this.shape_41.setTransform(402.6661,226.0461,0.2816,0.2816);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#E6E6E6").p("AUXAAQAADohnDUQhiDNi1CeQi0CdjqBXQjyBakJAAQkIAAjyhaQjqhXi0idQi0iehjjNQhnjUAAjoQAAjnBnjVQBjjMC0ieQC0ieDqhXQDyhZEIAAQEJAADyBZQDqBXC0CeQC1CeBiDMQBnDUAADog");
	this.shape_42.setTransform(403.9613,248.3171,0.2816,0.2816);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("An6QcQjqhYi0idQi0iehjjNQhnjUAAjoQAAjnBnjVQBjjMC0ieQC0ieDqhXQDyhZEIAAQEJAADyBZQDqBXC0CeQC1CeBiDMQBnDUAADoQAADohnDUQhiDNi1CeQi0CdjqBYQjyBZkJAAQkIAAjyhZg");
	this.shape_43.setTransform(403.9613,248.3171,0.2816,0.2816);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Al8E/QieiEAAi7QAAi6CeiEQCeiEDeAAQDfAACeCEQCeCEAAC6QAAC7ieCEQieCEjfAAQjeAAieiEg");
	this.shape_44.setTransform(402.7717,229.3051,0.2816,0.2816);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F5E8D1").s().p("AikH5IAAvxIFJAAIAAPxg");
	this.shape_45.setTransform(376.6065,318.8462,0.2816,0.2816);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#E6E6E6").p("AOdAAQAADphIDUQhHDOiACfQiACeimBXQisBai8AAQi7AAishaQimhXiAieQiAifhHjOQhIjUAAjpQAAjoBIjUQBHjOCAifQCAieCmhXQCshaC7AAQC8AACsBaQCmBXCACeQCACfBHDOQBIDUAADog");
	this.shape_46.setTransform(406.0197,316.171,0.2816,0.2816);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AlnQfQimhXiAifQiAiehGjOQhJjUAAjpQAAjoBJjUQBGjOCAieQCAifCmhXQCshaC7AAQC8AACsBaQCmBXCACfQCACeBGDOQBJDUAADoQAADphJDUQhGDOiACeQiACfimBXQisBai8AAQi7AAishag");
	this.shape_47.setTransform(406.0197,316.171,0.2816,0.2816);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#F5E8D1").p("AHMAAQAAB2iGBTQiHBUi/AAQi9AAiHhUQiHhTAAh2QAAh1CHhTQCHhUC9AAQC/AACHBUQCGBTAAB1g");
	this.shape_48.setTransform(387.8565,347.1471,0.2816,0.2816);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#603816").s().p("AlEDJQiHhTAAh2QAAh1CHhUQCGhTC+AAQC/AACHBTQCGBUAAB1QAAB2iGBTQiIBUi+AAQi+AAiGhUg");
	this.shape_49.setTransform(387.8565,347.1471,0.2816,0.2816);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#F5E8D1").p("AHMAAQAAB2iGBTQiHBUi/AAQi+AAiHhUQiGhTAAh2QAAh1CGhTQCHhUC+AAQC/AACHBUQCGBTAAB1g");
	this.shape_50.setTransform(423.6339,346.5839,0.2816,0.2816);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#603816").s().p("AlFDKQiGhUAAh2QAAh1CGhUQCHhTC+AAQC/AACHBTQCGBUAAB1QAAB2iGBUQiHBTi/AAQi+AAiHhTg");
	this.shape_51.setTransform(423.6339,346.5839,0.2816,0.2816);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F5E8D1").s().p("AikH5IAAvxIFJAAIAAPxg");
	this.shape_52.setTransform(435.1795,319.9726,0.2816,0.2816);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},10).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},39).wait(1));

	// start
	this.play_btn = new lib.play_btn();
	this.play_btn.name = "play_btn";
	this.play_btn.setTransform(86.45,41,1,1,0,0,0,74,26);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(50));

	// background
	this.instance_3 = new lib.MarioBackground();
	this.instance_3.setTransform(-21,-12,0.3713,0.343);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// stageBackground
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EgshggzMBZDAAAMAAABBnMhZDAAAg");
	this.shape_53.setTransform(275,200);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("EgshAg0MAAAhBnMBZDAAAMAAABBng");
	this.shape_54.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(166.4,188,406.70000000000005,211.60000000000002);
// library properties:
lib.properties = {
	id: '8142AA5B1E7448A486AD6FC9FFDBE6DD',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Game_atlas_1.png?1614336417049", id:"Game_atlas_1"},
		{src:"sounds/smb_1upwav.mp3?1614336417095", id:"smb_1upwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8142AA5B1E7448A486AD6FC9FFDBE6DD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
