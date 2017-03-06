import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //con esto añadimos la librería para interactuar con elementos de un formulario
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module'; //injección de la lógica de ruteo

// Imports for loading & configurin the in-memory web api 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from './hero-search.component';



@NgModule({
  imports:[ 
    BrowserModule ,
    FormsModule,
    HttpModule, // importante importarlo antes de hacer la recogida de la API y del ruteo
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule, // ahora todo el ruteo lo coge a través del módulo AppRouting injectado
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  providers:[
    HeroService
  ],
  bootstrap:[ AppComponent ],
  
})

export class AppModule { }
