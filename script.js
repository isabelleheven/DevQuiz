let principal = document.querySelector("#principal");
let questoes = [
    { 
        pergunta: "1 - Qual é a diferença entre <section> e <div> no HTML?",
        opcoes: [
            { texto: "<div> é usado para imagens e <section> para texto.", valor: "A" },
            { texto: "<section> tem significado semântico, <div> é genérico.", valor: "B" },
            { texto: "<div> e <section> são iguais.", valor: "C" },
            { texto: "<section> só pode ser usado dentro de <article>.", valor: "D" }
        ],
        respostaCorreta: "B"
    },
    { 
        pergunta: "2 - O que significa CSS?",
        opcoes: [
            { texto: "Cascading Style Sheets", valor: "A" },
            { texto: "Computer Style System", valor: "B" },
            { texto: "Centralized Style Sheets", valor: "C" },
            { texto: "Code Style Syntax", valor: "D" }
        ],
        respostaCorreta: "A"
    },
    { 
        pergunta: "3 - Como se declara uma variável em JavaScript?",
        opcoes: [
            { texto: "var nome = 'João';", valor: "A" },
            { texto: "variable nome = 'João';", valor: "B" },
            { texto: "v nome = 'João';", valor: "C" },
            { texto: "let nome == 'João';", valor: "D" }
        ],
        respostaCorreta: "A"
    },

    { 
        pergunta: "4 - O que significa a propriedade z-index no CSS?",
        opcoes: [
            { texto: "Controla a opacidade dos elementos", valor: "A" },
            { texto: "Controla a ordem de empilhamento dos elementos na página", valor: "B" },
            { texto: "Determina a largura do elemento", valor: "C" },
            { texto: "Define um zoom automático na página", valor: "D" }
        ],
        respostaCorreta: "B"
    },

    { 
        pergunta: "5 - Como selecionar todos os elementos <p> dentro de uma <div> específica usando CSS?",
        opcoes: [
            { texto: "p div {}", valor: "A" },
            { texto: "div p {}", valor: "B" },
            { texto: "#div > p {}", valor: "C" },
            { texto: "div, p {}", valor: "D" }
        ],
        respostaCorreta: "B"
    },

    {
        pergunta: '6 - Qual é a saída do código "console.log(1 + "1" - 1);?"',

        opcoes: [
            { texto: '"11"', valor: "A" },
            { texto: "10", valor: "B" },
            { texto: "1", valor: "C" },
            { texto: "NaN", valor: "D" }
        ],
        respostaCorreta: "B"
    },

    {
        pergunta: '7 - Qual destes métodos NÃO altera diretamente o array original em JavaScript?',

        opcoes: [
            { texto: 'map()', valor: "A" },
            { texto: "push()", valor: "B" },
            { texto: "slice()", valor: "C" },
            { texto: "pop()", valor: "D" }
        ],
        respostaCorreta: "A"
    },

    {
        pergunta: '8 - O que significa o operador == em JavaScript?',

        opcoes: [
            { texto: 'Compara se dois valores são iguais, sem considerar o tipo de dado.', valor: "A" },
            { texto: "Compara se dois valores são iguais e do mesmo tipo.", valor: "B" },
            { texto: "Atribui um valor à variável.", valor: "C" },
            { texto: "Compara se dois objetos são iguais.", valor: "D" }
        ],
        respostaCorreta: "A"
    },

    {
        pergunta: '9 - Qual é o objetivo da tag <footer> em HTML?',

        opcoes: [
            { texto: 'Exibir o conteúdo principal da página.', valor: "A" },
            { texto: "Fornecer informações de rodapé, como dados de copyright.", valor: "B" },
            { texto: "Exibir uma lista de navegação.", valor: "C" },
            { texto: "Definir a área de conteúdo do site.", valor: "D" }
        ],
        respostaCorreta: "B"
    },

    {
        pergunta: '10 - Como você adiciona um item ao final de um array em JavaScript?',

        opcoes: [
            { texto: 'array.add(item)', valor: "A" },
            { texto: "array.insert(item)", valor: "B" },
            { texto: "array.append(item)", valor: "C" },
            { texto: "array.push(item)", valor: "D" },
        ],
        respostaCorreta: "D"
    },

    /*{
        pergunta: '7 - Qual destes métodos NÃO altera diretamente o array original em JavaScript?',

        opcoes: [
            { texto: 'map()', value: "A"},
            { texto: "push()", valor: "B" },
            { texto: "slice()", valor: "C" },
            { texto: "pop()", valor: "D" }
        ],
        respostaCorreta: "A"
        
    }*/
];


