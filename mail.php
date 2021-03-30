<?php

                               //CONTACT FORM SUBMITION 

if (isset($_POST['submit'])) {  // proveravamo da li je kontakt forma submitovana
    
    $name = $_POST['name'];
    $mailFrom = $_POST['email']; // proveravamo podatke unete u kontakt formu
    $message = $_POST['message'];      


    $mailTo = "milijana@milijanadjeric.com";
    $header = "From: ".$mailFrom;                                          // prikazujemo podatke unete u kontakt formu unutar naseg mejla
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;


    mail($mailTo, $header, $txt);
    mail($mailTo);
    header("Location: contact.html?mailsend");

    

}

?>


