window.onload = iniciar;
function iniciar() {
  document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombreyApellidos(){
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    limpiarClase(nombre);
    limpiarClase(apellidos);
    if (nombre.value === "") {
    document.getElementById("errores").innerHTML = "El nombre no es valida";
    error(nombre);
    return false;
    }
    if (apellidos.value === ""){
      document.getElementById("errores").innerHTML = "Los apellidos no son validos"
      error(apellidos);
      return false;
    }
    return true;
  }

  function validarEdad(){
    edad = document.getElementById("edad");
    limpiarClase(edad);
//Esta expresion regular te obliga a sea numerica y con un rango entre 0 y 105
    if(!/^([0-9])$|^([1-9][0-9])$|^([1]?[0][0-5])$/.test(elemento.value)){
      document.getElementById("errores").innerHTML = "La edad no es valida";
      error(edad);
      return false;
    }
    return true;
  }


  function validarDNI(){
    nif = document.getElementById("nif");
    limpiarClase(nif);

//Esta validacion te obliga a poner 8 numeros, te obliga a poner el guion y luego 1 letra.
    if(!/^\d{8}\-[a-zA-Z]$/.test(nif.value)){
      document.getElementById("errores").innerHTML = "El dni no es valido";
      error(nif);
      return false;
    }else{
    return true;
  }
}

  function validarEmail() {
    email = document.getElementById("email").value;
    limpiarClase(email);

//La primera parte de la validacion valida que sea de la a la z tanto mays como mins y nums del 1 al 9,
//te obliga a usar la @ despues es igual que la primera parte,te obliga a poner el . y el dominio que sea de 2 a 4 letras o nums.
    if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
      document.getElementById("errores").innerHTML = "El email no es valido";
      error(email);
      return false;
    }
    return true;
  }

  function validarProvincias(){
    provincia = document.getElementById("provincia").value;
    limpiarClase(provincia);

    if(provincia === "0"){
      document.getElementById("errores").innerHTML = "Selecciona una provincia";
      error(provincia);
      return false;
    }
      return true;
  }

  function validarFecha(){
    fecha = document.getElementById("fecha");
    limpiarClase(fecha);
    //En esta expresion te obliga a coger los 2 primeros dos numeros del 1 al 9 para la fecha separados por / y el ultimo igual pero de 4 digitos de longitud
    if(!/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/.test(fecha.value)){
      document.getElementById("errores").innerHTML = "Fecha erronea";
      error(fecha);
      return false;
    }
    return true;
  }

  function validarTelefono() {
    telefono = document.getElementById("telefono");
    limpiarClase(telefono);
//En el telefono la expresion lo unico que pide es que sean numeros y con maximo de 9 de longitud
    if (!/^\d{9}$/.test(telefono.value)) {
      document.getElementById("errores").innerHTML = "Telefono erroneo";
      error(telefono);
      return false;
    }
    return true;
  }

  function validarHora(){
    hora = document.getElementById("hora");
    limpiarClase(hora);
//En la hora la expresion sirve para validar la hora que sea numero con maximo 2 longitud separado por : y los minutos igual
    if(!/^\d{2}:\d{2}$/g.test(hora.value)){
      document.getElementById("errores").innerHTML = "Hora erronea";
      error(hora);
      return false;
    }
    return true;
  }

function limpiarClase(elemento){
  elemento.classname = "";
}

function error(elemento) {
  elemento.className = "error";
  elemento.focus();
}



function validar(e){
  if(validarNombreyApellidos() && validarEdad()  && validarDNI() && validarEmail() && 
     validarProvincias() && validarFecha() && validarTelefono() && validarHora() && confirm("Desea avanzar a la siguiente pagina")){
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}