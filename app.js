// Imports
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");
	mongoose = require('mongoose');

var models     = require('./models/tvshow')(app, mongoose);
var TVShowCtrl = require('./controllers/tvshows');



// Settings:
//
// Set the app able to parse JSON
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Set the app able to override HTTP methods
app.use(methodOverride());



// DB connection
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {  
  if(err) throw wrr;
  console.log('Connected to database.');
});

// Methods
//
// GET
var tvshows = express.Router();

tvshows.route('/tvshows')
  .get(TVShowCtrl.findAllTVShows)
  .post(TVShowCtrl.addTVShow);

tvshows.route('/tvshows/:id')  
  .get(TVShowCtrl.findById)
  .put(TVShowCtrl.updateTVShow)
  .delete(TVShowCtrl.deleteTVShow);

// Main logic
app.use('/api', tvshows);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});