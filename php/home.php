<?php
// Required to start sessions
session_start();
// Check if user's login state is true, redirect to the login page if false
if (!isset($_SESSION['loggedin'])) {
	header('Location: login.html');
	exit;
}
?>