//Sabiendo que cuando desplazamos 1 bit a la derecha, dividimos un entero por 2 y cuando lo desplazamos 
//a la izquierda estamos multiplicando por 2. Desarrolla una aplicación que imprima el resultado de las 
//siguientes operaciones empleando desplazamiento de bits:

console.log("125 / 8 = " + (125 >> 3));
console.log("40 x 4 = " + (40 << 2));
console.log("25 / 2 = " + (25 >> 1));
console.log("10 x 16 = " + (10 << 4));