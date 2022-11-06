<?php include 'DBController.php';
$db_handle = new DBController();
// Required to start sessions
session_start();
// Check if user's login state is true, redirect to the login page if false
if (!isset($_SESSION['loggedin'])) {
	header('Location: login.html');
	exit;
}
if (! empty($query)) {
    foreach ($query as $key => $value) {
?>
    <div class="image">
        <img src="<?php echo $query[$key]["image_path"] ; ?>" />
    </div>
<?php       
    }
}
?>

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8">
<meta name="viewport" content="initial-scale=1">
<!-- Main CSS -->
<link rel="stylesheet" href="main.css">
</head>
<body>
    <div id="gridview">
        <div class="heading">Image File Explorer</div>
        <div class="btn">
            <form name='subimg' id="subimg" method="post" action="" enctype="multipart/form-data">
                <button class="gallery-icon" id="gallery-icon" name="gallery-icon" >Gallery view</button>
                <button class="list-icon" id="list-icon" name="list-icon">List view</button> 
                <input type="button" class="slideshow-icon" id="slideshow-icon" name="slideshow-icon" value="Slideshow"> 
            </form> 
        </div>
        
<?php
$query = $db_handle->runQuery("SELECT * FROM tbl_image ORDER BY id ASC");
if (! empty($query)) {
    foreach ($query as $key => $value) { 
    // Image file explorer view HTML
    }
}
?> 
       </div>

<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <!-- Main JS -->
<script src="main.js"></script>
</body>
</html>