let rangeMinAdvinhar = 1;
let rangeMaxAdivinhar = 15;
let numSorteado = geraNumero();


function exibirNaTela (tag, msg) {
    let campo = document.querySelector(tag);
    campo.innerHTML = msg;
}

exibirNaTela("#texto_Input",`Escolha um numero para jogar de ${rangeMinAdvinhar} a ${rangeMaxAdivinhar}`)
exibirNaTela("#resultado_valor", "Resultado...")

function geraNumero(){
    let numero = (Math.random() * (rangeMaxAdivinhar - rangeMinAdvinhar) + rangeMinAdvinhar);
    return numero.toFixed(0);
}

function chute (){
    let numChute = document.getElementById("chutar").value;
        
    if (numChute == numSorteado) {
        exibirNaTela("#resultado_valor", `Acertou, o numero é ${numSorteado}`);
    }
    else{
        exibirNaTela("#resultado_valor", "Errou");
    }
    limpar();
}

function novoJogo(){
    numSorteado = geraNumero();
    console.log(numSorteado);
    limpar();
}

function limpar() {
    document.getElementById("chutar").value = "";
}
