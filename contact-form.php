<?php

if (isset($_POST['submit'])) {  // proveravamo da li je kontakt forma submitovana
    
    $name = $_POST['name'];
    $mailFrom = $_POST['email']; // proveravamo podatke unete u kontakt formu
    $message = $_POST['message'];      


    $mailTo = "moja mejl adresa na koju dolaze podaci iz kontakt forme";
    $header = "From: ".$mailFrom;                                          // prikazujemo podatke unete u kontakt formu
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;


    mail($mailTo, $txt, $header);
    header("Location: index.html?mailsend");

}

?>