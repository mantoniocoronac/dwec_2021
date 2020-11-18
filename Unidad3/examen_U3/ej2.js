let cadena = prompt("Dime la cadena");

let letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"," "];
let contador = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


for(let i =0;i<cadena.length;i++){
    
    for(let j = 0;i<=letras.length;j++){
        if(letras[j]==cadena.charAt(i)){
            contador[j]++;
            break;
        }
    }

}

for(let x = 0; x<letras.length;x++){
    document.write("La letra "+letras[x]+" se repite "+contador[x]+" veces<br>")
}