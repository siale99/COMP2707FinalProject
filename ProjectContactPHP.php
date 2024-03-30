<?php
// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set recipient email address
    $to = 'computerscience@uwindsor.ca'; 

    // Set email subject
    $subject = 'Message from Computer Science Hub Contact Form';

    // Set email headers
    $headers = "From: $name <$email>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";

    // Compose email message
    $email_message = "Name: $name<br>";
    $email_message .= "Email: $email<br>";
    $email_message .= "Message:<br>$message";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        http_response_code(200); // Set success response code
    } else {
        http_response_code(500); // Set error response code
    }
}
?>
