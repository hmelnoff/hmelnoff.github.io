$(document).ready(function() {
	var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?";
	$.getJSON( weatherAPI, {
			  q: "Yekaterinburg",
			  units: "metric",
			  lang: "ru"
			  })
			.done(function( data){
			$("#weather h3").text(data.name);
		console.log("success");
	});
});