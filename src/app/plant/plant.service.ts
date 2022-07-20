import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class PlantService {
  url: String;

  constructor() {
    this.url = 'http://localhost:3000';
  }

  async getAll() {
    const response = await axios.get(this.url + '/plants');
    return response.data.plants;
  }

  async get(plant: any) {
    const response = await axios.get(this.url + '/plants' + plant.name);
    return response.data.plant;
    console.log('Get a plant');
  }

  async create(plant: any) {
    if (!plant) {
      return;
    }
    plant.name = plant.name.toLowerCase();
    const createPlant = await axios.post(this.url + '/plants', plant);
    console.log('Create a plant');
  }

  async update(plant: any) {
    if (!plant) {
      return;
    }
    const updatePlant = await axios.put(this.url + '/plants/' + plant.name, plant);
    console.log('Update a plant');
  }

  async delete(plant: any) {
    if (!plant) {
      return;
    }
    await axios.delete(this.url + '/plants/' + plant.name);
    console.log('Delete a plant');
  }
}
