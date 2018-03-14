
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';

const routes: Routes = [
    {path:'', redirectTo:'lesson1',pathMatch:'full'}, //沒輸入網址時會導向
    {path:'lesson1',component:Lesson1Component},
    {path:'lesson2',component:Lesson2Component},
    {path:'**',component:Lesson3Component} //通常是error page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

