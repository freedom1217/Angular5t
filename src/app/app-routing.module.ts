
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Lesson6Component } from './lesson6/lesson6.component';
import { Pratice1Component } from './pratice1/pratice1.component';
import { Homework1Component } from './homework1/homework1.component';
import { Homework2Component } from './homework2/homework2.component';
import { DyclassComponent } from './dyclass/dyclass.component';
import { Lesson61Component } from './lesson6-1/lesson6-1.component';
import { Jq1Component } from './jq1/jq1.component';
import { Lesson7Component } from './lesson7/lesson7.component';

const routes: Routes = [
    {path:'', redirectTo:'lesson0',pathMatch:'full'}, //沒輸入網址時會導向
    {path:'lesson1',component:Lesson1Component},
    {path:'lesson2',component:Lesson2Component},
    {path:'lesson3',component:Lesson3Component},
    {path:'lesson4',component:Lesson4Component},
    {path:'lesson5',component:Lesson5Component},
    {path:'lesson6',component:Lesson6Component},
    {path:'lesson6-1',component:Lesson61Component},
    {path:'pratice1',component:Pratice1Component},
    {path:'homework1',component:Homework1Component},
    {path:'homework2',component:Homework2Component},
    {path:'dyclass', component:DyclassComponent},  
    {path:'dyclass/:number', component:DyclassComponent},  
    {path:'dyclass/:number/:number2', component:DyclassComponent},  
    {path:'jq1', component:Jq1Component},  
    {path:'lesson7', component:Lesson7Component},  
    {path:'**',component:Lesson3Component} //通常是error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

