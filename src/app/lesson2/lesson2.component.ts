import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  show = false;
  showType = false;
  score = 60;

  @Input() abc = 100;

  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

  change(event:any){
    console.log(event);
    this.countChange.emit(event);

  }


  xxx(){ //false-> true; true ->false
    this.show = !this.show;
  }

  yyy(){
    this.showType = !this.showType;
  }

  constructor(private bmiService:BmiService) { }

  ngOnInit() {
    this.bmiService.pub_temp1 = 99;//修改公用的service變數
  }

}
