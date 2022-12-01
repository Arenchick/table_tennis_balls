const Router = require('express')
const router = new Router()

const ballInfoController = require('../controllers/ballInfoController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'),ballInfoController.Create)
router.get('/',checkRoleMiddleware('ADMIN'),ballInfoController.GetAll)
router.delete('/:id',checkRoleMiddleware('ADMIN'),ballInfoController.DeleteOne)

module.exports = router