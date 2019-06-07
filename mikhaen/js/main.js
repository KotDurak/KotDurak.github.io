$(document).ready(function() {
	$(function(){
		$.mask.definitions['9'] = '';
		$.mask.definitions['n'] = '[0-9]';
		$("#phone1").mask("+994(nnn) nnn-nnnn");
	});

	$('#show-card').on('click', function(){
		var D_elem = $(this);
		$('#myModal').modal('show');
	});

	$('.show-feedback').on('click', function(e){
		$('#modal-request').modal('show');
	});

	$("#contact-form").submit(function(event){
		event.preventDefault();
		submitForm();
	});

	function submitForm(){
		 var name = $("#name").val();
		 var phone = $("#phone").val();
  		 var message = $("#message").val();
  		 var data = {name:name, phone:phone, message:message}

  		 $.ajax({
  		 	type:'POST', 
  		 	url: "form-process.php",
  		 	data:data, 
  		 	dataType:'json',
  		 	success:function(data){
  		 		if(data.status == 'success'){
  		 			formSuccess();
  		 		}
  		 	}
  		 });
	}

	function formSuccess(){
		$( "#msgSubmit" ).removeClass( "hidden" );
	}

	$('#submit-field').on('click', function(event){
		var phone = $('#phone1').val();
		if(!phone){
			return;
		}
		var data = {
			phone:phone,
			name:'Имя неизвестно', 
			message:'Без сообщения'
		};
		$.ajax({
  		 	type:'POST', 
  		 	url: "form-process.php",
  		 	data:data, 
  		 	dataType:'json',
  		 	success:function(data){
  		 		if(data.status == 'success'){
  		 			alert('Заявка отправлена');
  		 		}
  		 	}
  		 });
	});
});