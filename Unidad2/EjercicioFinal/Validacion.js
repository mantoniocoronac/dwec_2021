function calcularLetra(){

var dni = document.getElementById("DNI").value;
var letra = document.getElementById("letra").value;

var correcto = false; 

if(dni===''){
    alert("Completar el campo DNI")
    correcto=true;
}

if (isNaN(dni)){
    alert("Teclear un DNI (sin letras, sólo números)");
    correcto=true;
}

    var letras="TRWAGMYFPDXBNJZSQVHLCKE";
    var letraFuncion;
    var resto=dni%23;
            letraFuncion=letras.charAt(x)
    if(letras.charAt(resto)!=letra){
        alert("La letra no es correcta")
        correcto=true;
    }

    if(correcto==false){
        alert("El DNI es correcto")
    }
}