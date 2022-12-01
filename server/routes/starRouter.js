const Router = require('express')
const router = new Router()

const starController = require('../controllers/starController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


router.post('/',checkRoleMiddleware('ADMIN'),starController.Create)
router.get('/',starController.GetAll)
router.delete('/:id' ,checkRoleMiddleware('ADMIN'),starController.DeleteOne)

module.exports = router