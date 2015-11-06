// Imports
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");
	mongoose = require('mongoose');

// Settings:
//
// Set the app able to parse JSON
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Set the app able to override HTTP methods
app.use(methodOverride());

// Methods
//
// GET
var router = express.Router();
router.get('/', function(req, res) {
	res.send("Hello world!");
});

// Main logic
app.use(router);

app.listen(3000, function() {
	console.log("Node server runing on http:/localhost:3000");
});

