<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set your email address where you want to receive emails
    $to = "moviesovie211@gmail.com";

    // Subject of the email
    $subject = "Contact Form Submission";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";

    // Send email
    mail($to, $subject, $email_message);

    // Redirect back to the contact page with a success message
    header("Location: contact.html?status=success");
} else {
    // Redirect back to the contact page with an error message
    header("Location: contact.html?status=error");
}
?>
