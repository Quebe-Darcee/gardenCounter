const express = require('express');
const cors = require('cors');
const app = express();
const Plant = require('./models/plant');

app.use(express.json());

app.use(cors());

app.get('/plants', async (req, res, next) => {
  const plants = await Plant.find();
  res.status(200).json({
    message: "Plants fetched successfully!",
    plants: plants
  });
});

app.get('/plants/:name', async (req, res, next) => {
  const plant = await Plant.findOne({ name: req.params.name });
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

app.put('/plants/:name', async (req, res, next) => {
  const plant = await Plant.findOne({ name: req.params.name }).exec();
  plant.name = req.body.name;
  plant.description = req.body.description;
  plant.amount = req.body.amount;

  const result = await Plant.updateOne({ name: req.params.name }, plant).exec();
  res.json({
    message: 'Plant updated successfully',
    plant: result
  });
});

app.delete('/plants/:name', async (req, res, next) => {
  const plant = await Plant.findOne({ name: req.params.name }).exec();
  const deletedPlant = await plant.deleteOne({ name: req.params.name })
  res.json({
    message: 'Plant deleted successfully'
  });
});

module.exports = app;
