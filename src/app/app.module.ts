import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; //import ngModel

/*以下為別人寫的start*/
import {NgPipesModule} from 'ngx-pipes';
/*以下為別人寫的end*/

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Pratice1Component } from './pratice1/pratice1.component'
import { Lesson4Component } from './lesson4/lesson4.component';
import { Homework1Component } from './homework1/homework1.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { HightlightDirective } from './hightlight.directive';
import { Lesson61Component } from './lesson6-1/lesson6-1.component';
import { AppRoutingModule } from './app-routing.module';
import { Homework2Component } from './homework2/homework2.component' ;
import { Homework2BtnComponent } from './homework2-btn/homework2-btn.component';
import { Lesson0Component } from './lesson0/lesson0.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Jq1Component} from './jq1/jq1.component';
import { Lesson7Component } from './lesson7/lesson7.component' ;
import { BmiService } from './bmi.service';



@NgModule({
  declarations: [//寫Component的地方
    AppComponent, 
    Lesson1Component, 
    Lesson2Component, 
    Lesson3Component,
    Lesson4Component,
    Homework1Component,
    Lesson5Component,
    InputButtonComponent,
    Lesson6Component,
    HightlightDirective,
    Lesson61Component,
    Homework2Component,
    Homework2BtnComponent,
    Lesson0Component,
    DyclassComponent,
    Jq1Component,
    Lesson7Component,
    Pratice1Component
  ],
  imports: [ //寫Module的地方
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgPipesModule //別人寫的
    
  ],
  providers: [ //寫service的地方
    BmiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
