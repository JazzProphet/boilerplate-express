let express = require('express');
let app = express();
console.log("Hello World");

let absolutePath = __dirname + "/views/index.html"
app.get("/", function(req, res) {
    res.sendFile(absolutePath);
  });

  absolutePath = __dirname + "/public";
  app.use(absolutePath, express.static);


































 module.exports = app;
