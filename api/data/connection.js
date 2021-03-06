var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/persona';

mongoose.Promise = global.Promise;
mongoose.connect(dburl);
mongoose.connection.on('connected', function(){
  console.log('mongoose connected to ' + dburl);
});

mongoose.connection.on('disconnected', function(){
  console.log('mongoose disconnected from' + dburl);
});

mongoose.connection.on('error', function(err){
  console.log('mongoose error: ' + err);
});

// Bring in Schema and Model
require('./person.model.js');
