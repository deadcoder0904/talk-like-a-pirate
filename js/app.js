function pirate(obj) {
	$('#app').html("<hr /><h1 class='b tc f1 night-hotel '>" + obj.translation.pirate + "</h1>");
}

function callPirate(text) {
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

$(document).ready(function() {
	var submit = $("#form");
	
	submit.on("submit",function(e) {
		e.preventDefault();
		var text = $("#humanid").val();
		if(text !== ""){
			$("#humanid").val("");
			callPirate(text);			
		}
	});

	$('.samples').click(function() {
		callPirate($(this)[0].innerText);
	});

});