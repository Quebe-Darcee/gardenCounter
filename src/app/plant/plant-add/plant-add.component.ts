import { Component, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-plant-add',
  templateUrl: './plant-add.component.html',
  styleUrls: ['./plant-add.component.css'],
  providers: [PlantService]
})
export class PlantAddComponent implements OnInit {
    plant: any;
    errors: any;

  constructor(private plantService: PlantService, private router: Router) {
      this.errors = {};
      this.plant = {};
    }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      this.plantService.create(this.plant);
      this.errors = {};
      this.plant={};
      this.router.navigate(['/plants']);
    } catch (error) {
      console.log('in the future show errors on form');
      console.log(error);
    }
  }

}
