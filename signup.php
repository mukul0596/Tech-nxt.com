<?php
if(isset($_POST['signup']))
{
$conn=new mysqli("localhost","root","","technxt");
$sname=$_POST['name'];
$sgender=$_POST['gender']['value'];
$sYOB=$_POST['yob'];
$semail=$_POST['email'];
$spassword=$_POST['password'];
$cspassword=$_POST['cpassword'];
$query = "SELECT Email FROM signup WHERE Email='$semail'";
$result = mysqli_query($conn,$query);
if(mysqli_num_rows($result)>0)
{
echo "<script type='text/javascript'>alert('Email Id already exists!');</script>";
echo "<br><a href=login_signup.html><font size=16>Go back to previous page and try again...</font></a>";
}
else
{
if($spassword==$cspassword)
{
$sql="insert into signup values('$sname','$sgender','$sYOB','$semail','$spassword')";
if($conn->query($sql)===TRUE)
{
header("Location:logged_in.html");
echo "<script type='text/javascript'>alert('Successfully! Signed in');</script>";
}
else
echo "Oops! something went wrong";
}
else
{
echo "<script type='text/javascript'>alert('Both password do not match!');</script>";
echo "<br><a href=login_signup.html><font size=16>Go back to previous page and try again...</font></a>";
}
}
$conn->close();
}
?>
