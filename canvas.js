// Seccion para el juego, botonoes y canvas

function dibujarCanvas() {
    pincel.fillStyle = "gainsboro";
    pincel.fillRect(0,0,750,450);

    // base
    pincel.fillStyle = "darkblue";
    pincel.fillRect(215,330,350,10);
}

function dibujarGuion(x) {
    let guion = 400/palabraSecreta.length;
    for(let i = 0; i < palabraSecreta.length; i++) {
        pincel.fillStyle = "darkblue";
        pincel.fillRect(x + (guion*i), 390, 45, 5);
    }
    
}

function dibujarLetraCorrecta(index) {
    pincel.fillStyle = "#518169";
    pincel.font = "25px Times New Roman";
    var guion = 400/palabraSecreta.length;
    pincel.fillText(palabraSecreta[index],198+12+(guion*index),385);  
}

function dibujarLetraIncorrecta(name, errorsLeft) {
    pincel.fillStyle = "#ff6f69";
    pincel.font = "20px Times New Roman";
    pincel.fillText(name, 260+(20*(10-errorsLeft)),440,20);
}

function dibujarTronco() {
    pincel.fillStyle = "darkblue";
    pincel.fillRect(275,80,10,250);
}  

function dibujarTecho() {
    pincel.fillStyle = "darkblue";
    pincel.fillRect(275,80,130,10);
}

function dibujarCuerda() {
    pincel.fillStyle = "darkblue";
    pincel.fillRect(405,80,10,65);
}

function dibujarCabeza(){
    pincel.fillStyle = "darkblue";
    pincel.beginPath();
    pincel.arc(410,179,35,0,3.15*2)
    pincel.fill();

    pincel.fillStyle = "gainsboro";
    pincel.beginPath();
    pincel.arc(410,179,28,0,3.15*2)
    pincel.fill();
}

function dibujarCuerpo() {
    pincel.fillStyle = "darkblue";
    pincel.fillRect(405,210,10,65);
}

function dibujarBrazos() {
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
}

function dibujarPiernas(){
    pincel.strokeStyle = "darkblue";
    pincel.lineWidth = "6.5"
    pincel.beginPath();
    pincel.moveTo(413,270);
    pincel.lineTo(430,330);
    pincel.lineTo(445,330);
    pincel.stroke();

    pincel.strokeStyle = "darkblue";
    pincel.lineWidth = "6.5";
    pincel.beginPath();
    pincel.moveTo(407,270);
    pincel.lineTo(390,330);
    pincel.lineTo(375,330);
    pincel.stroke();
}

function dibujarMuerte(){
    pincel.fillStyle = "red";
    pincel.beginPath();
    pincel.arc(410,179,35,0,3.15*2)
    pincel.fill();

}