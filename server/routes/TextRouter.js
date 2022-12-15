const Router = require('express')
const router = new Router()

const TextController = require('../controllers/TextController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')


// router.post('/',checkRoleMiddleware('ADMIN'),starController.Create)
router.get('/about',TextController.GetAboutText)
router.post('/about', TextController.ChangeAboutText)
router.post('/contact', TextController.ChangeContactText)
router.get('/contact',TextController.GetContactText)

module.exports = router