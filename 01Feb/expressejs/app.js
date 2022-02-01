const express = require('express')
const msgRouter = require('./routers/MessageRouter')
const server = express()

server.set('view engine','ejs')
server.use(express.urlencoded()) // Fetch Post data
server.use(express.json()) // Fetch JSON Data


server.get("/",(request,response)=>
{
    var title = "Good Morning"
    var arr = [
        {name:'Lokesh',age:23,city:'delhi'},
        {name:'Meena',age:21,city:'pune'},
        {name:'Rajesh',age:25,city:'mumbai'},
        {name:'Kalpana',age:28,city:'indore'},
    ]
    response.render('home',{
        title : title,
        employees : arr
    })
})
server.get("/about",(request,response)=>{
    response.render('about')
})
server.get("/contact",(request,response)=>{
    response.render('contact')
})

server.use("/message",msgRouter)

server.listen(8989,()=>{
    console.log("http://localhost:8989")
})