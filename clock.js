window.onload = function () {
	// body...
	
	setInterval(ticTac,1000);
	function ticTac() {
		var clock = new Date();
		// console.log(clock.getSeconds());
		
		document.getElementById("HourD").innerHTML = prefixTime(clock.getHours());
		document.getElementById("MinutesD").innerHTML = prefixTime(clock.getMinutes());
		document.getElementById("SecondsD").innerHTML = prefixTime(clock.getSeconds());
		/*if (clock.getSeconds() === 59) {
			console.log("---\n"+clock.getMinutes()+"---\n");
			if (clock.getMinutes() === 59) {

			};
		};*/
	}
	function prefixTime (time) {
		var prefix = "";
		if (time < 10) {
			prefix = "0";
		} else{
			prefix = "";
		};
		return prefix + time;
	}
};
