import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.css']
})
export class Lesson6Component implements OnInit {
  lesson6val:number;

  aaa(){
    console.log("test123");
  }

  bbb(){
    alert("test456");
  }

  ccc(){
    this.lesson6val;
  }


  constructor() { }

  ngOnInit() {
  }

}
