define('./bin/a', function(require, exports, module){
	var c = require("./c.js");
	var d = require("./d.js");
	
	exports.init = function(){
		//alert(c.getB());
		console.log(c.getB());
		console.log(d.getD());
	}
})
	