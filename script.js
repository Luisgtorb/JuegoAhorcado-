//  Seccion de Variables globales

var palabras = ["PLAYA", "FIESTA", "PISCINA", "VERANO", "CARRO", "YATE", "MUSICA", "AGUA", "VIAJE", "PELOTA"];
var palabraSecreta = "";
var caracter = [];
var errores = 8;
var agregarPalabra = document.querySelector(".textarea");
var pantalla = document.getElementById("pantalla");
var pincel = pantalla.getContext("2d");

// Seccion de Requisitos para desarrollar el proyecto

// - Debe funcionar solo con letras mayúsculas;
// - No deben ser utilizadas letras con acentos ni caracteres especiales;
// - Al completar o dibujo de la horca, debe ser mostrado un mensaje "Fin del juego" en la pantalla;
// - Si se completa la palabra correcta antes de que se acaben los intentos, debe ser mostrado un mensaje de "Ganaste, Felicidades!" en la pantalla.
// - La página debe tener los guiones indicando cada letra da palabra, separados por un espacio;
// - Para comenzar el juego la página debe tener un botón de "Iniciar Juego";
// - No debe ser posible escribir números dentro del juego.
// - Las letras equivocadas deben aparecer en la pantalla, pero no pueden aparecer de forma repetida;
// - Las letras correctas deben aparecer en la pantalla encima de los guiones, en la posición correcta em relación a la palabra.

// Seccion de funciones adicionales

function limpiarBotones() {
    document.getElementById("iniciar").hidden=true;
    document.getElementById("anexar").hidden=true;
    document.getElementById("inicio-juego").hidden=true;
}

function agregarNuevaPalabra() {
    document.getElementById("input-palabra").hidden=false;
}

function agregarJuego() {
    document.getElementById("juego").hidden=false;
}

function agregarInicio() {
    document.getElementById("iniciar").hidden=false;
    document.getElementById("anexar").hidden=false;
    document.getElementById("inicio-juego").hidden=false;
}

// Seccion principal, botones principales

function btnIniciar() {
    limpiarBotones();
    agregarJuego();
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarGuion(198);
    acierto();
}

function btnAnexar() {
    limpiarBotones();
    agregarNuevaPalabra();
}

// Seecion del juego

function escogerPalabraSecreta() {
    let secreto = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = secreto;
    console.log(palabraSecreta);
}

function teclado(key) { 
        if(key >= 65 && caracter.indexOf(key) || key <= 90 && caracter.indexOf(key)) {
            caracter.push(key);
            console.log(key);
            return false       
        } else {
            console.log(key);
            return true
        }
}

function acierto() {
    
    document.onkeydown = (event) => {
        var name = event.key.toUpperCase();
            if(teclado(name) && palabraSecreta.includes(name)) {
                for(let i = 0; i < palabraSecreta.length; i++) {
                    if(palabraSecreta[i] === name) {
                        dibujarLetraCorrecta(i);
                    }
                }
            } else {
                dibujarLetraIncorrecta(name,errores);
                agregarError(name)
            }
        
        
    }
}

function agregarError() {
    errores -= 1;
    if(errores <= 0){
        errores = 8;
    }  
    if(errores == 7){
        dibujarTronco();
    }
    if(errores == 6){
        dibujarTecho();
    }
    if(errores == 5){
        dibujarCuerda();
    }
    if(errores == 4){
        dibujarCabeza();
    }
    if(errores == 3){
        dibujarCuerpo();
    }
    if(errores == 2){
        dibujarBrazos();
    }
    if(errores == 1){
        dibujarPiernas();
    }
    if(errores == 0){
        dibujarMuerte();
    }
    console.log(errores);
}

function btnNuevoJuego() {
    escogerPalabraSecreta();
    dibujarCanvas();
    dibujarGuion(198);
    acierto();
}

function btnDesistir() {
    agregarInicio();
    document.getElementById("juego").hidden=true;
}

// Secccion para agregar nueva palabra

function btnNuevaPalabra() {
    palabras.push(agregarPalabra.value.toUpperCase());
    document.getElementById("input-palabra").hidden=true;
    agregarPalabra.value = "";
    agregarJuego();
    dibujarGuion(198);
    console.log(palabras);
}

function btnCancelar() {
    agregarInicio();
    document.getElementById("input-palabra").hidden=true;
}
