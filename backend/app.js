const express = require('express');

const app = express();

app.use((req, res, next) => {
  next();
});

app.use(express.json());

app.get('/plants', (req, res) => {
  res.json('GET all plants');
});

app.get('/plants/:id', (req, res) => {
  res.json(`GET plant ${req.params.id}`)
});

app.post('/plants', (req, res) => {
  console.log(req.body);
  res.json('Create a new plant record');
});

app.put('/plants/:id', (req, res) => {
  console.log(req.body);
  res.json(`Update plant ${req.params.id}`);
});

app.delete('/plants/:id', (req, res) => {
  res.json(`DELETE plant ${req.params.id}`);
});

module.exports = app;
