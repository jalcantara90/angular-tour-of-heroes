import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //con esto añadimos la librería para interactuar con elementos de un formulario

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ,
  FormsModule
  ],
  declarations: [ 
    AppComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
