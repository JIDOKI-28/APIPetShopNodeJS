const ServicesClient = require('../services/client')

class ControllersClient {
    async GetClients(req, res) {
        try {
            const clients = await ServicesClient.GetClients()
            res.json({ clients })
        } catch (error) {
            res.json({msg: error.message})
        }
    }
    async CreateClient(req, res) {
        try {
            const { name, fone } = req.body
            const client = await ServicesClient.CreateClient(name, fone)
            res.json({ client })
        } catch (error) {
            res.json({msg: error.message})
        }
    }
    async UpdateClient(req, res) {
        try {
            const { name, fone } = req.body
            const id = req.params.id
            const client = await ServicesClient.UpdateClient(name, fone, id)
            res.json({ client })
        } catch (error) {
            res.json({msg: error.message})
        }
    }
    async DeleteClient(req, res) {
        try {
            const id = req.params.id
            const client = await ServicesClient.DeleteClient(id)
            res.json({ client })
        } catch (error) {
            res.json({msg: error.message})
        }
    }
}

module.exports = new ControllersClient()