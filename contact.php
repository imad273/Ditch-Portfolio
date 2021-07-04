<?php
    if(isset($_POST["send"])){
        $myEmail = "desmad203@gmail.com";
        $subject = "mail test";
        $msg = $_POST['msg'];
        $mail = $_POST['email'];
        $headers = 'From :' . $mail . '\r\n';
        mail($myEmail, $subject, $msg, $headers);
        header("Location: index.php?mailsend");
        exit();
    }
?>