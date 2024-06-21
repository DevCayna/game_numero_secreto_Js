alert("Olá, Boas vindas ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// Quem é dev sabe a resposta por causa do console rsrsrsrsrs
console.log (numeroSecreto);
let chute;
let quantidadeTentativas = 1;


//Enquanto chute não for igual ao número secreto, irá repetir até acertar
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //condição de acerto
        if (chute == numeroSecreto) 
        break;
        else {
        if (chute > numeroSecreto) { alert (`O número secreto é menor que ${chute}`);
        }
        else { alert (`O número secreto é maior que ${chute}`)};
        quantidadeTentativas++;
    }
}

//Frase de acerto, com quantidade de tentativas
let palavraTentativa = quantidadeTentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! você descobriu o número secreto ${numeroSecreto} com ${quantidadeTentativas} ${palavraTentativa}`);



