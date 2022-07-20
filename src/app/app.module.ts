import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlantComponent } from './plant/plant.component';
import { PlantAddComponent } from './plant/plant-add/plant-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlantComponent,
    PlantAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'plants', component: PlantComponent},
      {path: 'add', component: PlantAddComponent}
    ]),
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
