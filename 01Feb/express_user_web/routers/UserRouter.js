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
    
})
router.post("/list",(request,response)=>
{
    userModel.listUsers(records=>{
        response.json(records)
    })
})
router.post("/get",(request,response)=>
{
    var email = request.body.email
    userModel.getUser(email,record=>{
        response.json(record)
    })
})


module.exports = router