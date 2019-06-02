$(document).ready(function() {
	$(function(){
	  $.mask.definitions['9'] = '';
	  $.mask.definitions['n'] = '[0-9]';
	  $("#phone1").mask("+994(nnn) nnn-nnnn");
	});
});