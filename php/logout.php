<?php
//Session has to be started, once logout request is recieved, session can be destroyed
session_start();
session_destroy();
// Redirect to the login page after logged out
header('Location: index.html');
?>