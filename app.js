/*let titulo= document.querySelector('h1');
titulo.innerHTML = "Juego del Número Secretoo";

let parrafo= document.querySelector('p');
parrafo.innerHTML= "Indica un número de 1 al 10";
*/
let numeroSecreto=0;//es de alcanze global
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;



function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);//no necesita comillas 
    elementoHTML.innerHTML = texto;
    return;
    //buena practica auqnue no es necesario

}

function verificarIntento(){
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);//para que no retorne un string hay que ponerle el parseInt
    let intentosMaximos=4;
    
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){//el triple igual da más seguridad de que estamos comparando 2 números
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'Vez':'Veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto 
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();
        if(intentos>intentosMaximos){
            alert(`LLEGO AL MÁXIMO ${intentosMaximos} DE INTENTOS`);
            reiniciarJuego();               
    }
}  
    return;

}
function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario')//utilizamos el id 
    valorCaja.value='';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);
    console.log(numeroGenerado);
//si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }else{
    //si el número Generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales() {
    asignarTextoElemento('H1','Juego del Número Secreto!');
    asignarTextoElemento('p',`Indica un número de 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto(); 
    intentos=1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de Intervalos de Numeros
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


//"La valentía no es la ausencia del miedo; es la persistencia a pesar del miedo…" (Desconocido)