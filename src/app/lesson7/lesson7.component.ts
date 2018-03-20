import { Component, OnInit } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson7',
  templateUrl: './lesson7.component.html',
  styleUrls: ['./lesson7.component.css']
})
export class Lesson7Component implements OnInit {

  constructor(private bmiService:BmiService) {} //加service
  
  ngOnInit() {
  }


  calc(){
    console.log('calc work');
    let bmi = this.bmiService.calBMI(180,60);
    console.log(bmi)
  }
}
