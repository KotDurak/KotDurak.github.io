<?php 
header('Content-Type: application/json');
function print_pre($arg){
	print '<pre>'; 
	print_r($arg);
	print '</pre>';
}


$name = $_POST["name"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$EmailTo = "DarkProkuror@yandex.ru";
$Subject = "Новое сообщение";

// готовим тело электронного письма
$Body .= "Имя: ";
$Body .= $name;
$Body .= "\n";

$Body .= "Телефон: ";
$Body .= $phone;
$Body .= "\n";

$Body .= "Сообщеник: ";
$Body .= $message;
$Body .= "\n";

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// отправляем электронную почту
$success = mail($EmailTo, $Subject, $Body);

// перенаправляем на страницу сообщения об успешной отправке данных формы
if ($success){
   echo json_encode(['status' => 'success']);
}else{
     echo json_encode(['status' => 'invalid']);
}


