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






























 module.exports = app;
