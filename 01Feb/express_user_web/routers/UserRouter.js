const express = require('express')
const userModel = require('../models/UserModel')
const router = express.Router()

router.post("/register",(request,response)=>
{
    console.log(request.body)
    userModel.registerUser(request.body,(result)=>{
        if(result)
            response.json({status:true,msg:"Registeration Done",data:result})
        else
            response.json({status:false,msg:"Registeration Failed"})    
    })
})

router.post("/login",(request,response)=>
{
    var email = request.body.email
    var password = request.body.password
    userModel.loginUser(email,password,record=>{
        if(record)
            response.json({status:true,data:record})
        else
            response.json({status:false})    
    }) 
})
router.post("/list",(request,response)=>
{
    userModel.listUsers(records=>{
        if(records)
            response.json({status:true,data:records})
        else
            response.json({status:false}) 
    })
})
router.post("/get",(request,response)=>
{
    var email = request.body.email
    userModel.getUser(email,record=>{
        if(record)
            response.json({status:true,data:record})
        else
            response.json({status:false})    
    })
})


module.exports = router