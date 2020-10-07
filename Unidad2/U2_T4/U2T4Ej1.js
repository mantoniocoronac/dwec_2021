//U2T4Ej1 Marco A. Corona

var msg = prompt("Está seguro de que quiere hacer esto?");

if (msg === null){
    alert("Ha rehusado contestar");
}
if(msg.toLowerCase()=='si'){
    alert("Ha respondido si");
}