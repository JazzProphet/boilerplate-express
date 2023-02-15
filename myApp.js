let express = require('express');
let app = express();
console.log("Hello World");

let absolutePath = __dirname + "/views/index.html"
app.get("/", function(req, res) {
    res.sendFile(absolutePath);
  });

  let publicPath = __dirname + "/public";
app.use("/public", express.static(publicPath));


































 module.exports = app;