let indiceAtual = 0;
let ascorretas = [];
/*let opcoes = [
    { texto: "<div> é usado para imagens e <section> para texto.", valor: "A" },
    { texto: "<section> tem significado semântico, <div> é genérico.", valor: "B" },
    { texto: "<div> e <section> são iguais.", valor: "C" },
    { texto: "<section> só pode ser usado dentro de <article>.", valor: "D" }
];*/

//Iniciando
function voltar(){
    if(indiceAtual > 0){
        indiceAtual--;
        botaoclick();
    }
   

}

function botaoclick(){
    principal.innerHTML = '';
    
    if(indiceAtual >= questoes.length){
        result();
        return;
    }

    perguntaAtual = questoes[indiceAtual];
    
    let h3Element = document.createElement("h3");
    h3Element.textContent = perguntaAtual.pergunta;
    //let question = document.createTextNode("Qual é a diferença entre <section> e <div> no HTML?");
    //h3Element.appendChild(question);
    principal.appendChild(h3Element);

    perguntaAtual.opcoes.forEach(op => {
        let labelElement = document.createElement("label");
        labelElement.classList.add("opcao");
        

        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", 'radio');
        inputElement.setAttribute("name", 'quiz');
        inputElement.setAttribute("value", op.valor);


        labelElement.appendChild(inputElement);
        labelElement.appendChild(document.createTextNode(op.texto));

        principal.appendChild(labelElement);
        principal.appendChild(document.createElement("br"));
    });
    if(indiceAtual>0){
        voltarbotao();
    }
    btconfirmar();
    //voltar ();
}

//Criando as label e input das opções de respostas
/*function criaropcoes(){
    opcoes.forEach(opcao =>{
        
        
        let labelElement = document.createElement("label");
        labelElement.classList.add("opcao");
        let inputElement = document.createElement("input");
        inputElement.setAttribute("type", 'radio');
        inputElement.setAttribute("name", 'quiz');
        inputElement.setAttribute("value", opcao.valor);

        labelElement.appendChild(inputElement);
        labelElement.appendChild(document.createTextNode(opcao.texto));
        principal.appendChild(labelElement);
        principal.appendChild(document.createElement("br"));
    });
}*/

//ao clicar no botão confirmar
function btconfirmar(){
    if(!document.querySelector("btnconfirm")){
        let btconfirme = document.createElement("button");
        btconfirme.textContent = 'Confirmar';
        btconfirme.setAttribute("id", "btnConfirmar");
        btconfirme.addEventListener("click", validandoresp);
        principal.appendChild(btconfirme);
    }

    
}

//Validando as respostas, Certa ou errada?

function validandoresp (){
    let respselect = document.querySelector("input[name = 'quiz']:checked");

    if(!respselect){
        alert("Selecione uma resposta");
        return;
    };

    let respUser = respselect.value;
    let respcorreta = questoes[indiceAtual].respostaCorreta;

    let perg = questoes[indiceAtual].pergunta;
    let respExistente = ascorretas.find(r => r.pergunta === perg);

    if(respExistente ){
        respExistente.resposta = respUser;
        respExistente.correta = respUser === respcorreta;
    }else{
        ascorretas.push({pergunta: questoes[indiceAtual].pergunta, resposta: respUser, correta: respUser === respcorreta });
    }
    
    


    indiceAtual++;
    
    botaoclick();
}

function result (){
    let pontos = ascorretas.filter(resp => resp.correta).length;
    principal.innerHTML = "<h3>Parabéns! Você concluiu o quiz! 🎉</h3>";
    principal.innerHTML += `<p>Você acertou ${pontos} de ${questoes.length}</p>`;
    
    if(pontos>=7){
        principal.innerHTML += `<p>Parabéns, você foi muito bem no teste!</p>`;
    }
    else{
        principal.innerHTML += `<p>Recomendo que revise o assunto.</p>`;
    }


    let refazer = document.createElement("button");
    refazer.textContent = "Começar de novo";
    refazer.addEventListener("click", btrefazer);
    principal.appendChild(refazer);
} 

function btrefazer(){
    indiceAtual = 0;
    ascorretas = [];
    botaoclick();
}

function voltarbotao(){
    let btvoltar = document.createElement("button");
    //let backbt = document.createTextNode("xxxx");
    btvoltar.textContent = ""
   // btvoltar.appendChild(backbt);
   btvoltar.addEventListener("click", voltar);
    principal.appendChild(btvoltar);
    btvoltar.classList.add("btback");
}