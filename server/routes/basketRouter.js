const Router = require('express')
const router = new Router()

const basketController = require('../controllers/basketController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


router.post('/',checkRoleMiddleware('ADMIN'),basketController.Create)
router.get('/',basketController.GetAll)
router.delete('/:id',checkRoleMiddleware('ADMIN'),basketController.DeleteOne)
router.get('/:userId',basketController.GetOne)

module.exports = router