const Router = require('express')
const router = new Router()

const typeController = require('../controllers/typeController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


router.post('/',checkRoleMiddleware('ADMIN'),typeController.Create)
router.get('/',typeController.GetAll)
router.delete('/:id',checkRoleMiddleware('ADMIN'),typeController.DeleteOne)

module.exports = router