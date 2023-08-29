<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    //Generar codigo aleatorio
    $codigo = strval(rand(1000,9999));

    // Configurarcion de correo

    $subject = "Tu código de 4 números";
    $message = "Tu código es: $codigo";
    $headers = "From: tu_correo@dominio.com";

    // enviar Email

    if (mail($email, $subject, $message, $headers)) {
        echo "Correo enviado correctamente.";
    } else {
        echo "Hubo un problema al enviar el correo.";
    }

}