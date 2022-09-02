const {Brand} = require('../models/models')
const ApiError = require('../error/apiError')

class BrandController {
    async Create(request,response,next){
        try {
            const {name} = request.body
            const brand = await Brand.create({name})
            return response.json(brand)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
    async GetAll(request,response,next){
        try {
            const brands = await Brand.findAll()
            return response.json(brands)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await Brand.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BrandController()