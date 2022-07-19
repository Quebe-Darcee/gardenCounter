import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PlantService {

  constructor() {

  }

  async hello() {
    console.log("Hello");
  }
}
