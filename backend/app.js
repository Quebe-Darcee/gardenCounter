const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first middleware');
  next();
});

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
  res.send('POST request to the homepage');
});

app.put('/', (req, res) => {
  res.send('PUT request to the homepage');
});

app.delete('/', (req, res) => {
  res.send('DELETE request to the homepage');
});

module.exports = app;
