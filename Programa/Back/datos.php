<?php
	                                                                                            $conex = mysqli_connect('localhost','root','Juliopor5000');
    mysqli_select_db('databaseusuarios', $con)

    $Correo=$_POST('Correo')
    $Nombre=$_POST['Nombre'];
    $Apellido=$_POST['Apellido'];
    $Codigo=$_POST['Codigo'];


    if($conex->connect_error){
	    die("Connection failed: " . $conn->connect_error);
	    echo "<h2> No nos conectamos<h2>";
    }else{
	    echo "<h2> Si nos conectamos<h2>";
    }

    $sql= "INSERT INTO Persona(email,nombre,apellido,codigo) VALUES ('$Correo','$Nombre','$Apellido','$Codigo')";
    $conex->close();
?>