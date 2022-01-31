const express = require('express')

const server = express()
const studentRouter = require('./routers/StudentRouter')
server.set('view engine','ejs')// pug,hapi,jade

server.get("/",(request,response)=>
{
    response.render('home')
})
server.get("/about",(request,response)=>
{
    response.render('about')
})
server.use("/student",studentRouter)

server.listen(8989,()=>{
    console.log('http://localhost:8989')
})