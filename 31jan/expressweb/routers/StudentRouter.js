const express = require('express')

const router = express.Router()

router.get("/register",(request,response)=>{
    response.send("Student Register")
})
router.get("/view",(request,response)=>{
    response.send("Student View")
})
router.get("/update",(request,response)=>{
    response.send("Student Update")
})

module.exports = router