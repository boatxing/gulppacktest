define('./bin/a', function(require, exports, module){
	var c = require("./c.js");
	var d = require("./d.js");
	
	exports.init = function(){
		//alert(c.getB());
		console.log(c.getB());
		console.log(d.getD());
	}
})
	
define('b', function(require, exports, module){
	var b = "boat";
	exports.getB = function(){
		return b;
	}
});
define('d', function(require, exports, module){
	var d = "xingzhizhou";
	exports.getD = function(){
		return d;
	}
});