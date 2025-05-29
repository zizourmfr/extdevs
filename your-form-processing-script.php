<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["email"]); //Sanitize the input

    //Validate the email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Store the email in a database or email list
        // Example: store in a text file (for simplicity)
        $file = fopen("email_list.txt", "a");
        fwrite($file, $email . "\n");
        fclose($file);

        echo "Thanks for signing up! We'll notify you when we launch.";

        // Send a confirmation email to the user (optional)
        // You'll need to configure your email settings here.

    } else {
        echo "Invalid email address.";
    }
}
?>