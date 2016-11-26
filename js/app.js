function pirate(obj) {
	console.log(obj);
	$('#app').html("<h1 class='b white tc f1'>" + obj.translation.pirate + "</h1>");
}

$(document).ready(function() {
	var submit = $("#form");
	submit.on("submit",function(e) {
		e.preventDefault();
		var text = $("#humanid").val();
		if(text !== ""){
			$("#humanid").val("");
			console.log(text);
			$.ajax({
				dataType: 'jsonp',
		  	url: "http://isithackday.com/arrpi.php?text=" + text + "&format=json"
			})
			.done(function(res) {
				pirate(res);
			})
			.catch(function(err) {
				if(err.statusText == "Not Found") 
					$("#app").html("<h1 class='b white tc f1'>User Not Found</h1>");
			});
		}
	});
});