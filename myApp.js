require('dotenv').config();
let express = require('express');
let app = express();

console.log("Hello World");

let publicPath = __dirname + "/public";
app.use("/public", express.static(publicPath));

app.use(function(req,res,next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

let absolutePath = __dirname + "/views/index.html"
app.get("/", function(req, res) {
    res.sendFile(absolutePath);
  });

app.get("/json", function(req,res) {
    let jsonMessage = "";
    if(process.env.MESSAGE_STYLE == "uppercase")
    {
        jsonMessage = "HELLO JSON"
    }
    else{
        jsonMessage = "Hello json"
    }
    res.json(
        {message: jsonMessage}
    );
  });

  app.get("/now",function(req,res,next){
    req.time = new Date().toString();
    next();
  },function(req,res){
    res.json(
        {time: req.time}
    );
  })

app.get("/:word/echo", function(req,res){
    res.json(
        {echo: req.params.word}
    );
})

app.get("/name", function(req,res) {
    res.json(
        {name: req.query.firstname + " " + req.query.lastname}
    );
})


























 module.exports = app;
