'use strict'

// Ciclos en JS

/* ===============================
    veremos tres ciclos:

    for
    while 
    do while 

================================== */
// variables let y var 

for (let i = 0; i < 10; i++) {
    // console.log("el numero es (let): " + i);
};
console.log("=========================");
for (var i = 0; i < 10; i++){
    // console.log("el numero es (var): " + i);
};

// ciclo while

var numero = 1;

while (numero <= 10) {
    console.log('el numero ahora es :' + numero);
    // se le incrementa 1 
    numero++;
}

// ciclo do while

var numero2 = 1;

do{
    console.log('el numero es :' + numero2);
    numero2++;
} while (numero2 < 10); 

/* ===============================
    ejemplo practico:

    vamos a modificar las cajas
================================== */

var cajas = document.querySelectorAll(".cajas");

console.log(cajas.length);

for (let i = 0; i < cajas.length; i++) {
    cajas[i].style.width = "160px";
    cajas[i].style.height = "160px";
    cajas[i].style.background = "green";
    cajas[i].style.marginTop = "8px";
    cajas[i].style.marginRight = "8px";
    cajas[i].style.float = "left";

}