let infoQuizz;
let api = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes";

function obterQuizz() {
    const promise = axios.get(api);

    promise.then((resposta) => mensagens(resposta));
    promise.catch(mensagens);
}

function mensagens(mensagem) {
    infoQuizz = mensagem.data;
}

function criarQuizz() {
    const criarquizz = document.querySelector(".tela-1");
    const adicionarquizz = document.querySelector(".tela-3-1");
    criarquizz.classList.add("escondido");
    adicionarquizz.classList.remove("escondido");
    promise = axios.post(api, infoQuizz);
}

function recarregarPagina() {
    window.location.reload();
}
