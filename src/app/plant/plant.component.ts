import { Component, OnInit } from '@angular/core';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  providers: [PlantService]
})
export class PlantComponent implements OnInit {

  constructor(private plantService: PlantService) { }

  ngOnInit(): void {
    this.plantService.hello();
  }

}
