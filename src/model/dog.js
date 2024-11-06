const database = require('../config/database')
class ModelDogs {
    constructor() {
        this.model = database.db.define('cachorros', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            race: {
                type: database.db.Sequelize.STRING
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            years: {
                type: database.db.Sequelize.STRING
            }
        })
    }
}

module.exports = new ModelDogs().model