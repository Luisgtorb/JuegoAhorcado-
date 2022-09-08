//  Seccion de Variables globales

var palabras = ["PLAYA", "FIESTA", "PISCINA", "VERANO", "CARRO", "YATE", "MUSICA", "AGUA", "VIAJE", "PELOTA"]; 
var agregarPalabra = document.querySelector(".textarea");
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
// pincel.fillStyle = "green";
// pincel.fillRect(0,0,700,450);

// function dibujarCirculo(){
//     var x = evento.pageX - pantalla.offsetLeft;
//     var y = evento.pageY - pantalla.offsetTop; 
//     pincel.fillStyle = "tomato";
//     pincel.beginPath();
//     pincel.arc(x,y,10,0,2*3.14);
//     pincel.fill();      
// }

// pantalla.onclick = dibujarCirculo;

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
}

function btnAnexar() {
    limpiarBotones();
    agregarNuevaPalabra();
}

// Seccion para el juego, botonoes y canvas

// base
pincel.fillStyle = "darkblue";
pincel.fillRect(175,330,350,10);

// tronco
pincel.fillStyle = "darkblue";
pincel.fillRect(275,80,10,250);

// techo
pincel.fillStyle = "darkblue";
pincel.fillRect(275,80,130,10);

// cuerda
pincel.fillStyle = "darkblue";
pincel.fillRect(405,80,10,65);

// cabeza
pincel.fillStyle = "darkblue";
pincel.beginPath();
pincel.arc(410,179,35,0,3.15*2)
pincel.fill();

pincel.fillStyle = "gainsboro";
pincel.beginPath();
pincel.arc(410,179,28,0,3.15*2)
pincel.fill();

// Cuerpo
pincel.fillStyle = "darkblue";
pincel.fillRect(405,210,10,65);

// brazo izquierdo
pincel.strokeStyle = "darkblue";
pincel.lineWidth = "6.5"
pincel.beginPath();
pincel.moveTo(413,210);
pincel.lineTo(450,260);
pincel.stroke();

pincel.fillStyle = "darkblue";
pincel.beginPath();
pincel.arc(450,260,7,0,3.15*2)
pincel.fill();

// brazo derecho
pincel.strokeStyle = "darkblue";
pincel.lineWidth = "6.5"
pincel.beginPath();
pincel.moveTo(407,210);
pincel.lineTo(370,260);
pincel.stroke();

pincel.fillStyle = "darkblue";
pincel.beginPath();
pincel.arc(370,260,7,0,3.15*2)
pincel.fill();

// Pierna izquierda
pincel.strokeStyle = "darkblue";
pincel.lineWidth = "6.5"
pincel.beginPath();
pincel.moveTo(413,270);
pincel.lineTo(430,330);
pincel.lineTo(445,330);
pincel.stroke();

// Pierna derecha
pincel.strokeStyle = "darkblue";
pincel.lineWidth = "6.5";
pincel.beginPath();
pincel.moveTo(407,270);
pincel.lineTo(390,330);
pincel.lineTo(375,330);
pincel.stroke();

function palabraSecreta() {
    var secreto = Math.floor(Math.random()*palabras.length);
    console.log(palabras[secreto].valueOf());
    console.log(x);
        // for(let i = 0; i <= palabras.length; i++) {
        //     let x = secreto[i];
        //     if(x == i) {
               
            
        //     }
        // }
}
    
function dibujarPalabra(x) {
    pincel.fillStyle = "darkblue";
    pincel.fillRect(x,400,50,5);    
}

for (let x = 160; x<=530; x = x + 80) {
    dibujarPalabra(x);
}

function btnNuevoJuego() {
    palabraSecreta();
}

function btnDesistir() {
    agregarInicio();
    document.getElementById("juego").hidden=true;
}

// Secccion para agregar nueva palabra

function btnNuevaPalabra() {
    palabras.push(agregarPalabra.value.toUpperCase());
    document.getElementById("input-palabra").hidden=true;
    agregarJuego();
    console.log(palabras);
}

function btnCancelar() {
    agregarInicio();
    document.getElementById("input-palabra").hidden=true;
}
