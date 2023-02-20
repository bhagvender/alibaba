<?php
$connect = mysqli_connect("bhasudb1.rwlb.japan.rds.aliyuncs.com:3306", "bhasudb1", "Bhasu@123") or die("Connection failed");
if(!empty($_POST['submit']))
{
    $username=$_POST['Email'];
    $password=$_POST['Password'];
    $query = "insert into orglogin(Email, Password) values('$username', $password)";
    if(mysqli_query($connect, $query))
    {
        echo "Record inserted successfully";
        echo "br"."We send you response after verification";
    }
    else
    {
        echo"Soory, there is some error";
    }
}
?>