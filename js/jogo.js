let rangeMinAdvinhar = 1;
let rangeMaxAdivinhar = 30;
let tentativas = 10;
let txtTentativa = tentativas > 1 ? "tentativas" : "tentativa";
let numSorteado = geraNumero();
let msg = alert("O jogo funciona da sequinte forma: \nVocê deve informar o valor no campo abaixo e clicar em chutar.\n10 é o maximo de tentativas, caso ultrapasse o jogo é iniciado novamente. Um numero novo é gerado. \nCaso queira jogar novamente, basta clicar em Novo game.\n\n>>>> Boa Sorte <<<<");

function exibirNaTela (tag, msg) {
    let campo = document.querySelector(tag);
    campo.innerHTML = msg;
}

exibirNaTela("#texto_Input",`Adivinhe o numero entre ${rangeMinAdvinhar} e ${rangeMaxAdivinhar}`);
exibirNaTela("#resultado_valor", "");
msg;

function geraNumero(){
    let numero = (Math.random() * (rangeMaxAdivinhar - rangeMinAdvinhar) + rangeMinAdvinhar);
    return numero.toFixed(0);
}

function chute (){
    let numChute = document.getElementById("chutar").value;

    if (numChute == numSorteado) {
        exibirNaTela("#resultado_valor", "Acertou");
    }
    else{
        tentativas-=1;
        if(tentativas==0){
            exibirNaTela("#resultado_valor", `Você perdeu! O número secreto era ${numSorteado}\nIniciando novo jogo...`);
            exibirNaTela("#qtdTentativa","");
            setTimeout(novoJogo,2000);
        }
        else{
            if (numChute > numSorteado){
                exibirNaTela("#resultado_valor", "Numero acima");
            }else{
                exibirNaTela("#resultado_valor", "Numero abaixo");
            }
        exibirNaTela("#qtdTentativa", `${tentativas} ${txtTentativa}`);
        }
    }
    document.getElementById("chutar").value = "";
    return tentativas;
}


function novoJogo(){
    numSorteado = geraNumero();
    limpar();
}

function limpar() {
    document.getElementById("chutar").value = "";
    exibirNaTela("#resultado_valor", "");
    exibirNaTela("#qtdTentativa", "");
    tentativas=10;
}

