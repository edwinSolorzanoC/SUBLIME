import mysql from 'mysql2';

const conexion = mysql.createConnection({
   
});

conexion.connect(function(error){
    if(error){
        console.log("hay error en la conexion")
        console.log("El error es: ")
        console.log(error)
    }else{
        console.log("la conexion a la base de datos es correcta")
    }
});

export default conexion;