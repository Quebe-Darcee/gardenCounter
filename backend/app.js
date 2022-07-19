const express = require('express');
const app = express();
const Plant = require('./models/plant');

app.use((req, res, next) => {
  next();
});

app.use(express.json());

app.get('/plants', async (req, res, next) => {
  const plants = await Plant.find();
  res.status(200).json({
    message: "Plants fetched successfully!",
    plants: plants
  });
});

app.get('/plants/:id', async (req, res, next) => {
  const plant = await Plant.findOne({ id: req.params.id });
  res.status(200).json({
      message: "Plant fetched successfully!",
      plant: plant
  });
});

app.post('/plants', async (req, res, next) => {
  const plant = await new Plant({
    id: 4,
    name: req.body.name,
    description: req.body.description,
    amount: req.body.amount
  });

  const newPlant = plant.save();
  res.json({
    message: "Plant added successfully",
    plant: plant
  });
});

app.put('/plants/:id', async (req, res, next) => {
  const plant = await Plant.findOne({ id: req.params.id }).exec();
  plant.name = req.body.name;
  description: req.body.description;
  plant.amount = req.body.amount;

  const result = await Plant.updateOne({ id: req.params.id }, plant).exec();
  res.json({
    message: 'Plant updated successfully',
    plant: result
  });
});

app.delete('/plants/:id', async (req, res, next) => {
  const plant = await Plant.findOne({ id: req.params.id }).exec();
  const deletedPlant = await plant.deleteOne({ id: req.params.id })
  res.json({
    message: 'Plant deleted successfully'
  });
});

module.exports = app;
