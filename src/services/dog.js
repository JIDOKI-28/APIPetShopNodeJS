const { Error } = require('sequelize')
const ModelDogs = require('../model/dog')

class ServicesDogs {
    async GetDogs() {
       return ModelDogs.findAll()
    }
    async CreateDogs(race, name, years) {
        if (!race || !name || !years) {
            throw new Error("Coloque todos os dads")
        }
        return ModelDogs.create({race, name, years})
    }
    async UpdateDogs(race, name, years, id) {
        const dog = await ModelDogs.findByPk(id)

        if (!dog) {
            throw new Error("Cachorro não encontrado")
        }
        dog.race = race || dog.race
        dog.name = name || dog.name
        dog.years = years || dog.years
        dog.save()

        return dog
    }
    async DeleteDogs(id) {
        if (!id) {
            throw new Error("coloque o id pls")
        }
        const dog = await ModelDogs.findByPk(id)

        if (!dog) {
            throw new Error("Cachorro não encontrado")
        }
        return dog.destroy()
    }
}
module.exports = new ServicesDogs()