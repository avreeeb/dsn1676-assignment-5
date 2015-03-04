// JavaScript Document

var $form = $('form');
var $input = $('#the-color');

$form.on('submit', function (eventObject) {
	//Stop the form from doing what it normally does
	eventObject.preventDefault();
	
	var $theH1 = $('<h1>');
	$theH1.html($input.val());
	
	$form.append($theH1);
	
	$input.val('');
});



	



