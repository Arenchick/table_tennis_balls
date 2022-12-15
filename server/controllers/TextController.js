const fs = require("fs");

class TextController {

    async GetAboutText(request,response,next){
       fs.readFile("./static/AboutText.txt","utf-8",
           function (error, data){
               return response.json(data)
       })
    }

    async ChangeAboutText(request,response,next){
        const {text} = request.body

        console.log(text)
        fs.writeFile("./static/AboutText.txt",text,"utf-8",
            function (error){
                console.log('============')
                console.log(error)
                console.log('============')
            })
        fs.readFile("./static/AboutText.txt","utf-8",
            function (error, data){
                return response.json(data)
            })
    }

    async GetContactText(request,response,next){
       fs.readFile("./static/ContactsText.txt","utf-8",
           function (error, data){
               return response.json(data)
       })
    }

    async ChangeContactText(request,response,next){
        const {text} = request.body

        console.log(text)
        fs.writeFile("./static/ContactsText.txt",text,"utf-8",
            function (error){
                console.log('============')
                console.log(error)
                console.log('============')
            })
        fs.readFile("./static/ContactsText.txt","utf-8",
            function (error, data){
                return response.json(data)
            })
    }

}

module.exports = new TextController()