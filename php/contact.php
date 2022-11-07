<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// PHONE
if (empty($_POST["phonenum"])) {
    $phone = "N/A";
}
else { 
    $phone = $_POST["phonenum"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// MSG SUBJECT
if (empty($_POST["msg_subject"])) {
    $errorMSG .= "Subject is required ";
} else {
    $msg_subject = $_POST["msg_subject"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}

$EmailTo = "shafferzl@appstate.edu";
$Subject = "New Message Received\n";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
//$success = mail($EmailTo, $Subject, $Body);

//write local
$contact = fopen("contact.txt", "a") or die("Unable to open file");
$txt = ($Subject.$Body."\n");
$success = fwrite($contact, $txt);
fclose($contact);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "Message Sent";
}else{
    if($errorMSG == ""){
        echo "We're sorry, an error occurred. Please try again later.";
    } else {
        echo $errorMSG;
    }
}

?>