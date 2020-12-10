window.onload = iniciar;
function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}
function comprobarNombre(){
    let nombre = document.getElementById("nombre");
    limpiarClase(nombre)
    if(nombre.value===""){
        document.getElementById("error").innerHTML = "El nombre no es valido";
        error(nombre)
        return false;
    }
    correcto(nombre)
    return true;

}
function comprobarSeleccionable(){
    let modelo = document.getElementById("modelo").value;
    if(modelo === "0"){
      document.getElementById("error").innerHTML = "Selecciona un modelo";
      return false;
    }
      return true;
}

function comprobarFecha(){
    let fecha = document.getElementById("fecha");
    limpiarClase(fecha)
    //Aqui la fecha es que tiene que ser numerica del 0 al 9 los 2 primeros con un maximo de 2 de longitud y 
    // separados por / y la ultima es igual que las otras 2 pero tiene de longitud 4 
    let regexFecha = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    if(!regexFecha.test(fecha.value)){
        document.getElementById("error").innerHTML = "Fecha erronea";
        error(fecha)
        return false;
      }
      correcto(fecha)
      return true;
}

function comprobarConsumo(){
    let consumo = document.getElementById("consumo");
    limpiarClase(consumo)
    //En esta expresion guardo las opciones validas y estan en un () para que solo acepte 1 de ellas las \antes del + es para indicar que quiero guardar el caracter +
    let regexConsumo = /^(A\+\+\+|A\+\+|A\+|A|B|C|D)$/;
    if(!regexConsumo.test(consumo.value)){
        document.getElementById("error").innerHTML = "Consumo invalido";
        error(consumo)
        return false;
      }
      correcto(consumo)
      return true;
}

function comprobarReferenciaModel(){
    let referencia = document.getElementById("referencia");
    limpiarClase(referencia)
    //En esta expresion los 2 primeros caracteres pueden ser de la A la Z en mays los siguientes 2 tienes que ser 2 numeros del 0 al 9 lo siguiente cualquier letra mayuscula de la A la Z luego un numero entre 300 y 8000 que puede ser de 3 o 4 de longitud luego obligatoriamente AF mayusculas depues puede ser cualquiera de las letras X Y Z y finalmente la Z o z
    let regexModel = /^([A-Z]{2})([0-9]{2})([A-Z]{1})([300-8000]{3,4})(AF)(X|Y|Z)(Z|z)$/;
    if(!regexModel.test(referencia.value)){
        document.getElementById("error").innerHTML = "Referencia de modelo no valida";
        error(referencia)
        return false;
    }
    correcto(referencia)
    return true;
}

function comprobarPassword(){
    passw = document.getElementById("passw");
    limpiarClase(passw)
//Esta expresion primero coge el # obligatorio luego 2 letras minusculas obligatorias luego entre 8 y 16 caracteres palabras despues le digo que no acepte ni letras ni numeros ni & y luego que ponga un numero entre 3 7 9
    let regexPassw = /^(#)([a-z]{2})([a-zA-Z]{8,16})([^&A-Za-z0-9])(3|7|9)$/;
    if(!regexPassw.test(passw.value)){
        document.getElementById("error").innerHTML = "Contraseña no valida";
        error(passw)
        return false;
    }
    correcto(passw)
    return true;
}

function limpiarClase(elemento){
    elemento.classname = "correcto";
  }
  
  function error(elemento) {
    elemento.className = "error";
    elemento.focus();
  }

  function correcto(elemento) {
    elemento.className = "correcto";
    elemento.focus();
  }


  function numRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function crearCookie() {
    let numeroRandm = Math.floor(nunRandom(1000, 2001));
    let d = new Date();
    d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
    let expiracion = "expires=" + d.toUTCString();
    document.cookie = "referencia" + "=" + numeroRandm + ";" + expiracion + ";path=/";
}




function validar(e){
    if(comprobarNombre() && comprobarSeleccionable() && comprobarFecha() && comprobarConsumo() && comprobarReferenciaModel() && comprobarPassword() ){
        return true;
    } else {
      e.preventDefault();
      return false;
    }
}
