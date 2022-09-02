const ApiError = require('../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User,Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async Registration(request,response,next){
        const {name, email, password, role} = request.body

        if (!email || !password){
            return next(ApiError.BadRequest('Некорректный email или пароль'))
        }

        const candidate = await User.findOne({where: {email}})
        if (candidate){
            return next(ApiError.BadRequest('Пользователь с таким email уже существует'))
        }

        const hashPassword = await bcrypt.hash(password,5)

        const user = await User.create({name,email,role,password:hashPassword})
        const basket = await Basket.create({userId: user.id})

        const token = generateJwt(user.id, user.email, user.role)

        return response.json({token})
    }

    async Login(request, response, next) {

        const {email, password} = request.body

        const user = await User.findOne({where: {email}})

        if (!user) {
            return next(ApiError.BadRequest('Пользователь не найден'))
        }

        let comparePassword = bcrypt.compareSync(password, user.password)

        if (!comparePassword) {
            return next(ApiError.BadRequest('Указан неверный пароль'))
        }

        const token = generateJwt(user.id, user.email, user.role)
        return response.json({token})
    }

    async Auth(request,response,next){
        const token = generateJwt(request.user.id, request.user.email, request.user.role)
        return response.json({token})
    }
}

module.exports = new UserController()