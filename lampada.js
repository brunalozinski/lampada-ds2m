"use strict"

function buttonOnOf (ligarButton, desligarButton) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")

    ligar.disabled = ligarButton
    desligar.disabled = desligarButton
}

function lampadaQuebrada() {
    return (document.getElementById("lampada").src.indexOf("quebrada") !== -1);
}

function ligarLampada() {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")

    if(!lampadaQuebrada()) {
        lampada.src = "img/ligada.jpg"
        buttonOnOf(true, false)
    }
}

function desligarLampada() {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")

    if(!lampadaQuebrada()) {
        lampada.src = "img/desligada.jpg"
        buttonOnOf(false, true)
    }
}

function quebrarLampada() {
    const lampada = document.getElementById("lampada")

    lampada.src = "img/quebrada.jpg"
    buttonOnOf(true, true)
}


//Eventos
document.getElementById("ligar")
    .addEventListener("click", ligarLampada)

document.getElementById("desligar")
.addEventListener("click", desligarLampada)

document.getElementById("lampada")
.addEventListener("dblclick", quebrarLampada)

document.getElementById("lampada")
.addEventListener("mouseover", ligarLampada)

document.getElementById("lampada")
.addEventListener("mouseleave", desligarLampada)
