$(function() {
 	 // Handler for .ready() called.
 	 console.log("jtnbedtbe");

  	$("form.talentsFormSearch").submit(function( event ) {
		var talentList = $( "input:first" ).val();
		talentList = (talentList.length > 0) ? talentList : " ";
		window.location = "/talent/" + talentList + "/users";
 		event.preventDefault();
 	});

});