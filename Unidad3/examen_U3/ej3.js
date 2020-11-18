let cadena = prompt("Dime la cadena tipo tipo_producto|modelo|cantidad@cz");
let separacion = "|";
let arroba = "@";
let cadenaSeparada = cadena.split(separacion);
let zonaSeparado = cadenaSeparada[2].split(arroba);



tipoproducto = false;
modelo = false;
cantidad = false;
zona = false;

if(cadenaSeparada[0] == "televisor" || cadenaSeparada[0] == "tablet" || cadenaSeparada[0] == "smartphone" || cadenaSeparada[0] == "laptop"){
    tipoproducto = true;
}else{
    alert("tipo_producto no valido");
}

if(cadenaSeparada[1].length==6 && cadenaSeparada[1].charAt(0)!=isNaN && cadenaSeparada[1].charAt(1)!=isNaN && cadenaSeparada[1].charAt(2)!=isNaN){
    modelo=true;
}else{
    alert("modelo no valido");
}

if(Number.isInteger(parseInt(zonaSeparado[0]))){
    cantidad = true;
}else{
    alert("cantidad no valida");
} 

if(zonaSeparado[1]=="HU" || zonaSeparado[1]=="CA" || zonaSeparado[1]=="SE"){
    zona=true;
}else{
    alert("zona no correcta");
}

if(tipoproducto==true && modelo==true && cantidad==true && zona==true){
    document.getElementById("tipo_producto").innerHTML = "Tipo_producto=" + cadenaSeparada[0];
    document.getElementById("modelo").innerHTML = "Modelo="+cadenaSeparada[1];
    document.getElementById("cantidad").innerHTML = "Cantidad="+zonaSeparado[0];
    document.getElementById("zona").innerHTML = "Zona="+zonaSeparado[1];
}

//televisor|ASD123|1@HU


