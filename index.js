var express = require('express');


var app= express();

var movies =require("./movies.js")
app.use("/movies",movies)



app.listen(3000, function () {
    console.log('app listening on port 3000!')
  })
  