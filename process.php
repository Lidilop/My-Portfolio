<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $question = $_POST["question"];
    $message = $_POST["message"];


    $to = "pulidolidialop@gmail.com";
    $subject = "Message sent from contact form";
    $body = "Name: $name\nPhone: $phone\nEmail: $email\nQuestion: $question\nMessage: $message";
    $headers = "From: pulidolidialop@gmail.com";

    if(mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully";
    }else{
        echo "Error sending message";
    }
}
?>
