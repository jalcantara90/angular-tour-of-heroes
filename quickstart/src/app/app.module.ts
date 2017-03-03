import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //con esto añadimos la librería para interactuar con elementos de un formulario

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module'; //injección de la lógica de ruteo

@NgModule({
  imports:[ 
    BrowserModule ,
    FormsModule,
    AppRoutingModule, // ahora todo el ruteo lo coge a través del módulo AppRouting injectado
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
  ],
  providers:[
    HeroService
  ],
  bootstrap:[ AppComponent ],
  
})

export class AppModule { }
