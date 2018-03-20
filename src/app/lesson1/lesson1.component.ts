import { Component, OnInit, Input } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  name = '1';
  r = '1'

 

  constructor(private bmiService:BmiService) { }

  ngOnInit() {
  }

}
