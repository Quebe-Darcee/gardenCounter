const express = require('express');
const http = require('http');
const debug = require('debug')('node-angular');
var mongoose = require('mongoose');
const app = require('./backend/app');

// Create mongo database connection
mongoose.connect('mongodb://localhost:27017/garden',
  { useNewUrlParser: true }, (err, res) => {
    if (err) {
      console.log('Connection failed: ' + err);
    }
    else {
      console.log('Connected to database!');
    }
  }
);

// Define port and tell express to use it
const port = process.env.PORT || 3000;
app.set('port', port);

// Create server
const server = http.createServer(app);

// Tell server to listen to the defined port
server.listen(port);
