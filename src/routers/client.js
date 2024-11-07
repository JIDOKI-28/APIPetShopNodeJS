const ControllersClient = require('../controllers/client')
const express = require('express')

const router = express.Router()

router.get('/', ControllersClient.GetClients)
router.post('/CreateClient', ControllersClient.CreateClient)
router.put('/:id', ControllersClient.UpdateClient)
router.delete('/:id', ControllersClient.DeleteClient)

module.exports = router