import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //import ngModel

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';


@NgModule({
  declarations: [//寫Component的地方
    AppComponent, 
    Lesson1Component, 
    Lesson2Component
  ],
  imports: [ //寫Module的地方
    BrowserModule,
    FormsModule
  ],
  providers: [], //寫service的地方
  bootstrap: [AppComponent]
})
export class AppModule { }
