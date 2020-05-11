

/* ===========================
    Nota:
        tenemos dos tipos de variables 
        Locales let 
        Globales var 

        ademas de las constantes
        const 

        son acciones programadas 

==============================*/

// Funciones sin parametro 

var global = 10;

function suma (){
    let numero = 5;
    let r = global + numero;
    console.log(" El resultado es : " + r);
};

// Funciones con parametro 

function suma2(num_1 , num_2){
    var resultado = (num_1 + num_2) * global;
    console.log("El resultado es : " + resultado);
};

// Ejecutamos la funcion 
// una funcion no se ejecuta si no 
// se le hace el llamado 
suma();
suma2( 2 , 10 );


/* ===============================
    
    Funciones con retorno y sin retorno
    
 ================================= */


// Con retorno 

function numero1 () {
    let n = 20;
    return n;
};
console.log(" el numero es :" + numero1());

// Funciones con retorno y con parametros

function numero2( nu1 , nu2){
    let result = nu1 + nu2;
    return result;
};

console.log("El resultado es :" + numero2(2 , 10));