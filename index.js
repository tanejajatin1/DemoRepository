var express = require('express');
var app = express();

//Create a server
app.listen(8000,function(){
    console.log("Server is listening to port:8000");
});

//post method which will work as a webhook for all the request
app.post('/handleUserQuestions',function(req,res){
res.send("App is up");
});