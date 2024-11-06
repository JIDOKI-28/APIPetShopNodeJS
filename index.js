const express = require('express')
const router = require('./src/routers/dog')
const database = require('./src/config/database')
const app = express()
const port = 3000

app.use(express.json())
app.use(router)

database.db
    .sync({force: false})
    .then(() => {
        console.info("Banco conectado com sucesso")
        app.listen(port, () => {
            console.info(`Servidor rodando na porta ${port}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou ${e}`)
    })