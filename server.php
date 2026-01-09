<?php

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(403);
  exit("Access denied");
}

$name = htmlspecialchars(trim($_POST["name"] ?? ""));
$email = filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars(trim($_POST["message"] ?? ""));

if (!$name || !$email) {
  exit("Invalid input");
}

/* Example: send email */
mail("your@email.com", "Portfolio Contact", $message, "From: $email");

echo "Message received successfully";

?>
