<?php
if(isset($_POST['login']))
{
$conn=new mysqli("localhost","root","","technxt");
$lname=$_POST['username'];
$lpassword=$_POST['lpassword'];
$query = "SELECT Email, Password FROM signup WHERE Email='$lname' AND Password='$lpassword'";
$result = mysqli_query($conn,$query);
if (mysqli_num_rows($result) == 1)
{
header("Location:logged_in.html");
session_start();
} 
else 
{
echo "<script type='text/javascript'>alert('Inavlid Username/Password');</script>";
echo "<a href=login_signup.html><font size=16>Go back and try again...</font></a>";
}

$conn->close();
}
?>
