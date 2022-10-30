<?php
session_start();
// Connection info
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'phplogin';
// Try and connect using the connection info
$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
// If an error occurs, authenticate will exit and print the error
if ( mysqli_connect_errno() ) {
	exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}
// Confirm the user's input is valid
if ( !isset($_POST['username'], $_POST['password']) ) {
	// Invalid login info was provided
	exit('Please fill both the username and password fields!');
}
// Prepare SQL statement
if ($stmt = $con->prepare('SELECT id, password FROM accounts WHERE username = ?')) {
	// Bind parameters (s = string, i = int, b = blob, etc), where username is a string 's'
	$stmt->bind_param('s', $_POST['username']);
	$stmt->execute();
	// Store the result to prepare to check the database for it
	$stmt->store_result();
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $password);
        $stmt->fetch();
        // Usernamed confirmed, confirm the password next
        // Ensure some form of encryption (Only password_hash works with password_verify) is used in registration for storing registration info
        if (password_verify($_POST['password'], $password)) {
            // Password confirmed, user is now logged in
            // Create sessions to save the user's login state
            session_regenerate_id();
            $_SESSION['loggedin'] = TRUE;
            $_SESSION['name'] = $_POST['username'];
            $_SESSION['id'] = $id;
            echo 'Welcome ' . $_SESSION['name'] . '!';
        } else {
            // Incorrect password, user's login state remains false
            echo 'Password and/or username is incorrect';
        }
    } else {
        // Incorrect username, user's login state remains false
        echo 'Password and/or username is incorrect';
    }
	$stmt->close();
}
?>