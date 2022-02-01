const express = require('express')
const userModel = require('../models/UserModel')
const router = express.Router()

router.post("/register",(request,response)=>
{
    console.log(request.body)
    userModel.registerUser(request.body,(status)=>{
        if(status)
            response.json({status:true,msg:"Registeration Done"})
        else
            response.json({status:false,msg:"Registeration Failed"})    
    })
})

router.post("/login",(request,response)=>
{
    
})
router.post("/list",(request,response)=>
{
    
})
router.post("/get",(request,response)=>
{
    
})


module.exports = router