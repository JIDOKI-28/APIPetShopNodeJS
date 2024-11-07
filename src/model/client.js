const database = require('../config/database')
class ModelClient {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type:database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true 
            },
            name: {
                type: database.db.Sequelize.STRING
            },
            fone: {
                type: database.db.Sequelize.INTEGER
            }     
        })
    }
}

module.exports = new ModelClient().model