'use strict'

// Evento desde el DOM 


var cuadro = document.querySelector("#caja");

function cambiarColor(){
    cuadro.style.width = "600px";
    cuadro.style.height = "200px";
    cuadro.style.background = "black";
    cuadro.style.marginTop = "8px";
    cuadro.style.marginRight = "8px";
    cuadro.style.transition = " 1s ease";
};

// declaramos desde el archivo Js
var boton = document.querySelector('#button');
boton.addEventListener("click", cambiarColor2);

function cambiarColor2(){
    cuadro.style.width = "200px";
    cuadro.style.height = "200px";
    cuadro.style.background = "green";
    cuadro.style.marginTop = "8px";
    cuadro.style.marginRight = "8px";
    cuadro.style.transition = " 1s ease";

};
