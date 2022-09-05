var palabras = ["PLAYA", "FIESTA", "PISCINA", "VERANO", "CARRO", "YATE", "MUSICA", "AGUA", "VIAJE", "PELOTA"]; 

var agregarPalabra = document.querySelector(".textarea");

function limpiarBotones() {
    document.getElementById("iniciar").hidden=true;
    document.getElementById("anexar").hidden=true;
    document.getElementById("inicio-juego").hidden=true;
}

function agregarNuevaPalabra() {
    document.getElementById("input-palabra").hidden=false;
}

function btnIniciar() {
    limpiarBotones();
}

function btnAnexar() {
    limpiarBotones();
    agregarNuevaPalabra();
}

function btnNuevaPalabra() {
   palabras.push(agregarPalabra.value);
   agregarPalabra.value = " ";
   agregarPalabra.focus();
   console.log(palabras);
}

function btnCancelar() {

}