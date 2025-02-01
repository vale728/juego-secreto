//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo() {
    return console.log("Hola Mundo!!");
}
saludo();
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en
//  la consola.

function saludoP(nombre) {
    console.log(`Hola ${nombre}!!!`);
    return;
}
saludoP("Valeria");
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(num) {
    return num*2; 
}
let resultado= doble(4);
console.log(`El doble es ${resultado}`);

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1,num2,num3) {
    return (num1+num2+num3)/3;
    
}
let prom=promedio(4,18,15);
console.log(`El promedio de los 3 numeros es ${prom}`);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(n1,n2) {
    return n1>n2 ? n1:n2 ; 
}
let numMayor= numeroMayor(7,10);
console.log(`El número mayor es ${numMayor}`);

//Crear una función que reciba un número como parámetro y devuelva el resultado de 
// multiplicar ese número por sí mismo.

function multiplicarNumero(n) {
    return n*n;
}
let resul= multiplicarNumero(8);
console.log(`El resultado de multiplicar dos veces el mismo número es ${resul}`);
