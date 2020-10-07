//Declaracion de variables
var i;
var j = 500;
var rep = 0;
var noPrimos = 0;
//Bucle del 0 al 500
for (i = 1; i <= j; i++) {
    //Veo los multiplos de 3
    if(i % 3 == 0){
        console.log(i);

        //Veo los numeros que no son primos y los voy sumando a una variable
        if (!primo(i)){
            noPrimos++
        }

    }
    document.write("<br>");
}

    console.log("El numero de no primos es " + noPrimos)

//funcion primo
function primo(numero) {

    for (var i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
  
    }
  
    return numero !== 1;
  }