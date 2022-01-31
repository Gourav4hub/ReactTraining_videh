const http = require('http')

const server = http.createServer((request,response)=>
{
   // response.setHeader('Content-Type','text/plain')
   response.setHeader('Content-Type','text/html')

    response.write("<h1>My first NodeJS Response !</h1>")
    response.write("<h4>Training on NodeJS !</h4>")
    response.end()
})

// http://localhost:8989
server.listen(8989)


