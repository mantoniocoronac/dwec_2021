//Ejercicio 5:
//Escribe un programa que muestre por pantalla una tabla de multiplicar, sumar y dividir. 
//En primer lugar se le pedirá al usuario que introduzca un número entre 2 y 10.
//Si el número no está entre estos dos valores, se le seguirá pidiendo hasta que introduzca el valor correcto.
//Mostrará la tablas de multiplicar, sumar y dividir, utilizando los tres tipos de bucles que hay en JavaScript 
//(para cada tabla, un tipo de bucle diferente).
var msg = prompt("Introduce un numero entre 2 y 10");

while(msg<2 || msg>10){
    var msg = prompt("Introduce un numero entre 2 y 10");
}

for(i = 0;i<=10;i++){
    console.log(msg+" * "+i+" = "+msg*i);
}

var i = 0;
do{
    console.log(msg+" + "+i+" = "+(parseInt(msg)+i));
    i++;
}while(i<11);

var j = 0;

while(j<11){
    console.log(j+" / " + msg + " = "+parseInt(j)/msg);
    j++;
}