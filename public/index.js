
let turno = 1
let tabla = document.querySelectorAll("td");
let info = document.getElementById("infoTurn")
let juegoIniciado = false;
let jugadorActivo;
let IaOn = false;
//Combinaciones ganadoras
let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function selectCel(row, column){
    if(!juegoIniciado){
        alert("Empieza una partida y Seleccion Modo");
        return;
    }
    let numCel = row *3 + column;
    tabla[numCel].style.pointerEvents = "none";
    if (jugadorActivo == "Jugador 2" && IaOn == false){

        tabla[numCel].innerHTML = "O";
        
    }else if(jugadorActivo == "Jugador 1"){
        tabla[numCel].innerHTML = "X";
    }
    checkWin()
    gameOver()
    if(juegoIniciado){
        turno++
        jugadorActivo = (jugadorActivo === "Jugador 1") ? "Jugador 2" : "Jugador 1"
        info.innerHTML = `Turno: ${turno} - Jugador Activo: ${jugadorActivo}`;
    
    }
    if (IaOn == true && jugadorActivo == "Jugador 2"){
        const spinner = document.getElementById("spinner");
        spinner.style.display = "block";

        setTimeout(() => {
            spinner.style.display = "none"
            numCel= iaMovement()
            tabla[numCel].innerHTML = "O"
            checkWin()
            gameOver()
            if(juegoIniciado){
                turno++
                jugadorActivo = (jugadorActivo === "Jugador 1") ? "Jugador 2" : "Jugador 1"
                info.innerHTML = `Turno: ${turno} - Jugador Activo: ${jugadorActivo}`;
            }
        },2000);
    }
    

    
}
function gameOver(){
    if (turno === 9 && juegoIniciado == true){
        alert("Empate");
        info.innerHTML = "Fin del Juego. EMPATE"
        juegoIniciado = false;
        document.getElementById("newGame").style.visibility = "visible";

    }
}
function checkWin(){
    


    for(let combination of winCombinations){
        const [a, b, c] = combination
        if(
            tabla[a].textContent != "" &&
            tabla[a].textContent == tabla[b].textContent &&
            tabla[b].textContent == tabla[c].textContent
        ){
            info.innerHTML = `Turno: ${turno} - FIN DEL JUEGO  ${jugadorActivo} Gana`;
            juegoIniciado = false;
           
            for (let i = 0; i < tabla.length; i++) {
                tabla[i].style.pointerEvents = "none";
            }
            document.getElementById("newGame").style.visibility = "visible";
            return
        }
    }
}
function newGame(){
    for (let i = 0; i < tabla.length; i++) {
        tabla[i].innerHTML = "";
        tabla[i].style.pointerEvents = "auto";
    }
    turno = 1;
    document.getElementById("newGame").style.visibility = "hidden";
    document.getElementById("onePlayer").style.visibility = "visible";
    document.getElementById("twoPlayer").style.visibility = "visible";
    info.innerHTML="";


}
function twoPlayer(){
    document.getElementById("onePlayer").style.visibility = "hidden";
    document.getElementById("twoPlayer").style.visibility = "hidden";
    juegoIniciado = true;
    IaOn = false
    jugadorActivo = "Jugador 1"
    info.innerHTML = `Turno: ${turno} - Jugador Activo: ${jugadorActivo}`;

    
}
function onePlayer(){
    document.getElementById("onePlayer").style.visibility = "hidden";
    document.getElementById("twoPlayer").style.visibility = "hidden";
    juegoIniciado = true;
    IaOn = true;
    jugadorActivo = "Jugador 1"
    info.innerHTML = `Turno: ${turno} - Jugador Activo: ${jugadorActivo}`;

}
