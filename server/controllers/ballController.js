const {Ball, BallInfo} = require('../models/models')
const ApiError = require('../error/apiError')
const uuid = require('uuid')
const path = require('path')
const {Op} = require("sequelize");

const getFileName = (file) => {
    const fileName = uuid.v4() + ".jpg"
    console.log(file)
    file.mv(path.resolve(__dirname,'..','static', fileName))
    return fileName
}

class BallController {

    async Create(request,response,next){
        try {
            const {name,price,count,ballInfoId} = request.body
            const {image} = request.files

            let imageName = getFileName(image)

            const ball = await Ball.create({name,price,count,image: imageName,ballInfoId})

            return response.json(ball)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
    async GetAll(request,response,next){
        try {
            console.log("das")
            const {starId,brandId,typeId,producerCountryId} = request.query

            let params = {
                starId: [],
                brandId: [],
                typeId: [],
                producerCountryId: []
            }

            if (starId && starId != 0)
                params.starId.push(starId)
            if (brandId && brandId != 0)
                params.brandId.push(brandId)
            if (typeId && typeId != 0)
                params.typeId.push(typeId)
            if (producerCountryId && producerCountryId != 0)
                params.producerCountryId.push(producerCountryId)

            const ballInfo = await BallInfo.findAll({where: {
                    typeId :{
                        [Op.or]: params.typeId
                    },
                    brandId :{
                        [Op.or]: params.brandId
                    },
                    starId :{
                        [Op.or]: params.starId
                    },
                    producerCountryId :{
                        [Op.or]: params.producerCountryId
                    }
                }})

            // const ballInfo = await BallInfo.findAll({where: {
            //     $and : [
            //         {$or: params.typeId},
            //         {$or: params.brandId},
            //         {$or: params.starId},
            //         {$or: params.producerCountryId}
            //     ]
            //     }})

            // const ballInfo = await BallInfo.findAll({where: params})

            const ball = await Ball.findAll(
                {
                    where: {ballInfoId: ballInfo.map(info => info.id)},
                    include: {model: BallInfo, as: 'ball_info'}
                })

            return response.json(ball)
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

    async GetOne(request,response,next){
        try {
            const {id} = request.params

            const ball = await Ball.findOne(
                {
                    where: {id},
                    include: {model: BallInfo, as: 'ball_info'}
                })

            return response.json(ball)
        }
        catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async DeleteOne(request,response,next){
        try {
            const {id} = request.params

            await Ball.destroy({where: {id}})

            return response.json("Объект успешно удален")
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new BallController()