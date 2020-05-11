'use strict'

// Las variables 



/*==================
 Nota: JavaSript es sensible a 
 las mayusculas
 ==================== */

//  Nota: comandos en linea ctrl + }
//  comentarios en bloque /* */

// Variables numericas 
var number    = 10; //se puede manejar como variable
                    //local o global, 
let numberDos = 12; //podemos limitar su alcance 
console.log("Este es el numero: " + number);
console.log( typeof(numberDos));
console.log( typeof(number));


// variables de texto 
var string = "palabra";
console.log(string);
console.log(typeof(string));

// variables booleanas 
var boolean = false;
console.log("el valor es: "+ boolean);

// Variables de tipo arreglo (Array)
var objetos = ["carro","casa",'letras',1,2,3,"otro"];
console.log("el valor del arreglo es:" + objetos[6]);
//        0        1         2       3   4   5
//  [  "carro" , "casa" , 'letras' , 1 , 2 , 3];
console.log(objetos);

// variables tipo Objeto 
// ( Objet: propiedad y valor )

var licor = {
    "ingrediente_1"  : 'ron',
    "ingrediente_2"  : 'gaseosa',
    "ingrediente_3"  : 'aguardiente',
};

console.log("resultado : " + licor["ingrediente_3"]);
console.log(licor);

// antes de culminar 

// constantes
// su valor no puede cambiar 
const num = 3.1416;

console.log("el numero es : " + num);
// num = 5555;
console.log("el numero es : " + num);


// Variables, DOM (Document Object Model)
// Extraer datos o interactuar directamente 
// con el HTML 

var caja = document.querySelector('#caja');

caja.style.width = '200px';
caja.style.height = '200px';
caja.style.background = 'red';

var cajas = document.querySelectorAll('.cajas');

console.log(cajas);
console.log(caja);




