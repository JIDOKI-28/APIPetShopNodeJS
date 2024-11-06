const ServicesDogs = require('../services/dog')

class ControllersDogs {
    async GetDogs(req, res) {
        try {
            const dogs = await ServicesDogs.GetDogs()
            res.json({msg: dogs})
        } catch (error) {
            res.json({msg: error.message})
        }
    }
    async CreateDogs(req, res) {
        try {
            const { race, name, years } = req.body
            const dog = await ServicesDogs.CreateDogs(race, name, years)
            res.json({msg: dog })
        } catch (error) {
            res.json({msg: error.message})
        }
    }
    async UpdateDogs(req, res) {
        try {
            const id = req.params.id
            const { race, name, years } = req.body
            const dog = await ServicesDogs.UpdateDogs(race, name, years, id)
            res.json({msg: dog })
        } catch (error) {
            res.json({msg: error.message})
        }
    }
    async DeleteDogs(req, res) {
        try {
            const dog = await ServicesDogs.DeleteDogs(req.params.id)
            res.json({msg: dog })
        } catch (error) {
            res.json({msg: error.message})
        }
    }
}
module.exports = new ControllersDogs()