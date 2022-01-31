const http = require('http')

const server = http.createServer((request,response)=>
{
    console.log(request.url)
   // response.setHeader('Content-Type','text/plain')
    response.setHeader('Content-Type','text/html')

    switch(request.url)
    {
        case "/" : response.write("<h1>My first NodeJS Response !</h1>")
                   response.write("<h4>Training on NodeJS !</h4>")
                   break
        case "/about" : response.write("<h4>About Page !</h4>")
                        break
        case "/contact" : response.write("<h4>Contact Page !</h4>")
                        break                        
    }
    response.end()
})

// http://localhost:8989
server.listen(8989)


