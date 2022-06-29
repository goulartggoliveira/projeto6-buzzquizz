function obterQuizz() {
    const promise = axios.get(
        "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
    );

    promise.then(resposta);
    promise.catch(resposta);
}
