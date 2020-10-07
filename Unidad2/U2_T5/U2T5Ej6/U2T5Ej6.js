//Escribe un programa que pida al usuario un día de la semana y que muestre por consola el día siguiente. 
//Si se introduce un valor que no corresponda a un día de la semana, se le mostrará un mensaje al usuario.

var msg = prompt("Introduzca un dia de la semana");

if (msg<1 || msg > 7){
    console.log("Parametro no valido")
}

var dia = parseInt(msg);
switch(dia){
    case 1:
        console.log("Martes");
        break;
    case 2:
        console.log("Miercoles");
        break;
    case 3:
        console.log("Jueves");
        break;
    case 4:
        console.log("Viernes");
        break;
    case 5:
        console.log("Sabado");
        break;
    case 6:
        console.log("Domingo");
        break;
    case 7:
        console.log("Lunes");
        break;
}