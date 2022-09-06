//  Seccion de Variables globales

var palabras = ["PLAYA", "FIESTA", "PISCINA", "VERANO", "CARRO", "YATE", "MUSICA", "AGUA", "VIAJE", "PELOTA"]; 
var agregarPalabra = document.querySelector(".textarea");
var pantalla = document.querySelector(".pantalla");

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
}

function btnAnexar() {
    limpiarBotones();
    agregarNuevaPalabra();
}

// Seccion para el juego, botonoes y canvas

function btnDesistir() {
    agregarInicio();
    document.getElementById("juego").hidden=true;
}

// Secccion para agregar nueva palabra

function btnNuevaPalabra() {
   palabras.push(agregarPalabra.value);
   agregarPalabra.value = " ";
   agregarPalabra.focus();
   console.log(palabras);
}

function btnCancelar() {
    agregarInicio();
    document.getElementById("input-palabra").hidden=true;
}
