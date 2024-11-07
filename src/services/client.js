
const { Error } = require('sequelize')
const ModelClient = require('../model/client')

class ServicesClient {
    async GetClients() {
        return await ModelClient.findAll()
    }
    async CreateClient(name, fone) {
        if (!name || !fone) {
            throw new Error("Insira todas as informações necessárias")
        }
        return await ModelClient.create({ name, fone })
    }
    async UpdateClient(name, fone, id) {
        const client = await ModelClient.findByPk(id)
        if (!client) {
            throw new Error("Cliente não encontrado")
        }
        client.name = name || client.name
        client.fone = fone || client.fone
        client.save()
        return client
    }
    async DeleteClient(id) {
        if (!id) {
            throw new Error("Insira o id")
        }
        const client = await ModelClient.findByPk(id)
        
        if (!client) {
            throw new Error("Cliente não encontrado")
        }
        return client.destroy()
    }
}

module.exports = new ServicesClient()