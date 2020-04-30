let botao_numero = document.getElementsByClassName('numero')
let botao_operacao = document.getElementsByClassName('operacao')
let resultado = document.getElementById('resultado')
let botao_resultar = document.getElementsByClassName('resultar')
let valor = resultado.value

// 9
botao_numero[0].onclick = function(){
    resultado.value += botao_numero[0].innerText
}

// 8
botao_numero[1].onclick = function(){
    resultado.value += botao_numero[1].innerText
}

// 7
botao_numero[2].onclick = function(){
    resultado.value += botao_numero[2].innerText
}

// 6
botao_numero[3].onclick = function(){
    resultado.value += botao_numero[3].innerText
}

// 5
botao_numero[4].onclick = function(){
    resultado.value += botao_numero[4].innerText
}

// 4
botao_numero[5].onclick = function(){
    resultado.value += botao_numero[5].innerText
}

// 3
botao_numero[6].onclick = function(){
    resultado.value += botao_numero[6].innerText
}

// 2
botao_numero[7].onclick = function(){
    resultado.value += botao_numero[7].innerText
}

// 1
botao_numero[8].onclick = function(){
    resultado.value += botao_numero[8].innerText
}

// 0
botao_numero[9].onclick = function(){
    resultado.value += botao_numero[9].innerText
}

// .
botao_numero[10].onclick = function(){
    if (!ponto()){
        resultado.value += botao_numero[10].innerText
        valor = resultado.value
    }
}

// OPERAÇÃO

// +
botao_operacao[0].onclick = function(){
    resultado.value += botao_operacao[0].innerText
}

// -
botao_operacao[1].onclick = function(){
    resultado.value += botao_operacao[1].innerText
}

// *
botao_operacao[2].onclick = function(){
    resultado.value += botao_operacao[2].innerText
}

// /
botao_operacao[3].onclick = function(){
    resultado.value += botao_operacao[3].innerText
}

// RESULTAR

botao_resultar[0].onclick = function(){
    resultado.value += botao_resultar[0].innerText
}

function ponto(){
    for (var i=0; i<valor.length-1; i++){
        if (valor[i] == '.'){
            return false
        }
        return true // Esse return precisa estar fora do for
    }
}

function input(){
    for (var j=0; j<valor.length; i++){
        ponto()
    }
}

function somar(){
	botao_numero1 = botao_numero1 + botao_numero
    if (botao_operacao = '+'){
		resultado = Number.parfeFloat(botao_numero1)+Number.parfeFloat(botao_numero2)
}}


function subtrair(){

}

function multiplicar(){

}

function dividir(){

}