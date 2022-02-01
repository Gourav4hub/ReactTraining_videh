const express = require('express')

const router = express.Router()

router.get("/save1",(request,response)=>
{
    console.log(request.query)
    response.send("Success")
})
router.post("/save2",(request,response)=>
{
    console.log(request.body)
    response.send("Success")
})

router.post("/save3",(request,response)=>
{
    console.log(request.body)
    response.send("Success")
})


module.exports = router