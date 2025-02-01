//Crea una función que calcule el índice de masa corporal (IMC) de una persona
// a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function masaCorporal(altura,peso) {
    let imc= peso / (altura * altura);
    return imc;
}
 console.log(masaCorporal(1.50,55));


//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorial(x) {
    if(x===0 || x===1){
        return 1;
    }else{
        return x*factorial(x-1);
    }

}
let numero=6;
let resultado=factorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`);


//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el
//  valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del
//  dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertorDolares(valor) {
    let cotización=4.80;
    let valorReal=valor*cotización;
    return valorReal;
}
let valor=50;
let valorVerdadero=convertorDolares(valor);

console.log(`El valor de ${valor} en dolares es de: ${valorVerdadero}`)
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
//  utilizando la altura y la anchura que se proporcionarán como parámetros.
function area(altura,anchura) {
    let ar= (altura*anchura);
    console.log(`Area: ${ar} `);
}
function perimetro(altura,anchura) {
    let per= (altura*2)+(anchura*2);
    console.log(`Perimetro: ${per} `);
}
area(120,60);
perimetro(120,60);


//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
// utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function areaPerimetro(radio) {
    let pi=3.14;
    area= pi*radio*radio;
    perimetro=2*pi*radio;
    console.log(`El area de una sala circular es: ${area}`);
    console.log(`El perimetro de una sala circular es: ${perimetro}`); 
}
areaPerimetro(15),


//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado 
// como parámetro.
function tabla(n) {
    for(let i=1; i<=12; i++){
        let resultado= n*i;
        console.log(`${n} * ${i} = ${resultado}`);
    }
}
tabla(8);
