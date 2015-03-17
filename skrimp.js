window.skrimp = (function () {
	function Skrimp (els){
		for(var i = 0; i < els.length; i++){
			this[i] = els[i];
		}
		this.length = els.length;
	}
	var skrimp = {
		get: function(selector){
			var els;
			if (typeof selector === "string"){
				els = document.querySelectorAll(selector);
			}else if (selector.length){
				els= selector;
			}else {
				els = [selector];
			}
			return new Skrimp(els);
		}
	};
	return skrimp;

}());