let infoQuizz;
let quizzes;
const API = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

function recarregarPagina() {
    window.location.reload();
}

function criarQuizz() {
    const criarquizz = document.querySelector(".tela-1");
    const adicionarquizz = document.querySelector(".tela-3-1");
    criarquizz.classList.add("escondido");
    adicionarquizz.classList.remove("escondido");
}

function pegarQuizzes() {
    const promise = axios.get(API);
    promise.then((resposta) => {
        quizzes = resposta.data;
        listquizzes();
    });
}

pegarQuizzes();

function listquizzes() {
    let box = document.querySelector(".caixas-quizz");
    box.innerHTML = "";
    for (let i = 0; i < quizzes.length; i++) {
        let dataQuizz = quizzes[i];
        box.innerHTML += ` <div class="box-quiz" onclick="quizzesFeitos(this)" id="${dataQuizz.id}">  
            <img  width="340px" height="181px" src="${dataQuizz.image}" />
            <div class="degrade">
            <span class="title">${dataQuizz.title}</span>
            </div>
        </div>`;
    }
}

function quizzesFeitos(element) {
    let objeto;
    quizzes.forEach((value) => {
        if (Number(value.id) === Number(element.id)) {
            objeto = value;
        }
    });
    console.log(objeto);
}

function 
// alert("Preencha os campos corretamente para continuar criando o seu Quizz.\n\nTítulo do quizz: deve ter no mínimo 20 e no máximo 65 caracteres\nURL da Imagem: deve ter formato de URL\nQuantidade de perguntas: no mínimo 3 perguntas\nQuantidade de níveis: no mínimo 2 níveis");