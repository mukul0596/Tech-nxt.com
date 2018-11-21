<?php
if(isset($_POST['ssubmit']))
{
$conn=new mysqli("localhost","root","","technxt");
$stitle=$_POST['stitle'];
$sdescribe=$_POST['sdescribe'];
$sql="insert into share values('$stitle','$sdescribe')";
if($conn->query($sql)===TRUE)
echo "<br>";
else
echo "Oops! something went wrong";
$conn->close();

$path = "upload/";
$path = $path.basename( $_FILES['simage']['name']);
if(move_uploaded_file($_FILES['simage']['tmp_name'], $path))
{
echo "<video autoplay width=100% height=90%>
<source src="Data/video/thank you.mp4" type="video/mp4">
</video> 
<a href=profile.html><font size=16>Back to surfing...</font></a>";
}
else
echo "Oops! Something went wrong. Try again";
}
?>