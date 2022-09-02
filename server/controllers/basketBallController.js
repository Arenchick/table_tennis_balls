const {BasketBall} = require('../models/models')
const ApiError = require('../error/apiError')

class BasketBallController {
    async Create(request,response,next){
        try {
            const {ballId,basketId} = request.body

            if (ballId && basketId) {
                const basketBall = await BasketBall.create({ballId, basketId})
                return response.json(basketBall)
            }
            else {
                return next(ApiError.BadRequest('Некорекктно введены данные'))
            }
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
    async GetAll(request,response,next){
        try {
            const baskets = await BasketBall.findAll()
            return response.json(baskets)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetOne(request,response,next){
        try {
            const {id} = request.params

            const basketBall = await BasketBall.findOne({where: {id}})

            return response.json(basketBall)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await BasketBall.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BasketBallController()