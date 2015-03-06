
	setInterval(ticTac,1000);
	function ticTac() {
		var clock = new Date();
		// console.log(clock.getSeconds());
		
		document.getElementById("HourD").innerHTML = prefixTime(clock.getHours());
		document.getElementById("MinutesD").innerHTML = prefixTime(clock.getMinutes());
		document.getElementById("SecondsD").innerHTML = prefixTime(clock.getSeconds());
		r(document.getElementById("SecondsA"), 6* clock.getSeconds());
		r(document.getElementById("MinutesA"), 6* clock.getMinutes());
		r(document.getElementById("HoursA"), 30 * clock.getHours());
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
	function r(el, deg) {
		el.setAttribute('transform', 'rotate('+ deg +' 90 90)')
		}
		
