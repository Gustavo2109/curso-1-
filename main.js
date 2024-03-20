const botoes = document.querySelectorAll(".botao");//variavel que armazena todos os itens com a classe botão
onst textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {//loop que executa enquanto i<quantidade de botoes
    botoes[i].onclick = function () {//cria uma função

        for (let j = 0; j < botoes.length; j++) { //logo que executa j<quantidade de botoes
            botoes[j].classList.remove("ativo");//remove a palavra ativo da classe.
            textos[j].classList.remove("ativo")
        }
        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
        textos[i].classList.add("ativo");
    }

}

const contadores = document.querySelectorAll(".contador");

contadores[0].textContent = "Contagem regressiva";


