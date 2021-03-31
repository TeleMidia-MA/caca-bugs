<?php
   include("config.php");
   include('session.php');
   
   $user_check = $_SESSION['login_user'];
   //session_start();
   $error = "";
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      echo $_SERVER['login_user'];
      $myvalue = mysqli_real_escape_string($db,$_POST['value']);
      $myuser = mysqli_real_escape_string($db,$_SESSION['login_user']);
      $myquestion = mysqli_real_escape_string($db,$_POST['code']);
      $myhasLiked = mysqli_real_escape_string($db,$_POST['like']);

      $sql = "INSERT INTO evaluation(nota, question, user, hasLiked) values ('$myvalue', '$myquestion', '$myuser', '$myhasLiked')";
          
    if (mysqli_query($db, $sql)) {
        header('location: index.php');
    } else {
        echo "Error updating record: " . mysqli_error($db);
      }
   }
?>