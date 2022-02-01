const express = require('express')
const cors = require('cors')

const userRouter = require('./routers/UserRouter')

const server = express()
server.use(cors()) // Enable the CORS Request
server.use(express.json())

server.get("/",(request,response)=>{
    response.send("Success")
})

server.use("/user",userRouter)

server.listen(8989,()=>{
    console.log("http://localhost:8989")
})