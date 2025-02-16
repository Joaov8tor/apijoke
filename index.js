const express = require('express');
const app = express();
const port = 3000;

const jokes = [
    "Por que o livro de matemática ficou triste? Porque tinha muitos problemas!",
    "O que o pato falou para a pata? Vem Quá!",
    "Por que o tomate foi ao banco? Porque queria se tornar um extrato!",
    "Qual é o cúmulo da força? Dobrar a esquina.",
    "O que é um ponto marrom no avião? Um Flyson!"
];

app.get('/joke', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: randomJoke });
});

app.listen(port, () => {
    console.log(`API de piadas rodando em http://localhost:${port}`);
});


