const express = require('express');

const app = express()

// This is same as ROUTE::get or post in laravel
app.get('/',function(req,res){
    res.send("Sending data from server to client")
})
app.get('/:idd',function(req,res){
    const idd = req.params.idd
    const id = {
        2:'this',
        3:'arun',
        4:'those',
        5:'these',
    }
    res.send("Hello "+id[idd])
})

// for creating the server
app.listen(9000,function(req,res){
    console.log('Running..')
})