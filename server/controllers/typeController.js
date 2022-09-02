const {Type, Rating} = require('../models/models')
const ApiError = require('../error/apiError')

class TypeController {
    async Create(request,response,next){
        try {
            const {name} = request.body
            const type = await Type.create({name})
            return response.json(type)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
    async GetAll(request,response,next){
        try {
            const types = await Type.findAll()
            return response.json(types)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await Type.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new TypeController()