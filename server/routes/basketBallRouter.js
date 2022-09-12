const Router = require('express')
const router = new Router()

const basketBallController = require('../controllers/basketBallController')

router.post('/',basketBallController.Create)
router.get('/',basketBallController.GetAll)
router.get('/count',basketBallController.GetAllCount)
router.get('/count/:ballId',basketBallController.GetOneBallCount)
router.get('/:id',basketBallController.GetOne)
router.delete('/:ballId',basketBallController.DeleteOne)

module.exports = router