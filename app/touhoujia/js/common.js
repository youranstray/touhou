window.onload = function() {
	var oHtml = document.getElementsByTagName("html")[0];
	var Htmlfont = function() {
		oHtml.style.fontSize = 16/1350*document.body.clientWidth+"px";
		if (document.body.clientWidth>1350) {
			oHtml.style.fontSize = "16px"
		}
	}
	Htmlfont();
	window.onresize = function() {
		Htmlfont();
	}

}