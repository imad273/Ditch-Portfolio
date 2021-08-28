<?php
    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $to = "desmad203@gmail.com";
        $subject = "Message from website";
        $msg = $_POST["msg"];
        $name = $_POST['name'];
        $email = $_POST['address'];
        $headers = "from:" . $name . "\r\n" .  "address: " . $email; 
        header("location: index.html");
        exit();
    }
?>