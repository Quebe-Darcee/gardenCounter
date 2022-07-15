const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('first middleware');
  res.send('Hello from express!');
});

module.exports = app;
