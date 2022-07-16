const http = require('http');
const debug = require('debug')('node-angular');
var mongoose = require('mongoose');
const app = require('./backend/app');

const port = process.env.PORT || 3000;


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

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
