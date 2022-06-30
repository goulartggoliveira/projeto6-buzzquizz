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

const requisição = function criarQuizz() {
    promise = axios.post(api, infoQuizz);
};
