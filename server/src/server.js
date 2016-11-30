//import reverse stuff
var reverseModule = require('./util');
var reverseString = reverseModule.reverseString;
// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
// imports the parser for req.body
var bodyParser = require('body-parser');
app.use(bodyParser.text());

//----facebook stuff Starts----
//import static stuff from build
app.use(express.static('../client/build'));



// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
