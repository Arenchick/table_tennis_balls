const Router = require('express')
const router = new Router()

const ballController = require('../controllers/ballController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/',checkRoleMiddleware('ADMIN'),ballController.Create)
router.get('/',ballController.GetAll)
router.get('/:id',ballController.GetOne)
router.delete('/:id',checkRoleMiddleware('ADMIN'),ballController.DeleteOne)

module.exports = router