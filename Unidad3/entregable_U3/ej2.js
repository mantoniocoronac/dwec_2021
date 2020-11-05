let cadena = prompt("Dime la cadena");
let separacion = ":";
let arroba = "@";
let cadenaSeparada = cadena.split(separacion);
let emailSeparado = cadenaSeparada[3].split(arroba);

document.write(cadenaSeparada[4]+"<br>");
document.write(cadenaSeparada[1]+"<br>");
document.write(cadenaSeparada[3]+"<br>");
document.write(emailSeparado[1]);