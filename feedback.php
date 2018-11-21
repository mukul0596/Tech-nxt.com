<?php

if(isset($_POST["fsubmit"]))
{
$conn=new mysqli("localhost","root","","technxt");

$fname=$_POST['fname'];
$fphone=$_POST['fphone'];
$femail=$_POST['femail'];
$fcomment=$_POST['fcomment'];
$sql="insert into feedback values('$fname','$fphone','$femail','$fcomment')";
if($conn->query($sql)===TRUE)
echo "<font size=20 color=red>Thanks for your feedback!</font>
<video autoplay width=100% height=90%>
<source src="Data/video/thank you.mp4" type="video/mp4">
</video> 
<a href=profile.html><font size=16>Back to surfing...</font></a>";
else
echo "Oops! something went wrong";
$conn->close();

}
?>
