import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {
  show = false;
  showType = false;
  score = 60;

  xxx(){ //false-> true; true ->false
    this.show = !this.show;
  }

  yyy(){
    this.showType = !this.showType;
  }

  constructor() { }

  ngOnInit() {
  }

}
