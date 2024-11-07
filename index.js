const express = require('express')
const routerDog = require('./src/routers/dog')
const routerClient = require('./src/routers/client')

const database = require('./src/config/database')
const app = express()
const port = 3000

app.use(express.json())
app.use('/dog/', routerDog)
app.use('/client/', routerClient)

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