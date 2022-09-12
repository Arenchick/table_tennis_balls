const {BasketBall, Ball} = require('../models/models')
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
            const {basketId} = request.query

            const baskets = await BasketBall.findAll({
                where: {basketId},
                include: {model: Ball, as: 'ball'}
            })
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

    async GetAllCount(request,response,next){
        try {
            const basketBallCount = await BasketBall.count()

            return response.json(basketBallCount)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetOneBallCount(request,response,next){
        try {
            const {ballId} = request.params

            const basketBallCount = await BasketBall.count({where: {ballId}})

            return response.json(basketBallCount)
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