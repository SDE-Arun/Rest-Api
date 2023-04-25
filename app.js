var http = require('http')

http.createServer(function(req,res){

    res.writeHead(200,{'content-type':'text/html'})
    res.write("We are using this first time")
    // we are telling to the server that we end our work by writing this
    res.end()
    // we saying to open this server and this port number
}).listen(8080)