window.onload = function() {
	var oP = document.getElementById("styp");
	var oP1 = document.getElementById("styp1");
	var oDiv = document.getElementById("stydiv");
	var oDiv2 = document.getElementById("stydiv2");
	oDiv.style.height = oP.offsetHeight + "px";
	oDiv2.style.height = oP.offsetHeight + "px";
	oP1.style.height = oP.offsetHeight + "px";
}