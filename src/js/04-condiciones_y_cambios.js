'use strict'

/* ====================
    Condiciones 

    es toda sentencia de la cual se puede determinar
    su verdad (True) o falsedad (False);
======================== */

var a = 2;
var b = 2;

/* ==========================
    Nota:
        el ciclo if lo podemos anidar de forma 
        infinita con el fin de evaluar una condicion 
        de mayor, menor, igual, o diferente.

        entre otras.
============================ */

if (a > b) {
    console.log("la variable A es mayor que la B");
}else if (b > a) {
    console.log("la variable B es mayor que la A");
}else {
    console.log("las dos variables son iguales");
}

// cambios o switch()

var accion = "dd";
var n_1 = 10;
var n_2 = 20;

switch (accion) {
    case "suma":
        var resultado = (n_1 + n_2)*5; 
        console.log("suma : " + resultado);
        break;
    case "resta":
        var resultado = (n_1 - n_2) + 5; 
        console.log("resta : " + resultado);
        break;
    default:
        console.log("error en la accion ");
        break;
}