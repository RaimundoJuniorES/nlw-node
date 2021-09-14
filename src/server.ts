import express = require('express') //dependencias -> npm i @types/express -D

const app = express()

app.get("/", (req, res) => {
    return res.send("Olá mundo")
})

app.post('/teste-post', (req, res) => {
    return res.send("Teste post")
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))