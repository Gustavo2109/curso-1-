const botoes = document.querySelectorAll(".botao");//variavel que armazena todos os itens com a classe botão


for (let i = 0; i < botoes.length; i++) {//loop que executa enquanto i<quantidade de botoes
    botoes[i].onclick = function () {//cria uma função

        for (let j = 0; j < botoes.length; j++) { //logo que executa j<quantidade de botoes
            botoes[j].classList.remove("ativo");//remove a palavra ativo da classe.
        }
        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
    }
}




