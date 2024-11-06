const express = require('express')
const ControllersDogs = require('../controllers/dog')

const router = express.Router()

router.get('/', ControllersDogs.GetDogs)
router.post('/CreateDog/', ControllersDogs.CreateDogs)
router.put('/:id', ControllersDogs.UpdateDogs)
router.delete('/:id', ControllersDogs.DeleteDogs)

module.exports = router