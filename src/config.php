<?php
   //define('DB_SERVER', 'db-caca-bugs');
   //define('DB_USERNAME', 'root');
   //define('DB_PASSWORD', 'opECcbQ^tF!EA');
   //define('DB_DATABASE', 'caca_bugs');
   $db = mysqli_connect(getenv("DB_SERVER"),getenv("DB_USERNAME"),getenv("DB_PASSWORD"),getenv("DB_DATABASE")) or die(mysql_error());
?>