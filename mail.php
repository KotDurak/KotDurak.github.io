<?php 

	function print_pre($arg){
		print '<pre>'; 
		print_r($arg);
		print '</pre>';
	}

	if(isset($_POST['email'])){
		$mail = htmlentities(stripcslashes($_POST['email'])); 
		$phone = $_POST['phone']; 
		$date = date('d.m.Y H:i');
		$name = $_POST['name'];
		$text = 'Новая заявка: Имя: ' . $name . ', Телефон: ' . $phone . ', Email: ' . $mail . ', Дата: ' . $date;
	}
	mail('info@reputation-plus.ru', 'Новая заявка', $text);
