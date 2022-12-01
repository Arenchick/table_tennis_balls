const ApiError = require('../error/apiError')
const nodemailer = require("nodemailer");

class OrderSendMailController {
    async Create(request,response,next){
        try {
            const {sendler,textMessage} = request.query

            console.log(sendler + '\n======\n' + textMessage)

            const transporter = nodemailer.createTransport({
                service: 'Yandex',
                auth: {
                    user:process.env.EMAIL,
                    pass:process.env.EMAIL_PASSWORD
                }
            });

            const mailOptions = {
                from:process.env.EMAIL,
                to:sendler,
                subject:'Заказ на сайте bestballs.ru',
                text:textMessage
            }

            transporter.sendMail(mailOptions).then(data => {
                return response.json(data)
            })
        }
        catch (error){
            return next(ApiError.BadRequest(error.message))
        }
    }

}

module.exports = new OrderSendMailController()