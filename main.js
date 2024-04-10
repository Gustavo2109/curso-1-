const botoes = document.querySelectorAll(".botao");//variavel que armazena todos os itens com a classe botão
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {//loop que executa enquanto i<quantidade de botoes
    botoes[i].onclick = function () {//cria uma função

        for (let j = 0; j < botoes.length; j++) { //logo que executa j<quantidade de botoes
            botoes[j].classList.remove("ativo");//remove a palavra ativo da classe.
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
        textos[i].classList.add("ativo");
    }

}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-12-05T00:00:00");
const tempoObjetivo3 = new Date("2024-10-30T00:00:00");
const tempoObjetivo4 = new Date("2024-10-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0) {
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0]
    }

}


function atualizaCronometro(){
for (let i=0; i<contadores.length;i++){
    document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}  

function comecacronometro() {
atualizaCronometro();
setInterval(atualizacronometro, 1000);

}

comecacronometro();