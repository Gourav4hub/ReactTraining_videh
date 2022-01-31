const express = require('express')

const server = express()

server.get("/",(request,response)=>
{
    response.send("<h1>Home Page</h1>")
})

server.get("/about",(request,response)=>
{
    response.send("<h1>About Page</h1>")
})



server.listen(8989,()=>{
    console.log('http://localhost:8989')
})