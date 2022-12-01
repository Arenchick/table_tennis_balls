const Router = require('express')
const router = new Router()

const producerCountryController = require('../controllers/producerCountryController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


router.post('/',checkRoleMiddleware('ADMIN'),producerCountryController.Create)
router.get('/',producerCountryController.GetAll)
router.delete('/:id',checkRoleMiddleware('ADMIN'),producerCountryController.DeleteOne)

module.exports = router