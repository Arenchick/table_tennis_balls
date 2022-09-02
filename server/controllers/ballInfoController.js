const {BallInfo} = require('../models/models')
const ApiError = require('../error/apiError')

class BallInfoController {

    async Create(request,response,next){
        try {
            const {starId, brandId, typeId, producerCountryId} = request.body

            const ballInfo = await BallInfo.create({starId, brandId, typeId, producerCountryId})

            return response.json(ballInfo)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetAll(request,response,next){
        try {
            const ballInfo = await BallInfo.findAll()
            return response.json(ballInfo)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await BallInfo.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BallInfoController()