import { Component, OnInit } from '@angular/core';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  providers: [PlantService]
})
export class PlantComponent implements OnInit {
  plant: any;
  errors: any;
  plants: any;

  constructor(private plantService: PlantService) {
    this.plant = {};
    this.errors = {};
  }

  async ngOnInit(): Promise<void> {
    this.plants = await this.plantService.getAll();
  }

  async onSubmit() {
    try {
      this.plantService.create(this.plant);
      this.errors = {};
      this.plants.push({...this.plant});
    } catch (error) {
      console.log('in the future show errors on form');
      console.log(error);
    }
  }

  async addOne(plant: any) {
    this.plantService.update({
      name: plant.name,
      amount: plant.amount + 1
    });
    plant.amount +=1;
  }

  async minusOne(plant: any) {
    this.plantService.update({
      name: plant.name,
      amount: plant.amount - 1
    });
    plant.amount -=1;
  }

  async delete(plant: any) {
    this.plantService.delete(plant);
    const index = this.plants.indexOf(plant);
    if (index > -1) {
      this.plants.splice(index, 1);
    }
  }

}
