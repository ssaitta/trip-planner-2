const express = require('express')
const morgan = require('morgan')
const bodyParser= require('body-parser')
const path = require('path')
const app = express()

const db = require("./models").db;

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

app.use(function(err,req,res,next){
    res.status(err.status || 500).send(err.message || "Internal Error")
})

var port = 3000;
app.listen(port, function() {
  console.log("The server is listening closely on port", port);
  db
    .sync()
    .then(function() {
      console.log("Synchronated the database");
    })
    .catch(function(err) {
      console.error("Trouble right here in River City", err, err.stack);
    });
});